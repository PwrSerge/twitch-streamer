export class Stream {
public game: string;
public status: string;
public stream_status: string;
public display_name: string;
public language: string;
public _id: string;
public viewers: string;
public followers: string;
public logo: string;
public url: string;

    constructor(obj?: any) {
        this.game = obj.game;
        this.status = obj.status;
        this.stream_status = obj.stream_status;
        this.display_name = obj.display_name;
        this._id = obj._id;
        this.language = obj.language;
        this.viewers = obj.viewers;
        this.followers = obj.followers;
        this.logo = obj.logo;
        this.url = obj.url;

    }
}
