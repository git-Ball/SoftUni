import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserService } from './user.service';
import { ThemeService } from './theme.service';
import { storageServiceProvider } from './storage.service';
import { PostService } from './post.service';
import { RouterModule } from '@angular/router';

// import { WelcomeComponent } from '../shared/welcome/welcome.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // HeaderComponent,
    // FooterComponent,

  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: []
})
export class CoreModule {
  static forRoot():ModuleWithProviders <CoreModule>{
    return {
      ngModule:CoreModule,
      providers: [
        UserService,
        ThemeService,
        storageServiceProvider,
        PostService,
        ]
    }
  }
 }
