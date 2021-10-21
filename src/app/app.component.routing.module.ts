import { LandingComponent } from './component/landing/landing.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
const route:Routes=[{
path:"",component: LandingComponent,
},
{
    path:"profile",
    loadChildren:()=>import ('./component/component.module').then(m=> m.ComponentModule)
}
]

@NgModule({
    imports:[RouterModule.forRoot(route)],
    exports:[RouterModule]
})
export class approuteModule{};