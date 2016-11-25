import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ResultComponent } from "./result/result.component";

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: '', redirectTo: '/home', pathMatch: 'full' },
			{ path: 'home', component: HomeComponent },
			{ path: 'result', component: ResultComponent }
		])
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
