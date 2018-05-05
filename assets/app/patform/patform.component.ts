import { UserService } from './../user.service';
import { User } from './../user.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'patform',
  templateUrl: './patform.component.html',
  styleUrls: ['./patform.component.css']
})
export class PatformComponent implements OnInit {
confield:boolean=false;
agefield:boolean=false;
validdata:boolean=false;

@ViewChild('f') pData : NgForm;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
  }


  onSubmit(data: NgForm){
    this.agefield = false;
    this.confield=false;
    this.validdata = false;
    if(this.pData.value.age>150){
      this.agefield = true;
    }
    else{this.validdata=true;}
if(this.validdata){
    const newuser = new User(null,this.pData.value.fname,
                       this.pData.value.lname,
                       this.pData.value.dob,
                       this.pData.value.age,
                       this.pData.value.gender,
                       this.pData.value.cont,
                       this.pData.value.pinfo);
    this.userService.addUser(newuser)
                       .subscribe(
                           data => console.log(data),
                       ); 

  this.confield=false;
  this.agefield=false;
  this.validdata=false;
  this.pData.reset();
  this.router.navigate(['']);
    }
}

}
