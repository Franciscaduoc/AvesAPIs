import { Observable, of } from "rxjs";
import { avesMock } from "./avesMock";
import { Aves } from "../interface/aves";


export const avesAppServiceMock :{
    obtenerAves: ()=> Observable<Aves[]>} =
    {obtenerAves: ()=> of(avesMock)}
