import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { GitService } from './git.service';
import { HeaderComponent } from './header.component';
import { GitUser } from './gitUser';

@Component({
	templateUrl: './app/profile/view/follower.html',
	styleUrls: ["./app/profile/css/follow.css"],
	providers: [GitService]

})

export class FollowerComponent implements OnInit{
	public followerList: Object = [];
	public error:boolean;
	public currentGitUser= new GitUser();

	constructor(private _router: Router, private _routeParam: ActivatedRoute, private _gitService: GitService){}
	
	ngOnInit(){
		this._routeParam.params.subscribe(param => {
		if(param){
			this.currentGitUser.avatar_url = param['avatar_url'];
			this.currentGitUser.login = param['login'];
			this.currentGitUser.name = param['name'];
			this.currentGitUser.company = param['company'];
			this.currentGitUser.location = param['location'];
			this.currentGitUser.followersCount = param['followersCount'];
			this.currentGitUser.followingCount = param['followingCount'];
			this.currentGitUser.reposCount = param['reposCount'];
			}
			
		});
		this._gitService.getfullFollowersDetails(this.currentGitUser.login)
			.subscribe(res => {this.init(res)},
			err => {this.error = err; 

        });
	}

	init(res):any{
		this.followerList = res; 
	}
	
	loadFollowerProfile(login){
		this._router.navigate(['/viewProfile', {'data': login}]);
	}

	viewFollowings(){
			this._router.navigate(['/followingList', {'login': this.currentGitUser.login, 'name':this.currentGitUser.name, 'company':this.currentGitUser.company, 'followersCount':this.currentGitUser.followersCount, 'followingCount':this.currentGitUser.followingCount, 'reposCount':this.currentGitUser.reposCount, 'location':this.currentGitUser.location, 'avatar_url':this.currentGitUser.avatar_url}]);
	}
	viewRepos(){
		this._router.navigate(['/repoList', {'login': this.currentGitUser.login, 'name':this.currentGitUser.name, 'company':this.currentGitUser.company, 'followersCount':this.currentGitUser.followersCount, 'followingCount':this.currentGitUser.followingCount, 'reposCount':this.currentGitUser.reposCount, 'location':this.currentGitUser.location, 'avatar_url':this.currentGitUser.avatar_url}]);
	}
	

}