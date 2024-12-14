import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { HomePage } from './home.page';
import { AvesAppService } from '../service/aves-app.service';
import { avesMock } from '../mocks/avesMock';


describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let service: AvesAppService;

  beforeEach(waitForAsync( () => {
    let avesAppServiceMock ={
      obtenerAves : jasmine.createSpy('obtenerAves').and.returnValue(of(avesMock))
    }
     TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()],
      providers:[{provider: AvesAppService , useValue: avesAppServiceMock}]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    service = TestBed.inject(AvesAppService);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debería cargar las aves desde local storage si están disponible', ()=>{
    localStorage.setItem('aves',JSON.stringify(avesMock));
    fixture.detectChanges();
    expect(component.aves).toEqual(avesMock);
  });

  it('Debería obtener las aves desde la APIs si no hay aves en el local storage', fakeAsync(()=>{
    localStorage.removeItem('aves')
    component.ngOnInit();
    tick();
    expect(component.aves).toEqual(avesMock);
    expect(service.obtenerAves).toHaveBeenCalled();
  }))
});
