(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['ktor-ktor-serialization'] = factory(typeof globalThis['ktor-ktor-serialization'] === 'undefined' ? {} : globalThis['ktor-ktor-serialization']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-serialization.js.map
