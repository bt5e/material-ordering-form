import {Component, OnInit} from '@angular/core';
import {Project} from "../../models/project";
import {ActivatedRoute} from "@angular/router";
import {ProjectService} from "../../services/project.service";

@Component({
  selector: 'app-project-order-form',
  templateUrl: './project-order-form.component.html',
  styleUrls: ['./project-order-form.component.css']
})
export class ProjectOrderFormComponent implements OnInit {
  project: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService) {
  }

  ngOnInit() {
    this.getProject();
  }

  getProject(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id)
      .subscribe(project => this.project = project);
  }
}
