import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';


import { Subject } from 'rxjs/Subject';
import { Stream } from './stream.model';



@Injectable()
export class StreamService {
  private TWITCH_CLIENT_ID = '6aam2y7zo5fy8gim9dt9l1xiiucv8c';
  private TWITCH_API_URL = 'https://api.twitch.tv/kraken/';
   private users = ['freecodecamp', 'storbeck', 'terakilobyte', 'habathcx', 'RobotCaleb',
    'thomasballinger', 'noobs2ninjas', 'beohoff',  'cretetion', 'sheevergaming', 'OgamingSC2', 'ESL_SC2'];
  private streams: Stream[] = [];
  private stream: Stream;

  streamChanged = new Subject<Stream[]>();
  streamSelected = new EventEmitter<Stream>();
  twitch_channels_urls = this.makeURLs(this.users, 'channels');
  twitch_streams_urls = this.makeURLs(this.users, 'streams');

  constructor(private http: Http) { }

  makeURLs(users: Array<string>, type: string) {
    const Urls: Array<string> = [];
    users.map((channel) => {
      Urls.push(`${this.TWITCH_API_URL}${type}/${channel}`);
    });
    return Urls;
  }

  getUsers() {
    return this.users.slice();
  }
  /*
    addChannel(channel: Channel) {
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
    }

    deleteChannel(index: number) {
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.recipes.slice());
    }

    updateStream(index: number, newRecipe: Recipe) {
      this.recipes[index] = newRecipe;
      this.recipesChanged.next(this.recipes.slice());
    } */


  setStream(streams: Stream[]) {
    this.streams = streams;
    this.streamChanged.next(this.streams.slice());
  }

  fetAllStreams() {
    let allStreams = this.users.map(user => this.getStreams(user));
    let ef = Observable.merge(...allStreams);
    ef.forEach((x) => {
      
      this.streams.push(x);})
      
     return this.streams;
  }

  getStreams(user: string): Observable<Stream> {

    let results = [];
    let headers = new Headers();
    headers.append("Client-ID", this.TWITCH_CLIENT_ID);
    let opts = new RequestOptions();
    opts.headers = headers;
    let twitchStreamsURLS = this.users.map(user => this.http.get(`${this.TWITCH_API_URL}streams/${user}`, opts).map(res => res.json()));

    return Observable.forkJoin([

      this.http.get(`${this.TWITCH_API_URL}streams/${user}`, opts).map(res => res.json()),
      this.http.get(`${this.TWITCH_API_URL}channels/${user}`, opts).map(res => res.json())

    ])
      .map((data: any[]) => {
        let userStream = data[0];
        let channels: any = data[1];

        return new Stream({
          game: channels.game,
          status: channels.status,
          stream_status: userStream.stream == null ? 'offline' : 'online',
          display_name: channels.display_name,
          _id: channels._id,
          language: channels.language,
          viewers: channels.viewers,
          followers: channels.followers,
          logo: channels.logo == undefined ? 'https://dummyimage.com/100x100/ecf0e7/5c5457.jpg&text=0x3F' : channels.logo ,
          url: channels.url
        })
 
      })
      .catch(this.handleError);
  }


  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

}
