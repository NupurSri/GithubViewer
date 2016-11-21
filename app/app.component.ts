import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `<div>
				<h1 class="center"> GitHub Viewer </h1>
				<router-outlet></router-outlet>
				</div>`,
	styles: [`
		.center{
			text-align: center;
		}
		
	`]
})

export class AppComponent{}