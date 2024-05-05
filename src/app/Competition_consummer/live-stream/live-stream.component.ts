import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-live-stream',
  templateUrl: './live-stream.component.html',
  styleUrls: ['./live-stream.component.scss']
})
export class LiveStreamComponent implements OnInit, AfterViewInit {

  domain: string = "meet.jit.si";
  room: string = 'HR Interview';

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.loadJitsiMeet();
  }

  loadJitsiMeet(): void {
    const script = document.createElement('script');
    script.src = 'https://meet.jit.si/external_api.js';
    script.onload = () => {
      this.initJitsiMeet();
    };
    document.body.appendChild(script);
  }

  initJitsiMeet(): void {
    const options = {
      roomName: this.room,
      parentNode: document.querySelector('#jitsi-iframe')
    };
    const api = new JitsiMeetExternalAPI(this.domain, options);
  }

}
