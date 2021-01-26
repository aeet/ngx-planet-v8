import {ApplicationRef, Component, DoCheck, EventEmitter, OnInit} from '@angular/core';
import {GlobalEventDispatcher} from "ngx-planet-v8";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less']
})
export class DemoComponent implements OnInit, DoCheck  {

  constructor(private applicationRef: ApplicationRef,
              private globalEventDispatcher: GlobalEventDispatcher,) {
  }
  click = new EventEmitter<any>();
  ngOnInit() {
  }

  ngDoCheck() {
    // this.applicationRef.tick();
  }

}
