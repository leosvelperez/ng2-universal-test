import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule, isBrowser, isNode } from 'angular2-universal/node';

import { AppComponent } from '../client/app/app.component';
import { AppModule } from '../client/app/app.module';

// Will be merged into @angular/platform-browser in a later release
// see https://github.com/angular/angular/pull/12322
import { Meta } from './angular2-meta';

export function getLRU() {
	return new Map();
}
export function getRequest() {
	return Zone.current.get('req') || {};
}
export function getResponse() {
	return Zone.current.get('res') || {};
}

@NgModule({
	imports: [
		UniversalModule,
    	RouterModule.forRoot([], { useHash: false }),
		AppModule
	],
	bootstrap: [AppComponent],
	providers: [
		{ provide: 'isBrowser', useValue: isBrowser },
		{ provide: 'isNode', useValue: isNode },

		{ provide: 'req', useFactory: getRequest },
		{ provide: 'res', useFactory: getResponse },

		{ provide: 'LRU', useFactory: getLRU, deps: [] },

		Meta
	]
})
export class NodeModule { }
