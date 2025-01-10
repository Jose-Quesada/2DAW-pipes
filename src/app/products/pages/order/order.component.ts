import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'pages-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit{

  items: MenuItem[] | undefined;

  public isUpperCase: boolean = false;

  public heroes: Hero [] = [
    {
    name: 'Superman',
    canFly: true,
    color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Robbin',
      canFly: false,
      color: Color.green,
    },
    {
      name: 'Linterna verde',
      canFly: true,
      color: Color.green,
    },
]




  ngOnInit(): void {
      this.items = [
          {
              label: 'Update',
              icon: 'pi pi-refresh'
          },
          {
              label: 'Delete',
              icon: 'pi pi-times'
          }
      ];
  }

  toggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }


}
