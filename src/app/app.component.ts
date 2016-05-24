/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig, Router } from '@angular/router-deprecated';
import { Devtools } from '@ngrx/devtools';
import { AppState } from './app.service';
import { Home } from './home';
import { RouterActive } from './router-active';
import { CatalogComponent } from './catalog';
import { NewQuestionComponent } from './newquestion';
import {BoardComponent} from './board/board.component';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ RouterActive,Devtools ],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('normalize.css'),
    require('./app.css')
  ],
  template: `
     <md-content>
      <md-toolbar color="primary">
          <span>{{ name }}</span>
          <span class="fill"></span>
         
          <button md-button router-active [routerLink]=" ['Board'] ">
            Board
          </button>
          
          <button md-button router-active [routerLink]=" ['NewQuestion'] ">
            New Question
          </button>
   
        
      </md-toolbar>
      <md-progress-bar mode="indeterminate" color="primary" *ngIf="loading"></md-progress-bar>
      <router-outlet></router-outlet>
     
      </md-content>
  `
})
@RouteConfig([
  { path: '/',      name: 'Index', component: BoardComponent, useAsDefault: true },
  { path: '/home',  name: 'Home',  component: Home },
  { path: '/catalog',  name: 'Catalog',  component: CatalogComponent },
  { path: '/new',  name: 'NewQuestion',  component: NewQuestionComponent },
  { path: '/board',  name: 'Board',  component: BoardComponent },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') }
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  loading = false;
  name = 'Angular 2 Question Board';
  url = 'https://codetutorial.io';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
