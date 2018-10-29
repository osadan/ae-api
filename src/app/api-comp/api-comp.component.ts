import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'api-comp',
  template: `
    <p>
      api-comp works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class ApiCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
