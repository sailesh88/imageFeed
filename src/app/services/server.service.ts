import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  url = "https://xibkl8mhh1.execute-api.eu-west-1.amazonaws.com/dev/demo/getTestAsset";

  getConfig() {
    var params = {
      "game_id": "test0001",
      "email": "test@gmail.com"
    };
    return this.http.post(this.url, params).toPromise().then(
      data => {
        data;
      }
    );
  }
}
