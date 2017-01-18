import { NgModule } from '@angular/core';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DumbComponent } from './dumb/dumb.component';

@NgModule({
	imports: [AppRoutingModule],
	declarations: [AppComponent, HomeComponent, DumbComponent]
})
export class AppModule { }

export { AppComponent } from './app.component';
