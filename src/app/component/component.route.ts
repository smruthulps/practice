import { ProfileComponent } from './profile/profile.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
const route:Routes=[
    {
        path:"",
        component:ProfileComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule]

})
export class ComponentRoute{}