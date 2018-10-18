import { Component, OnInit, Input } from '@angular/core';
import { Stream } from '../stream.model';
import { StreamService } from '../stream.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-channel-item',
  templateUrl: './channel-item.component.html',
  styleUrls: ['./channel-item.component.scss']

})

export class ChannelItemComponent implements OnInit {
  @Input()  stream: Stream;
  observableStreams: Observable<Stream>;
  streams: Stream[] = [];
  errorMessage: String;
  allStreams: Stream[];


  constructor(private streamService: StreamService) { }

  onSelected() {
    this.streamService.streamSelected.emit(this.stream);

  }

  buttonElements = [{ name: 'All', status: '' }, { name: 'Online', status: 'online' }, { name: 'Offline', status: 'offline' }];
  filteredStatus = '';

  onFilter(status: string) {
    this.filteredStatus = status;
  }


  // private streams: Stream[] = [
  //   new Stream({
  //     game: 'this is a supe cool game',
  //     status: 'Offline',
  //     display_Name: 'Super Nice Channel',
  //     logo: 'https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F'
  //   }),
  //   new Stream({
  //     game: 'this is a supe cool game',
  //     status: 'Offline',
  //     display_Name: 'Super Nice Channel',
  //     logo: 'https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F'
  //   })

  // ];

  /**
   * Get the status classes 
   * @param {string} obj  object status property
   */
  getStatusClasses(stream: { status: string }) {
    return {
      'list-status--online': stream.status === 'online',
      'list-status--offline': stream.status === 'offline'
    };
  }

  ngOnInit() {
    this.streams = this.streamService.fetAllStreams();

  }

}

