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
  title = 'portal';

  get loadingDone() {
    return this.planet.loadingDone;
}

  constructor(private planet: Planet) { }
  ngOnInit(): void {
    const appHostClass = 'thy-layout';
    this.planet.registerApps([
      {
        name: 'app1',
        hostParent: '#app-host-container',
        hostClass: appHostClass,
        routerPathPrefix: /\/app1|app4/, // '/app1',
        resourcePathPrefix: '/static/app1/',
        preload: false,
        switchMode: SwitchModes.coexist,
        loadSerial: true,
        stylePrefix: 'app1',
        // prettier-ignore
        scripts: [
          'main.js',
          // 'polyfills.js'
        ],
        styles: ['styles.css'],
        manifest: '/static/app1/manifest.json',
        extra: {
          name: '应用1',
          color: '#ffa415'
        }
      },
      {
        name: 'app2',
        hostParent: '#app-host-container',
        hostClass: appHostClass,
        routerPathPrefix: '/app2',
        resourcePathPrefix: '/static/app2/',
        preload: false,
        switchMode: SwitchModes.coexist,
        stylePrefix: 'app2',
        // prettier-ignore
        scripts: [
          'main.js'
        ],
        styles: ['styles.css'],
        manifest: '/static/app2/manifest.json',
        extra: {
          name: '应用2',
          color: '#66c060'
        }
      }
    ]);
    this.planet.start();
  }
}
