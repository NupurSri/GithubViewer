import { Component } from '@angular/core';

@Component({
	selector: '<header-comp></header-comp>',
	template: `<div>
				<ul class="nav nav-pills">
					<li role="presentation"><a routerLink="/home">Search</a></li>
				  	<li role="presentation" class="active"><a routerLink="/viewProfile">Profile</a></li>
				</ul>
				</div>`
})

export class HeaderComponent{

}