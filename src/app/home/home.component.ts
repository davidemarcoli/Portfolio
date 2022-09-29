import { Component, OnInit } from '@angular/core';
// @ts-ignore
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let target = document.querySelector("#writer")

    const typewriter = new Typewriter(target, {
      loop: true,
      delay: 75,
    });

    typewriter
      .pauseFor(1000)
      .typeString('I\'m a')
      .pauseFor(250)
      .typeString('n <strong><span><a href="https://angular.io" style="text-decoration: none; color: rgba(255,50,50,1)">Angular</a></span></strong> Dev')
      .pauseFor(300)
      .deleteChars(14)
      .typeString(' <strong><span><a href="https://spring.io" style="text-decoration: none; color: darkgreen">Spring</a></span></strong> Dev')
      .pauseFor(300)
      .deleteChars(11)
      .typeString(' <strong><span style="color: darkviolet">Student</span></strong>')
      // .pauseFor(300)
      .deleteChars(13)
      .start();
  }

}
