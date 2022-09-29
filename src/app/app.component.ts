import {Component, OnInit} from '@angular/core';
// @ts-ignore
import AOS from "aos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  ngOnInit() {
    AOS.init();
  }
}
