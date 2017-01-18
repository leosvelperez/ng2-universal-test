import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
  		<h1>Hello {{name}}</h1>
		<nav>
			<ul>
				<li><a routerLink="/home">Home</a></li>
				<li><a routerLink="/dumb">Dumb Page</a></li>
			</ul>
		</nav>
		<router-outlet></router-outlet>
  	`,
})
export class AppComponent { name = 'Angular'; }
