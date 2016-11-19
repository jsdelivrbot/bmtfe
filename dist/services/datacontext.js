'use strict';

System.register(['aurelia-framework', 'aurelia-http-client'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, _dec, _class, Datacontext;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }],
        execute: function () {
            _export('Datacontext', Datacontext = (_dec = inject(HttpClient), _dec(_class = function () {
                function Datacontext(httpClient) {
                    _classCallCheck(this, Datacontext);

                    httpClient.configure(function (config) {
                        return config.withBaseUrl('https://bmtbe.herokuapp.com/');
                    });
                    this.http = httpClient;
                }

                Datacontext.prototype.getAll = function getAll() {
                    return this.http.get('measure');
                };

                Datacontext.prototype.getById = function getById(id) {
                    return this.http.createRequest('measure').asGet().withParams({ id: id }).send();
                };

                Datacontext.prototype.update = function update(measure) {
                    return this.http.createRequest('measure/' + measure.id).asPut().withParams(measure).send();
                };

                Datacontext.prototype.add = function add(measure) {
                    return this.http.createRequest('measure').asPost().withParams(measure).send();
                };

                Datacontext.prototype.delete = function _delete(id) {
                    return this.http.createRequest('measure/' + id).asDelete().send();
                };

                return Datacontext;
            }()) || _class));

            _export('Datacontext', Datacontext);
        }
    };
});
//# sourceMappingURL=datacontext.js.map
