import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { GitService } from './git.service';
import { HeaderComponent } from './header.component';
import { GitUser } from './gitUser';

@Component({
	templateUrl: './app/profile/view/following.html',
	styleUrls: ["./app/profile/css/follow.css"],
	providers: [GitService]

})

export class FollowingComponent implements OnInit{
	public followingList: Object = [];
	public error:any;
	public currentGitUser= new GitUser();


	constructor(private _router: Router, private _routeParam: ActivatedRoute, private _gitService: GitService){}
	
	ngOnInit(){
		this._routeParam.params.subscribe(param => {
			this.currentGitUser.avatar_url = param['avatar_url'];
			this.currentGitUser.login = param['login'];
			this.currentGitUser.name = param['name'];
			this.currentGitUser.company = param['company'];
			this.currentGitUser.location = param['location'];
			this.currentGitUser.followersCount = param['followersCount'];
			this.currentGitUser.followingCount = param['followingCount'];
			this.currentGitUser.reposCount = param['reposCount']
		});

		this._gitService.getfullFollowingDetails(this.currentGitUser.login)
			.subscribe(res => {this.followingList = res;},
			err => {this.error = err;
        });

	}
	loadProfile(login){
		this._router.navigate(['/viewProfile', {'data': login}]);
	}
	viewFollowers(){
			this._router.navigate(['/followerList', {'login': this.currentGitUser.login, 'name':this.currentGitUser.name, 'company':this.currentGitUser.company, 'followersCount':this.currentGitUser.followersCount, 'followingCount':this.currentGitUser.followingCount, 'reposCount':this.currentGitUser.reposCount, 'location':this.currentGitUser.location, 'avatar_url':this.currentGitUser.avatar_url}]);
	}
	viewRepos(){
		this._router.navigate(['/repoList', {'login': this.currentGitUser.login, 'name':this.currentGitUser.name, 'company':this.currentGitUser.company, 'followersCount':this.currentGitUser.followersCount, 'followingCount':this.currentGitUser.followingCount, 'reposCount':this.currentGitUser.reposCount, 'location':this.currentGitUser.location, 'avatar_url':this.currentGitUser.avatar_url}]);
	}

}