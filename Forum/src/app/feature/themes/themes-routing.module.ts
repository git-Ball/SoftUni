import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/auth.guard";

import { NewThemeComponent } from "./new-theme/new-theme.component";
import { ThemesDetailPageComponent } from "./themes-detail-page/themes-detail-page.component";
import { ThemesPageComponent } from "./themes-page/themes-page.component";



const routes:Routes = [{
path:'themes',
component:ThemesPageComponent
},
{
    path:'themes/new',
    canActivate:[AuthGuard],
    component:NewThemeComponent
},
{
    path:'themes/:themeId',component:ThemesDetailPageComponent
},
]
export const ThemesRoutingModule = RouterModule.forChild(routes)