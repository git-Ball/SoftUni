import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./feature/pages/home-page/home-page.component";
import { NotfoundPageComponent } from "./feature/pages/notfound-page/notfound-page.component";

const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'home'
    },
    {
        path:'home',
        component: HomePageComponent
    },
    {
        path:'**',component:NotfoundPageComponent
    }

];
export const AppRoutingModule = RouterModule.forRoot(routes)