import { Component } from '@angular/core';
import { AvesAppService } from '../service/aves-app.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  aves: any[]= [];

  constructor(private readonly service : AvesAppService) {};

  ngOnInit(): void{
    const listaAves = localStorage.getItem('aves');
    if(listaAves){
     this.aves = JSON.parse(listaAves);
     console.log('Aves desde local storage');
    }else{
      this.service.obtenerAves().subscribe((data:any[])=>{
        localStorage.setItem('aves', JSON.stringify(data));
        this.aves = data;
        console.log('Aves desde Api')
      })
    }
    
  };

}
