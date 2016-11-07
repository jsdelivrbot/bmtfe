import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Datacontext {
        
    constructor(httpClient){
        httpClient.configure(config => config.withBaseUrl('http://localhost:1337/'));
        this.http = httpClient;
    }
    
    getAll() {        
        //return this.http.jsonp('http://localhost:1337/measure', 'callback');
        return this.http.get('measure');
    }  

    getById(id) {
        //return this.http.jsonp('http://localhost:1337/measure', 'callback');
        return this.http.createRequest('http://localhost:1337/measure')
                    .asGet()  
                    .withParams({ id: id })
                    .send();        
    }

    update(measure) {        
        return this.http.createRequest('measure/' + measure.id)
                    .asPut()  
                    .withParams(measure)
                    .send();
    }

    add(measure) {        
        return this.http.createRequest('measure')
                    .asPost()  
                    .withParams(measure)
                    .send();
    }
    
    delete(id) {
        return this.http.createRequest('measure/' + id)
                    .asDelete()                      
                    .send();
    }
}