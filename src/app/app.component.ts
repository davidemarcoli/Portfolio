import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
// @ts-ignore
import AOS from "aos";
import {Meta, Title} from "@angular/platform-browser";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  constructor(private metaService: Meta, private titleService: Title, @Inject(PLATFORM_ID) private platformId: Object) {
    this.titleService.setTitle('Davide Marcoli\'s Portfolio');
    this.metaService.addTags([
      {name: 'author', content: 'Davide Marcoli'},
      {name: 'keywords', content: 'Angular, Spring, Portfolio, Student, Davide, Marcoli'},
      {name: 'description', content: 'Portfolio of Davide Marcoli'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'date', content: '2022-02-10', scheme: 'YYYY-MM-DD'},
      {charset: 'UTF-8'},
    ]);
  }

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    AOS.init();
  }
}
