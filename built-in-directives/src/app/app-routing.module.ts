import {NgModule} from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';
import {IntroComponent} from "./intro/intro.component";
import {NgForExampleComponent} from "./ng-for-example/ng-for-example.component";
import {NgSwitchExampleComponent} from "./ng-switch-example/ng-switch-example.component";
import {NgNonBindableExampleComponent} from "./ng-non-bindable-example/ng-non-bindable-example.component";
import {NgClassExampleComponent} from './ng-class-example/ng-class-example.component';
import {NgStyleExampleComponent} from './ng-style-example/ng-style-example.component';

const routes: Routes = [
  {path: '', component: IntroComponent, pathMatch: 'full'},
  {path: 'ng_for', component: NgForExampleComponent, pathMatch: 'full'},
  {path: 'ng_switch', component: NgSwitchExampleComponent, pathMatch: 'full'},
  {path: 'ng_style', component: NgStyleExampleComponent, pathMatch: 'full'},
  {path: 'ng_class', component: NgClassExampleComponent, pathMatch: 'full'},
  {path: 'ng_non_bindable', component: NgNonBindableExampleComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
