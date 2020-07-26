import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Project} from "../../models/project";
import {MessageService} from "../../services/message.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  selectedProject: Project;

  constructor(
    private projectService: ProjectService,
    private messageService: MessageService
  ) {
  }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

  onSelect(project: Project): void {
    this.selectedProject = project;
    this.messageService.add(`ProjectsComponent: Selected project id=${project.id}`);
  }
}
