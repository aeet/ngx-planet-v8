import {Component, OnInit} from '@angular/core';
import {PlanetComponentLoader} from "ngx-planet-v8";
import {DemoComponent} from "./demo/demo.component";

@Component({
  selector: 'app2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'app2';
  constructor(private planetComponentLoader: PlanetComponentLoader) {}

  ngOnInit() {
    this.planetComponentLoader.register([{ name: 'project1', component: DemoComponent }]);
  }
}
