import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AvesAppService } from './aves-app.service';
import { HttpClient } from '@angular/common/http';
import { Aves } from '../interface/aves';
import { avesMock } from '../mocks/avesMock';

describe('AvesAppService', () => {
  let service: AvesAppService;
  let httpClientSpy : jasmine.SpyObj<HttpClient>;
  let mock: Aves[];

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient',['get']);
    service= new AvesAppService(httpClientSpy);
    mock = avesMock;
    TestBed.configureTestingModule({});
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Debería obtener response', (done:DoneFn)=>{
    httpClientSpy.get.and.returnValue(of(mock));
    service.obtenerAves().subscribe({
      next: (aves)=>{
        expect(aves).toEqual(mock);
        expect(httpClientSpy.get.calls.count).toBe(1);
        done();
      }
    })
  })
});
