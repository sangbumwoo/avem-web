import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PushMessageService {

  private apiServer = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: '123456789012345678901234567'
    })
  };

  constructor(private httpClient: HttpClient) { }

  sendMessage(message: any) {
    return this.httpClient.post(this.apiServer + '/push', message, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  sendMessageToFirebase(message: any) {
    console.log("sendMessageToFirebase", message);
    return this.httpClient.post(this.apiServer + '/firebase/send-message', message, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  sendMessageToFirebaseHttp(message: any) {
    console.log("sendMessageToFirebase", message);
    return this.httpClient.post(this.apiServer + '/firebase/send-message-http', message, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  // Firebase Server Key
  // AAAA2d5bi1A:APA91bE85UoDBkrrhtmptRPnd8JAR41eg7JxXCfwX5vsh8WdA7W0EXcocSo-2UrbKz71AZPqfSCDL7VJ-oYP1d1MTAamjEIi-mm51X1xFlywS5W-P2TAfa8G7EuMs53dqwd-6v6v__xV


  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
