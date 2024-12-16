import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower:string = 'ferandoiii';
  public nameUpper:string = 'FERNANDOIII';
  public fullName:string = 'fErNaN dOiIi';

  public customDate:Date = new Date();

}
