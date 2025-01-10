import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {


   // i18n Select
   public name: string = 'Fernando III';
   public gender: 'male' | 'female' = 'male';

   public invitationMap = {
    'male': 'invitarlo',
    'female' : 'invitarla'
  }


   changeClient():void{
    this.name = 'Fernanda'
    this.gender = 'female'
   }

    // i18nPlural
  public alumnos: string[] = ['Alejandro', 'María', 'Dani', 'Gabi', 'Merche', 'Jesús', 'Ismael', 'Alex', 'José Manuel', 'Adrián', 'Rubén']

  public alumnosMap = {
    '=0': 'no tenemos alumnos enmallados',
    '=1': 'tenemos al último alumno con ansias de churros',
    '=2': 'tenemos 2 o más alumnos con ganas de churros',
    'other': 'tenemos # alumnos con ganas de churros'
  }


  deleteAlumno(){
    this.alumnos.pop();
  }

    // KeyValue Pipe
    public profesor = {
      name: 'Luis',
      age: '55',
      address: 'Martos, Jaén'
    }

    // Async Pipe
    public myObservableTimer = interval(2000).pipe(
      tap(value => console.log('tap:', value)
      )
    );
  ;
  public promiseValue: Promise<string> = new Promise ( (resolve, reject) => {
    setTimeout(() =>{
      resolve ('Tenemos valor en la promesa');
      console.log('Tenemos valor en la promesa');
    }, 3500);
  })



}
