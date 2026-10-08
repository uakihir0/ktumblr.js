(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ob;
  var initMetadataForInterface = kotlin_kotlin.$_$.ta;
  var VOID = kotlin_kotlin.$_$.c;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.d2;
  var Unit_instance = kotlin_kotlin.$_$.q2;
  var constructCallableReference = kotlin_kotlin.$_$.ha;
  var emptyList = kotlin_kotlin.$_$.i6;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.u2;
  var lazy = kotlin_kotlin.$_$.gg;
  var KProperty1 = kotlin_kotlin.$_$.mc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ma;
  var toString = kotlin_kotlin.$_$.rb;
  var initMetadataForClass = kotlin_kotlin.$_$.pa;
  var objectCreate = kotlin_kotlin.$_$.nb;
  var captureStack = kotlin_kotlin.$_$.z9;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.a4;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.c4;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.e4;
  var IllegalArgumentException = kotlin_kotlin.$_$.cf;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.q5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.y2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.r;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.q;
  var THROW_CCE = kotlin_kotlin.$_$.jf;
  var isInterface = kotlin_kotlin.$_$.eb;
  var KClass = kotlin_kotlin.$_$.jc;
  var Triple = kotlin_kotlin.$_$.lf;
  var getKClass = kotlin_kotlin.$_$.hc;
  var Pair = kotlin_kotlin.$_$.gf;
  var Entry = kotlin_kotlin.$_$.e5;
  var KtMap = kotlin_kotlin.$_$.g5;
  var KtMutableMap = kotlin_kotlin.$_$.j5;
  var LinkedHashMap = kotlin_kotlin.$_$.b5;
  var HashMap = kotlin_kotlin.$_$.z4;
  var KtSet = kotlin_kotlin.$_$.l5;
  var KtMutableSet = kotlin_kotlin.$_$.k5;
  var LinkedHashSet = kotlin_kotlin.$_$.c5;
  var HashSet = kotlin_kotlin.$_$.a5;
  var Collection = kotlin_kotlin.$_$.y4;
  var KtList = kotlin_kotlin.$_$.d5;
  var KtMutableList = kotlin_kotlin.$_$.h5;
  var ArrayList = kotlin_kotlin.$_$.x4;
  var copyToArray = kotlin_kotlin.$_$.f6;
  var Result = kotlin_kotlin.$_$.hf;
  var ensureNotNull = kotlin_kotlin.$_$.bg;
  var equals = kotlin_kotlin.$_$.ja;
  var getStringHashCode = kotlin_kotlin.$_$.na;
  var isBlank = kotlin_kotlin.$_$.dd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.d4;
  var toList = kotlin_kotlin.$_$.v7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.z2;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.f3;
  var toHashSet = kotlin_kotlin.$_$.s7;
  var toBooleanArray = kotlin_kotlin.$_$.q7;
  var withIndex = kotlin_kotlin.$_$.b8;
  var to = kotlin_kotlin.$_$.mg;
  var toMap = kotlin_kotlin.$_$.x7;
  var lazy_0 = kotlin_kotlin.$_$.hg;
  var contentEquals = kotlin_kotlin.$_$.r5;
  var initMetadataForObject = kotlin_kotlin.$_$.va;
  var getKClassFromExpression = kotlin_kotlin.$_$.gc;
  var Long = kotlin_kotlin.$_$.ef;
  var Char = kotlin_kotlin.$_$.ue;
  var Companion_getInstance = kotlin_kotlin.$_$.g2;
  var Duration = kotlin_kotlin.$_$.oe;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.h2;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.i2;
  var toIntOrNull = kotlin_kotlin.$_$.ce;
  var hashCode = kotlin_kotlin.$_$.oa;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.h4;
  var asList = kotlin_kotlin.$_$.o5;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.a3;
  var isArray = kotlin_kotlin.$_$.wa;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.g3;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.k3;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.l3;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.c3;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.d3;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.i3;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.j3;
  var until = kotlin_kotlin.$_$.bc;
  var step = kotlin_kotlin.$_$.ac;
  var getValue = kotlin_kotlin.$_$.q6;
  var longArray = kotlin_kotlin.$_$.jb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.qa;
  var get_lastIndex = kotlin_kotlin.$_$.w6;
  var shiftLeft = kotlin_kotlin.$_$.s9;
  var bitwiseOr = kotlin_kotlin.$_$.d9;
  var equalsLong = kotlin_kotlin.$_$.j9;
  var invert = kotlin_kotlin.$_$.l9;
  var countTrailingZeroBits = kotlin_kotlin.$_$.zf;
  var joinToString = kotlin_kotlin.$_$.t6;
  var toString_0 = kotlin_kotlin.$_$.lg;
  var KTypeParameter = kotlin_kotlin.$_$.nc;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.e3;
  var booleanArray = kotlin_kotlin.$_$.y9;
  var emptyMap = kotlin_kotlin.$_$.j6;
  var contentHashCode = kotlin_kotlin.$_$.u5;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.j2;
  var isCharArray = kotlin_kotlin.$_$.za;
  var charArray = kotlin_kotlin.$_$.ba;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.z1;
  var isDoubleArray = kotlin_kotlin.$_$.bb;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.a2;
  var isFloatArray = kotlin_kotlin.$_$.cb;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.k2;
  var isLongArray = kotlin_kotlin.$_$.m9;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.o2;
  var ULongArray = kotlin_kotlin.$_$.qf;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.i1;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.g1;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.b2;
  var isIntArray = kotlin_kotlin.$_$.db;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.n2;
  var UIntArray = kotlin_kotlin.$_$.of;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.b1;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.z;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.c2;
  var isShortArray = kotlin_kotlin.$_$.gb;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.p2;
  var UShortArray = kotlin_kotlin.$_$.sf;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.p1;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.n1;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.y1;
  var isByteArray = kotlin_kotlin.$_$.ya;
  var Companion_getInstance_7 = kotlin_kotlin.$_$.m2;
  var UByteArray = kotlin_kotlin.$_$.mf;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.v;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.s;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.x1;
  var isBooleanArray = kotlin_kotlin.$_$.xa;
  var coerceAtLeast = kotlin_kotlin.$_$.wb;
  var copyOf = kotlin_kotlin.$_$.z5;
  var copyOf_0 = kotlin_kotlin.$_$.b6;
  var copyOf_1 = kotlin_kotlin.$_$.c6;
  var copyOf_2 = kotlin_kotlin.$_$.x5;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.l1;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.m1;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.j1;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.k1;
  var copyOf_3 = kotlin_kotlin.$_$.e6;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.e1;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.f1;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.c1;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.d1;
  var copyOf_4 = kotlin_kotlin.$_$.w5;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.s1;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.t1;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.q1;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.r1;
  var copyOf_5 = kotlin_kotlin.$_$.a6;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.x;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.y;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.u;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.w;
  var copyOf_6 = kotlin_kotlin.$_$.y5;
  var trimIndent = kotlin_kotlin.$_$.le;
  var charSequenceLength = kotlin_kotlin.$_$.ea;
  var lastOrNull = kotlin_kotlin.$_$.y6;
  var get_lastIndex_0 = kotlin_kotlin.$_$.x6;
  var ULong = kotlin_kotlin.$_$.rf;
  var UInt = kotlin_kotlin.$_$.pf;
  var UByte = kotlin_kotlin.$_$.nf;
  var UShort = kotlin_kotlin.$_$.tf;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ig;
  var asSequence = kotlin_kotlin.$_$.p5;
  var get_js = kotlin_kotlin.$_$.ib;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.f2;
  var findAssociatedObject = kotlin_kotlin.$_$.b;
  var get_indices = kotlin_kotlin.$_$.s6;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.k4;
  var get_indices_0 = kotlin_kotlin.$_$.r6;
  var get_longArrayClass = kotlin_kotlin.$_$.n9;
  var Unit = kotlin_kotlin.$_$.uf;
  var Instant = kotlin_kotlin.$_$.pe;
  var Uuid = kotlin_kotlin.$_$.re;
  var mapOf = kotlin_kotlin.$_$.d7;
  var Companion_instance = kotlin_kotlin.$_$.l2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.o;
  var createFailure = kotlin_kotlin.$_$.ag;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(DeserializationStrategy, 'DeserializationStrategy');
  initMetadataForInterface(KSerializer, 'KSerializer', VOID, VOID, [DeserializationStrategy]);
  initMetadataForClass(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PolymorphicSerializer, 'PolymorphicSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForClass(SerializationException, 'SerializationException', SerializationException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(UnknownFieldException, 'UnknownFieldException', VOID, SerializationException);
  initMetadataForClass(MissingFieldException, 'MissingFieldException', VOID, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  initMetadataForInterface(SerialDescriptor, 'SerialDescriptor');
  initMetadataForClass(ContextDescriptor, 'ContextDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(elementNames$1);
  initMetadataForClass(elementNames$$inlined$Iterable$1);
  initMetadataForClass(elementDescriptors$1);
  initMetadataForClass(elementDescriptors$$inlined$Iterable$1);
  initMetadataForClass(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder');
  initMetadataForInterface(CachedNames, 'CachedNames');
  initMetadataForClass(SerialDescriptorImpl, 'SerialDescriptorImpl', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(SerialKind, 'SerialKind');
  initMetadataForClass(PolymorphicKind, 'PolymorphicKind', VOID, SerialKind);
  initMetadataForObject(SEALED, 'SEALED', VOID, PolymorphicKind);
  initMetadataForObject(OPEN, 'OPEN', VOID, PolymorphicKind);
  initMetadataForObject(ENUM, 'ENUM', VOID, SerialKind);
  initMetadataForObject(CONTEXTUAL, 'CONTEXTUAL', VOID, SerialKind);
  initMetadataForClass(PrimitiveKind, 'PrimitiveKind', VOID, SerialKind);
  initMetadataForObject(BOOLEAN, 'BOOLEAN', VOID, PrimitiveKind);
  initMetadataForObject(BYTE, 'BYTE', VOID, PrimitiveKind);
  initMetadataForObject(CHAR, 'CHAR', VOID, PrimitiveKind);
  initMetadataForObject(SHORT, 'SHORT', VOID, PrimitiveKind);
  initMetadataForObject(INT, 'INT', VOID, PrimitiveKind);
  initMetadataForObject(LONG, 'LONG', VOID, PrimitiveKind);
  initMetadataForObject(FLOAT, 'FLOAT', VOID, PrimitiveKind);
  initMetadataForObject(DOUBLE, 'DOUBLE', VOID, PrimitiveKind);
  initMetadataForObject(STRING, 'STRING', VOID, PrimitiveKind);
  initMetadataForClass(StructureKind, 'StructureKind', VOID, SerialKind);
  initMetadataForObject(CLASS, 'CLASS', VOID, StructureKind);
  initMetadataForObject(LIST, 'LIST', VOID, StructureKind);
  initMetadataForObject(MAP, 'MAP', VOID, StructureKind);
  initMetadataForObject(OBJECT, 'OBJECT', VOID, StructureKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.on(this);
  }
  initMetadataForInterface(Decoder, 'Decoder');
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.yq(descriptor, index, deserializer, previousValue) : $super.yq.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForObject(NothingSerializer_0, 'NothingSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DurationSerializer, 'DurationSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(InstantSerializer, 'InstantSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UuidSerializer, 'UuidSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(ListLikeDescriptor, 'ListLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(ArrayClassDesc, 'ArrayClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(ArrayListClassDesc, 'ArrayListClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(HashSetClassDesc, 'HashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(MapLikeDescriptor, 'MapLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(HashMapClassDesc, 'HashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', VOID, ListLikeDescriptor);
  initMetadataForClass(AbstractCollectionSerializer, 'AbstractCollectionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(CollectionLikeSerializer, 'CollectionLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(ReferenceArraySerializer, 'ReferenceArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(CollectionSerializer, 'CollectionSerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(ArrayListSerializer, 'ArrayListSerializer', VOID, CollectionSerializer);
  initMetadataForClass(HashSetSerializer, 'HashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(LinkedHashSetSerializer, 'LinkedHashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(MapLikeSerializer, 'MapLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(HashMapSerializer, 'HashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(LinkedHashMapSerializer, 'LinkedHashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(PrimitiveArraySerializer, 'PrimitiveArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder');
  initMetadataForCompanion(Companion);
  initMetadataForClass(ElementMarker, 'ElementMarker');
  initMetadataForClass(EnumSerializer, 'EnumSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(EnumDescriptor, 'EnumDescriptor', VOID, PluginGeneratedSerialDescriptor);
  initMetadataForClass(InlineClassDescriptor, 'InlineClassDescriptor', VOID, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  initMetadataForInterface(GeneratedSerializer, 'GeneratedSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(InlinePrimitiveDescriptor$1, VOID, VOID, VOID, [GeneratedSerializer]);
  initMetadataForObject(NothingSerialDescriptor, 'NothingSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(NullableSerializer, 'NullableSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerialDescriptorForNullable, 'SerialDescriptorForNullable', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(ObjectSerializer, 'ObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForInterface(SerializerFactory, 'SerializerFactory');
  initMetadataForObject(CharArraySerializer_0, 'CharArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(DoubleArraySerializer_0, 'DoubleArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(FloatArraySerializer_0, 'FloatArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(LongArraySerializer_0, 'LongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(ULongArraySerializer_0, 'ULongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(IntArraySerializer_0, 'IntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(UIntArraySerializer_0, 'UIntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(ShortArraySerializer_0, 'ShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(UShortArraySerializer_0, 'UShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(ByteArraySerializer_0, 'ByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(UByteArraySerializer_0, 'UByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(BooleanArraySerializer_0, 'BooleanArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForClass(CharArrayBuilder, 'CharArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(DoubleArrayBuilder, 'DoubleArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(FloatArrayBuilder, 'FloatArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(LongArrayBuilder, 'LongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ULongArrayBuilder, 'ULongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(IntArrayBuilder, 'IntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UIntArrayBuilder, 'UIntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ShortArrayBuilder, 'ShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UShortArrayBuilder, 'UShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ByteArrayBuilder, 'ByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UByteArrayBuilder, 'UByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(BooleanArrayBuilder, 'BooleanArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForObject(IntSerializer, 'IntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(StringSerializer, 'StringSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(BooleanSerializer, 'BooleanSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LongSerializer, 'LongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(ByteSerializer, 'ByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ShortSerializer, 'ShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(CharSerializer, 'CharSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DoubleSerializer, 'DoubleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(FloatSerializer, 'FloatSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UnitSerializer, 'UnitSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(TaggedDecoder, 'TaggedDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForClass(NamedValueDecoder, 'NamedValueDecoder', VOID, TaggedDecoder);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [Entry]);
  initMetadataForClass(KeyValueSerializer, 'KeyValueSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(MapEntrySerializer_0, 'MapEntrySerializer', VOID, KeyValueSerializer);
  initMetadataForClass(PairSerializer_0, 'PairSerializer', VOID, KeyValueSerializer);
  initMetadataForClass(TripleSerializer_0, 'TripleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ULongSerializer, 'ULongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UIntSerializer, 'UIntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UByteSerializer, 'UByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UShortSerializer, 'UShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerializersModule, 'SerializersModule');
  initMetadataForClass(SerialModuleImpl, 'SerialModuleImpl', VOID, SerializersModule);
  initMetadataForClass(ContextualProvider, 'ContextualProvider');
  initMetadataForClass(Argless, 'Argless', VOID, ContextualProvider);
  initMetadataForClass(WithTypeArguments, 'WithTypeArguments', VOID, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.k13(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  initMetadataForInterface(SerializersModuleCollector, 'SerializersModuleCollector');
  initMetadataForClass(SerializersModuleBuilder, 'SerializersModuleBuilder', VOID, VOID, [SerializersModuleCollector]);
  initMetadataForClass(SerializerAlreadyRegisteredException, 'SerializerAlreadyRegisteredException', VOID, IllegalArgumentException);
  initMetadataForClass(SerializableWith, 'SerializableWith', VOID, VOID, VOID, VOID, 0);
  initMetadataForClass(createCache$1);
  initMetadataForClass(createParametrizedCache$1);
  //endregion
  function KSerializer() {
  }
  function DeserializationStrategy() {
  }
  function findPolymorphicSerializer(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.pn(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(klassName, _this__u8e3s4.qn());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.zn('type', serializer_0(StringCompanionObject_instance).nn());
      $this$buildSerialDescriptor.zn('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.ao_1.o() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.tn_1 = this$0.bo_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.ao_1);
    };
  }
  function PolymorphicSerializer$_get_descriptor_$ref_8tw9if() {
    return constructCallableReference(function (p0) {
      return p0.nn();
    }, 1, 0, 1);
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.ao_1 = baseClass;
    this.bo_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.co_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).qn = function () {
    return this.ao_1;
  };
  protoOf(PolymorphicSerializer).nn = function () {
    var tmp0 = this.co_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, PolymorphicSerializer$_get_descriptor_$ref_8tw9if(), null);
    return tmp0.n1();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.ao_1) + ')';
  };
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, objectCreate(protoOf(UnknownFieldException)));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$_0(message, this);
    captureStack(this, UnknownFieldException);
  }
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    var tmp0_message = missingFields.e1() === 1 ? "Field '" + missingFields.d1(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + toString(missingFields) + " are required for type with serial name '" + serialName + "', but they were missing";
    MissingFieldException.call($this, tmp0_message, null, missingFields, serialName);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(message, cause, missingFields, serialName) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.do_1 = missingFields;
    this.eo_1 = serialName;
  }
  protoOf(MissingFieldException).fo = function (newMessage) {
    return new MissingFieldException(newMessage, this, this.do_1, this.eo_1);
  };
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.l();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.k();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$2 = typeOrThrow(item);
      destination.c1(tmp$ret$2);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.r()) {
      var tmp_0;
      if (isInterface_0(rootClass) && !(_this__u8e3s4.ho(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.go()) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.Result.getOrNull' call
        var this_1 = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
        tmp_1 = _Result___get_isFailure__impl__jpiriv(this_1) ? null : _Result___get_value__impl__bjfvqg(this_1);
      }
      tmp = tmp_1;
    }
    var cachedSerializer = tmp;
    if (!(cachedSerializer == null))
      return cachedSerializer;
    var tmp_2;
    if (typeArguments.r()) {
      var tmp0_elvis_lhs = serializerOrNull(rootClass);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.ho(rootClass) : tmp0_elvis_lhs;
      var tmp_3;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_3 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      tmp_2 = tmp_3;
    } else {
      var tmp2_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_4;
      if (tmp2_elvis_lhs == null) {
        return null;
      } else {
        tmp_4 = tmp2_elvis_lhs;
      }
      var serializers = tmp_4;
      var tmp3_elvis_lhs = parametrizedSerializerOrNull(rootClass, serializers, serializerByKTypeImpl$lambda(typeArguments));
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.io(rootClass, serializers) : tmp3_elvis_lhs;
      var tmp_5;
      if (tmp4_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_5 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_5 = tmp4_elvis_lhs;
      }
      tmp_2 = tmp_5;
    }
    var contextualSerializer = tmp_2;
    var tmp_6;
    if (contextualSerializer == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_6 = isInterface(contextualSerializer, KSerializer) ? contextualSerializer : THROW_CCE();
    }
    var tmp6_safe_receiver = tmp_6;
    return tmp6_safe_receiver == null ? null : nullable(tmp6_safe_receiver, isNullable);
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s = typeArguments.t();
      while (_iterator__ex2g4s.u()) {
        var item = _iterator__ex2g4s.v();
        var tmp$ret$2 = serializer(_this__u8e3s4, item);
        destination.c1(tmp$ret$2);
      }
      tmp = destination;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s_0 = typeArguments.t();
      while (_iterator__ex2g4s_0.u()) {
        var item_0 = _iterator__ex2g4s_0.v();
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var tmp$ret$5 = tmp_0;
        destination_0.c1(tmp$ret$5);
      }
      tmp = destination_0;
    }
    var serializers = tmp;
    return serializers;
  }
  function parametrizedSerializerOrNull(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp0_elvis_lhs = builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray);
    return tmp0_elvis_lhs == null ? compiledParametrizedSerializer(_this__u8e3s4, serializers) : tmp0_elvis_lhs;
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp;
    if (_this__u8e3s4.equals(getKClass(Collection)) || _this__u8e3s4.equals(getKClass(KtList)) || (_this__u8e3s4.equals(getKClass(KtMutableList)) || _this__u8e3s4.equals(getKClass(ArrayList)))) {
      tmp = new ArrayListSerializer(serializers.d1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.d1(0));
    } else if (_this__u8e3s4.equals(getKClass(KtSet)) || (_this__u8e3s4.equals(getKClass(KtMutableSet)) || _this__u8e3s4.equals(getKClass(LinkedHashSet)))) {
      tmp = new LinkedHashSetSerializer(serializers.d1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.d1(0), serializers.d1(1));
    } else if (_this__u8e3s4.equals(getKClass(KtMap)) || (_this__u8e3s4.equals(getKClass(KtMutableMap)) || _this__u8e3s4.equals(getKClass(LinkedHashMap)))) {
      tmp = new LinkedHashMapSerializer(serializers.d1(0), serializers.d1(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.d1(0), serializers.d1(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.d1(0), serializers.d1(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.d1(0), serializers.d1(1), serializers.d1(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.d1(0));
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function compiledParametrizedSerializer(_this__u8e3s4, serializers) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(serializers);
    return constructSerializerForGivenTypeArgs(_this__u8e3s4, tmp$ret$0.slice());
  }
  function serializerByKTypeImpl$lambda($typeArguments) {
    return function () {
      return $typeArguments.d1(0).j();
    };
  }
  function get_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE;
  }
  var SERIALIZERS_CACHE;
  function get_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE_NULLABLE;
  }
  var SERIALIZERS_CACHE_NULLABLE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  function findCachedSerializer(clazz, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().jo(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().jo(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().ko(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().ko(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_nullable(tmp1_safe_receiver);
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_0 = isInterface(tmp2_safe_receiver, KSerializer) ? tmp2_safe_receiver : THROW_CCE();
    }
    return tmp_0;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda(types));
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda($types) {
    return function () {
      return $types.d1(0).j();
    };
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    var tmp0_safe_receiver = parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda(types));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda($types) {
    return function () {
      return $types.d1(0).j();
    };
  }
  var properties_initialized_SerializersCache_kt_q8kf25;
  function _init_properties_SerializersCache_kt__hgwi2p() {
    if (!properties_initialized_SerializersCache_kt_q8kf25) {
      properties_initialized_SerializersCache_kt_q8kf25 = true;
      SERIALIZERS_CACHE = createCache(SERIALIZERS_CACHE$lambda);
      SERIALIZERS_CACHE_NULLABLE = createCache(SERIALIZERS_CACHE_NULLABLE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda);
    }
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.nn().lo()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer_0(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function serializer_1(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function serializer_5(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function serializer_15(_this__u8e3s4) {
    return InstantSerializer_getInstance();
  }
  function serializer_16(_this__u8e3s4) {
    return UuidSerializer_getInstance();
  }
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.ho(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.nn();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.qo_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.mo_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function ContextDescriptor(original, kClass) {
    this.po_1 = original;
    this.qo_1 = kClass;
    this.ro_1 = this.po_1.so() + '<' + this.qo_1.o() + '>';
  }
  protoOf(ContextDescriptor).so = function () {
    return this.ro_1;
  };
  protoOf(ContextDescriptor).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.po_1, another.po_1) && another.qo_1.equals(this.qo_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.qo_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.ro_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.qo_1) + ', original: ' + toString(this.po_1) + ')';
  };
  protoOf(ContextDescriptor).to = function () {
    return this.po_1.to();
  };
  protoOf(ContextDescriptor).lo = function () {
    return this.po_1.lo();
  };
  protoOf(ContextDescriptor).uo = function () {
    return this.po_1.uo();
  };
  protoOf(ContextDescriptor).vo = function () {
    return this.po_1.vo();
  };
  protoOf(ContextDescriptor).wo = function () {
    return this.po_1.wo();
  };
  protoOf(ContextDescriptor).xo = function (index) {
    return this.po_1.xo(index);
  };
  protoOf(ContextDescriptor).yo = function (name) {
    return this.po_1.yo(name);
  };
  protoOf(ContextDescriptor).zo = function (index) {
    return this.po_1.zo(index);
  };
  protoOf(ContextDescriptor).ap = function (index) {
    return this.po_1.ap(index);
  };
  protoOf(ContextDescriptor).bp = function (index) {
    return this.po_1.bp(index);
  };
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function SerialDescriptor() {
  }
  function get_elementNames(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementNames$$inlined$Iterable$1(_this__u8e3s4);
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementDescriptors$$inlined$Iterable$1(_this__u8e3s4);
  }
  function elementNames$1($this_elementNames) {
    this.dp_1 = $this_elementNames;
    this.cp_1 = $this_elementNames.vo();
  }
  protoOf(elementNames$1).u = function () {
    return this.cp_1 > 0;
  };
  protoOf(elementNames$1).v = function () {
    var tmp = this.dp_1.vo();
    var _unary__edvuaz = this.cp_1;
    this.cp_1 = _unary__edvuaz - 1 | 0;
    return this.dp_1.xo(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.ep_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).t = function () {
    return new elementNames$1(this.ep_1);
  };
  function elementDescriptors$1($this_elementDescriptors) {
    this.gp_1 = $this_elementDescriptors;
    this.fp_1 = $this_elementDescriptors.vo();
  }
  protoOf(elementDescriptors$1).u = function () {
    return this.fp_1 > 0;
  };
  protoOf(elementDescriptors$1).v = function () {
    var tmp = this.gp_1.vo();
    var _unary__edvuaz = this.fp_1;
    this.fp_1 = _unary__edvuaz - 1 | 0;
    return this.gp_1.ap(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.hp_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).t = function () {
    return new elementDescriptors$1(this.hp_1);
  };
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    var tmp;
    if (builderAction === VOID) {
      tmp = buildClassSerialDescriptor$lambda;
    } else {
      tmp = builderAction;
    }
    builderAction = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.un_1.e1(), toList(typeParameters), sdBuilder);
  }
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!equals(kind, CLASS_getInstance())) {
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.un_1.e1(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.rn_1 = serialName;
    this.sn_1 = false;
    this.tn_1 = emptyList();
    this.un_1 = ArrayList_init_$Create$_0();
    this.vn_1 = HashSet_init_$Create$();
    this.wn_1 = ArrayList_init_$Create$_0();
    this.xn_1 = ArrayList_init_$Create$_0();
    this.yn_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).ip = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.vn_1.c1(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered in " + this.rn_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.un_1.c1(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.wn_1.c1(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.xn_1.c1(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.yn_1.c1(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).zn = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.ip(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.ip.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.up_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp(), null);
    return tmp0.n1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.tp_1);
    };
  }
  function SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp() {
    return constructCallableReference(function (p0) {
      return _get__hashCode__tgwhef(p0);
    }, 1, 0, 2);
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.jp_1 = serialName;
    this.kp_1 = kind;
    this.lp_1 = elementsCount;
    this.mp_1 = builder.tn_1;
    this.np_1 = toHashSet(builder.un_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.un_1;
    tmp.op_1 = copyToArray(this_0);
    this.pp_1 = compactArray(builder.wn_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.xn_1;
    tmp_0.qp_1 = copyToArray(this_1);
    this.rp_1 = toBooleanArray(builder.yn_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.op_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$4 = to(item.be_1, item.ae_1);
      destination.c1(tmp$ret$4);
    }
    tmp_1.sp_1 = toMap(destination);
    this.tp_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.up_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).so = function () {
    return this.jp_1;
  };
  protoOf(SerialDescriptorImpl).to = function () {
    return this.kp_1;
  };
  protoOf(SerialDescriptorImpl).vo = function () {
    return this.lp_1;
  };
  protoOf(SerialDescriptorImpl).wo = function () {
    return this.mp_1;
  };
  protoOf(SerialDescriptorImpl).vp = function () {
    return this.np_1;
  };
  protoOf(SerialDescriptorImpl).xo = function (index) {
    return getChecked(this.op_1, index);
  };
  protoOf(SerialDescriptorImpl).yo = function (name) {
    var tmp0_elvis_lhs = this.sp_1.s2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).zo = function (index) {
    return getChecked(this.qp_1, index);
  };
  protoOf(SerialDescriptorImpl).ap = function (index) {
    return getChecked(this.pp_1, index);
  };
  protoOf(SerialDescriptorImpl).bp = function (index) {
    return getChecked_0(this.rp_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.so() === other.so())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.tp_1, other.tp_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.vo() === other.vo())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.vo();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.ap(index).so() === other.ap(index).so())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.ap(index).to(), other.ap(index).to())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    return toStringImpl(this);
  };
  function buildClassSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function buildSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).o());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).wp = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).xp = function () {
    return true;
  };
  protoOf(AbstractDecoder).yp = function () {
    return null;
  };
  protoOf(AbstractDecoder).zp = function () {
    var tmp = this.wp();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).aq = function () {
    var tmp = this.wp();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).bq = function () {
    var tmp = this.wp();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).cq = function () {
    var tmp = this.wp();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).dq = function () {
    var tmp = this.wp();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).eq = function () {
    var tmp = this.wp();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).fq = function () {
    var tmp = this.wp();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).gq = function () {
    var tmp = this.wp();
    return tmp instanceof Char ? tmp.v1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).hq = function () {
    var tmp = this.wp();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).iq = function (enumDescriptor) {
    var tmp = this.wp();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).jq = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).kq = function (deserializer, previousValue) {
    return this.lq(deserializer);
  };
  protoOf(AbstractDecoder).mq = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).nq = function (descriptor) {
  };
  protoOf(AbstractDecoder).oq = function (descriptor, index) {
    return this.zp();
  };
  protoOf(AbstractDecoder).pq = function (descriptor, index) {
    return this.aq();
  };
  protoOf(AbstractDecoder).qq = function (descriptor, index) {
    return this.bq();
  };
  protoOf(AbstractDecoder).rq = function (descriptor, index) {
    return this.cq();
  };
  protoOf(AbstractDecoder).sq = function (descriptor, index) {
    return this.dq();
  };
  protoOf(AbstractDecoder).tq = function (descriptor, index) {
    return this.eq();
  };
  protoOf(AbstractDecoder).uq = function (descriptor, index) {
    return this.fq();
  };
  protoOf(AbstractDecoder).vq = function (descriptor, index) {
    return this.gq();
  };
  protoOf(AbstractDecoder).wq = function (descriptor, index) {
    return this.hq();
  };
  protoOf(AbstractDecoder).xq = function (descriptor, index) {
    return this.jq(descriptor.ap(index));
  };
  protoOf(AbstractDecoder).yq = function (descriptor, index, deserializer, previousValue) {
    return this.kq(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).ar = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.nn().lo();
    var tmp;
    if (isNullabilitySupported || this.xp()) {
      tmp = this.kq(deserializer, previousValue);
    } else {
      tmp = this.yp();
    }
    return tmp;
  };
  function Decoder() {
  }
  function CompositeDecoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.wq($this.nn(), 0);
    var serializer = findPolymorphicSerializer($this, compositeDecoder, klassName);
    return compositeDecoder.zq($this.nn(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).on = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.nn();
    var composite = decoder.mq(descriptor);
    var tmp$ret$1;
    $l$block: {
      var klassName = null;
      var value = null;
      if (composite.cr()) {
        tmp$ret$1 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.dr(this.nn());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.wq(this.nn(), index);
            break;
          case 1:
            var tmp0 = klassName;
            var tmp$ret$2;
            $l$block_0: {
              // Inline function 'kotlin.requireNotNull' call
              if (tmp0 == null) {
                var message = 'Cannot read polymorphic value before its type token';
                throw IllegalArgumentException_init_$Create$(toString(message));
              } else {
                tmp$ret$2 = tmp0;
                break $l$block_0;
              }
            }

            klassName = tmp$ret$2;
            var serializer = findPolymorphicSerializer(this, composite, klassName);
            value = composite.zq(this.nn(), index, serializer);
            break;
          default:
            var tmp0_elvis_lhs = klassName;
            throw SerializationException_init_$Create$_0('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
        }
      }
      var tmp0_0 = value;
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        if (tmp0_0 == null) {
          var message_0 = 'Polymorphic value has not been read for class ' + klassName;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = tmp0_0;
          break $l$block_1;
        }
      }
      var tmp = tmp$ret$4;
      tmp$ret$1 = !(tmp == null) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$1;
    composite.nq(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).pn = function (decoder, klassName) {
    return decoder.br().fr(this.qn(), klassName);
  };
  function throwSubtypeNotRegistered(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.o() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.o() + "' has to be sealed and '@Serializable'."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.gr_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).nn = function () {
    return this.gr_1;
  };
  protoOf(NothingSerializer_0).on = function (decoder) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' does not have instances");
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.hr_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).nn = function () {
    return this.hr_1;
  };
  protoOf(DurationSerializer).ir = function (decoder) {
    return Companion_getInstance().zj(decoder.hq());
  };
  protoOf(DurationSerializer).on = function (decoder) {
    return new Duration(this.ir(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function InstantSerializer() {
    InstantSerializer_instance = this;
    this.jr_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Instant', STRING_getInstance());
  }
  protoOf(InstantSerializer).nn = function () {
    return this.jr_1;
  };
  protoOf(InstantSerializer).on = function (decoder) {
    return Companion_getInstance_0().lk(decoder.hq());
  };
  var InstantSerializer_instance;
  function InstantSerializer_getInstance() {
    if (InstantSerializer_instance == null)
      new InstantSerializer();
    return InstantSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.kr_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).nn = function () {
    return this.kr_1;
  };
  protoOf(UuidSerializer).on = function (decoder) {
    return Companion_getInstance_1().ul(decoder.hq());
  };
  var UuidSerializer_instance;
  function UuidSerializer_getInstance() {
    if (UuidSerializer_instance == null)
      new UuidSerializer();
    return UuidSerializer_instance;
  }
  function CachedNames() {
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).so = function () {
    return 'kotlin.Array';
  };
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).so = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).so = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).so = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.nr_1 = elementDescriptor;
    this.or_1 = 1;
  }
  protoOf(ListLikeDescriptor).to = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).vo = function () {
    return this.or_1;
  };
  protoOf(ListLikeDescriptor).xo = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).yo = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).bp = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.so() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).zo = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.so() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).ap = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.so() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.nr_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.nr_1, other.nr_1) && this.so() === other.so())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.nr_1), 31) + getStringHashCode(this.so()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.so() + '(' + toString(this.nr_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.vr_1 = serialName;
    this.wr_1 = keyDescriptor;
    this.xr_1 = valueDescriptor;
    this.yr_1 = 2;
  }
  protoOf(MapLikeDescriptor).so = function () {
    return this.vr_1;
  };
  protoOf(MapLikeDescriptor).to = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).vo = function () {
    return this.yr_1;
  };
  protoOf(MapLikeDescriptor).xo = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).yo = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).bp = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.so() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).zo = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.so() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).ap = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.so() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.wr_1;
        break;
      case 1:
        tmp = this.xr_1;
        break;
      default:
        // Inline function 'kotlin.error' call

        var message_0 = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.so() === other.so()))
      return false;
    if (!equals(this.wr_1, other.wr_1))
      return false;
    if (!equals(this.xr_1, other.xr_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.so());
    result = imul(31, result) + hashCode(this.wr_1) | 0;
    result = imul(31, result) + hashCode(this.xr_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.so() + '(' + toString(this.wr_1) + ', ' + toString(this.xr_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.bs_1 = primitive.so() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).so = function () {
    return this.bs_1;
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.ds_1 = kClass;
    this.es_1 = new ArrayClassDesc(eSerializer.nn());
  }
  protoOf(ReferenceArraySerializer).nn = function () {
    return this.es_1;
  };
  protoOf(ReferenceArraySerializer).fs = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).gs = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(ReferenceArraySerializer).hs = function (_this__u8e3s4) {
    return this.gs(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).is = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.ds_1);
  };
  protoOf(ReferenceArraySerializer).js = function (_this__u8e3s4) {
    return this.is(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).ks = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).ls = function (_this__u8e3s4) {
    return this.ks((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).ms = function (_this__u8e3s4, size) {
    return _this__u8e3s4.l5(size);
  };
  protoOf(ReferenceArraySerializer).ns = function (_this__u8e3s4, size) {
    return this.ms(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).os = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.v2(index, element);
  };
  protoOf(ReferenceArraySerializer).ps = function (_this__u8e3s4, index, element) {
    return this.os(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.ws_1 = new ArrayListClassDesc(element.nn());
  }
  protoOf(ArrayListSerializer).nn = function () {
    return this.ws_1;
  };
  protoOf(ArrayListSerializer).fs = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).xs = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(ArrayListSerializer).hs = function (_this__u8e3s4) {
    return this.xs(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).ys = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).js = function (_this__u8e3s4) {
    return this.ys(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).zs = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).ls = function (_this__u8e3s4) {
    return this.zs((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).at = function (_this__u8e3s4, size) {
    return _this__u8e3s4.l5(size);
  };
  protoOf(ArrayListSerializer).ns = function (_this__u8e3s4, size) {
    return this.at(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).bt = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.v2(index, element);
  };
  protoOf(ArrayListSerializer).ps = function (_this__u8e3s4, index, element) {
    return this.bt(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.dt_1 = new HashSetClassDesc(eSerializer.nn());
  }
  protoOf(HashSetSerializer).nn = function () {
    return this.dt_1;
  };
  protoOf(HashSetSerializer).fs = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).et = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(HashSetSerializer).hs = function (_this__u8e3s4) {
    return this.et(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).ft = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).js = function (_this__u8e3s4) {
    return this.ft(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).gt = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).ls = function (_this__u8e3s4) {
    return this.gt((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).ht = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).ns = function (_this__u8e3s4, size) {
    return this.ht(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).it = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.c1(element);
  };
  protoOf(HashSetSerializer).ps = function (_this__u8e3s4, index, element) {
    return this.it(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.kt_1 = new LinkedHashSetClassDesc(eSerializer.nn());
  }
  protoOf(LinkedHashSetSerializer).nn = function () {
    return this.kt_1;
  };
  protoOf(LinkedHashSetSerializer).fs = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).lt = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(LinkedHashSetSerializer).hs = function (_this__u8e3s4) {
    return this.lt(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).mt = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).js = function (_this__u8e3s4) {
    return this.mt(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).gt = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).ls = function (_this__u8e3s4) {
    return this.gt((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).nt = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).ns = function (_this__u8e3s4, size) {
    return this.nt(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).ot = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.c1(element);
  };
  protoOf(LinkedHashSetSerializer).ps = function (_this__u8e3s4, index, element) {
    return this.ot(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.rt_1 = new HashMapClassDesc(kSerializer.nn(), vSerializer.nn());
  }
  protoOf(HashMapSerializer).nn = function () {
    return this.rt_1;
  };
  protoOf(HashMapSerializer).fs = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).st = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.e1(), 2);
  };
  protoOf(HashMapSerializer).hs = function (_this__u8e3s4) {
    return this.st(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).tt = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).js = function (_this__u8e3s4) {
    return this.tt(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).ut = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).ls = function (_this__u8e3s4) {
    return this.ut((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).vt = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).ns = function (_this__u8e3s4, size) {
    return this.vt(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.cu_1 = new LinkedHashMapClassDesc(kSerializer.nn(), vSerializer.nn());
  }
  protoOf(LinkedHashMapSerializer).nn = function () {
    return this.cu_1;
  };
  protoOf(LinkedHashMapSerializer).fs = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).du = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.e1(), 2);
  };
  protoOf(LinkedHashMapSerializer).hs = function (_this__u8e3s4) {
    return this.du(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).eu = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).js = function (_this__u8e3s4) {
    return this.eu(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).ut = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).ls = function (_this__u8e3s4) {
    return this.ut((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).fu = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).ns = function (_this__u8e3s4, size) {
    return this.fu(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.qs_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).rs = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.ss(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).ss = function (decoder, index, builder, checkIndex) {
    this.ps(builder, index, decoder.zq(this.nn(), index, this.qs_1));
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.wt_1 = keySerializer;
    this.xt_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).yt = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.q1_1;
    var last = progression.r1_1;
    var step_0 = progression.s1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.zt(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).rs = function (decoder, builder, startIndex, size) {
    return this.yt(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).zt = function (decoder, index, builder, checkIndex) {
    var key = decoder.zq(this.nn(), index, this.wt_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.dr(this.nn());
      // Inline function 'kotlin.require' call
      if (!(this_0 === (index + 1 | 0))) {
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + this_0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = this_0;
    } else {
      tmp = index + 1 | 0;
    }
    var vIndex = tmp;
    var tmp_0;
    var tmp_1;
    if (builder.q2(key)) {
      var tmp_2 = this.xt_1.nn().to();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.yq(this.nn(), vIndex, this.xt_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.zq(this.nn(), vIndex, this.xt_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.k2(key, value);
  };
  protoOf(MapLikeSerializer).ss = function (decoder, index, builder, checkIndex) {
    return this.zt(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  function readSize($this, decoder, builder) {
    var size = decoder.er($this.nn());
    $this.ns(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).us = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.ls(previous);
    var builder = tmp1_elvis_lhs == null ? this.fs() : tmp1_elvis_lhs;
    var startIndex = this.hs(builder);
    var compositeDecoder = decoder.mq(this.nn());
    if (compositeDecoder.cr()) {
      this.rs(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.dr(this.nn());
        if (index === -1)
          break $l$loop;
        this.ts(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.nq(this.nn());
    return this.js(builder);
  };
  protoOf(AbstractCollectionSerializer).on = function (decoder) {
    return this.us(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).ts = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.ss(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.ss.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.hu_1 = new PrimitiveArrayDescriptor(primitiveSerializer.nn());
  }
  protoOf(PrimitiveArraySerializer).nn = function () {
    return this.hu_1;
  };
  protoOf(PrimitiveArraySerializer).iu = function (_this__u8e3s4) {
    return _this__u8e3s4.ju();
  };
  protoOf(PrimitiveArraySerializer).hs = function (_this__u8e3s4) {
    return this.iu(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).ku = function (_this__u8e3s4) {
    return _this__u8e3s4.lu();
  };
  protoOf(PrimitiveArraySerializer).js = function (_this__u8e3s4) {
    return this.ku(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).mu = function (_this__u8e3s4, size) {
    return _this__u8e3s4.nu(size);
  };
  protoOf(PrimitiveArraySerializer).ns = function (_this__u8e3s4, size) {
    return this.mu(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).ou = function (_this__u8e3s4, index, element) {
    // Inline function 'kotlin.error' call
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).ps = function (_this__u8e3s4, index, element) {
    return this.ou(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  protoOf(PrimitiveArraySerializer).fs = function () {
    return this.ls(this.pu());
  };
  protoOf(PrimitiveArraySerializer).on = function (decoder) {
    return this.us(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).ru = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.ju() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.nu(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.nu.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance_0 = this;
    this.su_1 = longArray(0);
  }
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    var elementsInLastSlot = elementsCount & 63;
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = shiftLeft(new Long(-1, -1), elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    var offsetInSlot = index & 63;
    $this.wu_1[slot] = bitwiseOr($this.wu_1[slot], shiftLeft(new Long(1, 0), offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.wu_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.wu_1[slot];
        while (!equalsLong(slotMarks, new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(invert(slotMarks));
          slotMarks = bitwiseOr(slotMarks, shiftLeft(new Long(1, 0), indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.uu_1($this.tu_1, index)) {
            $this.wu_1[slot] = slotMarks;
            return index;
          }
        }
        $this.wu_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_8();
    this.tu_1 = descriptor;
    this.uu_1 = readIfAbsent;
    var elementsCount = this.tu_1.vo();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = shiftLeft(new Long(-1, -1), elementsCount);
      }
      tmp.vu_1 = tmp_0;
      this.wu_1 = Companion_getInstance_8().su_1;
    } else {
      this.vu_1 = new Long(0, 0);
      this.wu_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).xu = function (index) {
    if (index < 64) {
      this.vu_1 = bitwiseOr(this.vu_1, shiftLeft(new Long(1, 0), index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).yu = function () {
    var elementsCount = this.tu_1.vo();
    while (!equalsLong(this.vu_1, new Long(-1, -1))) {
      var index = countTrailingZeroBits(invert(this.vu_1));
      this.vu_1 = bitwiseOr(this.vu_1, shiftLeft(new Long(1, 0), index));
      if (this.uu_1(this.tu_1, index)) {
        return index;
      }
    }
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    return -1;
  };
  function createSimpleEnumSerializer(serialName, values) {
    return new EnumSerializer(serialName, values);
  }
  function createUnmarkedDescriptor($this, serialName) {
    var d = new EnumDescriptor(serialName, $this.zu_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.zu_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      d.ov(element.z_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.av_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer$_get_descriptor_$ref_j67dlw() {
    return constructCallableReference(function (p0) {
      return p0.nn();
    }, 1, 0, 3);
  }
  function EnumSerializer(serialName, values) {
    this.zu_1 = values;
    this.av_1 = null;
    var tmp = this;
    tmp.bv_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).nn = function () {
    var tmp0 = this.bv_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, EnumSerializer$_get_descriptor_$ref_j67dlw(), null);
    return tmp0.n1();
  };
  protoOf(EnumSerializer).on = function (decoder) {
    var index = decoder.iq(this.nn());
    if (!(0 <= index ? index <= (this.zu_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.nn().so() + ' enum values, ' + ('values size is ' + this.zu_1.length));
    }
    return this.zu_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.nn().so() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    var tmp0 = $this.cw_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('elementDescriptors', 1, tmp, EnumDescriptor$_get_elementDescriptors_$ref_5lvk4a(), null);
    return tmp0.n1();
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.xo(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor$_get_elementDescriptors_$ref_5lvk4a() {
    return constructCallableReference(function (p0) {
      return _get_elementDescriptors__y23q9p(p0);
    }, 1, 0, 4);
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.bw_1 = ENUM_getInstance();
    var tmp = this;
    tmp.cw_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).to = function () {
    return this.bw_1;
  };
  protoOf(EnumDescriptor).ap = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!isInterface(other, SerialDescriptor))
      return false;
    if (!(other.to() === ENUM_getInstance()))
      return false;
    if (!(this.so() === other.so()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.so() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.so());
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = get_elementNames(this).t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var elementsHashCode = accumulator;
    result = imul(31, result) + elementsHashCode | 0;
    return result;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.rw_1 = true;
  }
  protoOf(InlineClassDescriptor).uo = function () {
    return this.rw_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.so() === other.so())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.rw_1 && contentEquals(this.dw(), other.dw()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.vo() === other.vo())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.vo();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.ap(index).so() === other.ap(index).so())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.ap(index).to(), other.ap(index).to())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.sw_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).tw = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.sw_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).nn = function () {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).on = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function missingFieldExceptionWithNewMessage(exception, message) {
    return exception.fo(message);
  }
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.vw_1 = OBJECT_getInstance();
    this.ww_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).to = function () {
    return this.vw_1;
  };
  protoOf(NothingSerialDescriptor).so = function () {
    return this.ww_1;
  };
  protoOf(NothingSerialDescriptor).vo = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).xo = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).yo = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).bp = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).ap = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).zo = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.ww_1) + imul(31, this.vw_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.xw_1 = serializer;
    this.yw_1 = new SerialDescriptorForNullable(this.xw_1.nn());
  }
  protoOf(NullableSerializer).nn = function () {
    return this.yw_1;
  };
  protoOf(NullableSerializer).on = function (decoder) {
    return decoder.xp() ? decoder.lq(this.xw_1) : decoder.yp();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.xw_1, other.xw_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.xw_1);
  };
  function SerialDescriptorForNullable(original) {
    this.mo_1 = original;
    this.no_1 = this.mo_1.so() + '?';
    this.oo_1 = cachedSerialNames(this.mo_1);
  }
  protoOf(SerialDescriptorForNullable).so = function () {
    return this.no_1;
  };
  protoOf(SerialDescriptorForNullable).vp = function () {
    return this.oo_1;
  };
  protoOf(SerialDescriptorForNullable).lo = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.mo_1, other.mo_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.mo_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.mo_1), 31);
  };
  protoOf(SerialDescriptorForNullable).to = function () {
    return this.mo_1.to();
  };
  protoOf(SerialDescriptorForNullable).uo = function () {
    return this.mo_1.uo();
  };
  protoOf(SerialDescriptorForNullable).vo = function () {
    return this.mo_1.vo();
  };
  protoOf(SerialDescriptorForNullable).wo = function () {
    return this.mo_1.wo();
  };
  protoOf(SerialDescriptorForNullable).xo = function (index) {
    return this.mo_1.xo(index);
  };
  protoOf(SerialDescriptorForNullable).yo = function (name) {
    return this.mo_1.yo(name);
  };
  protoOf(SerialDescriptorForNullable).zo = function (index) {
    return this.mo_1.zo(index);
  };
  protoOf(SerialDescriptorForNullable).ap = function (index) {
    return this.mo_1.ap(index);
  };
  protoOf(SerialDescriptorForNullable).bp = function (index) {
    return this.mo_1.bp(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.tn_1 = this$0.ax_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer$_get_descriptor_$ref_7z4xb6() {
    return constructCallableReference(function (p0) {
      return p0.nn();
    }, 1, 0, 5);
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.zw_1 = objectInstance;
    this.ax_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.bx_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).nn = function () {
    var tmp0 = this.bx_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, ObjectSerializer$_get_descriptor_$ref_7z4xb6(), null);
    return tmp0.n1();
  };
  protoOf(ObjectSerializer).on = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.nn();
    var composite = decoder.mq(descriptor);
    var tmp$ret$1;
    $l$block_0: {
      if (composite.cr()) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.dr(this.nn());
      if (index === -1) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$1;
    composite.nq(descriptor);
    return this.zw_1;
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.j();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        throw IllegalArgumentException_init_$Create$('Captured type parameter ' + toString(t) + ' from generic non-reified function. ' + ('Such functionality cannot be supported because ' + toString(t) + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + toString(t) + '.'));
      } else {
        throw IllegalArgumentException_init_$Create$('Only KClass supported as classifier, got ' + toString_0(t));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function typeOrThrow(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0 = _this__u8e3s4.ai_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.ai_1);
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$0;
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    var tmp;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(_this__u8e3s4 == null || _this__u8e3s4.r())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.vp();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.vo());
    var inductionVariable = 0;
    var last = _this__u8e3s4.vo();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.xo(i);
        result.c1(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function notRegisteredMessage(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0_elvis_lhs = _this__u8e3s4.o();
    return notRegisteredMessage_0(tmp0_elvis_lhs == null ? '<local class name not available>' : tmp0_elvis_lhs);
  }
  function notRegisteredMessage_0(className) {
    _init_properties_Platform_common_kt__3qzecs();
    return "Serializer for class '" + className + "' is not found.\n" + "Please ensure that class is marked as '@Serializable' and that the serialization compiler plugin is applied.\n";
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$_0();
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = descriptor.xo(i);
          missingFields.c1(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.so());
  }
  function throwArrayMissingFieldException(seenArray, goldenMaskArray, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$_0();
    var inductionVariable = 0;
    var last = goldenMaskArray.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var maskSlot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var missingFieldsBits = goldenMaskArray[maskSlot] & ~seenArray[maskSlot];
        if (!(missingFieldsBits === 0)) {
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < 32)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (!((missingFieldsBits & 1) === 0)) {
                // Inline function 'kotlin.collections.plusAssign' call
                var element = descriptor.xo(imul(maskSlot, 32) + i | 0);
                missingFields.c1(element);
              }
              missingFieldsBits = missingFieldsBits >>> 1 | 0;
            }
             while (inductionVariable_0 < 32);
        }
      }
       while (inductionVariable <= last);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.so());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.lv_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childSerializers', 1, tmp, PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca(), null);
    return tmp0.n1();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.nv_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz(), null);
    return tmp0.n1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.gv_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.gv_1[i];
        indices.k2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.dv_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tw();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca() {
    return constructCallableReference(function (p0) {
      return _get_childSerializers__7vnyfa(p0);
    }, 1, 0, 6);
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.dv_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.uw();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$2 = item.nn();
          destination.c1(tmp$ret$2);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka() {
    return constructCallableReference(function (p0) {
      return p0.dw();
    }, 1, 0, 7);
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.dw());
    };
  }
  function PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz() {
    return constructCallableReference(function (p0) {
      return _get__hashCode__tgwhef_0(p0);
    }, 1, 0, 8);
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.cv_1 = serialName;
    this.dv_1 = generatedSerializer;
    this.ev_1 = elementsCount;
    this.fv_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.ev_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.gv_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.ev_1;
    tmp_3.hv_1 = Array(size);
    this.iv_1 = null;
    this.jv_1 = booleanArray(this.ev_1);
    this.kv_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.lv_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.mv_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.nv_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).so = function () {
    return this.cv_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).vo = function () {
    return this.ev_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).to = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).wo = function () {
    var tmp0_elvis_lhs = this.iv_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).vp = function () {
    return this.kv_1.o2();
  };
  protoOf(PluginGeneratedSerialDescriptor).dw = function () {
    var tmp0 = this.mv_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('typeParameterDescriptors', 1, tmp, PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka(), null);
    return tmp0.n1();
  };
  protoOf(PluginGeneratedSerialDescriptor).ew = function (name, isOptional) {
    this.fv_1 = this.fv_1 + 1 | 0;
    this.gv_1[this.fv_1] = name;
    this.jv_1[this.fv_1] = isOptional;
    this.hv_1[this.fv_1] = null;
    if (this.fv_1 === (this.ev_1 - 1 | 0)) {
      this.kv_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).ov = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.ew(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.ew.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).ap = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).nn();
  };
  protoOf(PluginGeneratedSerialDescriptor).bp = function (index) {
    return getChecked_0(this.jv_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).zo = function (index) {
    var tmp0_elvis_lhs = getChecked(this.hv_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).xo = function (index) {
    return getChecked(this.gv_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).yo = function (name) {
    var tmp0_elvis_lhs = this.kv_1.s2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.so() === other.so())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.dw(), other.dw())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.vo() === other.vo())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.vo();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.ap(index).so() === other.ap(index).so())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.ap(index).to(), other.ap(index).to())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    return toStringImpl(this);
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.so());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = elementDescriptors.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = element.so();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var _iterator__ex2g4s_0 = elementDescriptors.t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element_0.to();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function toStringImpl(_this__u8e3s4) {
    var tmp = until(0, _this__u8e3s4.vo());
    var tmp_0 = _this__u8e3s4.so() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, toStringImpl$lambda(_this__u8e3s4));
  }
  function toStringImpl$lambda($this_toStringImpl) {
    return function (i) {
      return $this_toStringImpl.xo(i) + ': ' + $this_toStringImpl.ap(i).so();
    };
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function SerializerFactory() {
  }
  function GeneratedSerializer() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_2()));
  }
  protoOf(CharArraySerializer_0).fx = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).ls = function (_this__u8e3s4) {
    return this.fx((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).pu = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).gx = function (decoder, index, builder, checkIndex) {
    builder.jx(decoder.vq(this.hu_1, index));
  };
  protoOf(CharArraySerializer_0).ss = function (decoder, index, builder, checkIndex) {
    return this.gx(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).qu = function (decoder, index, builder, checkIndex) {
    return this.gx(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(DoubleCompanionObject_instance));
  }
  protoOf(DoubleArraySerializer_0).mx = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).ls = function (_this__u8e3s4) {
    return this.mx((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).pu = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).nx = function (decoder, index, builder, checkIndex) {
    builder.qx(decoder.uq(this.hu_1, index));
  };
  protoOf(DoubleArraySerializer_0).ss = function (decoder, index, builder, checkIndex) {
    return this.nx(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).qu = function (decoder, index, builder, checkIndex) {
    return this.nx(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(FloatCompanionObject_instance));
  }
  protoOf(FloatArraySerializer_0).tx = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).ls = function (_this__u8e3s4) {
    return this.tx((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).pu = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).ux = function (decoder, index, builder, checkIndex) {
    builder.xx(decoder.tq(this.hu_1, index));
  };
  protoOf(FloatArraySerializer_0).ss = function (decoder, index, builder, checkIndex) {
    return this.ux(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).qu = function (decoder, index, builder, checkIndex) {
    return this.ux(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(Companion_getInstance_3()));
  }
  protoOf(LongArraySerializer_0).ay = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).ls = function (_this__u8e3s4) {
    return this.ay((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).pu = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).by = function (decoder, index, builder, checkIndex) {
    builder.ey(decoder.sq(this.hu_1, index));
  };
  protoOf(LongArraySerializer_0).ss = function (decoder, index, builder, checkIndex) {
    return this.by(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).qu = function (decoder, index, builder, checkIndex) {
    return this.by(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(Companion_getInstance_4()));
  }
  protoOf(ULongArraySerializer_0).hy = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).ls = function (_this__u8e3s4) {
    return this.hy(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.cn_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).iy = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).pu = function () {
    return new ULongArray(this.iy());
  };
  protoOf(ULongArraySerializer_0).jy = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.xq(this.hu_1, index).dq();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.my(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).ss = function (decoder, index, builder, checkIndex) {
    return this.jy(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).qu = function (decoder, index, builder, checkIndex) {
    return this.jy(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(IntCompanionObject_instance));
  }
  protoOf(IntArraySerializer_0).py = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).ls = function (_this__u8e3s4) {
    return this.py((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).pu = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).qy = function (decoder, index, builder, checkIndex) {
    builder.ty(decoder.rq(this.hu_1, index));
  };
  protoOf(IntArraySerializer_0).ss = function (decoder, index, builder, checkIndex) {
    return this.qy(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).qu = function (decoder, index, builder, checkIndex) {
    return this.qy(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(Companion_getInstance_5()));
  }
  protoOf(UIntArraySerializer_0).wy = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).ls = function (_this__u8e3s4) {
    return this.wy(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.sm_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).xy = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).pu = function () {
    return new UIntArray(this.xy());
  };
  protoOf(UIntArraySerializer_0).yy = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.xq(this.hu_1, index).cq();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.bz(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).ss = function (decoder, index, builder, checkIndex) {
    return this.yy(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).qu = function (decoder, index, builder, checkIndex) {
    return this.yy(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(ShortCompanionObject_instance));
  }
  protoOf(ShortArraySerializer_0).ez = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).ls = function (_this__u8e3s4) {
    return this.ez((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).pu = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).fz = function (decoder, index, builder, checkIndex) {
    builder.iz(decoder.qq(this.hu_1, index));
  };
  protoOf(ShortArraySerializer_0).ss = function (decoder, index, builder, checkIndex) {
    return this.fz(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).qu = function (decoder, index, builder, checkIndex) {
    return this.fz(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance_6()));
  }
  protoOf(UShortArraySerializer_0).lz = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).ls = function (_this__u8e3s4) {
    return this.lz(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.mn_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).mz = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).pu = function () {
    return new UShortArray(this.mz());
  };
  protoOf(UShortArraySerializer_0).nz = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.xq(this.hu_1, index).bq();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.qz(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).ss = function (decoder, index, builder, checkIndex) {
    return this.nz(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).qu = function (decoder, index, builder, checkIndex) {
    return this.nz(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(ByteCompanionObject_instance));
  }
  protoOf(ByteArraySerializer_0).tz = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).ls = function (_this__u8e3s4) {
    return this.tz((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).pu = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).uz = function (decoder, index, builder, checkIndex) {
    builder.xz(decoder.pq(this.hu_1, index));
  };
  protoOf(ByteArraySerializer_0).ss = function (decoder, index, builder, checkIndex) {
    return this.uz(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).qu = function (decoder, index, builder, checkIndex) {
    return this.uz(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(Companion_getInstance_7()));
  }
  protoOf(UByteArraySerializer_0).a10 = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).ls = function (_this__u8e3s4) {
    return this.a10(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.im_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).b10 = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).pu = function () {
    return new UByteArray(this.b10());
  };
  protoOf(UByteArraySerializer_0).c10 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.xq(this.hu_1, index).aq();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.f10(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).ss = function (decoder, index, builder, checkIndex) {
    return this.c10(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).qu = function (decoder, index, builder, checkIndex) {
    return this.c10(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(BooleanCompanionObject_instance));
  }
  protoOf(BooleanArraySerializer_0).i10 = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).ls = function (_this__u8e3s4) {
    return this.i10((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).pu = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).j10 = function (decoder, index, builder, checkIndex) {
    builder.m10(decoder.oq(this.hu_1, index));
  };
  protoOf(BooleanArraySerializer_0).ss = function (decoder, index, builder, checkIndex) {
    return this.j10(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).qu = function (decoder, index, builder, checkIndex) {
    return this.j10(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.hx_1 = bufferWithData;
    this.ix_1 = bufferWithData.length;
    this.nu(10);
  }
  protoOf(CharArrayBuilder).ju = function () {
    return this.ix_1;
  };
  protoOf(CharArrayBuilder).nu = function (requiredCapacity) {
    if (this.hx_1.length < requiredCapacity)
      this.hx_1 = copyOf(this.hx_1, coerceAtLeast(requiredCapacity, imul(this.hx_1.length, 2)));
  };
  protoOf(CharArrayBuilder).jx = function (c) {
    this.ru();
    var tmp = this.hx_1;
    var _unary__edvuaz = this.ix_1;
    this.ix_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).lu = function () {
    return copyOf(this.hx_1, this.ix_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ox_1 = bufferWithData;
    this.px_1 = bufferWithData.length;
    this.nu(10);
  }
  protoOf(DoubleArrayBuilder).ju = function () {
    return this.px_1;
  };
  protoOf(DoubleArrayBuilder).nu = function (requiredCapacity) {
    if (this.ox_1.length < requiredCapacity)
      this.ox_1 = copyOf_0(this.ox_1, coerceAtLeast(requiredCapacity, imul(this.ox_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).qx = function (c) {
    this.ru();
    var tmp = this.ox_1;
    var _unary__edvuaz = this.px_1;
    this.px_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).lu = function () {
    return copyOf_0(this.ox_1, this.px_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.vx_1 = bufferWithData;
    this.wx_1 = bufferWithData.length;
    this.nu(10);
  }
  protoOf(FloatArrayBuilder).ju = function () {
    return this.wx_1;
  };
  protoOf(FloatArrayBuilder).nu = function (requiredCapacity) {
    if (this.vx_1.length < requiredCapacity)
      this.vx_1 = copyOf_1(this.vx_1, coerceAtLeast(requiredCapacity, imul(this.vx_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).xx = function (c) {
    this.ru();
    var tmp = this.vx_1;
    var _unary__edvuaz = this.wx_1;
    this.wx_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).lu = function () {
    return copyOf_1(this.vx_1, this.wx_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.cy_1 = bufferWithData;
    this.dy_1 = bufferWithData.length;
    this.nu(10);
  }
  protoOf(LongArrayBuilder).ju = function () {
    return this.dy_1;
  };
  protoOf(LongArrayBuilder).nu = function (requiredCapacity) {
    if (this.cy_1.length < requiredCapacity)
      this.cy_1 = copyOf_2(this.cy_1, coerceAtLeast(requiredCapacity, imul(this.cy_1.length, 2)));
  };
  protoOf(LongArrayBuilder).ey = function (c) {
    this.ru();
    var tmp = this.cy_1;
    var _unary__edvuaz = this.dy_1;
    this.dy_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).lu = function () {
    return copyOf_2(this.cy_1, this.dy_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ky_1 = bufferWithData;
    this.ly_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.nu(10);
  }
  protoOf(ULongArrayBuilder).ju = function () {
    return this.ly_1;
  };
  protoOf(ULongArrayBuilder).nu = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.ky_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.ky_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.ky_1), 2));
      tmp.ky_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).my = function (c) {
    this.ru();
    var tmp = this.ky_1;
    var _unary__edvuaz = this.ly_1;
    this.ly_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).n10 = function () {
    var tmp0 = this.ky_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.ly_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).lu = function () {
    return new ULongArray(this.n10());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ry_1 = bufferWithData;
    this.sy_1 = bufferWithData.length;
    this.nu(10);
  }
  protoOf(IntArrayBuilder).ju = function () {
    return this.sy_1;
  };
  protoOf(IntArrayBuilder).nu = function (requiredCapacity) {
    if (this.ry_1.length < requiredCapacity)
      this.ry_1 = copyOf_3(this.ry_1, coerceAtLeast(requiredCapacity, imul(this.ry_1.length, 2)));
  };
  protoOf(IntArrayBuilder).ty = function (c) {
    this.ru();
    var tmp = this.ry_1;
    var _unary__edvuaz = this.sy_1;
    this.sy_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).lu = function () {
    return copyOf_3(this.ry_1, this.sy_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.zy_1 = bufferWithData;
    this.az_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.nu(10);
  }
  protoOf(UIntArrayBuilder).ju = function () {
    return this.az_1;
  };
  protoOf(UIntArrayBuilder).nu = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.zy_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.zy_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.zy_1), 2));
      tmp.zy_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).bz = function (c) {
    this.ru();
    var tmp = this.zy_1;
    var _unary__edvuaz = this.az_1;
    this.az_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).o10 = function () {
    var tmp0 = this.zy_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.az_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).lu = function () {
    return new UIntArray(this.o10());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.gz_1 = bufferWithData;
    this.hz_1 = bufferWithData.length;
    this.nu(10);
  }
  protoOf(ShortArrayBuilder).ju = function () {
    return this.hz_1;
  };
  protoOf(ShortArrayBuilder).nu = function (requiredCapacity) {
    if (this.gz_1.length < requiredCapacity)
      this.gz_1 = copyOf_4(this.gz_1, coerceAtLeast(requiredCapacity, imul(this.gz_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).iz = function (c) {
    this.ru();
    var tmp = this.gz_1;
    var _unary__edvuaz = this.hz_1;
    this.hz_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).lu = function () {
    return copyOf_4(this.gz_1, this.hz_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.oz_1 = bufferWithData;
    this.pz_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.nu(10);
  }
  protoOf(UShortArrayBuilder).ju = function () {
    return this.pz_1;
  };
  protoOf(UShortArrayBuilder).nu = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.oz_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.oz_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.oz_1), 2));
      tmp.oz_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).qz = function (c) {
    this.ru();
    var tmp = this.oz_1;
    var _unary__edvuaz = this.pz_1;
    this.pz_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).p10 = function () {
    var tmp0 = this.oz_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.pz_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).lu = function () {
    return new UShortArray(this.p10());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.vz_1 = bufferWithData;
    this.wz_1 = bufferWithData.length;
    this.nu(10);
  }
  protoOf(ByteArrayBuilder).ju = function () {
    return this.wz_1;
  };
  protoOf(ByteArrayBuilder).nu = function (requiredCapacity) {
    if (this.vz_1.length < requiredCapacity)
      this.vz_1 = copyOf_5(this.vz_1, coerceAtLeast(requiredCapacity, imul(this.vz_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).xz = function (c) {
    this.ru();
    var tmp = this.vz_1;
    var _unary__edvuaz = this.wz_1;
    this.wz_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).lu = function () {
    return copyOf_5(this.vz_1, this.wz_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.d10_1 = bufferWithData;
    this.e10_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.nu(10);
  }
  protoOf(UByteArrayBuilder).ju = function () {
    return this.e10_1;
  };
  protoOf(UByteArrayBuilder).nu = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.d10_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.d10_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.d10_1), 2));
      tmp.d10_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).f10 = function (c) {
    this.ru();
    var tmp = this.d10_1;
    var _unary__edvuaz = this.e10_1;
    this.e10_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).q10 = function () {
    var tmp0 = this.d10_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.e10_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).lu = function () {
    return new UByteArray(this.q10());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.k10_1 = bufferWithData;
    this.l10_1 = bufferWithData.length;
    this.nu(10);
  }
  protoOf(BooleanArrayBuilder).ju = function () {
    return this.l10_1;
  };
  protoOf(BooleanArrayBuilder).nu = function (requiredCapacity) {
    if (this.k10_1.length < requiredCapacity)
      this.k10_1 = copyOf_6(this.k10_1, coerceAtLeast(requiredCapacity, imul(this.k10_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).m10 = function (c) {
    this.ru();
    var tmp = this.k10_1;
    var _unary__edvuaz = this.l10_1;
    this.l10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).lu = function () {
    return copyOf_6(this.k10_1, this.l10_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function IntSerializer() {
    IntSerializer_instance = this;
    this.r10_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).nn = function () {
    return this.r10_1;
  };
  protoOf(IntSerializer).on = function (decoder) {
    return decoder.cq();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.s10_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).nn = function () {
    return this.s10_1;
  };
  protoOf(StringSerializer).on = function (decoder) {
    return decoder.hq();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.t10_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).nn = function () {
    return this.t10_1;
  };
  protoOf(BooleanSerializer).on = function (decoder) {
    return decoder.zp();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.u10_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).nn = function () {
    return this.u10_1;
  };
  protoOf(LongSerializer).on = function (decoder) {
    return decoder.dq();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().s2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkNameIsNotAPrimitive(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.v10_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.v10_1 = serialName;
    this.w10_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).so = function () {
    return this.v10_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).to = function () {
    return this.w10_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).vo = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).xo = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).yo = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).bp = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).ap = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).zo = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.v10_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.v10_1 === other.v10_1 && equals(this.w10_1, other.w10_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.v10_1) + imul(31, this.w10_1.hashCode()) | 0;
  };
  function checkNameIsNotAPrimitive(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().p2();
    var _iterator__ex2g4s = values.t();
    while (_iterator__ex2g4s.u()) {
      var primitive = _iterator__ex2g4s.v();
      var primitiveName = primitive.nn().so();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).o() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.x10_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).nn = function () {
    return this.x10_1;
  };
  protoOf(ByteSerializer).on = function (decoder) {
    return decoder.aq();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.y10_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).nn = function () {
    return this.y10_1;
  };
  protoOf(ShortSerializer).on = function (decoder) {
    return decoder.bq();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.z10_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).nn = function () {
    return this.z10_1;
  };
  protoOf(CharSerializer).a11 = function (decoder) {
    return decoder.gq();
  };
  protoOf(CharSerializer).on = function (decoder) {
    return new Char(this.a11(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.b11_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).nn = function () {
    return this.b11_1;
  };
  protoOf(DoubleSerializer).on = function (decoder) {
    return decoder.fq();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.c11_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).nn = function () {
    return this.c11_1;
  };
  protoOf(FloatSerializer).on = function (decoder) {
    return decoder.eq();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.d11_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).nn = function () {
    return this.d11_1.nn();
  };
  protoOf(UnitSerializer).e11 = function (decoder) {
    this.d11_1.on(decoder);
  };
  protoOf(UnitSerializer).on = function (decoder) {
    this.e11(decoder);
    return Unit_instance;
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = initBuiltins();
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).h11 = function (_this__u8e3s4, index) {
    return this.j11(this.i11(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).j11 = function (nestedName) {
    var tmp0_elvis_lhs = this.m11();
    return this.n11(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).i11 = function (descriptor, index) {
    return descriptor.xo(index);
  };
  protoOf(NamedValueDecoder).n11 = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).o11 = function () {
    return this.k11_1.r() ? '$' : joinToString(this.k11_1, '.', '$.');
  };
  function tagBlock($this, tag, block) {
    $this.c12(tag);
    var r = block();
    if (!$this.l11_1) {
      $this.d12();
    }
    $this.l11_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.kq($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.nn().lo();
      var tmp;
      if (isNullabilitySupported || tmp0.xp()) {
        tmp = this$0.kq($deserializer, $previousValue);
      } else {
        tmp = tmp0.yp();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.k11_1 = ArrayList_init_$Create$_0();
    this.l11_1 = false;
  }
  protoOf(TaggedDecoder).br = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).p11 = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).q11 = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).r11 = function (tag) {
    var tmp = this.p11(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).s11 = function (tag) {
    var tmp = this.p11(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).t11 = function (tag) {
    var tmp = this.p11(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).u11 = function (tag) {
    var tmp = this.p11(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).v11 = function (tag) {
    var tmp = this.p11(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).w11 = function (tag) {
    var tmp = this.p11(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).x11 = function (tag) {
    var tmp = this.p11(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).y11 = function (tag) {
    var tmp = this.p11(tag);
    return tmp instanceof Char ? tmp.v1_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).z11 = function (tag) {
    var tmp = this.p11(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).a12 = function (tag, enumDescriptor) {
    var tmp = this.p11(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).b12 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.c12(tag);
    return this;
  };
  protoOf(TaggedDecoder).kq = function (deserializer, previousValue) {
    return this.lq(deserializer);
  };
  protoOf(TaggedDecoder).jq = function (descriptor) {
    return this.b12(this.d12(), descriptor);
  };
  protoOf(TaggedDecoder).xp = function () {
    var tmp0_elvis_lhs = this.m11();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.q11(currentTag);
  };
  protoOf(TaggedDecoder).yp = function () {
    return null;
  };
  protoOf(TaggedDecoder).zp = function () {
    return this.r11(this.d12());
  };
  protoOf(TaggedDecoder).aq = function () {
    return this.s11(this.d12());
  };
  protoOf(TaggedDecoder).bq = function () {
    return this.t11(this.d12());
  };
  protoOf(TaggedDecoder).cq = function () {
    return this.u11(this.d12());
  };
  protoOf(TaggedDecoder).dq = function () {
    return this.v11(this.d12());
  };
  protoOf(TaggedDecoder).eq = function () {
    return this.w11(this.d12());
  };
  protoOf(TaggedDecoder).fq = function () {
    return this.x11(this.d12());
  };
  protoOf(TaggedDecoder).gq = function () {
    return this.y11(this.d12());
  };
  protoOf(TaggedDecoder).hq = function () {
    return this.z11(this.d12());
  };
  protoOf(TaggedDecoder).iq = function (enumDescriptor) {
    return this.a12(this.d12(), enumDescriptor);
  };
  protoOf(TaggedDecoder).mq = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).nq = function (descriptor) {
  };
  protoOf(TaggedDecoder).oq = function (descriptor, index) {
    return this.r11(this.h11(descriptor, index));
  };
  protoOf(TaggedDecoder).pq = function (descriptor, index) {
    return this.s11(this.h11(descriptor, index));
  };
  protoOf(TaggedDecoder).qq = function (descriptor, index) {
    return this.t11(this.h11(descriptor, index));
  };
  protoOf(TaggedDecoder).rq = function (descriptor, index) {
    return this.u11(this.h11(descriptor, index));
  };
  protoOf(TaggedDecoder).sq = function (descriptor, index) {
    return this.v11(this.h11(descriptor, index));
  };
  protoOf(TaggedDecoder).tq = function (descriptor, index) {
    return this.w11(this.h11(descriptor, index));
  };
  protoOf(TaggedDecoder).uq = function (descriptor, index) {
    return this.x11(this.h11(descriptor, index));
  };
  protoOf(TaggedDecoder).vq = function (descriptor, index) {
    return this.y11(this.h11(descriptor, index));
  };
  protoOf(TaggedDecoder).wq = function (descriptor, index) {
    return this.z11(this.h11(descriptor, index));
  };
  protoOf(TaggedDecoder).xq = function (descriptor, index) {
    return this.b12(this.h11(descriptor, index), descriptor.ap(index));
  };
  protoOf(TaggedDecoder).yq = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.h11(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).ar = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.h11(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).m11 = function () {
    return lastOrNull(this.k11_1);
  };
  protoOf(TaggedDecoder).c12 = function (name) {
    this.k11_1.c1(name);
  };
  protoOf(TaggedDecoder).d12 = function () {
    var r = this.k11_1.w2(get_lastIndex_0(this.k11_1));
    this.l11_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.e12_1 = key;
    this.f12_1 = value;
  }
  protoOf(MapEntry).m1 = function () {
    return this.e12_1;
  };
  protoOf(MapEntry).n1 = function () {
    return this.f12_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.e12_1) + ', value=' + toString_0(this.f12_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.e12_1 == null ? 0 : hashCode(this.e12_1);
    result = imul(result, 31) + (this.f12_1 == null ? 0 : hashCode(this.f12_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    if (!equals(this.e12_1, other.e12_1))
      return false;
    if (!equals(this.f12_1, other.f12_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.zn('key', $keySerializer.nn());
      $this$buildSerialDescriptor.zn('value', $valueSerializer.nn());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.i12_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).nn = function () {
    return this.i12_1;
  };
  protoOf(MapEntrySerializer_0).j12 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.zn('first', $keySerializer.nn());
      $this$buildClassSerialDescriptor.zn('second', $valueSerializer.nn());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.o12_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).nn = function () {
    return this.o12_1;
  };
  protoOf(PairSerializer_0).j12 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.zq($this.s12_1, 0, $this.p12_1);
    var b = composite.zq($this.s12_1, 1, $this.q12_1);
    var c = composite.zq($this.s12_1, 2, $this.r12_1);
    composite.nq($this.s12_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.dr($this.s12_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.zq($this.s12_1, 0, $this.p12_1);
          break;
        case 1:
          b = composite.zq($this.s12_1, 1, $this.q12_1);
          break;
        case 2:
          c = composite.zq($this.s12_1, 2, $this.r12_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.nq($this.s12_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    return new Triple(a, b, c);
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.zn('first', this$0.p12_1.nn());
      $this$buildClassSerialDescriptor.zn('second', this$0.q12_1.nn());
      $this$buildClassSerialDescriptor.zn('third', this$0.r12_1.nn());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.p12_1 = aSerializer;
    this.q12_1 = bSerializer;
    this.r12_1 = cSerializer;
    var tmp = this;
    tmp.s12_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).nn = function () {
    return this.s12_1;
  };
  protoOf(TripleSerializer_0).on = function (decoder) {
    var composite = decoder.mq(this.s12_1);
    if (composite.cr()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.k12_1 = keySerializer;
    this.l12_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).on = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.nn();
    var composite = decoder.mq(descriptor);
    var tmp$ret$1;
    $l$block: {
      if (composite.cr()) {
        var key = composite.zq(this.nn(), 0, this.k12_1);
        var value = composite.zq(this.nn(), 1, this.l12_1);
        tmp$ret$1 = this.j12(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.dr(this.nn());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.zq(this.nn(), 0, this.k12_1);
            break;
          case 1:
            value_0 = composite.zq(this.nn(), 1, this.l12_1);
            break;
          default:
            throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      tmp$ret$1 = this.j12(key_0, value_0);
    }
    var result = tmp$ret$1;
    composite.nq(descriptor);
    return result;
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function _init_properties_Tuples_kt__dz0qyd() {
    if (!properties_initialized_Tuples_kt_3vs7ar) {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.t12_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_5(Companion_getInstance_3()));
  }
  protoOf(ULongSerializer).nn = function () {
    return this.t12_1;
  };
  protoOf(ULongSerializer).u12 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.jq(this.t12_1).dq();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).on = function (decoder) {
    return new ULong(this.u12(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.v12_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).nn = function () {
    return this.v12_1;
  };
  protoOf(UIntSerializer).w12 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.jq(this.v12_1).cq();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).on = function (decoder) {
    return new UInt(this.w12(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.x12_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_7(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).nn = function () {
    return this.x12_1;
  };
  protoOf(UByteSerializer).y12 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.jq(this.x12_1).aq();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).on = function (decoder) {
    return new UByte(this.y12(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.z12_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).nn = function () {
    return this.z12_1;
  };
  protoOf(UShortSerializer).a13 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.jq(this.z12_1).bq();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).on = function (decoder) {
    return new UShort(this.a13(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).ho = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.io(kClass, typeArgumentsSerializers) : $super.io.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.c13_1 = class2ContextualFactory;
    this.d13_1 = polyBase2Serializers;
    this.e13_1 = polyBase2DefaultSerializerProvider;
    this.f13_1 = polyBase2NamedSerializers;
    this.g13_1 = polyBase2DefaultDeserializerProvider;
    this.h13_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).go = function () {
    return this.h13_1;
  };
  protoOf(SerialModuleImpl).fr = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.f13_1.s2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).s2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.g13_1.s2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).io = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.c13_1.s2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i13(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).b13 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.c13_1.l1().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.n1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.l13_1;
        collector.m13(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.k13(kclass, serial.j13_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.d13_1.l1().t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.m1();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.n1();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = classMap.l1().t();
      while (_iterator__ex2g4s_1.u()) {
        var element_1 = _iterator__ex2g4s_1.v();
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.m1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.n1();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$15 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.n13(tmp_1, tmp_2, tmp$ret$15);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.e13_1.l1().t();
    while (_iterator__ex2g4s_2.u()) {
      var element_2 = _iterator__ex2g4s_2.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.m1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.n1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.o13(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.g13_1.l1().t();
    while (_iterator__ex2g4s_3.u()) {
      var element_3 = _iterator__ex2g4s_3.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.m1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.n1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.p13(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless(serializer) {
    ContextualProvider.call(this);
    this.l13_1 = serializer;
  }
  protoOf(Argless).i13 = function (typeArgumentsSerializers) {
    return this.l13_1;
  };
  protoOf(Argless).equals = function (other) {
    var tmp;
    if (other instanceof Argless) {
      tmp = equals(other.l13_1, this.l13_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Argless).hashCode = function () {
    return hashCode(this.l13_1);
  };
  function WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.j13_1 = provider;
  }
  protoOf(WithTypeArguments).i13 = function (typeArgumentsSerializers) {
    return this.j13_1(typeArgumentsSerializers);
  };
  function ContextualProvider() {
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap(), false);
    }
  }
  function SerializersModuleBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.q13_1 = HashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_0.r13_1 = HashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_1.s13_1 = HashMap_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_2.t13_1 = HashMap_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_3.u13_1 = HashMap_init_$Create$();
    this.v13_1 = false;
  }
  protoOf(SerializersModuleBuilder).m13 = function (kClass, serializer) {
    return this.w13(kClass, new Argless(serializer));
  };
  protoOf(SerializersModuleBuilder).k13 = function (kClass, provider) {
    return this.w13(kClass, new WithTypeArguments(provider));
  };
  protoOf(SerializersModuleBuilder).n13 = function (baseClass, actualClass, actualSerializer) {
    this.x13(baseClass, actualClass, actualSerializer);
  };
  protoOf(SerializersModuleBuilder).o13 = function (baseClass, defaultSerializerProvider) {
    this.y13(baseClass, defaultSerializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).p13 = function (baseClass, defaultDeserializerProvider) {
    this.z13(baseClass, defaultDeserializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).a14 = function (forClass, provider, allowOverwrite) {
    if (!allowOverwrite) {
      var previous = this.q13_1.s2(forClass);
      if (!(previous == null) && !equals(previous, provider)) {
        throw new SerializerAlreadyRegisteredException('Contextual serializer or serializer provider for ' + toString(forClass) + ' already registered in this module');
      }
    }
    // Inline function 'kotlin.collections.set' call
    this.q13_1.k2(forClass, provider);
    if (isInterface_0(forClass))
      this.v13_1 = true;
  };
  protoOf(SerializersModuleBuilder).w13 = function (forClass, provider, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.a14(forClass, provider, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.a14.call(this, forClass, provider, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).y13 = function (baseClass, defaultSerializerProvider, allowOverwrite) {
    var previous = this.s13_1.s2(baseClass);
    if (!(previous == null) && !equals(previous, defaultSerializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default serializers provider for ' + toString(baseClass) + ' is already registered: ' + toString(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.s13_1.k2(baseClass, defaultSerializerProvider);
  };
  protoOf(SerializersModuleBuilder).z13 = function (baseClass, defaultDeserializerProvider, allowOverwrite) {
    var previous = this.u13_1.s2(baseClass);
    if (!(previous == null) && !equals(previous, defaultDeserializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default deserializers provider for ' + toString(baseClass) + ' is already registered: ' + toString(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.u13_1.k2(baseClass, defaultDeserializerProvider);
  };
  protoOf(SerializersModuleBuilder).b14 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite) {
    var name = concreteSerializer.nn().so();
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.r13_1;
    var value = this_0.s2(baseClass);
    var tmp;
    if (value == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer = HashMap_init_$Create$();
      this_0.k2(baseClass, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var baseClassSerializers = tmp;
    // Inline function 'kotlin.collections.getOrPut' call
    var this_1 = this.t13_1;
    var value_0 = this_1.s2(baseClass);
    var tmp_0;
    if (value_0 == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer_0 = HashMap_init_$Create$();
      this_1.k2(baseClass, answer_0);
      tmp_0 = answer_0;
    } else {
      tmp_0 = value_0;
    }
    var names = tmp_0;
    var previousSerializer = baseClassSerializers.s2(concreteClass);
    if (!(previousSerializer == null) && !equals(previousSerializer, concreteSerializer)) {
      if (allowOverwrite)
        names.l2(previousSerializer.nn().so());
      else
        throw SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass);
    }
    var previousByName = names.s2(name);
    if (!(previousByName == null) && !equals(previousByName, concreteSerializer)) {
      // Inline function 'kotlin.sequences.find' call
      var tmp0 = asSequence(baseClassSerializers);
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlin.sequences.firstOrNull' call
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (element.n1() === previousByName) {
            tmp$ret$7 = element;
            break $l$block;
          }
        }
        tmp$ret$7 = null;
      }
      var tmp0_safe_receiver = tmp$ret$7;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m1();
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.error' call
        var message = 'Name ' + name + ' is registered in the module but no Kotlin class is associated with it.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var previousClass = tmp_1;
      if (allowOverwrite)
        baseClassSerializers.l2(previousClass);
      else
        throw IllegalArgumentException_init_$Create$("Multiple polymorphic serializers in a scope of '" + toString(baseClass) + "' " + ("have the same serial name '" + name + "': " + toString(concreteSerializer) + " for '" + toString(concreteClass) + "' and " + toString(previousByName) + " for '" + toString(previousClass) + "'"));
    }
    // Inline function 'kotlin.collections.set' call
    baseClassSerializers.k2(concreteClass, concreteSerializer);
    // Inline function 'kotlin.collections.set' call
    names.k2(name, concreteSerializer);
  };
  protoOf(SerializersModuleBuilder).x13 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.b14(baseClass, concreteClass, concreteSerializer, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.b14.call(this, baseClass, concreteClass, concreteSerializer, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).lu = function () {
    return new SerialModuleImpl(this.q13_1, this.r13_1, this.s13_1, this.t13_1, this.u13_1, this.v13_1);
  };
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializerAlreadyRegisteredException_init_$Init$(baseClass, concreteClass, $this) {
    SerializerAlreadyRegisteredException.call($this, 'Serializer for ' + toString(concreteClass) + ' already registered in the scope of ' + toString(baseClass));
    return $this;
  }
  function SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass) {
    var tmp = SerializerAlreadyRegisteredException_init_$Init$(baseClass, concreteClass, objectCreate(protoOf(SerializerAlreadyRegisteredException)));
    captureStack(tmp, SerializerAlreadyRegisteredException_init_$Create$);
    return tmp;
  }
  function SerializerAlreadyRegisteredException(msg) {
    IllegalArgumentException_init_$Init$_0(msg, this);
    captureStack(this, SerializerAlreadyRegisteredException);
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith(serializer) {
    this.c14_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.c14_1.equals(tmp0_other_with_cast.c14_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.c14_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.c14_1) + ')';
  };
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp0_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().fb()) {
        tmp_0 = NothingSerializer_getInstance();
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_safe_receiver = get_js(_this__u8e3s4).Companion;
        tmp_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.serializer();
      }
      var tmp_1 = tmp_0;
      tmp = (!(tmp_1 == null) ? isInterface(tmp_1, KSerializer) : false) ? tmp_1 : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4) + 'To get enum serializer on Kotlin/JS, it should be annotated with @Serializable annotation.');
  }
  function isInterface_0(_this__u8e3s4) {
    return get_isInterfaceHack(_this__u8e3s4);
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().nb());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      var assocObject = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = isInterface(assocObject, KSerializer) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.cx(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          tmp_0 = null;
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      var e = $p;
      tmp_2 = null;
      tmp = tmp_2;
    }
    return tmp;
  }
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(_this__u8e3s4);
  }
  function initBuiltins() {
    return mapOf([to(PrimitiveClasses_getInstance().ob(), serializer_0(StringCompanionObject_instance)), to(getKClass(Char), serializer_9(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().rb(), CharArraySerializer()), to(PrimitiveClasses_getInstance().mb(), serializer_10(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().xb(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().lb(), serializer_11(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().wb(), FloatArraySerializer()), to(getKClass(Long), serializer_5(Companion_getInstance_3())), to(get_longArrayClass(), LongArraySerializer()), to(getKClass(ULong), serializer_1(Companion_getInstance_4())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().jb(), serializer_6(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().ub(), IntArraySerializer()), to(getKClass(UInt), serializer_2(Companion_getInstance_5())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().ib(), serializer_8(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().tb(), ShortArraySerializer()), to(getKClass(UShort), serializer_4(Companion_getInstance_6())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().hb(), serializer_7(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().sb(), ByteArraySerializer()), to(getKClass(UByte), serializer_3(Companion_getInstance_7())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().gb(), serializer_12(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().qb(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_instance)), to(PrimitiveClasses_getInstance().fb(), NothingSerializer()), to(getKClass(Duration), serializer_14(Companion_getInstance())), to(getKClass(Instant), serializer_15(Companion_getInstance_0())), to(getKClass(Uuid), serializer_16(Companion_getInstance_1()))]);
  }
  function get_isInterfaceHack(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().fb())
      return false;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function createCache$1($factory) {
    this.d14_1 = $factory;
  }
  protoOf(createCache$1).jo = function (key) {
    return this.d14_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.e14_1 = $factory;
  }
  protoOf(createParametrizedCache$1).ko = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = this.e14_1(key, types);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).lo = get_isNullable;
  protoOf(SerialDescriptorImpl).uo = get_isInline;
  protoOf(AbstractDecoder).zq = decodeSerializableElement$default;
  protoOf(AbstractDecoder).lq = decodeSerializableValue;
  protoOf(AbstractDecoder).cr = decodeSequentially;
  protoOf(AbstractDecoder).er = decodeCollectionSize;
  protoOf(ListLikeDescriptor).lo = get_isNullable;
  protoOf(ListLikeDescriptor).uo = get_isInline;
  protoOf(ListLikeDescriptor).wo = get_annotations;
  protoOf(MapLikeDescriptor).lo = get_isNullable;
  protoOf(MapLikeDescriptor).uo = get_isInline;
  protoOf(MapLikeDescriptor).wo = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).lo = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).uo = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).uw = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).lo = get_isNullable;
  protoOf(NothingSerialDescriptor).uo = get_isInline;
  protoOf(NothingSerialDescriptor).wo = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).lo = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).uo = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).wo = get_annotations;
  protoOf(TaggedDecoder).zq = decodeSerializableElement$default;
  protoOf(TaggedDecoder).lq = decodeSerializableValue;
  protoOf(TaggedDecoder).cr = decodeSequentially;
  protoOf(TaggedDecoder).er = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SEALED_getInstance;
  _.$_$.b = STRING_getInstance;
  _.$_$.c = CONTEXTUAL_getInstance;
  _.$_$.d = ENUM_getInstance;
  _.$_$.e = CLASS_getInstance;
  _.$_$.f = LIST_getInstance;
  _.$_$.g = MAP_getInstance;
  _.$_$.h = BooleanSerializer_getInstance;
  _.$_$.i = IntSerializer_getInstance;
  _.$_$.j = LongSerializer_getInstance;
  _.$_$.k = StringSerializer_getInstance;
  _.$_$.l = SerializationException_init_$Init$_0;
  _.$_$.m = SerializationException_init_$Create$_0;
  _.$_$.n = UnknownFieldException_init_$Create$;
  _.$_$.o = ListSerializer;
  _.$_$.p = MapSerializer;
  _.$_$.q = get_nullable;
  _.$_$.r = serializer_0;
  _.$_$.s = serializer_4;
  _.$_$.t = serializer_2;
  _.$_$.u = serializer_3;
  _.$_$.v = serializer_1;
  _.$_$.w = PolymorphicKind;
  _.$_$.x = PrimitiveKind;
  _.$_$.y = PrimitiveSerialDescriptor;
  _.$_$.z = get_annotations;
  _.$_$.a1 = get_isInline;
  _.$_$.b1 = get_isNullable;
  _.$_$.c1 = SerialDescriptor;
  _.$_$.d1 = ENUM;
  _.$_$.e1 = buildClassSerialDescriptor;
  _.$_$.f1 = buildSerialDescriptor;
  _.$_$.g1 = getContextualDescriptor;
  _.$_$.h1 = AbstractDecoder;
  _.$_$.i1 = CompositeDecoder;
  _.$_$.j1 = Decoder;
  _.$_$.k1 = AbstractPolymorphicSerializer;
  _.$_$.l1 = ElementMarker;
  _.$_$.m1 = typeParametersSerializers;
  _.$_$.n1 = GeneratedSerializer;
  _.$_$.o1 = InlinePrimitiveDescriptor;
  _.$_$.p1 = NamedValueDecoder;
  _.$_$.q1 = PluginGeneratedSerialDescriptor;
  _.$_$.r1 = ReferenceArraySerializer;
  _.$_$.s1 = SerializerFactory;
  _.$_$.t1 = createSimpleEnumSerializer;
  _.$_$.u1 = jsonCachedSerialNames;
  _.$_$.v1 = missingFieldExceptionWithNewMessage;
  _.$_$.w1 = throwArrayMissingFieldException;
  _.$_$.x1 = throwMissingFieldException;
  _.$_$.y1 = EmptySerializersModule_0;
  _.$_$.z1 = SerializersModuleBuilder;
  _.$_$.a2 = contextual;
  _.$_$.b2 = SerializersModuleCollector;
  _.$_$.c2 = DeserializationStrategy;
  _.$_$.d2 = KSerializer;
  _.$_$.e2 = MissingFieldException;
  _.$_$.f2 = SerializableWith;
  _.$_$.g2 = SerializationException;
  _.$_$.h2 = findPolymorphicSerializer;
  _.$_$.i2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
