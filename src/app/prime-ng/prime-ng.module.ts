import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { CardModule }  from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel'




@NgModule({

  exports: [
    MenuModule,
    MenubarModule,
    CardModule,
    FieldsetModule,
    PanelModule
  ]
})

export class PrimeNgModule{}

