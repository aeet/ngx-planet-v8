/*
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @Date: 2021-01-22 10:24:11
 * @LastEditTime: 2021-01-22 10:59:40
 * @LastEditors: ferried
 * @Description: Basic description
 * @FilePath: /ngx-planet-v8-parent/example/app1/src/main.ts
 * @LICENSE: Apache-2.0
 */
import { enableProdMode, NgModuleRef, Type, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { PlanetPortalApplication, defineApplication } from 'ngx-planet-v8';

if (environment.production) {
  enableProdMode();
}

defineApplication('app1', {
  template: `<app1-root class="app1-root"></app1-root>`,
  bootstrap: (portalApp: PlanetPortalApplication) => {
    return platformBrowserDynamic([
      {
        provide: PlanetPortalApplication,
        useValue: portalApp
      },
    ])
      .bootstrapModule(AppModule)
      .then(appModule => {
        return appModule;
      })
      .catch(error => {
        console.error(error);
        return null;
      });
  }
});
