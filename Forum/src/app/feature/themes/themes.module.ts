import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { AsideComponent } from './aside/aside.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { ThemesPageComponent } from './themes-page/themes-page.component';
import { ThemesRoutingModule } from './themes-routing.module';
import { WelcomeComponent } from 'src/app/shared/welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThemesDetailPageComponent } from './themes-detail-page/themes-detail-page.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    ThemeListComponent,
    AsideComponent,
    ThemeListItemComponent,
    PostListComponent,
    ThemesPageComponent,
    NewThemeComponent,
    ThemesDetailPageComponent,
    

  ],
  imports: [
    CommonModule,
    SharedModule,
    ThemesRoutingModule,
    MatProgressSpinnerModule
  ],
  exports:[  

  ]

})
export class ThemesModule { }
