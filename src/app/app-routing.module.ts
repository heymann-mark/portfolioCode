import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent} from './profile/about/about.component';
import { ProjectsComponent} from './profile/projects/projects.component';
import { ContactComponent} from './profile/contact/contact.component';
import { ProfileComponent} from './profile/profile.component';
const routes: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'about', component: AboutComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'contact', component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
