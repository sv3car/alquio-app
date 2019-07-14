import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Providers

import { GlobalProvider } from '../global/global';

@Injectable()
export class RestProvider {

  header = new HttpHeaders();

  constructor(public http: HttpClient,
              public globalProv: GlobalProvider) {
  }

  /**
   *
   * Metodo para el consumo de apis get
   *
   * @param metodo : string nombre del metodo a consumir
   *
   */
  getData(metodo, params=""){

    let headers = new HttpHeaders({"Content-Type": "application/json"});
    let uri = this.globalProv.apiURL + metodo + params;
    console.log(uri);

    return this.http.get(uri, {headers: headers}).toPromise();
  }

  /**
   *
   * Metodo para el consumo de apis post
   *
   * @param metodo : string nombre del metodo a consumir
   *
   */
  postData(metodo, params=null, isChat?: boolean){
    let headers;
    let api;
    if (isChat){
      headers = new HttpHeaders({
        "Content-Type": "application/json",
        "apikey": GlobalProvider.API_KEY_CHAT,
        "appid": GlobalProvider.APP_ID_CHAT
      });
      api = this.globalProv.apiChat;
    } else {
      headers = new HttpHeaders({"Content-Type": "application/json"});
      api = this.globalProv.apiURL;
    }
    return this.http.post(api + metodo, params, {headers:headers}).toPromise();
  }


}
