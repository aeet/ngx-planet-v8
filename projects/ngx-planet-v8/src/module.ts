/*
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @Date: 2021-01-22 10:17:52
 * @LastEditTime: 2021-01-22 10:18:15
 * @LastEditors: ferried
 * @Description: Basic description
 * @FilePath: /ngx-planet-v8-parent/projects/ngx-planet-v8/src/module.ts
 * @LICENSE: Apache-2.0
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { PlanetApplication, PLANET_APPLICATIONS } from './planet.class';
import { HttpClientModule } from '@angular/common/http';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
    declarations: [EmptyComponent],
    entryComponents: [EmptyComponent],
    imports: [HttpClientModule],
    providers: [],
    exports: [HttpClientModule, EmptyComponent]
})
export class NgxPlanetV8Module {
    static forRoot(apps: PlanetApplication[]): ModuleWithProviders<NgxPlanetV8Module> {
        return {
            ngModule: NgxPlanetV8Module,
            providers: [
                {
                    provide: PLANET_APPLICATIONS,
                    useValue: apps
                }
            ]
        };
    }
}
