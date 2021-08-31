import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile.component';
import { IntroComponent } from './intro/intro.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';


@NgModule({
  declarations: [HeaderComponent,ContactComponent, AboutComponent, ProjectsComponent, ProfileComponent, IntroComponent, EducationComponent, ExperienceComponent],
  imports: [
    CommonModule,
    SnotifyModule,
    FormsModule,
    ReactiveFormsModule,

  ],
exports:[HeaderComponent, ContactComponent, AboutComponent, ProjectsComponent, ProfileComponent, IntroComponent, EducationComponent],
providers: [
  { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
  SnotifyService,
]
})
export class ProfileModule { }
