import {inject} from 'aurelia-framework';
import {Datacontext} from 'services/Datacontext';

@inject(Datacontext)
export class List {

    heading = 'Body Measurement History';
    
    constructor(datacontext) {
        this.datacontext = datacontext;
        this.measures = [];    
    }

    activate() {
        this.datacontext.getAll()
            .then(response => this.measures = response.content);                    
    }
}