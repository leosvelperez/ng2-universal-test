import { NgModule } from '@angular/core';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';

@NgModule({
	imports: [AppRoutingModule],
	declarations: [AppComponent, HomeComponent, ResultComponent]
})
export class AppModule { }

export { AppComponent } from './app.component';
