import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PlanetComponentLoader} from "ngx-planet-v8";
import {Observable} from "rxjs";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {
  @ViewChild('container', { static: true }) elementRef: ElementRef<HTMLDivElement>;


  constructor(private planetComponentLoader: PlanetComponentLoader) {}

  ngOnInit() {
    this.planetComponentLoader
      .load<{ click: Observable<unknown> }>('app2', 'project1', {
        container: this.elementRef
      })
      .subscribe(componentRef => {
        componentRef.componentInstance.click.subscribe(() => {
          console.log('project item clicked');
        });
      });
  }

}
