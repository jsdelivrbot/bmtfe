'use strict';

System.register(['numeral'], function (_export, _context) {
  "use strict";

  var numeral, NumberFormatValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_numeral) {
      numeral = _numeral.default;
    }],
    execute: function () {
      _export('NumberFormatValueConverter', NumberFormatValueConverter = function () {
        function NumberFormatValueConverter() {
          _classCallCheck(this, NumberFormatValueConverter);
        }

        NumberFormatValueConverter.prototype.toView = function toView(value, format) {
          return numeral(value).format(format);
        };

        return NumberFormatValueConverter;
      }());

      _export('NumberFormatValueConverter', NumberFormatValueConverter);
    }
  };
});
//# sourceMappingURL=number-format.js.map
