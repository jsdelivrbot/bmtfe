'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var App;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('App', App = function () {
        function App() {
          _classCallCheck(this, App);
        }

        App.prototype.configureRouter = function configureRouter(config, router) {
          config.title = 'BMT';
          config.map([{ route: ['', 'home'], name: 'home', moduleId: 'home/home', nav: true, title: 'Home' }, { route: 'new', name: 'new', moduleId: 'measure/measure', nav: true, title: 'New Measurement' }, { route: 'edit', name: 'edit', moduleId: 'measure/measure', nav: false, title: 'Edit Measurement' }, { route: 'history', name: 'history', moduleId: 'measure/list', nav: true, title: 'History' }]);

          this.router = router;
        };

        return App;
      }());

      _export('App', App);
    }
  };
});
//# sourceMappingURL=app.js.map
