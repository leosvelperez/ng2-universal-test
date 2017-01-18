import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule, isBrowser, isNode } from 'angular2-universal/browser'; // for AoT we need to manually split universal packages

import { AppComponent, AppModule } from "./app.module";

// Will be merged into @angular/platform-browser in a later release
// see https://github.com/angular/angular/pull/12322
import { Meta } from '../angular2-meta';

@NgModule({
	bootstrap: [AppComponent],
	imports: [
		RouterModule.forRoot([], { useHash: false }),
		AppModule,
		UniversalModule // BrowserModule, HttpModule, and JsonpModule are included,
	],
	providers: [
		{ provide: 'isBrowser', useValue: isBrowser },
		{ provide: 'isNode', useValue: isNode },
		Meta
	]
})
export class MainModule { }
