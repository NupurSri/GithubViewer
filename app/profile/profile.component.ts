import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GitService } from './git.service';
import { HeaderComponent } from './header.component';
import { GitUser } from './gitUser';

@Component({
	templateUrl: './app/profile/view/profile.html',
	styleUrls: ["./app/profile/css/profile.css"],
	providers: [GitService]

})

export class ProfileComponent implements OnInit{

public searchData:string;
userData: Object = {};
public login: string;
public avatarUrl:string;
public name: string;
public company:string;
public followersCount:number;
public followingCount: number;
public repoCount: number;
public location:string;
public error: any;
public isProperObj:boolean;



constructor(private _route: Router, private _routeParam: ActivatedRoute, private _gitService: GitService){}

ngOnInit(): any{
			
		this._routeParam.params.subscribe(param => {
			this.searchData = param['data'];
		});
		
		this._gitService.getUserDetails(this.searchData)
			.subscribe(res => {this.init(res)},err => {this.error = err;
				this.login = '';
				this.name = '';
				this.company = '';
				this.followersCount = 0;
				this.followingCount = 0;
				this.repoCount = 0; 
				this.avatarUrl = '';
				this.location = '';
        });
}

init(res):any{
	this.userData = res;
	this.login = res.login;
	this.name = res.name;
	this.company = res.company;
	this.followersCount = res.followers;
	this.followingCount = res.following;
	this.repoCount = res.public_repos; 
	this.avatarUrl = res.avatar_url;
	this.location = res.location;
	//this.isProperObj = Object.getOwnPropertyNames(this.userData).length === 0;
}

	viewFollowers(){
			this._route.navigate(['/followerList', {'login': this.login, 'name':this.name, 'company':this.company, 'followersCount':this.followersCount, 'followingCount':this.followingCount, 'reposCount':this.repoCount, 'location':this.location, 'avatar_url':this.avatarUrl}]);
	}
	viewFollowings(){
			this._route.navigate(['/followingList', {'login': this.login, 'name':this.name, 'company':this.company, 'followersCount':this.followersCount, 'followingCount':this.followingCount, 'reposCount':this.repoCount, 'location':this.location, 'avatar_url':this.avatarUrl}]);
	}
	viewRepos(){
		this._route.navigate(['/repoList', {'login': this.login, 'name':this.name, 'company':this.company, 'followersCount':this.followersCount, 'followingCount':this.followingCount, 'reposCount':this.repoCount, 'location':this.location, 'avatar_url':this.avatarUrl}]);
	}
}
