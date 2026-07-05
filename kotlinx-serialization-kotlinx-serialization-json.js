(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-json'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var protoOf = kotlin_kotlin.$_$.ob;
  var initMetadataForObject = kotlin_kotlin.$_$.va;
  var VOID = kotlin_kotlin.$_$.c;
  var initMetadataForClass = kotlin_kotlin.$_$.pa;
  var toString = kotlin_kotlin.$_$.rb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.d4;
  var Unit_instance = kotlin_kotlin.$_$.q2;
  var charSequenceLength = kotlin_kotlin.$_$.ea;
  var charSequenceGet = kotlin_kotlin.$_$.da;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g;
  var equals = kotlin_kotlin.$_$.ja;
  var toString_0 = kotlin_kotlin.$_$.lg;
  var Enum = kotlin_kotlin.$_$.ze;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.jf;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var isInterface = kotlin_kotlin.$_$.eb;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var initMetadataForInterface = kotlin_kotlin.$_$.ta;
  var initMetadataForCompanion = kotlin_kotlin.$_$.qa;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.s3;
  var hashCode = kotlin_kotlin.$_$.oa;
  var joinToString = kotlin_kotlin.$_$.t6;
  var KtMap = kotlin_kotlin.$_$.g5;
  var numberRangeToNumber = kotlin_kotlin.$_$.lb;
  var ClosedRange = kotlin_kotlin.$_$.vb;
  var contains = kotlin_kotlin.$_$.zb;
  var convertToInt = kotlin_kotlin.$_$.g9;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.o4;
  var toDoubleOrNull = kotlin_kotlin.$_$.zd;
  var toDouble = kotlin_kotlin.$_$.ae;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.h4;
  var KtList = kotlin_kotlin.$_$.d5;
  var getKClassFromExpression = kotlin_kotlin.$_$.gc;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var getBooleanHashCode = kotlin_kotlin.$_$.la;
  var getStringHashCode = kotlin_kotlin.$_$.na;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.d2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var KProperty1 = kotlin_kotlin.$_$.mc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ma;
  var constructCallableReference = kotlin_kotlin.$_$.ha;
  var lazy = kotlin_kotlin.$_$.hg;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var captureStack = kotlin_kotlin.$_$.z9;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var defineProp = kotlin_kotlin.$_$.ia;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var charSequenceSubSequence = kotlin_kotlin.$_$.fa;
  var coerceAtLeast = kotlin_kotlin.$_$.wb;
  var coerceAtMost = kotlin_kotlin.$_$.xb;
  var isBlank = kotlin_kotlin.$_$.dd;
  var Collection = kotlin_kotlin.$_$.y4;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.i3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.z2;
  var singleOrNull = kotlin_kotlin.$_$.o7;
  var emptyMap = kotlin_kotlin.$_$.j6;
  var getValue = kotlin_kotlin.$_$.q6;
  var copyOf = kotlin_kotlin.$_$.d6;
  var arrayCopy = kotlin_kotlin.$_$.n5;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.xe;
  var invoke = kotlin_kotlin.$_$.cg;
  var CoroutineImpl = kotlin_kotlin.$_$.w8;
  var DeepRecursiveScope = kotlin_kotlin.$_$.ye;
  var Unit = kotlin_kotlin.$_$.uf;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.e8;
  var initMetadataForLambda = kotlin_kotlin.$_$.ua;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ra;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var getKClass = kotlin_kotlin.$_$.hc;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var ensureNotNull = kotlin_kotlin.$_$.bg;
  var substringBefore = kotlin_kotlin.$_$.ud;
  var removeSuffix = kotlin_kotlin.$_$.jd;
  var substringAfter = kotlin_kotlin.$_$.td;
  var contains_0 = kotlin_kotlin.$_$.sc;
  var plus = kotlin_kotlin.$_$.jg;
  var missingFieldExceptionWithNewMessage = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var convertToByte = kotlin_kotlin.$_$.f9;
  var fromInt = kotlin_kotlin.$_$.k9;
  var equalsLong = kotlin_kotlin.$_$.j9;
  var convertToShort = kotlin_kotlin.$_$.h9;
  var IllegalArgumentException = kotlin_kotlin.$_$.cf;
  var isFinite = kotlin_kotlin.$_$.eg;
  var isFinite_0 = kotlin_kotlin.$_$.dg;
  var charCodeAt = kotlin_kotlin.$_$.ca;
  var toUInt = kotlin_kotlin.$_$.ie;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.a1;
  var toULong = kotlin_kotlin.$_$.je;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.h1;
  var toUByte = kotlin_kotlin.$_$.he;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.t;
  var toUShort = kotlin_kotlin.$_$.ke;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.o1;
  var Companion_getInstance = kotlin_kotlin.$_$.n2;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.o2;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.m2;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.p2;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var setOf = kotlin_kotlin.$_$.n7;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.m;
  var equals_0 = kotlin_kotlin.$_$.yc;
  var numberToChar = kotlin_kotlin.$_$.mb;
  var toString_1 = kotlin_kotlin.$_$.n;
  var toByte = kotlin_kotlin.$_$.pb;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ig;
  var startsWith = kotlin_kotlin.$_$.pd;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var single = kotlin_kotlin.$_$.md;
  var Char = kotlin_kotlin.$_$.ue;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var emptySet = kotlin_kotlin.$_$.k6;
  var plus_0 = kotlin_kotlin.$_$.f7;
  var toInt = kotlin_kotlin.$_$.de;
  var toList = kotlin_kotlin.$_$.u7;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var toNumber = kotlin_kotlin.$_$.v9;
  var last = kotlin_kotlin.$_$.z6;
  var removeLast = kotlin_kotlin.$_$.k7;
  var lastIndexOf = kotlin_kotlin.$_$.hd;
  var Long = kotlin_kotlin.$_$.ef;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.i;
  var multiply = kotlin_kotlin.$_$.p9;
  var add = kotlin_kotlin.$_$.b9;
  var subtract = kotlin_kotlin.$_$.u9;
  var compare = kotlin_kotlin.$_$.e9;
  var numberToLong = kotlin_kotlin.$_$.r9;
  var negate = kotlin_kotlin.$_$.q9;
  var charArray = kotlin_kotlin.$_$.ba;
  var indexOf = kotlin_kotlin.$_$.bd;
  var indexOf_0 = kotlin_kotlin.$_$.cd;
  var substring = kotlin_kotlin.$_$.wd;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.b3;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Json, 'Json');
  initMetadataForObject(Default, 'Default', VOID, Json);
  initMetadataForClass(JsonBuilder, 'JsonBuilder');
  initMetadataForClass(JsonImpl, 'JsonImpl', VOID, Json);
  initMetadataForClass(JsonClassDiscriminator, 'JsonClassDiscriminator');
  initMetadataForClass(JsonIgnoreUnknownKeys, 'JsonIgnoreUnknownKeys');
  initMetadataForClass(JsonNames, 'JsonNames');
  initMetadataForClass(JsonConfiguration, 'JsonConfiguration');
  initMetadataForClass(ClassDiscriminatorMode, 'ClassDiscriminatorMode', VOID, Enum);
  initMetadataForClass(JsonContentPolymorphicSerializer, 'JsonContentPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForInterface(JsonDecoder, 'JsonDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(JsonElement, 'JsonElement', VOID, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(JsonObject, 'JsonObject', VOID, JsonElement, [KtMap], VOID, VOID, {0: JsonObjectSerializer_getInstance});
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(JsonArray, 'JsonArray', VOID, JsonElement, [KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
  initMetadataForObject(JsonNull, 'JsonNull', VOID, JsonPrimitive, [SerializerFactory], VOID, VOID, {0: JsonNullSerializer_getInstance});
  initMetadataForClass(JsonLiteral, 'JsonLiteral', VOID, JsonPrimitive);
  initMetadataForObject(JsonElementSerializer, 'JsonElementSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonObjectDescriptor, 'JsonObjectDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonObjectSerializer, 'JsonObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonArrayDescriptor, 'JsonArrayDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonArraySerializer, 'JsonArraySerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonNullSerializer, 'JsonNullSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonLiteralSerializer, 'JsonLiteralSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(defer$1, VOID, VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(JsonException, 'JsonException', VOID, SerializationException);
  initMetadataForClass(JsonDecodingException, 'JsonDecodingException', VOID, JsonException);
  initMetadataForClass(JsonEncodingException, 'JsonEncodingException', VOID, JsonException);
  initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
  initMetadataForObject(Tombstone, 'Tombstone');
  initMetadataForObject(RedactedKey, 'RedactedKey');
  initMetadataForClass(JsonPath, 'JsonPath');
  initMetadataForClass(JsonSerializersModuleValidator, 'JsonSerializersModuleValidator', VOID, VOID, [SerializersModuleCollector]);
  initMetadataForLambda(JsonTreeReader$readDeepRecursive$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($readObjectCOROUTINE$, CoroutineImpl);
  initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [1]);
  initMetadataForClass(Key, 'Key', Key);
  initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
  initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
  initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, AbstractDecoder, [JsonDecoder]);
  initMetadataForClass(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', VOID, AbstractDecoder);
  initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, NamedValueDecoder, [JsonDecoder]);
  initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder', VOID, JsonTreeDecoder);
  initMetadataForClass(WriteMode, 'WriteMode', VOID, Enum);
  initMetadataForClass(AbstractJsonLexer, 'AbstractJsonLexer');
  initMetadataForObject(CharMappings, 'CharMappings');
  initMetadataForClass(StringJsonLexer, 'StringJsonLexer', VOID, AbstractJsonLexer);
  initMetadataForClass(StringJsonLexerWithComments, 'StringJsonLexerWithComments', VOID, StringJsonLexer);
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, new JsonConfiguration(), EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.z4h_1 = configuration;
    this.a4i_1 = serializersModule;
    this.b4i_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).br = function () {
    return this.a4i_1;
  };
  protoOf(Json).c4i = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.nn(), null);
    var result = input.lq(deserializer);
    lexer.r4i();
    return result;
  };
  protoOf(Json).d4i = function (deserializer, element) {
    return readJson(this, element, deserializer);
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.l4j();
    return new JsonImpl(conf, builder.j4j_1);
  }
  function JsonBuilder(json) {
    this.s4i_1 = json.z4h_1.m4j_1;
    this.t4i_1 = json.z4h_1.r4j_1;
    this.u4i_1 = json.z4h_1.n4j_1;
    this.v4i_1 = json.z4h_1.o4j_1;
    this.w4i_1 = json.z4h_1.q4j_1;
    this.x4i_1 = json.z4h_1.s4j_1;
    this.y4i_1 = json.z4h_1.t4j_1;
    this.z4i_1 = json.z4h_1.v4j_1;
    this.a4j_1 = json.z4h_1.c4k_1;
    this.b4j_1 = json.z4h_1.x4j_1;
    this.c4j_1 = json.z4h_1.y4j_1;
    this.d4j_1 = json.z4h_1.z4j_1;
    this.e4j_1 = json.z4h_1.a4k_1;
    this.f4j_1 = json.z4h_1.b4k_1;
    this.g4j_1 = json.z4h_1.w4j_1;
    this.h4j_1 = json.z4h_1.p4j_1;
    this.i4j_1 = json.z4h_1.u4j_1;
    this.j4j_1 = json.br();
    this.k4j_1 = json.z4h_1.d4k_1;
  }
  protoOf(JsonBuilder).l4j = function () {
    if (this.i4j_1) {
      // Inline function 'kotlin.require' call
      if (!(this.z4i_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.a4j_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.w4i_1) {
      // Inline function 'kotlin.require' call
      if (!(this.x4i_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.x4i_1 === '    ')) {
      var tmp0 = this.x4i_1;
      var tmp$ret$6;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(tmp0)) {
          var element = charSequenceGet(tmp0, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$6 = false;
            break $l$block;
          }
        }
        tmp$ret$6 = true;
      }
      var allWhitespaces = tmp$ret$6;
      // Inline function 'kotlin.require' call
      if (!allWhitespaces) {
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.x4i_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.s4i_1, this.u4i_1, this.v4i_1, this.h4j_1, this.w4i_1, this.t4i_1, this.x4i_1, this.y4i_1, this.i4j_1, this.z4i_1, this.g4j_1, this.b4j_1, this.c4j_1, this.d4j_1, this.e4j_1, this.f4j_1, this.a4j_1, this.k4j_1);
  };
  function validateConfiguration($this) {
    if (equals($this.br(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new JsonSerializersModuleValidator($this.z4h_1);
    $this.br().b13(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator() {
  }
  function JsonIgnoreUnknownKeys() {
  }
  function JsonNames() {
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode, exceptionsWithDebugInfo) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    allowTrailingComma = allowTrailingComma === VOID ? false : allowTrailingComma;
    allowComments = allowComments === VOID ? false : allowComments;
    classDiscriminatorMode = classDiscriminatorMode === VOID ? ClassDiscriminatorMode_POLYMORPHIC_getInstance() : classDiscriminatorMode;
    exceptionsWithDebugInfo = exceptionsWithDebugInfo === VOID ? true : exceptionsWithDebugInfo;
    this.m4j_1 = encodeDefaults;
    this.n4j_1 = ignoreUnknownKeys;
    this.o4j_1 = isLenient;
    this.p4j_1 = allowStructuredMapKeys;
    this.q4j_1 = prettyPrint;
    this.r4j_1 = explicitNulls;
    this.s4j_1 = prettyPrintIndent;
    this.t4j_1 = coerceInputValues;
    this.u4j_1 = useArrayPolymorphism;
    this.v4j_1 = classDiscriminator;
    this.w4j_1 = allowSpecialFloatingPointValues;
    this.x4j_1 = useAlternativeNames;
    this.y4j_1 = namingStrategy;
    this.z4j_1 = decodeEnumsCaseInsensitive;
    this.a4k_1 = allowTrailingComma;
    this.b4k_1 = allowComments;
    this.c4k_1 = classDiscriminatorMode;
    this.d4k_1 = exceptionsWithDebugInfo;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.m4j_1 + ', ignoreUnknownKeys=' + this.n4j_1 + ', isLenient=' + this.o4j_1 + ', ' + ('allowStructuredMapKeys=' + this.p4j_1 + ', prettyPrint=' + this.q4j_1 + ', explicitNulls=' + this.r4j_1 + ', ') + ("prettyPrintIndent='" + this.s4j_1 + "', coerceInputValues=" + this.t4j_1 + ', useArrayPolymorphism=' + this.u4j_1 + ', ') + ("classDiscriminator='" + this.v4j_1 + "', allowSpecialFloatingPointValues=" + this.w4j_1 + ', ') + ('useAlternativeNames=' + this.x4j_1 + ', namingStrategy=' + toString_0(this.y4j_1) + ', decodeEnumsCaseInsensitive=' + this.z4j_1 + ', ') + ('allowTrailingComma=' + this.a4k_1 + ', allowComments=' + this.b4k_1 + ', classDiscriminatorMode=' + this.c4k_1.toString() + ', exceptionsWithDebugInfo=' + this.d4k_1 + ')');
  };
  var ClassDiscriminatorMode_NONE_instance;
  var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
  var ClassDiscriminatorMode_POLYMORPHIC_instance;
  var ClassDiscriminatorMode_entriesInitialized;
  function ClassDiscriminatorMode_initEntries() {
    if (ClassDiscriminatorMode_entriesInitialized)
      return Unit_instance;
    ClassDiscriminatorMode_entriesInitialized = true;
    ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
    ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
    ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
  }
  function ClassDiscriminatorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClassDiscriminatorMode_NONE_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_NONE_instance;
  }
  function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_POLYMORPHIC_instance;
  }
  function JsonContentPolymorphicSerializer(baseClass) {
    this.e4k_1 = baseClass;
    this.f4k_1 = buildSerialDescriptor('JsonContentPolymorphicSerializer<' + this.e4k_1.o() + '>', SEALED_getInstance(), []);
  }
  protoOf(JsonContentPolymorphicSerializer).nn = function () {
    return this.f4k_1;
  };
  protoOf(JsonContentPolymorphicSerializer).on = function (decoder) {
    var input = asJsonDecoder(decoder);
    var tree = input.g4k();
    var tmp = this.h4k(tree);
    var actualSerializer = isInterface(tmp, KSerializer) ? tmp : THROW_CCE();
    return input.i4k().d4i(actualSerializer, tree);
  };
  function JsonDecoder() {
  }
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance_3() {
    return Companion_instance;
  }
  function JsonElement() {
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_4() {
    return Companion_instance_0;
  }
  function JsonObject$toString$lambda(_destruct__k2r9zo) {
    // Inline function 'kotlin.collections.component1' call
    var k = _destruct__k2r9zo.m1();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.n1();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(this_0, k);
    this_0.s(_Char___init__impl__6a9atx(58));
    this_0.w(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.j4k_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.j4k_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.j4k_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.j4k_1.l1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).r = function () {
    return this.j4k_1.r();
  };
  protoOf(JsonObject).o27 = function (key) {
    return this.j4k_1.q2(key);
  };
  protoOf(JsonObject).q2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.o27((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).k4k = function (value) {
    return this.j4k_1.r2(value);
  };
  protoOf(JsonObject).r2 = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.k4k(value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonObject).b28 = function (key) {
    return this.j4k_1.s2(key);
  };
  protoOf(JsonObject).s2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.b28((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).asJsReadonlyMapView = function () {
    return this.j4k_1.asJsReadonlyMapView();
  };
  protoOf(JsonObject).e1 = function () {
    return this.j4k_1.e1();
  };
  protoOf(JsonObject).o2 = function () {
    return this.j4k_1.o2();
  };
  protoOf(JsonObject).p2 = function () {
    return this.j4k_1.p2();
  };
  protoOf(JsonObject).l1 = function () {
    return this.j4k_1.l1();
  };
  function get_jsonObject(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonObject ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonObject');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_5() {
    return Companion_instance_1;
  }
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.e3c();
  };
  function get_intOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.exceptionToNull' call
    var tmp;
    try {
      tmp = parseLongImpl(_this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var tmp0_elvis_lhs = tmp;
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    var result = tmp_1;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(-2147483648, 2147483647);
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
      return null;
    return convertToInt(result);
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.exceptionToNumberFormatException' call
    var tmp;
    try {
      tmp = parseLongImpl(_this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.e());
      } else {
        throw $p;
      }
    }
    var result = tmp;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(-2147483648, 2147483647);
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
      throw NumberFormatException_init_$Create$(_this__u8e3s4.e3c() + ' is not an Int');
    return convertToInt(result);
  }
  function get_longOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.exceptionToNull' call
    var tmp;
    try {
      tmp = parseLongImpl(_this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function get_long(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.exceptionToNumberFormatException' call
    var tmp;
    try {
      tmp = parseLongImpl(_this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.e());
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function get_floatOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloatOrNull' call
    var this_0 = _this__u8e3s4.e3c();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDoubleOrNull(this_0);
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.e3c();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_doubleOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDoubleOrNull(_this__u8e3s4.e3c());
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.e3c());
  }
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull(_this__u8e3s4.e3c());
  }
  function get_boolean(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = toBooleanStrictOrNull(_this__u8e3s4.e3c());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$(_this__u8e3s4.toString() + ' does not represent a Boolean');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_6() {
    return Companion_instance_2;
  }
  function JsonArray(content) {
    JsonElement.call(this);
    this.n4k_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.n4k_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.n4k_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.n4k_1, ',', '[', ']');
  };
  protoOf(JsonArray).r = function () {
    return this.n4k_1.r();
  };
  protoOf(JsonArray).o4k = function (element) {
    return this.n4k_1.h2(element);
  };
  protoOf(JsonArray).h2 = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.o4k(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).t = function () {
    return this.n4k_1.t();
  };
  protoOf(JsonArray).d1 = function (index) {
    return this.n4k_1.d1(index);
  };
  protoOf(JsonArray).j1 = function (index) {
    return this.n4k_1.j1(index);
  };
  protoOf(JsonArray).i2 = function (fromIndex, toIndex) {
    return this.n4k_1.i2(fromIndex, toIndex);
  };
  protoOf(JsonArray).e1 = function () {
    return this.n4k_1.e1();
  };
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
  }
  function parseLongImpl(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return StringJsonLexer_0(Default_getInstance(), _this__u8e3s4.e3c()).p4k();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.q4k_1 = 'null';
  }
  protoOf(JsonNull).l4k = function () {
    return false;
  };
  protoOf(JsonNull).e3c = function () {
    return this.q4k_1;
  };
  protoOf(JsonNull).r4k = function () {
    return JsonNullSerializer_getInstance();
  };
  protoOf(JsonNull).cx = function (typeParamsSerializers) {
    return this.r4k();
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.s4k_1 = isString;
    this.t4k_1 = coerceToInlineType;
    this.u4k_1 = toString(body);
    if (!(this.t4k_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.t4k_1.uo()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).l4k = function () {
    return this.s4k_1;
  };
  protoOf(JsonLiteral).e3c = function () {
    return this.u4k_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.s4k_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      printQuoted(this_0, this.u4k_1);
      tmp = this_0.toString();
    } else {
      tmp = this.u4k_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.s4k_1 === other.s4k_1))
      return false;
    if (!(this.u4k_1 === other.u4k_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.s4k_1);
    result = imul(31, result) + getStringHashCode(this.u4k_1) | 0;
    return result;
  };
  function get_jsonPrimitive(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.e3c();
    }
    return tmp;
  }
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
    }
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.zn('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.zn('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.zn('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.zn('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.zn('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().v4k_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().w4k_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().x4k_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().y4k_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().z4k_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.a4l_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).nn = function () {
    return this.a4l_1;
  };
  protoOf(JsonElementSerializer).on = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.g4k();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.b4l_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).nn();
    this.c4l_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).so = function () {
    return this.c4l_1;
  };
  protoOf(JsonObjectDescriptor).xo = function (index) {
    return this.b4l_1.xo(index);
  };
  protoOf(JsonObjectDescriptor).yo = function (name) {
    return this.b4l_1.yo(name);
  };
  protoOf(JsonObjectDescriptor).zo = function (index) {
    return this.b4l_1.zo(index);
  };
  protoOf(JsonObjectDescriptor).ap = function (index) {
    return this.b4l_1.ap(index);
  };
  protoOf(JsonObjectDescriptor).bp = function (index) {
    return this.b4l_1.bp(index);
  };
  protoOf(JsonObjectDescriptor).to = function () {
    return this.b4l_1.to();
  };
  protoOf(JsonObjectDescriptor).lo = function () {
    return this.b4l_1.lo();
  };
  protoOf(JsonObjectDescriptor).uo = function () {
    return this.b4l_1.uo();
  };
  protoOf(JsonObjectDescriptor).vo = function () {
    return this.b4l_1.vo();
  };
  protoOf(JsonObjectDescriptor).wo = function () {
    return this.b4l_1.wo();
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.y4k_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).nn = function () {
    return this.y4k_1;
  };
  protoOf(JsonObjectSerializer).on = function (decoder) {
    verify(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).on(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.v4k_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).nn = function () {
    return this.v4k_1;
  };
  protoOf(JsonPrimitiveSerializer).on = function (decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.g4k();
    if (!(result instanceof JsonPrimitive)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.i4k().z4h_1.d4k_1) {
        var tmp$ret$3 = toString(result);
        tmp = toString(minify(tmp$ret$3));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue), shortMessage, -1, null, inputValue, null);
    }
    return result;
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.d4l_1 = ListSerializer(JsonElementSerializer_getInstance()).nn();
    this.e4l_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).so = function () {
    return this.e4l_1;
  };
  protoOf(JsonArrayDescriptor).xo = function (index) {
    return this.d4l_1.xo(index);
  };
  protoOf(JsonArrayDescriptor).yo = function (name) {
    return this.d4l_1.yo(name);
  };
  protoOf(JsonArrayDescriptor).zo = function (index) {
    return this.d4l_1.zo(index);
  };
  protoOf(JsonArrayDescriptor).ap = function (index) {
    return this.d4l_1.ap(index);
  };
  protoOf(JsonArrayDescriptor).bp = function (index) {
    return this.d4l_1.bp(index);
  };
  protoOf(JsonArrayDescriptor).to = function () {
    return this.d4l_1.to();
  };
  protoOf(JsonArrayDescriptor).lo = function () {
    return this.d4l_1.lo();
  };
  protoOf(JsonArrayDescriptor).uo = function () {
    return this.d4l_1.uo();
  };
  protoOf(JsonArrayDescriptor).vo = function () {
    return this.d4l_1.vo();
  };
  protoOf(JsonArrayDescriptor).wo = function () {
    return this.d4l_1.wo();
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.z4k_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).nn = function () {
    return this.z4k_1;
  };
  protoOf(JsonArraySerializer).on = function (decoder) {
    verify(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).on(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    this.w4k_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).nn = function () {
    return this.w4k_1;
  };
  protoOf(JsonNullSerializer).on = function (decoder) {
    verify(decoder);
    if (decoder.xp()) {
      throw decodingExceptionOf("Expected 'null' literal");
    }
    decoder.yp();
    return JsonNull_getInstance();
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.x4k_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).nn = function () {
    return this.x4k_1;
  };
  protoOf(JsonLiteralSerializer).on = function (decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.g4k();
    if (!(result instanceof JsonLiteral)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.i4k().z4h_1.d4k_1) {
        var tmp$ret$3 = toString(result);
        tmp = toString(minify(tmp$ret$3));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue), shortMessage, -1, null, inputValue, null);
    }
    return result;
  };
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function verify(decoder) {
    asJsonDecoder(decoder);
  }
  function _get_original__l7ku1m($this) {
    var tmp0 = $this.f4l_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
    return tmp0.n1();
  }
  function defer$o$_get_original_$ref_3cje7k() {
    return constructCallableReference(function (p0) {
      return _get_original__l7ku1m(p0);
    }, 1, 0, 30);
  }
  function defer$1($deferred) {
    this.f4l_1 = lazy($deferred);
  }
  protoOf(defer$1).so = function () {
    return _get_original__l7ku1m(this).so();
  };
  protoOf(defer$1).to = function () {
    return _get_original__l7ku1m(this).to();
  };
  protoOf(defer$1).vo = function () {
    return _get_original__l7ku1m(this).vo();
  };
  protoOf(defer$1).xo = function (index) {
    return _get_original__l7ku1m(this).xo(index);
  };
  protoOf(defer$1).yo = function (name) {
    return _get_original__l7ku1m(this).yo(name);
  };
  protoOf(defer$1).zo = function (index) {
    return _get_original__l7ku1m(this).zo(index);
  };
  protoOf(defer$1).ap = function (index) {
    return _get_original__l7ku1m(this).ap(index);
  };
  protoOf(defer$1).bp = function (index) {
    return _get_original__l7ku1m(this).bp(index);
  };
  function JsonDecodingException(fullMessage, shortMessage, offset, path, input, hint) {
    JsonException.call(this, fullMessage);
    captureStack(this, JsonDecodingException);
    this.h4l_1 = shortMessage;
    this.i4l_1 = offset;
    this.j4l_1 = path;
    this.k4l_1 = input;
    this.l4l_1 = hint;
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
    this.m4k_1 = message;
    delete this.message;
  }
  protoOf(JsonException).e = function () {
    return this.m4k_1;
  };
  function JsonEncodingException(shortMessage, classSerialName, hint) {
    classSerialName = classSerialName === VOID ? null : classSerialName;
    hint = hint === VOID ? null : hint;
    JsonException.call(this, formatEncodingException(shortMessage, hint));
    captureStack(this, JsonEncodingException);
    this.n4l_1 = shortMessage;
    this.o4l_1 = classSerialName;
    this.p4l_1 = hint;
  }
  function readIfAbsent($this, descriptor, index) {
    $this.r4l_1 = (!descriptor.bp(index) && descriptor.ap(index).lo());
    return $this.r4l_1;
  }
  function JsonElementMarker$readIfAbsent$ref(p0) {
    return constructCallableReference(function (p0_0, p1) {
      var tmp0 = p0;
      return readIfAbsent(tmp0, p0_0, p1);
    }, 2, 0, 31, 'readIfAbsent', [p0]);
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.q4l_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.r4l_1 = false;
  }
  protoOf(JsonElementMarker).s4l = function (index) {
    this.q4l_1.xu(index);
  };
  protoOf(JsonElementMarker).t4l = function () {
    return this.q4l_1.yu();
  };
  function minify(_this__u8e3s4, offset) {
    offset = offset === VOID ? -1 : offset;
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var endIndex = charSequenceLength(_this__u8e3s4);
      return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    var tmp2 = coerceAtLeast(start_0, 0);
    // Inline function 'kotlin.text.substring' call
    var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    return prefix + toString(charSequenceSubSequence(_this__u8e3s4, tmp2, endIndex_0)) + suffix;
  }
  function access$formatDecodingException$tJsonExceptionsKt(offset, shortMessage, path, hint, input) {
    return formatDecodingException(offset, shortMessage, path, hint, input);
  }
  function decodingExceptionOf(shortMessage) {
    return new JsonDecodingException(formatDecodingException(-1, shortMessage, null, null, null), shortMessage, -1, null, null, null);
  }
  function formatDecodingException(offset, shortMessage, path, hint, input) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    if (offset >= 0) {
      this_0.q('Unexpected JSON token at offset ' + offset + ': ');
    }
    this_0.q(shortMessage);
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(path == null || isBlank(path))) {
      this_0.q(' at path: ');
      this_0.q(path);
    }
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(hint == null || isBlank(hint))) {
      this_0.q('\n' + hint);
    }
    if (!(input == null)) {
      this_0.q('\nJSON input: ');
      this_0.q(input);
    }
    return this_0.toString();
  }
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.u4l('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.n4i_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.v4l(nonFiniteFpMessage(result, null), VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.so() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.to().toString() + "'"), keyDescriptor.so(), "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
  }
  function access$nonFiniteFpMessage$tJsonExceptionsKt(value, key) {
    return nonFiniteFpMessage(value, key);
  }
  function decodingExceptionOf_0(_this__u8e3s4, shortMessage, offset, path, hint, input) {
    // Inline function 'kotlinx.serialization.json.internal.ifDebugInput' call
    var tmp;
    if (_this__u8e3s4.m4i_1.d4k_1) {
      tmp = toString(minify(input, offset));
    } else {
      tmp = null;
    }
    var inputValue = tmp;
    return new JsonDecodingException(formatDecodingException(offset, shortMessage, path, hint, inputValue), shortMessage, offset, path, inputValue, hint);
  }
  function formatEncodingException(shortMessage, hint) {
    var tmp;
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (hint == null || isBlank(hint)) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    return shortMessage + tmp;
  }
  function nonFiniteFpMessage(value, key) {
    return 'Unexpected special floating-point value ' + toString(value) + (!(key == null) ? ' with key ' + key + '. ' : '. ') + 'By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification.';
  }
  function get_JsonDeserializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonDeserializationNamesKey;
  }
  var JsonDeserializationNamesKey;
  var JsonSerializationNamesKey;
  function ignoreUnknownKeys(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp;
    if (json.z4h_1.n4j_1) {
      tmp = true;
    } else {
      var tmp0 = _this__u8e3s4.wo();
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(tmp0, Collection)) {
          tmp_0 = tmp0.r();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (element instanceof JsonIgnoreUnknownKeys) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    if (decodeCaseInsensitive(json, _this__u8e3s4)) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = name.toLowerCase();
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$0);
    }
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
    var index = _this__u8e3s4.yo(name);
    if (!(index === -3))
      return index;
    if (!json.z4h_1.x4j_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.so() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.to(), CLASS_getInstance()) ? json.z4h_1.y4j_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.x4l(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.z4h_1.z4j_1 && equals(descriptor.to(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).s2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.vo();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.zo(i);
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination = ArrayList_init_$Create$();
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (element instanceof JsonNames) {
            destination.c1(element);
          }
        }
        var tmp0_safe_receiver = singleOrNull(destination);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y4l_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var inductionVariable_0 = 0;
          var last_0 = tmp1_safe_receiver.length;
          while (inductionVariable_0 < last_0) {
            var element_0 = tmp1_safe_receiver[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp;
            if (useLowercaseEnums) {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp = element_0.toLowerCase();
            } else {
              tmp = element_0;
            }
            buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
          }
        }
        var tmp_0;
        if (useLowercaseEnums) {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = _this__u8e3s4.xo(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.z4l(_this__u8e3s4, i, _this__u8e3s4.xo(i));
        } else {
          tmp_0 = null;
        }
        var nameToPut = tmp_0;
        if (nameToPut == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
        }
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (builder.r()) {
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.to(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).q2(name)) {
      throw decodingExceptionOf("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.xo(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.xo(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.k2(name, index);
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function _init_properties_JsonNamesMap_kt__cbbp0k() {
    if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonDeserializationNamesKey = new Key();
      JsonSerializationNamesKey = new Key();
    }
  }
  function Tombstone() {
  }
  var Tombstone_instance;
  function Tombstone_getInstance() {
    return Tombstone_instance;
  }
  function RedactedKey() {
  }
  var RedactedKey_instance;
  function RedactedKey_getInstance() {
    return RedactedKey_instance;
  }
  function resize($this) {
    var newSize = imul($this.d4m_1, 2);
    $this.b4m_1 = copyOf($this.b4m_1, newSize);
    var tmp = 0;
    var tmp_0 = new Int32Array(newSize);
    while (tmp < newSize) {
      tmp_0[tmp] = -1;
      tmp = tmp + 1 | 0;
    }
    var newIndices = tmp_0;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.c4m_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_1, newIndices, 0, 0, endIndex);
    $this.c4m_1 = newIndices;
  }
  function JsonPath(configuration) {
    this.a4m_1 = configuration;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.b4m_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.c4m_1 = tmp_2;
    this.d4m_1 = -1;
  }
  protoOf(JsonPath).e4m = function (sd) {
    this.d4m_1 = this.d4m_1 + 1 | 0;
    var depth = this.d4m_1;
    if (depth === this.b4m_1.length) {
      resize(this);
    }
    this.b4m_1[depth] = sd;
  };
  protoOf(JsonPath).f4m = function (index) {
    this.c4m_1[this.d4m_1] = index;
  };
  protoOf(JsonPath).g4m = function (key) {
    var tmp;
    if (!(this.c4m_1[this.d4m_1] === -2)) {
      this.d4m_1 = this.d4m_1 + 1 | 0;
      tmp = this.d4m_1 === this.b4m_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.b4m_1[this.d4m_1] = this.a4m_1.d4k_1 ? key : RedactedKey_instance;
    this.c4m_1[this.d4m_1] = -2;
  };
  protoOf(JsonPath).h4m = function () {
    if (this.c4m_1[this.d4m_1] === -2) {
      this.b4m_1[this.d4m_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).i4m = function () {
    var depth = this.d4m_1;
    if (this.c4m_1[depth] === -2) {
      this.c4m_1[depth] = -1;
      this.d4m_1 = this.d4m_1 - 1 | 0;
    }
    if (!(this.d4m_1 === -1)) {
      this.d4m_1 = this.d4m_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).j4m = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.q('$');
    // Inline function 'kotlin.repeat' call
    var times = this.d4m_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.b4m_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.to(), LIST_getInstance())) {
            if (!(this.c4m_1[index] === -1)) {
              this_0.q('[');
              this_0.bc(this.c4m_1[index]);
              this_0.q(']');
            }
          } else {
            var idx = this.c4m_1[index];
            if (idx >= 0) {
              this_0.q('.');
              this_0.q(element.xo(idx));
            }
          }
        } else {
          if (element === RedactedKey_instance) {
            this_0.q('[<debug info disabled>]');
          } else {
            if (!(element === Tombstone_instance)) {
              this_0.q('[');
              this_0.q("'");
              this_0.w(element);
              this_0.q("'");
              this_0.q(']');
            }
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.j4m();
  };
  function checkKind($this, descriptor, actualClass) {
    var kind = descriptor.to();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.o() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.k4m_1)
      return Unit_instance;
    if (!$this.l4m_1)
      return Unit_instance;
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) || equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.o() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function JsonSerializersModuleValidator(configuration) {
    this.k4m_1 = configuration.u4j_1;
    this.l4m_1 = !configuration.c4k_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  protoOf(JsonSerializersModuleValidator).k13 = function (kClass, provider) {
  };
  protoOf(JsonSerializersModuleValidator).n13 = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.nn();
    checkKind(this, descriptor, actualClass);
  };
  protoOf(JsonSerializersModuleValidator).o13 = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(JsonSerializersModuleValidator).p13 = function (baseClass, defaultDeserializerProvider) {
  };
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.m4m_1.q4m(6);
    if ($this.m4m_1.r4m() === 4) {
      $this.m4m_1.v4l('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.m4m_1.s4m()) {
      var key = $this.n4m_1 ? $this.m4m_1.u4m() : $this.m4m_1.t4m();
      $this.m4m_1.q4m(5);
      var element = $this.v4m();
      // Inline function 'kotlin.collections.set' call
      result.k2(key, element);
      lastToken = $this.m4m_1.w4m();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.m4m_1.v4l('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.m4m_1.q4m(7);
    } else if (lastToken === 4) {
      if (!$this.o4m_1) {
        invalidTrailingComma($this.m4m_1);
      }
      $this.m4m_1.q4m(7);
    }
    return new JsonObject(result);
  }
  function readObject_0($this, $receiver, $completion) {
    var tmp = new $readObjectCOROUTINE$($this, $receiver, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function readArray($this) {
    var lastToken = $this.m4m_1.w4m();
    if ($this.m4m_1.r4m() === 4) {
      $this.m4m_1.v4l('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.m4m_1.s4m()) {
      var element = $this.v4m();
      result.c1(element);
      lastToken = $this.m4m_1.w4m();
      if (!(lastToken === 4)) {
        var tmp0 = $this.m4m_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.n4i_1;
        if (!condition) {
          var tmp$ret$2 = 'Expected end of the array or comma';
          tmp0.v4l(tmp$ret$2, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.m4m_1.q4m(9);
    } else if (lastToken === 4) {
      if (!$this.o4m_1) {
        invalidTrailingComma($this.m4m_1, 'array');
      }
      $this.m4m_1.q4m(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.n4m_1 || !isString) {
      tmp = $this.m4m_1.u4m();
    } else {
      tmp = $this.m4m_1.t4m();
    }
    var string = tmp;
    if (!isString && string === 'null')
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_instance);
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.t4n_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).x4n = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.y4n($this$DeepRecursiveFunction, it, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).b9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.x4n(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 3;
            var tmp0_subject = this.t4n_1.m4m_1.r4m();
            if (tmp0_subject === 1) {
              this.w4n_1 = readValue(this.t4n_1, true);
              this.h8_1 = 2;
              continue $sm;
            } else {
              if (tmp0_subject === 0) {
                this.w4n_1 = readValue(this.t4n_1, false);
                this.h8_1 = 2;
                continue $sm;
              } else {
                if (tmp0_subject === 6) {
                  this.h8_1 = 1;
                  suspendResult = readObject_0(this.t4n_1, this.u4n_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject === 8) {
                    this.w4n_1 = readArray(this.t4n_1);
                    this.h8_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.t4n_1.m4m_1.v4l("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.w4n_1 = suspendResult;
            this.h8_1 = 2;
            continue $sm;
          case 2:
            return this.w4n_1;
          case 3:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 3) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).y4n = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.t4n_1, completion);
    i.u4n_1 = $this$DeepRecursiveFunction;
    i.v4n_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$DeepRecursiveFunction, it, $completion) {
      return i.x4n($this$DeepRecursiveFunction, it, $completion);
    }, 2);
  }
  function $readObjectCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f4n_1 = _this__u8e3s4;
    this.g4n_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 5;
            this.i4n_1 = this.f4n_1;
            this.j4n_1 = this.i4n_1.m4m_1.q4m(6);
            if (this.i4n_1.m4m_1.r4m() === 4) {
              this.i4n_1.m4m_1.v4l('Unexpected leading comma');
            }

            var tmp_0 = this;
            tmp_0.h4n_1 = LinkedHashMap_init_$Create$();
            this.h8_1 = 1;
            continue $sm;
          case 1:
            if (!this.i4n_1.m4m_1.s4m()) {
              this.h8_1 = 4;
              continue $sm;
            }

            this.k4n_1 = this.i4n_1.n4m_1 ? this.i4n_1.m4m_1.u4m() : this.i4n_1.m4m_1.t4m();
            this.i4n_1.m4m_1.q4m(5);
            this.h8_1 = 2;
            suspendResult = this.g4n_1.cl(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.h4n_1;
            var key = this.k4n_1;
            tmp0.k2(key, element);
            this.j4n_1 = this.i4n_1.m4m_1.w4m();
            var tmp0_subject = this.j4n_1;
            if (tmp0_subject === 4) {
              this.h8_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.h8_1 = 4;
                continue $sm;
              } else {
                this.i4n_1.m4m_1.v4l('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.h8_1 = 1;
            continue $sm;
          case 4:
            if (this.j4n_1 === 6) {
              this.i4n_1.m4m_1.q4m(7);
            } else if (this.j4n_1 === 4) {
              if (!this.i4n_1.o4m_1) {
                invalidTrailingComma(this.i4n_1.m4m_1);
              }
              this.i4n_1.m4m_1.q4m(7);
            }

            return new JsonObject(this.h4n_1);
          case 5:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 5) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.m4m_1 = lexer;
    this.n4m_1 = configuration.o4j_1;
    this.o4m_1 = configuration.a4k_1;
    this.p4m_1 = 0;
  }
  protoOf(JsonTreeReader).v4m = function () {
    var token = this.m4m_1.r4m();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.p4m_1 = this.p4m_1 + 1 | 0;
      if (this.p4m_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.p4m_1 = this.p4m_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.m4m_1.v4l('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.wo().t();
    while (_iterator__ex2g4s.u()) {
      var annotation = _iterator__ex2g4s.v();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.z4n_1;
    }
    return json.z4h_1.v4j_1;
  }
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.w4l_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).a4o = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.w4l_1;
    var value_0 = this_0.s2(descriptor);
    var tmp;
    if (value_0 == null) {
      var answer = createMapForCache(2);
      this_0.k2(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp0 = tmp;
    var tmp2 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp0.k2(tmp2, value_1);
  };
  protoOf(DescriptorSchemaCache).x4l = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.b4o(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.a4o(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).b4o = function (descriptor, key) {
    var tmp0_safe_receiver = this.w4l_1.s2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.s2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.c4o_1 = discriminatorToSkip;
  }
  function trySkip($this, $receiver, unknownKey) {
    if ($receiver == null)
      return false;
    if ($receiver.c4o_1 === unknownKey) {
      $receiver.c4o_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.dr(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.g4i_1.r4m() === 4) {
      $this.g4i_1.v4l('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.i4i_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.i4i_1 === -1)) {
        hasComma = $this.g4i_1.e4o();
      }
    } else {
      $this.g4i_1.d4o(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.g4i_1.s4m()) {
      if (decodingKey) {
        if ($this.i4i_1 === -1) {
          var tmp0 = $this.g4i_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.n4i_1;
          if (!condition) {
            var tmp$ret$1 = 'Unexpected leading comma';
            tmp0.v4l(tmp$ret$1, position);
          }
        } else {
          var tmp0_0 = $this.g4i_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp0_0.n4i_1;
          if (!condition_0) {
            var tmp$ret$3 = 'Expected comma after the key-value pair';
            tmp0_0.v4l(tmp$ret$3, position_0);
          }
        }
      }
      $this.i4i_1 = $this.i4i_1 + 1 | 0;
      tmp = $this.i4i_1;
    } else {
      if (hasComma && !$this.e4i_1.z4h_1.a4k_1) {
        invalidTrailingComma($this.g4i_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.e4i_1;
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.bp(index);
      var elementDescriptor = descriptor.ap(index);
      var tmp;
      if (isOptional && !elementDescriptor.lo()) {
        tmp = $this.g4i_1.f4o(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.to(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.lo()) {
          tmp_0 = $this.g4i_1.f4o(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_2;
        }
        var tmp0_elvis_lhs = $this.g4i_1.g4o($this.k4i_1.o4j_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.z4h_1.r4j_1 && elementDescriptor.lo();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          $this.g4i_1.t4m();
          tmp$ret$0 = true;
          break $l$block_2;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.g4i_1.e4o();
    while ($this.g4i_1.s4m()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.g4i_1.d4o(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.e4i_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.k4i_1.t4j_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.g4i_1.e4o();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.l4i_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.s4l(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, descriptor, key);
      }
    }
    if (hasComma && !$this.e4i_1.z4h_1.a4k_1) {
      invalidTrailingComma($this.g4i_1);
    }
    var tmp1_safe_receiver = $this.l4i_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.t4l();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, descriptor, key) {
    if (ignoreUnknownKeys(descriptor, $this.e4i_1) || trySkip($this, $this.j4i_1, key)) {
      $this.g4i_1.i4o($this.k4i_1.o4j_1);
    } else {
      $this.g4i_1.o4i_1.i4m();
      $this.g4i_1.h4o(key);
    }
    return $this.g4i_1.e4o();
  }
  function decodeListIndex($this) {
    var hasComma = $this.g4i_1.e4o();
    var tmp;
    if ($this.g4i_1.s4m()) {
      if (!($this.i4i_1 === -1) && !hasComma) {
        $this.g4i_1.v4l('Expected end of the array or comma');
      }
      $this.i4i_1 = $this.i4i_1 + 1 | 0;
      tmp = $this.i4i_1;
    } else {
      if (hasComma && !$this.e4i_1.z4h_1.a4k_1) {
        invalidTrailingComma($this.g4i_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.k4i_1.o4j_1) {
      tmp = $this.g4i_1.k4o();
    } else {
      tmp = $this.g4i_1.j4o();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.e4i_1 = json;
    this.f4i_1 = mode;
    this.g4i_1 = lexer;
    this.h4i_1 = this.e4i_1.br();
    this.i4i_1 = -1;
    this.j4i_1 = discriminatorHolder;
    this.k4i_1 = this.e4i_1.z4h_1;
    this.l4i_1 = this.k4i_1.r4j_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).i4k = function () {
    return this.e4i_1;
  };
  protoOf(StreamingJsonDecoder).br = function () {
    return this.h4i_1;
  };
  protoOf(StreamingJsonDecoder).g4k = function () {
    return (new JsonTreeReader(this.e4i_1.z4h_1, this.g4i_1)).v4m();
  };
  protoOf(StreamingJsonDecoder).lq = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.e4i_1.z4h_1.u4j_1;
      }
      if (tmp) {
        return deserializer.on(this);
      }
      var discriminator = classDiscriminator(deserializer.nn(), this.e4i_1);
      var tmp0_elvis_lhs = this.g4i_1.l4o(discriminator, this.k4i_1.o4j_1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp2 = isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE();
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
          var tmp_1;
          if (!(tmp2 instanceof AbstractPolymorphicSerializer)) {
            tmp_1 = true;
          } else {
            tmp_1 = this.i4k().z4h_1.u4j_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp2.on(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp2.nn(), this.i4k());
          var tmp2_0 = this.g4k();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp2.nn().so();
          if (!(tmp2_0 instanceof JsonObject)) {
            var tmp2_1 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2_0).o() + ' as the serialized body of ' + serialName;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path = this.g4i_1.o4i_1.j4m();
            var tmp_2;
            if (this.i4k().z4h_1.d4k_1) {
              var tmp$ret$6 = toString(tmp2_0);
              tmp_2 = toString(minify(tmp$ret$6));
            } else {
              tmp_2 = null;
            }
            var inputValue = tmp_2;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, path, null, inputValue), tmp2_1, -1, path, inputValue, null);
          }
          var jsonTree = tmp2_0;
          var tmp0_safe_receiver = jsonTree.b28(discriminator_0);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
          var tmp_3;
          try {
            tmp_3 = findPolymorphicSerializer(tmp2, this, type);
          } catch ($p) {
            var tmp_4;
            if ($p instanceof SerializationException) {
              var it = $p;
              // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
              var shortMessage = ensureNotNull(it.message);
              var tmp_5;
              if (this.i4k().z4h_1.d4k_1) {
                var tmp$ret$10 = jsonTree.toString();
                tmp_5 = toString(minify(tmp$ret$10));
              } else {
                tmp_5 = null;
              }
              var inputValue_0 = tmp_5;
              throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue_0), shortMessage, -1, null, inputValue_0, null);
            } else {
              throw $p;
            }
          }
          var tmp_6 = tmp_3;
          var actualSerializer = isInterface(tmp_6, DeserializationStrategy) ? tmp_6 : THROW_CCE();
          tmp$ret$0 = readPolymorphicJson(this.i4k(), discriminator_0, jsonTree, actualSerializer);
        }
        return tmp$ret$0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var type_0 = tmp_0;
      var tmp_7;
      try {
        tmp_7 = findPolymorphicSerializer(deserializer, this, type_0);
      } catch ($p_0) {
        var tmp_8;
        if ($p_0 instanceof SerializationException) {
          var it_0 = $p_0;
          var message = removeSuffix(substringBefore(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10)), '.');
          var hint = substringAfter(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10), '');
          this.g4i_1.v4l(message, VOID, hint);
        } else {
          throw $p_0;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.j4i_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.on(this);
    } catch ($p_1) {
      if ($p_1 instanceof MissingFieldException) {
        var e = $p_1;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw missingFieldExceptionWithNewMessage(e, plus(e.message, ' at path: ') + this.g4i_1.o4i_1.j4m());
      } else {
        throw $p_1;
      }
    }
  };
  protoOf(StreamingJsonDecoder).mq = function (descriptor) {
    var newMode = switchMode(this.e4i_1, descriptor);
    this.g4i_1.o4i_1.e4m(descriptor);
    this.g4i_1.d4o(newMode.o4o_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.a1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.e4i_1, newMode, this.g4i_1, descriptor, this.j4i_1);
        break;
      default:
        var tmp_0;
        if (this.f4i_1.equals(newMode) && this.e4i_1.z4h_1.r4j_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.e4i_1, newMode, this.g4i_1, descriptor, this.j4i_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).nq = function (descriptor) {
    if (descriptor.vo() === 0 && ignoreUnknownKeys(descriptor, this.e4i_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.g4i_1.e4o() && !this.e4i_1.z4h_1.a4k_1) {
      invalidTrailingComma(this.g4i_1, '');
    }
    this.g4i_1.d4o(this.f4i_1.p4o_1);
    this.g4i_1.o4i_1.i4m();
  };
  protoOf(StreamingJsonDecoder).xp = function () {
    var tmp;
    var tmp0_safe_receiver = this.l4i_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r4l_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.g4i_1.q4o();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).yp = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).yq = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.f4i_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.g4i_1.o4i_1.h4m();
    }
    var value = protoOf(AbstractDecoder).yq.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.g4i_1.o4i_1.g4m(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).dr = function (descriptor) {
    var index;
    switch (this.f4i_1.a1_1) {
      case 0:
        index = decodeObjectIndex(this, descriptor);
        break;
      case 2:
        index = decodeMapIndex(this);
        break;
      default:
        index = decodeListIndex(this);
        break;
    }
    if (!this.f4i_1.equals(WriteMode_MAP_getInstance())) {
      this.g4i_1.o4i_1.f4m(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).zp = function () {
    return this.g4i_1.r4o();
  };
  protoOf(StreamingJsonDecoder).aq = function () {
    var value = this.g4i_1.s4o();
    if (!equalsLong(value, fromInt(convertToByte(value)))) {
      this.g4i_1.v4l("Failed to parse byte for input '" + value.toString() + "'");
    }
    return convertToByte(value);
  };
  protoOf(StreamingJsonDecoder).bq = function () {
    var value = this.g4i_1.s4o();
    if (!equalsLong(value, fromInt(convertToShort(value)))) {
      this.g4i_1.v4l("Failed to parse short for input '" + value.toString() + "'");
    }
    return convertToShort(value);
  };
  protoOf(StreamingJsonDecoder).cq = function () {
    var value = this.g4i_1.s4o();
    if (!equalsLong(value, fromInt(convertToInt(value)))) {
      this.g4i_1.v4l("Failed to parse int for input '" + value.toString() + "'");
    }
    return convertToInt(value);
  };
  protoOf(StreamingJsonDecoder).dq = function () {
    return this.g4i_1.s4o();
  };
  protoOf(StreamingJsonDecoder).eq = function () {
    var tmp0 = this.g4i_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.u4m();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.v4l("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.e4i_1.z4h_1.w4j_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.g4i_1, result);
  };
  protoOf(StreamingJsonDecoder).fq = function () {
    var tmp0 = this.g4i_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.u4m();
      try {
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.v4l("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.e4i_1.z4h_1.w4j_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.g4i_1, result);
  };
  protoOf(StreamingJsonDecoder).gq = function () {
    var string = this.g4i_1.u4m();
    if (!(string.length === 1)) {
      this.g4i_1.v4l("Expected single char, but got '" + string + "'");
    }
    return charCodeAt(string, 0);
  };
  protoOf(StreamingJsonDecoder).hq = function () {
    var tmp;
    if (this.k4i_1.o4j_1) {
      tmp = this.g4i_1.k4o();
    } else {
      tmp = this.g4i_1.t4m();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).jq = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.g4i_1, this.e4i_1) : protoOf(AbstractDecoder).jq.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).iq = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.e4i_1, this.hq(), ' at path ' + this.g4i_1.o4i_1.j4m());
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.t4o_1 = lexer;
    this.u4o_1 = json.br();
  }
  protoOf(JsonDecoderForUnsignedTypes).br = function () {
    return this.u4o_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).dr = function (descriptor) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).cq = function () {
    var tmp0 = this.t4o_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.u4m();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.v4l("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).dq = function () {
    var tmp0 = this.t4o_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.u4m();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.v4l("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).aq = function () {
    var tmp0 = this.t4o_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.u4m();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.v4l("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).bq = function () {
    var tmp0 = this.t4o_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.u4m();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.v4l("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  function get_unsignedNumberDescriptors() {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.uo() && get_unsignedNumberDescriptors().h2(_this__u8e3s4);
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_0(Companion_getInstance()).nn(), serializer_1(Companion_getInstance_0()).nn(), serializer_2(Companion_getInstance_1()).nn(), serializer_3(Companion_getInstance_2()).nn()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.s(_Char___init__impl__6a9atx(34));
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charCodeAt(value, i);
        var c = Char__toInt_impl_vasixd(this_0);
        if (c < get_ESCAPE_STRINGS().length && !(get_ESCAPE_STRINGS()[c] == null)) {
          _this__u8e3s4.yb(value, lastPos, i);
          _this__u8e3s4.q(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.yb(value, lastPos, value.length);
    else
      _this__u8e3s4.q(value);
    _this__u8e3s4.s(_Char___init__impl__6a9atx(34));
  }
  function toBooleanStrictOrNull(_this__u8e3s4) {
    _init_properties_StringOps_kt__fcy1db();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (!properties_initialized_StringOps_kt_wzaea7) {
      properties_initialized_StringOps_kt_wzaea7 = true;
      // Inline function 'kotlin.arrayOfNulls' call
      // Inline function 'kotlin.apply' call
      var this_0 = Array(93);
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          this_0[c] = '\\u' + toString_1(c1) + toString_1(c2) + toString_1(c3) + toString_1(c4);
        }
         while (inductionVariable <= 31);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(34);
      this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(92);
      this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(9);
      this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(8);
      this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(10);
      this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(13);
      this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
      this_0[12] = '\\f';
      ESCAPE_STRINGS = this_0;
      // Inline function 'kotlin.apply' call
      var this_7 = new Int8Array(93);
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          this_7[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      // Inline function 'kotlin.code' call
      var this_8 = _Char___init__impl__6a9atx(34);
      var tmp = Char__toInt_impl_vasixd(this_8);
      // Inline function 'kotlin.code' call
      var this_9 = _Char___init__impl__6a9atx(34);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_9);
      this_7[tmp] = toByte(tmp$ret$3);
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(92);
      var tmp_0 = Char__toInt_impl_vasixd(this_10);
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(92);
      var tmp$ret$5 = Char__toInt_impl_vasixd(this_11);
      this_7[tmp_0] = toByte(tmp$ret$5);
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(9);
      var tmp_1 = Char__toInt_impl_vasixd(this_12);
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(116);
      var tmp$ret$7 = Char__toInt_impl_vasixd(this_13);
      this_7[tmp_1] = toByte(tmp$ret$7);
      // Inline function 'kotlin.code' call
      var this_14 = _Char___init__impl__6a9atx(8);
      var tmp_2 = Char__toInt_impl_vasixd(this_14);
      // Inline function 'kotlin.code' call
      var this_15 = _Char___init__impl__6a9atx(98);
      var tmp$ret$9 = Char__toInt_impl_vasixd(this_15);
      this_7[tmp_2] = toByte(tmp$ret$9);
      // Inline function 'kotlin.code' call
      var this_16 = _Char___init__impl__6a9atx(10);
      var tmp_3 = Char__toInt_impl_vasixd(this_16);
      // Inline function 'kotlin.code' call
      var this_17 = _Char___init__impl__6a9atx(110);
      var tmp$ret$11 = Char__toInt_impl_vasixd(this_17);
      this_7[tmp_3] = toByte(tmp$ret$11);
      // Inline function 'kotlin.code' call
      var this_18 = _Char___init__impl__6a9atx(13);
      var tmp_4 = Char__toInt_impl_vasixd(this_18);
      // Inline function 'kotlin.code' call
      var this_19 = _Char___init__impl__6a9atx(114);
      var tmp$ret$13 = Char__toInt_impl_vasixd(this_19);
      this_7[tmp_4] = toByte(tmp$ret$13);
      // Inline function 'kotlin.code' call
      var this_20 = _Char___init__impl__6a9atx(102);
      var tmp$ret$14 = Char__toInt_impl_vasixd(this_20);
      this_7[12] = toByte(tmp$ret$14);
      ESCAPE_MARKERS = this_7;
    }
  }
  function readJson(json, element, deserializer) {
    var tmp;
    if (element instanceof JsonObject) {
      tmp = new JsonTreeDecoder(json, element);
    } else {
      if (element instanceof JsonArray) {
        tmp = new JsonTreeListDecoder(json, element);
      } else {
        var tmp_0;
        if (element instanceof JsonLiteral) {
          tmp_0 = true;
        } else {
          tmp_0 = equals(element, JsonNull_getInstance());
        }
        if (tmp_0) {
          tmp = new JsonPrimitiveDecoder(json, element instanceof JsonPrimitive ? element : THROW_CCE());
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    var input = tmp;
    return input.lq(deserializer);
  }
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.nn())).lq(deserializer);
  }
  function unparsedPrimitive($this, literal, primitive, tag) {
    var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
    var tmp2 = "Failed to parse literal '" + literal.toString() + "' as " + type + ' value';
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var path = $this.b4p(tag);
    var tmp;
    if ($this.i4k().z4h_1.d4k_1) {
      var tmp$ret$3 = toString($this.c4p());
      tmp = toString(minify(tmp$ret$3));
    } else {
      tmp = null;
    }
    var inputValue = tmp;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.x4o_1 = json;
    this.y4o_1 = value;
    this.z4o_1 = polymorphicDiscriminator;
    this.a4p_1 = this.i4k().z4h_1;
  }
  protoOf(AbstractJsonTreeDecoder).i4k = function () {
    return this.x4o_1;
  };
  protoOf(AbstractJsonTreeDecoder).n1 = function () {
    return this.y4o_1;
  };
  protoOf(AbstractJsonTreeDecoder).br = function () {
    return this.i4k().br();
  };
  protoOf(AbstractJsonTreeDecoder).c4p = function () {
    var tmp0_safe_receiver = this.m11();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.d4p(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.n1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).b4p = function (currentTag) {
    return this.o11() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).g4k = function () {
    return this.c4p();
  };
  protoOf(AbstractJsonTreeDecoder).lq = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.i4k().z4h_1.u4j_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.on(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.nn(), this.i4k());
      var tmp2 = this.g4k();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.nn().so();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.o11();
        var tmp_0;
        if (this.i4k().z4h_1.d4k_1) {
          var tmp$ret$6 = toString(tmp2);
          tmp_0 = toString(minify(tmp$ret$6));
        } else {
          tmp_0 = null;
        }
        var inputValue = tmp_0;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      var jsonTree = tmp2;
      var tmp0_safe_receiver = jsonTree.b28(discriminator);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
      var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
      var tmp_1;
      try {
        tmp_1 = findPolymorphicSerializer(deserializer, this, type);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof SerializationException) {
          var it = $p;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var shortMessage = ensureNotNull(it.message);
          var tmp_3;
          if (this.i4k().z4h_1.d4k_1) {
            var tmp$ret$10 = jsonTree.toString();
            tmp_3 = toString(minify(tmp$ret$10));
          } else {
            tmp_3 = null;
          }
          var inputValue_0 = tmp_3;
          throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue_0), shortMessage, -1, null, inputValue_0, null);
        } else {
          throw $p;
        }
      }
      var tmp_4 = tmp_1;
      var actualSerializer = isInterface(tmp_4, DeserializationStrategy) ? tmp_4 : THROW_CCE();
      tmp$ret$0 = readPolymorphicJson(this.i4k(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).n11 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).mq = function (descriptor) {
    var currentObject = this.c4p();
    var tmp0_subject = descriptor.to();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.i4k();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.so();
      if (!(currentObject instanceof JsonArray)) {
        var tmp2 = 'Expected ' + getKClass(JsonArray).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.o11();
        var tmp_2;
        if (this.i4k().z4h_1.d4k_1) {
          var tmp$ret$6 = toString(currentObject);
          tmp_2 = toString(minify(tmp$ret$6));
        } else {
          tmp_2 = null;
        }
        var inputValue = tmp_2;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.i4k();
        var keyDescriptor = carrierDescriptor(descriptor.ap(0), this_0.br());
        var keyKind = keyDescriptor.to();
        var tmp_3;
        var tmp_4;
        if (keyKind instanceof PrimitiveKind) {
          tmp_4 = true;
        } else {
          tmp_4 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_4) {
          var tmp_5 = this.i4k();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.so();
          if (!(currentObject instanceof JsonObject)) {
            var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_0;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path_0 = this.o11();
            var tmp_6;
            if (this.i4k().z4h_1.d4k_1) {
              var tmp$ret$15 = toString(currentObject);
              tmp_6 = toString(minify(tmp$ret$15));
            } else {
              tmp_6 = null;
            }
            var inputValue_0 = tmp_6;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path_0, null, inputValue_0), tmp2_0, -1, path_0, inputValue_0, null);
          }
          tmp_3 = new JsonTreeMapDecoder(tmp_5, currentObject);
        } else {
          if (this_0.z4h_1.p4j_1) {
            var tmp_7 = this.i4k();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.so();
            if (!(currentObject instanceof JsonArray)) {
              var tmp2_1 = 'Expected ' + getKClass(JsonArray).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_1;
              // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
              var path_1 = this.o11();
              var tmp_8;
              if (this.i4k().z4h_1.d4k_1) {
                var tmp$ret$23 = toString(currentObject);
                tmp_8 = toString(minify(tmp$ret$23));
              } else {
                tmp_8 = null;
              }
              var inputValue_1 = tmp_8;
              throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, path_1, null, inputValue_1), tmp2_1, -1, path_1, inputValue_1, null);
            }
            tmp_3 = new JsonTreeListDecoder(tmp_7, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_3;
      } else {
        var tmp_9 = this.i4k();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.so();
        if (!(currentObject instanceof JsonObject)) {
          var tmp2_2 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_2;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var path_2 = this.o11();
          var tmp_10;
          if (this.i4k().z4h_1.d4k_1) {
            var tmp$ret$30 = toString(currentObject);
            tmp_10 = toString(minify(tmp$ret$30));
          } else {
            tmp_10 = null;
          }
          var inputValue_2 = tmp_10;
          throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_2, path_2, null, inputValue_2), tmp2_2, -1, path_2, inputValue_2, null);
        }
        tmp = new JsonTreeDecoder(tmp_9, currentObject, this.z4o_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).nq = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).xp = function () {
    var tmp = this.c4p();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).e4p = function (tag, enumDescriptor) {
    var tmp = this.i4k();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp2 = this.d4p(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.so();
    if (!(tmp2 instanceof JsonPrimitive)) {
      var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.b4p(tag);
      var tmp_0;
      if (this.i4k().z4h_1.d4k_1) {
        var tmp$ret$7 = toString(tmp2);
        tmp_0 = toString(minify(tmp$ret$7));
      } else {
        tmp_0 = null;
      }
      var inputValue = tmp_0;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp2.e3c());
  };
  protoOf(AbstractJsonTreeDecoder).a12 = function (tag, enumDescriptor) {
    return this.e4p((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).f4p = function (tag) {
    return !(this.d4p(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).q11 = function (tag) {
    return this.f4p((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).g4p = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.d4p(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'boolean';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.b4p(tag);
        var tmp;
        if (this.i4k().z4h_1.d4k_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_booleanOrNull(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).r11 = function (tag) {
    return this.g4p((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).h4p = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.d4p(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'byte';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.b4p(tag);
        var tmp;
        if (this.i4k().z4h_1.d4k_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-128, 127);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToByte(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).s11 = function (tag) {
    return this.h4p((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).i4p = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.d4p(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'short';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.b4p(tag);
        var tmp;
        if (this.i4k().z4h_1.d4k_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-32768, 32767);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToShort(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).t11 = function (tag) {
    return this.i4p((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).j4p = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.d4p(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'int';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.b4p(tag);
        var tmp;
        if (this.i4k().z4h_1.d4k_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-2147483648, 2147483647);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToInt(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).u11 = function (tag) {
    return this.j4p((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).k4p = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.d4p(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'long';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.b4p(tag);
        var tmp;
        if (this.i4k().z4h_1.d4k_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = parseLongImpl(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).v11 = function (tag) {
    return this.k4p((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).l4p = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.d4p(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'float';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.b4p(tag);
        var tmp;
        if (this.i4k().z4h_1.d4k_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_float(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.i4k().z4h_1.w4j_1;
    if (specialFp || isFinite(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.i4k().z4h_1.d4k_1) {
      var tmp$ret$13 = toString(this.c4p());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  };
  protoOf(AbstractJsonTreeDecoder).w11 = function (tag) {
    return this.l4p((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).m4p = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.d4p(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'double';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.b4p(tag);
        var tmp;
        if (this.i4k().z4h_1.d4k_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_double(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.i4k().z4h_1.w4j_1;
    if (specialFp || isFinite_0(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.i4k().z4h_1.d4k_1) {
      var tmp$ret$13 = toString(this.c4p());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  };
  protoOf(AbstractJsonTreeDecoder).x11 = function (tag) {
    return this.m4p((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).n4p = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.d4p(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'char';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.b4p(tag);
        var tmp;
        if (this.i4k().z4h_1.d4k_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.e3c()));
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0.v1_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).y11 = function (tag) {
    return this.n4p((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).o4p = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.d4p(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'string';
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.b4p(tag);
      var tmp;
      if (this.i4k().z4h_1.d4k_1) {
        var tmp$ret$6 = toString(value);
        tmp = toString(minify(tmp$ret$6));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral)) {
      var tmp2_0 = "Expected string value for a non-null key '" + tag + "', got null literal instead";
      var tmp4 = this.b4p(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint = "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.";
      var tmp_0;
      if (this.i4k().z4h_1.d4k_1) {
        var tmp$ret$10 = toString(this.c4p());
        tmp_0 = toString(minify(tmp$ret$10));
      } else {
        tmp_0 = null;
      }
      var inputValue_0 = tmp_0;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, tmp4, hint, inputValue_0), tmp2_0, -1, tmp4, inputValue_0, hint);
    }
    if (!value_0.s4k_1 && !this.i4k().z4h_1.o4j_1) {
      var tmp2_1 = "String literal for value of key '" + tag + "' should be quoted";
      var tmp4_0 = this.b4p(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint_0 = "Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.";
      var tmp_1;
      if (this.i4k().z4h_1.d4k_1) {
        var tmp$ret$14 = toString(this.c4p());
        tmp_1 = toString(minify(tmp$ret$14));
      } else {
        tmp_1 = null;
      }
      var inputValue_1 = tmp_1;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, tmp4_0, hint_0, inputValue_1), tmp2_1, -1, tmp4_0, inputValue_1, hint_0);
    }
    return value_0.u4k_1;
  };
  protoOf(AbstractJsonTreeDecoder).z11 = function (tag) {
    return this.o4p((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).p4p = function (tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.i4k();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp2 = this.d4p(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.so();
      if (!(tmp2 instanceof JsonPrimitive)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.b4p(tag);
        var tmp_1;
        if (this.i4k().z4h_1.d4k_1) {
          var tmp$ret$7 = toString(tmp2);
          tmp_1 = toString(minify(tmp$ret$7));
        } else {
          tmp_1 = null;
        }
        var inputValue = tmp_1;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp2.e3c());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.i4k());
    } else {
      tmp = protoOf(NamedValueDecoder).b12.call(this, tag, inlineDescriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).b12 = function (tag, inlineDescriptor) {
    return this.p4p((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).jq = function (descriptor) {
    return !(this.m11() == null) ? protoOf(NamedValueDecoder).jq.call(this, descriptor) : (new JsonPrimitiveDecoder(this.i4k(), this.n1(), this.z4o_1)).jq(descriptor);
  };
  function setForceNull($this, descriptor, index) {
    $this.z4p_1 = (!$this.i4k().z4h_1.r4j_1 && !descriptor.bp(index) && descriptor.ap(index).lo());
    return $this.z4p_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.w4p_1 = value;
    this.x4p_1 = polyDescriptor;
    this.y4p_1 = 0;
    this.z4p_1 = false;
  }
  protoOf(JsonTreeDecoder).n1 = function () {
    return this.w4p_1;
  };
  protoOf(JsonTreeDecoder).dr = function (descriptor) {
    $l$loop: while (this.y4p_1 < descriptor.vo()) {
      var _unary__edvuaz = this.y4p_1;
      this.y4p_1 = _unary__edvuaz + 1 | 0;
      var name = this.h11(descriptor, _unary__edvuaz);
      var index = this.y4p_1 - 1 | 0;
      this.z4p_1 = false;
      var tmp;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.n1();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).q2(name)) {
        tmp = true;
      } else {
        tmp = setForceNull(this, descriptor, index);
      }
      if (tmp) {
        if (!this.a4p_1.t4j_1)
          return index;
        var tmp0 = this.i4k();
        var tmp$ret$2;
        $l$block_2: {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
          var isOptional = descriptor.bp(index);
          var elementDescriptor = descriptor.ap(index);
          var tmp_0;
          if (isOptional && !elementDescriptor.lo()) {
            var tmp_1 = this.a4q(name);
            tmp_0 = tmp_1 instanceof JsonNull;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$2 = true;
            break $l$block_2;
          }
          if (equals(elementDescriptor.to(), ENUM_getInstance())) {
            var tmp_2;
            if (elementDescriptor.lo()) {
              var tmp_3 = this.a4q(name);
              tmp_2 = tmp_3 instanceof JsonNull;
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp$ret$2 = false;
              break $l$block_2;
            }
            var tmp_4 = this.a4q(name);
            var tmp0_safe_receiver = tmp_4 instanceof JsonPrimitive ? tmp_4 : null;
            var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              tmp$ret$2 = false;
              break $l$block_2;
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }
            var enumValue = tmp_5;
            var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
            var coerceToNull = !tmp0.z4h_1.r4j_1 && elementDescriptor.lo();
            if (enumIndex === -3 && (isOptional || coerceToNull)) {
              if (setForceNull(this, descriptor, index))
                return index;
              tmp$ret$2 = true;
              break $l$block_2;
            }
          }
          tmp$ret$2 = false;
        }
        if (tmp$ret$2)
          continue $l$loop;
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).xp = function () {
    return !this.z4p_1 && protoOf(AbstractJsonTreeDecoder).xp.call(this);
  };
  protoOf(JsonTreeDecoder).i11 = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.i4k());
    var baseName = descriptor.xo(index);
    if (strategy == null) {
      if (!this.a4p_1.x4j_1)
        return baseName;
      if (this.n1().o2().h2(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.i4k(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.n1().o2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        if (deserializationNamesMap_0.s2(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var fallbackName = strategy == null ? null : strategy.z4l(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).d4p = function (tag) {
    return getValue(this.n1(), tag);
  };
  protoOf(JsonTreeDecoder).a4q = function (tag) {
    return this.n1().b28(tag);
  };
  protoOf(JsonTreeDecoder).mq = function (descriptor) {
    if (descriptor === this.x4p_1) {
      var tmp = this.i4k();
      var tmp2 = this.c4p();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.x4p_1.so();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.o11();
        var tmp_0;
        if (this.i4k().z4h_1.d4k_1) {
          var tmp$ret$6 = toString(tmp2);
          tmp_0 = toString(minify(tmp$ret$6));
        } else {
          tmp_0 = null;
        }
        var inputValue = tmp_0;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      return new JsonTreeDecoder(tmp, tmp2, this.z4o_1, this.x4p_1);
    }
    return protoOf(AbstractJsonTreeDecoder).mq.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).nq = function (descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.i4k())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.to();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.i4k());
    var tmp_1;
    if (strategy == null && !this.a4p_1.x4j_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.i4k(), descriptor).o2();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.i4k()).b4o(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o2();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.n1().o2().t();
    while (_iterator__ex2g4s.u()) {
      var key = _iterator__ex2g4s.v();
      if (!names.h2(key) && !(key === this.z4o_1)) {
        var tmp2 = "Encountered an unknown key '" + key + "'";
        var tmp4 = this.o11();
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var hint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.";
        var tmp_3;
        if (this.i4k().z4h_1.d4k_1) {
          var tmp$ret$4 = this.n1().toString();
          tmp_3 = toString(minify(tmp$ret$4));
        } else {
          tmp_3 = null;
        }
        var inputValue = tmp_3;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, tmp4, hint, inputValue), tmp2, -1, tmp4, inputValue, hint);
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.h4q_1 = value;
    this.i4q_1 = this.h4q_1.e1();
    this.j4q_1 = -1;
  }
  protoOf(JsonTreeListDecoder).n1 = function () {
    return this.h4q_1;
  };
  protoOf(JsonTreeListDecoder).i11 = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).d4p = function (tag) {
    return this.h4q_1.d1(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).dr = function (descriptor) {
    while (this.j4q_1 < (this.i4q_1 - 1 | 0)) {
      this.j4q_1 = this.j4q_1 + 1 | 0;
      return this.j4q_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.q4q_1 = value;
    this.c12('primitive');
  }
  protoOf(JsonPrimitiveDecoder).n1 = function () {
    return this.q4q_1;
  };
  protoOf(JsonPrimitiveDecoder).dr = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).d4p = function (tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.q4q_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.b4r_1 = value;
    this.c4r_1 = toList(this.b4r_1.o2());
    this.d4r_1 = imul(this.c4r_1.e1(), 2);
    this.e4r_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).n1 = function () {
    return this.b4r_1;
  };
  protoOf(JsonTreeMapDecoder).i11 = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.c4r_1.d1(i);
  };
  protoOf(JsonTreeMapDecoder).dr = function (descriptor) {
    while (this.e4r_1 < (this.d4r_1 - 1 | 0)) {
      this.e4r_1 = this.e4r_1 + 1 | 0;
      return this.e4r_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).d4p = function (tag) {
    return (this.e4r_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.b4r_1, tag);
  };
  protoOf(JsonTreeMapDecoder).nq = function (descriptor) {
  };
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_instance;
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_LIST_instance = new WriteMode('LIST', 1, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
    WriteMode_MAP_instance = new WriteMode('MAP', 2, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
  }
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.o4o_1 = begin;
    this.p4o_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.to();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.ap(0), _this__u8e3s4.br());
          var keyKind = keyDescriptor.to();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            tmp_0 = WriteMode_MAP_getInstance();
          } else {
            if (_this__u8e3s4.z4h_1.p4j_1) {
              tmp_0 = WriteMode_LIST_getInstance();
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp = tmp_0;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.to(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.uo()) {
      tmp = carrierDescriptor(_this__u8e3s4.ap(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function appendEscape($this, lastPosition, current) {
    $this.f4r(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.f4r(lastPosition, currentPosition);
    var result = $this.q4i_1.toString();
    $this.q4i_1.ec(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.p4i_1);
    $this.p4i_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.g4r(), $this.n4i_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.h4r(currentPosition);
    if (currentPosition === -1) {
      $this.v4l('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.g4r();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.g4r(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.v4l("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.q4i_1.s(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.n4i_1 = startPos;
      $this.i4r();
      if (($this.n4i_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.v4l('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.n4i_1);
    }
    $this.q4i_1.s(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      // Inline function 'kotlin.code' call
      var tmp_1 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      // Inline function 'kotlin.code' call
      var tmp_2 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(65);
      tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
    } else {
      $this.v4l("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.h4r(start);
    if (current >= charSequenceLength($this.g4r()) || current === -1) {
      $this.v4l('EOF');
    }
    var tmp = $this.g4r();
    var _unary__edvuaz = current;
    current = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlin.code' call
    var this_0 = charSequenceGet(tmp, _unary__edvuaz);
    var tmp0_subject = Char__toInt_impl_vasixd(this_0) | 32;
    var tmp_0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(116);
    if (tmp0_subject === Char__toInt_impl_vasixd(this_1)) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(102);
      if (tmp0_subject === Char__toInt_impl_vasixd(this_2)) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        $this.v4l("Expected valid boolean literal prefix, but had '" + $this.u4m() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.g4r()) - current | 0) < literalSuffix.length) {
      $this.v4l('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charCodeAt(literalSuffix, i);
        var actual = charSequenceGet($this.g4r(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.v4l("Expected valid boolean literal prefix, but had '" + $this.u4m() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.n4i_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -toNumber(exponentAccumulator);
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = toNumber(exponentAccumulator);
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer(configuration) {
    this.m4i_1 = configuration;
    this.n4i_1 = 0;
    this.o4i_1 = new JsonPath(this.m4i_1);
    this.p4i_1 = null;
    this.q4i_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).i4r = function () {
  };
  protoOf(AbstractJsonLexer).e4o = function () {
    var current = this.j4r();
    var source = this.g4r();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.n4i_1 = this.n4i_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).k4r = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).r4i = function () {
    var nextToken = this.w4m();
    if (!(nextToken === 10)) {
      this.v4l('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.g4r(), this.n4i_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).q4m = function (expected) {
    var token = this.w4m();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true && this.n4i_1 > 0 ? this.n4i_1 - 1 | 0 : this.n4i_1;
      var s = this.n4i_1 === charSequenceLength(this.g4r()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.g4r(), position));
      var tmp$ret$1 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.v4l(tmp$ret$1, position);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).l4r = function (expected) {
    if (this.n4i_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.n4i_1;
        try {
          this.n4i_1 = this.n4i_1 - 1 | 0;
          tmp$ret$0 = this.u4m();
          break $l$block;
        }finally {
          this.n4i_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$0;
      if (inputLiteral === 'null') {
        this.u4l("Expected string literal but 'null' literal was found", this.n4i_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true && this.n4i_1 > 0 ? this.n4i_1 - 1 | 0 : this.n4i_1;
    var s = this.n4i_1 === charSequenceLength(this.g4r()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.g4r(), position));
    var tmp$ret$3 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.v4l(tmp$ret$3, position);
  };
  protoOf(AbstractJsonLexer).r4m = function () {
    var source = this.g4r();
    var cpos = this.n4i_1;
    $l$loop_0: while (true) {
      cpos = this.h4r(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.n4i_1 = cpos;
      return charToTokenClass(ch);
    }
    this.n4i_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).f4o = function (doConsume) {
    var current = this.j4r();
    current = this.h4r(current);
    var len = charSequenceLength(this.g4r()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charCodeAt('null', i) === charSequenceGet(this.g4r(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.g4r(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.n4i_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).q4o = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.f4o(doConsume) : $super.f4o.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).g4o = function (isLenient) {
    var token = this.r4m();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.u4m();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.t4m();
    }
    var string = tmp;
    this.p4i_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).m4r = function () {
    this.p4i_1 = null;
  };
  protoOf(AbstractJsonLexer).k14 = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.g4r();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).t4m = function () {
    if (!(this.p4i_1 == null)) {
      return takePeeked(this);
    }
    return this.j4o();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.h4r(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.v4l('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.f4r(lastPosition, currentPosition);
          currentPosition = this.h4r(currentPosition);
          if (currentPosition === -1) {
            this.v4l('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.k14(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.n4i_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).k4o = function () {
    var result = this.u4m();
    if (result === 'null' && wasUnquotedString(this)) {
      this.v4l("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).u4m = function () {
    if (!(this.p4i_1 == null)) {
      return takePeeked(this);
    }
    var current = this.j4r();
    if (current >= charSequenceLength(this.g4r()) || current === -1) {
      this.v4l('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.g4r(), current));
    if (token === 1) {
      return this.t4m();
    }
    if (!(token === 0)) {
      this.v4l('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.g4r(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.g4r(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.g4r())) {
        usedAppend = true;
        this.f4r(this.n4i_1, current);
        var eof = this.h4r(current);
        if (eof === -1) {
          this.n4i_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.k14(this.n4i_1, current);
    } else {
      tmp = decodedString(this, this.n4i_1, current);
    }
    var result = tmp;
    this.n4i_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).f4r = function (fromIndex, toIndex) {
    this.q4i_1.yb(this.g4r(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).i4o = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.r4m();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.u4m();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.r4m();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.u4m();
        else
          this.j4o();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.c1(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8)) {
          this.v4l('found ] instead of }');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6)) {
          this.v4l('found } instead of ]');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.v4l('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.w4m();
      if (tokenStack.e1() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.g4r()) + "', currentPosition=" + this.n4i_1 + ')';
  };
  protoOf(AbstractJsonLexer).h4o = function (key) {
    var processed = this.k14(0, this.n4i_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.u4l("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).u4l = function (message, position, hint) {
    throw decodingExceptionOf_0(this, message, position, this.o4i_1.j4m(), hint, this.g4r());
  };
  protoOf(AbstractJsonLexer).v4l = function (message, position, hint, $super) {
    position = position === VOID ? this.n4i_1 : position;
    hint = hint === VOID ? null : hint;
    return $super === VOID ? this.u4l(message, position, hint) : $super.u4l.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).s4o = function () {
    var current = this.j4r();
    current = this.h4r(current);
    if (current >= charSequenceLength(this.g4r()) || current === -1) {
      this.v4l('EOF');
    }
    var tmp;
    if (charSequenceGet(this.g4r(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.g4r())) {
        this.v4l('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var exponentAccumulator = new Long(0, 0);
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.g4r()))) {
      var ch = charSequenceGet(this.g4r(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.v4l("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current);
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.v4l("Unexpected symbol '-' in numeric literal", current);
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.v4l("Unexpected symbol '+' in numeric literal", current);
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.v4l("Unexpected symbol '-' in numeric literal", current);
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_4;
      current = current + 1 | 0;
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.v4l("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current - 1 | 0);
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        var this_0 = exponentAccumulator;
        // Inline function 'kotlin.Long.plus' call
        var this_1 = multiply(this_0, fromInt(10));
        exponentAccumulator = add(this_1, fromInt(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      var this_2 = accumulator;
      // Inline function 'kotlin.Long.minus' call
      var this_3 = multiply(this_2, fromInt(10));
      accumulator = subtract(this_3, fromInt(digit));
      if (compare(accumulator, new Long(0, 0)) > 0) {
        this.v4l('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.v4l('Expected numeric literal', current);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.v4l('EOF');
      }
      if (!(charSequenceGet(this.g4r(), current) === _Char___init__impl__6a9atx(34))) {
        this.v4l('Expected closing quotation mark', current);
      }
      current = current + 1 | 0;
    }
    this.n4i_1 = current;
    if (hasExponent) {
      var doubleAccumulator = toNumber(accumulator) * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > toNumber(new Long(-1, 2147483647)) || doubleAccumulator < toNumber(new Long(0, -2147483648))) {
        this.v4l('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.v4l("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!equalsLong(accumulator, new Long(0, -2147483648))) {
      tmp_0 = negate(accumulator);
    } else {
      this.v4l('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).p4k = function () {
    var result = this.s4o();
    var next = this.w4m();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true && this.n4i_1 > 0 ? this.n4i_1 - 1 | 0 : this.n4i_1;
      var s = this.n4i_1 === charSequenceLength(this.g4r()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.g4r(), position));
      var tmp$ret$1 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.v4l(tmp$ret$1, position);
    }
    return result;
  };
  protoOf(AbstractJsonLexer).r4o = function () {
    var current = this.j4r();
    if (current === charSequenceLength(this.g4r())) {
      this.v4l('EOF');
    }
    var tmp;
    if (charSequenceGet(this.g4r(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.n4i_1 === charSequenceLength(this.g4r())) {
        this.v4l('EOF');
      }
      if (!(charSequenceGet(this.g4r(), this.n4i_1) === _Char___init__impl__6a9atx(34))) {
        this.v4l('Expected closing quotation mark');
      }
      this.n4i_1 = this.n4i_1 + 1 | 0;
    }
    return result;
  };
  function tokenDescription(token) {
    return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
  }
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().o4r_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().n4r_1[c] : _Char___init__impl__6a9atx(0);
  }
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!(esc === _Char___init__impl__6a9atx(117))) {
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.n4r_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.o4r_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.n4r_1 = charArray(117);
    this.o4r_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function StringJsonLexerWithComments(source, configuration) {
    StringJsonLexer.call(this, source, configuration);
  }
  protoOf(StringJsonLexerWithComments).w4m = function () {
    var source = this.g4r();
    var cpos = this.j4r();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.n4i_1 = cpos + 1 | 0;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).s4m = function () {
    var current = this.j4r();
    if (current >= this.g4r().length || current === -1)
      return false;
    return this.k4r(charCodeAt(this.g4r(), current));
  };
  protoOf(StringJsonLexerWithComments).d4o = function (expected) {
    var source = this.g4r();
    var current = this.j4r();
    if (current >= source.length || current === -1) {
      this.n4i_1 = -1;
      this.l4r(expected);
    }
    var c = charCodeAt(source, current);
    this.n4i_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.l4r(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).r4m = function () {
    var source = this.g4r();
    var cpos = this.j4r();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.n4i_1 = cpos;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).j4r = function () {
    var current = this.n4i_1;
    if (current === -1)
      return current;
    var source = this.g4r();
    $l$loop_1: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop_1;
      }
      if (c === _Char___init__impl__6a9atx(47) && (current + 1 | 0) < source.length) {
        var tmp0_subject = charCodeAt(source, current + 1 | 0);
        if (tmp0_subject === _Char___init__impl__6a9atx(47)) {
          current = indexOf_0(source, _Char___init__impl__6a9atx(10), current + 2 | 0);
          if (current === -1) {
            current = source.length;
          } else {
            current = current + 1 | 0;
          }
          continue $l$loop_1;
        } else if (tmp0_subject === _Char___init__impl__6a9atx(42)) {
          current = indexOf(source, '*/', current + 2 | 0);
          if (current === -1) {
            this.n4i_1 = source.length;
            this.v4l('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.n4i_1 = current;
    return current;
  };
  function StringJsonLexer(source, configuration) {
    AbstractJsonLexer.call(this, configuration);
    this.a4s_1 = source;
  }
  protoOf(StringJsonLexer).g4r = function () {
    return this.a4s_1;
  };
  protoOf(StringJsonLexer).h4r = function (position) {
    return position < this.g4r().length ? position : -1;
  };
  protoOf(StringJsonLexer).w4m = function () {
    var source = this.g4r();
    var cpos = this.n4i_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.n4i_1 = cpos;
      return charToTokenClass(c);
    }
    this.n4i_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).s4m = function () {
    var current = this.n4i_1;
    if (current === -1)
      return false;
    var source = this.g4r();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.n4i_1 = current;
      return this.k4r(c);
    }
    this.n4i_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).j4r = function () {
    var current = this.n4i_1;
    if (current === -1)
      return current;
    var source = this.g4r();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.n4i_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).d4o = function (expected) {
    if (this.n4i_1 === -1) {
      this.l4r(expected);
    }
    var source = this.g4r();
    var cpos = this.n4i_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.n4i_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.l4r(expected);
    }
    this.n4i_1 = -1;
    this.l4r(expected);
  };
  protoOf(StringJsonLexer).j4o = function () {
    this.d4o(_Char___init__impl__6a9atx(34));
    var current = this.n4i_1;
    var closingQuote = indexOf_0(this.g4r(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.u4m();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false && this.n4i_1 > 0 ? this.n4i_1 - 1 | 0 : this.n4i_1;
      var s = this.n4i_1 === charSequenceLength(this.g4r()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.g4r(), position));
      var tmp$ret$1 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.v4l(tmp$ret$1, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charCodeAt(this.g4r(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.g4r(), this.n4i_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.n4i_1 = closingQuote + 1 | 0;
    return substring(this.g4r(), current, closingQuote);
  };
  protoOf(StringJsonLexer).l4o = function (keyToMatch, isLenient) {
    var positionSnapshot = this.n4i_1;
    try {
      if (!(this.w4m() === 6))
        return null;
      var firstKey = this.g4o(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.m4r();
      if (!(this.w4m() === 5))
        return null;
      return this.g4o(isLenient);
    }finally {
      this.n4i_1 = positionSnapshot;
      this.m4r();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.z4h_1.b4k_1 ? new StringJsonLexer(source, json.z4h_1) : new StringJsonLexerWithComments(source, json.z4h_1);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.b4i_1;
  }
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).lo = get_isNullable;
  protoOf(defer$1).uo = get_isInline;
  protoOf(defer$1).wo = get_annotations;
  defineProp(protoOf(JsonException), 'message', function () {
    return this.e();
  });
  protoOf(JsonSerializersModuleValidator).m13 = contextual;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Tombstone_instance = new Tombstone();
  RedactedKey_instance = new RedactedKey();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = JsonArray;
  _.$_$.b = JsonContentPolymorphicSerializer;
  _.$_$.c = JsonDecoder;
  _.$_$.d = JsonObject;
  _.$_$.e = JsonPrimitive;
  _.$_$.f = Json_0;
  _.$_$.g = get_boolean;
  _.$_$.h = get_booleanOrNull;
  _.$_$.i = get_double;
  _.$_$.j = get_doubleOrNull;
  _.$_$.k = get_float;
  _.$_$.l = get_floatOrNull;
  _.$_$.m = get_int;
  _.$_$.n = get_intOrNull;
  _.$_$.o = get_jsonObject;
  _.$_$.p = get_long;
  _.$_$.q = get_longOrNull;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
