/*
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @Date: 2021-01-26 13:56:17
 * @LastEditTime: 2021-01-26 14:42:37
 * @LastEditors: ferried
 * @Description: Basic description
 * @FilePath: /ngx-planet-v8-parent/projects/ngx-planet-v8/src/component/planet-component-service.ts
 * @LICENSE: Apache-2.0
 */

import { Injectable } from "@angular/core";
import { getComponentService } from "../global-planet";
import { coerceArray } from "../helpers";
import { PlanetComponent } from "./planet-component-loader";

@Injectable({
    providedIn: 'root'
})
export class PlanetComponentService {

    private componentsMap: { [key: string]: { [key: string]: PlanetComponent } } = {}

    constructor() {
        if (getComponentService()) {
            throw new Error(
                'PlanetComponentService has been injected in the portal, repeated injection is not allowed'
            );
        }
    }


    recording(moduleName: string, components: PlanetComponent | PlanetComponent[]): void {
        components = coerceArray(components)
        components.forEach((c) => {
            console.log(c)
            if (!this.componentsMap[moduleName]) {
                this.componentsMap[moduleName] = {}
            }
            if (this.componentsMap[moduleName] && !this.componentsMap[moduleName][c.name]) {
                this.componentsMap[moduleName][c.name] = c
            } else {
                throw new Error(`${c.name} was registed`)
            }

        })
    }

    get registedComponents() { return this.componentsMap }
}