import { User } from './user.model';
import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorService } from './errors/error.service';


@Injectable()
export class UserService {
    public users: User[] = [];
    public filter = new EventEmitter<User[]>();
    weburl:string = "https://patient-listing.herokuapp.com/user";

    constructor(private http: Http,private errorService:ErrorService) {
    }

    addUser(patient: User) {
        const body = JSON.stringify(patient);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.weburl, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const newpat = new User(
                    result.obj._id,
                    result.obj.fname,
                    result.obj.lname,
                    result.obj.dob,
                    result.obj.age,
                    result.obj.gender,
                    result.obj.cont,
                    result.obj.pinfo);
                this.users.push(newpat);
                return newpat;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getUsers() {
        return this.http.get(this.weburl)
            .map((response: Response) => {
                const patients = response.json().obj;
                let finalList: User[] = [];
                for (let patient of patients) {
                    finalList.push(new User(
                        patient._id,
                        patient.fname,
                        patient.lname,
                        patient.dob,
                        patient.age,
                        patient.gender,
                        patient.cont,
                        patient.pinfo)
                    );
                }
                this.users = finalList;
                return finalList;
            })
           .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
}