import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ChannelsListComponent } from './main/channels-list/channels-list.component';
import { ChannelItemComponent  } from './main/channels-list/channel-item/channel-item.component';
import { FilterPipe } from './filter.pipe';
import { ShortenPipe } from './shorten.pipe';
import { StreamService } from './main/channels-list/stream.service'
import { Http, Response, Headers, RequestOptions, ConnectionBackend } from '@angular/http';
import { HttpModule } from '@angular/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule
      ],
      declarations: [
        AppComponent, FooterComponent, HeaderComponent, MainComponent, ChannelsListComponent, ChannelItemComponent, FilterPipe, ShortenPipe
      ],
      providers: [StreamService, ConnectionBackend]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
 
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
