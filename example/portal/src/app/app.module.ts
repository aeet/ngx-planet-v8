/*
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @Date: 2021-01-22 10:27:38
 * @LastEditTime: 2021-01-22 10:55:47
 * @LastEditors: ferried
 * @Description: Basic description
 * @FilePath: /ngx-planet-v8-parent/example/portal/src/app/app.module.ts
 * @LICENSE: Apache-2.0
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPlanetV8Module } from 'ngx-planet-v8';
import {Overlay} from "@angular/cdk/overlay";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    NgxPlanetV8Module,
  ],
  providers: [ { provide: Overlay }],
  bootstrap: [AppComponent]
})
export class AppModule { }
