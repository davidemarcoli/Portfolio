import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {

  @Input() type: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" = "primary";

  constructor() { }

  ngOnInit(): void {}

}
