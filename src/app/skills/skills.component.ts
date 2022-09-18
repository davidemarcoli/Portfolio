import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  readonly learnedSkills: {name: string, backgroundColor: string, link: string, imageUrl: string, darkTextColor?: boolean}[] = [
    {name: 'Angular', backgroundColor: '#dd1b16', imageUrl: "https://angular.io/assets/images/logos/angular/angular.svg", link: 'https://angular.io/'},
    {name: 'TypeScript', backgroundColor: '#007acc', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg", link: 'https://www.typescriptlang.org/'},
    {name: 'JavaScript', backgroundColor: '#f7df1e', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg", link: 'https://www.javascript.com/'},
    {name: 'HTML', backgroundColor: '#e34c26', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'},
    {name: 'CSS', backgroundColor: '#1572b6', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'},
    {name: 'Java', backgroundColor: '#007396', imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png", link: 'https://www.java.com/en/'},
    {name: 'Python', backgroundColor: '#3776ab', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", link: 'https://www.python.org/'},
    {name: 'C', backgroundColor: '#a8b9cc', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg", link: 'https://en.wikipedia.org/wiki/C_(programming_language)', darkTextColor: true},
    {name: 'SQL', backgroundColor: '#4479a1', imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/1920px-MySQL_logo.svg.png", link: 'https://www.mysql.com/'},
    {name: 'Git', backgroundColor: '#f05032', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png", link: 'https://git-scm.com/'},
    {name: "Docker", backgroundColor: '#2496ed', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/1200px-Docker_%28container_engine%29_logo.svg.png", link: 'https://www.docker.com/'},
    {name: 'Linux', backgroundColor: '#fcc624', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png", link: 'https://www.linux.org/'},

  ]

  constructor() {
  }

  ngOnInit(): void {
    // // collect all the divs
    // const divs = document.getElementsByClassName('skill');
    // // get window width and height
    // const winWidth = window.innerWidth * 0.75;
    // const winHeight = window.innerHeight * 0.75;
    //
    // console.log('winWidth: ' + winWidth);
    // console.log('winHeight: ' + winHeight);
    //
    // // i stands for "index". you could also call this banana or haircut. it's a variable
    // for (let i = 0; i < divs.length; i++) {
    //
    //   // shortcut! the current div in the list
    //   const thisDiv = divs[i];
    //
    //   // get random numbers for each element
    //   const randomTop = getRandomNumber(0, winHeight);
    //   const randomLeft = getRandomNumber(0, winWidth);
    //
    //   console.log('randomTop: ' + randomTop);
    //   console.log('randomLeft: ' + randomLeft);
    //
    //
    //   // update top and left position
    //   // @ts-ignore
    //   thisDiv.style.top = randomTop + "px";
    //   // @ts-ignore
    //   thisDiv.style.left = randomLeft + "px";
    // }
    //
    // // function that returns a random number between a min and max
    // function getRandomNumber(min: number, max: number) {
    //   return Math.random() * (max - min) + min;
    // }

  }
}
