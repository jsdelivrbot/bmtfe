import {inject} from 'aurelia-framework';
import {Datacontext} from 'services/Datacontext';
import {Router} from 'aurelia-router';

@inject(Datacontext, Router)
export class List {

    heading = 'Body Measurement History';
    
    constructor(datacontext, router) {
        this.datacontext = datacontext;
        this.router = router;
        this.measures = [];    
    }

    activate() {
        this.datacontext.getAll()
            .then(response => {                
                let res = response.content;
                res.sort((a, b) => b.dateTime - a.dateTime);

                //TODO: sorting
                this.measures = res;
            })
    }

    gotoEdit(id){        
        this.router.navigateToRoute('edit', { id: id });
    }
}