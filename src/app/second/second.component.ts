import { Component, OnInit } from '@angular/core';
import { PushMessageService } from '../services/push-message.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  kakaoServerKey: string = "795b9b3c9b9883a36c6ba4d1ea86f043";
  apiKey: string = "apiKey-apiKey-apiKey";
  messageTitle: string = "Message Title";
  messageBody: string = "Message body";

  model = {
    name: "test",
    age: 12
  }

  message = {}
  postData = {
    kakaoServerKey: "795b9b3c9b9883a36c6ba4d1ea86f043",
    firebaseServerKey: "AAAA2d5bi1A:APA91bE85UoDBkrrhtmptRPnd8JAR41eg7JxXCfwX5vsh8WdA7W0EXcocSo-2UrbKz71AZPqfSCDL7VJ-oYP1d1MTAamjEIi-mm51X1xFlywS5W-P2TAfa8G7EuMs53dqwd-6v6v__xV",
    push_token: "eByxX8IdQK6RPSgaNtU_Pu:APA91bFR7uILyJ2CzWi1j-3B3myMsgPcDlxUb2gFYGJigVl51z5G8i_1GP_7MI1sa0qbeoyO1lgn8RpurFs1LCrEeYKxfENTj9uqxIyYqJz9vHkDO53MGLrfgTpG_Q5e2SvPax6_C4_p",
    messageTitle: "Message title",
    messageBody: "Message body"
  }

  constructor(private pushMessageService: PushMessageService) { }

  ngOnInit(): void {
  }

  sendMessage() {
    console.log("clicked");
    this.pushMessageService.sendMessage(this.postData).subscribe(res => {
      console.log(res);
    })
  }

  sendMessageToFirebaseAdmin() {
    console.log("clicked");
    this.pushMessageService.sendMessageToFirebase(this.postData).subscribe(res => {
      console.log(res);
    })
  }

  sendMessageToFirebaseHttp() {
    console.log("clicked");

    this.pushMessageService.sendMessageToFirebaseHttp(this.postData).subscribe(res => {
      console.log(res);
    })
  }
}
