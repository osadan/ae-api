import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'custom-api-comp',
  template: `
    <p>
      api-comp works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class ApiCompComponent implements OnInit {

  constructor(public workerService: WorkerService) { }

  ngOnInit() {
    this.workerService.sendRequest('hello',[1,2]);
  }

}
