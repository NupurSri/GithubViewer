import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { GitService } from './git.service';
import { HeaderComponent } from './header.component';
import { GitUser } from './gitUser';
import { Pipe, PipeTransform } from '@angular/core';
import { FilterRepos } from './repo.pipe';

@Component({
	templateUrl: './app/profile/view/repos.html',
	styleUrls: ["./app/profile/css/repos.css"],
	providers: [GitService],


})

export class ReposComponent implements OnInit{
	public repoList: Object = [];
	public error:boolean;
	public currentGitUser= new GitUser();
	public searchRepo:string;

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
			this.currentGitUser.reposCount = param['reposCount'];
		});
		this._gitService.getRepoDetails(this.currentGitUser.login)
			.subscribe(res => {this.init(res)},
			err => {this.error = err;
        });
	}
	init(res):any{
		this.repoList = res; 
	}
	
	loadProfile(login){
		this._router.navigate(['/viewProfile', {'data': login}]);
	}

	viewFollowers(){
			this._router.navigate(['/followerList', {'login': this.currentGitUser.login, 'name':this.currentGitUser.name, 'company':this.currentGitUser.company, 'followersCount':this.currentGitUser.followersCount, 'followingCount':this.currentGitUser.followingCount, 'reposCount':this.currentGitUser.reposCount, 'location':this.currentGitUser.location, 'avatar_url':this.currentGitUser.avatar_url}]);
	}
	viewFollowings(){
			this._router.navigate(['/followingList', {'login': this.currentGitUser.login, 'name':this.currentGitUser.name, 'company':this.currentGitUser.company, 'followersCount':this.currentGitUser.followersCount, 'followingCount':this.currentGitUser.followingCount, 'reposCount':this.currentGitUser.reposCount, 'location':this.currentGitUser.location, 'avatar_url':this.currentGitUser.avatar_url}]);
	}
	
	
	showRepoDetails(url){
		this._router.navigate(['/repoList', {'login': this.currentGitUser.login, 'name':this.currentGitUser.name, 'company':this.currentGitUser.company, 'followersCount':this.currentGitUser.followersCount, 'followingCount':this.currentGitUser.followingCount, 'reposCount':this.currentGitUser.reposCount, 'location':this.currentGitUser.location, 'avatar_url':this.currentGitUser.avatar_url}]);this._router.navigate(['/followingList', {'login': this.currentGitUser.login, 'name':this.currentGitUser.name, 'company':this.currentGitUser.company, 'followersCount':this.currentGitUser.followersCount, 'followingCount':this.currentGitUser.followingCount, 'reposCount':this.currentGitUser.reposCount, 'location':this.currentGitUser.location, 'avatar_url':this.currentGitUser.avatar_url,'url': url}]);
	}

}