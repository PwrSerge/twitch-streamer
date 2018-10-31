import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ChannelsListComponent } from './main/channels-list/channels-list.component';
import { FooterComponent } from './footer/footer.component';
import { StreamService } from './main/channels-list/stream.service';
import { ChannelItemComponent } from './main/channels-list/channel-item/channel-item.component';
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';
import { TrimWhiteSpacePipe } from './trim.pipe';
// import { AngularFireModule } from '@angular/fire';
// import { environment } from '../environments/environment';


//  export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ChannelsListComponent,
    FooterComponent,
    ChannelItemComponent,
    ShortenPipe,
    FilterPipe,
    TrimWhiteSpacePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
    // AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [StreamService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
