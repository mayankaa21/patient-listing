import { SearchPipe } from './search.pipe';
import { UserService } from './user.service';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { PatformComponent } from './patform/patform.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";


const appRoute : Routes = [
    { path:'', component:PatientlistComponent },
    { path:'form', component:PatformComponent }
]

@NgModule({
    declarations: [
        ErrorComponent,
        AppComponent,
        PatformComponent,
        PatientlistComponent,
        SearchPipe,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(appRoute)
    ],
    providers: [ErrorService, UserService],
    bootstrap: [AppComponent]
})
export class AppModule {

}