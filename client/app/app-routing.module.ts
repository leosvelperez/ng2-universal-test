import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { DumbComponent } from "./dumb/dumb.component";

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: '', redirectTo: '/home', pathMatch: 'full' },
			{ path: 'home', component: HomeComponent },
			{ path: 'dumb', component: DumbComponent }
		])
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
