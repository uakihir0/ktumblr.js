(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './ktumblr-core.js', './kotlin-kotlin-stdlib.js', './ktor-ktor-client-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./ktumblr-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-client-core.js'));
  else {
    if (typeof globalThis['ktumblr-core'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.ktumblr:all'. Its dependency 'ktumblr-core' was not found. Please, check whether 'ktumblr-core' is loaded prior to 'work.socialhub.ktumblr:all'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.ktumblr:all'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'work.socialhub.ktumblr:all'.");
    }
    if (typeof globalThis['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.ktumblr:all'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'work.socialhub.ktumblr:all'.");
    }
    globalThis['work.socialhub.ktumblr:all'] = factory(typeof globalThis['work.socialhub.ktumblr:all'] === 'undefined' ? {} : globalThis['work.socialhub.ktumblr:all'], globalThis['ktumblr-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-client-core']);
  }
}(function (_, kotlin_work_socialhub_ktumblr_core, kotlin_kotlin, kotlin_io_ktor_ktor_client_core) {
  'use strict';
  //region block: imports
  var TumblrAuth = kotlin_work_socialhub_ktumblr_core.$_$.a;
  var TumblrImpl = kotlin_work_socialhub_ktumblr_core.$_$.b;
  var protoOf = kotlin_kotlin.$_$.sd;
  var VOID = kotlin_kotlin.$_$.c;
  var initMetadataForObject = kotlin_kotlin.$_$.xc;
  var defineProp = kotlin_kotlin.$_$.kc;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(KtumblrFactory, 'KtumblrFactory');
  //endregion
  function KtumblrFactory() {
    KtumblrFactory_instance = this;
  }
  protoOf(KtumblrFactory).instance_4edyo_k$ = function (clientId, clientSecret, accessToken, refreshToken) {
    return new TumblrImpl(new TumblrAuth(clientId, clientSecret, accessToken, refreshToken));
  };
  protoOf(KtumblrFactory).instance = function (clientId, clientSecret, accessToken, refreshToken, $super) {
    clientId = clientId === VOID ? '' : clientId;
    clientSecret = clientSecret === VOID ? null : clientSecret;
    accessToken = accessToken === VOID ? null : accessToken;
    refreshToken = refreshToken === VOID ? null : refreshToken;
    return $super === VOID ? this.instance_4edyo_k$(clientId, clientSecret, accessToken, refreshToken) : $super.instance_4edyo_k$.call(this, clientId, clientSecret, accessToken, refreshToken);
  };
  var KtumblrFactory_instance;
  function KtumblrFactory_getInstance() {
    if (KtumblrFactory_instance == null)
      new KtumblrFactory();
    return KtumblrFactory_instance;
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    defineProp($work$socialhub$ktumblr, 'KtumblrFactory', KtumblrFactory_getInstance, VOID, true);
  }
  $jsExportAll$(_);
  kotlin_io_ktor_ktor_client_core.$jsExportAll$(_);
  kotlin_work_socialhub_ktumblr_core.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=ktumblr-js.js.map
