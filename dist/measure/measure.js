'use strict';

System.register(['aurelia-framework', 'services/datacontext', 'aurelia-router', 'moment'], function (_export, _context) {
    "use strict";

    var inject, Datacontext, Router, moment, _dec, _class, Measure;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_servicesDatacontext) {
            Datacontext = _servicesDatacontext.Datacontext;
        }, function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
        }, function (_moment) {
            moment = _moment.default;
        }],
        execute: function () {
            _export('Measure', Measure = (_dec = inject(Datacontext, Router), _dec(_class = function () {
                function Measure(datacontext, router) {
                    _classCallCheck(this, Measure);

                    this.datacontext = datacontext;
                    this.router = router;
                    this.dpOptions = this.getDatePickerOptions();
                }

                Measure.prototype.activate = function activate(params, router) {
                    var _this = this;

                    if (params.id) {
                        this.datacontext.getById(params.id).then(function (response) {
                            _this.measure = JSON.parse(response.response);
                            _this.setEditableDatetimeFields(_this.measure);
                            _this.heading = router.title + ' ' + _this.measure.id;
                        });
                    } else {
                        this.heading = router.title;
                        this.measure = this.getDefaultMeasure();
                    }
                };

                Measure.prototype.submit = function submit() {
                    var _this2 = this;

                    var measure = this.createDto(this.measure);
                    if (measure.id) this.datacontext.update(measure).then(function () {
                        return _this2.backToHistory();
                    });else this.datacontext.add(measure).then(function () {
                        return _this2.backToHistory();
                    });
                };

                Measure.prototype.delete = function _delete() {
                    var _this3 = this;

                    var id = this.measure.id;
                    if (id) {
                        this.datacontext.delete(id).then(function () {
                            return _this3.backToHistory();
                        });
                    }
                };

                Measure.prototype.backToHistory = function backToHistory() {
                    this.router.navigate('history');
                };

                Measure.prototype.getDatePickerOptions = function getDatePickerOptions() {
                    return {
                        autoclose: true,
                        todayHighlight: true,
                        format: 'yyyy-mm-dd'
                    };
                };

                Measure.prototype.getDefaultMeasure = function getDefaultMeasure() {
                    var measure = {
                        dateTime: new Date()
                    };
                    this.setEditableDatetimeFields(measure);
                    return measure;
                };

                Measure.prototype.setEditableDatetimeFields = function setEditableDatetimeFields(measure) {
                    var dateTime = moment(measure.dateTime);
                    measure.date = dateTime.format('YYYY-MM-DD');
                    measure.hour = dateTime.hours();
                    measure.minute = dateTime.minutes();
                };

                Measure.prototype.setDateTime = function setDateTime(measure) {
                    var dateTime = moment(measure.date);
                    dateTime.hours(measure.hour);
                    dateTime.minutes(measure.minute);
                    measure.dateTime = dateTime;
                };

                Measure.prototype.createDto = function createDto(measure) {
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
                    };
                };

                return Measure;
            }()) || _class));

            _export('Measure', Measure);
        }
    };
});
//# sourceMappingURL=measure.js.map
