import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
  }

  getCurrentUrl(): string {
    if (isPlatformBrowser(this.platformId)) {
      return location.origin;
    } else {
      return 'https://davidemarcoli.de';
    }
  }

  getRandomDuration(): number {
    const min = 0.5;
    const max = 2;
    return Math.random() * (max - min) + min;
  }
}
