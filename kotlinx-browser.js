(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-browser'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-browser'.");
    }
    globalThis['kotlinx-browser'] = factory(typeof globalThis['kotlinx-browser'] === 'undefined' ? {} : globalThis['kotlinx-browser'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var VOID = kotlin_kotlin.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.yi;
  //endregion
  //region block: pre-declaration
  //endregion
  function toInt8Array(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4;
  }
  function get(_this__u8e3s4, index) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4[index];
  }
  function get_ARRAYBUFFER(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    return 'arraybuffer';
  }
  function AddEventListenerOptions(passive, once, capture) {
    passive = passive === VOID ? false : passive;
    once = once === VOID ? false : once;
    capture = capture === VOID ? false : capture;
    var o = {};
    o['passive'] = passive;
    o['once'] = once;
    o['capture'] = capture;
    return (!(o == null) ? !(o == null) : false) ? o : THROW_CCE();
  }
  function get_FOLLOW(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    return 'follow';
  }
  function get_MANUAL(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    return 'manual';
  }
  function get_undefined() {
    return undefined_0;
  }
  var undefined_0;
  //region block: init
  undefined_0 = null;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-browser.js.map
