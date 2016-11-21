import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	template: `<div id="searchDiv">
					<form class="form-horizontal">
					  <fieldset class="center">
					    <legend class="center">Enter Git User Name</legend>
					    <label class="control-group">Search</label>
					    <input type="text" class="input-medium search-query" [(ngModel)]="searchData" name="data">
					    <button type="submit" class="btn btn-default" (click)="onSearch()">Submit</button>
					  </fieldset>
				</form>
				</div>`,
	styleUrls: ["./app/search/search.css"]


})

export class SearchComponent{
	public searchData: string;

	constructor(private _router: Router){}
	onSearch(){
		this._router.navigate(['/viewProfile', {'data': this.searchData}]);
	}

}