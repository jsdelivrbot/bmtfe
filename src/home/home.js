//import {computedFrom} from 'aurelia-framework';



//https://jsfiddle.net/api/post/library/pure/

export class Home {
    heading = 'Some cool charts here!';
    data = {
        datasets: [{
            label: 'Scatter Dataset',
            data: [
                {x: -10,y: 0}, 
                {x: 0,  y: 10}, 
                {x: 10, y: 5}] 
        }]
    } 
}

export class UpperValueConverter {
    toView(value) {
        return value && value.toUpperCase();
    }
}