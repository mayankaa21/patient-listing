import { UserService } from './../user.service';
import { User } from './../user.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'patform',
  templateUrl: './patform.component.html',
  styleUrls: ['./patform.component.css']
})
export class PatformComponent implements OnInit {
dobfield:boolean=false;
agefield:boolean=false;
ageval:string;
validdata:boolean=false;
increment:number = 0;
monthDay:number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
tar1 = {
  year:null,
  month:null,
  day:null
}
tar2 = {
  year:null,
  month:null,
  day:null
}
finday:number;
finmon:number;
finyear:number;

@ViewChild('f') pData : NgForm;
@ViewChild('d') entdate : NgModel;

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
  }


/* if (this.increment == -1)
    {
        if (DateTime.IsLeapYear(this.fromDate.Year))
        {
            increment = 29;
        } 
        else
        {
            increment = 28;
        }
    }*/
  duration(){


    if ( this.tar1.day > this.tar2.day)
    { 
      this.increment = this.monthDay[this.tar1.month - 1]; 
    }

    if (this.increment != 0)
    {    
        this.finday = (this.tar2.day + this.increment) - this.tar1.day;
        this.increment = 1; 
    }
    else
    {       
        this.finday = this.tar2.day - this.tar1.day;
    }

    if ((this.tar1.month + this.increment) > this.tar2.month)
    {   
        this.finmon = (this.tar2.month+ 12) - (this.tar1.month + this.increment);
           this.increment = 1;
    }
    else
    {    
        this.finmon = (this.tar2.month) - (this.tar1.month + this.increment);
        this.increment = 0;
    }
    
    this.finyear = this.tar2.year - (this.tar1.year + this.increment);

  }


  entereddate(date:String){
    var datearr = date.split("-");
    var entyear = datearr[0];
    this.tar1.year = Number(entyear);
    var entmon = datearr[1];
    this.tar1.month = Number(entmon); 
    var entdate = datearr[2];
    this.tar1.day = Number(entdate);
    var enterdate = entyear+entmon+entdate;
    var finaldate = Number(enterdate);
    return finaldate;
  }
  currdate(){
    var date = new Date;
    var curyear = date.getFullYear().toString();
    this.tar2.year = Number(curyear);
    var curmon = (date.getMonth()+1).toString();
    if(curmon.length==1){
    curmon = "0" + curmon;}
    this.tar2.month = Number(curmon);
    var curdate = date.getDate().toString();
    if(curdate.length==1){
      curdate = "0" + curdate;}
      this.tar2.day = Number(curdate);
    var fulldate = curyear+curmon+curdate;
    var toddate = Number(fulldate);
    return toddate;
  }

  datecheck(date1:Number, date2:Number){
    if(date2<date1){
      return true;
    }
    else{
      this.validdata = true; 
    }
    return false;
  }
  falseit(){
    this.dobfield=false;
  }
  falseit1(){
    this.agefield=false;
  }

  onSubmit(data: NgForm){
    this.dobfield = false;
    this.validdata = false;
    var date2 = this.currdate();
    var date1 = this.entereddate(this.entdate.value);
    this.dobfield = this.datecheck(date1, date2);
    this.agefield = false;
    this.duration();
  
    
    if(this.pData.value.age!=this.finyear && this.dobfield==false){
      console.log(this.pData.value.age);
      console.log(this.finyear);
      this.agefield = true;
      this.validdata= false; 
    }
if(this.validdata){
    this.ageval=this.finyear+"Y "+this.finmon+"M";
    if(this.finyear==0 && this.finmon==0){
      this.ageval= "New Born";
    }
    const newuser = new User(null,this.pData.value.fname,
                       this.pData.value.lname,
                       this.pData.value.dob,
                       this.ageval,
                       this.pData.value.gender,
                       this.pData.value.cont,
                       this.pData.value.pinfo);
    this.userService.addUser(newuser)
                       .subscribe(
                           data => console.log(data),
                       ); 

  this.dobfield=false;
  this.agefield=false;
  this.validdata=false;
  this.pData.reset();
  this.router.navigate(['']);
    }

}

}
