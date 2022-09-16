import {Component, OnInit} from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  ngOnInit() {
    let target = document.querySelector("#writer")
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'white'
    })

    writer
      .type('I\'m a')
      .changeOps({ deleteSpeed: 50 })
      .type('n Angular Dev')
      .rest(750)
      .remove(13)
      .type(' Spring Dev')
      .rest(750)
      .remove(10)
      .type('Student')
      .rest(750)
      .remove(13)
      .clear()
      .start()
  }
}
