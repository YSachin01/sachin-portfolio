import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { TrimStringPipe } from './pipes/trim-string.pipe';


@NgModule({
  declarations: [
    PortfolioComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    ContactComponent,
    TrimStringPipe
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortfolioModule { }
