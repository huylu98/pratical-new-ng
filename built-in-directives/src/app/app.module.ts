import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from "@angular/common";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IntroComponent} from './intro/intro.component';
import {NgClassExampleComponent} from './ng-class-example/ng-class-example.component';
import {NgForExampleComponent} from './ng-for-example/ng-for-example.component';
import {NgNonBindableExampleComponent} from './ng-non-bindable-example/ng-non-bindable-example.component';
import {NgStyleExampleComponent} from './ng-style-example/ng-style-example.component';
import {NgSwitchExampleComponent} from './ng-switch-example/ng-switch-example.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {SidebarItemComponent} from './sidebar-item/sidebar-item.component';

import {ExampleDef} from "./example.model";

/*
 * Here's the master list of our examples for this chapter.
 */
export const examples: ExampleDef[] = [
  {label: 'Intro', name: 'Root', path: '', component: IntroComponent},
  {label: 'NgFor', name: 'NgFor', path: 'ng_for', component: NgForExampleComponent},
  {label: 'NgSwitch', name: 'NgSwitch', path: 'ng_switch', component: NgSwitchExampleComponent},
  {label: 'NgStyle', name: 'NgStyle', path: 'ng_style', component: NgStyleExampleComponent},
  {label: 'NgClass', name: 'NgClass', path: 'ng_class', component: NgClassExampleComponent},
  {label: 'NgNonBindable', name: 'NgNonBindable', path: 'ng_non_bindable', component: NgNonBindableExampleComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    NgClassExampleComponent,
    NgForExampleComponent,
    NgNonBindableExampleComponent,
    NgStyleExampleComponent,
    NgSwitchExampleComponent,
    SidebarComponent,
    SidebarItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: 'ExampleDefs', useValue: examples}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
