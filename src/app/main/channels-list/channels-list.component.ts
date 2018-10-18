import { Component, OnInit, Input } from '@angular/core';
import { Stream } from './stream.model';
import { StreamService } from './stream.service';
import { Observable } from 'rxjs/Observable';



@Component({
    selector: 'app-channels-list',
    templateUrl: './channels-list.component.html',
    styleUrls: ['./channels-list.component.scss']

})

export class ChannelsListComponent implements OnInit { 
    stream: Stream;
    streams: Stream[];

    constructor(private streamService: StreamService) { }

    ngOnInit(): void {

    }
}
