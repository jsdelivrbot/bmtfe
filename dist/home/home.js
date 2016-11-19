'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var Home, UpperValueConverter;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export('Home', Home = function Home() {
                _classCallCheck(this, Home);

                this.heading = 'Some cool charts here!';
                this.data = {
                    datasets: [{
                        label: 'Scatter Dataset',
                        data: [{ x: -10, y: 0 }, { x: 0, y: 10 }, { x: 10, y: 5 }]
                    }]
                };
            });

            _export('Home', Home);

            _export('UpperValueConverter', UpperValueConverter = function () {
                function UpperValueConverter() {
                    _classCallCheck(this, UpperValueConverter);
                }

                UpperValueConverter.prototype.toView = function toView(value) {
                    return value && value.toUpperCase();
                };

                return UpperValueConverter;
            }());

            _export('UpperValueConverter', UpperValueConverter);
        }
    };
});
//# sourceMappingURL=home.js.map
