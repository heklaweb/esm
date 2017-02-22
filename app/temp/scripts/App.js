/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import $ from 'jquery';

var ProcessData = function () {
    function ProcessData() {
        _classCallCheck(this, ProcessData);
    }

    _createClass(ProcessData, [{
        key: "renderData",
        value: function renderData(data) {
            // In Zukunft kann hierfür evtl. "Handlebars.js" verwendet werden!
            console.log('... und werden nun verarbeitet ...');
            var technikerContainer = document.getElementById("techniker");
            var level1Container = document.getElementById("level1");
            var level2Container = document.getElementById("level2");
            var htmlString = "";

            for (var i = 0; i < data.length; i++) {
                var kategorie = data[i].kategorie;
                var classname = data[i].class;
                var subclass = '';
                var id = data[i].id;
                var name = data[i].name;
                var vorname = data[i].vorname;
                var bemerkung = data[i].bemerkung;

                if (classname) {
                    if (classname.length > 0) {
                        subclass += ' ' + classname;
                    }
                } else {
                    switch (kategorie) {
                        case 'TE':
                            subclass = ' Urlaub-krank';
                            break;
                        case 'L1':
                            subclass = ' L1';
                            break;
                        case 'L2':
                            subclass = ' L2';
                            break;
                    }
                }

                htmlString += '<div class="box' + subclass + '">' + '<h4>' + id + '</h4>' + '<p>' +
                // name + ' ' + vorname + '<br>' +
                bemerkung + '</p>';

                htmlString += '</div>';

                switch (kategorie) {
                    case 'TE':
                        technikerContainer.insertAdjacentHTML('beforeend', htmlString);
                        break;
                    case 'L1':
                        level1Container.insertAdjacentHTML('beforeend', htmlString);
                        break;
                    case 'L2':
                        level2Container.insertAdjacentHTML('beforeend', htmlString);
                        break;
                    default:
                        console.log("Kategorie ist nicht definiert: " + kategorie);
                }
                htmlString = "";
            }
        }
    }]);

    return ProcessData;
}();

exports.default = ProcessData;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ProcessData = __webpack_require__(0);

var _ProcessData2 = _interopRequireDefault(_ProcessData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GetData = function () {
    function GetData() {
        _classCallCheck(this, GetData);

        this.get();
    }

    _createClass(GetData, [{
        key: 'get',
        value: function get() {
            var ourRequest = new XMLHttpRequest();
            // var dataUrl = 'https://gist.githubusercontent.com/heklaweb/16fd7c7bdc427c4bd8ca0877057559d7/raw/1b3784616845184107b304c4ce535ed322e84ee8/data.json'
            var dataUrl = 'https://raw.githubusercontent.com/heklaweb/esm/master/app/assets/data/data.json';
            ourRequest.open('GET', dataUrl);
            ourRequest.onload = function () {
                if (ourRequest.status >= 200 && ourRequest.status < 400) {
                    var ourData = JSON.parse(ourRequest.responseText);
                    console.log('Die Daten wurden erfolgreich geladen ...');
                    new _ProcessData2.default().renderData(ourData);
                } else {
                    console.log("We connected to the server, but it returned an error.");
                }
            };

            ourRequest.onerror = function () {
                console.log("Connection error");
            };

            ourRequest.send();
        }
    }]);

    return GetData;
}();

exports.default = GetData;

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ProcessData = __webpack_require__(0);

var _ProcessData2 = _interopRequireDefault(_ProcessData);

var _GetData = __webpack_require__(1);

var _GetData2 = _interopRequireDefault(_GetData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _GetData2.default();

/***/ })
/******/ ]);