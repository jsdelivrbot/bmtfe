import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Datacontext {
        
    constructor(httpClient){
        this.http = httpClient;
    }
    
    getAll() {        
        //return this.http.jsonp('http://localhost:1337/measure', 'callback');
        return this.http.get('http://localhost:1337/measure');
    }
}