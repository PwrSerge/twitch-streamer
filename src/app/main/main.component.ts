import { Component, OnInit } from '@angular/core';
import { StreamService } from './channels-list/stream.service';
import { Stream } from './channels-list/stream.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  selectedStream: Stream;
  constructor(private streamService: StreamService) { }

  ngOnInit() {

    this.streamService.streamSelected
      .subscribe(
        (stream: Stream) => {
          this.selectedStream = stream;
        }
      );
  }

}
