'use strict';

System.register(['aurelia-framework', 'services/Datacontext', 'aurelia-router'], function (_export, _context) {
    "use strict";

    var inject, Datacontext, Router, _dec, _class, List;

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
        }],
        execute: function () {
            _export('List', List = (_dec = inject(Datacontext, Router), _dec(_class = function () {
                function List(datacontext, router) {
                    _classCallCheck(this, List);

                    this.heading = 'Body Measurement History';

                    this.datacontext = datacontext;
                    this.router = router;
                    this.measures = [];
                }

                List.prototype.activate = function activate() {
                    var _this = this;

                    this.datacontext.getAll().then(function (response) {
                        var res = response.content;
                        res.sort(function (a, b) {
                            return b.dateTime - a.dateTime;
                        });

                        _this.measures = res;
                    });
                };

                List.prototype.gotoEdit = function gotoEdit(id) {
                    this.router.navigateToRoute('edit', { id: id });
                };

                return List;
            }()) || _class));

            _export('List', List);
        }
    };
});
//# sourceMappingURL=list.js.map
