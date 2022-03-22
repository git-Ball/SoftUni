import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThemesPageComponent } from '../themes/themes-page/themes-page.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    HomePageComponent,
    NotfoundPageComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
    

  ]
})
export class PagesModule { }
