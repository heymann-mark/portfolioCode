import { Component, OnInit } from '@angular/core';

import { HttpHeaders} from '@angular/common/http';
import { ProfileService } from '../profile.service';
import { SnotifyService } from 'ng-snotify';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder} from '@angular/forms';
import { from, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})




export class ContactComponent implements OnInit {
  name:any;
  subject:any;
  email:any;
  message:any;
  model: any = {};

  constructor(private http: HttpClient){}

  ngOnInit() {}
  //Here the data is being submitted by post to formspree,
  //and they are sending it to me via email
  onSubmit(name:any, subject:any, email:any, message:any) {
     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
     this.http.post('https://formspree.io/f/mqkwykjg',
        { name: name, subject: subject, replyto: email, message: message },
        { 'headers': headers }).subscribe(
           response => {
           console.log(response);
          }
        );
  }
}
