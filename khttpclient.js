(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-http.js', './ktor-ktor-client-core.js', './ktor-ktor-utils.js', './kotlinx-serialization-kotlinx-serialization-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-client-core.js'), require('./ktor-ktor-utils.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'khttpclient'.");
    }
    globalThis.khttpclient = factory(typeof khttpclient === 'undefined' ? {} : khttpclient, globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-http'], globalThis['ktor-ktor-client-core'], globalThis['ktor-ktor-utils'], globalThis['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var Unit_instance = kotlin_kotlin.$_$.q2;
  var Enum = kotlin_kotlin.$_$.ze;
  var protoOf = kotlin_kotlin.$_$.ob;
  var initMetadataForClass = kotlin_kotlin.$_$.pa;
  var VOID = kotlin_kotlin.$_$.c;
  var initMetadataForCompanion = kotlin_kotlin.$_$.qa;
  var split = kotlin_kotlin.$_$.od;
  var lastOrNull = kotlin_kotlin.$_$.y6;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var Image_getInstance = kotlin_io_ktor_ktor_http.$_$.d;
  var Video_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var ContentType_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.o;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.w8;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.k;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.g;
  var url = kotlin_io_ktor_ktor_client_core.$_$.i;
  var toString = kotlin_kotlin.$_$.rb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.h4;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.i1;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.d2;
  var headers = kotlin_io_ktor_ktor_client_core.$_$.h;
  var timeout = kotlin_io_ktor_ktor_client_core.$_$.b;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.z2;
  var ensureNotNull = kotlin_kotlin.$_$.bg;
  var MultiPart_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var contentType = kotlin_io_ktor_ktor_http.$_$.t1;
  var FormBuilder = kotlin_io_ktor_ktor_client_core.$_$.c;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.h;
  var HeadersBuilder = kotlin_io_ktor_ktor_http.$_$.f1;
  var append = kotlin_io_ktor_ktor_http.$_$.m1;
  var copyToArray = kotlin_kotlin.$_$.f6;
  var formData = kotlin_io_ktor_ktor_client_core.$_$.f;
  var MultiPartFormDataContent = kotlin_io_ktor_ktor_client_core.$_$.e;
  var getKClass = kotlin_kotlin.$_$.hc;
  var arrayOf = kotlin_kotlin.$_$.xf;
  var createKType = kotlin_kotlin.$_$.fc;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.l;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.y;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.m;
  var ParametersBuilder = kotlin_io_ktor_ktor_http.$_$.h1;
  var FormDataContent = kotlin_io_ktor_ktor_client_core.$_$.d;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.j;
  var first = kotlin_kotlin.$_$.o6;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.p;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.j;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.e8;
  var closeFinally = kotlin_kotlin.$_$.yf;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ra;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.i3;
  var toMap = kotlin_io_ktor_ktor_utils.$_$.d1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.f2;
  var THROW_CCE = kotlin_kotlin.$_$.jf;
  var isByteArray = kotlin_kotlin.$_$.ya;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.f;
  var decodeToString = kotlin_kotlin.$_$.uc;
  var constructCallableReference = kotlin_kotlin.$_$.ha;
  var lazy = kotlin_kotlin.$_$.hg;
  var KProperty1 = kotlin_kotlin.$_$.mc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ma;
  var isBlank = kotlin_kotlin.$_$.dd;
  var ProxyBuilder_instance = kotlin_io_ktor_ktor_client_core.$_$.a;
  var Url = kotlin_io_ktor_ktor_http.$_$.l1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Type, 'Type', VOID, Enum);
  initMetadataForCompanion(Companion);
  initMetadataForClass(HttpParameter, 'HttpParameter');
  initMetadataForCoroutine($proceedCOROUTINE$, CoroutineImpl);
  initMetadataForClass(HttpRequest, 'HttpRequest', HttpRequest, VOID, VOID, [0, 1]);
  initMetadataForCoroutine($fromCOROUTINE$, CoroutineImpl);
  initMetadataForCompanion(Companion_0, VOID, VOID, [1]);
  initMetadataForClass(HttpResponse, 'HttpResponse');
  //endregion
  var Type_QUERY_instance;
  var Type_PARAM_instance;
  var Type_FILE_instance;
  var Type_JSON_instance;
  var Type_entriesInitialized;
  function Type_initEntries() {
    if (Type_entriesInitialized)
      return Unit_instance;
    Type_entriesInitialized = true;
    Type_QUERY_instance = new Type('QUERY', 0);
    Type_PARAM_instance = new Type('PARAM', 1);
    Type_FILE_instance = new Type('FILE', 2);
    Type_JSON_instance = new Type('JSON', 3);
  }
  function Type(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion() {
  }
  protoOf(Companion).b4s = function (key, value) {
    return new HttpParameter(Type_QUERY_getInstance(), key, value);
  };
  protoOf(Companion).c4s = function (key, value) {
    return new HttpParameter(Type_PARAM_getInstance(), key, value);
  };
  protoOf(Companion).d4s = function (key, fileName, fileBody) {
    return new HttpParameter(Type_FILE_getInstance(), key, null, fileName, fileBody);
  };
  var Companion_instance;
  function Companion_getInstance_2() {
    return Companion_instance;
  }
  function Type_QUERY_getInstance() {
    Type_initEntries();
    return Type_QUERY_instance;
  }
  function Type_PARAM_getInstance() {
    Type_initEntries();
    return Type_PARAM_instance;
  }
  function Type_FILE_getInstance() {
    Type_initEntries();
    return Type_FILE_instance;
  }
  function Type_JSON_getInstance() {
    Type_initEntries();
    return Type_JSON_instance;
  }
  function HttpParameter(type, key, value, fileName, fileBody) {
    value = value === VOID ? null : value;
    fileName = fileName === VOID ? null : fileName;
    fileBody = fileBody === VOID ? null : fileBody;
    this.e4s_1 = type;
    this.f4s_1 = key;
    this.g4s_1 = value;
    this.h4s_1 = fileName;
    this.i4s_1 = fileBody;
  }
  protoOf(HttpParameter).j4s = function () {
    var tmp0_safe_receiver = this.h4s_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : split(tmp0_safe_receiver, ['.']);
    return tmp1_safe_receiver == null ? null : lastOrNull(tmp1_safe_receiver);
  };
  protoOf(HttpParameter).k4s = function () {
    switch (this.j4s()) {
      case 'txt':
        return Text_getInstance().f2g_1;
      case 'html':
        return Text_getInstance().i2g_1;
      case 'css':
        return Text_getInstance().g2g_1;
      case 'csv':
        return Text_getInstance().h2g_1;
      case 'jpg':
      case 'jpeg':
        return Image_getInstance().m2f_1;
      case 'png':
        return Image_getInstance().o2f_1;
      case 'gif':
        return Image_getInstance().j2f_1;
      case 'svg':
        return Image_getInstance().p2f_1;
      case 'mpeg':
        return Video_getInstance().p2g_1;
      case 'mp4':
        return Video_getInstance().q2g_1;
      case 'mov':
        return Video_getInstance().s2g_1;
      case 'webm':
        return ContentType_init_$Create$('video', 'webm');
      case 'json':
        return Application_getInstance().k2e_1;
      case 'xml':
        return Application_getInstance().q2e_1;
      case 'zip':
        return Application_getInstance().t2e_1;
      case 'pdf':
        return Application_getInstance().w2e_1;
    }
    return Application_getInstance().n2e_1;
  };
  function proceed($this, method, $completion) {
    var tmp = new $proceedCOROUTINE$($this, method, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function canSendOnly($this, param) {
    if (param.e4s_1.equals(Type_JSON_getInstance()))
      return true;
    var tmp0_subject = param.k4s();
    return tmp0_subject.equals(Application_getInstance().k2e_1) ? true : tmp0_subject.equals(Image_getInstance().m2f_1) ? true : tmp0_subject.equals(Image_getInstance().o2f_1) ? true : tmp0_subject.equals(Image_getInstance().j2f_1) ? true : tmp0_subject.equals(Video_getInstance().p2g_1) ? true : tmp0_subject.equals(Video_getInstance().q2g_1) ? true : tmp0_subject.equals(Video_getInstance().s2g_1) ? true : tmp0_subject.equals(ContentType_init_$Create$('video', 'webm')) ? true : false;
  }
  function HttpRequest$proceed$lambda($req) {
    return function ($this$HttpClient) {
      applySystemProxy($this$HttpClient);
      var tmp;
      if ($req.o4t_1) {
        applySkipSSLValidation($this$HttpClient);
        tmp = Unit_instance;
      }
      $this$HttpClient.c3b_1 = $req.n4t_1;
      return Unit_instance;
    };
  }
  function HttpRequest$proceed$lambda_0($req) {
    return function ($this$headers) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = $req.k4t_1.l1().t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        // Inline function 'kotlin.collections.component1' call
        var k = element.m1();
        // Inline function 'kotlin.collections.component2' call
        var v = element.n1();
        $this$headers.y28(k, v);
      }
      return Unit_instance;
    };
  }
  function HttpRequest$proceed$lambda_1($req) {
    return function ($this$timeout) {
      $this$timeout.c40($req.p4t_1);
      $this$timeout.d40($req.q4t_1);
      $this$timeout.e40($req.r4t_1);
      return Unit_instance;
    };
  }
  function $proceedCOROUTINE$(_this__u8e3s4, method, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t4s_1 = _this__u8e3s4;
    this.u4s_1 = method;
  }
  protoOf($proceedCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 9;
            this.a4t_1 = this.t4s_1;
            var tmp_0 = this;
            tmp_0.b4t_1 = HttpClient(HttpRequest$proceed$lambda(this.a4t_1));
            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.x4s_1 = this.b4t_1;
            this.w4s_1 = null;
            this.h8_1 = 2;
            continue $sm;
          case 2:
            this.h8_1 = 3;
            continue $sm;
          case 3:
            this.i8_1 = 8;
            this.i8_1 = 7;
            var client = this.x4s_1;
            var tmp0_safe_receiver = this.t4s_1.h4t_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              this.t4s_1.k4t_1.k2('Accept', tmp0_safe_receiver);
            }

            var tmp1_safe_receiver = this.t4s_1.i4t_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              var tmp0 = this.t4s_1.k4t_1;
              var key = 'User-Agent';
              tmp0.k2(key, tmp1_safe_receiver);
            }

            this.z4s_1 = Companion_getInstance_3();
            var this_0 = new HttpRequestBuilder();
            this_0.m3a_1 = this.u4s_1;
            if (!(this.a4t_1.g4t_1 == null)) {
              var tmp0_0 = this.a4t_1.g4t_1;
              var tmp$ret$0 = Unit_instance;
              l$ret$1: do {
                if (tmp0_0 == null) {
                  var message = 'Required value was null.';
                  throw IllegalStateException_init_$Create$(toString(message));
                } else {
                  tmp$ret$0 = tmp0_0;
                  break l$ret$1;
                }
              }
               while (false);
              var tmp_1 = tmp$ret$0;
              takeFrom(this_0.l3a_1, URLBuilder(tmp_1));
            } else {
              url(this_0, this.a4t_1.c4t_1, this.a4t_1.d4t_1, this.a4t_1.f4t_1, this.a4t_1.e4t_1);
            }

            headers(this_0, HttpRequest$proceed$lambda_0(this.a4t_1));
            timeout(this_0, HttpRequest$proceed$lambda_1(this.a4t_1));
            if (!this.t4s_1.l4t_1 && !this.t4s_1.m4t_1 && this.a4t_1.j4t_1.e1() === 1 && canSendOnly(this.t4s_1, first(this.a4t_1.j4t_1))) {
              var param = first(this.a4t_1.j4t_1);
              var body = new ByteArrayContent(ensureNotNull(param.i4s_1), param.k4s());
              if (body == null) {
                this_0.o3a_1 = NullBody_instance;
                var tmp_2 = getKClass(ByteArrayContent);
                var tmp_3;
                try {
                  tmp_3 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
                } catch ($p) {
                  var tmp_4;
                  if ($p instanceof Error) {
                    var _unused_var__etf5q3 = $p;
                    tmp_4 = null;
                  } else {
                    throw $p;
                  }
                  tmp_3 = tmp_4;
                }
                this_0.h3g(new TypeInfo(tmp_2, tmp_3));
              } else {
                if (body instanceof OutgoingContent) {
                  this_0.o3a_1 = body;
                  this_0.h3g(null);
                } else {
                  this_0.o3a_1 = body;
                  var tmp_5 = getKClass(ByteArrayContent);
                  var tmp_6;
                  try {
                    tmp_6 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
                  } catch ($p_0) {
                    var tmp_7;
                    if ($p_0 instanceof Error) {
                      var _unused_var__etf5q3_0 = $p_0;
                      tmp_7 = null;
                    } else {
                      throw $p_0;
                    }
                    tmp_6 = tmp_7;
                  }
                  this_0.h3g(new TypeInfo(tmp_5, tmp_6));
                }
              }
            } else {
              if (this.u4s_1.equals(Companion_getInstance_1().j2l_1)) {
                var _iterator__ex2g4s = this.a4t_1.j4t_1.t();
                while (_iterator__ex2g4s.u()) {
                  var element = _iterator__ex2g4s.v();
                  if (element.e4s_1.a1_1 === 0) {
                    this_0.l3a_1.v2o_1.y28(element.f4s_1, ensureNotNull(element.g4s_1));
                  } else {
                    throw IllegalStateException_init_$Create$('Request Body is not supported in the GET method.');
                  }
                }
              } else {
                var tmp0_1 = this.a4t_1.j4t_1;
                var destination = ArrayList_init_$Create$();
                var _iterator__ex2g4s_0 = tmp0_1.t();
                while (_iterator__ex2g4s_0.u()) {
                  var element_0 = _iterator__ex2g4s_0.v();
                  if (element_0.e4s_1.equals(Type_QUERY_getInstance())) {
                    destination.c1(element_0);
                  }
                }
                var queries = destination;
                var tmp0_2 = this.a4t_1.j4t_1;
                var destination_0 = ArrayList_init_$Create$();
                var _iterator__ex2g4s_1 = tmp0_2.t();
                while (_iterator__ex2g4s_1.u()) {
                  var element_1 = _iterator__ex2g4s_1.v();
                  if (element_1.e4s_1.equals(Type_PARAM_getInstance())) {
                    destination_0.c1(element_1);
                  }
                }
                var params = destination_0;
                var tmp0_3 = this.a4t_1.j4t_1;
                var destination_1 = ArrayList_init_$Create$();
                var _iterator__ex2g4s_2 = tmp0_3.t();
                while (_iterator__ex2g4s_2.u()) {
                  var element_2 = _iterator__ex2g4s_2.v();
                  if (element_2.e4s_1.equals(Type_FILE_getInstance())) {
                    destination_1.c1(element_2);
                  }
                }
                var files = destination_1;
                if (!queries.r()) {
                  var _iterator__ex2g4s_3 = queries.t();
                  while (_iterator__ex2g4s_3.u()) {
                    var element_3 = _iterator__ex2g4s_3.v();
                    this_0.l3a_1.v2o_1.y28(element_3.f4s_1, ensureNotNull(element_3.g4s_1));
                  }
                }
                var tmp_8;
                if (!params.r()) {
                  tmp_8 = true;
                } else {
                  tmp_8 = !files.r();
                }
                if (tmp_8) {
                  if (this.t4s_1.m4t_1) {
                    if (!files.r()) {
                      throw IllegalStateException_init_$Create$('ApplicationFormUrlEncoded cannot send files.');
                    }
                    contentType(this_0, Application_getInstance().v2e_1);
                    Companion_getInstance_0();
                    var this_1 = ParametersBuilder();
                    var _iterator__ex2g4s_4 = params.t();
                    while (_iterator__ex2g4s_4.u()) {
                      var element_4 = _iterator__ex2g4s_4.v();
                      this_1.y28(element_4.f4s_1, ensureNotNull(element_4.g4s_1));
                    }
                    var body_0 = new FormDataContent(this_1.b2h());
                    if (body_0 == null) {
                      this_0.o3a_1 = NullBody_instance;
                      var tmp_9 = getKClass(FormDataContent);
                      var tmp_10;
                      try {
                        tmp_10 = createKType(getKClass(FormDataContent), arrayOf([]), false);
                      } catch ($p_1) {
                        var tmp_11;
                        if ($p_1 instanceof Error) {
                          var _unused_var__etf5q3_1 = $p_1;
                          tmp_11 = null;
                        } else {
                          throw $p_1;
                        }
                        tmp_10 = tmp_11;
                      }
                      this_0.h3g(new TypeInfo(tmp_9, tmp_10));
                    } else {
                      if (body_0 instanceof OutgoingContent) {
                        this_0.o3a_1 = body_0;
                        this_0.h3g(null);
                      } else {
                        this_0.o3a_1 = body_0;
                        var tmp_12 = getKClass(FormDataContent);
                        var tmp_13;
                        try {
                          tmp_13 = createKType(getKClass(FormDataContent), arrayOf([]), false);
                        } catch ($p_2) {
                          var tmp_14;
                          if ($p_2 instanceof Error) {
                            var _unused_var__etf5q3_2 = $p_2;
                            tmp_14 = null;
                          } else {
                            throw $p_2;
                          }
                          tmp_13 = tmp_14;
                        }
                        this_0.h3g(new TypeInfo(tmp_12, tmp_13));
                      }
                    }
                  } else {
                    contentType(this_0, MultiPart_getInstance().y2f_1);
                    var this_2 = new FormBuilder();
                    var _iterator__ex2g4s_5 = params.t();
                    while (_iterator__ex2g4s_5.u()) {
                      var element_5 = _iterator__ex2g4s_5.v();
                      this_2.b49(element_5.f4s_1, ensureNotNull(element_5.g4s_1));
                    }
                    var _iterator__ex2g4s_6 = files.t();
                    while (_iterator__ex2g4s_6.u()) {
                      var element_6 = _iterator__ex2g4s_6.v();
                      var tmp_15 = ensureNotNull(element_6.i4s_1);
                      Companion_getInstance();
                      var this_3 = new HeadersBuilder();
                      append(this_3, 'Content-Type', element_6.k4s());
                      this_3.y28('Content-Disposition', 'filename=' + element_6.h4s_1);
                      this_2.c49(element_6.f4s_1, tmp_15, this_3.b2h());
                    }
                    var this_4 = this_2.d49();
                    var body_1 = new MultiPartFormDataContent(formData(copyToArray(this_4).slice()));
                    if (body_1 == null) {
                      this_0.o3a_1 = NullBody_instance;
                      var tmp_16 = getKClass(MultiPartFormDataContent);
                      var tmp_17;
                      try {
                        tmp_17 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                      } catch ($p_3) {
                        var tmp_18;
                        if ($p_3 instanceof Error) {
                          var _unused_var__etf5q3_3 = $p_3;
                          tmp_18 = null;
                        } else {
                          throw $p_3;
                        }
                        tmp_17 = tmp_18;
                      }
                      this_0.h3g(new TypeInfo(tmp_16, tmp_17));
                    } else {
                      if (body_1 instanceof OutgoingContent) {
                        this_0.o3a_1 = body_1;
                        this_0.h3g(null);
                      } else {
                        this_0.o3a_1 = body_1;
                        var tmp_19 = getKClass(MultiPartFormDataContent);
                        var tmp_20;
                        try {
                          tmp_20 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                        } catch ($p_4) {
                          var tmp_21;
                          if ($p_4 instanceof Error) {
                            var _unused_var__etf5q3_4 = $p_4;
                            tmp_21 = null;
                          } else {
                            throw $p_4;
                          }
                          tmp_20 = tmp_21;
                        }
                        this_0.h3g(new TypeInfo(tmp_19, tmp_20));
                      }
                    }
                  }
                }
              }
            }

            this.h8_1 = 4;
            suspendResult = (new HttpStatement(this_0, client)).w4b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var ARGUMENT = suspendResult;
            this.h8_1 = 5;
            suspendResult = this.z4s_1.t4t(ARGUMENT, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.y4s_1 = suspendResult;
            this.i8_1 = 9;
            this.h8_1 = 6;
            var tmp_22 = this;
            continue $sm;
          case 6:
            var tmp_23 = this.y4s_1;
            this.i8_1 = 9;
            closeFinally(this.x4s_1, this.w4s_1);
            this.v4s_1 = tmp_23;
            this.h8_1 = 11;
            continue $sm;
          case 7:
            this.i8_1 = 8;
            var tmp_24 = this.k8_1;
            if (tmp_24 instanceof Error) {
              var e = this.k8_1;
              var tmp_25 = this;
              this.w4s_1 = e;
              throw e;
            } else {
              throw this.k8_1;
            }

          case 8:
            this.i8_1 = 9;
            var t = this.k8_1;
            closeFinally(this.x4s_1, this.w4s_1);
            throw t;
          case 9:
            throw this.k8_1;
          case 10:
            this.i8_1 = 9;
            closeFinally(this.x4s_1, this.w4s_1);
            if (false) {
              this.h8_1 = 1;
              continue $sm;
            }

            this.h8_1 = 11;
            continue $sm;
          case 11:
            return this.v4s_1;
        }
      } catch ($p_5) {
        var e_0 = $p_5;
        if (this.i8_1 === 9) {
          throw e_0;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e_0;
        }
      }
     while (true);
  };
  function HttpRequest() {
    this.c4t_1 = 'https';
    this.d4t_1 = null;
    this.e4t_1 = null;
    this.f4t_1 = null;
    this.g4t_1 = null;
    this.h4t_1 = null;
    this.i4t_1 = 'kHttpClient/1.0';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.j4t_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.k4t_1 = LinkedHashMap_init_$Create$();
    this.l4t_1 = false;
    this.m4t_1 = false;
    this.n4t_1 = true;
    this.o4t_1 = false;
    this.p4t_1 = null;
    this.q4t_1 = null;
    this.r4t_1 = null;
  }
  protoOf(HttpRequest).u4t = function (url) {
    // Inline function 'kotlin.also' call
    this.g4t_1 = url;
    return this;
  };
  protoOf(HttpRequest).v4t = function (accept) {
    // Inline function 'kotlin.also' call
    this.h4t_1 = accept;
    return this;
  };
  protoOf(HttpRequest).w4t = function (key, value) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.set' call
    this.k4t_1.k2(key, value);
    return this;
  };
  protoOf(HttpRequest).x4t = function (followRedirect) {
    // Inline function 'kotlin.also' call
    this.n4t_1 = followRedirect;
    return this;
  };
  protoOf(HttpRequest).y4t = function (key, value) {
    // Inline function 'kotlin.also' call
    this.j4t_1.c1(Companion_instance.b4s(key, toString(value)));
    return this;
  };
  protoOf(HttpRequest).z4t = function (queries) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = queries.l1().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var k = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var v = element.n1();
      this.y4t(k, v);
    }
    return this;
  };
  protoOf(HttpRequest).a4u = function (key, value) {
    // Inline function 'kotlin.also' call
    this.j4t_1.c1(Companion_instance.c4s(key, toString(value)));
    return this;
  };
  protoOf(HttpRequest).b4u = function (params) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = params.l1().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var k = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var v = element.n1();
      this.a4u(k, v);
    }
    return this;
  };
  protoOf(HttpRequest).d4s = function (key, fileName, fileBody) {
    // Inline function 'kotlin.also' call
    this.j4t_1.c1(Companion_instance.d4s(key, fileName, fileBody));
    return this;
  };
  protoOf(HttpRequest).c4u = function ($completion) {
    return proceed(this, Companion_getInstance_1().j2l_1, $completion);
  };
  protoOf(HttpRequest).d4u = function ($completion) {
    return proceed(this, Companion_getInstance_1().k2l_1, $completion);
  };
  protoOf(HttpRequest).e4u = function ($completion) {
    return proceed(this, Companion_getInstance_1().l2l_1, $completion);
  };
  function HttpResponse$Companion$mapper$lambda($this$Json) {
    $this$Json.u4i_1 = true;
    return Unit_instance;
  }
  function $fromCOROUTINE$(_this__u8e3s4, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n4u_1 = _this__u8e3s4;
    this.o4u_1 = response;
  }
  protoOf($fromCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.q4u_1 = this.o4u_1.l3c().g2o_1;
            this.p4u_1 = toMap(this.o4u_1.i2l());
            var this_0 = this.o4u_1;
            this.h8_1 = 1;
            var tmp_0 = this_0.b3c();
            var tmp_1 = PrimitiveClasses_getInstance().sb();
            var tmp_2;
            try {
              tmp_2 = createKType(PrimitiveClasses_getInstance().sb(), arrayOf([]), false);
            } catch ($p) {
              var tmp_3;
              if ($p instanceof Error) {
                var _unused_var__etf5q3 = $p;
                tmp_3 = null;
              } else {
                throw $p;
              }
              tmp_2 = tmp_3;
            }

            suspendResult = tmp_0.y3b(new TypeInfo(tmp_1, tmp_2), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = (!(suspendResult == null) ? isByteArray(suspendResult) : false) ? suspendResult : THROW_CCE();
            return new HttpResponse(this.q4u_1, this.p4u_1, ARGUMENT);
          case 2:
            throw this.k8_1;
        }
      } catch ($p_0) {
        var e = $p_0;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.s4t_1 = Json(VOID, HttpResponse$Companion$mapper$lambda);
  }
  protoOf(Companion_0).t4t = function (response, $completion) {
    var tmp = new $fromCOROUTINE$(this, response, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  var Companion_instance_0;
  function Companion_getInstance_3() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function HttpResponse$stringBody$delegate$lambda(this$0) {
    return function () {
      return decodeToString(this$0.t4u_1);
    };
  }
  function HttpResponse$_get_stringBody_$ref_nmyr7m() {
    return constructCallableReference(function (p0) {
      return p0.v4u();
    }, 1, 0, 32);
  }
  function HttpResponse(status, headers, body) {
    Companion_getInstance_3();
    this.r4u_1 = status;
    this.s4u_1 = headers;
    this.t4u_1 = body;
    var tmp = this;
    tmp.u4u_1 = lazy(HttpResponse$stringBody$delegate$lambda(this));
  }
  protoOf(HttpResponse).v4u = function () {
    var tmp0 = this.u4u_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('stringBody', 1, tmp, HttpResponse$_get_stringBody_$ref_nmyr7m(), null);
    return tmp0.n1();
  };
  function applySystemProxy(_this__u8e3s4) {
    var proxyUrl = proxyUrlFromEnv();
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(proxyUrl == null || isBlank(proxyUrl))) {
      _this__u8e3s4.s3b(applySystemProxy$lambda(proxyUrl));
    }
  }
  function applySystemProxy$lambda($proxyUrl) {
    return function ($this$engine) {
      $this$engine.y3g_1 = ProxyBuilder_instance.y4h(Url($proxyUrl));
      return Unit_instance;
    };
  }
  function applySkipSSLValidation(_this__u8e3s4) {
    throw IllegalStateException_init_$Create$('Skip SSL Validation is not supported on JS target.');
  }
  function proxyUrlFromEnv() {
    return null;
  }
  //region block: init
  Companion_instance = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = HttpRequest;
  //endregion
  return _;
}));

//# sourceMappingURL=khttpclient.js.map
