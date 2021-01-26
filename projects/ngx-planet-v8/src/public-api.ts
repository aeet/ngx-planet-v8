/*
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @Date: 2021-01-22 10:17:52
 * @LastEditTime: 2021-01-26 15:07:32
 * @LastEditors: ferried
 * @Description: Basic description
 * @FilePath: /ngx-planet-v8-parent/projects/ngx-planet-v8/src/public-api.ts
 * @LICENSE: Apache-2.0
 */
/*
 * Public API Surface of core
 */

export * from './planet';
export * from './global-event-dispatcher';
export * from './application/portal-application';
export * from './planet.class';
export * from './module';
export { PlanetApplicationRef } from './application/planet-application-ref';
export { defineApplication, getPortalApplicationData, getPlanetApplicationRef } from './global-planet';
export { PlanetApplicationService } from './application/planet-application.service';
export { PlanetComponentService } from './component/planet-component-service';
export * from './application/planet-application-loader';
export * from './assets-loader';
export { PlanetComponent, PlanetComponentLoader } from './component/planet-component-loader';
export { PlanetComponentRef } from './component/planet-component-ref';
export { PlantComponentConfig } from './component/plant-component.config';
export * from './empty/empty.component';
