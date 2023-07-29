import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrum',
  templateUrl: './breadcrum.component.html',
  styleUrls: ['./breadcrum.component.scss'],
})
export class BreadcrumComponent implements OnInit {
  @Input() title: string = '';
  @Input() titleButton: string = '';
  @Input() link: string = '';
  constructor() {}

  ngOnInit(): void {}
}
