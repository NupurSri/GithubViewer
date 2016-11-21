import { Pipe } from '@angular/core';

@Pipe({
	name: 'filterRepos'
})

export class FilterRepos{
	public transform(value, args){
		if(typeof args === 'undefined'){
			return value;
		}else if(typeof args !== 'undefined' && value.length !== 0){
			if(value){
				return value.filter(item => {
				for(let key in item){
					if((key === 'name')&&(item[key].toLowerCase().indexOf(args) !== -1)){
						return true;
					}
				}
				})
			}
		}
	}
}


