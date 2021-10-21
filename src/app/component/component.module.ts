import { MaterialModule } from './../shared/modules/material/material.module';
import { ComponentRoute } from './component.route';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { WorkexperianceComponent } from './workexperiance/workexperiance.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationdetailsComponent } from './educationdetails/educationdetails.component';
import { ObjectiveComponent } from './objective/objective.component';
import { LanguagesComponent } from './languages/languages.component';
import { InterestsComponent } from './interests/interests.component';



@NgModule({
  declarations: [
    ProfileComponent,
    HeaderComponent,
    WorkexperianceComponent,
    SkillsComponent,
    EducationdetailsComponent,
    ObjectiveComponent,
    LanguagesComponent,
    InterestsComponent
  ],
  imports: [
    CommonModule,ComponentRoute,MaterialModule
  ]
})
export class ComponentModule { }
