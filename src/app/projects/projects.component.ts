import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getCurrentUrl(): string {
    return location.origin;
  }

  getRandomDuration(): number {
    const min = 0.5;
    const max = 2;
    return Math.random() * (max - min) + min;
  }
}
