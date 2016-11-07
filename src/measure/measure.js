import {inject} from 'aurelia-framework';
import {Datacontext} from 'services/Datacontext';
import {Router} from 'aurelia-router';
import moment from 'moment';

@inject(Datacontext, Router)
export class Measure {
    constructor(datacontext, router) {
        this.datacontext = datacontext;
        this.router = router;
        this.dpOptions = this.getDatePickerOptions();        
    }

    activate(params, router) {
        if (params.id) {
            this.datacontext.getById(params.id)
                .then(response => {
                    this.measure = JSON.parse(response.response);                    
                    this.setEditableDatetimeFields(this.measure);
                    this.heading = router.title + ' ' + this.measure.id;
                })
        } else {
            this.heading = router.title;
            this.measure = this.getDefaultMeasure();
        }
    }

    submit() {
         let measure = this.createDto(this.measure);         
         if (measure.id)
            this.datacontext.update(measure).then(() => this.backToHistory());
         else
            this.datacontext.add(measure).then(() => this.backToHistory());         
    }
    
    delete(){
        let id = this.measure.id;
        if (id) {
            this.datacontext.delete(id).then(() => this.backToHistory());
        }
    }
    
    backToHistory(){
        this.router.navigate('history');
    }

    getDatePickerOptions(){
        return {
            autoclose: true,
            todayHighlight: true,
            format: 'yyyy-mm-dd'
        }
    }

    getDefaultMeasure(){
        let measure = {
            dateTime: new Date()
        }
        this.setEditableDatetimeFields(measure);    
        return measure;   
    }

    setEditableDatetimeFields(measure){
        let dateTime = moment(measure.dateTime);        
        measure.date = dateTime.format('YYYY-MM-DD');
        measure.hour = dateTime.hours();
        measure.minute = dateTime.minutes();    
    }

    setDateTime(measure){
        let dateTime = moment(measure.date);
        dateTime.hours(measure.hour);
        dateTime.minutes(measure.minute);
        measure.dateTime = dateTime;         
    }

    createDto(measure){
        this.setDateTime(measure);
        return {
            id: measure.id,
            dateTime: measure.dateTime.format(),
            weight: measure.weight,
            fat: measure.fat,
            water: measure.water,
            muscleMass: measure.muscleMass,
            physiqueRating: measure.physiqueRating,
            bmr: measure.bmr,
            metabolicAge: measure.metabolicAge,
            boneMass: measure.boneMass,
            visceralFat: measure.visceralFat    
        }
    }



    // canDeactivate() {
    //     if this.fullName !==this.previousValue) {
    //         return confirm('Are you sure you want to leave?');
    //     }
    // }
}