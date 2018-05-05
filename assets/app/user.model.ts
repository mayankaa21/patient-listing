export class User{
    public _id:any;
    public fname: string;
    public lname: string;
    public dob: string;
    public age: number;
    public gender: string;
    public pno: number;
    public pinfo: string;
  
    constructor(i:any,f: string,l: string,d: string,a: number,g: string,pno: number,pinfo: string) {
      this._id=i;
      this.fname = f;
      this.lname = l;
      this.dob=d;
      this.age=a;
      this.gender=g;
      this.pno=pno;
      this.pinfo=pinfo;
    }
  }