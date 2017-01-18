import { Component, HostListener } from "@angular/core";
import { isBrowser } from "angular2-universal";

@Component({
	selector: "home",
	template: `
		Home Component
		<div class="block" [style.height]="elementHeight"></div>
	`,
	styles: [`
		.block { display: block; height: 300px; background-color: red; }
	`]
})
export class HomeComponent {
	elementHeight: string;

	constructor() {
		if (isBrowser) {
			let url = window.location.href;
			this.handleResize();
			console.log(url);
		}
	}

	@HostListener("window:resize")
	handleResize() {
		let browserHeight = document.documentElement.clientHeight;
		this.elementHeight = `${browserHeight / 2}px`;
	}
}
