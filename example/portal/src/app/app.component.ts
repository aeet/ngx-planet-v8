/*
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @Date: 2021-01-22 10:27:38
 * @LastEditTime: 2021-01-22 10:54:44
 * @LastEditors: ferried
 * @Description: Basic description
 * @FilePath: /ngx-planet-v8-parent/example/portal/src/app/app.component.ts
 * @LICENSE: Apache-2.0
 */
import { Component, OnInit } from '@angular/core';
import { Planet, SwitchModes } from 'ngx-planet-v8';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  get loadingDone() {
    return this.planet.loadingDone;
  }

  constructor(private planet: Planet) {
  }

  ngOnInit() {
    this.planet.setOptions({
      switchMode: SwitchModes.coexist,
      errorHandler: error => {
        console.error(`Failed to load resource, error:`, error);
      }
    });

    this.planet.registerApps([
      {
        name: 'app1',
        hostParent: '#app-host-container',
        hostClass: 'thy-layout',
        routerPathPrefix: '/app1',
        stylePrefix: 'app1',
        resourcePathPrefix: '/static/app1/',
        loadSerial: true,
        preload: true,
        scripts: [
          'main.js'
        ],
        styles: [
          'styles.css'
        ],
        manifest: '/static/app1/manifest.json',
      },
      {
        name: 'app2',
        hostParent: '#app-host-container',
        hostClass: 'thy-layout',
        routerPathPrefix: '/app2',
        stylePrefix: 'app2',
        resourcePathPrefix: '/static/app2/',
        loadSerial: true,
        preload: true,
        scripts: [
          'main.js'
        ],
        styles: [
          'styles.css'
        ],
        manifest: '/static/app1/manifest.json',
      }
    ]);

    // start monitor route changes
    // get apps to active by current path
    // load static resources which contains javascript and css
    // bootstrap angular sub app module and show it
    this.planet.start();
    console.log(this.planet.getApps());

  }
}

