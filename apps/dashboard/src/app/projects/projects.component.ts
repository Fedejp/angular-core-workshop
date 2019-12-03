import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'workshop-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      id: '1',
      title: 'Project One',
      details: 'This is a sample project',
      percentComplete: 20,
      approved: false,
    },
    {
      id: '2',
      title: 'Project Two',
      details: 'This is a sample project',
      percentComplete: 40,
      approved: false,
    },
    {
      id: '3',
      title: 'Project Three',
      details: 'This is a sample project',
      percentComplete: 100,
      approved: true,
    }
  ];
  selectedProject; //declaracion
  constructor() { }

  ngOnInit() {
  }
  selectProject(project){
    this.selectedProject = project;
  }
  cancel(){
    this.selectProject(null); //Llama a la misma funcion de antes porque tambien muta el estado y segun Lukas es mejor hacerlo todo en un mismo lugar.
  }
}
