import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
// import { ThemeListComponent } from './theme-list/theme-list.component';
// import { AsideComponent } from './feature/themes/aside/aside.component';
// import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
// import { UserService } from './user.service';
// import { storageServiceProvider } from './storage.service';
// import { ThemeService } from './theme.service';
// import { PostService } from './post.service';
// import { PostListComponent } from './feature/post-list/post-list.component';
import { CoreModule } from './core/core.module';
import { ThemesModule } from './feature/themes/themes.module';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './feature/pages/home-page/home-page.component';
import { AppRoutingModule } from './app.routing.module';
import { PagesModule } from './feature/pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { ThemesRoutingModule } from './feature/themes/themes-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,

    
    
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule.forRoot(),
    AppRoutingModule,
    ThemesModule,
    RouterModule,
    PagesModule,
    AuthModule,
    BrowserAnimationsModule,
    // PagesModule
 
  ],
  providers: [
    
 
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppModule { }
