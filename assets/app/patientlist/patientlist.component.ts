import { User } from './../user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'pat-list',
  templateUrl: './patientlist.component.html',
  styleUrls:['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {
  Users:User[]=[];
  searchText:string;
  constructor(private userservice:UserService) { }

  ngOnInit() {
    this.userservice.getUsers()
            .subscribe(
                (data) => {
                  console.log(data);
                    this.Users = data;
                }
            );
  }

}
