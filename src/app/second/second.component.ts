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
    push_token: "fyOjTY-zSjSSGB0IgSPvFr:APA91bE0H62EsP9bDVFQX5BgQXpPBT_1o8J3pLZ2MIlnevF8T2MgPLSE2AQ-kZ7VK_ymdFbk0LW9t1QaQMSJSQqMsdVPGrFRKxBVz1QGfzYNAfPi8Igvciu6bwYgkkR9xI9MAXWNwM5a",
    messageTitle : "Message title",
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

}
