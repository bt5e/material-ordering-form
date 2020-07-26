import {Injectable} from '@angular/core';
import {Project} from '../models/project';
import {PROJECTS} from '../data/mock-projects';
import {Observable, of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() {
  }

  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }

  getProject(id: string): Observable<Project> {
    let foundProject = PROJECTS.find(project => project.id === id);
    if (foundProject)
      return of(foundProject);
    else
      return throwError(new Error(`ProjectService: project id=${id} not found`));
  }
}
