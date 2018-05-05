import { User } from './user.model';
import { UserService } from './user.service';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class SearchPipe implements PipeTransform {
constructor(private userservice:UserService){}

  filteredskills: User[] = [];
  transform(items: User[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText){
      return items;
     }
    else{
      searchText = searchText.toLowerCase();
      return items.filter( it => {
        const fullname = it.fname + " "+ it.lname;
      return fullname.toLowerCase().includes(searchText);
  
})
}
  }
}