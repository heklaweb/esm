;
(function (global) {
  'use strict';

  // console.log("In KPCjs");
  var KPCjs = function (Params) {
    return new KPCjs.init(Params);
  };

  KPCjs.prototype = {};

  KPCjs.init = function (Params) {
    var self = this;
    // Hier könnten nun z.B. Defaultwerte für Parameter gesetzt werden
    self.name = "K&amp;P Computer, Service und Vertriebs-GmbH";

    // Hier könnten die übergebenen Parameter zerlegt werden

  };

  KPCjs.init.prototype = KPCjs.prototype;

  global.KPCjs = global.K$ = KPCjs;

}(window));
// (this, function () {
//   return kpc
// });