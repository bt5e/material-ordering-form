import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectsComponent} from "./components/projects/projects.component";
import {ProjectOrderFormComponent} from "./components/project-order-form/project-order-form.component";


const routes: Routes = [
  {path: '', component: ProjectsComponent},
  {path: 'project/:id', component: ProjectOrderFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
