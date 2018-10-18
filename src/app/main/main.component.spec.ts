import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { ChannelsListComponent } from './channels-list/channels-list.component';
import { ChannelItemComponent } from './channels-list/channel-item/channel-item.component';
import { FilterPipe } from '../filter.pipe';
import { ShortenPipe} from '../shorten.pipe';
import { StreamService } from '../main/channels-list/stream.service'
import { Http, Response, Headers, RequestOptions, ConnectionBackend } from '@angular/http';
import { HttpModule } from '@angular/http';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [MainComponent, ChannelsListComponent, ChannelItemComponent, FilterPipe, ShortenPipe ],
      providers: [StreamService, ConnectionBackend ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
