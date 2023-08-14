import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { ServiceComponent } from './service/service.component';
import { QualificationComponent } from './qualification/qualification.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';
import { TestimonialComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    SkillComponent,
    ServiceComponent,
    QualificationComponent,
    PortfolioComponent,
    ProjectComponent,
    TestimonialComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    SkillComponent,
    ServiceComponent,
    QualificationComponent,
    PortfolioComponent,
    ProjectComponent,
    TestimonialComponent,
    ContactComponent
  ]
})
export class PagesModule { }
