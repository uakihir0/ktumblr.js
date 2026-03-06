(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-coroutines-core.js', './khttpclient.js', './kmpcommon.js', './ktor-ktor-http.js', './kotlinx-serialization-kotlinx-serialization-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-coroutines-core.js'), require('./khttpclient.js'), require('./kmpcommon.js'), require('./ktor-ktor-http.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktumblr-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktumblr-core'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'ktumblr-core'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'ktumblr-core'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktumblr-core'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktumblr-core'.");
    }
    if (typeof khttpclient === 'undefined') {
      throw new Error("Error loading module 'ktumblr-core'. Its dependency 'khttpclient' was not found. Please, check whether 'khttpclient' is loaded prior to 'ktumblr-core'.");
    }
    if (typeof kmpcommon === 'undefined') {
      throw new Error("Error loading module 'ktumblr-core'. Its dependency 'kmpcommon' was not found. Please, check whether 'kmpcommon' is loaded prior to 'ktumblr-core'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktumblr-core'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktumblr-core'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'ktumblr-core'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'ktumblr-core'.");
    }
    globalThis['ktumblr-core'] = factory(typeof globalThis['ktumblr-core'] === 'undefined' ? {} : globalThis['ktumblr-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-coroutines-core'], khttpclient, kmpcommon, globalThis['ktor-ktor-http'], globalThis['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_work_socialhub_khttpclient, kotlin_work_socialhub_kmpcommon, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.sd;
  var initMetadataForInterface = kotlin_kotlin.$_$.vc;
  var VOID = kotlin_kotlin.$_$.c;
  var toString = kotlin_kotlin.$_$.vd;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var initMetadataForClass = kotlin_kotlin.$_$.rc;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.i2;
  var objectCreate = kotlin_kotlin.$_$.rd;
  var captureStack = kotlin_kotlin.$_$.cc;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.g2;
  var RuntimeException = kotlin_kotlin.$_$.ri;
  var initMetadataForObject = kotlin_kotlin.$_$.xc;
  var defineProp = kotlin_kotlin.$_$.kc;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.u;
  var to = kotlin_kotlin.$_$.wj;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.sc;
  var THROW_CCE = kotlin_kotlin.$_$.si;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var makeAssociatedObjectMapES5 = kotlin_kotlin.$_$.b;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o2;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var toString_0 = kotlin_kotlin.$_$.vj;
  var hashCode = kotlin_kotlin.$_$.qc;
  var getStringHashCode = kotlin_kotlin.$_$.pc;
  var equals = kotlin_kotlin.$_$.lc;
  var getKClass = kotlin_kotlin.$_$.le;
  var ReferenceArraySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.h;
  var lazy = kotlin_kotlin.$_$.pj;
  var THROW_IAE = kotlin_kotlin.$_$.ti;
  var enumEntries = kotlin_kotlin.$_$.xa;
  var Enum = kotlin_kotlin.$_$.ii;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.e5;
  var throwArrayMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var Exception = kotlin_kotlin.$_$.ki;
  var contains = kotlin_kotlin.$_$.if;
  var CoroutineImpl = kotlin_kotlin.$_$.qa;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var isInterface = kotlin_kotlin.$_$.gd;
  var HttpRequest = kotlin_work_socialhub_khttpclient.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.z9;
  var initMetadataForLambda = kotlin_kotlin.$_$.wc;
  var runBlocking = kotlin_work_socialhub_kmpcommon.$_$.b;
  var emptyMap = kotlin_kotlin.$_$.v7;
  var SuspendFunction1 = kotlin_kotlin.$_$.sa;
  var arrayOf = kotlin_kotlin.$_$.gj;
  var createKType = kotlin_kotlin.$_$.je;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.o1;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.p;
  var set_encodedPath = kotlin_io_ktor_ktor_http.$_$.a2;
  var ensureNotNull = kotlin_kotlin.$_$.kj;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.he;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var SerializersModuleBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var AnySerializer_getInstance = kotlin_work_socialhub_kmpcommon.$_$.a;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.f;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.d;
  var JsonContentPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var get_jsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.o;
  var JsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.e;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(Tumblr, 'Tumblr');
  initMetadataForClass(TumblrAuth, 'TumblrAuth');
  initMetadataForClass(TumblrException, 'TumblrException', VOID, RuntimeException);
  initMetadataForObject(TumblrFactory, 'TumblrFactory');
  initMetadataForClass(TumblrImpl, 'TumblrImpl', VOID, VOID, [Tumblr]);
  initMetadataForInterface(AuthResource, 'AuthResource');
  initMetadataForInterface(BlogResource, 'BlogResource');
  initMetadataForInterface(TaggedResource, 'TaggedResource');
  initMetadataForInterface(UserResource, 'UserResource');
  initMetadataForClass(FileRequest, 'FileRequest');
  function addParam(_this__u8e3s4, key, value) {
    if (value == null)
      return Unit_getInstance();
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.put_4fpzoq_k$(key, value);
  }
  initMetadataForInterface(MapRequest, 'MapRequest');
  initMetadataForClass(AuthAuthorizeUrlRequest, 'AuthAuthorizeUrlRequest', AuthAuthorizeUrlRequest, VOID, [MapRequest]);
  initMetadataForClass(AuthOAuth2TokenRefreshRequest, 'AuthOAuth2TokenRefreshRequest', AuthOAuth2TokenRefreshRequest, VOID, [MapRequest]);
  initMetadataForClass(AuthOAuth2TokenRequest, 'AuthOAuth2TokenRequest', AuthOAuth2TokenRequest, VOID, [MapRequest]);
  initMetadataForClass(BlogAvatarRequest, 'BlogAvatarRequest', BlogAvatarRequest);
  initMetadataForClass(BlogDraftsRequest, 'BlogDraftsRequest', BlogDraftsRequest, VOID, [MapRequest]);
  initMetadataForClass(BlogFollowersRequest, 'BlogFollowersRequest', BlogFollowersRequest, VOID, [MapRequest]);
  initMetadataForClass(BlogFollowingRequest, 'BlogFollowingRequest', BlogFollowingRequest, VOID, [MapRequest]);
  initMetadataForClass(BlogInfoRequest, 'BlogInfoRequest', BlogInfoRequest);
  initMetadataForClass(BlogLikesRequest, 'BlogLikesRequest', BlogLikesRequest, VOID, [MapRequest]);
  initMetadataForClass(BlogPostsRequest, 'BlogPostsRequest', BlogPostsRequest, VOID, [MapRequest]);
  initMetadataForClass(BlogQueueRequest, 'BlogQueueRequest', BlogQueueRequest, VOID, [MapRequest]);
  initMetadataForClass(BlogSubmissionsRequest, 'BlogSubmissionsRequest', BlogSubmissionsRequest, VOID, [MapRequest]);
  initMetadataForClass(BlogPostRequest, 'BlogPostRequest', BlogPostRequest);
  initMetadataForClass(BlogAudioPostRequest, 'BlogAudioPostRequest', BlogAudioPostRequest, BlogPostRequest, [MapRequest, BlogPostRequest]);
  initMetadataForClass(BlogChatPostRequest, 'BlogChatPostRequest', BlogChatPostRequest, BlogPostRequest, [MapRequest, BlogPostRequest]);
  initMetadataForClass(BlogDeleteRequest, 'BlogDeleteRequest', BlogDeleteRequest, VOID, [MapRequest]);
  initMetadataForClass(BlogLinkPostRequest, 'BlogLinkPostRequest', BlogLinkPostRequest, BlogPostRequest, [MapRequest, BlogPostRequest]);
  initMetadataForClass(BlogPhotoPostRequest, 'BlogPhotoPostRequest', BlogPhotoPostRequest, BlogPostRequest, [MapRequest, BlogPostRequest]);
  initMetadataForClass(BlogQuotePostRequest, 'BlogQuotePostRequest', BlogQuotePostRequest, BlogPostRequest, [MapRequest, BlogPostRequest]);
  initMetadataForClass(BlogReblogRequest, 'BlogReblogRequest', BlogReblogRequest, VOID, [MapRequest]);
  initMetadataForClass(BlogTextPostRequest, 'BlogTextPostRequest', BlogTextPostRequest, BlogPostRequest, [MapRequest, BlogPostRequest]);
  initMetadataForClass(BlogVideoPostRequest, 'BlogVideoPostRequest', BlogVideoPostRequest, BlogPostRequest, [MapRequest, BlogPostRequest]);
  initMetadataForClass(TaggedRequest, 'TaggedRequest', TaggedRequest, VOID, [MapRequest]);
  initMetadataForClass(UserDashboardRequest, 'UserDashboardRequest', UserDashboardRequest, VOID, [MapRequest]);
  initMetadataForClass(UserFollowRequest, 'UserFollowRequest', UserFollowRequest, VOID, [MapRequest]);
  initMetadataForClass(UserFollowingRequest, 'UserFollowingRequest', UserFollowingRequest, VOID, [MapRequest]);
  initMetadataForClass(UserLikeRequest, 'UserLikeRequest', UserLikeRequest, VOID, [MapRequest]);
  initMetadataForClass(UserLikesRequest, 'UserLikesRequest', UserLikesRequest, VOID, [MapRequest]);
  initMetadataForClass(UserUnfollowRequest, 'UserUnfollowRequest', UserUnfollowRequest, VOID, [MapRequest]);
  initMetadataForClass(UserUnlikeRequest, 'UserUnlikeRequest', UserUnlikeRequest, VOID, [MapRequest]);
  initMetadataForCompanion(Companion, VOID, [SerializerFactory]);
  initMetadataForClass($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Body, 'Body', Body, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, Companion_getInstance_0]));
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Meta, 'Meta', Meta, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance]));
  initMetadataForClass(Response, 'Response');
  initMetadataForClass(ResponseUnit, 'ResponseUnit');
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(AuthOAuth2TokenResponse, 'AuthOAuth2TokenResponse', AuthOAuth2TokenResponse, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_0]));
  initMetadataForCompanion(Companion_2);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BlogFollowersResponse, 'BlogFollowersResponse', BlogFollowersResponse, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_1]));
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BlogFollowingResponse, 'BlogFollowingResponse', BlogFollowingResponse, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_2]));
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BlogInfoResponse, 'BlogInfoResponse', BlogInfoResponse, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_3]));
  initMetadataForCompanion(Companion_5);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BlogLikesResponse, 'BlogLikesResponse', BlogLikesResponse, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_4]));
  initMetadataForCompanion(Companion_6);
  initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BlogPostsResponse, 'BlogPostsResponse', BlogPostsResponse, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_5]));
  initMetadataForCompanion(Companion_7);
  initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(UserDashboardResponse, 'UserDashboardResponse', UserDashboardResponse, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_6]));
  initMetadataForCompanion(Companion_8);
  initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(UserFollowingResponse, 'UserFollowingResponse', UserFollowingResponse, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_7]));
  initMetadataForCompanion(Companion_9);
  initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(UserLikesResponse, 'UserLikesResponse', UserLikesResponse, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_8]));
  initMetadataForCompanion(Companion_10);
  initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(UserResponse, 'UserResponse', UserResponse, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_9]));
  initMetadataForClass(PhotoType, 'PhotoType', VOID, Enum);
  initMetadataForClass(PostType, 'PostType', VOID, Enum);
  initMetadataForCompanion(Companion_11);
  initMetadataForObject($serializer_11, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Note, 'Note', Note, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_10]));
  initMetadataForCompanion(Companion_12);
  initMetadataForObject($serializer_12, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(NoteAvatar, 'NoteAvatar', NoteAvatar, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_11]));
  initMetadataForClass(Resource, 'Resource', Resource);
  initMetadataForCompanion(Companion_13);
  initMetadataForObject($serializer_13, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Blog, 'Blog', Blog, Resource, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_12]));
  initMetadataForCompanion(Companion_14);
  initMetadataForObject($serializer_14, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BlogAvatar, 'BlogAvatar', BlogAvatar, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_13]));
  initMetadataForCompanion(Companion_15);
  initMetadataForObject($serializer_15, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BlogTheme, 'BlogTheme', BlogTheme, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_14]));
  initMetadataForCompanion(Companion_16);
  initMetadataForObject($serializer_16, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Reblog, 'Reblog', Reblog, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_15]));
  initMetadataForCompanion(Companion_17);
  initMetadataForClass(Post, 'Post', VOID, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, PostSerializer_getInstance]));
  initMetadataForCompanion(Companion_18);
  initMetadataForObject($serializer_17, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(LegacyAnswerPost, 'LegacyAnswerPost', VOID, Post, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_16]));
  initMetadataForCompanion(Companion_19);
  initMetadataForObject($serializer_18, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(LegacyAudioPost, 'LegacyAudioPost', VOID, Post, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_17]));
  initMetadataForCompanion(Companion_20);
  initMetadataForObject($serializer_19, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(LegacyChatPost, 'LegacyChatPost', VOID, Post, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_18]));
  initMetadataForCompanion(Companion_21);
  initMetadataForObject($serializer_20, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(LegacyLinkPost, 'LegacyLinkPost', VOID, Post, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_19]));
  initMetadataForCompanion(Companion_22);
  initMetadataForObject($serializer_21, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(LegacyPhotoPost, 'LegacyPhotoPost', VOID, Post, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_20]));
  initMetadataForCompanion(Companion_23);
  initMetadataForObject($serializer_22, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(LegacyQuotePost, 'LegacyQuotePost', VOID, Post, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_21]));
  initMetadataForCompanion(Companion_24);
  initMetadataForObject($serializer_23, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(LegacyTextPost, 'LegacyTextPost', VOID, Post, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_22]));
  initMetadataForCompanion(Companion_25);
  initMetadataForObject($serializer_24, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(LegacyVideoPost, 'LegacyVideoPost', VOID, Post, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_23]));
  initMetadataForCompanion(Companion_26);
  initMetadataForObject($serializer_25, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Dialogue, 'Dialogue', Dialogue, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_24]));
  initMetadataForCompanion(Companion_27);
  initMetadataForObject($serializer_26, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Photo, 'Photo', Photo, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_25]));
  initMetadataForCompanion(Companion_28);
  initMetadataForObject($serializer_27, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PhotoSize, 'PhotoSize', PhotoSize, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_26]));
  initMetadataForCompanion(Companion_29);
  initMetadataForObject($serializer_28, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Video, 'Video', Video, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_27]));
  initMetadataForCompanion(Companion_30);
  initMetadataForObject($serializer_29, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BlogInTrail, 'BlogInTrail', BlogInTrail, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_28]));
  initMetadataForCompanion(Companion_31);
  initMetadataForObject($serializer_30, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(IdInTrail, 'IdInTrail', IdInTrail, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_29]));
  initMetadataForCompanion(Companion_32);
  initMetadataForObject($serializer_31, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Trail, 'Trail', Trail, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_30]));
  initMetadataForCompanion(Companion_33);
  initMetadataForObject($serializer_32, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(FollowerUser, 'FollowerUser', FollowerUser, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_31]));
  initMetadataForCompanion(Companion_34);
  initMetadataForObject($serializer_33, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(User, 'User', User, Resource, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_32]));
  initMetadataForLambda(AbstractResourceImpl$oauthPostUnit$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(AbstractResourceImpl, 'AbstractResourceImpl');
  initMetadataForLambda(AuthResourceImpl$oAuth2Token$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(AuthResourceImpl$oAuth2TokenRefresh$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(AuthResourceImpl, 'AuthResourceImpl', VOID, AbstractResourceImpl, [AuthResource, AbstractResourceImpl]);
  initMetadataForLambda(BlogResourceImpl$blogInfo$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(BlogResourceImpl$blogAvatar$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(BlogResourceImpl$blogLikes$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(BlogResourceImpl$blogFollowing$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(BlogResourceImpl$blogFollowers$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(BlogResourceImpl$blogPosts$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(BlogResourceImpl$blogQueuedPosts$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(BlogResourceImpl$blogDraftPosts$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(BlogResourceImpl$blogSubmissions$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(BlogResourceImpl, 'BlogResourceImpl', VOID, AbstractResourceImpl, [BlogResource, AbstractResourceImpl]);
  initMetadataForLambda(TaggedResourceImpl$tagged$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(TaggedResourceImpl, 'TaggedResourceImpl', VOID, AbstractResourceImpl, [TaggedResource, AbstractResourceImpl]);
  initMetadataForLambda(UserResourceImpl$user$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(UserResourceImpl$userDashboard$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(UserResourceImpl$userFollowing$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(UserResourceImpl$userLikes$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(UserResourceImpl, 'UserResourceImpl', VOID, AbstractResourceImpl, [UserResource, AbstractResourceImpl]);
  initMetadataForObject(Json_0, 'Json');
  initMetadataForObject(MediaType, 'MediaType');
  initMetadataForObject(PostSerializer, 'PostSerializer', VOID, JsonContentPolymorphicSerializer);
  //endregion
  function Tumblr() {
  }
  function TumblrAuth(clientId, clientSecret, accessToken, refreshToken) {
    clientSecret = clientSecret === VOID ? null : clientSecret;
    accessToken = accessToken === VOID ? null : accessToken;
    refreshToken = refreshToken === VOID ? null : refreshToken;
    this.clientId_1 = clientId;
    this.clientSecret_1 = clientSecret;
    this.accessToken_1 = accessToken;
    this.refreshToken_1 = refreshToken;
  }
  protoOf(TumblrAuth).set_clientId_8cje4n_k$ = function (_set____db54di) {
    this.clientId_1 = _set____db54di;
  };
  protoOf(TumblrAuth).get_clientId_gs3e9d_k$ = function () {
    return this.clientId_1;
  };
  protoOf(TumblrAuth).set_clientSecret_n5vosf_k$ = function (_set____db54di) {
    this.clientSecret_1 = _set____db54di;
  };
  protoOf(TumblrAuth).get_clientSecret_jdvzoc_k$ = function () {
    return this.clientSecret_1;
  };
  protoOf(TumblrAuth).set_accessToken_b43hrz_k$ = function (_set____db54di) {
    this.accessToken_1 = _set____db54di;
  };
  protoOf(TumblrAuth).get_accessToken_3cl7ck_k$ = function () {
    return this.accessToken_1;
  };
  protoOf(TumblrAuth).set_refreshToken_s6sjzw_k$ = function (_set____db54di) {
    this.refreshToken_1 = _set____db54di;
  };
  protoOf(TumblrAuth).get_refreshToken_3lx63r_k$ = function () {
    return this.refreshToken_1;
  };
  protoOf(TumblrAuth).oAuthBearerToken_6vru3j_k$ = function () {
    // Inline function 'kotlin.checkNotNull' call
    var tmp0 = this.accessToken_1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'Required value was null.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    return 'Bearer ' + this.accessToken_1;
  };
  function TumblrException_init_$Init$(m, $this) {
    RuntimeException_init_$Init$(m, $this);
    TumblrException.call($this);
    return $this;
  }
  function TumblrException_init_$Create$(m) {
    var tmp = TumblrException_init_$Init$(m, objectCreate(protoOf(TumblrException)));
    captureStack(tmp, TumblrException_init_$Create$);
    return tmp;
  }
  function TumblrException_init_$Init$_0(e, $this) {
    RuntimeException_init_$Init$_0(e, $this);
    TumblrException.call($this);
    return $this;
  }
  function TumblrException_init_$Create$_0(e) {
    var tmp = TumblrException_init_$Init$_0(e, objectCreate(protoOf(TumblrException)));
    captureStack(tmp, TumblrException_init_$Create$_0);
    return tmp;
  }
  function TumblrException_init_$Init$_1(status, body, $this) {
    RuntimeException_init_$Init$('status code: ' + status + ', body: ' + body, $this);
    TumblrException.call($this);
    $this.status_1 = status;
    $this.body_1 = body;
    return $this;
  }
  function TumblrException_init_$Create$_1(status, body) {
    var tmp = TumblrException_init_$Init$_1(status, body, objectCreate(protoOf(TumblrException)));
    captureStack(tmp, TumblrException_init_$Create$_1);
    return tmp;
  }
  protoOf(TumblrException).set_status_haytw_k$ = function (_set____db54di) {
    this.status_1 = _set____db54di;
  };
  protoOf(TumblrException).get_status_jnf6d7_k$ = function () {
    return this.status_1;
  };
  protoOf(TumblrException).set_body_d8bq7s_k$ = function (_set____db54di) {
    this.body_1 = _set____db54di;
  };
  protoOf(TumblrException).get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  function TumblrException() {
    captureStack(this, TumblrException);
    this.status_1 = null;
    this.body_1 = null;
  }
  function TumblrFactory() {
    TumblrFactory_instance = this;
  }
  protoOf(TumblrFactory).instance_4edyo_k$ = function (clientId, clientSecret, accessToken, refreshToken) {
    return new TumblrImpl(new TumblrAuth(clientId, clientSecret, accessToken, refreshToken));
  };
  protoOf(TumblrFactory).instance = function (clientId, clientSecret, accessToken, refreshToken, $super) {
    clientId = clientId === VOID ? '' : clientId;
    clientSecret = clientSecret === VOID ? null : clientSecret;
    accessToken = accessToken === VOID ? null : accessToken;
    refreshToken = refreshToken === VOID ? null : refreshToken;
    return $super === VOID ? this.instance_4edyo_k$(clientId, clientSecret, accessToken, refreshToken) : $super.instance_4edyo_k$.call(this, clientId, clientSecret, accessToken, refreshToken);
  };
  var TumblrFactory_instance;
  function TumblrFactory_getInstance() {
    if (TumblrFactory_instance == null)
      new TumblrFactory();
    return TumblrFactory_instance;
  }
  function _get_tumblrAuth__nzhgux($this) {
    return $this.tumblrAuth_1;
  }
  function _get_auth__d3zq1v($this) {
    return $this.auth_2;
  }
  function _get_user__dey128($this) {
    return $this.user_2;
  }
  function _get_blog__d4do15($this) {
    return $this.blog_2;
  }
  function _get_tagged__c6qd5r($this) {
    return $this.tagged_2;
  }
  function TumblrImpl(tumblrAuth) {
    this.tumblrAuth_1 = tumblrAuth;
    this.auth_2 = new AuthResourceImpl(this.tumblrAuth_1);
    this.user_2 = new UserResourceImpl(this.tumblrAuth_1);
    this.blog_2 = new BlogResourceImpl(this.tumblrAuth_1);
    this.tagged_2 = new TaggedResourceImpl(this.tumblrAuth_1);
  }
  protoOf(TumblrImpl).auth = function () {
    return this.auth_2;
  };
  protoOf(TumblrImpl).user = function () {
    return this.user_2;
  };
  protoOf(TumblrImpl).blog = function () {
    return this.blog_2;
  };
  protoOf(TumblrImpl).tagged = function () {
    return this.tagged_2;
  };
  function AuthResource() {
  }
  function BlogResource() {
  }
  function TaggedResource() {
  }
  function UserResource() {
  }
  function FileRequest(name, data) {
    this.name = name;
    this.data = data;
  }
  protoOf(FileRequest).get_name_woqyms_k$ = function () {
    return this.name;
  };
  protoOf(FileRequest).get_data_wokkxf_k$ = function () {
    return this.data;
  };
  function MapRequest() {
  }
  function addParam_0(_this__u8e3s4, key, value) {
    if (value == null)
      return Unit_getInstance();
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.put_4fpzoq_k$(key, value);
  }
  function AuthAuthorizeUrlRequest() {
    this.responseType = 'code';
    this.redirectUri = null;
    this.state = null;
    this.scope = 'write offline_access';
  }
  protoOf(AuthAuthorizeUrlRequest).set_responseType_swmxbi_k$ = function (_set____db54di) {
    this.responseType = _set____db54di;
  };
  protoOf(AuthAuthorizeUrlRequest).get_responseType_scg7dw_k$ = function () {
    return this.responseType;
  };
  protoOf(AuthAuthorizeUrlRequest).set_redirectUri_f1tsxo_k$ = function (_set____db54di) {
    this.redirectUri = _set____db54di;
  };
  protoOf(AuthAuthorizeUrlRequest).get_redirectUri_ojtmrd_k$ = function () {
    return this.redirectUri;
  };
  protoOf(AuthAuthorizeUrlRequest).set_state_836lgd_k$ = function (_set____db54di) {
    this.state = _set____db54di;
  };
  protoOf(AuthAuthorizeUrlRequest).get_state_iypx7s_k$ = function () {
    return this.state;
  };
  protoOf(AuthAuthorizeUrlRequest).set_scope_m0gpgt_k$ = function (_set____db54di) {
    this.scope = _set____db54di;
  };
  protoOf(AuthAuthorizeUrlRequest).get_scope_iyfcq3_k$ = function () {
    return this.scope;
  };
  protoOf(AuthAuthorizeUrlRequest).toMap_1tsnvl_k$ = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.addParam_z3s3jk_k$(this_0, 'response_type', this.responseType);
    this.addParam_z3s3jk_k$(this_0, 'redirect_uri', this.redirectUri);
    this.addParam_z3s3jk_k$(this_0, 'state', this.state);
    this.addParam_z3s3jk_k$(this_0, 'scope', this.scope);
    return this_0;
  };
  function AuthOAuth2TokenRefreshRequest() {
    this.grantType = 'refresh_token';
    this.clientId = null;
    this.clientSecret = null;
    this.refreshToken = null;
  }
  protoOf(AuthOAuth2TokenRefreshRequest).set_grantType_289gs1_k$ = function (_set____db54di) {
    this.grantType = _set____db54di;
  };
  protoOf(AuthOAuth2TokenRefreshRequest).get_grantType_bnqfcj_k$ = function () {
    return this.grantType;
  };
  protoOf(AuthOAuth2TokenRefreshRequest).set_clientId_eyctas_k$ = function (_set____db54di) {
    this.clientId = _set____db54di;
  };
  protoOf(AuthOAuth2TokenRefreshRequest).get_clientId_gs3e9d_k$ = function () {
    return this.clientId;
  };
  protoOf(AuthOAuth2TokenRefreshRequest).set_clientSecret_n5vosf_k$ = function (_set____db54di) {
    this.clientSecret = _set____db54di;
  };
  protoOf(AuthOAuth2TokenRefreshRequest).get_clientSecret_jdvzoc_k$ = function () {
    return this.clientSecret;
  };
  protoOf(AuthOAuth2TokenRefreshRequest).set_refreshToken_s6sjzw_k$ = function (_set____db54di) {
    this.refreshToken = _set____db54di;
  };
  protoOf(AuthOAuth2TokenRefreshRequest).get_refreshToken_3lx63r_k$ = function () {
    return this.refreshToken;
  };
  protoOf(AuthOAuth2TokenRefreshRequest).toMap_1tsnvl_k$ = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.addParam_z3s3jk_k$(this_0, 'grant_type', this.grantType);
    this.addParam_z3s3jk_k$(this_0, 'client_id', this.clientId);
    this.addParam_z3s3jk_k$(this_0, 'client_secret', this.clientSecret);
    this.addParam_z3s3jk_k$(this_0, 'refresh_token', this.refreshToken);
    return this_0;
  };
  function AuthOAuth2TokenRequest() {
    this.grantType = 'authorization_code';
    this.code = null;
    this.clientId = null;
    this.clientSecret = null;
    this.redirectUri = null;
  }
  protoOf(AuthOAuth2TokenRequest).set_grantType_289gs1_k$ = function (_set____db54di) {
    this.grantType = _set____db54di;
  };
  protoOf(AuthOAuth2TokenRequest).get_grantType_bnqfcj_k$ = function () {
    return this.grantType;
  };
  protoOf(AuthOAuth2TokenRequest).set_code_c5iqp9_k$ = function (_set____db54di) {
    this.code = _set____db54di;
  };
  protoOf(AuthOAuth2TokenRequest).get_code_wok7xy_k$ = function () {
    return this.code;
  };
  protoOf(AuthOAuth2TokenRequest).set_clientId_eyctas_k$ = function (_set____db54di) {
    this.clientId = _set____db54di;
  };
  protoOf(AuthOAuth2TokenRequest).get_clientId_gs3e9d_k$ = function () {
    return this.clientId;
  };
  protoOf(AuthOAuth2TokenRequest).set_clientSecret_n5vosf_k$ = function (_set____db54di) {
    this.clientSecret = _set____db54di;
  };
  protoOf(AuthOAuth2TokenRequest).get_clientSecret_jdvzoc_k$ = function () {
    return this.clientSecret;
  };
  protoOf(AuthOAuth2TokenRequest).set_redirectUri_f1tsxo_k$ = function (_set____db54di) {
    this.redirectUri = _set____db54di;
  };
  protoOf(AuthOAuth2TokenRequest).get_redirectUri_ojtmrd_k$ = function () {
    return this.redirectUri;
  };
  protoOf(AuthOAuth2TokenRequest).toMap_1tsnvl_k$ = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.addParam_z3s3jk_k$(this_0, 'grant_type', this.grantType);
    this.addParam_z3s3jk_k$(this_0, 'code', this.code);
    this.addParam_z3s3jk_k$(this_0, 'client_id', this.clientId);
    this.addParam_z3s3jk_k$(this_0, 'client_secret', this.clientSecret);
    this.addParam_z3s3jk_k$(this_0, 'redirect_uri', this.redirectUri);
    return this_0;
  };
  function BlogAvatarRequest() {
    this.blogName = null;
    this.size = 0;
  }
  protoOf(BlogAvatarRequest).set_blogName_4hbv7x_k$ = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogAvatarRequest).get_blogName_sa6pee_k$ = function () {
    return this.blogName;
  };
  protoOf(BlogAvatarRequest).set_size_a07e8t_k$ = function (_set____db54di) {
    this.size = _set____db54di;
  };
  protoOf(BlogAvatarRequest).get_size_woubt6_k$ = function () {
    return this.size;
  };
  function BlogDraftsRequest() {
    this.blogName = null;
    this.beforeId = null;
    this.filter = null;
  }
  protoOf(BlogDraftsRequest).set_blogName_4hbv7x_k$ = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogDraftsRequest).get_blogName_sa6pee_k$ = function () {
    return this.blogName;
  };
  protoOf(BlogDraftsRequest).set_beforeId_fs42n8_k$ = function (_set____db54di) {
    this.beforeId = _set____db54di;
  };
  protoOf(BlogDraftsRequest).get_beforeId_7jufct_k$ = function () {
    return this.beforeId;
  };
  protoOf(BlogDraftsRequest).set_filter_rpyfxa_k$ = function (_set____db54di) {
    this.filter = _set____db54di;
  };
  protoOf(BlogDraftsRequest).get_filter_dbzd6p_k$ = function () {
    return this.filter;
  };
  protoOf(BlogDraftsRequest).toMap_1tsnvl_k$ = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.addParam_z3s3jk_k$(this_0, 'before_id', this.beforeId);
    this.addParam_z3s3jk_k$(this_0, 'filter', this.filter);
    return this_0;
  };
  function BlogFollowersRequest() {
    this.blogName = null;
    this.limit = null;
    this.offset = null;
  }
  protoOf(BlogFollowersRequest).set_blogName_4hbv7x_k$ = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogFollowersRequest).get_blogName_sa6pee_k$ = function () {
    return this.blogName;
  };
  protoOf(BlogFollowersRequest).set_limit_76wbgj_k$ = function (_set____db54di) {
    this.limit = _set____db54di;
  };
  protoOf(BlogFollowersRequest).get_limit_iuokuq_k$ = function () {
    return this.limit;
  };
  protoOf(BlogFollowersRequest).set_offset_f7lyff_k$ = function (_set____db54di) {
    this.offset = _set____db54di;
  };
  protoOf(BlogFollowersRequest).get_offset_hjmqak_k$ = function () {
    return this.offset;
  };
  protoOf(BlogFollowersRequest).toMap_1tsnvl_k$ = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.addParam_z3s3jk_k$(this_0, 'limit', this.limit);
    this.addParam_z3s3jk_k$(this_0, 'offset', this.offset);
    return this_0;
  };
  function BlogFollowingRequest() {
    this.blogName = null;
    this.limit = null;
    this.offset = null;
  }
  protoOf(BlogFollowingRequest).set_blogName_4hbv7x_k$ = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogFollowingRequest).get_blogName_sa6pee_k$ = function () {
    return this.blogName;
  };
  protoOf(BlogFollowingRequest).set_limit_76wbgj_k$ = function (_set____db54di) {
    this.limit = _set____db54di;
  };
  protoOf(BlogFollowingRequest).get_limit_iuokuq_k$ = function () {
    return this.limit;
  };
  protoOf(BlogFollowingRequest).set_offset_f7lyff_k$ = function (_set____db54di) {
    this.offset = _set____db54di;
  };
  protoOf(BlogFollowingRequest).get_offset_hjmqak_k$ = function () {
    return this.offset;
  };
  protoOf(BlogFollowingRequest).toMap_1tsnvl_k$ = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.addParam_z3s3jk_k$(this_0, 'limit', this.limit);
    this.addParam_z3s3jk_k$(this_0, 'offset', this.offset);
    return this_0;
  };
  function BlogInfoRequest() {
    this.blogName = null;
  }
  protoOf(BlogInfoRequest).set_blogName_4hbv7x_k$ = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogInfoRequest).get_blogName_sa6pee_k$ = function () {
    return this.blogName;
  };
  function BlogLikesRequest() {
    this.blogName = null;
    this.limit = null;
    this.offset = null;
    this.before = null;
    this.after = null;
  }
  protoOf(BlogLikesRequest).set_blogName_4hbv7x_k$ = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogLikesRequest).get_blogName_sa6pee_k$ = function () {
    return this.blogName;
  };
  protoOf(BlogLikesRequest).set_limit_76wbgj_k$ = function (_set____db54di) {
    this.limit = _set____db54di;
  };
  protoOf(BlogLikesRequest).get_limit_iuokuq_k$ = function () {
    return this.limit;
  };
  protoOf(BlogLikesRequest).set_offset_f7lyff_k$ = function (_set____db54di) {
    this.offset = _set____db54di;
  };
  protoOf(BlogLikesRequest).get_offset_hjmqak_k$ = function () {
    return this.offset;
  };
  protoOf(BlogLikesRequest).set_before_rd3s69_k$ = function (_set____db54di) {
    this.before = _set____db54di;
  };
  protoOf(BlogLikesRequest).get_before_bdhrwo_k$ = function () {
    return this.before;
  };
  protoOf(BlogLikesRequest).set_after_iogau4_k$ = function (_set____db54di) {
    this.after = _set____db54di;
  };
  protoOf(BlogLikesRequest).get_after_iol2gj_k$ = function () {
    return this.after;
  };
  protoOf(BlogLikesRequest).toMap_1tsnvl_k$ = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.addParam_z3s3jk_k$(this_0, 'limit', this.limit);
    this.addParam_z3s3jk_k$(this_0, 'offset', this.offset);
    this.addParam_z3s3jk_k$(this_0, 'before', this.before);
    this.addParam_z3s3jk_k$(this_0, 'after', this.after);
    return this_0;
  };
  function BlogPostsRequest() {
    this.blogName = null;
    this.type = null;
    this.id = null;
    this.tag = null;
    this.limit = null;
    this.offset = null;
    this.reblogInfo = null;
    this.notesInfo = null;
    this.filter = null;
    this.before = null;
    this.npf = null;
  }
  protoOf(BlogPostsRequest).set_blogName_4hbv7x_k$ = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogPostsRequest).get_blogName_sa6pee_k$ = function () {
    return this.blogName;
  };
  protoOf(BlogPostsRequest).set_type_4507og_k$ = function (_set____db54di) {
    this.type = _set____db54di;
  };
  protoOf(BlogPostsRequest).get_type_wovaf7_k$ = function () {
    return this.type;
  };
  protoOf(BlogPostsRequest).set_id_31g2gz_k$ = function (_set____db54di) {
    this.id = _set____db54di;
  };
  protoOf(BlogPostsRequest).get_id_kntnx8_k$ = function () {
    return this.id;
  };
  protoOf(BlogPostsRequest).set_tag_94mgrq_k$ = function (_set____db54di) {
    this.tag = _set____db54di;
  };
  protoOf(BlogPostsRequest).get_tag_18ivnz_k$ = function () {
    return this.tag;
  };
  protoOf(BlogPostsRequest).set_limit_76wbgj_k$ = function (_set____db54di) {
    this.limit = _set____db54di;
  };
  protoOf(BlogPostsRequest).get_limit_iuokuq_k$ = function () {
    return this.limit;
  };
  protoOf(BlogPostsRequest).set_offset_f7lyff_k$ = function (_set____db54di) {
    this.offset = _set____db54di;
  };
  protoOf(BlogPostsRequest).get_offset_hjmqak_k$ = function () {
    return this.offset;
  };
  protoOf(BlogPostsRequest).set_reblogInfo_6lzneo_k$ = function (_set____db54di) {
    this.reblogInfo = _set____db54di;
  };
  protoOf(BlogPostsRequest).get_reblogInfo_b83d1w_k$ = function () {
    return this.reblogInfo;
  };
  protoOf(BlogPostsRequest).set_notesInfo_g933ma_k$ = function (_set____db54di) {
    this.notesInfo = _set____db54di;
  };
  protoOf(BlogPostsRequest).get_notesInfo_ws097e_k$ = function () {
    return this.notesInfo;
  };
  protoOf(BlogPostsRequest).set_filter_rpyfxa_k$ = function (_set____db54di) {
    this.filter = _set____db54di;
  };
  protoOf(BlogPostsRequest).get_filter_dbzd6p_k$ = function () {
    return this.filter;
  };
  protoOf(BlogPostsRequest).set_before_rd3s69_k$ = function (_set____db54di) {
    this.before = _set____db54di;
  };
  protoOf(BlogPostsRequest).get_before_bdhrwo_k$ = function () {
    return this.before;
  };
  protoOf(BlogPostsRequest).set_npf_2bwye1_k$ = function (_set____db54di) {
    this.npf = _set____db54di;
  };
  protoOf(BlogPostsRequest).get_npf_18izr9_k$ = function () {
    return this.npf;
  };
  protoOf(BlogPostsRequest).toMap_1tsnvl_k$ = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.addParam_z3s3jk_k$(this_0, 'id', this.id);
    this.addParam_z3s3jk_k$(this_0, 'tag', this.tag);
    this.addParam_z3s3jk_k$(this_0, 'limit', this.limit);
    this.addParam_z3s3jk_k$(this_0, 'offset', this.offset);
    this.addParam_z3s3jk_k$(this_0, 'reblog_info', this.reblogInfo);
    this.addParam_z3s3jk_k$(this_0, 'notes_info', this.notesInfo);
    this.addParam_z3s3jk_k$(this_0, 'filter', this.filter);
    this.addParam_z3s3jk_k$(this_0, 'before', this.before);
    this.addParam_z3s3jk_k$(this_0, 'npf', this.npf);
    return this_0;
  };
  function BlogQueueRequest() {
    this.blogName = null;
    this.limit = null;
    this.offset = null;
    this.filter = null;
  }
  protoOf(BlogQueueRequest).set_blogName_4hbv7x_k$ = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogQueueRequest).get_blogName_sa6pee_k$ = function () {
    return this.blogName;
  };
  protoOf(BlogQueueRequest).set_limit_76wbgj_k$ = function (_set____db54di) {
    this.limit = _set____db54di;
  };
  protoOf(BlogQueueRequest).get_limit_iuokuq_k$ = function () {
    return this.limit;
  };
  protoOf(BlogQueueRequest).set_offset_f7lyff_k$ = function (_set____db54di) {
    this.offset = _set____db54di;
  };
  protoOf(BlogQueueRequest).get_offset_hjmqak_k$ = function () {
    return this.offset;
  };
  protoOf(BlogQueueRequest).set_filter_rpyfxa_k$ = function (_set____db54di) {
    this.filter = _set____db54di;
  };
  protoOf(BlogQueueRequest).get_filter_dbzd6p_k$ = function () {
    return this.filter;
  };
  protoOf(BlogQueueRequest).toMap_1tsnvl_k$ = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.addParam_z3s3jk_k$(this_0, 'limit', this.limit);
    this.addParam_z3s3jk_k$(this_0, 'offset', this.offset);
    this.addParam_z3s3jk_k$(this_0, 'filter', this.filter);
    return this_0;
  };
  function BlogSubmissionsRequest() {
    this.blogName = null;
    this.offset = null;
    this.filter = null;
  }
  protoOf(BlogSubmissionsRequest).set_blogName_4hbv7x_k$ = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogSubmissionsRequest).get_blogName_sa6pee_k$ = function () {
    return this.blogName;
  };
  protoOf(BlogSubmissionsRequest).set_offset_n5r4c9_k$ = function (_set____db54di) {
    this.offset = _set____db54di;
  };
  protoOf(BlogSubmissionsRequest).get_offset_hjmqak_k$ = function () {
    return this.offset;
  };
  protoOf(BlogSubmissionsRequest).set_filter_rpyfxa_k$ = function (_set____db54di) {
    this.filter = _set____db54di;
  };
  protoOf(BlogSubmissionsRequest).get_filter_dbzd6p_k$ = function () {
    return this.filter;
  };
  protoOf(BlogSubmissionsRequest).toMap_1tsnvl_k$ = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.addParam_z3s3jk_k$(this_0, 'offset', this.offset);
    this.addParam_z3s3jk_k$(this_0, 'filter', this.filter);
    return this_0;
  };
  function BlogAudioPostRequest() {
    BlogPostRequest.call(this);
    this.caption = null;
    this.externalUrl = null;
    this.data = null;
  }
  protoOf(BlogAudioPostRequest).set_caption_drz67m_k$ = function (_set____db54di) {
    this.caption = _set____db54di;
  };
  protoOf(BlogAudioPostRequest).get_caption_aejif1_k$ = function () {
    return this.caption;
  };
  protoOf(BlogAudioPostRequest).set_externalUrl_cv9zsg_k$ = function (_set____db54di) {
    this.externalUrl = _set____db54di;
  };
  protoOf(BlogAudioPostRequest).get_externalUrl_56bd8l_k$ = function () {
    return this.externalUrl;
  };
  protoOf(BlogAudioPostRequest).set_data_p3geb4_k$ = function (_set____db54di) {
    this.data = _set____db54di;
  };
  protoOf(BlogAudioPostRequest).get_data_wokkxf_k$ = function () {
    return this.data;
  };
  protoOf(BlogAudioPostRequest).toMap_1tsnvl_k$ = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.toBaseMap_x09z5c_k$();
    this.addParam_z3s3jk_k$(this_0, 'caption', this.caption);
    this.addParam_z3s3jk_k$(this_0, 'external_url', this.externalUrl);
    this.addParam_z3s3jk_k$(this_0, 'data', this.data);
    return this_0;
  };
  function BlogChatPostRequest() {
    BlogPostRequest.call(this);
    this.title = null;
    this.conversation = null;
  }
  protoOf(BlogChatPostRequest).set_title_ceyuu4_k$ = function (_set____db54di) {
    this.title = _set____db54di;
  };
  protoOf(BlogChatPostRequest).get_title_iz32un_k$ = function () {
    return this.title;
  };
  protoOf(BlogChatPostRequest).set_conversation_odbbvt_k$ = function (_set____db54di) {
    this.conversation = _set____db54di;
  };
  protoOf(BlogChatPostRequest).get_conversation_gs8dl8_k$ = function () {
    return this.conversation;
  };
  protoOf(BlogChatPostRequest).toMap_1tsnvl_k$ = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.toBaseMap_x09z5c_k$();
    this.addParam_z3s3jk_k$(this_0, 'title', this.title);
    this.addParam_z3s3jk_k$(this_0, 'conversation', this.conversation);
    return this_0;
  };
  function BlogDeleteRequest() {
    this.blogName = null;
    this.id = null;
  }
  protoOf(BlogDeleteRequest).set_blogName_4hbv7x_k$ = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogDeleteRequest).get_blogName_sa6pee_k$ = function () {
    return this.blogName;
  };
  protoOf(BlogDeleteRequest).set_id_wyyipr_k$ = function (_set____db54di) {
    this.id = _set____db54di;
  };
  protoOf(BlogDeleteRequest).get_id_kntnx8_k$ = function () {
    return this.id;
  };
  protoOf(BlogDeleteRequest).toMap_1tsnvl_k$ = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.addParam_z3s3jk_k$(this_0, 'id', this.id);
    return this_0;
  };
  function BlogLinkPostRequest() {
    BlogPostRequest.call(this);
    this.title = null;
    this.url = null;
    this.description = null;
    this.thumbnail = null;
    this.excerpt = null;
    this.author = null;
  }
  protoOf(BlogLinkPostRequest).set_title_ceyuu4_k$ = function (_set____db54di) {
    this.title = _set____db54di;
  };
  protoOf(BlogLinkPostRequest).get_title_iz32un_k$ = function () {
    return this.title;
  };
  protoOf(BlogLinkPostRequest).set_url_fvthdx_k$ = function (_set____db54di) {
    this.url = _set____db54di;
  };
  protoOf(BlogLinkPostRequest).get_url_18iuii_k$ = function () {
    return this.url;
  };
  protoOf(BlogLinkPostRequest).set_description_s1386w_k$ = function (_set____db54di) {
    this.description = _set____db54di;
  };
  protoOf(BlogLinkPostRequest).get_description_emjre5_k$ = function () {
    return this.description;
  };
  protoOf(BlogLinkPostRequest).set_thumbnail_vo8vaw_k$ = function (_set____db54di) {
    this.thumbnail = _set____db54di;
  };
  protoOf(BlogLinkPostRequest).get_thumbnail_uioqpv_k$ = function () {
    return this.thumbnail;
  };
  protoOf(BlogLinkPostRequest).set_excerpt_pktsqb_k$ = function (_set____db54di) {
    this.excerpt = _set____db54di;
  };
  protoOf(BlogLinkPostRequest).get_excerpt_kl5duw_k$ = function () {
    return this.excerpt;
  };
  protoOf(BlogLinkPostRequest).set_author_btovnz_k$ = function (_set____db54di) {
    this.author = _set____db54di;
  };
  protoOf(BlogLinkPostRequest).get_author_b5hnkk_k$ = function () {
    return this.author;
  };
  protoOf(BlogLinkPostRequest).toMap_1tsnvl_k$ = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.toBaseMap_x09z5c_k$();
    this.addParam_z3s3jk_k$(this_0, 'title', this.title);
    this.addParam_z3s3jk_k$(this_0, 'url', this.url);
    this.addParam_z3s3jk_k$(this_0, 'description', this.description);
    this.addParam_z3s3jk_k$(this_0, 'thumbnail', this.thumbnail);
    this.addParam_z3s3jk_k$(this_0, 'excerpt', this.excerpt);
    this.addParam_z3s3jk_k$(this_0, 'author', this.author);
    return this_0;
  };
  function BlogPhotoPostRequest() {
    BlogPostRequest.call(this);
    this.caption = null;
    this.link = null;
    this.source = null;
    this.data = null;
    this.data64 = null;
  }
  protoOf(BlogPhotoPostRequest).set_caption_drz67m_k$ = function (_set____db54di) {
    this.caption = _set____db54di;
  };
  protoOf(BlogPhotoPostRequest).get_caption_aejif1_k$ = function () {
    return this.caption;
  };
  protoOf(BlogPhotoPostRequest).set_link_jegc2o_k$ = function (_set____db54di) {
    this.link = _set____db54di;
  };
  protoOf(BlogPhotoPostRequest).get_link_wopumb_k$ = function () {
    return this.link;
  };
  protoOf(BlogPhotoPostRequest).set_source_smv1hd_k$ = function (_set____db54di) {
    this.source = _set____db54di;
  };
  protoOf(BlogPhotoPostRequest).get_source_jl0x7o_k$ = function () {
    return this.source;
  };
  protoOf(BlogPhotoPostRequest).set_data_jjagpl_k$ = function (_set____db54di) {
    this.data = _set____db54di;
  };
  protoOf(BlogPhotoPostRequest).get_data_wokkxf_k$ = function () {
    return this.data;
  };
  protoOf(BlogPhotoPostRequest).set_data64_f6s1vy_k$ = function (_set____db54di) {
    this.data64 = _set____db54di;
  };
  protoOf(BlogPhotoPostRequest).get_data64_c9mga9_k$ = function () {
    return this.data64;
  };
  protoOf(BlogPhotoPostRequest).toMap_1tsnvl_k$ = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.toBaseMap_x09z5c_k$();
    this.addParam_z3s3jk_k$(this_0, 'caption', this.caption);
    this.addParam_z3s3jk_k$(this_0, 'link', this.link);
    this.addParam_z3s3jk_k$(this_0, 'source', this.source);
    this.addParam_z3s3jk_k$(this_0, 'data64', this.data64);
    return this_0;
  };
  protoOf(BlogPhotoPostRequest).toFileMap_tdtkqt_k$ = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    var tmp0_safe_receiver = this.data;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.length;
      while (inductionVariable < last) {
        var item = tmp0_safe_receiver[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        var tmp2 = 'data[' + _unary__edvuaz + ']';
        // Inline function 'kotlin.collections.set' call
        var value = to(item.name, item.data);
        this_0.put_4fpzoq_k$(tmp2, value);
      }
    }
    return this_0;
  };
  function BlogPostRequest() {
    this.blogName = null;
    this.id = null;
    this.type = null;
    this.state = null;
    this.tags = null;
    this.tweet = null;
    this.date = null;
    this.format = null;
    this.slug = null;
    this.nativeInlineImages = null;
  }
  protoOf(BlogPostRequest).set_blogName_4hbv7x_k$ = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogPostRequest).get_blogName_sa6pee_k$ = function () {
    return this.blogName;
  };
  protoOf(BlogPostRequest).set_id_wyyipr_k$ = function (_set____db54di) {
    this.id = _set____db54di;
  };
  protoOf(BlogPostRequest).get_id_kntnx8_k$ = function () {
    return this.id;
  };
  protoOf(BlogPostRequest).set_type_4507og_k$ = function (_set____db54di) {
    this.type = _set____db54di;
  };
  protoOf(BlogPostRequest).get_type_wovaf7_k$ = function () {
    return this.type;
  };
  protoOf(BlogPostRequest).set_state_836lgd_k$ = function (_set____db54di) {
    this.state = _set____db54di;
  };
  protoOf(BlogPostRequest).get_state_iypx7s_k$ = function () {
    return this.state;
  };
  protoOf(BlogPostRequest).set_tags_di95rz_k$ = function (_set____db54di) {
    this.tags = _set____db54di;
  };
  protoOf(BlogPostRequest).get_tags_wousf6_k$ = function () {
    return this.tags;
  };
  protoOf(BlogPostRequest).set_tweet_sd7j0j_k$ = function (_set____db54di) {
    this.tweet = _set____db54di;
  };
  protoOf(BlogPostRequest).get_tweet_izbpe0_k$ = function () {
    return this.tweet;
  };
  protoOf(BlogPostRequest).set_date_y25dgs_k$ = function (_set____db54di) {
    this.date = _set____db54di;
  };
  protoOf(BlogPostRequest).get_date_wokkxj_k$ = function () {
    return this.date;
  };
  protoOf(BlogPostRequest).set_format_yd74t9_k$ = function (_set____db54di) {
    this.format = _set____db54di;
  };
  protoOf(BlogPostRequest).get_format_dfdtds_k$ = function () {
    return this.format;
  };
  protoOf(BlogPostRequest).set_slug_iclwbz_k$ = function (_set____db54di) {
    this.slug = _set____db54di;
  };
  protoOf(BlogPostRequest).get_slug_woudx0_k$ = function () {
    return this.slug;
  };
  protoOf(BlogPostRequest).set_nativeInlineImages_bzo2dh_k$ = function (_set____db54di) {
    this.nativeInlineImages = _set____db54di;
  };
  protoOf(BlogPostRequest).get_nativeInlineImages_ikd3rj_k$ = function () {
    return this.nativeInlineImages;
  };
  protoOf(BlogPostRequest).toBaseMap_x09z5c_k$ = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    addParam_0(this_0, 'id', this.id);
    addParam_0(this_0, 'type', this.type);
    addParam_0(this_0, 'state', this.state);
    addParam_0(this_0, 'tags', this.tags);
    addParam_0(this_0, 'tweet', this.tweet);
    addParam_0(this_0, 'date', this.date);
    addParam_0(this_0, 'format', this.format);
    addParam_0(this_0, 'slug', this.slug);
    addParam_0(this_0, 'native_inline_images', this.nativeInlineImages);
    return this_0;
  };
  function BlogQuotePostRequest() {
    BlogPostRequest.call(this);
    this.quote = null;
    this.source = null;
  }
  protoOf(BlogQuotePostRequest).set_quote_jqvaew_k$ = function (_set____db54di) {
    this.quote = _set____db54di;
  };
  protoOf(BlogQuotePostRequest).get_quote_ixn9eb_k$ = function () {
    return this.quote;
  };
  protoOf(BlogQuotePostRequest).set_source_smv1hd_k$ = function (_set____db54di) {
    this.source = _set____db54di;
  };
  protoOf(BlogQuotePostRequest).get_source_jl0x7o_k$ = function () {
    return this.source;
  };
  protoOf(BlogQuotePostRequest).toMap_1tsnvl_k$ = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.toBaseMap_x09z5c_k$();
    this.addParam_z3s3jk_k$(this_0, 'quote', this.quote);
    this.addParam_z3s3jk_k$(this_0, 'source', this.source);
    return this_0;
  };
  function BlogReblogRequest() {
    this.blogName = null;
    this.id = null;
    this.reblogKey = null;
    this.comment = null;
    this.nativeInlineImages = null;
  }
  protoOf(BlogReblogRequest).set_blogName_4hbv7x_k$ = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogReblogRequest).get_blogName_sa6pee_k$ = function () {
    return this.blogName;
  };
  protoOf(BlogReblogRequest).set_id_wyyipr_k$ = function (_set____db54di) {
    this.id = _set____db54di;
  };
  protoOf(BlogReblogRequest).get_id_kntnx8_k$ = function () {
    return this.id;
  };
  protoOf(BlogReblogRequest).set_reblogKey_q2gl9m_k$ = function (_set____db54di) {
    this.reblogKey = _set____db54di;
  };
  protoOf(BlogReblogRequest).get_reblogKey_8swysh_k$ = function () {
    return this.reblogKey;
  };
  protoOf(BlogReblogRequest).set_comment_aa11d7_k$ = function (_set____db54di) {
    this.comment = _set____db54di;
  };
  protoOf(BlogReblogRequest).get_comment_gzea9i_k$ = function () {
    return this.comment;
  };
  protoOf(BlogReblogRequest).set_nativeInlineImages_bzo2dh_k$ = function (_set____db54di) {
    this.nativeInlineImages = _set____db54di;
  };
  protoOf(BlogReblogRequest).get_nativeInlineImages_ikd3rj_k$ = function () {
    return this.nativeInlineImages;
  };
  protoOf(BlogReblogRequest).toMap_1tsnvl_k$ = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.addParam_z3s3jk_k$(this_0, 'id', this.id);
    this.addParam_z3s3jk_k$(this_0, 'reblog_key', this.reblogKey);
    this.addParam_z3s3jk_k$(this_0, 'comment', this.comment);
    this.addParam_z3s3jk_k$(this_0, 'native_inline_images', this.nativeInlineImages);
    return this_0;
  };
  function BlogTextPostRequest() {
    BlogPostRequest.call(this);
    this.title = null;
    this.body = null;
  }
  protoOf(BlogTextPostRequest).set_title_ceyuu4_k$ = function (_set____db54di) {
    this.title = _set____db54di;
  };
  protoOf(BlogTextPostRequest).get_title_iz32un_k$ = function () {
    return this.title;
  };
  protoOf(BlogTextPostRequest).set_body_d8bq7s_k$ = function (_set____db54di) {
    this.body = _set____db54di;
  };
  protoOf(BlogTextPostRequest).get_body_wojkyz_k$ = function () {
    return this.body;
  };
  protoOf(BlogTextPostRequest).toMap_1tsnvl_k$ = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.toBaseMap_x09z5c_k$();
    this.addParam_z3s3jk_k$(this_0, 'title', this.title);
    this.addParam_z3s3jk_k$(this_0, 'body', this.body);
    return this_0;
  };
  function BlogVideoPostRequest() {
    BlogPostRequest.call(this);
    this.caption = null;
    this.embed = null;
    this.data = null;
  }
  protoOf(BlogVideoPostRequest).set_caption_drz67m_k$ = function (_set____db54di) {
    this.caption = _set____db54di;
  };
  protoOf(BlogVideoPostRequest).get_caption_aejif1_k$ = function () {
    return this.caption;
  };
  protoOf(BlogVideoPostRequest).set_embed_mb01np_k$ = function (_set____db54di) {
    this.embed = _set____db54di;
  };
  protoOf(BlogVideoPostRequest).get_embed_iqwcds_k$ = function () {
    return this.embed;
  };
  protoOf(BlogVideoPostRequest).set_data_p3geb4_k$ = function (_set____db54di) {
    this.data = _set____db54di;
  };
  protoOf(BlogVideoPostRequest).get_data_wokkxf_k$ = function () {
    return this.data;
  };
  protoOf(BlogVideoPostRequest).toMap_1tsnvl_k$ = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.toBaseMap_x09z5c_k$();
    this.addParam_z3s3jk_k$(this_0, 'caption', this.caption);
    this.addParam_z3s3jk_k$(this_0, 'embed', this.embed);
    this.addParam_z3s3jk_k$(this_0, 'data', this.data);
    return this_0;
  };
  function TaggedRequest() {
    this.tag = null;
    this.before = null;
    this.limit = null;
    this.filter = null;
  }
  protoOf(TaggedRequest).set_tag_94mgrq_k$ = function (_set____db54di) {
    this.tag = _set____db54di;
  };
  protoOf(TaggedRequest).get_tag_18ivnz_k$ = function () {
    return this.tag;
  };
  protoOf(TaggedRequest).set_before_rd3s69_k$ = function (_set____db54di) {
    this.before = _set____db54di;
  };
  protoOf(TaggedRequest).get_before_bdhrwo_k$ = function () {
    return this.before;
  };
  protoOf(TaggedRequest).set_limit_76wbgj_k$ = function (_set____db54di) {
    this.limit = _set____db54di;
  };
  protoOf(TaggedRequest).get_limit_iuokuq_k$ = function () {
    return this.limit;
  };
  protoOf(TaggedRequest).set_filter_rpyfxa_k$ = function (_set____db54di) {
    this.filter = _set____db54di;
  };
  protoOf(TaggedRequest).get_filter_dbzd6p_k$ = function () {
    return this.filter;
  };
  protoOf(TaggedRequest).toMap_1tsnvl_k$ = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.addParam_z3s3jk_k$(this_0, 'tag', this.tag);
    this.addParam_z3s3jk_k$(this_0, 'before', this.before);
    this.addParam_z3s3jk_k$(this_0, 'limit', this.limit);
    this.addParam_z3s3jk_k$(this_0, 'filter', this.filter);
    return this_0;
  };
  function UserDashboardRequest() {
    this.limit = null;
    this.offset = null;
    this.type = null;
    this.sinceId = null;
    this.reblogInfo = null;
    this.notesInfo = null;
    this.npf = null;
  }
  protoOf(UserDashboardRequest).set_limit_76wbgj_k$ = function (_set____db54di) {
    this.limit = _set____db54di;
  };
  protoOf(UserDashboardRequest).get_limit_iuokuq_k$ = function () {
    return this.limit;
  };
  protoOf(UserDashboardRequest).set_offset_f7lyff_k$ = function (_set____db54di) {
    this.offset = _set____db54di;
  };
  protoOf(UserDashboardRequest).get_offset_hjmqak_k$ = function () {
    return this.offset;
  };
  protoOf(UserDashboardRequest).set_type_4507og_k$ = function (_set____db54di) {
    this.type = _set____db54di;
  };
  protoOf(UserDashboardRequest).get_type_wovaf7_k$ = function () {
    return this.type;
  };
  protoOf(UserDashboardRequest).set_sinceId_y4cj25_k$ = function (_set____db54di) {
    this.sinceId = _set____db54di;
  };
  protoOf(UserDashboardRequest).get_sinceId_z4lqlw_k$ = function () {
    return this.sinceId;
  };
  protoOf(UserDashboardRequest).set_reblogInfo_6lzneo_k$ = function (_set____db54di) {
    this.reblogInfo = _set____db54di;
  };
  protoOf(UserDashboardRequest).get_reblogInfo_b83d1w_k$ = function () {
    return this.reblogInfo;
  };
  protoOf(UserDashboardRequest).set_notesInfo_g933ma_k$ = function (_set____db54di) {
    this.notesInfo = _set____db54di;
  };
  protoOf(UserDashboardRequest).get_notesInfo_ws097e_k$ = function () {
    return this.notesInfo;
  };
  protoOf(UserDashboardRequest).set_npf_2bwye1_k$ = function (_set____db54di) {
    this.npf = _set____db54di;
  };
  protoOf(UserDashboardRequest).get_npf_18izr9_k$ = function () {
    return this.npf;
  };
  protoOf(UserDashboardRequest).toMap_1tsnvl_k$ = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.addParam_z3s3jk_k$(this_0, 'limit', this.limit);
    this.addParam_z3s3jk_k$(this_0, 'offset', this.offset);
    this.addParam_z3s3jk_k$(this_0, 'type', this.type);
    this.addParam_z3s3jk_k$(this_0, 'since_id', this.sinceId);
    this.addParam_z3s3jk_k$(this_0, 'reblog_info', this.reblogInfo);
    this.addParam_z3s3jk_k$(this_0, 'notes_info', this.notesInfo);
    this.addParam_z3s3jk_k$(this_0, 'npf', this.npf);
    return this_0;
  };
  function UserFollowRequest() {
    this.url = null;
    this.email = null;
  }
  protoOf(UserFollowRequest).set_url_fvthdx_k$ = function (_set____db54di) {
    this.url = _set____db54di;
  };
  protoOf(UserFollowRequest).get_url_18iuii_k$ = function () {
    return this.url;
  };
  protoOf(UserFollowRequest).set_email_k1h0t4_k$ = function (_set____db54di) {
    this.email = _set____db54di;
  };
  protoOf(UserFollowRequest).get_email_iqwbqr_k$ = function () {
    return this.email;
  };
  protoOf(UserFollowRequest).toMap_1tsnvl_k$ = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.addParam_z3s3jk_k$(this_0, 'url', this.url);
    this.addParam_z3s3jk_k$(this_0, 'email', this.email);
    return this_0;
  };
  function UserFollowingRequest() {
    this.limit = null;
    this.offset = null;
  }
  protoOf(UserFollowingRequest).set_limit_76wbgj_k$ = function (_set____db54di) {
    this.limit = _set____db54di;
  };
  protoOf(UserFollowingRequest).get_limit_iuokuq_k$ = function () {
    return this.limit;
  };
  protoOf(UserFollowingRequest).set_offset_f7lyff_k$ = function (_set____db54di) {
    this.offset = _set____db54di;
  };
  protoOf(UserFollowingRequest).get_offset_hjmqak_k$ = function () {
    return this.offset;
  };
  protoOf(UserFollowingRequest).toMap_1tsnvl_k$ = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.addParam_z3s3jk_k$(this_0, 'limit', this.limit);
    this.addParam_z3s3jk_k$(this_0, 'offset', this.offset);
    return this_0;
  };
  function UserLikeRequest() {
    this.id = null;
    this.reblogKey = null;
  }
  protoOf(UserLikeRequest).set_id_wyyipr_k$ = function (_set____db54di) {
    this.id = _set____db54di;
  };
  protoOf(UserLikeRequest).get_id_kntnx8_k$ = function () {
    return this.id;
  };
  protoOf(UserLikeRequest).set_reblogKey_q2gl9m_k$ = function (_set____db54di) {
    this.reblogKey = _set____db54di;
  };
  protoOf(UserLikeRequest).get_reblogKey_8swysh_k$ = function () {
    return this.reblogKey;
  };
  protoOf(UserLikeRequest).toMap_1tsnvl_k$ = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.addParam_z3s3jk_k$(this_0, 'id', this.id);
    this.addParam_z3s3jk_k$(this_0, 'reblog_key', this.reblogKey);
    return this_0;
  };
  function UserLikesRequest() {
    this.limit = null;
    this.offset = null;
    this.before = null;
    this.after = null;
  }
  protoOf(UserLikesRequest).set_limit_76wbgj_k$ = function (_set____db54di) {
    this.limit = _set____db54di;
  };
  protoOf(UserLikesRequest).get_limit_iuokuq_k$ = function () {
    return this.limit;
  };
  protoOf(UserLikesRequest).set_offset_f7lyff_k$ = function (_set____db54di) {
    this.offset = _set____db54di;
  };
  protoOf(UserLikesRequest).get_offset_hjmqak_k$ = function () {
    return this.offset;
  };
  protoOf(UserLikesRequest).set_before_rd3s69_k$ = function (_set____db54di) {
    this.before = _set____db54di;
  };
  protoOf(UserLikesRequest).get_before_bdhrwo_k$ = function () {
    return this.before;
  };
  protoOf(UserLikesRequest).set_after_iogau4_k$ = function (_set____db54di) {
    this.after = _set____db54di;
  };
  protoOf(UserLikesRequest).get_after_iol2gj_k$ = function () {
    return this.after;
  };
  protoOf(UserLikesRequest).toMap_1tsnvl_k$ = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.addParam_z3s3jk_k$(this_0, 'limit', this.limit);
    this.addParam_z3s3jk_k$(this_0, 'offset', this.offset);
    this.addParam_z3s3jk_k$(this_0, 'before', this.before);
    this.addParam_z3s3jk_k$(this_0, 'after', this.after);
    return this_0;
  };
  function UserUnfollowRequest() {
    this.url = null;
  }
  protoOf(UserUnfollowRequest).set_url_fvthdx_k$ = function (_set____db54di) {
    this.url = _set____db54di;
  };
  protoOf(UserUnfollowRequest).get_url_18iuii_k$ = function () {
    return this.url;
  };
  protoOf(UserUnfollowRequest).toMap_1tsnvl_k$ = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.addParam_z3s3jk_k$(this_0, 'url', this.url);
    return this_0;
  };
  function UserUnlikeRequest() {
    this.id = null;
    this.reblogKey = null;
  }
  protoOf(UserUnlikeRequest).set_id_wyyipr_k$ = function (_set____db54di) {
    this.id = _set____db54di;
  };
  protoOf(UserUnlikeRequest).get_id_kntnx8_k$ = function () {
    return this.id;
  };
  protoOf(UserUnlikeRequest).set_reblogKey_q2gl9m_k$ = function (_set____db54di) {
    this.reblogKey = _set____db54di;
  };
  protoOf(UserUnlikeRequest).get_reblogKey_8swysh_k$ = function () {
    return this.reblogKey;
  };
  protoOf(UserUnlikeRequest).toMap_1tsnvl_k$ = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.addParam_z3s3jk_k$(this_0, 'id', this.id);
    this.addParam_z3s3jk_k$(this_0, 'reblog_key', this.reblogKey);
    return this_0;
  };
  function $serializer_init_$Init$(typeSerial0, $this) {
    $serializer.call($this);
    $this.typeSerial0__1 = typeSerial0;
    return $this;
  }
  function $serializer_init_$Create$(typeSerial0) {
    return $serializer_init_$Init$(typeSerial0, objectCreate(protoOf($serializer)));
  }
  function _get_typeSerial0__3fdbgx($this) {
    return $this.typeSerial0__1;
  }
  function Companion() {
    Companion_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.Body', null, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('meta', true);
    tmp0_serialDesc.addElement_5pzumi_k$('response', true);
    this.$cachedDescriptor_1 = tmp0_serialDesc;
  }
  protoOf(Companion).serializer_qelnde_k$ = function (typeSerial0) {
    return $serializer_init_$Create$(typeSerial0);
  };
  protoOf(Companion).serializer_nv39qc_k$ = function (typeParamsSerializers) {
    return this.serializer_qelnde_k$(typeParamsSerializers[0]);
  };
  protoOf(Companion).get_$cachedDescriptor_3xtnpw_k$ = function () {
    return this.$cachedDescriptor_1;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.Body', this, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('meta', true);
    tmp0_serialDesc.addElement_5pzumi_k$('response', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer).serialize_qa51g3_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.meta == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, $serializer_getInstance(), value.meta);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.response == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, this.typeSerial0__1, value.response);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_qa51g3_k$(encoder, value instanceof Body ? value : THROW_CCE());
  };
  protoOf($serializer).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp6_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, this.typeSerial0__1, tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, this.typeSerial0__1, tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.endStructure_1xqz0n_k$(tmp0_desc);
    return Body_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance()), get_nullable(this.typeSerial0__1)];
  };
  protoOf($serializer).typeParametersSerializers_fr94fx_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.typeSerial0__1];
  };
  function Body_init_$Init$(seen0, meta, response, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, Companion_getInstance_0().$cachedDescriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.meta = null;
    else
      $this.meta = meta;
    if (0 === (seen0 & 2))
      $this.response = null;
    else
      $this.response = response;
    return $this;
  }
  function Body_init_$Create$(seen0, meta, response, serializationConstructorMarker) {
    return Body_init_$Init$(seen0, meta, response, serializationConstructorMarker, objectCreate(protoOf(Body)));
  }
  function Body() {
    Companion_getInstance_0();
    this.meta = null;
    this.response = null;
  }
  protoOf(Body).set_meta_bys3k2_k$ = function (_set____db54di) {
    this.meta = _set____db54di;
  };
  protoOf(Body).get_meta_woqery_k$ = function () {
    return this.meta;
  };
  protoOf(Body).set_response_m9btuw_k$ = function (_set____db54di) {
    this.response = _set____db54di;
  };
  protoOf(Body).get_response_xlk07e_k$ = function () {
    return this.response;
  };
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.Meta', this, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('status', true);
    tmp0_serialDesc.addElement_5pzumi_k$('msg', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).serialize_s4lkmo_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.status == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, IntSerializer_getInstance(), value.status);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.msg == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, StringSerializer_getInstance(), value.msg);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_0).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_s4lkmo_k$(encoder, value instanceof Meta ? value : THROW_CCE());
  };
  protoOf($serializer_0).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp6_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.endStructure_1xqz0n_k$(tmp0_desc);
    return Meta_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_0).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_0).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer_0();
    return $serializer_instance;
  }
  function Meta_init_$Init$(seen0, status, msg, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.status = null;
    else
      $this.status = status;
    if (0 === (seen0 & 2))
      $this.msg = null;
    else
      $this.msg = msg;
    return $this;
  }
  function Meta_init_$Create$(seen0, status, msg, serializationConstructorMarker) {
    return Meta_init_$Init$(seen0, status, msg, serializationConstructorMarker, objectCreate(protoOf(Meta)));
  }
  function Meta() {
    Companion_getInstance_1();
    this.status = null;
    this.msg = null;
  }
  protoOf(Meta).set_status_haytw_k$ = function (_set____db54di) {
    this.status = _set____db54di;
  };
  protoOf(Meta).get_status_jnf6d7_k$ = function () {
    return this.status;
  };
  protoOf(Meta).set_msg_5fxl9_k$ = function (_set____db54di) {
    this.msg = _set____db54di;
  };
  protoOf(Meta).get_msg_18j0fc_k$ = function () {
    return this.msg;
  };
  function Response(data, json, status, message) {
    status = status === VOID ? null : status;
    message = message === VOID ? null : message;
    this.data = data;
    this.json = json;
    this.status = status;
    this.message = message;
  }
  protoOf(Response).set_data_d4qbbc_k$ = function (_set____db54di) {
    this.data = _set____db54di;
  };
  protoOf(Response).get_data_wokkxf_k$ = function () {
    return this.data;
  };
  protoOf(Response).set_json_10iqe3_k$ = function (_set____db54di) {
    this.json = _set____db54di;
  };
  protoOf(Response).get_json_woos35_k$ = function () {
    return this.json;
  };
  protoOf(Response).get_status_jnf6d7_k$ = function () {
    return this.status;
  };
  protoOf(Response).get_message_h23axq_k$ = function () {
    return this.message;
  };
  protoOf(Response).component1_7eebsc_k$ = function () {
    return this.data;
  };
  protoOf(Response).component2_7eebsb_k$ = function () {
    return this.json;
  };
  protoOf(Response).component3_7eebsa_k$ = function () {
    return this.status;
  };
  protoOf(Response).component4_7eebs9_k$ = function () {
    return this.message;
  };
  protoOf(Response).copy_ixnsn6_k$ = function (data, json, status, message) {
    return new Response(data, json, status, message);
  };
  protoOf(Response).copy = function (data, json, status, message, $super) {
    data = data === VOID ? this.data : data;
    json = json === VOID ? this.json : json;
    status = status === VOID ? this.status : status;
    message = message === VOID ? this.message : message;
    return $super === VOID ? this.copy_ixnsn6_k$(data, json, status, message) : $super.copy_ixnsn6_k$.call(this, data, json, status, message);
  };
  protoOf(Response).toString = function () {
    return 'Response(data=' + toString_0(this.data) + ', json=' + this.json + ', status=' + this.status + ', message=' + this.message + ')';
  };
  protoOf(Response).hashCode = function () {
    var result = this.data == null ? 0 : hashCode(this.data);
    result = imul(result, 31) + getStringHashCode(this.json) | 0;
    result = imul(result, 31) + (this.status == null ? 0 : this.status) | 0;
    result = imul(result, 31) + (this.message == null ? 0 : getStringHashCode(this.message)) | 0;
    return result;
  };
  protoOf(Response).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Response))
      return false;
    if (!equals(this.data, other.data))
      return false;
    if (!(this.json === other.json))
      return false;
    if (!(this.status == other.status))
      return false;
    if (!(this.message == other.message))
      return false;
    return true;
  };
  function ResponseUnit(json, status, message) {
    status = status === VOID ? null : status;
    message = message === VOID ? null : message;
    this.json = json;
    this.status = status;
    this.message = message;
  }
  protoOf(ResponseUnit).set_json_10iqe3_k$ = function (_set____db54di) {
    this.json = _set____db54di;
  };
  protoOf(ResponseUnit).get_json_woos35_k$ = function () {
    return this.json;
  };
  protoOf(ResponseUnit).get_status_jnf6d7_k$ = function () {
    return this.status;
  };
  protoOf(ResponseUnit).get_message_h23axq_k$ = function () {
    return this.message;
  };
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $serializer_1() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.auth.AuthOAuth2TokenResponse', this, 5);
    tmp0_serialDesc.addElement_5pzumi_k$('access_token', true);
    tmp0_serialDesc.addElement_5pzumi_k$('expires_in', true);
    tmp0_serialDesc.addElement_5pzumi_k$('token_type', true);
    tmp0_serialDesc.addElement_5pzumi_k$('scope', true);
    tmp0_serialDesc.addElement_5pzumi_k$('refresh_token', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).serialize_xyypet_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.accessToken == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, StringSerializer_getInstance(), value.accessToken);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.expiresIn == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, IntSerializer_getInstance(), value.expiresIn);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !(value.tokenType == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, StringSerializer_getInstance(), value.tokenType);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 3) ? true : !(value.scope == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 3, StringSerializer_getInstance(), value.scope);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 4) ? true : !(value.refreshToken == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 4, StringSerializer_getInstance(), value.refreshToken);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_1).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_xyypet_k$(encoder, value instanceof AuthOAuth2TokenResponse ? value : THROW_CCE());
  };
  protoOf($serializer_1).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp9_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.endStructure_1xqz0n_k$(tmp0_desc);
    return AuthOAuth2TokenResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_1).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_1).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_1();
    return $serializer_instance_0;
  }
  function AuthOAuth2TokenResponse_init_$Init$(seen0, accessToken, expiresIn, tokenType, scope, refreshToken, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.accessToken = null;
    else
      $this.accessToken = accessToken;
    if (0 === (seen0 & 2))
      $this.expiresIn = null;
    else
      $this.expiresIn = expiresIn;
    if (0 === (seen0 & 4))
      $this.tokenType = null;
    else
      $this.tokenType = tokenType;
    if (0 === (seen0 & 8))
      $this.scope = null;
    else
      $this.scope = scope;
    if (0 === (seen0 & 16))
      $this.refreshToken = null;
    else
      $this.refreshToken = refreshToken;
    return $this;
  }
  function AuthOAuth2TokenResponse_init_$Create$(seen0, accessToken, expiresIn, tokenType, scope, refreshToken, serializationConstructorMarker) {
    return AuthOAuth2TokenResponse_init_$Init$(seen0, accessToken, expiresIn, tokenType, scope, refreshToken, serializationConstructorMarker, objectCreate(protoOf(AuthOAuth2TokenResponse)));
  }
  function AuthOAuth2TokenResponse() {
    Companion_getInstance_2();
    this.accessToken = null;
    this.expiresIn = null;
    this.tokenType = null;
    this.scope = null;
    this.refreshToken = null;
  }
  protoOf(AuthOAuth2TokenResponse).set_accessToken_b43hrz_k$ = function (_set____db54di) {
    this.accessToken = _set____db54di;
  };
  protoOf(AuthOAuth2TokenResponse).get_accessToken_3cl7ck_k$ = function () {
    return this.accessToken;
  };
  protoOf(AuthOAuth2TokenResponse).set_expiresIn_pularj_k$ = function (_set____db54di) {
    this.expiresIn = _set____db54di;
  };
  protoOf(AuthOAuth2TokenResponse).get_expiresIn_cnhec0_k$ = function () {
    return this.expiresIn;
  };
  protoOf(AuthOAuth2TokenResponse).set_tokenType_7f3f8f_k$ = function (_set____db54di) {
    this.tokenType = _set____db54di;
  };
  protoOf(AuthOAuth2TokenResponse).get_tokenType_aurm7e_k$ = function () {
    return this.tokenType;
  };
  protoOf(AuthOAuth2TokenResponse).set_scope_wqz734_k$ = function (_set____db54di) {
    this.scope = _set____db54di;
  };
  protoOf(AuthOAuth2TokenResponse).get_scope_iyfcq3_k$ = function () {
    return this.scope;
  };
  protoOf(AuthOAuth2TokenResponse).set_refreshToken_s6sjzw_k$ = function (_set____db54di) {
    this.refreshToken = _set____db54di;
  };
  protoOf(AuthOAuth2TokenResponse).get_refreshToken_3lx63r_k$ = function () {
    return this.refreshToken;
  };
  function _get_$childSerializers__r2zwns($this) {
    return $this.$childSerializers_1;
  }
  function BlogFollowersResponse$Companion$$childSerializers$_anonymous__jotz7a() {
    return new ReferenceArraySerializer(getKClass(FollowerUser), $serializer_getInstance_31());
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [null, lazy(tmp_0, BlogFollowersResponse$Companion$$childSerializers$_anonymous__jotz7a)];
  }
  protoOf(Companion_2).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function $serializer_2() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogFollowersResponse', this, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('total_users', true);
    tmp0_serialDesc.addElement_5pzumi_k$('users', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).serialize_j6rvci_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().$childSerializers_1;
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.totalUsers == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, IntSerializer_getInstance(), value.totalUsers);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.users == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, tmp2_cached[1].get_value_j01efc_k$(), value.users);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_2).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_j6rvci_k$(encoder, value instanceof BlogFollowersResponse ? value : THROW_CCE());
  };
  protoOf($serializer_2).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp7_cached = Companion_getInstance_3().$childSerializers_1;
    if (tmp6_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, tmp7_cached[1].get_value_j01efc_k$(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, tmp7_cached[1].get_value_j01efc_k$(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.endStructure_1xqz0n_k$(tmp0_desc);
    return BlogFollowersResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_2).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_2).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_3().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[1].get_value_j01efc_k$())];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_2();
    return $serializer_instance_1;
  }
  function BlogFollowersResponse_init_$Init$(seen0, totalUsers, users, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_1().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.totalUsers = null;
    else
      $this.totalUsers = totalUsers;
    if (0 === (seen0 & 2))
      $this.users = null;
    else
      $this.users = users;
    return $this;
  }
  function BlogFollowersResponse_init_$Create$(seen0, totalUsers, users, serializationConstructorMarker) {
    return BlogFollowersResponse_init_$Init$(seen0, totalUsers, users, serializationConstructorMarker, objectCreate(protoOf(BlogFollowersResponse)));
  }
  function BlogFollowersResponse() {
    Companion_getInstance_3();
    this.totalUsers = null;
    this.users = null;
  }
  protoOf(BlogFollowersResponse).set_totalUsers_bcwtc6_k$ = function (_set____db54di) {
    this.totalUsers = _set____db54di;
  };
  protoOf(BlogFollowersResponse).get_totalUsers_vzqonn_k$ = function () {
    return this.totalUsers;
  };
  protoOf(BlogFollowersResponse).set_users_bfjx2e_k$ = function (_set____db54di) {
    this.users = _set____db54di;
  };
  protoOf(BlogFollowersResponse).get_users_izsycf_k$ = function () {
    return this.users;
  };
  function _get_$childSerializers__r2zwns_0($this) {
    return $this.$childSerializers_1;
  }
  function BlogFollowingResponse$Companion$$childSerializers$_anonymous__1p0ydi() {
    return new ReferenceArraySerializer(getKClass(Blog), $serializer_getInstance_12());
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [lazy(tmp_0, BlogFollowingResponse$Companion$$childSerializers$_anonymous__1p0ydi), null];
  }
  protoOf(Companion_3).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function $serializer_3() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogFollowingResponse', this, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('blogs', true);
    tmp0_serialDesc.addElement_5pzumi_k$('total_blogs', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).serialize_z42hsi_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().$childSerializers_1;
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.blogs == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, tmp2_cached[0].get_value_j01efc_k$(), value.blogs);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.totalBlogs == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, IntSerializer_getInstance(), value.totalBlogs);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_3).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_z42hsi_k$(encoder, value instanceof BlogFollowingResponse ? value : THROW_CCE());
  };
  protoOf($serializer_3).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp7_cached = Companion_getInstance_4().$childSerializers_1;
    if (tmp6_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, tmp7_cached[0].get_value_j01efc_k$(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, tmp7_cached[0].get_value_j01efc_k$(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.endStructure_1xqz0n_k$(tmp0_desc);
    return BlogFollowingResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_3).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_3).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_4().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].get_value_j01efc_k$()), get_nullable(IntSerializer_getInstance())];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_3();
    return $serializer_instance_2;
  }
  function BlogFollowingResponse_init_$Init$(seen0, blogs, totalBlogs, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_2().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.blogs = null;
    else
      $this.blogs = blogs;
    if (0 === (seen0 & 2))
      $this.totalBlogs = null;
    else
      $this.totalBlogs = totalBlogs;
    return $this;
  }
  function BlogFollowingResponse_init_$Create$(seen0, blogs, totalBlogs, serializationConstructorMarker) {
    return BlogFollowingResponse_init_$Init$(seen0, blogs, totalBlogs, serializationConstructorMarker, objectCreate(protoOf(BlogFollowingResponse)));
  }
  function BlogFollowingResponse() {
    Companion_getInstance_4();
    this.blogs = null;
    this.totalBlogs = null;
  }
  protoOf(BlogFollowingResponse).set_blogs_msccfj_k$ = function (_set____db54di) {
    this.blogs = _set____db54di;
  };
  protoOf(BlogFollowingResponse).get_blogs_ip8lbc_k$ = function () {
    return this.blogs;
  };
  protoOf(BlogFollowingResponse).set_totalBlogs_cgrg5r_k$ = function (_set____db54di) {
    this.totalBlogs = _set____db54di;
  };
  protoOf(BlogFollowingResponse).get_totalBlogs_wab1oq_k$ = function () {
    return this.totalBlogs;
  };
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_3();
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function $serializer_4() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogInfoResponse', this, 1);
    tmp0_serialDesc.addElement_5pzumi_k$('blog', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).serialize_ipxl77_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.blog == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, $serializer_getInstance_12(), value.blog);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_4).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_ipxl77_k$(encoder, value instanceof BlogInfoResponse ? value : THROW_CCE());
  };
  protoOf($serializer_4).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, $serializer_getInstance_12(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, $serializer_getInstance_12(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_1xqz0n_k$(tmp0_desc);
    return BlogInfoResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_4).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_4).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_12())];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_4();
    return $serializer_instance_3;
  }
  function BlogInfoResponse_init_$Init$(seen0, blog, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_3().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.blog = null;
    else
      $this.blog = blog;
    return $this;
  }
  function BlogInfoResponse_init_$Create$(seen0, blog, serializationConstructorMarker) {
    return BlogInfoResponse_init_$Init$(seen0, blog, serializationConstructorMarker, objectCreate(protoOf(BlogInfoResponse)));
  }
  function BlogInfoResponse() {
    Companion_getInstance_5();
    this.blog = null;
  }
  protoOf(BlogInfoResponse).set_blog_o3ffjm_k$ = function (_set____db54di) {
    this.blog = _set____db54di;
  };
  protoOf(BlogInfoResponse).get_blog_wojizv_k$ = function () {
    return this.blog;
  };
  function _get_$childSerializers__r2zwns_1($this) {
    return $this.$childSerializers_1;
  }
  function BlogLikesResponse$Companion$$childSerializers$_anonymous__2jkvu9() {
    return new ReferenceArraySerializer(getKClass(Post), PostSerializer_getInstance());
  }
  function Companion_5() {
    Companion_instance_5 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [lazy(tmp_0, BlogLikesResponse$Companion$$childSerializers$_anonymous__2jkvu9), null];
  }
  protoOf(Companion_5).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function $serializer_5() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogLikesResponse', this, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('liked_posts', true);
    tmp0_serialDesc.addElement_5pzumi_k$('liked_count', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).serialize_by47pj_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_6().$childSerializers_1;
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.likedPosts == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, tmp2_cached[0].get_value_j01efc_k$(), value.likedPosts);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.likedCount == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, IntSerializer_getInstance(), value.likedCount);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_5).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_by47pj_k$(encoder, value instanceof BlogLikesResponse ? value : THROW_CCE());
  };
  protoOf($serializer_5).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp7_cached = Companion_getInstance_6().$childSerializers_1;
    if (tmp6_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, tmp7_cached[0].get_value_j01efc_k$(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, tmp7_cached[0].get_value_j01efc_k$(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.endStructure_1xqz0n_k$(tmp0_desc);
    return BlogLikesResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_5).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_5).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_6().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].get_value_j01efc_k$()), get_nullable(IntSerializer_getInstance())];
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_5();
    return $serializer_instance_4;
  }
  function BlogLikesResponse_init_$Init$(seen0, likedPosts, likedCount, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_4().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.likedPosts = null;
    else
      $this.likedPosts = likedPosts;
    if (0 === (seen0 & 2))
      $this.likedCount = null;
    else
      $this.likedCount = likedCount;
    return $this;
  }
  function BlogLikesResponse_init_$Create$(seen0, likedPosts, likedCount, serializationConstructorMarker) {
    return BlogLikesResponse_init_$Init$(seen0, likedPosts, likedCount, serializationConstructorMarker, objectCreate(protoOf(BlogLikesResponse)));
  }
  function BlogLikesResponse() {
    Companion_getInstance_6();
    this.likedPosts = null;
    this.likedCount = null;
  }
  protoOf(BlogLikesResponse).set_likedPosts_ewz3cw_k$ = function (_set____db54di) {
    this.likedPosts = _set____db54di;
  };
  protoOf(BlogLikesResponse).get_likedPosts_v7a5w1_k$ = function () {
    return this.likedPosts;
  };
  protoOf(BlogLikesResponse).set_likedCount_xje2f8_k$ = function (_set____db54di) {
    this.likedCount = _set____db54di;
  };
  protoOf(BlogLikesResponse).get_likedCount_vefg9h_k$ = function () {
    return this.likedCount;
  };
  function _get_$childSerializers__r2zwns_2($this) {
    return $this.$childSerializers_1;
  }
  function BlogPostsResponse$Companion$$childSerializers$_anonymous__tab7i0() {
    return new ReferenceArraySerializer(getKClass(Post), PostSerializer_getInstance());
  }
  function Companion_6() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [null, lazy(tmp_0, BlogPostsResponse$Companion$$childSerializers$_anonymous__tab7i0), null];
  }
  protoOf(Companion_6).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function $serializer_6() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogPostsResponse', this, 3);
    tmp0_serialDesc.addElement_5pzumi_k$('blog', true);
    tmp0_serialDesc.addElement_5pzumi_k$('posts', true);
    tmp0_serialDesc.addElement_5pzumi_k$('total_posts', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).serialize_useob4_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().$childSerializers_1;
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.blog == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, $serializer_getInstance_12(), value.blog);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.posts == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, tmp2_cached[1].get_value_j01efc_k$(), value.posts);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !(value.totalPosts == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, IntSerializer_getInstance(), value.totalPosts);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_6).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_useob4_k$(encoder, value instanceof BlogPostsResponse ? value : THROW_CCE());
  };
  protoOf($serializer_6).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp8_cached = Companion_getInstance_7().$childSerializers_1;
    if (tmp7_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, $serializer_getInstance_12(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, tmp8_cached[1].get_value_j01efc_k$(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, $serializer_getInstance_12(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, tmp8_cached[1].get_value_j01efc_k$(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.endStructure_1xqz0n_k$(tmp0_desc);
    return BlogPostsResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_6).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_6).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_7().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_12()), get_nullable(tmp0_cached[1].get_value_j01efc_k$()), get_nullable(IntSerializer_getInstance())];
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_6();
    return $serializer_instance_5;
  }
  function BlogPostsResponse_init_$Init$(seen0, blog, posts, totalPosts, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_5().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.blog = null;
    else
      $this.blog = blog;
    if (0 === (seen0 & 2))
      $this.posts = null;
    else
      $this.posts = posts;
    if (0 === (seen0 & 4))
      $this.totalPosts = null;
    else
      $this.totalPosts = totalPosts;
    return $this;
  }
  function BlogPostsResponse_init_$Create$(seen0, blog, posts, totalPosts, serializationConstructorMarker) {
    return BlogPostsResponse_init_$Init$(seen0, blog, posts, totalPosts, serializationConstructorMarker, objectCreate(protoOf(BlogPostsResponse)));
  }
  function BlogPostsResponse() {
    Companion_getInstance_7();
    this.blog = null;
    this.posts = null;
    this.totalPosts = null;
  }
  protoOf(BlogPostsResponse).set_blog_o3ffjm_k$ = function (_set____db54di) {
    this.blog = _set____db54di;
  };
  protoOf(BlogPostsResponse).get_blog_wojizv_k$ = function () {
    return this.blog;
  };
  protoOf(BlogPostsResponse).set_posts_1cgnir_k$ = function (_set____db54di) {
    this.posts = _set____db54di;
  };
  protoOf(BlogPostsResponse).get_posts_iwzpuy_k$ = function () {
    return this.posts;
  };
  protoOf(BlogPostsResponse).set_totalPosts_a92ssx_k$ = function (_set____db54di) {
    this.totalPosts = _set____db54di;
  };
  protoOf(BlogPostsResponse).get_totalPosts_w2jx54_k$ = function () {
    return this.totalPosts;
  };
  function _get_$childSerializers__r2zwns_3($this) {
    return $this.$childSerializers_1;
  }
  function UserDashboardResponse$Companion$$childSerializers$_anonymous__a2e48w() {
    return new ReferenceArraySerializer(getKClass(Post), PostSerializer_getInstance());
  }
  function Companion_7() {
    Companion_instance_7 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [lazy(tmp_0, UserDashboardResponse$Companion$$childSerializers$_anonymous__a2e48w)];
  }
  protoOf(Companion_7).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function $serializer_7() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.user.UserDashboardResponse', this, 1);
    tmp0_serialDesc.addElement_5pzumi_k$('posts', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).serialize_1cu5vz_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_8().$childSerializers_1;
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.posts == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, tmp2_cached[0].get_value_j01efc_k$(), value.posts);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_7).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_1cu5vz_k$(encoder, value instanceof UserDashboardResponse ? value : THROW_CCE());
  };
  protoOf($serializer_7).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp6_cached = Companion_getInstance_8().$childSerializers_1;
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, tmp6_cached[0].get_value_j01efc_k$(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, tmp6_cached[0].get_value_j01efc_k$(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_1xqz0n_k$(tmp0_desc);
    return UserDashboardResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_7).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_7).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_8().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].get_value_j01efc_k$())];
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_7();
    return $serializer_instance_6;
  }
  function UserDashboardResponse_init_$Init$(seen0, posts, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_6().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.posts = null;
    else
      $this.posts = posts;
    return $this;
  }
  function UserDashboardResponse_init_$Create$(seen0, posts, serializationConstructorMarker) {
    return UserDashboardResponse_init_$Init$(seen0, posts, serializationConstructorMarker, objectCreate(protoOf(UserDashboardResponse)));
  }
  function UserDashboardResponse() {
    Companion_getInstance_8();
    this.posts = null;
  }
  protoOf(UserDashboardResponse).set_posts_1cgnir_k$ = function (_set____db54di) {
    this.posts = _set____db54di;
  };
  protoOf(UserDashboardResponse).get_posts_iwzpuy_k$ = function () {
    return this.posts;
  };
  function _get_$childSerializers__r2zwns_4($this) {
    return $this.$childSerializers_1;
  }
  function UserFollowingResponse$Companion$$childSerializers$_anonymous__uj1vy5() {
    return new ReferenceArraySerializer(getKClass(Blog), $serializer_getInstance_12());
  }
  function Companion_8() {
    Companion_instance_8 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [null, lazy(tmp_0, UserFollowingResponse$Companion$$childSerializers$_anonymous__uj1vy5)];
  }
  protoOf(Companion_8).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_7();
  };
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function $serializer_8() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.user.UserFollowingResponse', this, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('total_blogs', true);
    tmp0_serialDesc.addElement_5pzumi_k$('blogs', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).serialize_8smw26_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_9().$childSerializers_1;
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.totalBlog == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, IntSerializer_getInstance(), value.totalBlog);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.blogs == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, tmp2_cached[1].get_value_j01efc_k$(), value.blogs);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_8).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_8smw26_k$(encoder, value instanceof UserFollowingResponse ? value : THROW_CCE());
  };
  protoOf($serializer_8).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp7_cached = Companion_getInstance_9().$childSerializers_1;
    if (tmp6_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, tmp7_cached[1].get_value_j01efc_k$(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, tmp7_cached[1].get_value_j01efc_k$(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.endStructure_1xqz0n_k$(tmp0_desc);
    return UserFollowingResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_8).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_8).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_9().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[1].get_value_j01efc_k$())];
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_8();
    return $serializer_instance_7;
  }
  function UserFollowingResponse_init_$Init$(seen0, totalBlog, blogs, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_7().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.totalBlog = null;
    else
      $this.totalBlog = totalBlog;
    if (0 === (seen0 & 2))
      $this.blogs = null;
    else
      $this.blogs = blogs;
    return $this;
  }
  function UserFollowingResponse_init_$Create$(seen0, totalBlog, blogs, serializationConstructorMarker) {
    return UserFollowingResponse_init_$Init$(seen0, totalBlog, blogs, serializationConstructorMarker, objectCreate(protoOf(UserFollowingResponse)));
  }
  function UserFollowingResponse() {
    Companion_getInstance_9();
    this.totalBlog = null;
    this.blogs = null;
  }
  protoOf(UserFollowingResponse).set_totalBlog_nhmw26_k$ = function (_set____db54di) {
    this.totalBlog = _set____db54di;
  };
  protoOf(UserFollowingResponse).get_totalBlog_11hrxf_k$ = function () {
    return this.totalBlog;
  };
  protoOf(UserFollowingResponse).set_blogs_msccfj_k$ = function (_set____db54di) {
    this.blogs = _set____db54di;
  };
  protoOf(UserFollowingResponse).get_blogs_ip8lbc_k$ = function () {
    return this.blogs;
  };
  function _get_$childSerializers__r2zwns_5($this) {
    return $this.$childSerializers_1;
  }
  function UserLikesResponse$Companion$$childSerializers$_anonymous__py82i0() {
    return new ReferenceArraySerializer(getKClass(Post), PostSerializer_getInstance());
  }
  function Companion_9() {
    Companion_instance_9 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [lazy(tmp_0, UserLikesResponse$Companion$$childSerializers$_anonymous__py82i0), null];
  }
  protoOf(Companion_9).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_8();
  };
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function $serializer_9() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.user.UserLikesResponse', this, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('liked_posts', true);
    tmp0_serialDesc.addElement_5pzumi_k$('liked_count', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).serialize_tkd4k9_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_10().$childSerializers_1;
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.likedPosts == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, tmp2_cached[0].get_value_j01efc_k$(), value.likedPosts);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.likedCount == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, IntSerializer_getInstance(), value.likedCount);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_9).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_tkd4k9_k$(encoder, value instanceof UserLikesResponse ? value : THROW_CCE());
  };
  protoOf($serializer_9).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp7_cached = Companion_getInstance_10().$childSerializers_1;
    if (tmp6_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, tmp7_cached[0].get_value_j01efc_k$(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, tmp7_cached[0].get_value_j01efc_k$(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.endStructure_1xqz0n_k$(tmp0_desc);
    return UserLikesResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_9).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_9).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_10().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].get_value_j01efc_k$()), get_nullable(IntSerializer_getInstance())];
  };
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_9();
    return $serializer_instance_8;
  }
  function UserLikesResponse_init_$Init$(seen0, likedPosts, likedCount, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_8().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.likedPosts = null;
    else
      $this.likedPosts = likedPosts;
    if (0 === (seen0 & 2))
      $this.likedCount = null;
    else
      $this.likedCount = likedCount;
    return $this;
  }
  function UserLikesResponse_init_$Create$(seen0, likedPosts, likedCount, serializationConstructorMarker) {
    return UserLikesResponse_init_$Init$(seen0, likedPosts, likedCount, serializationConstructorMarker, objectCreate(protoOf(UserLikesResponse)));
  }
  function UserLikesResponse() {
    Companion_getInstance_10();
    this.likedPosts = null;
    this.likedCount = null;
  }
  protoOf(UserLikesResponse).set_likedPosts_ewz3cw_k$ = function (_set____db54di) {
    this.likedPosts = _set____db54di;
  };
  protoOf(UserLikesResponse).get_likedPosts_v7a5w1_k$ = function () {
    return this.likedPosts;
  };
  protoOf(UserLikesResponse).set_likedCount_xje2f8_k$ = function (_set____db54di) {
    this.likedCount = _set____db54di;
  };
  protoOf(UserLikesResponse).get_likedCount_vefg9h_k$ = function () {
    return this.likedCount;
  };
  function Companion_10() {
    Companion_instance_10 = this;
  }
  protoOf(Companion_10).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_9();
  };
  var Companion_instance_10;
  function Companion_getInstance_11() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function $serializer_10() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.user.UserResponse', this, 1);
    tmp0_serialDesc.addElement_5pzumi_k$('user', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).serialize_3zn3en_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.user == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, $serializer_getInstance_32(), value.user);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_10).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_3zn3en_k$(encoder, value instanceof UserResponse ? value : THROW_CCE());
  };
  protoOf($serializer_10).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, $serializer_getInstance_32(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, $serializer_getInstance_32(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_1xqz0n_k$(tmp0_desc);
    return UserResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_10).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_10).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_32())];
  };
  var $serializer_instance_9;
  function $serializer_getInstance_9() {
    if ($serializer_instance_9 == null)
      new $serializer_10();
    return $serializer_instance_9;
  }
  function UserResponse_init_$Init$(seen0, user, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_9().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.user = null;
    else
      $this.user = user;
    return $this;
  }
  function UserResponse_init_$Create$(seen0, user, serializationConstructorMarker) {
    return UserResponse_init_$Init$(seen0, user, serializationConstructorMarker, objectCreate(protoOf(UserResponse)));
  }
  function UserResponse() {
    Companion_getInstance_11();
    this.user = null;
  }
  protoOf(UserResponse).set_user_h49fzv_k$ = function (_set____db54di) {
    this.user = _set____db54di;
  };
  protoOf(UserResponse).get_user_wovspg_k$ = function () {
    return this.user;
  };
  var PhotoType_SOURCE_instance;
  var PhotoType_FILE_instance;
  function values() {
    return [PhotoType_SOURCE_getInstance(), PhotoType_FILE_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'SOURCE':
        return PhotoType_SOURCE_getInstance();
      case 'FILE':
        return PhotoType_FILE_getInstance();
      default:
        PhotoType_initEntries();
        THROW_IAE('No enum constant work.socialhub.ktumblr.define.PhotoType.' + value);
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var PhotoType_entriesInitialized;
  function PhotoType_initEntries() {
    if (PhotoType_entriesInitialized)
      return Unit_getInstance();
    PhotoType_entriesInitialized = true;
    PhotoType_SOURCE_instance = new PhotoType('SOURCE', 0, 'source');
    PhotoType_FILE_instance = new PhotoType('FILE', 1, 'data');
  }
  var $ENTRIES;
  function PhotoType(name, ordinal, prefix) {
    Enum.call(this, name, ordinal);
    this.prefix = prefix;
  }
  protoOf(PhotoType).get_prefix_i78za3_k$ = function () {
    return this.prefix;
  };
  function PhotoType_SOURCE_getInstance() {
    PhotoType_initEntries();
    return PhotoType_SOURCE_instance;
  }
  function PhotoType_FILE_getInstance() {
    PhotoType_initEntries();
    return PhotoType_FILE_instance;
  }
  var PostType_TEXT_instance;
  var PostType_PHOTO_instance;
  var PostType_QUOTE_instance;
  var PostType_LINK_instance;
  var PostType_CHAT_instance;
  var PostType_AUDIO_instance;
  var PostType_VIDEO_instance;
  var PostType_ANSWER_instance;
  var PostType_POSTCARD_instance;
  var PostType_UNKNOWN_instance;
  function values_0() {
    return [PostType_TEXT_getInstance(), PostType_PHOTO_getInstance(), PostType_QUOTE_getInstance(), PostType_LINK_getInstance(), PostType_CHAT_getInstance(), PostType_AUDIO_getInstance(), PostType_VIDEO_getInstance(), PostType_ANSWER_getInstance(), PostType_POSTCARD_getInstance(), PostType_UNKNOWN_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'TEXT':
        return PostType_TEXT_getInstance();
      case 'PHOTO':
        return PostType_PHOTO_getInstance();
      case 'QUOTE':
        return PostType_QUOTE_getInstance();
      case 'LINK':
        return PostType_LINK_getInstance();
      case 'CHAT':
        return PostType_CHAT_getInstance();
      case 'AUDIO':
        return PostType_AUDIO_getInstance();
      case 'VIDEO':
        return PostType_VIDEO_getInstance();
      case 'ANSWER':
        return PostType_ANSWER_getInstance();
      case 'POSTCARD':
        return PostType_POSTCARD_getInstance();
      case 'UNKNOWN':
        return PostType_UNKNOWN_getInstance();
      default:
        PostType_initEntries();
        THROW_IAE('No enum constant work.socialhub.ktumblr.define.PostType.' + value);
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var PostType_entriesInitialized;
  function PostType_initEntries() {
    if (PostType_entriesInitialized)
      return Unit_getInstance();
    PostType_entriesInitialized = true;
    PostType_TEXT_instance = new PostType('TEXT', 0, 'text');
    PostType_PHOTO_instance = new PostType('PHOTO', 1, 'photo');
    PostType_QUOTE_instance = new PostType('QUOTE', 2, 'quote');
    PostType_LINK_instance = new PostType('LINK', 3, 'link');
    PostType_CHAT_instance = new PostType('CHAT', 4, 'chat');
    PostType_AUDIO_instance = new PostType('AUDIO', 5, 'audio');
    PostType_VIDEO_instance = new PostType('VIDEO', 6, 'video');
    PostType_ANSWER_instance = new PostType('ANSWER', 7, 'answer');
    PostType_POSTCARD_instance = new PostType('POSTCARD', 8, 'postcard');
    PostType_UNKNOWN_instance = new PostType('UNKNOWN', 9, 'unknown');
  }
  var $ENTRIES_0;
  function PostType(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value = value;
  }
  protoOf(PostType).get_value_j01efc_k$ = function () {
    return this.value;
  };
  function PostType_TEXT_getInstance() {
    PostType_initEntries();
    return PostType_TEXT_instance;
  }
  function PostType_PHOTO_getInstance() {
    PostType_initEntries();
    return PostType_PHOTO_instance;
  }
  function PostType_QUOTE_getInstance() {
    PostType_initEntries();
    return PostType_QUOTE_instance;
  }
  function PostType_LINK_getInstance() {
    PostType_initEntries();
    return PostType_LINK_instance;
  }
  function PostType_CHAT_getInstance() {
    PostType_initEntries();
    return PostType_CHAT_instance;
  }
  function PostType_AUDIO_getInstance() {
    PostType_initEntries();
    return PostType_AUDIO_instance;
  }
  function PostType_VIDEO_getInstance() {
    PostType_initEntries();
    return PostType_VIDEO_instance;
  }
  function PostType_ANSWER_getInstance() {
    PostType_initEntries();
    return PostType_ANSWER_instance;
  }
  function PostType_POSTCARD_getInstance() {
    PostType_initEntries();
    return PostType_POSTCARD_instance;
  }
  function PostType_UNKNOWN_getInstance() {
    PostType_initEntries();
    return PostType_UNKNOWN_instance;
  }
  function Companion_11() {
    Companion_instance_11 = this;
  }
  protoOf(Companion_11).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_10();
  };
  var Companion_instance_11;
  function Companion_getInstance_12() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function $serializer_11() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.Note', this, 9);
    tmp0_serialDesc.addElement_5pzumi_k$('type', true);
    tmp0_serialDesc.addElement_5pzumi_k$('timestamp', true);
    tmp0_serialDesc.addElement_5pzumi_k$('blog_name', true);
    tmp0_serialDesc.addElement_5pzumi_k$('blog_uuid', true);
    tmp0_serialDesc.addElement_5pzumi_k$('blog_url', true);
    tmp0_serialDesc.addElement_5pzumi_k$('followed', true);
    tmp0_serialDesc.addElement_5pzumi_k$('avatar_shape', true);
    tmp0_serialDesc.addElement_5pzumi_k$('post_id', true);
    tmp0_serialDesc.addElement_5pzumi_k$('reblog_parent_blog_name', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_11).serialize_hddrn4_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.type == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, StringSerializer_getInstance(), value.type);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.timestamp == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, IntSerializer_getInstance(), value.timestamp);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !(value.blogName == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, StringSerializer_getInstance(), value.blogName);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 3) ? true : !(value.blogUuid == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 3, StringSerializer_getInstance(), value.blogUuid);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 4) ? true : !(value.blogUrl == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 4, StringSerializer_getInstance(), value.blogUrl);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 5) ? true : !(value.isFollowed == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 5, BooleanSerializer_getInstance(), value.isFollowed);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 6) ? true : !(value.avatarShape == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 6, StringSerializer_getInstance(), value.avatarShape);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 7) ? true : !(value.postId == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 7, StringSerializer_getInstance(), value.postId);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 8) ? true : !(value.reblogParentBlogName == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 8, StringSerializer_getInstance(), value.reblogParentBlogName);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_11).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_hddrn4_k$(encoder, value instanceof Note ? value : THROW_CCE());
  };
  protoOf($serializer_11).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp13_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp13_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp13_input.endStructure_1xqz0n_k$(tmp0_desc);
    return Note_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  };
  protoOf($serializer_11).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_11).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_10;
  function $serializer_getInstance_10() {
    if ($serializer_instance_10 == null)
      new $serializer_11();
    return $serializer_instance_10;
  }
  function Note_init_$Init$(seen0, type, timestamp, blogName, blogUuid, blogUrl, isFollowed, avatarShape, postId, reblogParentBlogName, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_10().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.type = null;
    else
      $this.type = type;
    if (0 === (seen0 & 2))
      $this.timestamp = null;
    else
      $this.timestamp = timestamp;
    if (0 === (seen0 & 4))
      $this.blogName = null;
    else
      $this.blogName = blogName;
    if (0 === (seen0 & 8))
      $this.blogUuid = null;
    else
      $this.blogUuid = blogUuid;
    if (0 === (seen0 & 16))
      $this.blogUrl = null;
    else
      $this.blogUrl = blogUrl;
    if (0 === (seen0 & 32))
      $this.isFollowed = null;
    else
      $this.isFollowed = isFollowed;
    if (0 === (seen0 & 64))
      $this.avatarShape = null;
    else
      $this.avatarShape = avatarShape;
    if (0 === (seen0 & 128))
      $this.postId = null;
    else
      $this.postId = postId;
    if (0 === (seen0 & 256))
      $this.reblogParentBlogName = null;
    else
      $this.reblogParentBlogName = reblogParentBlogName;
    return $this;
  }
  function Note_init_$Create$(seen0, type, timestamp, blogName, blogUuid, blogUrl, isFollowed, avatarShape, postId, reblogParentBlogName, serializationConstructorMarker) {
    return Note_init_$Init$(seen0, type, timestamp, blogName, blogUuid, blogUrl, isFollowed, avatarShape, postId, reblogParentBlogName, serializationConstructorMarker, objectCreate(protoOf(Note)));
  }
  function Note() {
    Companion_getInstance_12();
    this.type = null;
    this.timestamp = null;
    this.blogName = null;
    this.blogUuid = null;
    this.blogUrl = null;
    this.isFollowed = null;
    this.avatarShape = null;
    this.postId = null;
    this.reblogParentBlogName = null;
  }
  protoOf(Note).get_type_wovaf7_k$ = function () {
    return this.type;
  };
  protoOf(Note).get_timestamp_9fccx9_k$ = function () {
    return this.timestamp;
  };
  protoOf(Note).get_blogName_sa6pee_k$ = function () {
    return this.blogName;
  };
  protoOf(Note).get_blogUuid_sabl1i_k$ = function () {
    return this.blogUuid;
  };
  protoOf(Note).get_blogUrl_wukck_k$ = function () {
    return this.blogUrl;
  };
  protoOf(Note).get_isFollowed_sauyhp_k$ = function () {
    return this.isFollowed;
  };
  protoOf(Note).get_avatarShape_k9xa3j_k$ = function () {
    return this.avatarShape;
  };
  protoOf(Note).get_postId_i5usx0_k$ = function () {
    return this.postId;
  };
  protoOf(Note).get_reblogParentBlogName_2qfmqz_k$ = function () {
    return this.reblogParentBlogName;
  };
  function Companion_12() {
    Companion_instance_12 = this;
  }
  protoOf(Companion_12).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_11();
  };
  var Companion_instance_12;
  function Companion_getInstance_13() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function $serializer_12() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.NoteAvatar', this, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('64', true);
    tmp0_serialDesc.addElement_5pzumi_k$('128', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_12).serialize_lbi1vt_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.size64 == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, StringSerializer_getInstance(), value.size64);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.size128 == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, StringSerializer_getInstance(), value.size128);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_12).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_lbi1vt_k$(encoder, value instanceof NoteAvatar ? value : THROW_CCE());
  };
  protoOf($serializer_12).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp6_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.endStructure_1xqz0n_k$(tmp0_desc);
    return NoteAvatar_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_12).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_12).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_11;
  function $serializer_getInstance_11() {
    if ($serializer_instance_11 == null)
      new $serializer_12();
    return $serializer_instance_11;
  }
  function NoteAvatar_init_$Init$(seen0, size64, size128, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_11().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.size64 = null;
    else
      $this.size64 = size64;
    if (0 === (seen0 & 2))
      $this.size128 = null;
    else
      $this.size128 = size128;
    return $this;
  }
  function NoteAvatar_init_$Create$(seen0, size64, size128, serializationConstructorMarker) {
    return NoteAvatar_init_$Init$(seen0, size64, size128, serializationConstructorMarker, objectCreate(protoOf(NoteAvatar)));
  }
  function NoteAvatar() {
    Companion_getInstance_13();
    this.size64 = null;
    this.size128 = null;
  }
  protoOf(NoteAvatar).set_size64_ds19wb_k$ = function (_set____db54di) {
    this.size64 = _set____db54di;
  };
  protoOf(NoteAvatar).get_size64_jht1u0_k$ = function () {
    return this.size64;
  };
  protoOf(NoteAvatar).set_size128_77bw0y_k$ = function (_set____db54di) {
    this.size128 = _set____db54di;
  };
  protoOf(NoteAvatar).get_size128_yy00nn_k$ = function () {
    return this.size128;
  };
  function Resource() {
  }
  function _get_$childSerializers__r2zwns_6($this) {
    return $this.$childSerializers_1;
  }
  function Blog$Companion$$childSerializers$_anonymous__tmgjug() {
    return new ReferenceArraySerializer(getKClass(BlogAvatar), $serializer_getInstance_13());
  }
  function Companion_13() {
    Companion_instance_13 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [null, null, null, null, null, null, null, null, null, null, lazy(tmp_0, Blog$Companion$$childSerializers$_anonymous__tmgjug), null, null, null, null, null, null, null];
  }
  protoOf(Companion_13).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_12();
  };
  var Companion_instance_13;
  function Companion_getInstance_14() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function $serializer_13() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.blog.Blog', this, 18);
    tmp0_serialDesc.addElement_5pzumi_k$('title', true);
    tmp0_serialDesc.addElement_5pzumi_k$('posts', true);
    tmp0_serialDesc.addElement_5pzumi_k$('name', true);
    tmp0_serialDesc.addElement_5pzumi_k$('updated', true);
    tmp0_serialDesc.addElement_5pzumi_k$('description', true);
    tmp0_serialDesc.addElement_5pzumi_k$('ask', true);
    tmp0_serialDesc.addElement_5pzumi_k$('ask_anon', true);
    tmp0_serialDesc.addElement_5pzumi_k$('followed', true);
    tmp0_serialDesc.addElement_5pzumi_k$('likes', true);
    tmp0_serialDesc.addElement_5pzumi_k$('is_blocked_from_primary', true);
    tmp0_serialDesc.addElement_5pzumi_k$('avatar', true);
    tmp0_serialDesc.addElement_5pzumi_k$('url', true);
    tmp0_serialDesc.addElement_5pzumi_k$('theme', true);
    tmp0_serialDesc.addElement_5pzumi_k$('admin', true);
    tmp0_serialDesc.addElement_5pzumi_k$('ask_page_title', true);
    tmp0_serialDesc.addElement_5pzumi_k$('is_nsfw', true);
    tmp0_serialDesc.addElement_5pzumi_k$('primary', true);
    tmp0_serialDesc.addElement_5pzumi_k$('followers', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_13).serialize_6m6nb1_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_14().$childSerializers_1;
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.title == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, StringSerializer_getInstance(), value.title);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.postCount === 0)) {
      tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 1, value.postCount);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !(value.name == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 3) ? true : !(value.updated == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 3, IntSerializer_getInstance(), value.updated);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 4) ? true : !(value.description == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 4, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 5) ? true : !(value.isAsk == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 5, BooleanSerializer_getInstance(), value.isAsk);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 6) ? true : !(value.isAskAnon == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 6, BooleanSerializer_getInstance(), value.isAskAnon);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 7) ? true : !(value.isFollowed == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 7, BooleanSerializer_getInstance(), value.isFollowed);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 8) ? true : !(value.likeCount == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 8, IntSerializer_getInstance(), value.likeCount);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 9) ? true : !(value.isBlockedFromPrimary == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 9, BooleanSerializer_getInstance(), value.isBlockedFromPrimary);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 10) ? true : !(value.avatar == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 10, tmp2_cached[10].get_value_j01efc_k$(), value.avatar);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 11) ? true : !(value.url == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 11, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 12) ? true : !(value.theme == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 12, $serializer_getInstance_14(), value.theme);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 13) ? true : !(value.isAdmin == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 13, BooleanSerializer_getInstance(), value.isAdmin);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 14) ? true : !(value.askPageTitle == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 14, StringSerializer_getInstance(), value.askPageTitle);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 15) ? true : !(value.isNSFW == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 15, BooleanSerializer_getInstance(), value.isNSFW);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 16) ? true : !(value.isPrimary == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 16, BooleanSerializer_getInstance(), value.isPrimary);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 17) ? true : !(value.followerCount == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 17, IntSerializer_getInstance(), value.followerCount);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_13).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_6m6nb1_k$(encoder, value instanceof Blog ? value : THROW_CCE());
  };
  protoOf($serializer_13).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp18_local14 = null;
    var tmp19_local15 = null;
    var tmp20_local16 = null;
    var tmp21_local17 = null;
    var tmp22_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp23_cached = Companion_getInstance_14().$childSerializers_1;
    if (tmp22_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp22_input.decodeIntElement_941u6a_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 10, tmp23_cached[10].get_value_j01efc_k$(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 12, $serializer_getInstance_14(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 13, BooleanSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 16, BooleanSerializer_getInstance(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 17, IntSerializer_getInstance(), tmp21_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp22_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp22_input.decodeIntElement_941u6a_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 10, tmp23_cached[10].get_value_j01efc_k$(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 12, $serializer_getInstance_14(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 13, BooleanSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 16, BooleanSerializer_getInstance(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp22_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 17, IntSerializer_getInstance(), tmp21_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp22_input.endStructure_1xqz0n_k$(tmp0_desc);
    return Blog_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, null);
  };
  protoOf($serializer_13).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_13).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_14().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[10].get_value_j01efc_k$()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_14()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  };
  var $serializer_instance_12;
  function $serializer_getInstance_12() {
    if ($serializer_instance_12 == null)
      new $serializer_13();
    return $serializer_instance_12;
  }
  function Blog_init_$Init$(seen0, title, postCount, name, updated, description, isAsk, isAskAnon, isFollowed, likeCount, isBlockedFromPrimary, avatar, url, theme, isAdmin, askPageTitle, isNSFW, isPrimary, followerCount, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_12().descriptor_1);
    }
    Resource.call($this);
    if (0 === (seen0 & 1))
      $this.title = null;
    else
      $this.title = title;
    if (0 === (seen0 & 2))
      $this.postCount = 0;
    else
      $this.postCount = postCount;
    if (0 === (seen0 & 4))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 8))
      $this.updated = null;
    else
      $this.updated = updated;
    if (0 === (seen0 & 16))
      $this.description = null;
    else
      $this.description = description;
    if (0 === (seen0 & 32))
      $this.isAsk = null;
    else
      $this.isAsk = isAsk;
    if (0 === (seen0 & 64))
      $this.isAskAnon = null;
    else
      $this.isAskAnon = isAskAnon;
    if (0 === (seen0 & 128))
      $this.isFollowed = null;
    else
      $this.isFollowed = isFollowed;
    if (0 === (seen0 & 256))
      $this.likeCount = null;
    else
      $this.likeCount = likeCount;
    if (0 === (seen0 & 512))
      $this.isBlockedFromPrimary = null;
    else
      $this.isBlockedFromPrimary = isBlockedFromPrimary;
    if (0 === (seen0 & 1024))
      $this.avatar = null;
    else
      $this.avatar = avatar;
    if (0 === (seen0 & 2048))
      $this.url = null;
    else
      $this.url = url;
    if (0 === (seen0 & 4096))
      $this.theme = null;
    else
      $this.theme = theme;
    if (0 === (seen0 & 8192))
      $this.isAdmin = null;
    else
      $this.isAdmin = isAdmin;
    if (0 === (seen0 & 16384))
      $this.askPageTitle = null;
    else
      $this.askPageTitle = askPageTitle;
    if (0 === (seen0 & 32768))
      $this.isNSFW = null;
    else
      $this.isNSFW = isNSFW;
    if (0 === (seen0 & 65536))
      $this.isPrimary = null;
    else
      $this.isPrimary = isPrimary;
    if (0 === (seen0 & 131072))
      $this.followerCount = null;
    else
      $this.followerCount = followerCount;
    return $this;
  }
  function Blog_init_$Create$(seen0, title, postCount, name, updated, description, isAsk, isAskAnon, isFollowed, likeCount, isBlockedFromPrimary, avatar, url, theme, isAdmin, askPageTitle, isNSFW, isPrimary, followerCount, serializationConstructorMarker) {
    return Blog_init_$Init$(seen0, title, postCount, name, updated, description, isAsk, isAskAnon, isFollowed, likeCount, isBlockedFromPrimary, avatar, url, theme, isAdmin, askPageTitle, isNSFW, isPrimary, followerCount, serializationConstructorMarker, objectCreate(protoOf(Blog)));
  }
  function Blog() {
    Companion_getInstance_14();
    Resource.call(this);
    this.title = null;
    this.postCount = 0;
    this.name = null;
    this.updated = null;
    this.description = null;
    this.isAsk = null;
    this.isAskAnon = null;
    this.isFollowed = null;
    this.likeCount = null;
    this.isBlockedFromPrimary = null;
    this.avatar = null;
    this.url = null;
    this.theme = null;
    this.isAdmin = null;
    this.askPageTitle = null;
    this.isNSFW = null;
    this.isPrimary = null;
    this.followerCount = null;
  }
  protoOf(Blog).set_title_ceyuu4_k$ = function (_set____db54di) {
    this.title = _set____db54di;
  };
  protoOf(Blog).get_title_iz32un_k$ = function () {
    return this.title;
  };
  protoOf(Blog).set_postCount_w5oep6_k$ = function (_set____db54di) {
    this.postCount = _set____db54di;
  };
  protoOf(Blog).get_postCount_ttjwpm_k$ = function () {
    return this.postCount;
  };
  protoOf(Blog).set_name_wkmnld_k$ = function (_set____db54di) {
    this.name = _set____db54di;
  };
  protoOf(Blog).get_name_woqyms_k$ = function () {
    return this.name;
  };
  protoOf(Blog).set_updated_sye20t_k$ = function (_set____db54di) {
    this.updated = _set____db54di;
  };
  protoOf(Blog).get_updated_2m0pim_k$ = function () {
    return this.updated;
  };
  protoOf(Blog).set_description_s1386w_k$ = function (_set____db54di) {
    this.description = _set____db54di;
  };
  protoOf(Blog).get_description_emjre5_k$ = function () {
    return this.description;
  };
  protoOf(Blog).set_isAsk_jebzim_k$ = function (_set____db54di) {
    this.isAsk = _set____db54di;
  };
  protoOf(Blog).get_isAsk_it6ojq_k$ = function () {
    return this.isAsk;
  };
  protoOf(Blog).set_isAskAnon_9bre76_k$ = function (_set____db54di) {
    this.isAskAnon = _set____db54di;
  };
  protoOf(Blog).get_isAskAnon_cvb3gu_k$ = function () {
    return this.isAskAnon;
  };
  protoOf(Blog).set_isFollowed_q26t6x_k$ = function (_set____db54di) {
    this.isFollowed = _set____db54di;
  };
  protoOf(Blog).get_isFollowed_sauyhp_k$ = function () {
    return this.isFollowed;
  };
  protoOf(Blog).get_likeCount_5dmwb3_k$ = function () {
    return this.likeCount;
  };
  protoOf(Blog).get_isBlockedFromPrimary_eqn1q9_k$ = function () {
    return this.isBlockedFromPrimary;
  };
  protoOf(Blog).get_avatar_b5pjz6_k$ = function () {
    return this.avatar;
  };
  protoOf(Blog).get_url_18iuii_k$ = function () {
    return this.url;
  };
  protoOf(Blog).get_theme_iz24rk_k$ = function () {
    return this.theme;
  };
  protoOf(Blog).get_isAdmin_z8hw0s_k$ = function () {
    return this.isAdmin;
  };
  protoOf(Blog).get_askPageTitle_pmqcdj_k$ = function () {
    return this.askPageTitle;
  };
  protoOf(Blog).get_isNSFW_ew2bgp_k$ = function () {
    return this.isNSFW;
  };
  protoOf(Blog).get_isPrimary_6a2drl_k$ = function () {
    return this.isPrimary;
  };
  protoOf(Blog).get_followerCount_vlwv3c_k$ = function () {
    return this.followerCount;
  };
  function Companion_14() {
    Companion_instance_14 = this;
  }
  protoOf(Companion_14).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_13();
  };
  var Companion_instance_14;
  function Companion_getInstance_15() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function $serializer_14() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.blog.BlogAvatar', this, 3);
    tmp0_serialDesc.addElement_5pzumi_k$('width', true);
    tmp0_serialDesc.addElement_5pzumi_k$('height', true);
    tmp0_serialDesc.addElement_5pzumi_k$('url', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_14).serialize_5lxnxg_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.width == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, IntSerializer_getInstance(), value.width);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.height == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, IntSerializer_getInstance(), value.height);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !(value.url == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, StringSerializer_getInstance(), value.url);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_14).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_5lxnxg_k$(encoder, value instanceof BlogAvatar ? value : THROW_CCE());
  };
  protoOf($serializer_14).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp7_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.endStructure_1xqz0n_k$(tmp0_desc);
    return BlogAvatar_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_14).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_14).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_13;
  function $serializer_getInstance_13() {
    if ($serializer_instance_13 == null)
      new $serializer_14();
    return $serializer_instance_13;
  }
  function BlogAvatar_init_$Init$(seen0, width, height, url, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_13().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.width = null;
    else
      $this.width = width;
    if (0 === (seen0 & 2))
      $this.height = null;
    else
      $this.height = height;
    if (0 === (seen0 & 4))
      $this.url = null;
    else
      $this.url = url;
    return $this;
  }
  function BlogAvatar_init_$Create$(seen0, width, height, url, serializationConstructorMarker) {
    return BlogAvatar_init_$Init$(seen0, width, height, url, serializationConstructorMarker, objectCreate(protoOf(BlogAvatar)));
  }
  function BlogAvatar() {
    Companion_getInstance_15();
    this.width = null;
    this.height = null;
    this.url = null;
  }
  protoOf(BlogAvatar).set_width_8vagwe_k$ = function (_set____db54di) {
    this.width = _set____db54di;
  };
  protoOf(BlogAvatar).get_width_j0q4yl_k$ = function () {
    return this.width;
  };
  protoOf(BlogAvatar).set_height_gznegn_k$ = function (_set____db54di) {
    this.height = _set____db54di;
  };
  protoOf(BlogAvatar).get_height_e7t92o_k$ = function () {
    return this.height;
  };
  protoOf(BlogAvatar).set_url_fvthdx_k$ = function (_set____db54di) {
    this.url = _set____db54di;
  };
  protoOf(BlogAvatar).get_url_18iuii_k$ = function () {
    return this.url;
  };
  function Companion_15() {
    Companion_instance_15 = this;
  }
  protoOf(Companion_15).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_14();
  };
  var Companion_instance_15;
  function Companion_getInstance_16() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function $serializer_15() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.blog.BlogTheme', this, 16);
    tmp0_serialDesc.addElement_5pzumi_k$('avatar_shape', true);
    tmp0_serialDesc.addElement_5pzumi_k$('background_color', true);
    tmp0_serialDesc.addElement_5pzumi_k$('body_font', true);
    tmp0_serialDesc.addElement_5pzumi_k$('header_image', true);
    tmp0_serialDesc.addElement_5pzumi_k$('header_image_focused', true);
    tmp0_serialDesc.addElement_5pzumi_k$('header_image_poster', true);
    tmp0_serialDesc.addElement_5pzumi_k$('header_image_scaled', true);
    tmp0_serialDesc.addElement_5pzumi_k$('header_stretch', true);
    tmp0_serialDesc.addElement_5pzumi_k$('link_color', true);
    tmp0_serialDesc.addElement_5pzumi_k$('show_avatar', true);
    tmp0_serialDesc.addElement_5pzumi_k$('show_description', true);
    tmp0_serialDesc.addElement_5pzumi_k$('show_header_image', true);
    tmp0_serialDesc.addElement_5pzumi_k$('show_title', true);
    tmp0_serialDesc.addElement_5pzumi_k$('title_color', true);
    tmp0_serialDesc.addElement_5pzumi_k$('title_font', true);
    tmp0_serialDesc.addElement_5pzumi_k$('title_font_weight', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_15).serialize_kvky7c_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.avatarShape == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, StringSerializer_getInstance(), value.avatarShape);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.backgroundColor == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, StringSerializer_getInstance(), value.backgroundColor);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !(value.bodyFont == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, StringSerializer_getInstance(), value.bodyFont);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 3) ? true : !(value.headerImage == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 3, StringSerializer_getInstance(), value.headerImage);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 4) ? true : !(value.headerImageFocused == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 4, StringSerializer_getInstance(), value.headerImageFocused);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 5) ? true : !(value.headerImagePoster == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 5, StringSerializer_getInstance(), value.headerImagePoster);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 6) ? true : !(value.headerImageScaled == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 6, StringSerializer_getInstance(), value.headerImageScaled);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 7) ? true : !(value.isHeaderStretch === false)) {
      tmp1_output.encodeBooleanElement_ydht7q_k$(tmp0_desc, 7, value.isHeaderStretch);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 8) ? true : !(value.linkColor == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 8, StringSerializer_getInstance(), value.linkColor);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 9) ? true : !(value.isShowAvatar === false)) {
      tmp1_output.encodeBooleanElement_ydht7q_k$(tmp0_desc, 9, value.isShowAvatar);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 10) ? true : !(value.isShowDescription === false)) {
      tmp1_output.encodeBooleanElement_ydht7q_k$(tmp0_desc, 10, value.isShowDescription);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 11) ? true : !(value.isShowHeaderImage === false)) {
      tmp1_output.encodeBooleanElement_ydht7q_k$(tmp0_desc, 11, value.isShowHeaderImage);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 12) ? true : !(value.isShowTitle === false)) {
      tmp1_output.encodeBooleanElement_ydht7q_k$(tmp0_desc, 12, value.isShowTitle);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 13) ? true : !(value.titleColor == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 13, StringSerializer_getInstance(), value.titleColor);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 14) ? true : !(value.titleFont == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 14, StringSerializer_getInstance(), value.titleFont);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 15) ? true : !(value.titleFontWeight == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 15, StringSerializer_getInstance(), value.titleFontWeight);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_15).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_kvky7c_k$(encoder, value instanceof BlogTheme ? value : THROW_CCE());
  };
  protoOf($serializer_15).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = false;
    var tmp12_local8 = null;
    var tmp13_local9 = false;
    var tmp14_local10 = false;
    var tmp15_local11 = false;
    var tmp16_local12 = false;
    var tmp17_local13 = null;
    var tmp18_local14 = null;
    var tmp19_local15 = null;
    var tmp20_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp20_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp20_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp20_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp20_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp20_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp20_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp20_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp20_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp20_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp20_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp20_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp20_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp20_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp20_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp20_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp20_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp20_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp20_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp20_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp20_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp20_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp20_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp20_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp20_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp20_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp20_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp20_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp20_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp20_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp20_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp20_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp20_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp20_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp20_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp20_input.endStructure_1xqz0n_k$(tmp0_desc);
    return BlogTheme_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, null);
  };
  protoOf($serializer_15).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_15).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_14;
  function $serializer_getInstance_14() {
    if ($serializer_instance_14 == null)
      new $serializer_15();
    return $serializer_instance_14;
  }
  function BlogTheme_init_$Init$(seen0, avatarShape, backgroundColor, bodyFont, headerImage, headerImageFocused, headerImagePoster, headerImageScaled, isHeaderStretch, linkColor, isShowAvatar, isShowDescription, isShowHeaderImage, isShowTitle, titleColor, titleFont, titleFontWeight, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_14().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.avatarShape = null;
    else
      $this.avatarShape = avatarShape;
    if (0 === (seen0 & 2))
      $this.backgroundColor = null;
    else
      $this.backgroundColor = backgroundColor;
    if (0 === (seen0 & 4))
      $this.bodyFont = null;
    else
      $this.bodyFont = bodyFont;
    if (0 === (seen0 & 8))
      $this.headerImage = null;
    else
      $this.headerImage = headerImage;
    if (0 === (seen0 & 16))
      $this.headerImageFocused = null;
    else
      $this.headerImageFocused = headerImageFocused;
    if (0 === (seen0 & 32))
      $this.headerImagePoster = null;
    else
      $this.headerImagePoster = headerImagePoster;
    if (0 === (seen0 & 64))
      $this.headerImageScaled = null;
    else
      $this.headerImageScaled = headerImageScaled;
    if (0 === (seen0 & 128))
      $this.isHeaderStretch = false;
    else
      $this.isHeaderStretch = isHeaderStretch;
    if (0 === (seen0 & 256))
      $this.linkColor = null;
    else
      $this.linkColor = linkColor;
    if (0 === (seen0 & 512))
      $this.isShowAvatar = false;
    else
      $this.isShowAvatar = isShowAvatar;
    if (0 === (seen0 & 1024))
      $this.isShowDescription = false;
    else
      $this.isShowDescription = isShowDescription;
    if (0 === (seen0 & 2048))
      $this.isShowHeaderImage = false;
    else
      $this.isShowHeaderImage = isShowHeaderImage;
    if (0 === (seen0 & 4096))
      $this.isShowTitle = false;
    else
      $this.isShowTitle = isShowTitle;
    if (0 === (seen0 & 8192))
      $this.titleColor = null;
    else
      $this.titleColor = titleColor;
    if (0 === (seen0 & 16384))
      $this.titleFont = null;
    else
      $this.titleFont = titleFont;
    if (0 === (seen0 & 32768))
      $this.titleFontWeight = null;
    else
      $this.titleFontWeight = titleFontWeight;
    return $this;
  }
  function BlogTheme_init_$Create$(seen0, avatarShape, backgroundColor, bodyFont, headerImage, headerImageFocused, headerImagePoster, headerImageScaled, isHeaderStretch, linkColor, isShowAvatar, isShowDescription, isShowHeaderImage, isShowTitle, titleColor, titleFont, titleFontWeight, serializationConstructorMarker) {
    return BlogTheme_init_$Init$(seen0, avatarShape, backgroundColor, bodyFont, headerImage, headerImageFocused, headerImagePoster, headerImageScaled, isHeaderStretch, linkColor, isShowAvatar, isShowDescription, isShowHeaderImage, isShowTitle, titleColor, titleFont, titleFontWeight, serializationConstructorMarker, objectCreate(protoOf(BlogTheme)));
  }
  function BlogTheme() {
    Companion_getInstance_16();
    this.avatarShape = null;
    this.backgroundColor = null;
    this.bodyFont = null;
    this.headerImage = null;
    this.headerImageFocused = null;
    this.headerImagePoster = null;
    this.headerImageScaled = null;
    this.isHeaderStretch = false;
    this.linkColor = null;
    this.isShowAvatar = false;
    this.isShowDescription = false;
    this.isShowHeaderImage = false;
    this.isShowTitle = false;
    this.titleColor = null;
    this.titleFont = null;
    this.titleFontWeight = null;
  }
  protoOf(BlogTheme).set_avatarShape_8vg2uk_k$ = function (_set____db54di) {
    this.avatarShape = _set____db54di;
  };
  protoOf(BlogTheme).get_avatarShape_k9xa3j_k$ = function () {
    return this.avatarShape;
  };
  protoOf(BlogTheme).set_backgroundColor_v9ie8x_k$ = function (_set____db54di) {
    this.backgroundColor = _set____db54di;
  };
  protoOf(BlogTheme).get_backgroundColor_a0bggk_k$ = function () {
    return this.backgroundColor;
  };
  protoOf(BlogTheme).set_bodyFont_igx7uf_k$ = function (_set____db54di) {
    this.bodyFont = _set____db54di;
  };
  protoOf(BlogTheme).get_bodyFont_3ngv1i_k$ = function () {
    return this.bodyFont;
  };
  protoOf(BlogTheme).set_headerImage_lar9ly_k$ = function (_set____db54di) {
    this.headerImage = _set____db54di;
  };
  protoOf(BlogTheme).get_headerImage_x4zm91_k$ = function () {
    return this.headerImage;
  };
  protoOf(BlogTheme).set_headerImageFocused_xf6c9d_k$ = function (_set____db54di) {
    this.headerImageFocused = _set____db54di;
  };
  protoOf(BlogTheme).get_headerImageFocused_2h0sz2_k$ = function () {
    return this.headerImageFocused;
  };
  protoOf(BlogTheme).set_headerImagePoster_zhixix_k$ = function (_set____db54di) {
    this.headerImagePoster = _set____db54di;
  };
  protoOf(BlogTheme).get_headerImagePoster_2ddh5e_k$ = function () {
    return this.headerImagePoster;
  };
  protoOf(BlogTheme).set_headerImageScaled_dvdfvw_k$ = function (_set____db54di) {
    this.headerImageScaled = _set____db54di;
  };
  protoOf(BlogTheme).get_headerImageScaled_3ll5i7_k$ = function () {
    return this.headerImageScaled;
  };
  protoOf(BlogTheme).set_isHeaderStretch_8yp0po_k$ = function (_set____db54di) {
    this.isHeaderStretch = _set____db54di;
  };
  protoOf(BlogTheme).get_isHeaderStretch_wm9ikb_k$ = function () {
    return this.isHeaderStretch;
  };
  protoOf(BlogTheme).get_linkColor_is0ra8_k$ = function () {
    return this.linkColor;
  };
  protoOf(BlogTheme).get_isShowAvatar_q4lh6f_k$ = function () {
    return this.isShowAvatar;
  };
  protoOf(BlogTheme).get_isShowDescription_8ju35g_k$ = function () {
    return this.isShowDescription;
  };
  protoOf(BlogTheme).get_isShowHeaderImage_vterhe_k$ = function () {
    return this.isShowHeaderImage;
  };
  protoOf(BlogTheme).get_isShowTitle_1qdf54_k$ = function () {
    return this.isShowTitle;
  };
  protoOf(BlogTheme).get_titleColor_l3kad0_k$ = function () {
    return this.titleColor;
  };
  protoOf(BlogTheme).get_titleFont_qtam02_k$ = function () {
    return this.titleFont;
  };
  protoOf(BlogTheme).get_titleFontWeight_jh2wc6_k$ = function () {
    return this.titleFontWeight;
  };
  function Companion_16() {
    Companion_instance_16 = this;
  }
  protoOf(Companion_16).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_15();
  };
  var Companion_instance_16;
  function Companion_getInstance_17() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function $serializer_16() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.blog.Reblog', this, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('comment', true);
    tmp0_serialDesc.addElement_5pzumi_k$('tree_html', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_16).serialize_8cqffm_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.comment == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, StringSerializer_getInstance(), value.comment);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.treeHtml == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, StringSerializer_getInstance(), value.treeHtml);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_16).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_8cqffm_k$(encoder, value instanceof Reblog ? value : THROW_CCE());
  };
  protoOf($serializer_16).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp6_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.endStructure_1xqz0n_k$(tmp0_desc);
    return Reblog_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_16).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_16).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_15;
  function $serializer_getInstance_15() {
    if ($serializer_instance_15 == null)
      new $serializer_16();
    return $serializer_instance_15;
  }
  function Reblog_init_$Init$(seen0, comment, treeHtml, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_15().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.comment = null;
    else
      $this.comment = comment;
    if (0 === (seen0 & 2))
      $this.treeHtml = null;
    else
      $this.treeHtml = treeHtml;
    return $this;
  }
  function Reblog_init_$Create$(seen0, comment, treeHtml, serializationConstructorMarker) {
    return Reblog_init_$Init$(seen0, comment, treeHtml, serializationConstructorMarker, objectCreate(protoOf(Reblog)));
  }
  function Reblog() {
    Companion_getInstance_17();
    this.comment = null;
    this.treeHtml = null;
  }
  protoOf(Reblog).set_comment_aa11d7_k$ = function (_set____db54di) {
    this.comment = _set____db54di;
  };
  protoOf(Reblog).get_comment_gzea9i_k$ = function () {
    return this.comment;
  };
  protoOf(Reblog).set_treeHtml_vh55qn_k$ = function (_set____db54di) {
    this.treeHtml = _set____db54di;
  };
  protoOf(Reblog).get_treeHtml_8vuswe_k$ = function () {
    return this.treeHtml;
  };
  function Companion_17() {
    Companion_instance_17 = this;
  }
  protoOf(Companion_17).serializer_9w0wvi_k$ = function () {
    return PostSerializer_getInstance();
  };
  var Companion_instance_17;
  function Companion_getInstance_18() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function Post() {
    Companion_getInstance_18();
  }
  protoOf(Post).get_asLegacyTextPost_cezf1t_k$ = function () {
    return this instanceof LegacyTextPost ? this : null;
  };
  protoOf(Post).get_asLegacyPhotoPost_x42bxq_k$ = function () {
    return this instanceof LegacyPhotoPost ? this : null;
  };
  protoOf(Post).get_asLegacyQuotePost_mm094o_k$ = function () {
    return this instanceof LegacyQuotePost ? this : null;
  };
  protoOf(Post).get_asLegacyLinkPost_m9lhvm_k$ = function () {
    return this instanceof LegacyLinkPost ? this : null;
  };
  protoOf(Post).get_asLegacyVideoPost_1ukk7d_k$ = function () {
    return this instanceof LegacyVideoPost ? this : null;
  };
  protoOf(Post).get_asLegacyAnswerPost_egzita_k$ = function () {
    return this instanceof LegacyAnswerPost ? this : null;
  };
  function _get_$childSerializers__r2zwns_7($this) {
    return $this.$childSerializers_1;
  }
  function LegacyAnswerPost$Companion$$childSerializers$_anonymous__8d95a5() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), StringSerializer_getInstance());
  }
  function LegacyAnswerPost$Companion$$childSerializers$_anonymous__8d95a5_0() {
    return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_10());
  }
  function LegacyAnswerPost$Companion$$childSerializers$_anonymous__8d95a5_1() {
    return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_30());
  }
  function Companion_18() {
    Companion_instance_18 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyAnswerPost$Companion$$childSerializers$_anonymous__8d95a5);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyAnswerPost$Companion$$childSerializers$_anonymous__8d95a5_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyAnswerPost$Companion$$childSerializers$_anonymous__8d95a5_1), null, null, null, null];
  }
  protoOf(Companion_18).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_16();
  };
  var Companion_instance_18;
  function Companion_getInstance_19() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function $serializer_17() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyAnswerPost', this, 44);
    tmp0_serialDesc.addElement_5pzumi_k$('blog_name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('id_string', false);
    tmp0_serialDesc.addElement_5pzumi_k$('genesis_post_id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('post_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('parent_post_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('type', false);
    tmp0_serialDesc.addElement_5pzumi_k$('timestamp', false);
    tmp0_serialDesc.addElement_5pzumi_k$('date', false);
    tmp0_serialDesc.addElement_5pzumi_k$('format', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblog_key', false);
    tmp0_serialDesc.addElement_5pzumi_k$('tags', false);
    tmp0_serialDesc.addElement_5pzumi_k$('bookmarklet', false);
    tmp0_serialDesc.addElement_5pzumi_k$('mobile', false);
    tmp0_serialDesc.addElement_5pzumi_k$('source_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('source_title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('liked', false);
    tmp0_serialDesc.addElement_5pzumi_k$('state', false);
    tmp0_serialDesc.addElement_5pzumi_k$('title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('body', false);
    tmp0_serialDesc.addElement_5pzumi_k$('note_count', false);
    tmp0_serialDesc.addElement_5pzumi_k$('summary', false);
    tmp0_serialDesc.addElement_5pzumi_k$('slug', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_uuid', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_can_message', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_following', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_uuid', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_can_message', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_following', false);
    tmp0_serialDesc.addElement_5pzumi_k$('notes', false);
    tmp0_serialDesc.addElement_5pzumi_k$('blog', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblog', false);
    tmp0_serialDesc.addElement_5pzumi_k$('trail', false);
    tmp0_serialDesc.addElement_5pzumi_k$('asking_name', true);
    tmp0_serialDesc.addElement_5pzumi_k$('asking_url', true);
    tmp0_serialDesc.addElement_5pzumi_k$('question', true);
    tmp0_serialDesc.addElement_5pzumi_k$('answer', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_17).serialize_e97lzf_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_19().$childSerializers_1;
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, StringSerializer_getInstance(), value.blogName_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, StringSerializer_getInstance(), value.idString_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, StringSerializer_getInstance(), value.genesisPostId_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 3, StringSerializer_getInstance(), value.postUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 4, StringSerializer_getInstance(), value.parentPostUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 5, StringSerializer_getInstance(), value.type_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 6, IntSerializer_getInstance(), value.timestamp_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 7, StringSerializer_getInstance(), value.date_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 8, StringSerializer_getInstance(), value.format_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 9, StringSerializer_getInstance(), value.reblogKey_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 10, tmp2_cached[10].get_value_j01efc_k$(), value.tags_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 11, BooleanSerializer_getInstance(), value.isBookmarklet_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 12, BooleanSerializer_getInstance(), value.isMobile_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 13, StringSerializer_getInstance(), value.sourceUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 14, StringSerializer_getInstance(), value.sourceTitle_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 15, BooleanSerializer_getInstance(), value.isLiked_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 16, StringSerializer_getInstance(), value.state_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 17, StringSerializer_getInstance(), value.title_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 18, StringSerializer_getInstance(), value.body_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 19, IntSerializer_getInstance(), value.noteCount_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 20, StringSerializer_getInstance(), value.summary_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 21, StringSerializer_getInstance(), value.slug_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 22, StringSerializer_getInstance(), value.rebloggedFromId_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 23, StringSerializer_getInstance(), value.rebloggedFromUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 24, StringSerializer_getInstance(), value.rebloggedFromName_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 25, StringSerializer_getInstance(), value.rebloggedFromTitle_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 26, StringSerializer_getInstance(), value.rebloggedFromUuid_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 27, BooleanSerializer_getInstance(), value.rebloggedFromCanMessage_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 28, BooleanSerializer_getInstance(), value.rebloggedFromFollowing_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 29, StringSerializer_getInstance(), value.rebloggedRootId_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 30, StringSerializer_getInstance(), value.rebloggedRootUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 31, StringSerializer_getInstance(), value.rebloggedRootName_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 32, StringSerializer_getInstance(), value.rebloggedRootTitle_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 33, StringSerializer_getInstance(), value.rebloggedRootUuid_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 34, BooleanSerializer_getInstance(), value.rebloggedRootCanMessage_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 35, BooleanSerializer_getInstance(), value.rebloggedRootFollowing_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 36, tmp2_cached[36].get_value_j01efc_k$(), value.notes_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 37, $serializer_getInstance_12(), value.blog_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 38, $serializer_getInstance_15(), value.reblog_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 39, tmp2_cached[39].get_value_j01efc_k$(), value.trail_1);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 40) ? true : !(value.askingName == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 40, StringSerializer_getInstance(), value.askingName);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 41) ? true : !(value.askingUrl == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 41, StringSerializer_getInstance(), value.askingUrl);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 42) ? true : !(value.question == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 42, StringSerializer_getInstance(), value.question);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 43) ? true : !(value.answer == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 43, StringSerializer_getInstance(), value.answer);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_17).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_e97lzf_k$(encoder, value instanceof LegacyAnswerPost ? value : THROW_CCE());
  };
  protoOf($serializer_17).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_bitMask1 = 0;
    var tmp5_local0 = null;
    var tmp6_local1 = null;
    var tmp7_local2 = null;
    var tmp8_local3 = null;
    var tmp9_local4 = null;
    var tmp10_local5 = null;
    var tmp11_local6 = null;
    var tmp12_local7 = null;
    var tmp13_local8 = null;
    var tmp14_local9 = null;
    var tmp15_local10 = null;
    var tmp16_local11 = null;
    var tmp17_local12 = null;
    var tmp18_local13 = null;
    var tmp19_local14 = null;
    var tmp20_local15 = null;
    var tmp21_local16 = null;
    var tmp22_local17 = null;
    var tmp23_local18 = null;
    var tmp24_local19 = null;
    var tmp25_local20 = null;
    var tmp26_local21 = null;
    var tmp27_local22 = null;
    var tmp28_local23 = null;
    var tmp29_local24 = null;
    var tmp30_local25 = null;
    var tmp31_local26 = null;
    var tmp32_local27 = null;
    var tmp33_local28 = null;
    var tmp34_local29 = null;
    var tmp35_local30 = null;
    var tmp36_local31 = null;
    var tmp37_local32 = null;
    var tmp38_local33 = null;
    var tmp39_local34 = null;
    var tmp40_local35 = null;
    var tmp41_local36 = null;
    var tmp42_local37 = null;
    var tmp43_local38 = null;
    var tmp44_local39 = null;
    var tmp45_local40 = null;
    var tmp46_local41 = null;
    var tmp47_local42 = null;
    var tmp48_local43 = null;
    var tmp49_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp50_cached = Companion_getInstance_19().$childSerializers_1;
    if (tmp49_input.decodeSequentially_xlblqy_k$()) {
      tmp5_local0 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 10, tmp50_cached[10].get_value_j01efc_k$(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 36, tmp50_cached[36].get_value_j01efc_k$(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 39, tmp50_cached[39].get_value_j01efc_k$(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp47_local42 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp48_local43 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp49_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 10, tmp50_cached[10].get_value_j01efc_k$(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 36, tmp50_cached[36].get_value_j01efc_k$(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 39, tmp50_cached[39].get_value_j01efc_k$(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp47_local42 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp48_local43 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp49_input.endStructure_1xqz0n_k$(tmp0_desc);
    return LegacyAnswerPost_init_$Create$(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, tmp47_local42, tmp48_local43, null);
  };
  protoOf($serializer_17).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_17).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_19().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].get_value_j01efc_k$()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].get_value_j01efc_k$()), get_nullable($serializer_getInstance_12()), get_nullable($serializer_getInstance_15()), get_nullable(tmp0_cached[39].get_value_j01efc_k$()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_16;
  function $serializer_getInstance_16() {
    if ($serializer_instance_16 == null)
      new $serializer_17();
    return $serializer_instance_16;
  }
  function LegacyAnswerPost_init_$Init$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, askingName, askingUrl, question, answer, serializationConstructorMarker, $this) {
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_16().descriptor_1);
    }
    Post.call($this);
    $this.blogName_1 = blogName;
    $this.idString_1 = idString;
    $this.genesisPostId_1 = genesisPostId;
    $this.postUrl_1 = postUrl;
    $this.parentPostUrl_1 = parentPostUrl;
    $this.type_1 = type;
    $this.timestamp_1 = timestamp;
    $this.date_1 = date;
    $this.format_1 = format;
    $this.reblogKey_1 = reblogKey;
    $this.tags_1 = tags;
    $this.isBookmarklet_1 = isBookmarklet;
    $this.isMobile_1 = isMobile;
    $this.sourceUrl_1 = sourceUrl;
    $this.sourceTitle_1 = sourceTitle;
    $this.isLiked_1 = isLiked;
    $this.state_1 = state;
    $this.title_1 = title;
    $this.body_1 = body;
    $this.noteCount_1 = noteCount;
    $this.summary_1 = summary;
    $this.slug_1 = slug;
    $this.rebloggedFromId_1 = rebloggedFromId;
    $this.rebloggedFromUrl_1 = rebloggedFromUrl;
    $this.rebloggedFromName_1 = rebloggedFromName;
    $this.rebloggedFromTitle_1 = rebloggedFromTitle;
    $this.rebloggedFromUuid_1 = rebloggedFromUuid;
    $this.rebloggedFromCanMessage_1 = rebloggedFromCanMessage;
    $this.rebloggedFromFollowing_1 = rebloggedFromFollowing;
    $this.rebloggedRootId_1 = rebloggedRootId;
    $this.rebloggedRootUrl_1 = rebloggedRootUrl;
    $this.rebloggedRootName_1 = rebloggedRootName;
    $this.rebloggedRootTitle_1 = rebloggedRootTitle;
    $this.rebloggedRootUuid_1 = rebloggedRootUuid;
    $this.rebloggedRootCanMessage_1 = rebloggedRootCanMessage;
    $this.rebloggedRootFollowing_1 = rebloggedRootFollowing;
    $this.notes_1 = notes;
    $this.blog_1 = blog;
    $this.reblog_1 = reblog;
    $this.trail_1 = trail;
    if (0 === (seen1 & 256))
      $this.askingName = null;
    else
      $this.askingName = askingName;
    if (0 === (seen1 & 512))
      $this.askingUrl = null;
    else
      $this.askingUrl = askingUrl;
    if (0 === (seen1 & 1024))
      $this.question = null;
    else
      $this.question = question;
    if (0 === (seen1 & 2048))
      $this.answer = null;
    else
      $this.answer = answer;
    return $this;
  }
  function LegacyAnswerPost_init_$Create$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, askingName, askingUrl, question, answer, serializationConstructorMarker) {
    return LegacyAnswerPost_init_$Init$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, askingName, askingUrl, question, answer, serializationConstructorMarker, objectCreate(protoOf(LegacyAnswerPost)));
  }
  function LegacyAnswerPost(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_19();
    Post.call(this);
    this.blogName_1 = blogName;
    this.idString_1 = idString;
    this.genesisPostId_1 = genesisPostId;
    this.postUrl_1 = postUrl;
    this.parentPostUrl_1 = parentPostUrl;
    this.type_1 = type;
    this.timestamp_1 = timestamp;
    this.date_1 = date;
    this.format_1 = format;
    this.reblogKey_1 = reblogKey;
    this.tags_1 = tags;
    this.isBookmarklet_1 = isBookmarklet;
    this.isMobile_1 = isMobile;
    this.sourceUrl_1 = sourceUrl;
    this.sourceTitle_1 = sourceTitle;
    this.isLiked_1 = isLiked;
    this.state_1 = state;
    this.title_1 = title;
    this.body_1 = body;
    this.noteCount_1 = noteCount;
    this.summary_1 = summary;
    this.slug_1 = slug;
    this.rebloggedFromId_1 = rebloggedFromId;
    this.rebloggedFromUrl_1 = rebloggedFromUrl;
    this.rebloggedFromName_1 = rebloggedFromName;
    this.rebloggedFromTitle_1 = rebloggedFromTitle;
    this.rebloggedFromUuid_1 = rebloggedFromUuid;
    this.rebloggedFromCanMessage_1 = rebloggedFromCanMessage;
    this.rebloggedFromFollowing_1 = rebloggedFromFollowing;
    this.rebloggedRootId_1 = rebloggedRootId;
    this.rebloggedRootUrl_1 = rebloggedRootUrl;
    this.rebloggedRootName_1 = rebloggedRootName;
    this.rebloggedRootTitle_1 = rebloggedRootTitle;
    this.rebloggedRootUuid_1 = rebloggedRootUuid;
    this.rebloggedRootCanMessage_1 = rebloggedRootCanMessage;
    this.rebloggedRootFollowing_1 = rebloggedRootFollowing;
    this.notes_1 = notes;
    this.blog_1 = blog;
    this.reblog_1 = reblog;
    this.trail_1 = trail;
    this.askingName = null;
    this.askingUrl = null;
    this.question = null;
    this.answer = null;
  }
  protoOf(LegacyAnswerPost).set_blogName_4hbv7x_k$ = function (_set____db54di) {
    this.blogName_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_blogName_sa6pee_k$ = function () {
    return this.blogName_1;
  };
  protoOf(LegacyAnswerPost).set_idString_uk2vzm_k$ = function (_set____db54di) {
    this.idString_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_idString_sjsr85_k$ = function () {
    return this.idString_1;
  };
  protoOf(LegacyAnswerPost).set_genesisPostId_z3sus1_k$ = function (_set____db54di) {
    this.genesisPostId_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_genesisPostId_95cwau_k$ = function () {
    return this.genesisPostId_1;
  };
  protoOf(LegacyAnswerPost).set_postUrl_etq64l_k$ = function (_set____db54di) {
    this.postUrl_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_postUrl_57da2i_k$ = function () {
    return this.postUrl_1;
  };
  protoOf(LegacyAnswerPost).set_parentPostUrl_9ua7l_k$ = function (_set____db54di) {
    this.parentPostUrl_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_parentPostUrl_e3yik_k$ = function () {
    return this.parentPostUrl_1;
  };
  protoOf(LegacyAnswerPost).set_type_4507og_k$ = function (_set____db54di) {
    this.type_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(LegacyAnswerPost).set_timestamp_cgo46a_k$ = function (_set____db54di) {
    this.timestamp_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_timestamp_9fccx9_k$ = function () {
    return this.timestamp_1;
  };
  protoOf(LegacyAnswerPost).set_date_y25dgs_k$ = function (_set____db54di) {
    this.date_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_date_wokkxj_k$ = function () {
    return this.date_1;
  };
  protoOf(LegacyAnswerPost).set_format_yd74t9_k$ = function (_set____db54di) {
    this.format_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_format_dfdtds_k$ = function () {
    return this.format_1;
  };
  protoOf(LegacyAnswerPost).set_reblogKey_q2gl9m_k$ = function (_set____db54di) {
    this.reblogKey_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_reblogKey_8swysh_k$ = function () {
    return this.reblogKey_1;
  };
  protoOf(LegacyAnswerPost).set_tags_7racvz_k$ = function (_set____db54di) {
    this.tags_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_tags_wousf6_k$ = function () {
    return this.tags_1;
  };
  protoOf(LegacyAnswerPost).set_isBookmarklet_e6r6jm_k$ = function (_set____db54di) {
    this.isBookmarklet_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_isBookmarklet_xsfl2q_k$ = function () {
    return this.isBookmarklet_1;
  };
  protoOf(LegacyAnswerPost).set_isMobile_ymy749_k$ = function (_set____db54di) {
    this.isMobile_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_isMobile_wp3xh1_k$ = function () {
    return this.isMobile_1;
  };
  protoOf(LegacyAnswerPost).set_sourceUrl_nz40kg_k$ = function (_set____db54di) {
    this.sourceUrl_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_sourceUrl_jko7yt_k$ = function () {
    return this.sourceUrl_1;
  };
  protoOf(LegacyAnswerPost).set_sourceTitle_6ljuq1_k$ = function (_set____db54di) {
    this.sourceTitle_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_sourceTitle_cbkkgk_k$ = function () {
    return this.sourceTitle_1;
  };
  protoOf(LegacyAnswerPost).set_isLiked_vjtt2e_k$ = function (_set____db54di) {
    this.isLiked_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_isLiked_zemrwa_k$ = function () {
    return this.isLiked_1;
  };
  protoOf(LegacyAnswerPost).set_state_836lgd_k$ = function (_set____db54di) {
    this.state_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  protoOf(LegacyAnswerPost).set_title_ceyuu4_k$ = function (_set____db54di) {
    this.title_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(LegacyAnswerPost).set_body_d8bq7s_k$ = function (_set____db54di) {
    this.body_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  protoOf(LegacyAnswerPost).set_noteCount_gc35kr_k$ = function (_set____db54di) {
    this.noteCount_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_noteCount_xhpyss_k$ = function () {
    return this.noteCount_1;
  };
  protoOf(LegacyAnswerPost).set_summary_elnle6_k$ = function (_set____db54di) {
    this.summary_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_summary_tgfqkj_k$ = function () {
    return this.summary_1;
  };
  protoOf(LegacyAnswerPost).set_slug_iclwbz_k$ = function (_set____db54di) {
    this.slug_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_slug_woudx0_k$ = function () {
    return this.slug_1;
  };
  protoOf(LegacyAnswerPost).set_rebloggedFromId_7fi68u_k$ = function (_set____db54di) {
    this.rebloggedFromId_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_rebloggedFromId_8qykib_k$ = function () {
    return this.rebloggedFromId_1;
  };
  protoOf(LegacyAnswerPost).set_rebloggedFromUrl_5gzcjq_k$ = function (_set____db54di) {
    this.rebloggedFromUrl_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_rebloggedFromUrl_cwotgd_k$ = function () {
    return this.rebloggedFromUrl_1;
  };
  protoOf(LegacyAnswerPost).set_rebloggedFromName_70jpu_k$ = function (_set____db54di) {
    this.rebloggedFromName_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_rebloggedFromName_q1fs6b_k$ = function () {
    return this.rebloggedFromName_1;
  };
  protoOf(LegacyAnswerPost).set_rebloggedFromTitle_lpffbx_k$ = function (_set____db54di) {
    this.rebloggedFromTitle_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_rebloggedFromTitle_pswmt6_k$ = function () {
    return this.rebloggedFromTitle_1;
  };
  protoOf(LegacyAnswerPost).set_rebloggedFromUuid_y1lhby_k$ = function (_set____db54di) {
    this.rebloggedFromUuid_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_rebloggedFromUuid_q1awj7_k$ = function () {
    return this.rebloggedFromUuid_1;
  };
  protoOf(LegacyAnswerPost).set_rebloggedFromCanMessage_xd73vv_k$ = function (_set____db54di) {
    this.rebloggedFromCanMessage_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_rebloggedFromCanMessage_ik49xz_k$ = function () {
    return this.rebloggedFromCanMessage_1;
  };
  protoOf(LegacyAnswerPost).set_rebloggedFromFollowing_134hoz_k$ = function (_set____db54di) {
    this.rebloggedFromFollowing_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_rebloggedFromFollowing_60tgsh_k$ = function () {
    return this.rebloggedFromFollowing_1;
  };
  protoOf(LegacyAnswerPost).set_rebloggedRootId_dkbyli_k$ = function (_set____db54di) {
    this.rebloggedRootId_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_rebloggedRootId_342cd7_k$ = function () {
    return this.rebloggedRootId_1;
  };
  protoOf(LegacyAnswerPost).set_rebloggedRootUrl_hgpegy_k$ = function (_set____db54di) {
    this.rebloggedRootUrl_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_rebloggedRootUrl_pgwc2j_k$ = function () {
    return this.rebloggedRootUrl_1;
  };
  protoOf(LegacyAnswerPost).set_rebloggedRootName_w79je_k$ = function (_set____db54di) {
    this.rebloggedRootName_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_rebloggedRootName_87qluz_k$ = function () {
    return this.rebloggedRootName_1;
  };
  protoOf(LegacyAnswerPost).set_rebloggedRootTitle_n6vp_k$ = function (_set____db54di) {
    this.rebloggedRootTitle_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_rebloggedRootTitle_tjzf4e_k$ = function () {
    return this.rebloggedRootTitle_1;
  };
  protoOf(LegacyAnswerPost).set_rebloggedRootUuid_xcerie_k$ = function (_set____db54di) {
    this.rebloggedRootUuid_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_rebloggedRootUuid_87lq7v_k$ = function () {
    return this.rebloggedRootUuid_1;
  };
  protoOf(LegacyAnswerPost).set_rebloggedRootCanMessage_92f4mr_k$ = function (_set____db54di) {
    this.rebloggedRootCanMessage_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_rebloggedRootCanMessage_s8kylb_k$ = function () {
    return this.rebloggedRootCanMessage_1;
  };
  protoOf(LegacyAnswerPost).set_rebloggedRootFollowing_9l3e05_k$ = function (_set____db54di) {
    this.rebloggedRootFollowing_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_rebloggedRootFollowing_mdgzg9_k$ = function () {
    return this.rebloggedRootFollowing_1;
  };
  protoOf(LegacyAnswerPost).set_notes_59gpwq_k$ = function (_set____db54di) {
    this.notes_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_notes_ivw520_k$ = function () {
    return this.notes_1;
  };
  protoOf(LegacyAnswerPost).set_blog_o3ffjm_k$ = function (_set____db54di) {
    this.blog_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_blog_wojizv_k$ = function () {
    return this.blog_1;
  };
  protoOf(LegacyAnswerPost).set_reblog_scs22y_k$ = function (_set____db54di) {
    this.reblog_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_reblog_iy53z2_k$ = function () {
    return this.reblog_1;
  };
  protoOf(LegacyAnswerPost).set_trail_t0ip0s_k$ = function (_set____db54di) {
    this.trail_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).get_trail_iz8fkt_k$ = function () {
    return this.trail_1;
  };
  protoOf(LegacyAnswerPost).get_askingName_hhzern_k$ = function () {
    return this.askingName;
  };
  protoOf(LegacyAnswerPost).get_askingUrl_eb8qmb_k$ = function () {
    return this.askingUrl;
  };
  protoOf(LegacyAnswerPost).get_question_jy1o6n_k$ = function () {
    return this.question;
  };
  protoOf(LegacyAnswerPost).get_answer_b1mrbb_k$ = function () {
    return this.answer;
  };
  function _get_$childSerializers__r2zwns_8($this) {
    return $this.$childSerializers_1;
  }
  function LegacyAudioPost$Companion$$childSerializers$_anonymous__ug3per() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), StringSerializer_getInstance());
  }
  function LegacyAudioPost$Companion$$childSerializers$_anonymous__ug3per_0() {
    return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_10());
  }
  function LegacyAudioPost$Companion$$childSerializers$_anonymous__ug3per_1() {
    return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_30());
  }
  function Companion_19() {
    Companion_instance_19 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyAudioPost$Companion$$childSerializers$_anonymous__ug3per);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyAudioPost$Companion$$childSerializers$_anonymous__ug3per_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyAudioPost$Companion$$childSerializers$_anonymous__ug3per_1), null];
  }
  protoOf(Companion_19).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_17();
  };
  var Companion_instance_19;
  function Companion_getInstance_20() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function $serializer_18() {
    $serializer_instance_17 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyAudioPost', this, 41);
    tmp0_serialDesc.addElement_5pzumi_k$('blog_name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('id_string', false);
    tmp0_serialDesc.addElement_5pzumi_k$('genesis_post_id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('post_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('parent_post_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('type', false);
    tmp0_serialDesc.addElement_5pzumi_k$('timestamp', false);
    tmp0_serialDesc.addElement_5pzumi_k$('date', false);
    tmp0_serialDesc.addElement_5pzumi_k$('format', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblog_key', false);
    tmp0_serialDesc.addElement_5pzumi_k$('tags', false);
    tmp0_serialDesc.addElement_5pzumi_k$('bookmarklet', false);
    tmp0_serialDesc.addElement_5pzumi_k$('mobile', false);
    tmp0_serialDesc.addElement_5pzumi_k$('source_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('source_title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('liked', false);
    tmp0_serialDesc.addElement_5pzumi_k$('state', false);
    tmp0_serialDesc.addElement_5pzumi_k$('title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('body', false);
    tmp0_serialDesc.addElement_5pzumi_k$('note_count', false);
    tmp0_serialDesc.addElement_5pzumi_k$('summary', false);
    tmp0_serialDesc.addElement_5pzumi_k$('slug', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_uuid', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_can_message', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_following', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_uuid', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_can_message', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_following', false);
    tmp0_serialDesc.addElement_5pzumi_k$('notes', false);
    tmp0_serialDesc.addElement_5pzumi_k$('blog', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblog', false);
    tmp0_serialDesc.addElement_5pzumi_k$('trail', false);
    tmp0_serialDesc.addElement_5pzumi_k$('caption', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_18).serialize_qaw6sh_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_20().$childSerializers_1;
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, StringSerializer_getInstance(), value.blogName_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, StringSerializer_getInstance(), value.idString_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, StringSerializer_getInstance(), value.genesisPostId_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 3, StringSerializer_getInstance(), value.postUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 4, StringSerializer_getInstance(), value.parentPostUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 5, StringSerializer_getInstance(), value.type_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 6, IntSerializer_getInstance(), value.timestamp_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 7, StringSerializer_getInstance(), value.date_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 8, StringSerializer_getInstance(), value.format_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 9, StringSerializer_getInstance(), value.reblogKey_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 10, tmp2_cached[10].get_value_j01efc_k$(), value.tags_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 11, BooleanSerializer_getInstance(), value.isBookmarklet_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 12, BooleanSerializer_getInstance(), value.isMobile_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 13, StringSerializer_getInstance(), value.sourceUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 14, StringSerializer_getInstance(), value.sourceTitle_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 15, BooleanSerializer_getInstance(), value.isLiked_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 16, StringSerializer_getInstance(), value.state_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 17, StringSerializer_getInstance(), value.title_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 18, StringSerializer_getInstance(), value.body_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 19, IntSerializer_getInstance(), value.noteCount_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 20, StringSerializer_getInstance(), value.summary_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 21, StringSerializer_getInstance(), value.slug_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 22, StringSerializer_getInstance(), value.rebloggedFromId_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 23, StringSerializer_getInstance(), value.rebloggedFromUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 24, StringSerializer_getInstance(), value.rebloggedFromName_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 25, StringSerializer_getInstance(), value.rebloggedFromTitle_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 26, StringSerializer_getInstance(), value.rebloggedFromUuid_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 27, BooleanSerializer_getInstance(), value.rebloggedFromCanMessage_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 28, BooleanSerializer_getInstance(), value.rebloggedFromFollowing_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 29, StringSerializer_getInstance(), value.rebloggedRootId_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 30, StringSerializer_getInstance(), value.rebloggedRootUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 31, StringSerializer_getInstance(), value.rebloggedRootName_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 32, StringSerializer_getInstance(), value.rebloggedRootTitle_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 33, StringSerializer_getInstance(), value.rebloggedRootUuid_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 34, BooleanSerializer_getInstance(), value.rebloggedRootCanMessage_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 35, BooleanSerializer_getInstance(), value.rebloggedRootFollowing_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 36, tmp2_cached[36].get_value_j01efc_k$(), value.notes_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 37, $serializer_getInstance_12(), value.blog_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 38, $serializer_getInstance_15(), value.reblog_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 39, tmp2_cached[39].get_value_j01efc_k$(), value.trail_1);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 40) ? true : !(value.caption == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 40, StringSerializer_getInstance(), value.caption);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_18).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_qaw6sh_k$(encoder, value instanceof LegacyAudioPost ? value : THROW_CCE());
  };
  protoOf($serializer_18).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_bitMask1 = 0;
    var tmp5_local0 = null;
    var tmp6_local1 = null;
    var tmp7_local2 = null;
    var tmp8_local3 = null;
    var tmp9_local4 = null;
    var tmp10_local5 = null;
    var tmp11_local6 = null;
    var tmp12_local7 = null;
    var tmp13_local8 = null;
    var tmp14_local9 = null;
    var tmp15_local10 = null;
    var tmp16_local11 = null;
    var tmp17_local12 = null;
    var tmp18_local13 = null;
    var tmp19_local14 = null;
    var tmp20_local15 = null;
    var tmp21_local16 = null;
    var tmp22_local17 = null;
    var tmp23_local18 = null;
    var tmp24_local19 = null;
    var tmp25_local20 = null;
    var tmp26_local21 = null;
    var tmp27_local22 = null;
    var tmp28_local23 = null;
    var tmp29_local24 = null;
    var tmp30_local25 = null;
    var tmp31_local26 = null;
    var tmp32_local27 = null;
    var tmp33_local28 = null;
    var tmp34_local29 = null;
    var tmp35_local30 = null;
    var tmp36_local31 = null;
    var tmp37_local32 = null;
    var tmp38_local33 = null;
    var tmp39_local34 = null;
    var tmp40_local35 = null;
    var tmp41_local36 = null;
    var tmp42_local37 = null;
    var tmp43_local38 = null;
    var tmp44_local39 = null;
    var tmp45_local40 = null;
    var tmp46_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp47_cached = Companion_getInstance_20().$childSerializers_1;
    if (tmp46_input.decodeSequentially_xlblqy_k$()) {
      tmp5_local0 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 10, tmp47_cached[10].get_value_j01efc_k$(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 36, tmp47_cached[36].get_value_j01efc_k$(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 39, tmp47_cached[39].get_value_j01efc_k$(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp46_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 10, tmp47_cached[10].get_value_j01efc_k$(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 36, tmp47_cached[36].get_value_j01efc_k$(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 39, tmp47_cached[39].get_value_j01efc_k$(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp46_input.endStructure_1xqz0n_k$(tmp0_desc);
    return LegacyAudioPost_init_$Create$(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, null);
  };
  protoOf($serializer_18).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_18).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_20().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].get_value_j01efc_k$()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].get_value_j01efc_k$()), get_nullable($serializer_getInstance_12()), get_nullable($serializer_getInstance_15()), get_nullable(tmp0_cached[39].get_value_j01efc_k$()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_17;
  function $serializer_getInstance_17() {
    if ($serializer_instance_17 == null)
      new $serializer_18();
    return $serializer_instance_17;
  }
  function LegacyAudioPost_init_$Init$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, caption, serializationConstructorMarker, $this) {
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_17().descriptor_1);
    }
    Post.call($this);
    $this.blogName_1 = blogName;
    $this.idString_1 = idString;
    $this.genesisPostId_1 = genesisPostId;
    $this.postUrl_1 = postUrl;
    $this.parentPostUrl_1 = parentPostUrl;
    $this.type_1 = type;
    $this.timestamp_1 = timestamp;
    $this.date_1 = date;
    $this.format_1 = format;
    $this.reblogKey_1 = reblogKey;
    $this.tags_1 = tags;
    $this.isBookmarklet_1 = isBookmarklet;
    $this.isMobile_1 = isMobile;
    $this.sourceUrl_1 = sourceUrl;
    $this.sourceTitle_1 = sourceTitle;
    $this.isLiked_1 = isLiked;
    $this.state_1 = state;
    $this.title_1 = title;
    $this.body_1 = body;
    $this.noteCount_1 = noteCount;
    $this.summary_1 = summary;
    $this.slug_1 = slug;
    $this.rebloggedFromId_1 = rebloggedFromId;
    $this.rebloggedFromUrl_1 = rebloggedFromUrl;
    $this.rebloggedFromName_1 = rebloggedFromName;
    $this.rebloggedFromTitle_1 = rebloggedFromTitle;
    $this.rebloggedFromUuid_1 = rebloggedFromUuid;
    $this.rebloggedFromCanMessage_1 = rebloggedFromCanMessage;
    $this.rebloggedFromFollowing_1 = rebloggedFromFollowing;
    $this.rebloggedRootId_1 = rebloggedRootId;
    $this.rebloggedRootUrl_1 = rebloggedRootUrl;
    $this.rebloggedRootName_1 = rebloggedRootName;
    $this.rebloggedRootTitle_1 = rebloggedRootTitle;
    $this.rebloggedRootUuid_1 = rebloggedRootUuid;
    $this.rebloggedRootCanMessage_1 = rebloggedRootCanMessage;
    $this.rebloggedRootFollowing_1 = rebloggedRootFollowing;
    $this.notes_1 = notes;
    $this.blog_1 = blog;
    $this.reblog_1 = reblog;
    $this.trail_1 = trail;
    if (0 === (seen1 & 256))
      $this.caption = null;
    else
      $this.caption = caption;
    return $this;
  }
  function LegacyAudioPost_init_$Create$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, caption, serializationConstructorMarker) {
    return LegacyAudioPost_init_$Init$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, caption, serializationConstructorMarker, objectCreate(protoOf(LegacyAudioPost)));
  }
  function LegacyAudioPost(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_20();
    Post.call(this);
    this.blogName_1 = blogName;
    this.idString_1 = idString;
    this.genesisPostId_1 = genesisPostId;
    this.postUrl_1 = postUrl;
    this.parentPostUrl_1 = parentPostUrl;
    this.type_1 = type;
    this.timestamp_1 = timestamp;
    this.date_1 = date;
    this.format_1 = format;
    this.reblogKey_1 = reblogKey;
    this.tags_1 = tags;
    this.isBookmarklet_1 = isBookmarklet;
    this.isMobile_1 = isMobile;
    this.sourceUrl_1 = sourceUrl;
    this.sourceTitle_1 = sourceTitle;
    this.isLiked_1 = isLiked;
    this.state_1 = state;
    this.title_1 = title;
    this.body_1 = body;
    this.noteCount_1 = noteCount;
    this.summary_1 = summary;
    this.slug_1 = slug;
    this.rebloggedFromId_1 = rebloggedFromId;
    this.rebloggedFromUrl_1 = rebloggedFromUrl;
    this.rebloggedFromName_1 = rebloggedFromName;
    this.rebloggedFromTitle_1 = rebloggedFromTitle;
    this.rebloggedFromUuid_1 = rebloggedFromUuid;
    this.rebloggedFromCanMessage_1 = rebloggedFromCanMessage;
    this.rebloggedFromFollowing_1 = rebloggedFromFollowing;
    this.rebloggedRootId_1 = rebloggedRootId;
    this.rebloggedRootUrl_1 = rebloggedRootUrl;
    this.rebloggedRootName_1 = rebloggedRootName;
    this.rebloggedRootTitle_1 = rebloggedRootTitle;
    this.rebloggedRootUuid_1 = rebloggedRootUuid;
    this.rebloggedRootCanMessage_1 = rebloggedRootCanMessage;
    this.rebloggedRootFollowing_1 = rebloggedRootFollowing;
    this.notes_1 = notes;
    this.blog_1 = blog;
    this.reblog_1 = reblog;
    this.trail_1 = trail;
    this.caption = null;
  }
  protoOf(LegacyAudioPost).set_blogName_4hbv7x_k$ = function (_set____db54di) {
    this.blogName_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_blogName_sa6pee_k$ = function () {
    return this.blogName_1;
  };
  protoOf(LegacyAudioPost).set_idString_uk2vzm_k$ = function (_set____db54di) {
    this.idString_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_idString_sjsr85_k$ = function () {
    return this.idString_1;
  };
  protoOf(LegacyAudioPost).set_genesisPostId_z3sus1_k$ = function (_set____db54di) {
    this.genesisPostId_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_genesisPostId_95cwau_k$ = function () {
    return this.genesisPostId_1;
  };
  protoOf(LegacyAudioPost).set_postUrl_etq64l_k$ = function (_set____db54di) {
    this.postUrl_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_postUrl_57da2i_k$ = function () {
    return this.postUrl_1;
  };
  protoOf(LegacyAudioPost).set_parentPostUrl_9ua7l_k$ = function (_set____db54di) {
    this.parentPostUrl_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_parentPostUrl_e3yik_k$ = function () {
    return this.parentPostUrl_1;
  };
  protoOf(LegacyAudioPost).set_type_4507og_k$ = function (_set____db54di) {
    this.type_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(LegacyAudioPost).set_timestamp_cgo46a_k$ = function (_set____db54di) {
    this.timestamp_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_timestamp_9fccx9_k$ = function () {
    return this.timestamp_1;
  };
  protoOf(LegacyAudioPost).set_date_y25dgs_k$ = function (_set____db54di) {
    this.date_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_date_wokkxj_k$ = function () {
    return this.date_1;
  };
  protoOf(LegacyAudioPost).set_format_yd74t9_k$ = function (_set____db54di) {
    this.format_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_format_dfdtds_k$ = function () {
    return this.format_1;
  };
  protoOf(LegacyAudioPost).set_reblogKey_q2gl9m_k$ = function (_set____db54di) {
    this.reblogKey_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_reblogKey_8swysh_k$ = function () {
    return this.reblogKey_1;
  };
  protoOf(LegacyAudioPost).set_tags_7racvz_k$ = function (_set____db54di) {
    this.tags_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_tags_wousf6_k$ = function () {
    return this.tags_1;
  };
  protoOf(LegacyAudioPost).set_isBookmarklet_e6r6jm_k$ = function (_set____db54di) {
    this.isBookmarklet_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_isBookmarklet_xsfl2q_k$ = function () {
    return this.isBookmarklet_1;
  };
  protoOf(LegacyAudioPost).set_isMobile_ymy749_k$ = function (_set____db54di) {
    this.isMobile_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_isMobile_wp3xh1_k$ = function () {
    return this.isMobile_1;
  };
  protoOf(LegacyAudioPost).set_sourceUrl_nz40kg_k$ = function (_set____db54di) {
    this.sourceUrl_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_sourceUrl_jko7yt_k$ = function () {
    return this.sourceUrl_1;
  };
  protoOf(LegacyAudioPost).set_sourceTitle_6ljuq1_k$ = function (_set____db54di) {
    this.sourceTitle_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_sourceTitle_cbkkgk_k$ = function () {
    return this.sourceTitle_1;
  };
  protoOf(LegacyAudioPost).set_isLiked_vjtt2e_k$ = function (_set____db54di) {
    this.isLiked_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_isLiked_zemrwa_k$ = function () {
    return this.isLiked_1;
  };
  protoOf(LegacyAudioPost).set_state_836lgd_k$ = function (_set____db54di) {
    this.state_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  protoOf(LegacyAudioPost).set_title_ceyuu4_k$ = function (_set____db54di) {
    this.title_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(LegacyAudioPost).set_body_d8bq7s_k$ = function (_set____db54di) {
    this.body_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  protoOf(LegacyAudioPost).set_noteCount_gc35kr_k$ = function (_set____db54di) {
    this.noteCount_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_noteCount_xhpyss_k$ = function () {
    return this.noteCount_1;
  };
  protoOf(LegacyAudioPost).set_summary_elnle6_k$ = function (_set____db54di) {
    this.summary_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_summary_tgfqkj_k$ = function () {
    return this.summary_1;
  };
  protoOf(LegacyAudioPost).set_slug_iclwbz_k$ = function (_set____db54di) {
    this.slug_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_slug_woudx0_k$ = function () {
    return this.slug_1;
  };
  protoOf(LegacyAudioPost).set_rebloggedFromId_7fi68u_k$ = function (_set____db54di) {
    this.rebloggedFromId_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_rebloggedFromId_8qykib_k$ = function () {
    return this.rebloggedFromId_1;
  };
  protoOf(LegacyAudioPost).set_rebloggedFromUrl_5gzcjq_k$ = function (_set____db54di) {
    this.rebloggedFromUrl_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_rebloggedFromUrl_cwotgd_k$ = function () {
    return this.rebloggedFromUrl_1;
  };
  protoOf(LegacyAudioPost).set_rebloggedFromName_70jpu_k$ = function (_set____db54di) {
    this.rebloggedFromName_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_rebloggedFromName_q1fs6b_k$ = function () {
    return this.rebloggedFromName_1;
  };
  protoOf(LegacyAudioPost).set_rebloggedFromTitle_lpffbx_k$ = function (_set____db54di) {
    this.rebloggedFromTitle_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_rebloggedFromTitle_pswmt6_k$ = function () {
    return this.rebloggedFromTitle_1;
  };
  protoOf(LegacyAudioPost).set_rebloggedFromUuid_y1lhby_k$ = function (_set____db54di) {
    this.rebloggedFromUuid_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_rebloggedFromUuid_q1awj7_k$ = function () {
    return this.rebloggedFromUuid_1;
  };
  protoOf(LegacyAudioPost).set_rebloggedFromCanMessage_xd73vv_k$ = function (_set____db54di) {
    this.rebloggedFromCanMessage_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_rebloggedFromCanMessage_ik49xz_k$ = function () {
    return this.rebloggedFromCanMessage_1;
  };
  protoOf(LegacyAudioPost).set_rebloggedFromFollowing_134hoz_k$ = function (_set____db54di) {
    this.rebloggedFromFollowing_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_rebloggedFromFollowing_60tgsh_k$ = function () {
    return this.rebloggedFromFollowing_1;
  };
  protoOf(LegacyAudioPost).set_rebloggedRootId_dkbyli_k$ = function (_set____db54di) {
    this.rebloggedRootId_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_rebloggedRootId_342cd7_k$ = function () {
    return this.rebloggedRootId_1;
  };
  protoOf(LegacyAudioPost).set_rebloggedRootUrl_hgpegy_k$ = function (_set____db54di) {
    this.rebloggedRootUrl_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_rebloggedRootUrl_pgwc2j_k$ = function () {
    return this.rebloggedRootUrl_1;
  };
  protoOf(LegacyAudioPost).set_rebloggedRootName_w79je_k$ = function (_set____db54di) {
    this.rebloggedRootName_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_rebloggedRootName_87qluz_k$ = function () {
    return this.rebloggedRootName_1;
  };
  protoOf(LegacyAudioPost).set_rebloggedRootTitle_n6vp_k$ = function (_set____db54di) {
    this.rebloggedRootTitle_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_rebloggedRootTitle_tjzf4e_k$ = function () {
    return this.rebloggedRootTitle_1;
  };
  protoOf(LegacyAudioPost).set_rebloggedRootUuid_xcerie_k$ = function (_set____db54di) {
    this.rebloggedRootUuid_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_rebloggedRootUuid_87lq7v_k$ = function () {
    return this.rebloggedRootUuid_1;
  };
  protoOf(LegacyAudioPost).set_rebloggedRootCanMessage_92f4mr_k$ = function (_set____db54di) {
    this.rebloggedRootCanMessage_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_rebloggedRootCanMessage_s8kylb_k$ = function () {
    return this.rebloggedRootCanMessage_1;
  };
  protoOf(LegacyAudioPost).set_rebloggedRootFollowing_9l3e05_k$ = function (_set____db54di) {
    this.rebloggedRootFollowing_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_rebloggedRootFollowing_mdgzg9_k$ = function () {
    return this.rebloggedRootFollowing_1;
  };
  protoOf(LegacyAudioPost).set_notes_59gpwq_k$ = function (_set____db54di) {
    this.notes_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_notes_ivw520_k$ = function () {
    return this.notes_1;
  };
  protoOf(LegacyAudioPost).set_blog_o3ffjm_k$ = function (_set____db54di) {
    this.blog_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_blog_wojizv_k$ = function () {
    return this.blog_1;
  };
  protoOf(LegacyAudioPost).set_reblog_scs22y_k$ = function (_set____db54di) {
    this.reblog_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_reblog_iy53z2_k$ = function () {
    return this.reblog_1;
  };
  protoOf(LegacyAudioPost).set_trail_t0ip0s_k$ = function (_set____db54di) {
    this.trail_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_trail_iz8fkt_k$ = function () {
    return this.trail_1;
  };
  protoOf(LegacyAudioPost).set_caption_drz67m_k$ = function (_set____db54di) {
    this.caption = _set____db54di;
  };
  protoOf(LegacyAudioPost).get_caption_aejif1_k$ = function () {
    return this.caption;
  };
  function _get_$childSerializers__r2zwns_9($this) {
    return $this.$childSerializers_1;
  }
  function LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), StringSerializer_getInstance());
  }
  function LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1_0() {
    return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_10());
  }
  function LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1_1() {
    return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_30());
  }
  function LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1_2() {
    return new ReferenceArraySerializer(getKClass(Dialogue), $serializer_getInstance_24());
  }
  function Companion_20() {
    Companion_instance_20 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, tmp_5, lazy(tmp_6, LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1_2)];
  }
  protoOf(Companion_20).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_18();
  };
  var Companion_instance_20;
  function Companion_getInstance_21() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function $serializer_19() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyChatPost', this, 41);
    tmp0_serialDesc.addElement_5pzumi_k$('blog_name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('id_string', false);
    tmp0_serialDesc.addElement_5pzumi_k$('genesis_post_id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('post_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('parent_post_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('type', false);
    tmp0_serialDesc.addElement_5pzumi_k$('timestamp', false);
    tmp0_serialDesc.addElement_5pzumi_k$('date', false);
    tmp0_serialDesc.addElement_5pzumi_k$('format', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblog_key', false);
    tmp0_serialDesc.addElement_5pzumi_k$('tags', false);
    tmp0_serialDesc.addElement_5pzumi_k$('bookmarklet', false);
    tmp0_serialDesc.addElement_5pzumi_k$('mobile', false);
    tmp0_serialDesc.addElement_5pzumi_k$('source_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('source_title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('liked', false);
    tmp0_serialDesc.addElement_5pzumi_k$('state', false);
    tmp0_serialDesc.addElement_5pzumi_k$('title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('body', false);
    tmp0_serialDesc.addElement_5pzumi_k$('note_count', false);
    tmp0_serialDesc.addElement_5pzumi_k$('summary', false);
    tmp0_serialDesc.addElement_5pzumi_k$('slug', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_uuid', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_can_message', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_following', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_uuid', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_can_message', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_following', false);
    tmp0_serialDesc.addElement_5pzumi_k$('notes', false);
    tmp0_serialDesc.addElement_5pzumi_k$('blog', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblog', false);
    tmp0_serialDesc.addElement_5pzumi_k$('trail', false);
    tmp0_serialDesc.addElement_5pzumi_k$('dialogue', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_19).serialize_7o3zz9_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_21().$childSerializers_1;
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, StringSerializer_getInstance(), value.blogName_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, StringSerializer_getInstance(), value.idString_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, StringSerializer_getInstance(), value.genesisPostId_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 3, StringSerializer_getInstance(), value.postUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 4, StringSerializer_getInstance(), value.parentPostUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 5, StringSerializer_getInstance(), value.type_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 6, IntSerializer_getInstance(), value.timestamp_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 7, StringSerializer_getInstance(), value.date_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 8, StringSerializer_getInstance(), value.format_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 9, StringSerializer_getInstance(), value.reblogKey_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 10, tmp2_cached[10].get_value_j01efc_k$(), value.tags_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 11, BooleanSerializer_getInstance(), value.isBookmarklet_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 12, BooleanSerializer_getInstance(), value.isMobile_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 13, StringSerializer_getInstance(), value.sourceUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 14, StringSerializer_getInstance(), value.sourceTitle_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 15, BooleanSerializer_getInstance(), value.isLiked_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 16, StringSerializer_getInstance(), value.state_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 17, StringSerializer_getInstance(), value.title_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 18, StringSerializer_getInstance(), value.body_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 19, IntSerializer_getInstance(), value.noteCount_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 20, StringSerializer_getInstance(), value.summary_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 21, StringSerializer_getInstance(), value.slug_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 22, StringSerializer_getInstance(), value.rebloggedFromId_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 23, StringSerializer_getInstance(), value.rebloggedFromUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 24, StringSerializer_getInstance(), value.rebloggedFromName_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 25, StringSerializer_getInstance(), value.rebloggedFromTitle_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 26, StringSerializer_getInstance(), value.rebloggedFromUuid_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 27, BooleanSerializer_getInstance(), value.rebloggedFromCanMessage_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 28, BooleanSerializer_getInstance(), value.rebloggedFromFollowing_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 29, StringSerializer_getInstance(), value.rebloggedRootId_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 30, StringSerializer_getInstance(), value.rebloggedRootUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 31, StringSerializer_getInstance(), value.rebloggedRootName_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 32, StringSerializer_getInstance(), value.rebloggedRootTitle_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 33, StringSerializer_getInstance(), value.rebloggedRootUuid_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 34, BooleanSerializer_getInstance(), value.rebloggedRootCanMessage_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 35, BooleanSerializer_getInstance(), value.rebloggedRootFollowing_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 36, tmp2_cached[36].get_value_j01efc_k$(), value.notes_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 37, $serializer_getInstance_12(), value.blog_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 38, $serializer_getInstance_15(), value.reblog_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 39, tmp2_cached[39].get_value_j01efc_k$(), value.trail_1);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 40) ? true : !(value.dialogue == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 40, tmp2_cached[40].get_value_j01efc_k$(), value.dialogue);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_19).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_7o3zz9_k$(encoder, value instanceof LegacyChatPost ? value : THROW_CCE());
  };
  protoOf($serializer_19).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_bitMask1 = 0;
    var tmp5_local0 = null;
    var tmp6_local1 = null;
    var tmp7_local2 = null;
    var tmp8_local3 = null;
    var tmp9_local4 = null;
    var tmp10_local5 = null;
    var tmp11_local6 = null;
    var tmp12_local7 = null;
    var tmp13_local8 = null;
    var tmp14_local9 = null;
    var tmp15_local10 = null;
    var tmp16_local11 = null;
    var tmp17_local12 = null;
    var tmp18_local13 = null;
    var tmp19_local14 = null;
    var tmp20_local15 = null;
    var tmp21_local16 = null;
    var tmp22_local17 = null;
    var tmp23_local18 = null;
    var tmp24_local19 = null;
    var tmp25_local20 = null;
    var tmp26_local21 = null;
    var tmp27_local22 = null;
    var tmp28_local23 = null;
    var tmp29_local24 = null;
    var tmp30_local25 = null;
    var tmp31_local26 = null;
    var tmp32_local27 = null;
    var tmp33_local28 = null;
    var tmp34_local29 = null;
    var tmp35_local30 = null;
    var tmp36_local31 = null;
    var tmp37_local32 = null;
    var tmp38_local33 = null;
    var tmp39_local34 = null;
    var tmp40_local35 = null;
    var tmp41_local36 = null;
    var tmp42_local37 = null;
    var tmp43_local38 = null;
    var tmp44_local39 = null;
    var tmp45_local40 = null;
    var tmp46_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp47_cached = Companion_getInstance_21().$childSerializers_1;
    if (tmp46_input.decodeSequentially_xlblqy_k$()) {
      tmp5_local0 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 10, tmp47_cached[10].get_value_j01efc_k$(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 36, tmp47_cached[36].get_value_j01efc_k$(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 39, tmp47_cached[39].get_value_j01efc_k$(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 40, tmp47_cached[40].get_value_j01efc_k$(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp46_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 10, tmp47_cached[10].get_value_j01efc_k$(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 36, tmp47_cached[36].get_value_j01efc_k$(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 39, tmp47_cached[39].get_value_j01efc_k$(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp46_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 40, tmp47_cached[40].get_value_j01efc_k$(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp46_input.endStructure_1xqz0n_k$(tmp0_desc);
    return LegacyChatPost_init_$Create$(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, null);
  };
  protoOf($serializer_19).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_19).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_21().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].get_value_j01efc_k$()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].get_value_j01efc_k$()), get_nullable($serializer_getInstance_12()), get_nullable($serializer_getInstance_15()), get_nullable(tmp0_cached[39].get_value_j01efc_k$()), get_nullable(tmp0_cached[40].get_value_j01efc_k$())];
  };
  var $serializer_instance_18;
  function $serializer_getInstance_18() {
    if ($serializer_instance_18 == null)
      new $serializer_19();
    return $serializer_instance_18;
  }
  function LegacyChatPost_init_$Init$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, dialogue, serializationConstructorMarker, $this) {
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_18().descriptor_1);
    }
    Post.call($this);
    $this.blogName_1 = blogName;
    $this.idString_1 = idString;
    $this.genesisPostId_1 = genesisPostId;
    $this.postUrl_1 = postUrl;
    $this.parentPostUrl_1 = parentPostUrl;
    $this.type_1 = type;
    $this.timestamp_1 = timestamp;
    $this.date_1 = date;
    $this.format_1 = format;
    $this.reblogKey_1 = reblogKey;
    $this.tags_1 = tags;
    $this.isBookmarklet_1 = isBookmarklet;
    $this.isMobile_1 = isMobile;
    $this.sourceUrl_1 = sourceUrl;
    $this.sourceTitle_1 = sourceTitle;
    $this.isLiked_1 = isLiked;
    $this.state_1 = state;
    $this.title_1 = title;
    $this.body_1 = body;
    $this.noteCount_1 = noteCount;
    $this.summary_1 = summary;
    $this.slug_1 = slug;
    $this.rebloggedFromId_1 = rebloggedFromId;
    $this.rebloggedFromUrl_1 = rebloggedFromUrl;
    $this.rebloggedFromName_1 = rebloggedFromName;
    $this.rebloggedFromTitle_1 = rebloggedFromTitle;
    $this.rebloggedFromUuid_1 = rebloggedFromUuid;
    $this.rebloggedFromCanMessage_1 = rebloggedFromCanMessage;
    $this.rebloggedFromFollowing_1 = rebloggedFromFollowing;
    $this.rebloggedRootId_1 = rebloggedRootId;
    $this.rebloggedRootUrl_1 = rebloggedRootUrl;
    $this.rebloggedRootName_1 = rebloggedRootName;
    $this.rebloggedRootTitle_1 = rebloggedRootTitle;
    $this.rebloggedRootUuid_1 = rebloggedRootUuid;
    $this.rebloggedRootCanMessage_1 = rebloggedRootCanMessage;
    $this.rebloggedRootFollowing_1 = rebloggedRootFollowing;
    $this.notes_1 = notes;
    $this.blog_1 = blog;
    $this.reblog_1 = reblog;
    $this.trail_1 = trail;
    if (0 === (seen1 & 256))
      $this.dialogue = null;
    else
      $this.dialogue = dialogue;
    return $this;
  }
  function LegacyChatPost_init_$Create$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, dialogue, serializationConstructorMarker) {
    return LegacyChatPost_init_$Init$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, dialogue, serializationConstructorMarker, objectCreate(protoOf(LegacyChatPost)));
  }
  function LegacyChatPost(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_21();
    Post.call(this);
    this.blogName_1 = blogName;
    this.idString_1 = idString;
    this.genesisPostId_1 = genesisPostId;
    this.postUrl_1 = postUrl;
    this.parentPostUrl_1 = parentPostUrl;
    this.type_1 = type;
    this.timestamp_1 = timestamp;
    this.date_1 = date;
    this.format_1 = format;
    this.reblogKey_1 = reblogKey;
    this.tags_1 = tags;
    this.isBookmarklet_1 = isBookmarklet;
    this.isMobile_1 = isMobile;
    this.sourceUrl_1 = sourceUrl;
    this.sourceTitle_1 = sourceTitle;
    this.isLiked_1 = isLiked;
    this.state_1 = state;
    this.title_1 = title;
    this.body_1 = body;
    this.noteCount_1 = noteCount;
    this.summary_1 = summary;
    this.slug_1 = slug;
    this.rebloggedFromId_1 = rebloggedFromId;
    this.rebloggedFromUrl_1 = rebloggedFromUrl;
    this.rebloggedFromName_1 = rebloggedFromName;
    this.rebloggedFromTitle_1 = rebloggedFromTitle;
    this.rebloggedFromUuid_1 = rebloggedFromUuid;
    this.rebloggedFromCanMessage_1 = rebloggedFromCanMessage;
    this.rebloggedFromFollowing_1 = rebloggedFromFollowing;
    this.rebloggedRootId_1 = rebloggedRootId;
    this.rebloggedRootUrl_1 = rebloggedRootUrl;
    this.rebloggedRootName_1 = rebloggedRootName;
    this.rebloggedRootTitle_1 = rebloggedRootTitle;
    this.rebloggedRootUuid_1 = rebloggedRootUuid;
    this.rebloggedRootCanMessage_1 = rebloggedRootCanMessage;
    this.rebloggedRootFollowing_1 = rebloggedRootFollowing;
    this.notes_1 = notes;
    this.blog_1 = blog;
    this.reblog_1 = reblog;
    this.trail_1 = trail;
    this.dialogue = null;
  }
  protoOf(LegacyChatPost).set_blogName_4hbv7x_k$ = function (_set____db54di) {
    this.blogName_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_blogName_sa6pee_k$ = function () {
    return this.blogName_1;
  };
  protoOf(LegacyChatPost).set_idString_uk2vzm_k$ = function (_set____db54di) {
    this.idString_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_idString_sjsr85_k$ = function () {
    return this.idString_1;
  };
  protoOf(LegacyChatPost).set_genesisPostId_z3sus1_k$ = function (_set____db54di) {
    this.genesisPostId_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_genesisPostId_95cwau_k$ = function () {
    return this.genesisPostId_1;
  };
  protoOf(LegacyChatPost).set_postUrl_etq64l_k$ = function (_set____db54di) {
    this.postUrl_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_postUrl_57da2i_k$ = function () {
    return this.postUrl_1;
  };
  protoOf(LegacyChatPost).set_parentPostUrl_9ua7l_k$ = function (_set____db54di) {
    this.parentPostUrl_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_parentPostUrl_e3yik_k$ = function () {
    return this.parentPostUrl_1;
  };
  protoOf(LegacyChatPost).set_type_4507og_k$ = function (_set____db54di) {
    this.type_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(LegacyChatPost).set_timestamp_cgo46a_k$ = function (_set____db54di) {
    this.timestamp_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_timestamp_9fccx9_k$ = function () {
    return this.timestamp_1;
  };
  protoOf(LegacyChatPost).set_date_y25dgs_k$ = function (_set____db54di) {
    this.date_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_date_wokkxj_k$ = function () {
    return this.date_1;
  };
  protoOf(LegacyChatPost).set_format_yd74t9_k$ = function (_set____db54di) {
    this.format_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_format_dfdtds_k$ = function () {
    return this.format_1;
  };
  protoOf(LegacyChatPost).set_reblogKey_q2gl9m_k$ = function (_set____db54di) {
    this.reblogKey_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_reblogKey_8swysh_k$ = function () {
    return this.reblogKey_1;
  };
  protoOf(LegacyChatPost).set_tags_7racvz_k$ = function (_set____db54di) {
    this.tags_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_tags_wousf6_k$ = function () {
    return this.tags_1;
  };
  protoOf(LegacyChatPost).set_isBookmarklet_e6r6jm_k$ = function (_set____db54di) {
    this.isBookmarklet_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_isBookmarklet_xsfl2q_k$ = function () {
    return this.isBookmarklet_1;
  };
  protoOf(LegacyChatPost).set_isMobile_ymy749_k$ = function (_set____db54di) {
    this.isMobile_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_isMobile_wp3xh1_k$ = function () {
    return this.isMobile_1;
  };
  protoOf(LegacyChatPost).set_sourceUrl_nz40kg_k$ = function (_set____db54di) {
    this.sourceUrl_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_sourceUrl_jko7yt_k$ = function () {
    return this.sourceUrl_1;
  };
  protoOf(LegacyChatPost).set_sourceTitle_6ljuq1_k$ = function (_set____db54di) {
    this.sourceTitle_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_sourceTitle_cbkkgk_k$ = function () {
    return this.sourceTitle_1;
  };
  protoOf(LegacyChatPost).set_isLiked_vjtt2e_k$ = function (_set____db54di) {
    this.isLiked_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_isLiked_zemrwa_k$ = function () {
    return this.isLiked_1;
  };
  protoOf(LegacyChatPost).set_state_836lgd_k$ = function (_set____db54di) {
    this.state_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  protoOf(LegacyChatPost).set_title_ceyuu4_k$ = function (_set____db54di) {
    this.title_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(LegacyChatPost).set_body_d8bq7s_k$ = function (_set____db54di) {
    this.body_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  protoOf(LegacyChatPost).set_noteCount_gc35kr_k$ = function (_set____db54di) {
    this.noteCount_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_noteCount_xhpyss_k$ = function () {
    return this.noteCount_1;
  };
  protoOf(LegacyChatPost).set_summary_elnle6_k$ = function (_set____db54di) {
    this.summary_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_summary_tgfqkj_k$ = function () {
    return this.summary_1;
  };
  protoOf(LegacyChatPost).set_slug_iclwbz_k$ = function (_set____db54di) {
    this.slug_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_slug_woudx0_k$ = function () {
    return this.slug_1;
  };
  protoOf(LegacyChatPost).set_rebloggedFromId_7fi68u_k$ = function (_set____db54di) {
    this.rebloggedFromId_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_rebloggedFromId_8qykib_k$ = function () {
    return this.rebloggedFromId_1;
  };
  protoOf(LegacyChatPost).set_rebloggedFromUrl_5gzcjq_k$ = function (_set____db54di) {
    this.rebloggedFromUrl_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_rebloggedFromUrl_cwotgd_k$ = function () {
    return this.rebloggedFromUrl_1;
  };
  protoOf(LegacyChatPost).set_rebloggedFromName_70jpu_k$ = function (_set____db54di) {
    this.rebloggedFromName_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_rebloggedFromName_q1fs6b_k$ = function () {
    return this.rebloggedFromName_1;
  };
  protoOf(LegacyChatPost).set_rebloggedFromTitle_lpffbx_k$ = function (_set____db54di) {
    this.rebloggedFromTitle_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_rebloggedFromTitle_pswmt6_k$ = function () {
    return this.rebloggedFromTitle_1;
  };
  protoOf(LegacyChatPost).set_rebloggedFromUuid_y1lhby_k$ = function (_set____db54di) {
    this.rebloggedFromUuid_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_rebloggedFromUuid_q1awj7_k$ = function () {
    return this.rebloggedFromUuid_1;
  };
  protoOf(LegacyChatPost).set_rebloggedFromCanMessage_xd73vv_k$ = function (_set____db54di) {
    this.rebloggedFromCanMessage_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_rebloggedFromCanMessage_ik49xz_k$ = function () {
    return this.rebloggedFromCanMessage_1;
  };
  protoOf(LegacyChatPost).set_rebloggedFromFollowing_134hoz_k$ = function (_set____db54di) {
    this.rebloggedFromFollowing_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_rebloggedFromFollowing_60tgsh_k$ = function () {
    return this.rebloggedFromFollowing_1;
  };
  protoOf(LegacyChatPost).set_rebloggedRootId_dkbyli_k$ = function (_set____db54di) {
    this.rebloggedRootId_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_rebloggedRootId_342cd7_k$ = function () {
    return this.rebloggedRootId_1;
  };
  protoOf(LegacyChatPost).set_rebloggedRootUrl_hgpegy_k$ = function (_set____db54di) {
    this.rebloggedRootUrl_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_rebloggedRootUrl_pgwc2j_k$ = function () {
    return this.rebloggedRootUrl_1;
  };
  protoOf(LegacyChatPost).set_rebloggedRootName_w79je_k$ = function (_set____db54di) {
    this.rebloggedRootName_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_rebloggedRootName_87qluz_k$ = function () {
    return this.rebloggedRootName_1;
  };
  protoOf(LegacyChatPost).set_rebloggedRootTitle_n6vp_k$ = function (_set____db54di) {
    this.rebloggedRootTitle_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_rebloggedRootTitle_tjzf4e_k$ = function () {
    return this.rebloggedRootTitle_1;
  };
  protoOf(LegacyChatPost).set_rebloggedRootUuid_xcerie_k$ = function (_set____db54di) {
    this.rebloggedRootUuid_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_rebloggedRootUuid_87lq7v_k$ = function () {
    return this.rebloggedRootUuid_1;
  };
  protoOf(LegacyChatPost).set_rebloggedRootCanMessage_92f4mr_k$ = function (_set____db54di) {
    this.rebloggedRootCanMessage_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_rebloggedRootCanMessage_s8kylb_k$ = function () {
    return this.rebloggedRootCanMessage_1;
  };
  protoOf(LegacyChatPost).set_rebloggedRootFollowing_9l3e05_k$ = function (_set____db54di) {
    this.rebloggedRootFollowing_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_rebloggedRootFollowing_mdgzg9_k$ = function () {
    return this.rebloggedRootFollowing_1;
  };
  protoOf(LegacyChatPost).set_notes_59gpwq_k$ = function (_set____db54di) {
    this.notes_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_notes_ivw520_k$ = function () {
    return this.notes_1;
  };
  protoOf(LegacyChatPost).set_blog_o3ffjm_k$ = function (_set____db54di) {
    this.blog_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_blog_wojizv_k$ = function () {
    return this.blog_1;
  };
  protoOf(LegacyChatPost).set_reblog_scs22y_k$ = function (_set____db54di) {
    this.reblog_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_reblog_iy53z2_k$ = function () {
    return this.reblog_1;
  };
  protoOf(LegacyChatPost).set_trail_t0ip0s_k$ = function (_set____db54di) {
    this.trail_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).get_trail_iz8fkt_k$ = function () {
    return this.trail_1;
  };
  protoOf(LegacyChatPost).get_dialogue_zcy9i9_k$ = function () {
    return this.dialogue;
  };
  function _get_$childSerializers__r2zwns_10($this) {
    return $this.$childSerializers_1;
  }
  function LegacyLinkPost$Companion$$childSerializers$_anonymous__ugz0c9() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), StringSerializer_getInstance());
  }
  function LegacyLinkPost$Companion$$childSerializers$_anonymous__ugz0c9_0() {
    return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_10());
  }
  function LegacyLinkPost$Companion$$childSerializers$_anonymous__ugz0c9_1() {
    return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_30());
  }
  function Companion_21() {
    Companion_instance_21 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyLinkPost$Companion$$childSerializers$_anonymous__ugz0c9);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyLinkPost$Companion$$childSerializers$_anonymous__ugz0c9_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyLinkPost$Companion$$childSerializers$_anonymous__ugz0c9_1), null, null, null, null, null];
  }
  protoOf(Companion_21).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_19();
  };
  var Companion_instance_21;
  function Companion_getInstance_22() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function $serializer_20() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyLinkPost', this, 45);
    tmp0_serialDesc.addElement_5pzumi_k$('blog_name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('id_string', false);
    tmp0_serialDesc.addElement_5pzumi_k$('genesis_post_id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('post_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('parent_post_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('type', false);
    tmp0_serialDesc.addElement_5pzumi_k$('timestamp', false);
    tmp0_serialDesc.addElement_5pzumi_k$('date', false);
    tmp0_serialDesc.addElement_5pzumi_k$('format', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblog_key', false);
    tmp0_serialDesc.addElement_5pzumi_k$('tags', false);
    tmp0_serialDesc.addElement_5pzumi_k$('bookmarklet', false);
    tmp0_serialDesc.addElement_5pzumi_k$('mobile', false);
    tmp0_serialDesc.addElement_5pzumi_k$('source_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('source_title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('liked', false);
    tmp0_serialDesc.addElement_5pzumi_k$('state', false);
    tmp0_serialDesc.addElement_5pzumi_k$('title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('body', false);
    tmp0_serialDesc.addElement_5pzumi_k$('note_count', false);
    tmp0_serialDesc.addElement_5pzumi_k$('summary', false);
    tmp0_serialDesc.addElement_5pzumi_k$('slug', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_uuid', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_can_message', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_following', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_uuid', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_can_message', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_following', false);
    tmp0_serialDesc.addElement_5pzumi_k$('notes', false);
    tmp0_serialDesc.addElement_5pzumi_k$('blog', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblog', false);
    tmp0_serialDesc.addElement_5pzumi_k$('trail', false);
    tmp0_serialDesc.addElement_5pzumi_k$('description', true);
    tmp0_serialDesc.addElement_5pzumi_k$('url', true);
    tmp0_serialDesc.addElement_5pzumi_k$('link_author', true);
    tmp0_serialDesc.addElement_5pzumi_k$('excerpt', true);
    tmp0_serialDesc.addElement_5pzumi_k$('publisher', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_20).serialize_xr46tj_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_22().$childSerializers_1;
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, StringSerializer_getInstance(), value.blogName_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, StringSerializer_getInstance(), value.idString_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, StringSerializer_getInstance(), value.genesisPostId_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 3, StringSerializer_getInstance(), value.postUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 4, StringSerializer_getInstance(), value.parentPostUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 5, StringSerializer_getInstance(), value.type_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 6, IntSerializer_getInstance(), value.timestamp_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 7, StringSerializer_getInstance(), value.date_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 8, StringSerializer_getInstance(), value.format_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 9, StringSerializer_getInstance(), value.reblogKey_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 10, tmp2_cached[10].get_value_j01efc_k$(), value.tags_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 11, BooleanSerializer_getInstance(), value.isBookmarklet_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 12, BooleanSerializer_getInstance(), value.isMobile_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 13, StringSerializer_getInstance(), value.sourceUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 14, StringSerializer_getInstance(), value.sourceTitle_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 15, BooleanSerializer_getInstance(), value.isLiked_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 16, StringSerializer_getInstance(), value.state_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 17, StringSerializer_getInstance(), value.title_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 18, StringSerializer_getInstance(), value.body_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 19, IntSerializer_getInstance(), value.noteCount_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 20, StringSerializer_getInstance(), value.summary_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 21, StringSerializer_getInstance(), value.slug_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 22, StringSerializer_getInstance(), value.rebloggedFromId_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 23, StringSerializer_getInstance(), value.rebloggedFromUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 24, StringSerializer_getInstance(), value.rebloggedFromName_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 25, StringSerializer_getInstance(), value.rebloggedFromTitle_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 26, StringSerializer_getInstance(), value.rebloggedFromUuid_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 27, BooleanSerializer_getInstance(), value.rebloggedFromCanMessage_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 28, BooleanSerializer_getInstance(), value.rebloggedFromFollowing_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 29, StringSerializer_getInstance(), value.rebloggedRootId_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 30, StringSerializer_getInstance(), value.rebloggedRootUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 31, StringSerializer_getInstance(), value.rebloggedRootName_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 32, StringSerializer_getInstance(), value.rebloggedRootTitle_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 33, StringSerializer_getInstance(), value.rebloggedRootUuid_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 34, BooleanSerializer_getInstance(), value.rebloggedRootCanMessage_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 35, BooleanSerializer_getInstance(), value.rebloggedRootFollowing_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 36, tmp2_cached[36].get_value_j01efc_k$(), value.notes_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 37, $serializer_getInstance_12(), value.blog_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 38, $serializer_getInstance_15(), value.reblog_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 39, tmp2_cached[39].get_value_j01efc_k$(), value.trail_1);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 40) ? true : !(value.description == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 40, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 41) ? true : !(value.url == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 41, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 42) ? true : !(value.linkAuthor == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 42, StringSerializer_getInstance(), value.linkAuthor);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 43) ? true : !(value.excerpt == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 43, StringSerializer_getInstance(), value.excerpt);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 44) ? true : !(value.publisher == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 44, StringSerializer_getInstance(), value.publisher);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_20).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_xr46tj_k$(encoder, value instanceof LegacyLinkPost ? value : THROW_CCE());
  };
  protoOf($serializer_20).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_bitMask1 = 0;
    var tmp5_local0 = null;
    var tmp6_local1 = null;
    var tmp7_local2 = null;
    var tmp8_local3 = null;
    var tmp9_local4 = null;
    var tmp10_local5 = null;
    var tmp11_local6 = null;
    var tmp12_local7 = null;
    var tmp13_local8 = null;
    var tmp14_local9 = null;
    var tmp15_local10 = null;
    var tmp16_local11 = null;
    var tmp17_local12 = null;
    var tmp18_local13 = null;
    var tmp19_local14 = null;
    var tmp20_local15 = null;
    var tmp21_local16 = null;
    var tmp22_local17 = null;
    var tmp23_local18 = null;
    var tmp24_local19 = null;
    var tmp25_local20 = null;
    var tmp26_local21 = null;
    var tmp27_local22 = null;
    var tmp28_local23 = null;
    var tmp29_local24 = null;
    var tmp30_local25 = null;
    var tmp31_local26 = null;
    var tmp32_local27 = null;
    var tmp33_local28 = null;
    var tmp34_local29 = null;
    var tmp35_local30 = null;
    var tmp36_local31 = null;
    var tmp37_local32 = null;
    var tmp38_local33 = null;
    var tmp39_local34 = null;
    var tmp40_local35 = null;
    var tmp41_local36 = null;
    var tmp42_local37 = null;
    var tmp43_local38 = null;
    var tmp44_local39 = null;
    var tmp45_local40 = null;
    var tmp46_local41 = null;
    var tmp47_local42 = null;
    var tmp48_local43 = null;
    var tmp49_local44 = null;
    var tmp50_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp51_cached = Companion_getInstance_22().$childSerializers_1;
    if (tmp50_input.decodeSequentially_xlblqy_k$()) {
      tmp5_local0 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 10, tmp51_cached[10].get_value_j01efc_k$(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 36, tmp51_cached[36].get_value_j01efc_k$(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 39, tmp51_cached[39].get_value_j01efc_k$(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp47_local42 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp48_local43 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
      tmp49_local44 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 44, StringSerializer_getInstance(), tmp49_local44);
      tmp4_bitMask1 = tmp4_bitMask1 | 4096;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp50_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 10, tmp51_cached[10].get_value_j01efc_k$(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 36, tmp51_cached[36].get_value_j01efc_k$(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 39, tmp51_cached[39].get_value_j01efc_k$(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp47_local42 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp48_local43 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          case 44:
            tmp49_local44 = tmp50_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 44, StringSerializer_getInstance(), tmp49_local44);
            tmp4_bitMask1 = tmp4_bitMask1 | 4096;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp50_input.endStructure_1xqz0n_k$(tmp0_desc);
    return LegacyLinkPost_init_$Create$(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, tmp47_local42, tmp48_local43, tmp49_local44, null);
  };
  protoOf($serializer_20).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_20).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_22().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].get_value_j01efc_k$()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].get_value_j01efc_k$()), get_nullable($serializer_getInstance_12()), get_nullable($serializer_getInstance_15()), get_nullable(tmp0_cached[39].get_value_j01efc_k$()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_19;
  function $serializer_getInstance_19() {
    if ($serializer_instance_19 == null)
      new $serializer_20();
    return $serializer_instance_19;
  }
  function LegacyLinkPost_init_$Init$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, description, url, linkAuthor, excerpt, publisher, serializationConstructorMarker, $this) {
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_19().descriptor_1);
    }
    Post.call($this);
    $this.blogName_1 = blogName;
    $this.idString_1 = idString;
    $this.genesisPostId_1 = genesisPostId;
    $this.postUrl_1 = postUrl;
    $this.parentPostUrl_1 = parentPostUrl;
    $this.type_1 = type;
    $this.timestamp_1 = timestamp;
    $this.date_1 = date;
    $this.format_1 = format;
    $this.reblogKey_1 = reblogKey;
    $this.tags_1 = tags;
    $this.isBookmarklet_1 = isBookmarklet;
    $this.isMobile_1 = isMobile;
    $this.sourceUrl_1 = sourceUrl;
    $this.sourceTitle_1 = sourceTitle;
    $this.isLiked_1 = isLiked;
    $this.state_1 = state;
    $this.title_1 = title;
    $this.body_1 = body;
    $this.noteCount_1 = noteCount;
    $this.summary_1 = summary;
    $this.slug_1 = slug;
    $this.rebloggedFromId_1 = rebloggedFromId;
    $this.rebloggedFromUrl_1 = rebloggedFromUrl;
    $this.rebloggedFromName_1 = rebloggedFromName;
    $this.rebloggedFromTitle_1 = rebloggedFromTitle;
    $this.rebloggedFromUuid_1 = rebloggedFromUuid;
    $this.rebloggedFromCanMessage_1 = rebloggedFromCanMessage;
    $this.rebloggedFromFollowing_1 = rebloggedFromFollowing;
    $this.rebloggedRootId_1 = rebloggedRootId;
    $this.rebloggedRootUrl_1 = rebloggedRootUrl;
    $this.rebloggedRootName_1 = rebloggedRootName;
    $this.rebloggedRootTitle_1 = rebloggedRootTitle;
    $this.rebloggedRootUuid_1 = rebloggedRootUuid;
    $this.rebloggedRootCanMessage_1 = rebloggedRootCanMessage;
    $this.rebloggedRootFollowing_1 = rebloggedRootFollowing;
    $this.notes_1 = notes;
    $this.blog_1 = blog;
    $this.reblog_1 = reblog;
    $this.trail_1 = trail;
    if (0 === (seen1 & 256))
      $this.description = null;
    else
      $this.description = description;
    if (0 === (seen1 & 512))
      $this.url = null;
    else
      $this.url = url;
    if (0 === (seen1 & 1024))
      $this.linkAuthor = null;
    else
      $this.linkAuthor = linkAuthor;
    if (0 === (seen1 & 2048))
      $this.excerpt = null;
    else
      $this.excerpt = excerpt;
    if (0 === (seen1 & 4096))
      $this.publisher = null;
    else
      $this.publisher = publisher;
    return $this;
  }
  function LegacyLinkPost_init_$Create$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, description, url, linkAuthor, excerpt, publisher, serializationConstructorMarker) {
    return LegacyLinkPost_init_$Init$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, description, url, linkAuthor, excerpt, publisher, serializationConstructorMarker, objectCreate(protoOf(LegacyLinkPost)));
  }
  function LegacyLinkPost(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_22();
    Post.call(this);
    this.blogName_1 = blogName;
    this.idString_1 = idString;
    this.genesisPostId_1 = genesisPostId;
    this.postUrl_1 = postUrl;
    this.parentPostUrl_1 = parentPostUrl;
    this.type_1 = type;
    this.timestamp_1 = timestamp;
    this.date_1 = date;
    this.format_1 = format;
    this.reblogKey_1 = reblogKey;
    this.tags_1 = tags;
    this.isBookmarklet_1 = isBookmarklet;
    this.isMobile_1 = isMobile;
    this.sourceUrl_1 = sourceUrl;
    this.sourceTitle_1 = sourceTitle;
    this.isLiked_1 = isLiked;
    this.state_1 = state;
    this.title_1 = title;
    this.body_1 = body;
    this.noteCount_1 = noteCount;
    this.summary_1 = summary;
    this.slug_1 = slug;
    this.rebloggedFromId_1 = rebloggedFromId;
    this.rebloggedFromUrl_1 = rebloggedFromUrl;
    this.rebloggedFromName_1 = rebloggedFromName;
    this.rebloggedFromTitle_1 = rebloggedFromTitle;
    this.rebloggedFromUuid_1 = rebloggedFromUuid;
    this.rebloggedFromCanMessage_1 = rebloggedFromCanMessage;
    this.rebloggedFromFollowing_1 = rebloggedFromFollowing;
    this.rebloggedRootId_1 = rebloggedRootId;
    this.rebloggedRootUrl_1 = rebloggedRootUrl;
    this.rebloggedRootName_1 = rebloggedRootName;
    this.rebloggedRootTitle_1 = rebloggedRootTitle;
    this.rebloggedRootUuid_1 = rebloggedRootUuid;
    this.rebloggedRootCanMessage_1 = rebloggedRootCanMessage;
    this.rebloggedRootFollowing_1 = rebloggedRootFollowing;
    this.notes_1 = notes;
    this.blog_1 = blog;
    this.reblog_1 = reblog;
    this.trail_1 = trail;
    this.description = null;
    this.url = null;
    this.linkAuthor = null;
    this.excerpt = null;
    this.publisher = null;
  }
  protoOf(LegacyLinkPost).set_blogName_4hbv7x_k$ = function (_set____db54di) {
    this.blogName_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_blogName_sa6pee_k$ = function () {
    return this.blogName_1;
  };
  protoOf(LegacyLinkPost).set_idString_uk2vzm_k$ = function (_set____db54di) {
    this.idString_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_idString_sjsr85_k$ = function () {
    return this.idString_1;
  };
  protoOf(LegacyLinkPost).set_genesisPostId_z3sus1_k$ = function (_set____db54di) {
    this.genesisPostId_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_genesisPostId_95cwau_k$ = function () {
    return this.genesisPostId_1;
  };
  protoOf(LegacyLinkPost).set_postUrl_etq64l_k$ = function (_set____db54di) {
    this.postUrl_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_postUrl_57da2i_k$ = function () {
    return this.postUrl_1;
  };
  protoOf(LegacyLinkPost).set_parentPostUrl_9ua7l_k$ = function (_set____db54di) {
    this.parentPostUrl_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_parentPostUrl_e3yik_k$ = function () {
    return this.parentPostUrl_1;
  };
  protoOf(LegacyLinkPost).set_type_4507og_k$ = function (_set____db54di) {
    this.type_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(LegacyLinkPost).set_timestamp_cgo46a_k$ = function (_set____db54di) {
    this.timestamp_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_timestamp_9fccx9_k$ = function () {
    return this.timestamp_1;
  };
  protoOf(LegacyLinkPost).set_date_y25dgs_k$ = function (_set____db54di) {
    this.date_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_date_wokkxj_k$ = function () {
    return this.date_1;
  };
  protoOf(LegacyLinkPost).set_format_yd74t9_k$ = function (_set____db54di) {
    this.format_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_format_dfdtds_k$ = function () {
    return this.format_1;
  };
  protoOf(LegacyLinkPost).set_reblogKey_q2gl9m_k$ = function (_set____db54di) {
    this.reblogKey_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_reblogKey_8swysh_k$ = function () {
    return this.reblogKey_1;
  };
  protoOf(LegacyLinkPost).set_tags_7racvz_k$ = function (_set____db54di) {
    this.tags_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_tags_wousf6_k$ = function () {
    return this.tags_1;
  };
  protoOf(LegacyLinkPost).set_isBookmarklet_e6r6jm_k$ = function (_set____db54di) {
    this.isBookmarklet_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_isBookmarklet_xsfl2q_k$ = function () {
    return this.isBookmarklet_1;
  };
  protoOf(LegacyLinkPost).set_isMobile_ymy749_k$ = function (_set____db54di) {
    this.isMobile_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_isMobile_wp3xh1_k$ = function () {
    return this.isMobile_1;
  };
  protoOf(LegacyLinkPost).set_sourceUrl_nz40kg_k$ = function (_set____db54di) {
    this.sourceUrl_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_sourceUrl_jko7yt_k$ = function () {
    return this.sourceUrl_1;
  };
  protoOf(LegacyLinkPost).set_sourceTitle_6ljuq1_k$ = function (_set____db54di) {
    this.sourceTitle_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_sourceTitle_cbkkgk_k$ = function () {
    return this.sourceTitle_1;
  };
  protoOf(LegacyLinkPost).set_isLiked_vjtt2e_k$ = function (_set____db54di) {
    this.isLiked_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_isLiked_zemrwa_k$ = function () {
    return this.isLiked_1;
  };
  protoOf(LegacyLinkPost).set_state_836lgd_k$ = function (_set____db54di) {
    this.state_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  protoOf(LegacyLinkPost).set_title_ceyuu4_k$ = function (_set____db54di) {
    this.title_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(LegacyLinkPost).set_body_d8bq7s_k$ = function (_set____db54di) {
    this.body_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  protoOf(LegacyLinkPost).set_noteCount_gc35kr_k$ = function (_set____db54di) {
    this.noteCount_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_noteCount_xhpyss_k$ = function () {
    return this.noteCount_1;
  };
  protoOf(LegacyLinkPost).set_summary_elnle6_k$ = function (_set____db54di) {
    this.summary_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_summary_tgfqkj_k$ = function () {
    return this.summary_1;
  };
  protoOf(LegacyLinkPost).set_slug_iclwbz_k$ = function (_set____db54di) {
    this.slug_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_slug_woudx0_k$ = function () {
    return this.slug_1;
  };
  protoOf(LegacyLinkPost).set_rebloggedFromId_7fi68u_k$ = function (_set____db54di) {
    this.rebloggedFromId_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_rebloggedFromId_8qykib_k$ = function () {
    return this.rebloggedFromId_1;
  };
  protoOf(LegacyLinkPost).set_rebloggedFromUrl_5gzcjq_k$ = function (_set____db54di) {
    this.rebloggedFromUrl_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_rebloggedFromUrl_cwotgd_k$ = function () {
    return this.rebloggedFromUrl_1;
  };
  protoOf(LegacyLinkPost).set_rebloggedFromName_70jpu_k$ = function (_set____db54di) {
    this.rebloggedFromName_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_rebloggedFromName_q1fs6b_k$ = function () {
    return this.rebloggedFromName_1;
  };
  protoOf(LegacyLinkPost).set_rebloggedFromTitle_lpffbx_k$ = function (_set____db54di) {
    this.rebloggedFromTitle_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_rebloggedFromTitle_pswmt6_k$ = function () {
    return this.rebloggedFromTitle_1;
  };
  protoOf(LegacyLinkPost).set_rebloggedFromUuid_y1lhby_k$ = function (_set____db54di) {
    this.rebloggedFromUuid_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_rebloggedFromUuid_q1awj7_k$ = function () {
    return this.rebloggedFromUuid_1;
  };
  protoOf(LegacyLinkPost).set_rebloggedFromCanMessage_xd73vv_k$ = function (_set____db54di) {
    this.rebloggedFromCanMessage_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_rebloggedFromCanMessage_ik49xz_k$ = function () {
    return this.rebloggedFromCanMessage_1;
  };
  protoOf(LegacyLinkPost).set_rebloggedFromFollowing_134hoz_k$ = function (_set____db54di) {
    this.rebloggedFromFollowing_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_rebloggedFromFollowing_60tgsh_k$ = function () {
    return this.rebloggedFromFollowing_1;
  };
  protoOf(LegacyLinkPost).set_rebloggedRootId_dkbyli_k$ = function (_set____db54di) {
    this.rebloggedRootId_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_rebloggedRootId_342cd7_k$ = function () {
    return this.rebloggedRootId_1;
  };
  protoOf(LegacyLinkPost).set_rebloggedRootUrl_hgpegy_k$ = function (_set____db54di) {
    this.rebloggedRootUrl_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_rebloggedRootUrl_pgwc2j_k$ = function () {
    return this.rebloggedRootUrl_1;
  };
  protoOf(LegacyLinkPost).set_rebloggedRootName_w79je_k$ = function (_set____db54di) {
    this.rebloggedRootName_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_rebloggedRootName_87qluz_k$ = function () {
    return this.rebloggedRootName_1;
  };
  protoOf(LegacyLinkPost).set_rebloggedRootTitle_n6vp_k$ = function (_set____db54di) {
    this.rebloggedRootTitle_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_rebloggedRootTitle_tjzf4e_k$ = function () {
    return this.rebloggedRootTitle_1;
  };
  protoOf(LegacyLinkPost).set_rebloggedRootUuid_xcerie_k$ = function (_set____db54di) {
    this.rebloggedRootUuid_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_rebloggedRootUuid_87lq7v_k$ = function () {
    return this.rebloggedRootUuid_1;
  };
  protoOf(LegacyLinkPost).set_rebloggedRootCanMessage_92f4mr_k$ = function (_set____db54di) {
    this.rebloggedRootCanMessage_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_rebloggedRootCanMessage_s8kylb_k$ = function () {
    return this.rebloggedRootCanMessage_1;
  };
  protoOf(LegacyLinkPost).set_rebloggedRootFollowing_9l3e05_k$ = function (_set____db54di) {
    this.rebloggedRootFollowing_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_rebloggedRootFollowing_mdgzg9_k$ = function () {
    return this.rebloggedRootFollowing_1;
  };
  protoOf(LegacyLinkPost).set_notes_59gpwq_k$ = function (_set____db54di) {
    this.notes_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_notes_ivw520_k$ = function () {
    return this.notes_1;
  };
  protoOf(LegacyLinkPost).set_blog_o3ffjm_k$ = function (_set____db54di) {
    this.blog_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_blog_wojizv_k$ = function () {
    return this.blog_1;
  };
  protoOf(LegacyLinkPost).set_reblog_scs22y_k$ = function (_set____db54di) {
    this.reblog_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_reblog_iy53z2_k$ = function () {
    return this.reblog_1;
  };
  protoOf(LegacyLinkPost).set_trail_t0ip0s_k$ = function (_set____db54di) {
    this.trail_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_trail_iz8fkt_k$ = function () {
    return this.trail_1;
  };
  protoOf(LegacyLinkPost).set_description_s1386w_k$ = function (_set____db54di) {
    this.description = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_description_emjre5_k$ = function () {
    return this.description;
  };
  protoOf(LegacyLinkPost).set_url_fvthdx_k$ = function (_set____db54di) {
    this.url = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_url_18iuii_k$ = function () {
    return this.url;
  };
  protoOf(LegacyLinkPost).set_linkAuthor_2jsx57_k$ = function (_set____db54di) {
    this.linkAuthor = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_linkAuthor_eqekia_k$ = function () {
    return this.linkAuthor;
  };
  protoOf(LegacyLinkPost).set_excerpt_pktsqb_k$ = function (_set____db54di) {
    this.excerpt = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_excerpt_kl5duw_k$ = function () {
    return this.excerpt;
  };
  protoOf(LegacyLinkPost).set_publisher_u973bc_k$ = function (_set____db54di) {
    this.publisher = _set____db54di;
  };
  protoOf(LegacyLinkPost).get_publisher_wg9par_k$ = function () {
    return this.publisher;
  };
  function _get_$childSerializers__r2zwns_11($this) {
    return $this.$childSerializers_1;
  }
  function LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), StringSerializer_getInstance());
  }
  function LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3_0() {
    return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_10());
  }
  function LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3_1() {
    return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_30());
  }
  function LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3_2() {
    return new ReferenceArraySerializer(getKClass(Photo), $serializer_getInstance_25());
  }
  function Companion_22() {
    Companion_instance_22 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, tmp_5, null, null, null, lazy(tmp_6, LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3_2)];
  }
  protoOf(Companion_22).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_20();
  };
  var Companion_instance_22;
  function Companion_getInstance_23() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function $serializer_21() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyPhotoPost', this, 44);
    tmp0_serialDesc.addElement_5pzumi_k$('blog_name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('id_string', false);
    tmp0_serialDesc.addElement_5pzumi_k$('genesis_post_id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('post_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('parent_post_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('type', false);
    tmp0_serialDesc.addElement_5pzumi_k$('timestamp', false);
    tmp0_serialDesc.addElement_5pzumi_k$('date', false);
    tmp0_serialDesc.addElement_5pzumi_k$('format', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblog_key', false);
    tmp0_serialDesc.addElement_5pzumi_k$('tags', false);
    tmp0_serialDesc.addElement_5pzumi_k$('bookmarklet', false);
    tmp0_serialDesc.addElement_5pzumi_k$('mobile', false);
    tmp0_serialDesc.addElement_5pzumi_k$('source_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('source_title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('liked', false);
    tmp0_serialDesc.addElement_5pzumi_k$('state', false);
    tmp0_serialDesc.addElement_5pzumi_k$('title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('body', false);
    tmp0_serialDesc.addElement_5pzumi_k$('note_count', false);
    tmp0_serialDesc.addElement_5pzumi_k$('summary', false);
    tmp0_serialDesc.addElement_5pzumi_k$('slug', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_uuid', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_can_message', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_following', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_uuid', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_can_message', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_following', false);
    tmp0_serialDesc.addElement_5pzumi_k$('notes', false);
    tmp0_serialDesc.addElement_5pzumi_k$('blog', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblog', false);
    tmp0_serialDesc.addElement_5pzumi_k$('trail', false);
    tmp0_serialDesc.addElement_5pzumi_k$('caption', true);
    tmp0_serialDesc.addElement_5pzumi_k$('width', true);
    tmp0_serialDesc.addElement_5pzumi_k$('height', true);
    tmp0_serialDesc.addElement_5pzumi_k$('photos', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_21).serialize_oee1fh_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_23().$childSerializers_1;
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, StringSerializer_getInstance(), value.blogName_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, StringSerializer_getInstance(), value.idString_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, StringSerializer_getInstance(), value.genesisPostId_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 3, StringSerializer_getInstance(), value.postUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 4, StringSerializer_getInstance(), value.parentPostUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 5, StringSerializer_getInstance(), value.type_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 6, IntSerializer_getInstance(), value.timestamp_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 7, StringSerializer_getInstance(), value.date_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 8, StringSerializer_getInstance(), value.format_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 9, StringSerializer_getInstance(), value.reblogKey_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 10, tmp2_cached[10].get_value_j01efc_k$(), value.tags_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 11, BooleanSerializer_getInstance(), value.isBookmarklet_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 12, BooleanSerializer_getInstance(), value.isMobile_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 13, StringSerializer_getInstance(), value.sourceUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 14, StringSerializer_getInstance(), value.sourceTitle_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 15, BooleanSerializer_getInstance(), value.isLiked_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 16, StringSerializer_getInstance(), value.state_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 17, StringSerializer_getInstance(), value.title_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 18, StringSerializer_getInstance(), value.body_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 19, IntSerializer_getInstance(), value.noteCount_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 20, StringSerializer_getInstance(), value.summary_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 21, StringSerializer_getInstance(), value.slug_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 22, StringSerializer_getInstance(), value.rebloggedFromId_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 23, StringSerializer_getInstance(), value.rebloggedFromUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 24, StringSerializer_getInstance(), value.rebloggedFromName_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 25, StringSerializer_getInstance(), value.rebloggedFromTitle_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 26, StringSerializer_getInstance(), value.rebloggedFromUuid_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 27, BooleanSerializer_getInstance(), value.rebloggedFromCanMessage_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 28, BooleanSerializer_getInstance(), value.rebloggedFromFollowing_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 29, StringSerializer_getInstance(), value.rebloggedRootId_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 30, StringSerializer_getInstance(), value.rebloggedRootUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 31, StringSerializer_getInstance(), value.rebloggedRootName_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 32, StringSerializer_getInstance(), value.rebloggedRootTitle_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 33, StringSerializer_getInstance(), value.rebloggedRootUuid_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 34, BooleanSerializer_getInstance(), value.rebloggedRootCanMessage_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 35, BooleanSerializer_getInstance(), value.rebloggedRootFollowing_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 36, tmp2_cached[36].get_value_j01efc_k$(), value.notes_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 37, $serializer_getInstance_12(), value.blog_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 38, $serializer_getInstance_15(), value.reblog_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 39, tmp2_cached[39].get_value_j01efc_k$(), value.trail_1);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 40) ? true : !(value.caption == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 40, StringSerializer_getInstance(), value.caption);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 41) ? true : !(value.width == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 41, IntSerializer_getInstance(), value.width);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 42) ? true : !(value.height == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 42, IntSerializer_getInstance(), value.height);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 43) ? true : !(value.photos == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 43, tmp2_cached[43].get_value_j01efc_k$(), value.photos);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_21).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_oee1fh_k$(encoder, value instanceof LegacyPhotoPost ? value : THROW_CCE());
  };
  protoOf($serializer_21).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_bitMask1 = 0;
    var tmp5_local0 = null;
    var tmp6_local1 = null;
    var tmp7_local2 = null;
    var tmp8_local3 = null;
    var tmp9_local4 = null;
    var tmp10_local5 = null;
    var tmp11_local6 = null;
    var tmp12_local7 = null;
    var tmp13_local8 = null;
    var tmp14_local9 = null;
    var tmp15_local10 = null;
    var tmp16_local11 = null;
    var tmp17_local12 = null;
    var tmp18_local13 = null;
    var tmp19_local14 = null;
    var tmp20_local15 = null;
    var tmp21_local16 = null;
    var tmp22_local17 = null;
    var tmp23_local18 = null;
    var tmp24_local19 = null;
    var tmp25_local20 = null;
    var tmp26_local21 = null;
    var tmp27_local22 = null;
    var tmp28_local23 = null;
    var tmp29_local24 = null;
    var tmp30_local25 = null;
    var tmp31_local26 = null;
    var tmp32_local27 = null;
    var tmp33_local28 = null;
    var tmp34_local29 = null;
    var tmp35_local30 = null;
    var tmp36_local31 = null;
    var tmp37_local32 = null;
    var tmp38_local33 = null;
    var tmp39_local34 = null;
    var tmp40_local35 = null;
    var tmp41_local36 = null;
    var tmp42_local37 = null;
    var tmp43_local38 = null;
    var tmp44_local39 = null;
    var tmp45_local40 = null;
    var tmp46_local41 = null;
    var tmp47_local42 = null;
    var tmp48_local43 = null;
    var tmp49_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp50_cached = Companion_getInstance_23().$childSerializers_1;
    if (tmp49_input.decodeSequentially_xlblqy_k$()) {
      tmp5_local0 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 10, tmp50_cached[10].get_value_j01efc_k$(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 36, tmp50_cached[36].get_value_j01efc_k$(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 39, tmp50_cached[39].get_value_j01efc_k$(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 41, IntSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp47_local42 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 42, IntSerializer_getInstance(), tmp47_local42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp48_local43 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 43, tmp50_cached[43].get_value_j01efc_k$(), tmp48_local43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp49_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 10, tmp50_cached[10].get_value_j01efc_k$(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 36, tmp50_cached[36].get_value_j01efc_k$(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 39, tmp50_cached[39].get_value_j01efc_k$(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 41, IntSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp47_local42 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 42, IntSerializer_getInstance(), tmp47_local42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp48_local43 = tmp49_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 43, tmp50_cached[43].get_value_j01efc_k$(), tmp48_local43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp49_input.endStructure_1xqz0n_k$(tmp0_desc);
    return LegacyPhotoPost_init_$Create$(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, tmp47_local42, tmp48_local43, null);
  };
  protoOf($serializer_21).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_21).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_23().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].get_value_j01efc_k$()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].get_value_j01efc_k$()), get_nullable($serializer_getInstance_12()), get_nullable($serializer_getInstance_15()), get_nullable(tmp0_cached[39].get_value_j01efc_k$()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[43].get_value_j01efc_k$())];
  };
  var $serializer_instance_20;
  function $serializer_getInstance_20() {
    if ($serializer_instance_20 == null)
      new $serializer_21();
    return $serializer_instance_20;
  }
  function LegacyPhotoPost_init_$Init$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, caption, width, height, photos, serializationConstructorMarker, $this) {
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_20().descriptor_1);
    }
    Post.call($this);
    $this.blogName_1 = blogName;
    $this.idString_1 = idString;
    $this.genesisPostId_1 = genesisPostId;
    $this.postUrl_1 = postUrl;
    $this.parentPostUrl_1 = parentPostUrl;
    $this.type_1 = type;
    $this.timestamp_1 = timestamp;
    $this.date_1 = date;
    $this.format_1 = format;
    $this.reblogKey_1 = reblogKey;
    $this.tags_1 = tags;
    $this.isBookmarklet_1 = isBookmarklet;
    $this.isMobile_1 = isMobile;
    $this.sourceUrl_1 = sourceUrl;
    $this.sourceTitle_1 = sourceTitle;
    $this.isLiked_1 = isLiked;
    $this.state_1 = state;
    $this.title_1 = title;
    $this.body_1 = body;
    $this.noteCount_1 = noteCount;
    $this.summary_1 = summary;
    $this.slug_1 = slug;
    $this.rebloggedFromId_1 = rebloggedFromId;
    $this.rebloggedFromUrl_1 = rebloggedFromUrl;
    $this.rebloggedFromName_1 = rebloggedFromName;
    $this.rebloggedFromTitle_1 = rebloggedFromTitle;
    $this.rebloggedFromUuid_1 = rebloggedFromUuid;
    $this.rebloggedFromCanMessage_1 = rebloggedFromCanMessage;
    $this.rebloggedFromFollowing_1 = rebloggedFromFollowing;
    $this.rebloggedRootId_1 = rebloggedRootId;
    $this.rebloggedRootUrl_1 = rebloggedRootUrl;
    $this.rebloggedRootName_1 = rebloggedRootName;
    $this.rebloggedRootTitle_1 = rebloggedRootTitle;
    $this.rebloggedRootUuid_1 = rebloggedRootUuid;
    $this.rebloggedRootCanMessage_1 = rebloggedRootCanMessage;
    $this.rebloggedRootFollowing_1 = rebloggedRootFollowing;
    $this.notes_1 = notes;
    $this.blog_1 = blog;
    $this.reblog_1 = reblog;
    $this.trail_1 = trail;
    if (0 === (seen1 & 256))
      $this.caption = null;
    else
      $this.caption = caption;
    if (0 === (seen1 & 512))
      $this.width = null;
    else
      $this.width = width;
    if (0 === (seen1 & 1024))
      $this.height = null;
    else
      $this.height = height;
    if (0 === (seen1 & 2048))
      $this.photos = null;
    else
      $this.photos = photos;
    return $this;
  }
  function LegacyPhotoPost_init_$Create$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, caption, width, height, photos, serializationConstructorMarker) {
    return LegacyPhotoPost_init_$Init$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, caption, width, height, photos, serializationConstructorMarker, objectCreate(protoOf(LegacyPhotoPost)));
  }
  function LegacyPhotoPost(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_23();
    Post.call(this);
    this.blogName_1 = blogName;
    this.idString_1 = idString;
    this.genesisPostId_1 = genesisPostId;
    this.postUrl_1 = postUrl;
    this.parentPostUrl_1 = parentPostUrl;
    this.type_1 = type;
    this.timestamp_1 = timestamp;
    this.date_1 = date;
    this.format_1 = format;
    this.reblogKey_1 = reblogKey;
    this.tags_1 = tags;
    this.isBookmarklet_1 = isBookmarklet;
    this.isMobile_1 = isMobile;
    this.sourceUrl_1 = sourceUrl;
    this.sourceTitle_1 = sourceTitle;
    this.isLiked_1 = isLiked;
    this.state_1 = state;
    this.title_1 = title;
    this.body_1 = body;
    this.noteCount_1 = noteCount;
    this.summary_1 = summary;
    this.slug_1 = slug;
    this.rebloggedFromId_1 = rebloggedFromId;
    this.rebloggedFromUrl_1 = rebloggedFromUrl;
    this.rebloggedFromName_1 = rebloggedFromName;
    this.rebloggedFromTitle_1 = rebloggedFromTitle;
    this.rebloggedFromUuid_1 = rebloggedFromUuid;
    this.rebloggedFromCanMessage_1 = rebloggedFromCanMessage;
    this.rebloggedFromFollowing_1 = rebloggedFromFollowing;
    this.rebloggedRootId_1 = rebloggedRootId;
    this.rebloggedRootUrl_1 = rebloggedRootUrl;
    this.rebloggedRootName_1 = rebloggedRootName;
    this.rebloggedRootTitle_1 = rebloggedRootTitle;
    this.rebloggedRootUuid_1 = rebloggedRootUuid;
    this.rebloggedRootCanMessage_1 = rebloggedRootCanMessage;
    this.rebloggedRootFollowing_1 = rebloggedRootFollowing;
    this.notes_1 = notes;
    this.blog_1 = blog;
    this.reblog_1 = reblog;
    this.trail_1 = trail;
    this.caption = null;
    this.width = null;
    this.height = null;
    this.photos = null;
  }
  protoOf(LegacyPhotoPost).set_blogName_4hbv7x_k$ = function (_set____db54di) {
    this.blogName_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_blogName_sa6pee_k$ = function () {
    return this.blogName_1;
  };
  protoOf(LegacyPhotoPost).set_idString_uk2vzm_k$ = function (_set____db54di) {
    this.idString_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_idString_sjsr85_k$ = function () {
    return this.idString_1;
  };
  protoOf(LegacyPhotoPost).set_genesisPostId_z3sus1_k$ = function (_set____db54di) {
    this.genesisPostId_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_genesisPostId_95cwau_k$ = function () {
    return this.genesisPostId_1;
  };
  protoOf(LegacyPhotoPost).set_postUrl_etq64l_k$ = function (_set____db54di) {
    this.postUrl_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_postUrl_57da2i_k$ = function () {
    return this.postUrl_1;
  };
  protoOf(LegacyPhotoPost).set_parentPostUrl_9ua7l_k$ = function (_set____db54di) {
    this.parentPostUrl_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_parentPostUrl_e3yik_k$ = function () {
    return this.parentPostUrl_1;
  };
  protoOf(LegacyPhotoPost).set_type_4507og_k$ = function (_set____db54di) {
    this.type_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(LegacyPhotoPost).set_timestamp_cgo46a_k$ = function (_set____db54di) {
    this.timestamp_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_timestamp_9fccx9_k$ = function () {
    return this.timestamp_1;
  };
  protoOf(LegacyPhotoPost).set_date_y25dgs_k$ = function (_set____db54di) {
    this.date_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_date_wokkxj_k$ = function () {
    return this.date_1;
  };
  protoOf(LegacyPhotoPost).set_format_yd74t9_k$ = function (_set____db54di) {
    this.format_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_format_dfdtds_k$ = function () {
    return this.format_1;
  };
  protoOf(LegacyPhotoPost).set_reblogKey_q2gl9m_k$ = function (_set____db54di) {
    this.reblogKey_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_reblogKey_8swysh_k$ = function () {
    return this.reblogKey_1;
  };
  protoOf(LegacyPhotoPost).set_tags_7racvz_k$ = function (_set____db54di) {
    this.tags_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_tags_wousf6_k$ = function () {
    return this.tags_1;
  };
  protoOf(LegacyPhotoPost).set_isBookmarklet_e6r6jm_k$ = function (_set____db54di) {
    this.isBookmarklet_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_isBookmarklet_xsfl2q_k$ = function () {
    return this.isBookmarklet_1;
  };
  protoOf(LegacyPhotoPost).set_isMobile_ymy749_k$ = function (_set____db54di) {
    this.isMobile_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_isMobile_wp3xh1_k$ = function () {
    return this.isMobile_1;
  };
  protoOf(LegacyPhotoPost).set_sourceUrl_nz40kg_k$ = function (_set____db54di) {
    this.sourceUrl_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_sourceUrl_jko7yt_k$ = function () {
    return this.sourceUrl_1;
  };
  protoOf(LegacyPhotoPost).set_sourceTitle_6ljuq1_k$ = function (_set____db54di) {
    this.sourceTitle_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_sourceTitle_cbkkgk_k$ = function () {
    return this.sourceTitle_1;
  };
  protoOf(LegacyPhotoPost).set_isLiked_vjtt2e_k$ = function (_set____db54di) {
    this.isLiked_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_isLiked_zemrwa_k$ = function () {
    return this.isLiked_1;
  };
  protoOf(LegacyPhotoPost).set_state_836lgd_k$ = function (_set____db54di) {
    this.state_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  protoOf(LegacyPhotoPost).set_title_ceyuu4_k$ = function (_set____db54di) {
    this.title_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(LegacyPhotoPost).set_body_d8bq7s_k$ = function (_set____db54di) {
    this.body_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  protoOf(LegacyPhotoPost).set_noteCount_gc35kr_k$ = function (_set____db54di) {
    this.noteCount_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_noteCount_xhpyss_k$ = function () {
    return this.noteCount_1;
  };
  protoOf(LegacyPhotoPost).set_summary_elnle6_k$ = function (_set____db54di) {
    this.summary_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_summary_tgfqkj_k$ = function () {
    return this.summary_1;
  };
  protoOf(LegacyPhotoPost).set_slug_iclwbz_k$ = function (_set____db54di) {
    this.slug_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_slug_woudx0_k$ = function () {
    return this.slug_1;
  };
  protoOf(LegacyPhotoPost).set_rebloggedFromId_7fi68u_k$ = function (_set____db54di) {
    this.rebloggedFromId_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_rebloggedFromId_8qykib_k$ = function () {
    return this.rebloggedFromId_1;
  };
  protoOf(LegacyPhotoPost).set_rebloggedFromUrl_5gzcjq_k$ = function (_set____db54di) {
    this.rebloggedFromUrl_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_rebloggedFromUrl_cwotgd_k$ = function () {
    return this.rebloggedFromUrl_1;
  };
  protoOf(LegacyPhotoPost).set_rebloggedFromName_70jpu_k$ = function (_set____db54di) {
    this.rebloggedFromName_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_rebloggedFromName_q1fs6b_k$ = function () {
    return this.rebloggedFromName_1;
  };
  protoOf(LegacyPhotoPost).set_rebloggedFromTitle_lpffbx_k$ = function (_set____db54di) {
    this.rebloggedFromTitle_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_rebloggedFromTitle_pswmt6_k$ = function () {
    return this.rebloggedFromTitle_1;
  };
  protoOf(LegacyPhotoPost).set_rebloggedFromUuid_y1lhby_k$ = function (_set____db54di) {
    this.rebloggedFromUuid_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_rebloggedFromUuid_q1awj7_k$ = function () {
    return this.rebloggedFromUuid_1;
  };
  protoOf(LegacyPhotoPost).set_rebloggedFromCanMessage_xd73vv_k$ = function (_set____db54di) {
    this.rebloggedFromCanMessage_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_rebloggedFromCanMessage_ik49xz_k$ = function () {
    return this.rebloggedFromCanMessage_1;
  };
  protoOf(LegacyPhotoPost).set_rebloggedFromFollowing_134hoz_k$ = function (_set____db54di) {
    this.rebloggedFromFollowing_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_rebloggedFromFollowing_60tgsh_k$ = function () {
    return this.rebloggedFromFollowing_1;
  };
  protoOf(LegacyPhotoPost).set_rebloggedRootId_dkbyli_k$ = function (_set____db54di) {
    this.rebloggedRootId_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_rebloggedRootId_342cd7_k$ = function () {
    return this.rebloggedRootId_1;
  };
  protoOf(LegacyPhotoPost).set_rebloggedRootUrl_hgpegy_k$ = function (_set____db54di) {
    this.rebloggedRootUrl_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_rebloggedRootUrl_pgwc2j_k$ = function () {
    return this.rebloggedRootUrl_1;
  };
  protoOf(LegacyPhotoPost).set_rebloggedRootName_w79je_k$ = function (_set____db54di) {
    this.rebloggedRootName_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_rebloggedRootName_87qluz_k$ = function () {
    return this.rebloggedRootName_1;
  };
  protoOf(LegacyPhotoPost).set_rebloggedRootTitle_n6vp_k$ = function (_set____db54di) {
    this.rebloggedRootTitle_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_rebloggedRootTitle_tjzf4e_k$ = function () {
    return this.rebloggedRootTitle_1;
  };
  protoOf(LegacyPhotoPost).set_rebloggedRootUuid_xcerie_k$ = function (_set____db54di) {
    this.rebloggedRootUuid_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_rebloggedRootUuid_87lq7v_k$ = function () {
    return this.rebloggedRootUuid_1;
  };
  protoOf(LegacyPhotoPost).set_rebloggedRootCanMessage_92f4mr_k$ = function (_set____db54di) {
    this.rebloggedRootCanMessage_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_rebloggedRootCanMessage_s8kylb_k$ = function () {
    return this.rebloggedRootCanMessage_1;
  };
  protoOf(LegacyPhotoPost).set_rebloggedRootFollowing_9l3e05_k$ = function (_set____db54di) {
    this.rebloggedRootFollowing_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_rebloggedRootFollowing_mdgzg9_k$ = function () {
    return this.rebloggedRootFollowing_1;
  };
  protoOf(LegacyPhotoPost).set_notes_59gpwq_k$ = function (_set____db54di) {
    this.notes_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_notes_ivw520_k$ = function () {
    return this.notes_1;
  };
  protoOf(LegacyPhotoPost).set_blog_o3ffjm_k$ = function (_set____db54di) {
    this.blog_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_blog_wojizv_k$ = function () {
    return this.blog_1;
  };
  protoOf(LegacyPhotoPost).set_reblog_scs22y_k$ = function (_set____db54di) {
    this.reblog_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_reblog_iy53z2_k$ = function () {
    return this.reblog_1;
  };
  protoOf(LegacyPhotoPost).set_trail_t0ip0s_k$ = function (_set____db54di) {
    this.trail_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_trail_iz8fkt_k$ = function () {
    return this.trail_1;
  };
  protoOf(LegacyPhotoPost).set_caption_drz67m_k$ = function (_set____db54di) {
    this.caption = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_caption_aejif1_k$ = function () {
    return this.caption;
  };
  protoOf(LegacyPhotoPost).set_width_8vagwe_k$ = function (_set____db54di) {
    this.width = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_width_j0q4yl_k$ = function () {
    return this.width;
  };
  protoOf(LegacyPhotoPost).set_height_gznegn_k$ = function (_set____db54di) {
    this.height = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_height_e7t92o_k$ = function () {
    return this.height;
  };
  protoOf(LegacyPhotoPost).set_photos_6mtz00_k$ = function (_set____db54di) {
    this.photos = _set____db54di;
  };
  protoOf(LegacyPhotoPost).get_photos_i1xpqi_k$ = function () {
    return this.photos;
  };
  function _get_$childSerializers__r2zwns_12($this) {
    return $this.$childSerializers_1;
  }
  function LegacyQuotePost$Companion$$childSerializers$_anonymous__qrbaix() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), StringSerializer_getInstance());
  }
  function LegacyQuotePost$Companion$$childSerializers$_anonymous__qrbaix_0() {
    return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_10());
  }
  function LegacyQuotePost$Companion$$childSerializers$_anonymous__qrbaix_1() {
    return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_30());
  }
  function Companion_23() {
    Companion_instance_23 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyQuotePost$Companion$$childSerializers$_anonymous__qrbaix);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyQuotePost$Companion$$childSerializers$_anonymous__qrbaix_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyQuotePost$Companion$$childSerializers$_anonymous__qrbaix_1), null, null];
  }
  protoOf(Companion_23).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_21();
  };
  var Companion_instance_23;
  function Companion_getInstance_24() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function $serializer_22() {
    $serializer_instance_21 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyQuotePost', this, 42);
    tmp0_serialDesc.addElement_5pzumi_k$('blog_name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('id_string', false);
    tmp0_serialDesc.addElement_5pzumi_k$('genesis_post_id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('post_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('parent_post_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('type', false);
    tmp0_serialDesc.addElement_5pzumi_k$('timestamp', false);
    tmp0_serialDesc.addElement_5pzumi_k$('date', false);
    tmp0_serialDesc.addElement_5pzumi_k$('format', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblog_key', false);
    tmp0_serialDesc.addElement_5pzumi_k$('tags', false);
    tmp0_serialDesc.addElement_5pzumi_k$('bookmarklet', false);
    tmp0_serialDesc.addElement_5pzumi_k$('mobile', false);
    tmp0_serialDesc.addElement_5pzumi_k$('source_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('source_title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('liked', false);
    tmp0_serialDesc.addElement_5pzumi_k$('state', false);
    tmp0_serialDesc.addElement_5pzumi_k$('title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('body', false);
    tmp0_serialDesc.addElement_5pzumi_k$('note_count', false);
    tmp0_serialDesc.addElement_5pzumi_k$('summary', false);
    tmp0_serialDesc.addElement_5pzumi_k$('slug', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_uuid', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_can_message', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_following', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_uuid', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_can_message', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_following', false);
    tmp0_serialDesc.addElement_5pzumi_k$('notes', false);
    tmp0_serialDesc.addElement_5pzumi_k$('blog', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblog', false);
    tmp0_serialDesc.addElement_5pzumi_k$('trail', false);
    tmp0_serialDesc.addElement_5pzumi_k$('text', true);
    tmp0_serialDesc.addElement_5pzumi_k$('source', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_22).serialize_fj6ubd_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_24().$childSerializers_1;
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, StringSerializer_getInstance(), value.blogName_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, StringSerializer_getInstance(), value.idString_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, StringSerializer_getInstance(), value.genesisPostId_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 3, StringSerializer_getInstance(), value.postUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 4, StringSerializer_getInstance(), value.parentPostUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 5, StringSerializer_getInstance(), value.type_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 6, IntSerializer_getInstance(), value.timestamp_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 7, StringSerializer_getInstance(), value.date_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 8, StringSerializer_getInstance(), value.format_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 9, StringSerializer_getInstance(), value.reblogKey_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 10, tmp2_cached[10].get_value_j01efc_k$(), value.tags_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 11, BooleanSerializer_getInstance(), value.isBookmarklet_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 12, BooleanSerializer_getInstance(), value.isMobile_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 13, StringSerializer_getInstance(), value.sourceUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 14, StringSerializer_getInstance(), value.sourceTitle_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 15, BooleanSerializer_getInstance(), value.isLiked_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 16, StringSerializer_getInstance(), value.state_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 17, StringSerializer_getInstance(), value.title_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 18, StringSerializer_getInstance(), value.body_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 19, IntSerializer_getInstance(), value.noteCount_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 20, StringSerializer_getInstance(), value.summary_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 21, StringSerializer_getInstance(), value.slug_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 22, StringSerializer_getInstance(), value.rebloggedFromId_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 23, StringSerializer_getInstance(), value.rebloggedFromUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 24, StringSerializer_getInstance(), value.rebloggedFromName_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 25, StringSerializer_getInstance(), value.rebloggedFromTitle_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 26, StringSerializer_getInstance(), value.rebloggedFromUuid_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 27, BooleanSerializer_getInstance(), value.rebloggedFromCanMessage_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 28, BooleanSerializer_getInstance(), value.rebloggedFromFollowing_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 29, StringSerializer_getInstance(), value.rebloggedRootId_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 30, StringSerializer_getInstance(), value.rebloggedRootUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 31, StringSerializer_getInstance(), value.rebloggedRootName_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 32, StringSerializer_getInstance(), value.rebloggedRootTitle_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 33, StringSerializer_getInstance(), value.rebloggedRootUuid_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 34, BooleanSerializer_getInstance(), value.rebloggedRootCanMessage_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 35, BooleanSerializer_getInstance(), value.rebloggedRootFollowing_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 36, tmp2_cached[36].get_value_j01efc_k$(), value.notes_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 37, $serializer_getInstance_12(), value.blog_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 38, $serializer_getInstance_15(), value.reblog_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 39, tmp2_cached[39].get_value_j01efc_k$(), value.trail_1);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 40) ? true : !(value.text == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 40, StringSerializer_getInstance(), value.text);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 41) ? true : !(value.source == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 41, StringSerializer_getInstance(), value.source);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_22).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_fj6ubd_k$(encoder, value instanceof LegacyQuotePost ? value : THROW_CCE());
  };
  protoOf($serializer_22).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_bitMask1 = 0;
    var tmp5_local0 = null;
    var tmp6_local1 = null;
    var tmp7_local2 = null;
    var tmp8_local3 = null;
    var tmp9_local4 = null;
    var tmp10_local5 = null;
    var tmp11_local6 = null;
    var tmp12_local7 = null;
    var tmp13_local8 = null;
    var tmp14_local9 = null;
    var tmp15_local10 = null;
    var tmp16_local11 = null;
    var tmp17_local12 = null;
    var tmp18_local13 = null;
    var tmp19_local14 = null;
    var tmp20_local15 = null;
    var tmp21_local16 = null;
    var tmp22_local17 = null;
    var tmp23_local18 = null;
    var tmp24_local19 = null;
    var tmp25_local20 = null;
    var tmp26_local21 = null;
    var tmp27_local22 = null;
    var tmp28_local23 = null;
    var tmp29_local24 = null;
    var tmp30_local25 = null;
    var tmp31_local26 = null;
    var tmp32_local27 = null;
    var tmp33_local28 = null;
    var tmp34_local29 = null;
    var tmp35_local30 = null;
    var tmp36_local31 = null;
    var tmp37_local32 = null;
    var tmp38_local33 = null;
    var tmp39_local34 = null;
    var tmp40_local35 = null;
    var tmp41_local36 = null;
    var tmp42_local37 = null;
    var tmp43_local38 = null;
    var tmp44_local39 = null;
    var tmp45_local40 = null;
    var tmp46_local41 = null;
    var tmp47_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp48_cached = Companion_getInstance_24().$childSerializers_1;
    if (tmp47_input.decodeSequentially_xlblqy_k$()) {
      tmp5_local0 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 10, tmp48_cached[10].get_value_j01efc_k$(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 36, tmp48_cached[36].get_value_j01efc_k$(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 39, tmp48_cached[39].get_value_j01efc_k$(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp47_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 10, tmp48_cached[10].get_value_j01efc_k$(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 36, tmp48_cached[36].get_value_j01efc_k$(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 39, tmp48_cached[39].get_value_j01efc_k$(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp47_input.endStructure_1xqz0n_k$(tmp0_desc);
    return LegacyQuotePost_init_$Create$(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, null);
  };
  protoOf($serializer_22).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_22).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_24().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].get_value_j01efc_k$()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].get_value_j01efc_k$()), get_nullable($serializer_getInstance_12()), get_nullable($serializer_getInstance_15()), get_nullable(tmp0_cached[39].get_value_j01efc_k$()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_21;
  function $serializer_getInstance_21() {
    if ($serializer_instance_21 == null)
      new $serializer_22();
    return $serializer_instance_21;
  }
  function LegacyQuotePost_init_$Init$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, text, source, serializationConstructorMarker, $this) {
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_21().descriptor_1);
    }
    Post.call($this);
    $this.blogName_1 = blogName;
    $this.idString_1 = idString;
    $this.genesisPostId_1 = genesisPostId;
    $this.postUrl_1 = postUrl;
    $this.parentPostUrl_1 = parentPostUrl;
    $this.type_1 = type;
    $this.timestamp_1 = timestamp;
    $this.date_1 = date;
    $this.format_1 = format;
    $this.reblogKey_1 = reblogKey;
    $this.tags_1 = tags;
    $this.isBookmarklet_1 = isBookmarklet;
    $this.isMobile_1 = isMobile;
    $this.sourceUrl_1 = sourceUrl;
    $this.sourceTitle_1 = sourceTitle;
    $this.isLiked_1 = isLiked;
    $this.state_1 = state;
    $this.title_1 = title;
    $this.body_1 = body;
    $this.noteCount_1 = noteCount;
    $this.summary_1 = summary;
    $this.slug_1 = slug;
    $this.rebloggedFromId_1 = rebloggedFromId;
    $this.rebloggedFromUrl_1 = rebloggedFromUrl;
    $this.rebloggedFromName_1 = rebloggedFromName;
    $this.rebloggedFromTitle_1 = rebloggedFromTitle;
    $this.rebloggedFromUuid_1 = rebloggedFromUuid;
    $this.rebloggedFromCanMessage_1 = rebloggedFromCanMessage;
    $this.rebloggedFromFollowing_1 = rebloggedFromFollowing;
    $this.rebloggedRootId_1 = rebloggedRootId;
    $this.rebloggedRootUrl_1 = rebloggedRootUrl;
    $this.rebloggedRootName_1 = rebloggedRootName;
    $this.rebloggedRootTitle_1 = rebloggedRootTitle;
    $this.rebloggedRootUuid_1 = rebloggedRootUuid;
    $this.rebloggedRootCanMessage_1 = rebloggedRootCanMessage;
    $this.rebloggedRootFollowing_1 = rebloggedRootFollowing;
    $this.notes_1 = notes;
    $this.blog_1 = blog;
    $this.reblog_1 = reblog;
    $this.trail_1 = trail;
    if (0 === (seen1 & 256))
      $this.text = null;
    else
      $this.text = text;
    if (0 === (seen1 & 512))
      $this.source = null;
    else
      $this.source = source;
    return $this;
  }
  function LegacyQuotePost_init_$Create$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, text, source, serializationConstructorMarker) {
    return LegacyQuotePost_init_$Init$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, text, source, serializationConstructorMarker, objectCreate(protoOf(LegacyQuotePost)));
  }
  function LegacyQuotePost(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_24();
    Post.call(this);
    this.blogName_1 = blogName;
    this.idString_1 = idString;
    this.genesisPostId_1 = genesisPostId;
    this.postUrl_1 = postUrl;
    this.parentPostUrl_1 = parentPostUrl;
    this.type_1 = type;
    this.timestamp_1 = timestamp;
    this.date_1 = date;
    this.format_1 = format;
    this.reblogKey_1 = reblogKey;
    this.tags_1 = tags;
    this.isBookmarklet_1 = isBookmarklet;
    this.isMobile_1 = isMobile;
    this.sourceUrl_1 = sourceUrl;
    this.sourceTitle_1 = sourceTitle;
    this.isLiked_1 = isLiked;
    this.state_1 = state;
    this.title_1 = title;
    this.body_1 = body;
    this.noteCount_1 = noteCount;
    this.summary_1 = summary;
    this.slug_1 = slug;
    this.rebloggedFromId_1 = rebloggedFromId;
    this.rebloggedFromUrl_1 = rebloggedFromUrl;
    this.rebloggedFromName_1 = rebloggedFromName;
    this.rebloggedFromTitle_1 = rebloggedFromTitle;
    this.rebloggedFromUuid_1 = rebloggedFromUuid;
    this.rebloggedFromCanMessage_1 = rebloggedFromCanMessage;
    this.rebloggedFromFollowing_1 = rebloggedFromFollowing;
    this.rebloggedRootId_1 = rebloggedRootId;
    this.rebloggedRootUrl_1 = rebloggedRootUrl;
    this.rebloggedRootName_1 = rebloggedRootName;
    this.rebloggedRootTitle_1 = rebloggedRootTitle;
    this.rebloggedRootUuid_1 = rebloggedRootUuid;
    this.rebloggedRootCanMessage_1 = rebloggedRootCanMessage;
    this.rebloggedRootFollowing_1 = rebloggedRootFollowing;
    this.notes_1 = notes;
    this.blog_1 = blog;
    this.reblog_1 = reblog;
    this.trail_1 = trail;
    this.text = null;
    this.source = null;
  }
  protoOf(LegacyQuotePost).set_blogName_4hbv7x_k$ = function (_set____db54di) {
    this.blogName_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_blogName_sa6pee_k$ = function () {
    return this.blogName_1;
  };
  protoOf(LegacyQuotePost).set_idString_uk2vzm_k$ = function (_set____db54di) {
    this.idString_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_idString_sjsr85_k$ = function () {
    return this.idString_1;
  };
  protoOf(LegacyQuotePost).set_genesisPostId_z3sus1_k$ = function (_set____db54di) {
    this.genesisPostId_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_genesisPostId_95cwau_k$ = function () {
    return this.genesisPostId_1;
  };
  protoOf(LegacyQuotePost).set_postUrl_etq64l_k$ = function (_set____db54di) {
    this.postUrl_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_postUrl_57da2i_k$ = function () {
    return this.postUrl_1;
  };
  protoOf(LegacyQuotePost).set_parentPostUrl_9ua7l_k$ = function (_set____db54di) {
    this.parentPostUrl_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_parentPostUrl_e3yik_k$ = function () {
    return this.parentPostUrl_1;
  };
  protoOf(LegacyQuotePost).set_type_4507og_k$ = function (_set____db54di) {
    this.type_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(LegacyQuotePost).set_timestamp_cgo46a_k$ = function (_set____db54di) {
    this.timestamp_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_timestamp_9fccx9_k$ = function () {
    return this.timestamp_1;
  };
  protoOf(LegacyQuotePost).set_date_y25dgs_k$ = function (_set____db54di) {
    this.date_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_date_wokkxj_k$ = function () {
    return this.date_1;
  };
  protoOf(LegacyQuotePost).set_format_yd74t9_k$ = function (_set____db54di) {
    this.format_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_format_dfdtds_k$ = function () {
    return this.format_1;
  };
  protoOf(LegacyQuotePost).set_reblogKey_q2gl9m_k$ = function (_set____db54di) {
    this.reblogKey_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_reblogKey_8swysh_k$ = function () {
    return this.reblogKey_1;
  };
  protoOf(LegacyQuotePost).set_tags_7racvz_k$ = function (_set____db54di) {
    this.tags_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_tags_wousf6_k$ = function () {
    return this.tags_1;
  };
  protoOf(LegacyQuotePost).set_isBookmarklet_e6r6jm_k$ = function (_set____db54di) {
    this.isBookmarklet_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_isBookmarklet_xsfl2q_k$ = function () {
    return this.isBookmarklet_1;
  };
  protoOf(LegacyQuotePost).set_isMobile_ymy749_k$ = function (_set____db54di) {
    this.isMobile_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_isMobile_wp3xh1_k$ = function () {
    return this.isMobile_1;
  };
  protoOf(LegacyQuotePost).set_sourceUrl_nz40kg_k$ = function (_set____db54di) {
    this.sourceUrl_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_sourceUrl_jko7yt_k$ = function () {
    return this.sourceUrl_1;
  };
  protoOf(LegacyQuotePost).set_sourceTitle_6ljuq1_k$ = function (_set____db54di) {
    this.sourceTitle_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_sourceTitle_cbkkgk_k$ = function () {
    return this.sourceTitle_1;
  };
  protoOf(LegacyQuotePost).set_isLiked_vjtt2e_k$ = function (_set____db54di) {
    this.isLiked_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_isLiked_zemrwa_k$ = function () {
    return this.isLiked_1;
  };
  protoOf(LegacyQuotePost).set_state_836lgd_k$ = function (_set____db54di) {
    this.state_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  protoOf(LegacyQuotePost).set_title_ceyuu4_k$ = function (_set____db54di) {
    this.title_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(LegacyQuotePost).set_body_d8bq7s_k$ = function (_set____db54di) {
    this.body_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  protoOf(LegacyQuotePost).set_noteCount_gc35kr_k$ = function (_set____db54di) {
    this.noteCount_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_noteCount_xhpyss_k$ = function () {
    return this.noteCount_1;
  };
  protoOf(LegacyQuotePost).set_summary_elnle6_k$ = function (_set____db54di) {
    this.summary_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_summary_tgfqkj_k$ = function () {
    return this.summary_1;
  };
  protoOf(LegacyQuotePost).set_slug_iclwbz_k$ = function (_set____db54di) {
    this.slug_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_slug_woudx0_k$ = function () {
    return this.slug_1;
  };
  protoOf(LegacyQuotePost).set_rebloggedFromId_7fi68u_k$ = function (_set____db54di) {
    this.rebloggedFromId_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_rebloggedFromId_8qykib_k$ = function () {
    return this.rebloggedFromId_1;
  };
  protoOf(LegacyQuotePost).set_rebloggedFromUrl_5gzcjq_k$ = function (_set____db54di) {
    this.rebloggedFromUrl_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_rebloggedFromUrl_cwotgd_k$ = function () {
    return this.rebloggedFromUrl_1;
  };
  protoOf(LegacyQuotePost).set_rebloggedFromName_70jpu_k$ = function (_set____db54di) {
    this.rebloggedFromName_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_rebloggedFromName_q1fs6b_k$ = function () {
    return this.rebloggedFromName_1;
  };
  protoOf(LegacyQuotePost).set_rebloggedFromTitle_lpffbx_k$ = function (_set____db54di) {
    this.rebloggedFromTitle_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_rebloggedFromTitle_pswmt6_k$ = function () {
    return this.rebloggedFromTitle_1;
  };
  protoOf(LegacyQuotePost).set_rebloggedFromUuid_y1lhby_k$ = function (_set____db54di) {
    this.rebloggedFromUuid_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_rebloggedFromUuid_q1awj7_k$ = function () {
    return this.rebloggedFromUuid_1;
  };
  protoOf(LegacyQuotePost).set_rebloggedFromCanMessage_xd73vv_k$ = function (_set____db54di) {
    this.rebloggedFromCanMessage_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_rebloggedFromCanMessage_ik49xz_k$ = function () {
    return this.rebloggedFromCanMessage_1;
  };
  protoOf(LegacyQuotePost).set_rebloggedFromFollowing_134hoz_k$ = function (_set____db54di) {
    this.rebloggedFromFollowing_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_rebloggedFromFollowing_60tgsh_k$ = function () {
    return this.rebloggedFromFollowing_1;
  };
  protoOf(LegacyQuotePost).set_rebloggedRootId_dkbyli_k$ = function (_set____db54di) {
    this.rebloggedRootId_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_rebloggedRootId_342cd7_k$ = function () {
    return this.rebloggedRootId_1;
  };
  protoOf(LegacyQuotePost).set_rebloggedRootUrl_hgpegy_k$ = function (_set____db54di) {
    this.rebloggedRootUrl_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_rebloggedRootUrl_pgwc2j_k$ = function () {
    return this.rebloggedRootUrl_1;
  };
  protoOf(LegacyQuotePost).set_rebloggedRootName_w79je_k$ = function (_set____db54di) {
    this.rebloggedRootName_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_rebloggedRootName_87qluz_k$ = function () {
    return this.rebloggedRootName_1;
  };
  protoOf(LegacyQuotePost).set_rebloggedRootTitle_n6vp_k$ = function (_set____db54di) {
    this.rebloggedRootTitle_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_rebloggedRootTitle_tjzf4e_k$ = function () {
    return this.rebloggedRootTitle_1;
  };
  protoOf(LegacyQuotePost).set_rebloggedRootUuid_xcerie_k$ = function (_set____db54di) {
    this.rebloggedRootUuid_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_rebloggedRootUuid_87lq7v_k$ = function () {
    return this.rebloggedRootUuid_1;
  };
  protoOf(LegacyQuotePost).set_rebloggedRootCanMessage_92f4mr_k$ = function (_set____db54di) {
    this.rebloggedRootCanMessage_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_rebloggedRootCanMessage_s8kylb_k$ = function () {
    return this.rebloggedRootCanMessage_1;
  };
  protoOf(LegacyQuotePost).set_rebloggedRootFollowing_9l3e05_k$ = function (_set____db54di) {
    this.rebloggedRootFollowing_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_rebloggedRootFollowing_mdgzg9_k$ = function () {
    return this.rebloggedRootFollowing_1;
  };
  protoOf(LegacyQuotePost).set_notes_59gpwq_k$ = function (_set____db54di) {
    this.notes_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_notes_ivw520_k$ = function () {
    return this.notes_1;
  };
  protoOf(LegacyQuotePost).set_blog_o3ffjm_k$ = function (_set____db54di) {
    this.blog_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_blog_wojizv_k$ = function () {
    return this.blog_1;
  };
  protoOf(LegacyQuotePost).set_reblog_scs22y_k$ = function (_set____db54di) {
    this.reblog_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_reblog_iy53z2_k$ = function () {
    return this.reblog_1;
  };
  protoOf(LegacyQuotePost).set_trail_t0ip0s_k$ = function (_set____db54di) {
    this.trail_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_trail_iz8fkt_k$ = function () {
    return this.trail_1;
  };
  protoOf(LegacyQuotePost).set_text_ifhbbn_k$ = function (_set____db54di) {
    this.text = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_text_wouvsm_k$ = function () {
    return this.text;
  };
  protoOf(LegacyQuotePost).set_source_smv1hd_k$ = function (_set____db54di) {
    this.source = _set____db54di;
  };
  protoOf(LegacyQuotePost).get_source_jl0x7o_k$ = function () {
    return this.source;
  };
  function _get_$childSerializers__r2zwns_13($this) {
    return $this.$childSerializers_1;
  }
  function LegacyTextPost$Companion$$childSerializers$_anonymous__5pflt8() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), StringSerializer_getInstance());
  }
  function LegacyTextPost$Companion$$childSerializers$_anonymous__5pflt8_0() {
    return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_10());
  }
  function LegacyTextPost$Companion$$childSerializers$_anonymous__5pflt8_1() {
    return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_30());
  }
  function Companion_24() {
    Companion_instance_24 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyTextPost$Companion$$childSerializers$_anonymous__5pflt8);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyTextPost$Companion$$childSerializers$_anonymous__5pflt8_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyTextPost$Companion$$childSerializers$_anonymous__5pflt8_1)];
  }
  protoOf(Companion_24).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_22();
  };
  var Companion_instance_24;
  function Companion_getInstance_25() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function $serializer_23() {
    $serializer_instance_22 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyTextPost', this, 40);
    tmp0_serialDesc.addElement_5pzumi_k$('blog_name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('id_string', false);
    tmp0_serialDesc.addElement_5pzumi_k$('genesis_post_id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('post_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('parent_post_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('type', false);
    tmp0_serialDesc.addElement_5pzumi_k$('timestamp', false);
    tmp0_serialDesc.addElement_5pzumi_k$('date', false);
    tmp0_serialDesc.addElement_5pzumi_k$('format', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblog_key', false);
    tmp0_serialDesc.addElement_5pzumi_k$('tags', false);
    tmp0_serialDesc.addElement_5pzumi_k$('bookmarklet', false);
    tmp0_serialDesc.addElement_5pzumi_k$('mobile', false);
    tmp0_serialDesc.addElement_5pzumi_k$('source_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('source_title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('liked', false);
    tmp0_serialDesc.addElement_5pzumi_k$('state', false);
    tmp0_serialDesc.addElement_5pzumi_k$('title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('body', false);
    tmp0_serialDesc.addElement_5pzumi_k$('note_count', false);
    tmp0_serialDesc.addElement_5pzumi_k$('summary', false);
    tmp0_serialDesc.addElement_5pzumi_k$('slug', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_uuid', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_can_message', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_following', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_uuid', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_can_message', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_following', false);
    tmp0_serialDesc.addElement_5pzumi_k$('notes', false);
    tmp0_serialDesc.addElement_5pzumi_k$('blog', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblog', false);
    tmp0_serialDesc.addElement_5pzumi_k$('trail', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_23).serialize_2hrwli_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_25().$childSerializers_1;
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, StringSerializer_getInstance(), value.blogName_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, StringSerializer_getInstance(), value.idString_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, StringSerializer_getInstance(), value.genesisPostId_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 3, StringSerializer_getInstance(), value.postUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 4, StringSerializer_getInstance(), value.parentPostUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 5, StringSerializer_getInstance(), value.type_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 6, IntSerializer_getInstance(), value.timestamp_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 7, StringSerializer_getInstance(), value.date_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 8, StringSerializer_getInstance(), value.format_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 9, StringSerializer_getInstance(), value.reblogKey_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 10, tmp2_cached[10].get_value_j01efc_k$(), value.tags_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 11, BooleanSerializer_getInstance(), value.isBookmarklet_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 12, BooleanSerializer_getInstance(), value.isMobile_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 13, StringSerializer_getInstance(), value.sourceUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 14, StringSerializer_getInstance(), value.sourceTitle_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 15, BooleanSerializer_getInstance(), value.isLiked_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 16, StringSerializer_getInstance(), value.state_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 17, StringSerializer_getInstance(), value.title_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 18, StringSerializer_getInstance(), value.body_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 19, IntSerializer_getInstance(), value.noteCount_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 20, StringSerializer_getInstance(), value.summary_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 21, StringSerializer_getInstance(), value.slug_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 22, StringSerializer_getInstance(), value.rebloggedFromId_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 23, StringSerializer_getInstance(), value.rebloggedFromUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 24, StringSerializer_getInstance(), value.rebloggedFromName_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 25, StringSerializer_getInstance(), value.rebloggedFromTitle_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 26, StringSerializer_getInstance(), value.rebloggedFromUuid_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 27, BooleanSerializer_getInstance(), value.rebloggedFromCanMessage_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 28, BooleanSerializer_getInstance(), value.rebloggedFromFollowing_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 29, StringSerializer_getInstance(), value.rebloggedRootId_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 30, StringSerializer_getInstance(), value.rebloggedRootUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 31, StringSerializer_getInstance(), value.rebloggedRootName_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 32, StringSerializer_getInstance(), value.rebloggedRootTitle_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 33, StringSerializer_getInstance(), value.rebloggedRootUuid_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 34, BooleanSerializer_getInstance(), value.rebloggedRootCanMessage_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 35, BooleanSerializer_getInstance(), value.rebloggedRootFollowing_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 36, tmp2_cached[36].get_value_j01efc_k$(), value.notes_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 37, $serializer_getInstance_12(), value.blog_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 38, $serializer_getInstance_15(), value.reblog_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 39, tmp2_cached[39].get_value_j01efc_k$(), value.trail_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_23).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_2hrwli_k$(encoder, value instanceof LegacyTextPost ? value : THROW_CCE());
  };
  protoOf($serializer_23).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_bitMask1 = 0;
    var tmp5_local0 = null;
    var tmp6_local1 = null;
    var tmp7_local2 = null;
    var tmp8_local3 = null;
    var tmp9_local4 = null;
    var tmp10_local5 = null;
    var tmp11_local6 = null;
    var tmp12_local7 = null;
    var tmp13_local8 = null;
    var tmp14_local9 = null;
    var tmp15_local10 = null;
    var tmp16_local11 = null;
    var tmp17_local12 = null;
    var tmp18_local13 = null;
    var tmp19_local14 = null;
    var tmp20_local15 = null;
    var tmp21_local16 = null;
    var tmp22_local17 = null;
    var tmp23_local18 = null;
    var tmp24_local19 = null;
    var tmp25_local20 = null;
    var tmp26_local21 = null;
    var tmp27_local22 = null;
    var tmp28_local23 = null;
    var tmp29_local24 = null;
    var tmp30_local25 = null;
    var tmp31_local26 = null;
    var tmp32_local27 = null;
    var tmp33_local28 = null;
    var tmp34_local29 = null;
    var tmp35_local30 = null;
    var tmp36_local31 = null;
    var tmp37_local32 = null;
    var tmp38_local33 = null;
    var tmp39_local34 = null;
    var tmp40_local35 = null;
    var tmp41_local36 = null;
    var tmp42_local37 = null;
    var tmp43_local38 = null;
    var tmp44_local39 = null;
    var tmp45_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp46_cached = Companion_getInstance_25().$childSerializers_1;
    if (tmp45_input.decodeSequentially_xlblqy_k$()) {
      tmp5_local0 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 10, tmp46_cached[10].get_value_j01efc_k$(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 36, tmp46_cached[36].get_value_j01efc_k$(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 39, tmp46_cached[39].get_value_j01efc_k$(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp45_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 10, tmp46_cached[10].get_value_j01efc_k$(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 36, tmp46_cached[36].get_value_j01efc_k$(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp45_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 39, tmp46_cached[39].get_value_j01efc_k$(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp45_input.endStructure_1xqz0n_k$(tmp0_desc);
    return LegacyTextPost_init_$Create$(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, null);
  };
  protoOf($serializer_23).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_23).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_25().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].get_value_j01efc_k$()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].get_value_j01efc_k$()), get_nullable($serializer_getInstance_12()), get_nullable($serializer_getInstance_15()), get_nullable(tmp0_cached[39].get_value_j01efc_k$())];
  };
  var $serializer_instance_22;
  function $serializer_getInstance_22() {
    if ($serializer_instance_22 == null)
      new $serializer_23();
    return $serializer_instance_22;
  }
  function LegacyTextPost_init_$Init$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, serializationConstructorMarker, $this) {
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_22().descriptor_1);
    }
    Post.call($this);
    $this.blogName_1 = blogName;
    $this.idString_1 = idString;
    $this.genesisPostId_1 = genesisPostId;
    $this.postUrl_1 = postUrl;
    $this.parentPostUrl_1 = parentPostUrl;
    $this.type_1 = type;
    $this.timestamp_1 = timestamp;
    $this.date_1 = date;
    $this.format_1 = format;
    $this.reblogKey_1 = reblogKey;
    $this.tags_1 = tags;
    $this.isBookmarklet_1 = isBookmarklet;
    $this.isMobile_1 = isMobile;
    $this.sourceUrl_1 = sourceUrl;
    $this.sourceTitle_1 = sourceTitle;
    $this.isLiked_1 = isLiked;
    $this.state_1 = state;
    $this.title_1 = title;
    $this.body_1 = body;
    $this.noteCount_1 = noteCount;
    $this.summary_1 = summary;
    $this.slug_1 = slug;
    $this.rebloggedFromId_1 = rebloggedFromId;
    $this.rebloggedFromUrl_1 = rebloggedFromUrl;
    $this.rebloggedFromName_1 = rebloggedFromName;
    $this.rebloggedFromTitle_1 = rebloggedFromTitle;
    $this.rebloggedFromUuid_1 = rebloggedFromUuid;
    $this.rebloggedFromCanMessage_1 = rebloggedFromCanMessage;
    $this.rebloggedFromFollowing_1 = rebloggedFromFollowing;
    $this.rebloggedRootId_1 = rebloggedRootId;
    $this.rebloggedRootUrl_1 = rebloggedRootUrl;
    $this.rebloggedRootName_1 = rebloggedRootName;
    $this.rebloggedRootTitle_1 = rebloggedRootTitle;
    $this.rebloggedRootUuid_1 = rebloggedRootUuid;
    $this.rebloggedRootCanMessage_1 = rebloggedRootCanMessage;
    $this.rebloggedRootFollowing_1 = rebloggedRootFollowing;
    $this.notes_1 = notes;
    $this.blog_1 = blog;
    $this.reblog_1 = reblog;
    $this.trail_1 = trail;
    return $this;
  }
  function LegacyTextPost_init_$Create$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, serializationConstructorMarker) {
    return LegacyTextPost_init_$Init$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, serializationConstructorMarker, objectCreate(protoOf(LegacyTextPost)));
  }
  function LegacyTextPost(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_25();
    Post.call(this);
    this.blogName_1 = blogName;
    this.idString_1 = idString;
    this.genesisPostId_1 = genesisPostId;
    this.postUrl_1 = postUrl;
    this.parentPostUrl_1 = parentPostUrl;
    this.type_1 = type;
    this.timestamp_1 = timestamp;
    this.date_1 = date;
    this.format_1 = format;
    this.reblogKey_1 = reblogKey;
    this.tags_1 = tags;
    this.isBookmarklet_1 = isBookmarklet;
    this.isMobile_1 = isMobile;
    this.sourceUrl_1 = sourceUrl;
    this.sourceTitle_1 = sourceTitle;
    this.isLiked_1 = isLiked;
    this.state_1 = state;
    this.title_1 = title;
    this.body_1 = body;
    this.noteCount_1 = noteCount;
    this.summary_1 = summary;
    this.slug_1 = slug;
    this.rebloggedFromId_1 = rebloggedFromId;
    this.rebloggedFromUrl_1 = rebloggedFromUrl;
    this.rebloggedFromName_1 = rebloggedFromName;
    this.rebloggedFromTitle_1 = rebloggedFromTitle;
    this.rebloggedFromUuid_1 = rebloggedFromUuid;
    this.rebloggedFromCanMessage_1 = rebloggedFromCanMessage;
    this.rebloggedFromFollowing_1 = rebloggedFromFollowing;
    this.rebloggedRootId_1 = rebloggedRootId;
    this.rebloggedRootUrl_1 = rebloggedRootUrl;
    this.rebloggedRootName_1 = rebloggedRootName;
    this.rebloggedRootTitle_1 = rebloggedRootTitle;
    this.rebloggedRootUuid_1 = rebloggedRootUuid;
    this.rebloggedRootCanMessage_1 = rebloggedRootCanMessage;
    this.rebloggedRootFollowing_1 = rebloggedRootFollowing;
    this.notes_1 = notes;
    this.blog_1 = blog;
    this.reblog_1 = reblog;
    this.trail_1 = trail;
  }
  protoOf(LegacyTextPost).set_blogName_4hbv7x_k$ = function (_set____db54di) {
    this.blogName_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_blogName_sa6pee_k$ = function () {
    return this.blogName_1;
  };
  protoOf(LegacyTextPost).set_idString_uk2vzm_k$ = function (_set____db54di) {
    this.idString_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_idString_sjsr85_k$ = function () {
    return this.idString_1;
  };
  protoOf(LegacyTextPost).set_genesisPostId_z3sus1_k$ = function (_set____db54di) {
    this.genesisPostId_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_genesisPostId_95cwau_k$ = function () {
    return this.genesisPostId_1;
  };
  protoOf(LegacyTextPost).set_postUrl_etq64l_k$ = function (_set____db54di) {
    this.postUrl_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_postUrl_57da2i_k$ = function () {
    return this.postUrl_1;
  };
  protoOf(LegacyTextPost).set_parentPostUrl_9ua7l_k$ = function (_set____db54di) {
    this.parentPostUrl_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_parentPostUrl_e3yik_k$ = function () {
    return this.parentPostUrl_1;
  };
  protoOf(LegacyTextPost).set_type_4507og_k$ = function (_set____db54di) {
    this.type_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(LegacyTextPost).set_timestamp_cgo46a_k$ = function (_set____db54di) {
    this.timestamp_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_timestamp_9fccx9_k$ = function () {
    return this.timestamp_1;
  };
  protoOf(LegacyTextPost).set_date_y25dgs_k$ = function (_set____db54di) {
    this.date_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_date_wokkxj_k$ = function () {
    return this.date_1;
  };
  protoOf(LegacyTextPost).set_format_yd74t9_k$ = function (_set____db54di) {
    this.format_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_format_dfdtds_k$ = function () {
    return this.format_1;
  };
  protoOf(LegacyTextPost).set_reblogKey_q2gl9m_k$ = function (_set____db54di) {
    this.reblogKey_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_reblogKey_8swysh_k$ = function () {
    return this.reblogKey_1;
  };
  protoOf(LegacyTextPost).set_tags_7racvz_k$ = function (_set____db54di) {
    this.tags_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_tags_wousf6_k$ = function () {
    return this.tags_1;
  };
  protoOf(LegacyTextPost).set_isBookmarklet_e6r6jm_k$ = function (_set____db54di) {
    this.isBookmarklet_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_isBookmarklet_xsfl2q_k$ = function () {
    return this.isBookmarklet_1;
  };
  protoOf(LegacyTextPost).set_isMobile_ymy749_k$ = function (_set____db54di) {
    this.isMobile_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_isMobile_wp3xh1_k$ = function () {
    return this.isMobile_1;
  };
  protoOf(LegacyTextPost).set_sourceUrl_nz40kg_k$ = function (_set____db54di) {
    this.sourceUrl_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_sourceUrl_jko7yt_k$ = function () {
    return this.sourceUrl_1;
  };
  protoOf(LegacyTextPost).set_sourceTitle_6ljuq1_k$ = function (_set____db54di) {
    this.sourceTitle_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_sourceTitle_cbkkgk_k$ = function () {
    return this.sourceTitle_1;
  };
  protoOf(LegacyTextPost).set_isLiked_vjtt2e_k$ = function (_set____db54di) {
    this.isLiked_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_isLiked_zemrwa_k$ = function () {
    return this.isLiked_1;
  };
  protoOf(LegacyTextPost).set_state_836lgd_k$ = function (_set____db54di) {
    this.state_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  protoOf(LegacyTextPost).set_title_ceyuu4_k$ = function (_set____db54di) {
    this.title_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(LegacyTextPost).set_body_d8bq7s_k$ = function (_set____db54di) {
    this.body_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  protoOf(LegacyTextPost).set_noteCount_gc35kr_k$ = function (_set____db54di) {
    this.noteCount_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_noteCount_xhpyss_k$ = function () {
    return this.noteCount_1;
  };
  protoOf(LegacyTextPost).set_summary_elnle6_k$ = function (_set____db54di) {
    this.summary_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_summary_tgfqkj_k$ = function () {
    return this.summary_1;
  };
  protoOf(LegacyTextPost).set_slug_iclwbz_k$ = function (_set____db54di) {
    this.slug_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_slug_woudx0_k$ = function () {
    return this.slug_1;
  };
  protoOf(LegacyTextPost).set_rebloggedFromId_7fi68u_k$ = function (_set____db54di) {
    this.rebloggedFromId_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_rebloggedFromId_8qykib_k$ = function () {
    return this.rebloggedFromId_1;
  };
  protoOf(LegacyTextPost).set_rebloggedFromUrl_5gzcjq_k$ = function (_set____db54di) {
    this.rebloggedFromUrl_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_rebloggedFromUrl_cwotgd_k$ = function () {
    return this.rebloggedFromUrl_1;
  };
  protoOf(LegacyTextPost).set_rebloggedFromName_70jpu_k$ = function (_set____db54di) {
    this.rebloggedFromName_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_rebloggedFromName_q1fs6b_k$ = function () {
    return this.rebloggedFromName_1;
  };
  protoOf(LegacyTextPost).set_rebloggedFromTitle_lpffbx_k$ = function (_set____db54di) {
    this.rebloggedFromTitle_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_rebloggedFromTitle_pswmt6_k$ = function () {
    return this.rebloggedFromTitle_1;
  };
  protoOf(LegacyTextPost).set_rebloggedFromUuid_y1lhby_k$ = function (_set____db54di) {
    this.rebloggedFromUuid_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_rebloggedFromUuid_q1awj7_k$ = function () {
    return this.rebloggedFromUuid_1;
  };
  protoOf(LegacyTextPost).set_rebloggedFromCanMessage_xd73vv_k$ = function (_set____db54di) {
    this.rebloggedFromCanMessage_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_rebloggedFromCanMessage_ik49xz_k$ = function () {
    return this.rebloggedFromCanMessage_1;
  };
  protoOf(LegacyTextPost).set_rebloggedFromFollowing_134hoz_k$ = function (_set____db54di) {
    this.rebloggedFromFollowing_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_rebloggedFromFollowing_60tgsh_k$ = function () {
    return this.rebloggedFromFollowing_1;
  };
  protoOf(LegacyTextPost).set_rebloggedRootId_dkbyli_k$ = function (_set____db54di) {
    this.rebloggedRootId_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_rebloggedRootId_342cd7_k$ = function () {
    return this.rebloggedRootId_1;
  };
  protoOf(LegacyTextPost).set_rebloggedRootUrl_hgpegy_k$ = function (_set____db54di) {
    this.rebloggedRootUrl_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_rebloggedRootUrl_pgwc2j_k$ = function () {
    return this.rebloggedRootUrl_1;
  };
  protoOf(LegacyTextPost).set_rebloggedRootName_w79je_k$ = function (_set____db54di) {
    this.rebloggedRootName_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_rebloggedRootName_87qluz_k$ = function () {
    return this.rebloggedRootName_1;
  };
  protoOf(LegacyTextPost).set_rebloggedRootTitle_n6vp_k$ = function (_set____db54di) {
    this.rebloggedRootTitle_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_rebloggedRootTitle_tjzf4e_k$ = function () {
    return this.rebloggedRootTitle_1;
  };
  protoOf(LegacyTextPost).set_rebloggedRootUuid_xcerie_k$ = function (_set____db54di) {
    this.rebloggedRootUuid_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_rebloggedRootUuid_87lq7v_k$ = function () {
    return this.rebloggedRootUuid_1;
  };
  protoOf(LegacyTextPost).set_rebloggedRootCanMessage_92f4mr_k$ = function (_set____db54di) {
    this.rebloggedRootCanMessage_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_rebloggedRootCanMessage_s8kylb_k$ = function () {
    return this.rebloggedRootCanMessage_1;
  };
  protoOf(LegacyTextPost).set_rebloggedRootFollowing_9l3e05_k$ = function (_set____db54di) {
    this.rebloggedRootFollowing_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_rebloggedRootFollowing_mdgzg9_k$ = function () {
    return this.rebloggedRootFollowing_1;
  };
  protoOf(LegacyTextPost).set_notes_59gpwq_k$ = function (_set____db54di) {
    this.notes_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_notes_ivw520_k$ = function () {
    return this.notes_1;
  };
  protoOf(LegacyTextPost).set_blog_o3ffjm_k$ = function (_set____db54di) {
    this.blog_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_blog_wojizv_k$ = function () {
    return this.blog_1;
  };
  protoOf(LegacyTextPost).set_reblog_scs22y_k$ = function (_set____db54di) {
    this.reblog_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_reblog_iy53z2_k$ = function () {
    return this.reblog_1;
  };
  protoOf(LegacyTextPost).set_trail_t0ip0s_k$ = function (_set____db54di) {
    this.trail_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).get_trail_iz8fkt_k$ = function () {
    return this.trail_1;
  };
  function _get_$childSerializers__r2zwns_14($this) {
    return $this.$childSerializers_1;
  }
  function LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), StringSerializer_getInstance());
  }
  function LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8_0() {
    return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_10());
  }
  function LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8_1() {
    return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_30());
  }
  function LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8_2() {
    return new ReferenceArraySerializer(getKClass(Video), $serializer_getInstance_27());
  }
  function Companion_25() {
    Companion_instance_25 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, tmp_5, null, lazy(tmp_6, LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8_2)];
  }
  protoOf(Companion_25).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_23();
  };
  var Companion_instance_25;
  function Companion_getInstance_26() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function $serializer_24() {
    $serializer_instance_23 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyVideoPost', this, 42);
    tmp0_serialDesc.addElement_5pzumi_k$('blog_name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('id_string', false);
    tmp0_serialDesc.addElement_5pzumi_k$('genesis_post_id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('post_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('parent_post_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('type', false);
    tmp0_serialDesc.addElement_5pzumi_k$('timestamp', false);
    tmp0_serialDesc.addElement_5pzumi_k$('date', false);
    tmp0_serialDesc.addElement_5pzumi_k$('format', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblog_key', false);
    tmp0_serialDesc.addElement_5pzumi_k$('tags', false);
    tmp0_serialDesc.addElement_5pzumi_k$('bookmarklet', false);
    tmp0_serialDesc.addElement_5pzumi_k$('mobile', false);
    tmp0_serialDesc.addElement_5pzumi_k$('source_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('source_title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('liked', false);
    tmp0_serialDesc.addElement_5pzumi_k$('state', false);
    tmp0_serialDesc.addElement_5pzumi_k$('title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('body', false);
    tmp0_serialDesc.addElement_5pzumi_k$('note_count', false);
    tmp0_serialDesc.addElement_5pzumi_k$('summary', false);
    tmp0_serialDesc.addElement_5pzumi_k$('slug', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_uuid', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_can_message', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_from_following', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_url', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_uuid', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_can_message', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblogged_root_following', false);
    tmp0_serialDesc.addElement_5pzumi_k$('notes', false);
    tmp0_serialDesc.addElement_5pzumi_k$('blog', false);
    tmp0_serialDesc.addElement_5pzumi_k$('reblog', false);
    tmp0_serialDesc.addElement_5pzumi_k$('trail', false);
    tmp0_serialDesc.addElement_5pzumi_k$('caption', true);
    tmp0_serialDesc.addElement_5pzumi_k$('player', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_24).serialize_yys67u_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_26().$childSerializers_1;
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, StringSerializer_getInstance(), value.blogName_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, StringSerializer_getInstance(), value.idString_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, StringSerializer_getInstance(), value.genesisPostId_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 3, StringSerializer_getInstance(), value.postUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 4, StringSerializer_getInstance(), value.parentPostUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 5, StringSerializer_getInstance(), value.type_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 6, IntSerializer_getInstance(), value.timestamp_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 7, StringSerializer_getInstance(), value.date_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 8, StringSerializer_getInstance(), value.format_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 9, StringSerializer_getInstance(), value.reblogKey_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 10, tmp2_cached[10].get_value_j01efc_k$(), value.tags_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 11, BooleanSerializer_getInstance(), value.isBookmarklet_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 12, BooleanSerializer_getInstance(), value.isMobile_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 13, StringSerializer_getInstance(), value.sourceUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 14, StringSerializer_getInstance(), value.sourceTitle_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 15, BooleanSerializer_getInstance(), value.isLiked_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 16, StringSerializer_getInstance(), value.state_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 17, StringSerializer_getInstance(), value.title_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 18, StringSerializer_getInstance(), value.body_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 19, IntSerializer_getInstance(), value.noteCount_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 20, StringSerializer_getInstance(), value.summary_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 21, StringSerializer_getInstance(), value.slug_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 22, StringSerializer_getInstance(), value.rebloggedFromId_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 23, StringSerializer_getInstance(), value.rebloggedFromUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 24, StringSerializer_getInstance(), value.rebloggedFromName_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 25, StringSerializer_getInstance(), value.rebloggedFromTitle_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 26, StringSerializer_getInstance(), value.rebloggedFromUuid_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 27, BooleanSerializer_getInstance(), value.rebloggedFromCanMessage_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 28, BooleanSerializer_getInstance(), value.rebloggedFromFollowing_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 29, StringSerializer_getInstance(), value.rebloggedRootId_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 30, StringSerializer_getInstance(), value.rebloggedRootUrl_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 31, StringSerializer_getInstance(), value.rebloggedRootName_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 32, StringSerializer_getInstance(), value.rebloggedRootTitle_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 33, StringSerializer_getInstance(), value.rebloggedRootUuid_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 34, BooleanSerializer_getInstance(), value.rebloggedRootCanMessage_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 35, BooleanSerializer_getInstance(), value.rebloggedRootFollowing_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 36, tmp2_cached[36].get_value_j01efc_k$(), value.notes_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 37, $serializer_getInstance_12(), value.blog_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 38, $serializer_getInstance_15(), value.reblog_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 39, tmp2_cached[39].get_value_j01efc_k$(), value.trail_1);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 40) ? true : !(value.caption == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 40, StringSerializer_getInstance(), value.caption);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 41) ? true : !(value.player == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 41, tmp2_cached[41].get_value_j01efc_k$(), value.player);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_24).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_yys67u_k$(encoder, value instanceof LegacyVideoPost ? value : THROW_CCE());
  };
  protoOf($serializer_24).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_bitMask1 = 0;
    var tmp5_local0 = null;
    var tmp6_local1 = null;
    var tmp7_local2 = null;
    var tmp8_local3 = null;
    var tmp9_local4 = null;
    var tmp10_local5 = null;
    var tmp11_local6 = null;
    var tmp12_local7 = null;
    var tmp13_local8 = null;
    var tmp14_local9 = null;
    var tmp15_local10 = null;
    var tmp16_local11 = null;
    var tmp17_local12 = null;
    var tmp18_local13 = null;
    var tmp19_local14 = null;
    var tmp20_local15 = null;
    var tmp21_local16 = null;
    var tmp22_local17 = null;
    var tmp23_local18 = null;
    var tmp24_local19 = null;
    var tmp25_local20 = null;
    var tmp26_local21 = null;
    var tmp27_local22 = null;
    var tmp28_local23 = null;
    var tmp29_local24 = null;
    var tmp30_local25 = null;
    var tmp31_local26 = null;
    var tmp32_local27 = null;
    var tmp33_local28 = null;
    var tmp34_local29 = null;
    var tmp35_local30 = null;
    var tmp36_local31 = null;
    var tmp37_local32 = null;
    var tmp38_local33 = null;
    var tmp39_local34 = null;
    var tmp40_local35 = null;
    var tmp41_local36 = null;
    var tmp42_local37 = null;
    var tmp43_local38 = null;
    var tmp44_local39 = null;
    var tmp45_local40 = null;
    var tmp46_local41 = null;
    var tmp47_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp48_cached = Companion_getInstance_26().$childSerializers_1;
    if (tmp47_input.decodeSequentially_xlblqy_k$()) {
      tmp5_local0 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 10, tmp48_cached[10].get_value_j01efc_k$(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 36, tmp48_cached[36].get_value_j01efc_k$(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 39, tmp48_cached[39].get_value_j01efc_k$(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 41, tmp48_cached[41].get_value_j01efc_k$(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp47_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 10, tmp48_cached[10].get_value_j01efc_k$(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 36, tmp48_cached[36].get_value_j01efc_k$(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 37, $serializer_getInstance_12(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 38, $serializer_getInstance_15(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 39, tmp48_cached[39].get_value_j01efc_k$(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp47_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 41, tmp48_cached[41].get_value_j01efc_k$(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp47_input.endStructure_1xqz0n_k$(tmp0_desc);
    return LegacyVideoPost_init_$Create$(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, null);
  };
  protoOf($serializer_24).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_24).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_26().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].get_value_j01efc_k$()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].get_value_j01efc_k$()), get_nullable($serializer_getInstance_12()), get_nullable($serializer_getInstance_15()), get_nullable(tmp0_cached[39].get_value_j01efc_k$()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[41].get_value_j01efc_k$())];
  };
  var $serializer_instance_23;
  function $serializer_getInstance_23() {
    if ($serializer_instance_23 == null)
      new $serializer_24();
    return $serializer_instance_23;
  }
  function LegacyVideoPost_init_$Init$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, caption, player, serializationConstructorMarker, $this) {
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_23().descriptor_1);
    }
    Post.call($this);
    $this.blogName_1 = blogName;
    $this.idString_1 = idString;
    $this.genesisPostId_1 = genesisPostId;
    $this.postUrl_1 = postUrl;
    $this.parentPostUrl_1 = parentPostUrl;
    $this.type_1 = type;
    $this.timestamp_1 = timestamp;
    $this.date_1 = date;
    $this.format_1 = format;
    $this.reblogKey_1 = reblogKey;
    $this.tags_1 = tags;
    $this.isBookmarklet_1 = isBookmarklet;
    $this.isMobile_1 = isMobile;
    $this.sourceUrl_1 = sourceUrl;
    $this.sourceTitle_1 = sourceTitle;
    $this.isLiked_1 = isLiked;
    $this.state_1 = state;
    $this.title_1 = title;
    $this.body_1 = body;
    $this.noteCount_1 = noteCount;
    $this.summary_1 = summary;
    $this.slug_1 = slug;
    $this.rebloggedFromId_1 = rebloggedFromId;
    $this.rebloggedFromUrl_1 = rebloggedFromUrl;
    $this.rebloggedFromName_1 = rebloggedFromName;
    $this.rebloggedFromTitle_1 = rebloggedFromTitle;
    $this.rebloggedFromUuid_1 = rebloggedFromUuid;
    $this.rebloggedFromCanMessage_1 = rebloggedFromCanMessage;
    $this.rebloggedFromFollowing_1 = rebloggedFromFollowing;
    $this.rebloggedRootId_1 = rebloggedRootId;
    $this.rebloggedRootUrl_1 = rebloggedRootUrl;
    $this.rebloggedRootName_1 = rebloggedRootName;
    $this.rebloggedRootTitle_1 = rebloggedRootTitle;
    $this.rebloggedRootUuid_1 = rebloggedRootUuid;
    $this.rebloggedRootCanMessage_1 = rebloggedRootCanMessage;
    $this.rebloggedRootFollowing_1 = rebloggedRootFollowing;
    $this.notes_1 = notes;
    $this.blog_1 = blog;
    $this.reblog_1 = reblog;
    $this.trail_1 = trail;
    if (0 === (seen1 & 256))
      $this.caption = null;
    else
      $this.caption = caption;
    if (0 === (seen1 & 512))
      $this.player = null;
    else
      $this.player = player;
    return $this;
  }
  function LegacyVideoPost_init_$Create$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, caption, player, serializationConstructorMarker) {
    return LegacyVideoPost_init_$Init$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, caption, player, serializationConstructorMarker, objectCreate(protoOf(LegacyVideoPost)));
  }
  function LegacyVideoPost(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_26();
    Post.call(this);
    this.blogName_1 = blogName;
    this.idString_1 = idString;
    this.genesisPostId_1 = genesisPostId;
    this.postUrl_1 = postUrl;
    this.parentPostUrl_1 = parentPostUrl;
    this.type_1 = type;
    this.timestamp_1 = timestamp;
    this.date_1 = date;
    this.format_1 = format;
    this.reblogKey_1 = reblogKey;
    this.tags_1 = tags;
    this.isBookmarklet_1 = isBookmarklet;
    this.isMobile_1 = isMobile;
    this.sourceUrl_1 = sourceUrl;
    this.sourceTitle_1 = sourceTitle;
    this.isLiked_1 = isLiked;
    this.state_1 = state;
    this.title_1 = title;
    this.body_1 = body;
    this.noteCount_1 = noteCount;
    this.summary_1 = summary;
    this.slug_1 = slug;
    this.rebloggedFromId_1 = rebloggedFromId;
    this.rebloggedFromUrl_1 = rebloggedFromUrl;
    this.rebloggedFromName_1 = rebloggedFromName;
    this.rebloggedFromTitle_1 = rebloggedFromTitle;
    this.rebloggedFromUuid_1 = rebloggedFromUuid;
    this.rebloggedFromCanMessage_1 = rebloggedFromCanMessage;
    this.rebloggedFromFollowing_1 = rebloggedFromFollowing;
    this.rebloggedRootId_1 = rebloggedRootId;
    this.rebloggedRootUrl_1 = rebloggedRootUrl;
    this.rebloggedRootName_1 = rebloggedRootName;
    this.rebloggedRootTitle_1 = rebloggedRootTitle;
    this.rebloggedRootUuid_1 = rebloggedRootUuid;
    this.rebloggedRootCanMessage_1 = rebloggedRootCanMessage;
    this.rebloggedRootFollowing_1 = rebloggedRootFollowing;
    this.notes_1 = notes;
    this.blog_1 = blog;
    this.reblog_1 = reblog;
    this.trail_1 = trail;
    this.caption = null;
    this.player = null;
  }
  protoOf(LegacyVideoPost).set_blogName_4hbv7x_k$ = function (_set____db54di) {
    this.blogName_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_blogName_sa6pee_k$ = function () {
    return this.blogName_1;
  };
  protoOf(LegacyVideoPost).set_idString_uk2vzm_k$ = function (_set____db54di) {
    this.idString_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_idString_sjsr85_k$ = function () {
    return this.idString_1;
  };
  protoOf(LegacyVideoPost).set_genesisPostId_z3sus1_k$ = function (_set____db54di) {
    this.genesisPostId_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_genesisPostId_95cwau_k$ = function () {
    return this.genesisPostId_1;
  };
  protoOf(LegacyVideoPost).set_postUrl_etq64l_k$ = function (_set____db54di) {
    this.postUrl_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_postUrl_57da2i_k$ = function () {
    return this.postUrl_1;
  };
  protoOf(LegacyVideoPost).set_parentPostUrl_9ua7l_k$ = function (_set____db54di) {
    this.parentPostUrl_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_parentPostUrl_e3yik_k$ = function () {
    return this.parentPostUrl_1;
  };
  protoOf(LegacyVideoPost).set_type_4507og_k$ = function (_set____db54di) {
    this.type_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(LegacyVideoPost).set_timestamp_cgo46a_k$ = function (_set____db54di) {
    this.timestamp_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_timestamp_9fccx9_k$ = function () {
    return this.timestamp_1;
  };
  protoOf(LegacyVideoPost).set_date_y25dgs_k$ = function (_set____db54di) {
    this.date_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_date_wokkxj_k$ = function () {
    return this.date_1;
  };
  protoOf(LegacyVideoPost).set_format_yd74t9_k$ = function (_set____db54di) {
    this.format_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_format_dfdtds_k$ = function () {
    return this.format_1;
  };
  protoOf(LegacyVideoPost).set_reblogKey_q2gl9m_k$ = function (_set____db54di) {
    this.reblogKey_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_reblogKey_8swysh_k$ = function () {
    return this.reblogKey_1;
  };
  protoOf(LegacyVideoPost).set_tags_7racvz_k$ = function (_set____db54di) {
    this.tags_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_tags_wousf6_k$ = function () {
    return this.tags_1;
  };
  protoOf(LegacyVideoPost).set_isBookmarklet_e6r6jm_k$ = function (_set____db54di) {
    this.isBookmarklet_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_isBookmarklet_xsfl2q_k$ = function () {
    return this.isBookmarklet_1;
  };
  protoOf(LegacyVideoPost).set_isMobile_ymy749_k$ = function (_set____db54di) {
    this.isMobile_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_isMobile_wp3xh1_k$ = function () {
    return this.isMobile_1;
  };
  protoOf(LegacyVideoPost).set_sourceUrl_nz40kg_k$ = function (_set____db54di) {
    this.sourceUrl_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_sourceUrl_jko7yt_k$ = function () {
    return this.sourceUrl_1;
  };
  protoOf(LegacyVideoPost).set_sourceTitle_6ljuq1_k$ = function (_set____db54di) {
    this.sourceTitle_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_sourceTitle_cbkkgk_k$ = function () {
    return this.sourceTitle_1;
  };
  protoOf(LegacyVideoPost).set_isLiked_vjtt2e_k$ = function (_set____db54di) {
    this.isLiked_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_isLiked_zemrwa_k$ = function () {
    return this.isLiked_1;
  };
  protoOf(LegacyVideoPost).set_state_836lgd_k$ = function (_set____db54di) {
    this.state_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  protoOf(LegacyVideoPost).set_title_ceyuu4_k$ = function (_set____db54di) {
    this.title_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(LegacyVideoPost).set_body_d8bq7s_k$ = function (_set____db54di) {
    this.body_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  protoOf(LegacyVideoPost).set_noteCount_gc35kr_k$ = function (_set____db54di) {
    this.noteCount_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_noteCount_xhpyss_k$ = function () {
    return this.noteCount_1;
  };
  protoOf(LegacyVideoPost).set_summary_elnle6_k$ = function (_set____db54di) {
    this.summary_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_summary_tgfqkj_k$ = function () {
    return this.summary_1;
  };
  protoOf(LegacyVideoPost).set_slug_iclwbz_k$ = function (_set____db54di) {
    this.slug_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_slug_woudx0_k$ = function () {
    return this.slug_1;
  };
  protoOf(LegacyVideoPost).set_rebloggedFromId_7fi68u_k$ = function (_set____db54di) {
    this.rebloggedFromId_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_rebloggedFromId_8qykib_k$ = function () {
    return this.rebloggedFromId_1;
  };
  protoOf(LegacyVideoPost).set_rebloggedFromUrl_5gzcjq_k$ = function (_set____db54di) {
    this.rebloggedFromUrl_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_rebloggedFromUrl_cwotgd_k$ = function () {
    return this.rebloggedFromUrl_1;
  };
  protoOf(LegacyVideoPost).set_rebloggedFromName_70jpu_k$ = function (_set____db54di) {
    this.rebloggedFromName_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_rebloggedFromName_q1fs6b_k$ = function () {
    return this.rebloggedFromName_1;
  };
  protoOf(LegacyVideoPost).set_rebloggedFromTitle_lpffbx_k$ = function (_set____db54di) {
    this.rebloggedFromTitle_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_rebloggedFromTitle_pswmt6_k$ = function () {
    return this.rebloggedFromTitle_1;
  };
  protoOf(LegacyVideoPost).set_rebloggedFromUuid_y1lhby_k$ = function (_set____db54di) {
    this.rebloggedFromUuid_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_rebloggedFromUuid_q1awj7_k$ = function () {
    return this.rebloggedFromUuid_1;
  };
  protoOf(LegacyVideoPost).set_rebloggedFromCanMessage_xd73vv_k$ = function (_set____db54di) {
    this.rebloggedFromCanMessage_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_rebloggedFromCanMessage_ik49xz_k$ = function () {
    return this.rebloggedFromCanMessage_1;
  };
  protoOf(LegacyVideoPost).set_rebloggedFromFollowing_134hoz_k$ = function (_set____db54di) {
    this.rebloggedFromFollowing_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_rebloggedFromFollowing_60tgsh_k$ = function () {
    return this.rebloggedFromFollowing_1;
  };
  protoOf(LegacyVideoPost).set_rebloggedRootId_dkbyli_k$ = function (_set____db54di) {
    this.rebloggedRootId_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_rebloggedRootId_342cd7_k$ = function () {
    return this.rebloggedRootId_1;
  };
  protoOf(LegacyVideoPost).set_rebloggedRootUrl_hgpegy_k$ = function (_set____db54di) {
    this.rebloggedRootUrl_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_rebloggedRootUrl_pgwc2j_k$ = function () {
    return this.rebloggedRootUrl_1;
  };
  protoOf(LegacyVideoPost).set_rebloggedRootName_w79je_k$ = function (_set____db54di) {
    this.rebloggedRootName_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_rebloggedRootName_87qluz_k$ = function () {
    return this.rebloggedRootName_1;
  };
  protoOf(LegacyVideoPost).set_rebloggedRootTitle_n6vp_k$ = function (_set____db54di) {
    this.rebloggedRootTitle_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_rebloggedRootTitle_tjzf4e_k$ = function () {
    return this.rebloggedRootTitle_1;
  };
  protoOf(LegacyVideoPost).set_rebloggedRootUuid_xcerie_k$ = function (_set____db54di) {
    this.rebloggedRootUuid_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_rebloggedRootUuid_87lq7v_k$ = function () {
    return this.rebloggedRootUuid_1;
  };
  protoOf(LegacyVideoPost).set_rebloggedRootCanMessage_92f4mr_k$ = function (_set____db54di) {
    this.rebloggedRootCanMessage_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_rebloggedRootCanMessage_s8kylb_k$ = function () {
    return this.rebloggedRootCanMessage_1;
  };
  protoOf(LegacyVideoPost).set_rebloggedRootFollowing_9l3e05_k$ = function (_set____db54di) {
    this.rebloggedRootFollowing_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_rebloggedRootFollowing_mdgzg9_k$ = function () {
    return this.rebloggedRootFollowing_1;
  };
  protoOf(LegacyVideoPost).set_notes_59gpwq_k$ = function (_set____db54di) {
    this.notes_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_notes_ivw520_k$ = function () {
    return this.notes_1;
  };
  protoOf(LegacyVideoPost).set_blog_o3ffjm_k$ = function (_set____db54di) {
    this.blog_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_blog_wojizv_k$ = function () {
    return this.blog_1;
  };
  protoOf(LegacyVideoPost).set_reblog_scs22y_k$ = function (_set____db54di) {
    this.reblog_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_reblog_iy53z2_k$ = function () {
    return this.reblog_1;
  };
  protoOf(LegacyVideoPost).set_trail_t0ip0s_k$ = function (_set____db54di) {
    this.trail_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_trail_iz8fkt_k$ = function () {
    return this.trail_1;
  };
  protoOf(LegacyVideoPost).set_caption_drz67m_k$ = function (_set____db54di) {
    this.caption = _set____db54di;
  };
  protoOf(LegacyVideoPost).get_caption_aejif1_k$ = function () {
    return this.caption;
  };
  protoOf(LegacyVideoPost).get_player_i3w1re_k$ = function () {
    return this.player;
  };
  function Companion_26() {
    Companion_instance_26 = this;
  }
  protoOf(Companion_26).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_24();
  };
  var Companion_instance_26;
  function Companion_getInstance_27() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function $serializer_25() {
    $serializer_instance_24 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.options.Dialogue', this, 3);
    tmp0_serialDesc.addElement_5pzumi_k$('name', true);
    tmp0_serialDesc.addElement_5pzumi_k$('label', true);
    tmp0_serialDesc.addElement_5pzumi_k$('phrase', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_25).serialize_3ysb4c_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.label == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, StringSerializer_getInstance(), value.label);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !(value.phrase == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, StringSerializer_getInstance(), value.phrase);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_25).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_3ysb4c_k$(encoder, value instanceof Dialogue ? value : THROW_CCE());
  };
  protoOf($serializer_25).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp7_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.endStructure_1xqz0n_k$(tmp0_desc);
    return Dialogue_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_25).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_25).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_24;
  function $serializer_getInstance_24() {
    if ($serializer_instance_24 == null)
      new $serializer_25();
    return $serializer_instance_24;
  }
  function Dialogue_init_$Init$(seen0, name, label, phrase, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_24().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 2))
      $this.label = null;
    else
      $this.label = label;
    if (0 === (seen0 & 4))
      $this.phrase = null;
    else
      $this.phrase = phrase;
    return $this;
  }
  function Dialogue_init_$Create$(seen0, name, label, phrase, serializationConstructorMarker) {
    return Dialogue_init_$Init$(seen0, name, label, phrase, serializationConstructorMarker, objectCreate(protoOf(Dialogue)));
  }
  function Dialogue() {
    Companion_getInstance_27();
    this.name = null;
    this.label = null;
    this.phrase = null;
  }
  protoOf(Dialogue).get_name_woqyms_k$ = function () {
    return this.name;
  };
  protoOf(Dialogue).get_label_iuj8p7_k$ = function () {
    return this.label;
  };
  protoOf(Dialogue).get_phrase_i1z8oy_k$ = function () {
    return this.phrase;
  };
  function _get_$childSerializers__r2zwns_15($this) {
    return $this.$childSerializers_1;
  }
  function Photo$Companion$$childSerializers$_anonymous__7997i0() {
    return new ReferenceArraySerializer(getKClass(PhotoSize), $serializer_getInstance_26());
  }
  function Companion_27() {
    Companion_instance_27 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [null, null, lazy(tmp_0, Photo$Companion$$childSerializers$_anonymous__7997i0)];
  }
  protoOf(Companion_27).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_25();
  };
  var Companion_instance_27;
  function Companion_getInstance_28() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function $serializer_26() {
    $serializer_instance_25 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.options.Photo', this, 3);
    tmp0_serialDesc.addElement_5pzumi_k$('caption', true);
    tmp0_serialDesc.addElement_5pzumi_k$('original_size', true);
    tmp0_serialDesc.addElement_5pzumi_k$('alt_sizes', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_26).serialize_8r2rn4_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_28().$childSerializers_1;
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.caption == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, StringSerializer_getInstance(), value.caption);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.originalSize == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, $serializer_getInstance_26(), value.originalSize);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !(value.altSizes == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, tmp2_cached[2].get_value_j01efc_k$(), value.altSizes);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_26).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_8r2rn4_k$(encoder, value instanceof Photo ? value : THROW_CCE());
  };
  protoOf($serializer_26).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp8_cached = Companion_getInstance_28().$childSerializers_1;
    if (tmp7_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, $serializer_getInstance_26(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, tmp8_cached[2].get_value_j01efc_k$(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, $serializer_getInstance_26(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, tmp8_cached[2].get_value_j01efc_k$(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.endStructure_1xqz0n_k$(tmp0_desc);
    return Photo_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_26).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_26).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_28().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_26()), get_nullable(tmp0_cached[2].get_value_j01efc_k$())];
  };
  var $serializer_instance_25;
  function $serializer_getInstance_25() {
    if ($serializer_instance_25 == null)
      new $serializer_26();
    return $serializer_instance_25;
  }
  function Photo_init_$Init$(seen0, caption, originalSize, altSizes, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_25().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.caption = null;
    else
      $this.caption = caption;
    if (0 === (seen0 & 2))
      $this.originalSize = null;
    else
      $this.originalSize = originalSize;
    if (0 === (seen0 & 4))
      $this.altSizes = null;
    else
      $this.altSizes = altSizes;
    return $this;
  }
  function Photo_init_$Create$(seen0, caption, originalSize, altSizes, serializationConstructorMarker) {
    return Photo_init_$Init$(seen0, caption, originalSize, altSizes, serializationConstructorMarker, objectCreate(protoOf(Photo)));
  }
  function Photo() {
    Companion_getInstance_28();
    this.caption = null;
    this.originalSize = null;
    this.altSizes = null;
  }
  protoOf(Photo).get_caption_aejif1_k$ = function () {
    return this.caption;
  };
  protoOf(Photo).get_originalSize_v4o18l_k$ = function () {
    return this.originalSize;
  };
  protoOf(Photo).get_altSizes_1ja7g2_k$ = function () {
    return this.altSizes;
  };
  function Companion_28() {
    Companion_instance_28 = this;
  }
  protoOf(Companion_28).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_26();
  };
  var Companion_instance_28;
  function Companion_getInstance_29() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function $serializer_27() {
    $serializer_instance_26 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.options.PhotoSize', this, 3);
    tmp0_serialDesc.addElement_5pzumi_k$('width', true);
    tmp0_serialDesc.addElement_5pzumi_k$('height', true);
    tmp0_serialDesc.addElement_5pzumi_k$('url', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_27).serialize_eh6v5b_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.width === 0)) {
      tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 0, value.width);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.height === 0)) {
      tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 1, value.height);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !(value.url == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, StringSerializer_getInstance(), value.url);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_27).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_eh6v5b_k$(encoder, value instanceof PhotoSize ? value : THROW_CCE());
  };
  protoOf($serializer_27).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = null;
    var tmp7_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp7_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp7_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.decodeIntElement_941u6a_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.decodeIntElement_941u6a_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.endStructure_1xqz0n_k$(tmp0_desc);
    return PhotoSize_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_27).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_27).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_26;
  function $serializer_getInstance_26() {
    if ($serializer_instance_26 == null)
      new $serializer_27();
    return $serializer_instance_26;
  }
  function PhotoSize_init_$Init$(seen0, width, height, url, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_26().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.width = 0;
    else
      $this.width = width;
    if (0 === (seen0 & 2))
      $this.height = 0;
    else
      $this.height = height;
    if (0 === (seen0 & 4))
      $this.url = null;
    else
      $this.url = url;
    return $this;
  }
  function PhotoSize_init_$Create$(seen0, width, height, url, serializationConstructorMarker) {
    return PhotoSize_init_$Init$(seen0, width, height, url, serializationConstructorMarker, objectCreate(protoOf(PhotoSize)));
  }
  function PhotoSize() {
    Companion_getInstance_29();
    this.width = 0;
    this.height = 0;
    this.url = null;
  }
  protoOf(PhotoSize).get_width_j0q4yl_k$ = function () {
    return this.width;
  };
  protoOf(PhotoSize).get_height_e7t92o_k$ = function () {
    return this.height;
  };
  protoOf(PhotoSize).get_url_18iuii_k$ = function () {
    return this.url;
  };
  function Companion_29() {
    Companion_instance_29 = this;
  }
  protoOf(Companion_29).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_27();
  };
  var Companion_instance_29;
  function Companion_getInstance_30() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  function $serializer_28() {
    $serializer_instance_27 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.options.Video', this, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('width', true);
    tmp0_serialDesc.addElement_5pzumi_k$('embedCode', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_28).serialize_3r0pkp_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.width == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, IntSerializer_getInstance(), value.width);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.embedCode == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, StringSerializer_getInstance(), value.embedCode);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_28).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_3r0pkp_k$(encoder, value instanceof Video ? value : THROW_CCE());
  };
  protoOf($serializer_28).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp6_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.endStructure_1xqz0n_k$(tmp0_desc);
    return Video_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_28).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_28).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_27;
  function $serializer_getInstance_27() {
    if ($serializer_instance_27 == null)
      new $serializer_28();
    return $serializer_instance_27;
  }
  function Video_init_$Init$(seen0, width, embedCode, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_27().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.width = null;
    else
      $this.width = width;
    if (0 === (seen0 & 2))
      $this.embedCode = null;
    else
      $this.embedCode = embedCode;
    return $this;
  }
  function Video_init_$Create$(seen0, width, embedCode, serializationConstructorMarker) {
    return Video_init_$Init$(seen0, width, embedCode, serializationConstructorMarker, objectCreate(protoOf(Video)));
  }
  function Video() {
    Companion_getInstance_30();
    this.width = null;
    this.embedCode = null;
  }
  protoOf(Video).get_width_j0q4yl_k$ = function () {
    return this.width;
  };
  protoOf(Video).get_embedCode_esmseb_k$ = function () {
    return this.embedCode;
  };
  function Companion_30() {
    Companion_instance_30 = this;
  }
  protoOf(Companion_30).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_28();
  };
  var Companion_instance_30;
  function Companion_getInstance_31() {
    if (Companion_instance_30 == null)
      new Companion_30();
    return Companion_instance_30;
  }
  function $serializer_29() {
    $serializer_instance_28 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.trail.BlogInTrail', this, 6);
    tmp0_serialDesc.addElement_5pzumi_k$('name', true);
    tmp0_serialDesc.addElement_5pzumi_k$('active', true);
    tmp0_serialDesc.addElement_5pzumi_k$('theme', true);
    tmp0_serialDesc.addElement_5pzumi_k$('share_likes', true);
    tmp0_serialDesc.addElement_5pzumi_k$('share_following', true);
    tmp0_serialDesc.addElement_5pzumi_k$('can_be_followed', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_29).serialize_izskvi_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.isActive === false)) {
      tmp1_output.encodeBooleanElement_ydht7q_k$(tmp0_desc, 1, value.isActive);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !(value.theme == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, $serializer_getInstance_14(), value.theme);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 3) ? true : !(value.isShareLikes === false)) {
      tmp1_output.encodeBooleanElement_ydht7q_k$(tmp0_desc, 3, value.isShareLikes);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 4) ? true : !(value.isShareFollowing === false)) {
      tmp1_output.encodeBooleanElement_ydht7q_k$(tmp0_desc, 4, value.isShareFollowing);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 5) ? true : !(value.isCanBeFollowed === false)) {
      tmp1_output.encodeBooleanElement_ydht7q_k$(tmp0_desc, 5, value.isCanBeFollowed);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_29).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_izskvi_k$(encoder, value instanceof BlogInTrail ? value : THROW_CCE());
  };
  protoOf($serializer_29).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = null;
    var tmp7_local3 = false;
    var tmp8_local4 = false;
    var tmp9_local5 = false;
    var tmp10_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp10_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp10_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, $serializer_getInstance_14(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, $serializer_getInstance_14(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.endStructure_1xqz0n_k$(tmp0_desc);
    return BlogInTrail_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_29).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_29).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), get_nullable($serializer_getInstance_14()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  var $serializer_instance_28;
  function $serializer_getInstance_28() {
    if ($serializer_instance_28 == null)
      new $serializer_29();
    return $serializer_instance_28;
  }
  function BlogInTrail_init_$Init$(seen0, name, isActive, theme, isShareLikes, isShareFollowing, isCanBeFollowed, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_28().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 2))
      $this.isActive = false;
    else
      $this.isActive = isActive;
    if (0 === (seen0 & 4))
      $this.theme = null;
    else
      $this.theme = theme;
    if (0 === (seen0 & 8))
      $this.isShareLikes = false;
    else
      $this.isShareLikes = isShareLikes;
    if (0 === (seen0 & 16))
      $this.isShareFollowing = false;
    else
      $this.isShareFollowing = isShareFollowing;
    if (0 === (seen0 & 32))
      $this.isCanBeFollowed = false;
    else
      $this.isCanBeFollowed = isCanBeFollowed;
    return $this;
  }
  function BlogInTrail_init_$Create$(seen0, name, isActive, theme, isShareLikes, isShareFollowing, isCanBeFollowed, serializationConstructorMarker) {
    return BlogInTrail_init_$Init$(seen0, name, isActive, theme, isShareLikes, isShareFollowing, isCanBeFollowed, serializationConstructorMarker, objectCreate(protoOf(BlogInTrail)));
  }
  function BlogInTrail() {
    Companion_getInstance_31();
    this.name = null;
    this.isActive = false;
    this.theme = null;
    this.isShareLikes = false;
    this.isShareFollowing = false;
    this.isCanBeFollowed = false;
  }
  protoOf(BlogInTrail).get_name_woqyms_k$ = function () {
    return this.name;
  };
  protoOf(BlogInTrail).get_isActive_quafmh_k$ = function () {
    return this.isActive;
  };
  protoOf(BlogInTrail).get_theme_iz24rk_k$ = function () {
    return this.theme;
  };
  protoOf(BlogInTrail).get_isShareLikes_al4t9s_k$ = function () {
    return this.isShareLikes;
  };
  protoOf(BlogInTrail).get_isShareFollowing_ssidiz_k$ = function () {
    return this.isShareFollowing;
  };
  protoOf(BlogInTrail).get_isCanBeFollowed_hch9jk_k$ = function () {
    return this.isCanBeFollowed;
  };
  function Companion_31() {
    Companion_instance_31 = this;
  }
  protoOf(Companion_31).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_29();
  };
  var Companion_instance_31;
  function Companion_getInstance_32() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  function $serializer_30() {
    $serializer_instance_29 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.trail.IdInTrail', this, 1);
    tmp0_serialDesc.addElement_5pzumi_k$('id', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_30).serialize_cy71qx_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_30).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_cy71qx_k$(encoder, value instanceof IdInTrail ? value : THROW_CCE());
  };
  protoOf($serializer_30).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_1xqz0n_k$(tmp0_desc);
    return IdInTrail_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_30).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_30).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_29;
  function $serializer_getInstance_29() {
    if ($serializer_instance_29 == null)
      new $serializer_30();
    return $serializer_instance_29;
  }
  function IdInTrail_init_$Init$(seen0, id, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_29().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    return $this;
  }
  function IdInTrail_init_$Create$(seen0, id, serializationConstructorMarker) {
    return IdInTrail_init_$Init$(seen0, id, serializationConstructorMarker, objectCreate(protoOf(IdInTrail)));
  }
  function IdInTrail() {
    Companion_getInstance_32();
    this.id = null;
  }
  protoOf(IdInTrail).get_id_kntnx8_k$ = function () {
    return this.id;
  };
  function Companion_32() {
    Companion_instance_32 = this;
  }
  protoOf(Companion_32).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_30();
  };
  var Companion_instance_32;
  function Companion_getInstance_33() {
    if (Companion_instance_32 == null)
      new Companion_32();
    return Companion_instance_32;
  }
  function $serializer_31() {
    $serializer_instance_30 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.trail.Trail', this, 6);
    tmp0_serialDesc.addElement_5pzumi_k$('blog', true);
    tmp0_serialDesc.addElement_5pzumi_k$('post', true);
    tmp0_serialDesc.addElement_5pzumi_k$('content_raw', true);
    tmp0_serialDesc.addElement_5pzumi_k$('content', true);
    tmp0_serialDesc.addElement_5pzumi_k$('current_item', true);
    tmp0_serialDesc.addElement_5pzumi_k$('root_item', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_31).serialize_dydvhj_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.blog == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, $serializer_getInstance_28(), value.blog);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.post == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, $serializer_getInstance_29(), value.post);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !(value.contentRaw == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, StringSerializer_getInstance(), value.contentRaw);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 3) ? true : !(value.content == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 3, StringSerializer_getInstance(), value.content);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 4) ? true : !(value.isCurrentItem === false)) {
      tmp1_output.encodeBooleanElement_ydht7q_k$(tmp0_desc, 4, value.isCurrentItem);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 5) ? true : !(value.isRootItem === false)) {
      tmp1_output.encodeBooleanElement_ydht7q_k$(tmp0_desc, 5, value.isRootItem);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_31).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_dydvhj_k$(encoder, value instanceof Trail ? value : THROW_CCE());
  };
  protoOf($serializer_31).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = false;
    var tmp9_local5 = false;
    var tmp10_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp10_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp10_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, $serializer_getInstance_28(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, $serializer_getInstance_29(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, $serializer_getInstance_28(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, $serializer_getInstance_29(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.endStructure_1xqz0n_k$(tmp0_desc);
    return Trail_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_31).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_31).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_28()), get_nullable($serializer_getInstance_29()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  var $serializer_instance_30;
  function $serializer_getInstance_30() {
    if ($serializer_instance_30 == null)
      new $serializer_31();
    return $serializer_instance_30;
  }
  function Trail_init_$Init$(seen0, blog, post, contentRaw, content, isCurrentItem, isRootItem, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_30().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.blog = null;
    else
      $this.blog = blog;
    if (0 === (seen0 & 2))
      $this.post = null;
    else
      $this.post = post;
    if (0 === (seen0 & 4))
      $this.contentRaw = null;
    else
      $this.contentRaw = contentRaw;
    if (0 === (seen0 & 8))
      $this.content = null;
    else
      $this.content = content;
    if (0 === (seen0 & 16))
      $this.isCurrentItem = false;
    else
      $this.isCurrentItem = isCurrentItem;
    if (0 === (seen0 & 32))
      $this.isRootItem = false;
    else
      $this.isRootItem = isRootItem;
    return $this;
  }
  function Trail_init_$Create$(seen0, blog, post, contentRaw, content, isCurrentItem, isRootItem, serializationConstructorMarker) {
    return Trail_init_$Init$(seen0, blog, post, contentRaw, content, isCurrentItem, isRootItem, serializationConstructorMarker, objectCreate(protoOf(Trail)));
  }
  function Trail() {
    Companion_getInstance_33();
    this.blog = null;
    this.post = null;
    this.contentRaw = null;
    this.content = null;
    this.isCurrentItem = false;
    this.isRootItem = false;
  }
  protoOf(Trail).get_blog_wojizv_k$ = function () {
    return this.blog;
  };
  protoOf(Trail).get_post_wosj55_k$ = function () {
    return this.post;
  };
  protoOf(Trail).get_contentRaw_fsr2q0_k$ = function () {
    return this.contentRaw;
  };
  protoOf(Trail).get_content_h02jrk_k$ = function () {
    return this.content;
  };
  protoOf(Trail).get_isCurrentItem_elh093_k$ = function () {
    return this.isCurrentItem;
  };
  protoOf(Trail).get_isRootItem_yz1ejs_k$ = function () {
    return this.isRootItem;
  };
  function Companion_33() {
    Companion_instance_33 = this;
  }
  protoOf(Companion_33).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_31();
  };
  var Companion_instance_33;
  function Companion_getInstance_34() {
    if (Companion_instance_33 == null)
      new Companion_33();
    return Companion_instance_33;
  }
  function $serializer_32() {
    $serializer_instance_31 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.user.FollowerUser', this, 4);
    tmp0_serialDesc.addElement_5pzumi_k$('name', true);
    tmp0_serialDesc.addElement_5pzumi_k$('following', true);
    tmp0_serialDesc.addElement_5pzumi_k$('url', true);
    tmp0_serialDesc.addElement_5pzumi_k$('updated', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_32).serialize_v89sbb_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.following == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, BooleanSerializer_getInstance(), value.following);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !(value.url == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 3) ? true : !(value.updated == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 3, StringSerializer_getInstance(), value.updated);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_32).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_v89sbb_k$(encoder, value instanceof FollowerUser ? value : THROW_CCE());
  };
  protoOf($serializer_32).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp8_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.endStructure_1xqz0n_k$(tmp0_desc);
    return FollowerUser_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_32).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_32).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_31;
  function $serializer_getInstance_31() {
    if ($serializer_instance_31 == null)
      new $serializer_32();
    return $serializer_instance_31;
  }
  function FollowerUser_init_$Init$(seen0, name, following, url, updated, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_31().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 2))
      $this.following = null;
    else
      $this.following = following;
    if (0 === (seen0 & 4))
      $this.url = null;
    else
      $this.url = url;
    if (0 === (seen0 & 8))
      $this.updated = null;
    else
      $this.updated = updated;
    return $this;
  }
  function FollowerUser_init_$Create$(seen0, name, following, url, updated, serializationConstructorMarker) {
    return FollowerUser_init_$Init$(seen0, name, following, url, updated, serializationConstructorMarker, objectCreate(protoOf(FollowerUser)));
  }
  function FollowerUser() {
    Companion_getInstance_34();
    this.name = null;
    this.following = null;
    this.url = null;
    this.updated = null;
  }
  protoOf(FollowerUser).set_name_wkmnld_k$ = function (_set____db54di) {
    this.name = _set____db54di;
  };
  protoOf(FollowerUser).get_name_woqyms_k$ = function () {
    return this.name;
  };
  protoOf(FollowerUser).set_following_4ngezw_k$ = function (_set____db54di) {
    this.following = _set____db54di;
  };
  protoOf(FollowerUser).get_following_l6j1m0_k$ = function () {
    return this.following;
  };
  protoOf(FollowerUser).set_url_fvthdx_k$ = function (_set____db54di) {
    this.url = _set____db54di;
  };
  protoOf(FollowerUser).get_url_18iuii_k$ = function () {
    return this.url;
  };
  protoOf(FollowerUser).set_updated_1wxnyf_k$ = function (_set____db54di) {
    this.updated = _set____db54di;
  };
  protoOf(FollowerUser).get_updated_2m0pim_k$ = function () {
    return this.updated;
  };
  function _get_$childSerializers__r2zwns_16($this) {
    return $this.$childSerializers_1;
  }
  function User$Companion$$childSerializers$_anonymous__6nf9sv() {
    return new ReferenceArraySerializer(getKClass(Blog), $serializer_getInstance_12());
  }
  function Companion_34() {
    Companion_instance_34 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [null, null, null, null, lazy(tmp_0, User$Companion$$childSerializers$_anonymous__6nf9sv)];
  }
  protoOf(Companion_34).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_32();
  };
  var Companion_instance_34;
  function Companion_getInstance_35() {
    if (Companion_instance_34 == null)
      new Companion_34();
    return Companion_instance_34;
  }
  function $serializer_33() {
    $serializer_instance_32 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.user.User', this, 5);
    tmp0_serialDesc.addElement_5pzumi_k$('following', true);
    tmp0_serialDesc.addElement_5pzumi_k$('default_post_format', true);
    tmp0_serialDesc.addElement_5pzumi_k$('name', true);
    tmp0_serialDesc.addElement_5pzumi_k$('likes', true);
    tmp0_serialDesc.addElement_5pzumi_k$('blogs', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_33).serialize_azbyn1_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_35().$childSerializers_1;
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.followingCount == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, IntSerializer_getInstance(), value.followingCount);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.defaultPostFormat == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, StringSerializer_getInstance(), value.defaultPostFormat);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !(value.name == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 3) ? true : !(value.likeCount == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 3, IntSerializer_getInstance(), value.likeCount);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 4) ? true : !(value.blogs == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 4, tmp2_cached[4].get_value_j01efc_k$(), value.blogs);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_33).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_azbyn1_k$(encoder, value instanceof User ? value : THROW_CCE());
  };
  protoOf($serializer_33).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp10_cached = Companion_getInstance_35().$childSerializers_1;
    if (tmp9_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, tmp10_cached[4].get_value_j01efc_k$(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, tmp10_cached[4].get_value_j01efc_k$(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.endStructure_1xqz0n_k$(tmp0_desc);
    return User_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_33).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_33).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_35().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[4].get_value_j01efc_k$())];
  };
  var $serializer_instance_32;
  function $serializer_getInstance_32() {
    if ($serializer_instance_32 == null)
      new $serializer_33();
    return $serializer_instance_32;
  }
  function User_init_$Init$(seen0, followingCount, defaultPostFormat, name, likeCount, blogs, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_32().descriptor_1);
    }
    Resource.call($this);
    if (0 === (seen0 & 1))
      $this.followingCount = null;
    else
      $this.followingCount = followingCount;
    if (0 === (seen0 & 2))
      $this.defaultPostFormat = null;
    else
      $this.defaultPostFormat = defaultPostFormat;
    if (0 === (seen0 & 4))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 8))
      $this.likeCount = null;
    else
      $this.likeCount = likeCount;
    if (0 === (seen0 & 16))
      $this.blogs = null;
    else
      $this.blogs = blogs;
    return $this;
  }
  function User_init_$Create$(seen0, followingCount, defaultPostFormat, name, likeCount, blogs, serializationConstructorMarker) {
    return User_init_$Init$(seen0, followingCount, defaultPostFormat, name, likeCount, blogs, serializationConstructorMarker, objectCreate(protoOf(User)));
  }
  function User() {
    Companion_getInstance_35();
    Resource.call(this);
    this.followingCount = null;
    this.defaultPostFormat = null;
    this.name = null;
    this.likeCount = null;
    this.blogs = null;
  }
  protoOf(User).get_followingCount_cn5j3t_k$ = function () {
    return this.followingCount;
  };
  protoOf(User).get_defaultPostFormat_37nwep_k$ = function () {
    return this.defaultPostFormat;
  };
  protoOf(User).get_name_woqyms_k$ = function () {
    return this.name;
  };
  protoOf(User).get_likeCount_5dmwb3_k$ = function () {
    return this.likeCount;
  };
  protoOf(User).get_blogs_ip8lbc_k$ = function () {
    return this.blogs;
  };
  function proceedUnit($this, body) {
    try {
      var response = body();
      var containsArg = response.get_status_jnf6d7_k$();
      if (200 <= containsArg ? containsArg <= 299 : false) {
        return new ResponseUnit(response.get_stringBody_otz1zw_k$());
      }
      throw TumblrException_init_$Create$_1(response.get_status_jnf6d7_k$(), response.get_stringBody_otz1zw_k$());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
        throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$_0(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  function blogUrl($this, blogName) {
    return contains(blogName, '.') ? blogName : blogName + '.tumblr.com';
  }
  function AbstractResourceImpl$oauthPostUnit$slambda(this$0, $path, $params, $files, resultContinuation) {
    this.this$0__1 = this$0;
    this.$path_1 = $path;
    this.$params_1 = $params;
    this.$files_1 = $files;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractResourceImpl$oauthPostUnit$slambda).invoke_ncbbgo_k$ = function ($this$runBlocking, $completion) {
    var tmp = this.create_rcuf4x_k$($this$runBlocking, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AbstractResourceImpl$oauthPostUnit$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_ncbbgo_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AbstractResourceImpl$oauthPostUnit$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.tmp02__1 = this.this$0__1;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.tmp02__1;
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(2);
            var this_0 = (new HttpRequest()).url_uv2bth_k$('https://api.tumblr.com/v2' + this.$path_1).header_32bnnx_k$('Authorization', this.this$0__1.auth_1.oAuthBearerToken_6vru3j_k$()).accept_nclv9q_k$(MediaType_getInstance().get_JSON_wo3nzl_k$()).params_lw6ktd_k$(this.$params_1);
            var _iterator__ex2g4s = this.$files_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
            while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
              var element = _iterator__ex2g4s.next_20eer_k$();
              var key = element.get_key_18j28a_k$();
              var pair = element.get_value_j01efc_k$();
              this_0.file_65915o_k$(key, pair.get_first_irdx8n_k$(), pair.get_second_jf7fjx_k$());
            }

            suspendResult = this_0.post_etl1qc_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.response1__1 = suspendResult;
            var containsArg = this.response1__1.get_status_jnf6d7_k$();
            if (200 <= containsArg ? containsArg <= 299 : false) {
              this.tmp$ret$00__1 = new ResponseUnit(this.response1__1.get_stringBody_otz1zw_k$());
              this.set_exceptionState_fex74n_k$(6);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_1(this.response1__1.get_status_jnf6d7_k$(), this.response1__1.get_stringBody_otz1zw_k$());
          case 4:
            return this.tmp$ret$00__1;
          case 5:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$_0(e) : tmp0_elvis_lhs;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(AbstractResourceImpl$oauthPostUnit$slambda).create_rcuf4x_k$ = function ($this$runBlocking, completion) {
    var i = new AbstractResourceImpl$oauthPostUnit$slambda(this.this$0__1, this.$path_1, this.$params_1, this.$files_1, completion);
    i.$this$runBlocking_1 = $this$runBlocking;
    return i;
  };
  protoOf(AbstractResourceImpl$oauthPostUnit$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AbstractResourceImpl$oauthPostUnit$slambda_0(this$0, $path, $params, $files, resultContinuation) {
    var i = new AbstractResourceImpl$oauthPostUnit$slambda(this$0, $path, $params, $files, resultContinuation);
    var l = function ($this$runBlocking, $completion) {
      return i.invoke_ncbbgo_k$($this$runBlocking, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AbstractResourceImpl(auth) {
    this.auth_1 = auth;
  }
  protoOf(AbstractResourceImpl).get_auth_woj2sx_k$ = function () {
    return this.auth_1;
  };
  protoOf(AbstractResourceImpl).oauthPostUnit_el8m24_k$ = function (path, params, files) {
    return runBlocking(AbstractResourceImpl$oauthPostUnit$slambda_0(this, path, params, files, null));
  };
  protoOf(AbstractResourceImpl).oauthPostUnit$default_p8ojst_k$ = function (path, params, files, $super) {
    var tmp;
    if (params === VOID) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp = emptyMap();
    } else {
      tmp = params;
    }
    params = tmp;
    var tmp_0;
    if (files === VOID) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp_0 = emptyMap();
    } else {
      tmp_0 = files;
    }
    files = tmp_0;
    return $super === VOID ? this.oauthPostUnit_el8m24_k$(path, params, files) : $super.oauthPostUnit_el8m24_k$.call(this, path, params, files);
  };
  protoOf(AbstractResourceImpl).blogPath_po3s0p_k$ = function (blogName, extPath) {
    return '/blog/' + blogUrl(this, blogName) + extPath;
  };
  function AuthResourceImpl$oAuth2Token$slambda(this$0, $request, resultContinuation) {
    this.this$0__1 = this$0;
    this.$request_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AuthResourceImpl$oAuth2Token$slambda).invoke_wdzdsa_k$ = function ($this$runBlocking, $completion) {
    var tmp = this.create_rcuf4x_k$($this$runBlocking, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AuthResourceImpl$oAuth2Token$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_wdzdsa_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AuthResourceImpl$oAuth2Token$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.tmp02__1 = this.this$0__1;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.tmp02__1;
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(2);
            suspendResult = (new HttpRequest()).url_uv2bth_k$('https://api.tumblr.com/v2/oauth2/token').params_lw6ktd_k$(this.$request_1.toMap_1tsnvl_k$()).post_etl1qc_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.response1__1 = suspendResult;
            var containsArg = this.response1__1.get_status_jnf6d7_k$();
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0 = Json_getInstance();
              var obj = this.response1__1.get_stringBody_otz1zw_k$();
              var this_0 = tmp0.get_json_woos35_k$();
              var this_1 = this_0.get_serializersModule_piitvg_k$();
              var this_2 = serializer(this_1, createKType(getKClass(AuthOAuth2TokenResponse), arrayOf([]), false));
              tmp_0.tmp$ret$00__1 = new Response(this_0.decodeFromString_jwu9sq_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.response1__1.get_stringBody_otz1zw_k$());
              this.set_exceptionState_fex74n_k$(6);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_1(this.response1__1.get_status_jnf6d7_k$(), this.response1__1.get_stringBody_otz1zw_k$());
          case 4:
            return this.tmp$ret$00__1;
          case 5:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$_0(e) : tmp0_elvis_lhs;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(AuthResourceImpl$oAuth2Token$slambda).create_rcuf4x_k$ = function ($this$runBlocking, completion) {
    var i = new AuthResourceImpl$oAuth2Token$slambda(this.this$0__1, this.$request_1, completion);
    i.$this$runBlocking_1 = $this$runBlocking;
    return i;
  };
  protoOf(AuthResourceImpl$oAuth2Token$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AuthResourceImpl$oAuth2Token$slambda_0(this$0, $request, resultContinuation) {
    var i = new AuthResourceImpl$oAuth2Token$slambda(this$0, $request, resultContinuation);
    var l = function ($this$runBlocking, $completion) {
      return i.invoke_wdzdsa_k$($this$runBlocking, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AuthResourceImpl$oAuth2TokenRefresh$slambda(this$0, $request, resultContinuation) {
    this.this$0__1 = this$0;
    this.$request_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AuthResourceImpl$oAuth2TokenRefresh$slambda).invoke_wdzdsa_k$ = function ($this$runBlocking, $completion) {
    var tmp = this.create_rcuf4x_k$($this$runBlocking, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AuthResourceImpl$oAuth2TokenRefresh$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_wdzdsa_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AuthResourceImpl$oAuth2TokenRefresh$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.tmp02__1 = this.this$0__1;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.tmp02__1;
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(2);
            suspendResult = (new HttpRequest()).url_uv2bth_k$('https://api.tumblr.com/v2/oauth2/token').params_lw6ktd_k$(this.$request_1.toMap_1tsnvl_k$()).post_etl1qc_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.response1__1 = suspendResult;
            var containsArg = this.response1__1.get_status_jnf6d7_k$();
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0 = Json_getInstance();
              var obj = this.response1__1.get_stringBody_otz1zw_k$();
              var this_0 = tmp0.get_json_woos35_k$();
              var this_1 = this_0.get_serializersModule_piitvg_k$();
              var this_2 = serializer(this_1, createKType(getKClass(AuthOAuth2TokenResponse), arrayOf([]), false));
              tmp_0.tmp$ret$00__1 = new Response(this_0.decodeFromString_jwu9sq_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.response1__1.get_stringBody_otz1zw_k$());
              this.set_exceptionState_fex74n_k$(6);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_1(this.response1__1.get_status_jnf6d7_k$(), this.response1__1.get_stringBody_otz1zw_k$());
          case 4:
            return this.tmp$ret$00__1;
          case 5:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$_0(e) : tmp0_elvis_lhs;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(AuthResourceImpl$oAuth2TokenRefresh$slambda).create_rcuf4x_k$ = function ($this$runBlocking, completion) {
    var i = new AuthResourceImpl$oAuth2TokenRefresh$slambda(this.this$0__1, this.$request_1, completion);
    i.$this$runBlocking_1 = $this$runBlocking;
    return i;
  };
  protoOf(AuthResourceImpl$oAuth2TokenRefresh$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AuthResourceImpl$oAuth2TokenRefresh$slambda_0(this$0, $request, resultContinuation) {
    var i = new AuthResourceImpl$oAuth2TokenRefresh$slambda(this$0, $request, resultContinuation);
    var l = function ($this$runBlocking, $completion) {
      return i.invoke_wdzdsa_k$($this$runBlocking, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AuthResourceImpl(auth) {
    AbstractResourceImpl.call(this, auth);
  }
  protoOf(AuthResourceImpl).authorizeUrl = function (request) {
    // Inline function 'kotlin.apply' call
    var this_0 = new URLBuilder();
    this_0.set_protocol_f2n3en_k$(Companion_getInstance().get_HTTPS_iai1lu_k$());
    this_0.set_host_sqck4b_k$('www.tumblr.com');
    set_encodedPath(this_0, '/oauth2/authorize');
    // Inline function 'kotlin.apply' call
    var this_1 = this_0.get_parameters_cl4rkd_k$();
    this_1.append_rhug0a_k$('client_id', this.get_auth_woj2sx_k$().get_clientId_gs3e9d_k$());
    this_1.append_rhug0a_k$('response_type', request.responseType);
    this_1.append_rhug0a_k$('state', ensureNotNull(request.state));
    this_1.append_rhug0a_k$('scope', request.scope);
    var tmp0_safe_receiver = request.redirectUri;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_1.append_rhug0a_k$('redirect_uri', tmp0_safe_receiver);
    }
    return this_0.build_1k0s4u_k$().toString();
  };
  protoOf(AuthResourceImpl).oAuth2Token = function (request) {
    return runBlocking(AuthResourceImpl$oAuth2Token$slambda_0(this, request, null));
  };
  protoOf(AuthResourceImpl).oAuth2TokenRefresh = function (request) {
    return runBlocking(AuthResourceImpl$oAuth2TokenRefresh$slambda_0(this, request, null));
  };
  function BlogResourceImpl$blogInfo$slambda($this, $path, $params, resultContinuation) {
    this.$this_1 = $this;
    this.$path_1 = $path;
    this.$params_1 = $params;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BlogResourceImpl$blogInfo$slambda).invoke_799pxi_k$ = function ($this$runBlocking, $completion) {
    var tmp = this.create_rcuf4x_k$($this$runBlocking, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BlogResourceImpl$blogInfo$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_799pxi_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BlogResourceImpl$blogInfo$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.tmp02__1 = this.$this_1;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.tmp02__1;
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(2);
            suspendResult = (new HttpRequest()).url_uv2bth_k$('https://api.tumblr.com/v2' + this.$path_1).accept_nclv9q_k$(MediaType_getInstance().get_JSON_wo3nzl_k$()).queries_u14c3j_k$(this.$params_1).query_u1ndh0_k$('api_key', this.$this_1.get_auth_woj2sx_k$().get_clientId_gs3e9d_k$()).get_r3bkvm_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.response1__1 = suspendResult;
            var containsArg = this.response1__1.get_status_jnf6d7_k$();
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0 = Json_getInstance();
              var obj = this.response1__1.get_stringBody_otz1zw_k$();
              var this_0 = tmp0.get_json_woos35_k$();
              var this_1 = this_0.get_serializersModule_piitvg_k$();
              var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogInfoResponse), arrayOf([]), false))]), false));
              tmp_0.tmp$ret$00__1 = new Response(this_0.decodeFromString_jwu9sq_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.response1__1.get_stringBody_otz1zw_k$());
              this.set_exceptionState_fex74n_k$(6);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_1(this.response1__1.get_status_jnf6d7_k$(), this.response1__1.get_stringBody_otz1zw_k$());
          case 4:
            return this.tmp$ret$00__1;
          case 5:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$_0(e) : tmp0_elvis_lhs;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(BlogResourceImpl$blogInfo$slambda).create_rcuf4x_k$ = function ($this$runBlocking, completion) {
    var i = new BlogResourceImpl$blogInfo$slambda(this.$this_1, this.$path_1, this.$params_1, completion);
    i.$this$runBlocking_1 = $this$runBlocking;
    return i;
  };
  protoOf(BlogResourceImpl$blogInfo$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BlogResourceImpl$blogInfo$slambda_0($this, $path, $params, resultContinuation) {
    var i = new BlogResourceImpl$blogInfo$slambda($this, $path, $params, resultContinuation);
    var l = function ($this$runBlocking, $completion) {
      return i.invoke_799pxi_k$($this$runBlocking, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BlogResourceImpl$blogAvatar$slambda($path, resultContinuation) {
    this.$path_1 = $path;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BlogResourceImpl$blogAvatar$slambda).invoke_4khgji_k$ = function ($this$runBlocking, $completion) {
    var tmp = this.create_rcuf4x_k$($this$runBlocking, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BlogResourceImpl$blogAvatar$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_4khgji_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BlogResourceImpl$blogAvatar$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = (new HttpRequest()).url_uv2bth_k$('https://api.tumblr.com/v2' + this.$path_1).followRedirect_pnbnu0_k$(false).get_r3bkvm_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var r = suspendResult;
            var tmp0 = r.get_headers_ef25jx_k$().get_wei43m_k$('location');
            var tmp$ret$0;
            l$ret$1: do {
              if (tmp0 == null) {
                var message = 'Location header is not found.';
                throw IllegalStateException_init_$Create$(toString(message));
              } else {
                tmp$ret$0 = tmp0;
                break l$ret$1;
              }
            }
             while (false);
            var url = tmp$ret$0;
            return new Response(url.get_c1px32_k$(0), url.get_c1px32_k$(0));
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(BlogResourceImpl$blogAvatar$slambda).create_rcuf4x_k$ = function ($this$runBlocking, completion) {
    var i = new BlogResourceImpl$blogAvatar$slambda(this.$path_1, completion);
    i.$this$runBlocking_1 = $this$runBlocking;
    return i;
  };
  protoOf(BlogResourceImpl$blogAvatar$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BlogResourceImpl$blogAvatar$slambda_0($path, resultContinuation) {
    var i = new BlogResourceImpl$blogAvatar$slambda($path, resultContinuation);
    var l = function ($this$runBlocking, $completion) {
      return i.invoke_4khgji_k$($this$runBlocking, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BlogResourceImpl$blogLikes$slambda($this, $path, $params, resultContinuation) {
    this.$this_1 = $this;
    this.$path_1 = $path;
    this.$params_1 = $params;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BlogResourceImpl$blogLikes$slambda).invoke_f3l4ls_k$ = function ($this$runBlocking, $completion) {
    var tmp = this.create_rcuf4x_k$($this$runBlocking, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BlogResourceImpl$blogLikes$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_f3l4ls_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BlogResourceImpl$blogLikes$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.tmp02__1 = this.$this_1;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.tmp02__1;
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(2);
            suspendResult = (new HttpRequest()).url_uv2bth_k$('https://api.tumblr.com/v2' + this.$path_1).accept_nclv9q_k$(MediaType_getInstance().get_JSON_wo3nzl_k$()).queries_u14c3j_k$(this.$params_1).query_u1ndh0_k$('api_key', this.$this_1.get_auth_woj2sx_k$().get_clientId_gs3e9d_k$()).get_r3bkvm_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.response1__1 = suspendResult;
            var containsArg = this.response1__1.get_status_jnf6d7_k$();
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0 = Json_getInstance();
              var obj = this.response1__1.get_stringBody_otz1zw_k$();
              var this_0 = tmp0.get_json_woos35_k$();
              var this_1 = this_0.get_serializersModule_piitvg_k$();
              var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogLikesResponse), arrayOf([]), false))]), false));
              tmp_0.tmp$ret$00__1 = new Response(this_0.decodeFromString_jwu9sq_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.response1__1.get_stringBody_otz1zw_k$());
              this.set_exceptionState_fex74n_k$(6);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_1(this.response1__1.get_status_jnf6d7_k$(), this.response1__1.get_stringBody_otz1zw_k$());
          case 4:
            return this.tmp$ret$00__1;
          case 5:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$_0(e) : tmp0_elvis_lhs;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(BlogResourceImpl$blogLikes$slambda).create_rcuf4x_k$ = function ($this$runBlocking, completion) {
    var i = new BlogResourceImpl$blogLikes$slambda(this.$this_1, this.$path_1, this.$params_1, completion);
    i.$this$runBlocking_1 = $this$runBlocking;
    return i;
  };
  protoOf(BlogResourceImpl$blogLikes$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BlogResourceImpl$blogLikes$slambda_0($this, $path, $params, resultContinuation) {
    var i = new BlogResourceImpl$blogLikes$slambda($this, $path, $params, resultContinuation);
    var l = function ($this$runBlocking, $completion) {
      return i.invoke_f3l4ls_k$($this$runBlocking, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BlogResourceImpl$blogFollowing$slambda($this, $path, $params, resultContinuation) {
    this.$this_1 = $this;
    this.$path_1 = $path;
    this.$params_1 = $params;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BlogResourceImpl$blogFollowing$slambda).invoke_8lxuuz_k$ = function ($this$runBlocking, $completion) {
    var tmp = this.create_rcuf4x_k$($this$runBlocking, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BlogResourceImpl$blogFollowing$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_8lxuuz_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BlogResourceImpl$blogFollowing$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.tmp02__1 = this.$this_1;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.tmp02__1;
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(2);
            suspendResult = (new HttpRequest()).url_uv2bth_k$('https://api.tumblr.com/v2' + this.$path_1).header_32bnnx_k$('Authorization', this.$this_1.get_auth_woj2sx_k$().oAuthBearerToken_6vru3j_k$()).accept_nclv9q_k$(MediaType_getInstance().get_JSON_wo3nzl_k$()).queries_u14c3j_k$(this.$params_1).get_r3bkvm_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.response1__1 = suspendResult;
            var containsArg = this.response1__1.get_status_jnf6d7_k$();
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0 = Json_getInstance();
              var obj = this.response1__1.get_stringBody_otz1zw_k$();
              var this_0 = tmp0.get_json_woos35_k$();
              var this_1 = this_0.get_serializersModule_piitvg_k$();
              var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogFollowingResponse), arrayOf([]), false))]), false));
              tmp_0.tmp$ret$00__1 = new Response(this_0.decodeFromString_jwu9sq_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.response1__1.get_stringBody_otz1zw_k$());
              this.set_exceptionState_fex74n_k$(6);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_1(this.response1__1.get_status_jnf6d7_k$(), this.response1__1.get_stringBody_otz1zw_k$());
          case 4:
            return this.tmp$ret$00__1;
          case 5:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$_0(e) : tmp0_elvis_lhs;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(BlogResourceImpl$blogFollowing$slambda).create_rcuf4x_k$ = function ($this$runBlocking, completion) {
    var i = new BlogResourceImpl$blogFollowing$slambda(this.$this_1, this.$path_1, this.$params_1, completion);
    i.$this$runBlocking_1 = $this$runBlocking;
    return i;
  };
  protoOf(BlogResourceImpl$blogFollowing$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BlogResourceImpl$blogFollowing$slambda_0($this, $path, $params, resultContinuation) {
    var i = new BlogResourceImpl$blogFollowing$slambda($this, $path, $params, resultContinuation);
    var l = function ($this$runBlocking, $completion) {
      return i.invoke_8lxuuz_k$($this$runBlocking, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BlogResourceImpl$blogFollowers$slambda($this, $path, $params, resultContinuation) {
    this.$this_1 = $this;
    this.$path_1 = $path;
    this.$params_1 = $params;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BlogResourceImpl$blogFollowers$slambda).invoke_g8ztah_k$ = function ($this$runBlocking, $completion) {
    var tmp = this.create_rcuf4x_k$($this$runBlocking, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BlogResourceImpl$blogFollowers$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_g8ztah_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BlogResourceImpl$blogFollowers$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.tmp02__1 = this.$this_1;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.tmp02__1;
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(2);
            suspendResult = (new HttpRequest()).url_uv2bth_k$('https://api.tumblr.com/v2' + this.$path_1).header_32bnnx_k$('Authorization', this.$this_1.get_auth_woj2sx_k$().oAuthBearerToken_6vru3j_k$()).accept_nclv9q_k$(MediaType_getInstance().get_JSON_wo3nzl_k$()).queries_u14c3j_k$(this.$params_1).get_r3bkvm_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.response1__1 = suspendResult;
            var containsArg = this.response1__1.get_status_jnf6d7_k$();
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0 = Json_getInstance();
              var obj = this.response1__1.get_stringBody_otz1zw_k$();
              var this_0 = tmp0.get_json_woos35_k$();
              var this_1 = this_0.get_serializersModule_piitvg_k$();
              var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogFollowersResponse), arrayOf([]), false))]), false));
              tmp_0.tmp$ret$00__1 = new Response(this_0.decodeFromString_jwu9sq_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.response1__1.get_stringBody_otz1zw_k$());
              this.set_exceptionState_fex74n_k$(6);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_1(this.response1__1.get_status_jnf6d7_k$(), this.response1__1.get_stringBody_otz1zw_k$());
          case 4:
            return this.tmp$ret$00__1;
          case 5:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$_0(e) : tmp0_elvis_lhs;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(BlogResourceImpl$blogFollowers$slambda).create_rcuf4x_k$ = function ($this$runBlocking, completion) {
    var i = new BlogResourceImpl$blogFollowers$slambda(this.$this_1, this.$path_1, this.$params_1, completion);
    i.$this$runBlocking_1 = $this$runBlocking;
    return i;
  };
  protoOf(BlogResourceImpl$blogFollowers$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BlogResourceImpl$blogFollowers$slambda_0($this, $path, $params, resultContinuation) {
    var i = new BlogResourceImpl$blogFollowers$slambda($this, $path, $params, resultContinuation);
    var l = function ($this$runBlocking, $completion) {
      return i.invoke_g8ztah_k$($this$runBlocking, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BlogResourceImpl$blogPosts$slambda($this, $path, $params, resultContinuation) {
    this.$this_1 = $this;
    this.$path_1 = $path;
    this.$params_1 = $params;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BlogResourceImpl$blogPosts$slambda).invoke_qri4zd_k$ = function ($this$runBlocking, $completion) {
    var tmp = this.create_rcuf4x_k$($this$runBlocking, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BlogResourceImpl$blogPosts$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_qri4zd_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BlogResourceImpl$blogPosts$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.tmp02__1 = this.$this_1;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.tmp02__1;
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(2);
            suspendResult = (new HttpRequest()).url_uv2bth_k$('https://api.tumblr.com/v2' + this.$path_1).header_32bnnx_k$('Authorization', this.$this_1.get_auth_woj2sx_k$().oAuthBearerToken_6vru3j_k$()).accept_nclv9q_k$(MediaType_getInstance().get_JSON_wo3nzl_k$()).queries_u14c3j_k$(this.$params_1).get_r3bkvm_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.response1__1 = suspendResult;
            var containsArg = this.response1__1.get_status_jnf6d7_k$();
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0 = Json_getInstance();
              var obj = this.response1__1.get_stringBody_otz1zw_k$();
              var this_0 = tmp0.get_json_woos35_k$();
              var this_1 = this_0.get_serializersModule_piitvg_k$();
              var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
              tmp_0.tmp$ret$00__1 = new Response(this_0.decodeFromString_jwu9sq_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.response1__1.get_stringBody_otz1zw_k$());
              this.set_exceptionState_fex74n_k$(6);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_1(this.response1__1.get_status_jnf6d7_k$(), this.response1__1.get_stringBody_otz1zw_k$());
          case 4:
            return this.tmp$ret$00__1;
          case 5:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$_0(e) : tmp0_elvis_lhs;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(BlogResourceImpl$blogPosts$slambda).create_rcuf4x_k$ = function ($this$runBlocking, completion) {
    var i = new BlogResourceImpl$blogPosts$slambda(this.$this_1, this.$path_1, this.$params_1, completion);
    i.$this$runBlocking_1 = $this$runBlocking;
    return i;
  };
  protoOf(BlogResourceImpl$blogPosts$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BlogResourceImpl$blogPosts$slambda_0($this, $path, $params, resultContinuation) {
    var i = new BlogResourceImpl$blogPosts$slambda($this, $path, $params, resultContinuation);
    var l = function ($this$runBlocking, $completion) {
      return i.invoke_qri4zd_k$($this$runBlocking, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BlogResourceImpl$blogQueuedPosts$slambda($this, $path, $params, resultContinuation) {
    this.$this_1 = $this;
    this.$path_1 = $path;
    this.$params_1 = $params;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BlogResourceImpl$blogQueuedPosts$slambda).invoke_qri4zd_k$ = function ($this$runBlocking, $completion) {
    var tmp = this.create_rcuf4x_k$($this$runBlocking, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BlogResourceImpl$blogQueuedPosts$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_qri4zd_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BlogResourceImpl$blogQueuedPosts$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.tmp02__1 = this.$this_1;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.tmp02__1;
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(2);
            suspendResult = (new HttpRequest()).url_uv2bth_k$('https://api.tumblr.com/v2' + this.$path_1).header_32bnnx_k$('Authorization', this.$this_1.get_auth_woj2sx_k$().oAuthBearerToken_6vru3j_k$()).accept_nclv9q_k$(MediaType_getInstance().get_JSON_wo3nzl_k$()).queries_u14c3j_k$(this.$params_1).get_r3bkvm_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.response1__1 = suspendResult;
            var containsArg = this.response1__1.get_status_jnf6d7_k$();
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0 = Json_getInstance();
              var obj = this.response1__1.get_stringBody_otz1zw_k$();
              var this_0 = tmp0.get_json_woos35_k$();
              var this_1 = this_0.get_serializersModule_piitvg_k$();
              var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
              tmp_0.tmp$ret$00__1 = new Response(this_0.decodeFromString_jwu9sq_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.response1__1.get_stringBody_otz1zw_k$());
              this.set_exceptionState_fex74n_k$(6);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_1(this.response1__1.get_status_jnf6d7_k$(), this.response1__1.get_stringBody_otz1zw_k$());
          case 4:
            return this.tmp$ret$00__1;
          case 5:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$_0(e) : tmp0_elvis_lhs;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(BlogResourceImpl$blogQueuedPosts$slambda).create_rcuf4x_k$ = function ($this$runBlocking, completion) {
    var i = new BlogResourceImpl$blogQueuedPosts$slambda(this.$this_1, this.$path_1, this.$params_1, completion);
    i.$this$runBlocking_1 = $this$runBlocking;
    return i;
  };
  protoOf(BlogResourceImpl$blogQueuedPosts$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BlogResourceImpl$blogQueuedPosts$slambda_0($this, $path, $params, resultContinuation) {
    var i = new BlogResourceImpl$blogQueuedPosts$slambda($this, $path, $params, resultContinuation);
    var l = function ($this$runBlocking, $completion) {
      return i.invoke_qri4zd_k$($this$runBlocking, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BlogResourceImpl$blogDraftPosts$slambda($this, $path, $params, resultContinuation) {
    this.$this_1 = $this;
    this.$path_1 = $path;
    this.$params_1 = $params;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BlogResourceImpl$blogDraftPosts$slambda).invoke_qri4zd_k$ = function ($this$runBlocking, $completion) {
    var tmp = this.create_rcuf4x_k$($this$runBlocking, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BlogResourceImpl$blogDraftPosts$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_qri4zd_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BlogResourceImpl$blogDraftPosts$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.tmp02__1 = this.$this_1;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.tmp02__1;
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(2);
            suspendResult = (new HttpRequest()).url_uv2bth_k$('https://api.tumblr.com/v2' + this.$path_1).header_32bnnx_k$('Authorization', this.$this_1.get_auth_woj2sx_k$().oAuthBearerToken_6vru3j_k$()).accept_nclv9q_k$(MediaType_getInstance().get_JSON_wo3nzl_k$()).queries_u14c3j_k$(this.$params_1).get_r3bkvm_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.response1__1 = suspendResult;
            var containsArg = this.response1__1.get_status_jnf6d7_k$();
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0 = Json_getInstance();
              var obj = this.response1__1.get_stringBody_otz1zw_k$();
              var this_0 = tmp0.get_json_woos35_k$();
              var this_1 = this_0.get_serializersModule_piitvg_k$();
              var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
              tmp_0.tmp$ret$00__1 = new Response(this_0.decodeFromString_jwu9sq_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.response1__1.get_stringBody_otz1zw_k$());
              this.set_exceptionState_fex74n_k$(6);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_1(this.response1__1.get_status_jnf6d7_k$(), this.response1__1.get_stringBody_otz1zw_k$());
          case 4:
            return this.tmp$ret$00__1;
          case 5:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$_0(e) : tmp0_elvis_lhs;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(BlogResourceImpl$blogDraftPosts$slambda).create_rcuf4x_k$ = function ($this$runBlocking, completion) {
    var i = new BlogResourceImpl$blogDraftPosts$slambda(this.$this_1, this.$path_1, this.$params_1, completion);
    i.$this$runBlocking_1 = $this$runBlocking;
    return i;
  };
  protoOf(BlogResourceImpl$blogDraftPosts$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BlogResourceImpl$blogDraftPosts$slambda_0($this, $path, $params, resultContinuation) {
    var i = new BlogResourceImpl$blogDraftPosts$slambda($this, $path, $params, resultContinuation);
    var l = function ($this$runBlocking, $completion) {
      return i.invoke_qri4zd_k$($this$runBlocking, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BlogResourceImpl$blogSubmissions$slambda($this, $path, $params, resultContinuation) {
    this.$this_1 = $this;
    this.$path_1 = $path;
    this.$params_1 = $params;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BlogResourceImpl$blogSubmissions$slambda).invoke_qri4zd_k$ = function ($this$runBlocking, $completion) {
    var tmp = this.create_rcuf4x_k$($this$runBlocking, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BlogResourceImpl$blogSubmissions$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_qri4zd_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BlogResourceImpl$blogSubmissions$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.tmp02__1 = this.$this_1;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.tmp02__1;
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(2);
            suspendResult = (new HttpRequest()).url_uv2bth_k$('https://api.tumblr.com/v2' + this.$path_1).header_32bnnx_k$('Authorization', this.$this_1.get_auth_woj2sx_k$().oAuthBearerToken_6vru3j_k$()).accept_nclv9q_k$(MediaType_getInstance().get_JSON_wo3nzl_k$()).queries_u14c3j_k$(this.$params_1).get_r3bkvm_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.response1__1 = suspendResult;
            var containsArg = this.response1__1.get_status_jnf6d7_k$();
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0 = Json_getInstance();
              var obj = this.response1__1.get_stringBody_otz1zw_k$();
              var this_0 = tmp0.get_json_woos35_k$();
              var this_1 = this_0.get_serializersModule_piitvg_k$();
              var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
              tmp_0.tmp$ret$00__1 = new Response(this_0.decodeFromString_jwu9sq_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.response1__1.get_stringBody_otz1zw_k$());
              this.set_exceptionState_fex74n_k$(6);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_1(this.response1__1.get_status_jnf6d7_k$(), this.response1__1.get_stringBody_otz1zw_k$());
          case 4:
            return this.tmp$ret$00__1;
          case 5:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$_0(e) : tmp0_elvis_lhs;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(BlogResourceImpl$blogSubmissions$slambda).create_rcuf4x_k$ = function ($this$runBlocking, completion) {
    var i = new BlogResourceImpl$blogSubmissions$slambda(this.$this_1, this.$path_1, this.$params_1, completion);
    i.$this$runBlocking_1 = $this$runBlocking;
    return i;
  };
  protoOf(BlogResourceImpl$blogSubmissions$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BlogResourceImpl$blogSubmissions$slambda_0($this, $path, $params, resultContinuation) {
    var i = new BlogResourceImpl$blogSubmissions$slambda($this, $path, $params, resultContinuation);
    var l = function ($this$runBlocking, $completion) {
      return i.invoke_qri4zd_k$($this$runBlocking, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BlogResourceImpl(auth) {
    AbstractResourceImpl.call(this, auth);
  }
  protoOf(BlogResourceImpl).blogInfo = function (request) {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.apiKeyGet' call
    var path = this.blogPath_po3s0p_k$(ensureNotNull(request.blogName), '/info');
    // Inline function 'kotlin.collections.mapOf' call
    var params = emptyMap();
    return runBlocking(BlogResourceImpl$blogInfo$slambda_0(this, path, params, null));
  };
  protoOf(BlogResourceImpl).blogAvatar = function (request) {
    var ext = request.size == null ? '' : '/' + ensureNotNull(request.size);
    var path = this.blogPath_po3s0p_k$(ensureNotNull(request.blogName), '/avatar' + ext);
    return runBlocking(BlogResourceImpl$blogAvatar$slambda_0(path, null));
  };
  protoOf(BlogResourceImpl).blogLikes = function (request) {
    var tmp2 = this.blogPath_po3s0p_k$(ensureNotNull(request.blogName), '/likes');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.apiKeyGet' call
    var params = request.toMap_1tsnvl_k$();
    return runBlocking(BlogResourceImpl$blogLikes$slambda_0(this, tmp2, params, null));
  };
  protoOf(BlogResourceImpl).blogFollowing = function (request) {
    var tmp2 = this.blogPath_po3s0p_k$(ensureNotNull(request.blogName), '/following');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.toMap_1tsnvl_k$();
    return runBlocking(BlogResourceImpl$blogFollowing$slambda_0(this, tmp2, params, null));
  };
  protoOf(BlogResourceImpl).blogFollowers = function (request) {
    var tmp2 = this.blogPath_po3s0p_k$(ensureNotNull(request.blogName), '/followers');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.toMap_1tsnvl_k$();
    return runBlocking(BlogResourceImpl$blogFollowers$slambda_0(this, tmp2, params, null));
  };
  protoOf(BlogResourceImpl).blogPosts = function (request) {
    var ext = request.type == null ? '' : '/' + ensureNotNull(request.type);
    var tmp2 = this.blogPath_po3s0p_k$(ensureNotNull(request.blogName), '/posts' + ext);
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.toMap_1tsnvl_k$();
    return runBlocking(BlogResourceImpl$blogPosts$slambda_0(this, tmp2, params, null));
  };
  protoOf(BlogResourceImpl).blogQueuedPosts = function (request) {
    var tmp2 = this.blogPath_po3s0p_k$(ensureNotNull(request.blogName), '/posts/queue');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.toMap_1tsnvl_k$();
    return runBlocking(BlogResourceImpl$blogQueuedPosts$slambda_0(this, tmp2, params, null));
  };
  protoOf(BlogResourceImpl).blogDraftPosts = function (request) {
    var tmp2 = this.blogPath_po3s0p_k$(ensureNotNull(request.blogName), '/posts/draft');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.toMap_1tsnvl_k$();
    return runBlocking(BlogResourceImpl$blogDraftPosts$slambda_0(this, tmp2, params, null));
  };
  protoOf(BlogResourceImpl).blogSubmissions = function (request) {
    var tmp2 = this.blogPath_po3s0p_k$(ensureNotNull(request.blogName), '/posts/submission');
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.toMap_1tsnvl_k$();
    return runBlocking(BlogResourceImpl$blogSubmissions$slambda_0(this, tmp2, params, null));
  };
  protoOf(BlogResourceImpl).postCreate = function (request) {
    var tmp = this.blogPath_po3s0p_k$(ensureNotNull(request.blogName), '/post');
    var tmp_0;
    if (request instanceof BlogTextPostRequest) {
      tmp_0 = request.toMap_1tsnvl_k$();
    } else {
      if (request instanceof BlogPhotoPostRequest) {
        tmp_0 = request.toMap_1tsnvl_k$();
      } else {
        if (request instanceof BlogQuotePostRequest) {
          tmp_0 = request.toMap_1tsnvl_k$();
        } else {
          if (request instanceof BlogLinkPostRequest) {
            tmp_0 = request.toMap_1tsnvl_k$();
          } else {
            if (request instanceof BlogChatPostRequest) {
              tmp_0 = request.toMap_1tsnvl_k$();
            } else {
              if (request instanceof BlogAudioPostRequest) {
                tmp_0 = request.toMap_1tsnvl_k$();
              } else {
                if (request instanceof BlogVideoPostRequest) {
                  tmp_0 = request.toMap_1tsnvl_k$();
                } else {
                  throw IllegalArgumentException_init_$Create$('Unknown post type.');
                }
              }
            }
          }
        }
      }
    }
    var tmp_1 = tmp_0;
    var tmp_2;
    if (request instanceof BlogPhotoPostRequest) {
      tmp_2 = request.toFileMap_tdtkqt_k$();
    } else {
      // Inline function 'kotlin.collections.mapOf' call
      tmp_2 = emptyMap();
    }
    return this.oauthPostUnit_el8m24_k$(tmp, tmp_1, tmp_2);
  };
  protoOf(BlogResourceImpl).postEdit = function (request) {
    var tmp = this.blogPath_po3s0p_k$(ensureNotNull(request.blogName), '/post/edit');
    var tmp_0;
    if (request instanceof BlogTextPostRequest) {
      tmp_0 = request.toMap_1tsnvl_k$();
    } else {
      if (request instanceof BlogPhotoPostRequest) {
        tmp_0 = request.toMap_1tsnvl_k$();
      } else {
        if (request instanceof BlogQuotePostRequest) {
          tmp_0 = request.toMap_1tsnvl_k$();
        } else {
          if (request instanceof BlogLinkPostRequest) {
            tmp_0 = request.toMap_1tsnvl_k$();
          } else {
            if (request instanceof BlogChatPostRequest) {
              tmp_0 = request.toMap_1tsnvl_k$();
            } else {
              if (request instanceof BlogAudioPostRequest) {
                tmp_0 = request.toMap_1tsnvl_k$();
              } else {
                if (request instanceof BlogVideoPostRequest) {
                  tmp_0 = request.toMap_1tsnvl_k$();
                } else {
                  throw IllegalArgumentException_init_$Create$('Unknown post type.');
                }
              }
            }
          }
        }
      }
    }
    return this.oauthPostUnit$default_p8ojst_k$(tmp, tmp_0);
  };
  protoOf(BlogResourceImpl).postReblog = function (request) {
    return this.oauthPostUnit$default_p8ojst_k$(this.blogPath_po3s0p_k$(ensureNotNull(request.blogName), '/post/reblog'), request.toMap_1tsnvl_k$());
  };
  protoOf(BlogResourceImpl).postDelete = function (request) {
    return this.oauthPostUnit$default_p8ojst_k$(this.blogPath_po3s0p_k$(ensureNotNull(request.blogName), '/post/delete'), request.toMap_1tsnvl_k$());
  };
  function TaggedResourceImpl$tagged$slambda($this, $path, $params, resultContinuation) {
    this.$this_1 = $this;
    this.$path_1 = $path;
    this.$params_1 = $params;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TaggedResourceImpl$tagged$slambda).invoke_xhr62a_k$ = function ($this$runBlocking, $completion) {
    var tmp = this.create_rcuf4x_k$($this$runBlocking, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(TaggedResourceImpl$tagged$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_xhr62a_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(TaggedResourceImpl$tagged$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.tmp02__1 = this.$this_1;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.tmp02__1;
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(2);
            suspendResult = (new HttpRequest()).url_uv2bth_k$('https://api.tumblr.com/v2' + this.$path_1).accept_nclv9q_k$(MediaType_getInstance().get_JSON_wo3nzl_k$()).queries_u14c3j_k$(this.$params_1).query_u1ndh0_k$('api_key', this.$this_1.get_auth_woj2sx_k$().get_clientId_gs3e9d_k$()).get_r3bkvm_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.response1__1 = suspendResult;
            var containsArg = this.response1__1.get_status_jnf6d7_k$();
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0 = Json_getInstance();
              var obj = this.response1__1.get_stringBody_otz1zw_k$();
              var this_0 = tmp0.get_json_woos35_k$();
              var this_1 = this_0.get_serializersModule_piitvg_k$();
              var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().get_arrayClass_udg0fc_k$(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Post), arrayOf([]), false))]), false))]), false));
              tmp_0.tmp$ret$00__1 = new Response(this_0.decodeFromString_jwu9sq_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.response1__1.get_stringBody_otz1zw_k$());
              this.set_exceptionState_fex74n_k$(6);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_1(this.response1__1.get_status_jnf6d7_k$(), this.response1__1.get_stringBody_otz1zw_k$());
          case 4:
            return this.tmp$ret$00__1;
          case 5:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$_0(e) : tmp0_elvis_lhs;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(TaggedResourceImpl$tagged$slambda).create_rcuf4x_k$ = function ($this$runBlocking, completion) {
    var i = new TaggedResourceImpl$tagged$slambda(this.$this_1, this.$path_1, this.$params_1, completion);
    i.$this$runBlocking_1 = $this$runBlocking;
    return i;
  };
  protoOf(TaggedResourceImpl$tagged$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function TaggedResourceImpl$tagged$slambda_0($this, $path, $params, resultContinuation) {
    var i = new TaggedResourceImpl$tagged$slambda($this, $path, $params, resultContinuation);
    var l = function ($this$runBlocking, $completion) {
      return i.invoke_xhr62a_k$($this$runBlocking, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function TaggedResourceImpl(auth) {
    AbstractResourceImpl.call(this, auth);
  }
  protoOf(TaggedResourceImpl).tagged = function (request) {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.apiKeyGet' call
    var params = request.toMap_1tsnvl_k$();
    return runBlocking(TaggedResourceImpl$tagged$slambda_0(this, '/tagged', params, null));
  };
  function UserResourceImpl$user$slambda($this, $path, $params, resultContinuation) {
    this.$this_1 = $this;
    this.$path_1 = $path;
    this.$params_1 = $params;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserResourceImpl$user$slambda).invoke_vh8x7s_k$ = function ($this$runBlocking, $completion) {
    var tmp = this.create_rcuf4x_k$($this$runBlocking, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(UserResourceImpl$user$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_vh8x7s_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserResourceImpl$user$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.tmp02__1 = this.$this_1;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.tmp02__1;
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(2);
            suspendResult = (new HttpRequest()).url_uv2bth_k$('https://api.tumblr.com/v2' + this.$path_1).header_32bnnx_k$('Authorization', this.$this_1.get_auth_woj2sx_k$().oAuthBearerToken_6vru3j_k$()).accept_nclv9q_k$(MediaType_getInstance().get_JSON_wo3nzl_k$()).queries_u14c3j_k$(this.$params_1).get_r3bkvm_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.response1__1 = suspendResult;
            var containsArg = this.response1__1.get_status_jnf6d7_k$();
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0 = Json_getInstance();
              var obj = this.response1__1.get_stringBody_otz1zw_k$();
              var this_0 = tmp0.get_json_woos35_k$();
              var this_1 = this_0.get_serializersModule_piitvg_k$();
              var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserResponse), arrayOf([]), false))]), false));
              tmp_0.tmp$ret$00__1 = new Response(this_0.decodeFromString_jwu9sq_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.response1__1.get_stringBody_otz1zw_k$());
              this.set_exceptionState_fex74n_k$(6);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_1(this.response1__1.get_status_jnf6d7_k$(), this.response1__1.get_stringBody_otz1zw_k$());
          case 4:
            return this.tmp$ret$00__1;
          case 5:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$_0(e) : tmp0_elvis_lhs;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(UserResourceImpl$user$slambda).create_rcuf4x_k$ = function ($this$runBlocking, completion) {
    var i = new UserResourceImpl$user$slambda(this.$this_1, this.$path_1, this.$params_1, completion);
    i.$this$runBlocking_1 = $this$runBlocking;
    return i;
  };
  protoOf(UserResourceImpl$user$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function UserResourceImpl$user$slambda_0($this, $path, $params, resultContinuation) {
    var i = new UserResourceImpl$user$slambda($this, $path, $params, resultContinuation);
    var l = function ($this$runBlocking, $completion) {
      return i.invoke_vh8x7s_k$($this$runBlocking, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UserResourceImpl$userDashboard$slambda($this, $path, $params, resultContinuation) {
    this.$this_1 = $this;
    this.$path_1 = $path;
    this.$params_1 = $params;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserResourceImpl$userDashboard$slambda).invoke_ig4otk_k$ = function ($this$runBlocking, $completion) {
    var tmp = this.create_rcuf4x_k$($this$runBlocking, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(UserResourceImpl$userDashboard$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_ig4otk_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserResourceImpl$userDashboard$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.tmp02__1 = this.$this_1;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.tmp02__1;
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(2);
            suspendResult = (new HttpRequest()).url_uv2bth_k$('https://api.tumblr.com/v2' + this.$path_1).header_32bnnx_k$('Authorization', this.$this_1.get_auth_woj2sx_k$().oAuthBearerToken_6vru3j_k$()).accept_nclv9q_k$(MediaType_getInstance().get_JSON_wo3nzl_k$()).queries_u14c3j_k$(this.$params_1).get_r3bkvm_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.response1__1 = suspendResult;
            var containsArg = this.response1__1.get_status_jnf6d7_k$();
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0 = Json_getInstance();
              var obj = this.response1__1.get_stringBody_otz1zw_k$();
              var this_0 = tmp0.get_json_woos35_k$();
              var this_1 = this_0.get_serializersModule_piitvg_k$();
              var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserDashboardResponse), arrayOf([]), false))]), false));
              tmp_0.tmp$ret$00__1 = new Response(this_0.decodeFromString_jwu9sq_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.response1__1.get_stringBody_otz1zw_k$());
              this.set_exceptionState_fex74n_k$(6);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_1(this.response1__1.get_status_jnf6d7_k$(), this.response1__1.get_stringBody_otz1zw_k$());
          case 4:
            return this.tmp$ret$00__1;
          case 5:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$_0(e) : tmp0_elvis_lhs;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(UserResourceImpl$userDashboard$slambda).create_rcuf4x_k$ = function ($this$runBlocking, completion) {
    var i = new UserResourceImpl$userDashboard$slambda(this.$this_1, this.$path_1, this.$params_1, completion);
    i.$this$runBlocking_1 = $this$runBlocking;
    return i;
  };
  protoOf(UserResourceImpl$userDashboard$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function UserResourceImpl$userDashboard$slambda_0($this, $path, $params, resultContinuation) {
    var i = new UserResourceImpl$userDashboard$slambda($this, $path, $params, resultContinuation);
    var l = function ($this$runBlocking, $completion) {
      return i.invoke_ig4otk_k$($this$runBlocking, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UserResourceImpl$userFollowing$slambda($this, $path, $params, resultContinuation) {
    this.$this_1 = $this;
    this.$path_1 = $path;
    this.$params_1 = $params;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserResourceImpl$userFollowing$slambda).invoke_8tp0bp_k$ = function ($this$runBlocking, $completion) {
    var tmp = this.create_rcuf4x_k$($this$runBlocking, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(UserResourceImpl$userFollowing$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_8tp0bp_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserResourceImpl$userFollowing$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.tmp02__1 = this.$this_1;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.tmp02__1;
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(2);
            suspendResult = (new HttpRequest()).url_uv2bth_k$('https://api.tumblr.com/v2' + this.$path_1).header_32bnnx_k$('Authorization', this.$this_1.get_auth_woj2sx_k$().oAuthBearerToken_6vru3j_k$()).accept_nclv9q_k$(MediaType_getInstance().get_JSON_wo3nzl_k$()).queries_u14c3j_k$(this.$params_1).get_r3bkvm_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.response1__1 = suspendResult;
            var containsArg = this.response1__1.get_status_jnf6d7_k$();
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0 = Json_getInstance();
              var obj = this.response1__1.get_stringBody_otz1zw_k$();
              var this_0 = tmp0.get_json_woos35_k$();
              var this_1 = this_0.get_serializersModule_piitvg_k$();
              var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserFollowingResponse), arrayOf([]), false))]), false));
              tmp_0.tmp$ret$00__1 = new Response(this_0.decodeFromString_jwu9sq_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.response1__1.get_stringBody_otz1zw_k$());
              this.set_exceptionState_fex74n_k$(6);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_1(this.response1__1.get_status_jnf6d7_k$(), this.response1__1.get_stringBody_otz1zw_k$());
          case 4:
            return this.tmp$ret$00__1;
          case 5:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$_0(e) : tmp0_elvis_lhs;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(UserResourceImpl$userFollowing$slambda).create_rcuf4x_k$ = function ($this$runBlocking, completion) {
    var i = new UserResourceImpl$userFollowing$slambda(this.$this_1, this.$path_1, this.$params_1, completion);
    i.$this$runBlocking_1 = $this$runBlocking;
    return i;
  };
  protoOf(UserResourceImpl$userFollowing$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function UserResourceImpl$userFollowing$slambda_0($this, $path, $params, resultContinuation) {
    var i = new UserResourceImpl$userFollowing$slambda($this, $path, $params, resultContinuation);
    var l = function ($this$runBlocking, $completion) {
      return i.invoke_8tp0bp_k$($this$runBlocking, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UserResourceImpl$userLikes$slambda($this, $path, $params, resultContinuation) {
    this.$this_1 = $this;
    this.$path_1 = $path;
    this.$params_1 = $params;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserResourceImpl$userLikes$slambda).invoke_vvu1ps_k$ = function ($this$runBlocking, $completion) {
    var tmp = this.create_rcuf4x_k$($this$runBlocking, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(UserResourceImpl$userLikes$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_vvu1ps_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserResourceImpl$userLikes$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.tmp02__1 = this.$this_1;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.tmp02__1;
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(2);
            suspendResult = (new HttpRequest()).url_uv2bth_k$('https://api.tumblr.com/v2' + this.$path_1).header_32bnnx_k$('Authorization', this.$this_1.get_auth_woj2sx_k$().oAuthBearerToken_6vru3j_k$()).accept_nclv9q_k$(MediaType_getInstance().get_JSON_wo3nzl_k$()).queries_u14c3j_k$(this.$params_1).get_r3bkvm_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.response1__1 = suspendResult;
            var containsArg = this.response1__1.get_status_jnf6d7_k$();
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0 = Json_getInstance();
              var obj = this.response1__1.get_stringBody_otz1zw_k$();
              var this_0 = tmp0.get_json_woos35_k$();
              var this_1 = this_0.get_serializersModule_piitvg_k$();
              var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserLikesResponse), arrayOf([]), false))]), false));
              tmp_0.tmp$ret$00__1 = new Response(this_0.decodeFromString_jwu9sq_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.response1__1.get_stringBody_otz1zw_k$());
              this.set_exceptionState_fex74n_k$(6);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_1(this.response1__1.get_status_jnf6d7_k$(), this.response1__1.get_stringBody_otz1zw_k$());
          case 4:
            return this.tmp$ret$00__1;
          case 5:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$_0(e) : tmp0_elvis_lhs;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(UserResourceImpl$userLikes$slambda).create_rcuf4x_k$ = function ($this$runBlocking, completion) {
    var i = new UserResourceImpl$userLikes$slambda(this.$this_1, this.$path_1, this.$params_1, completion);
    i.$this$runBlocking_1 = $this$runBlocking;
    return i;
  };
  protoOf(UserResourceImpl$userLikes$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function UserResourceImpl$userLikes$slambda_0($this, $path, $params, resultContinuation) {
    var i = new UserResourceImpl$userLikes$slambda($this, $path, $params, resultContinuation);
    var l = function ($this$runBlocking, $completion) {
      return i.invoke_vvu1ps_k$($this$runBlocking, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UserResourceImpl(auth) {
    AbstractResourceImpl.call(this, auth);
  }
  protoOf(UserResourceImpl).user = function () {
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var path = '/user/info';
    // Inline function 'kotlin.collections.mapOf' call
    var params = emptyMap();
    return runBlocking(UserResourceImpl$user$slambda_0(this, path, params, null));
  };
  protoOf(UserResourceImpl).userDashboard = function (request) {
    var tmp2 = '/user/dashboard';
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.toMap_1tsnvl_k$();
    return runBlocking(UserResourceImpl$userDashboard$slambda_0(this, tmp2, params, null));
  };
  protoOf(UserResourceImpl).userFollowing = function (request) {
    var tmp2 = '/user/following';
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.toMap_1tsnvl_k$();
    return runBlocking(UserResourceImpl$userFollowing$slambda_0(this, tmp2, params, null));
  };
  protoOf(UserResourceImpl).userLikes = function (request) {
    var tmp2 = '/user/likes';
    // Inline function 'work.socialhub.ktumblr.internal.AbstractResourceImpl.oauthGet' call
    var params = request.toMap_1tsnvl_k$();
    return runBlocking(UserResourceImpl$userLikes$slambda_0(this, tmp2, params, null));
  };
  protoOf(UserResourceImpl).like = function (request) {
    return this.oauthPostUnit$default_p8ojst_k$('/user/like', request.toMap_1tsnvl_k$());
  };
  protoOf(UserResourceImpl).unlike = function (request) {
    return this.oauthPostUnit$default_p8ojst_k$('/user/unlike', request.toMap_1tsnvl_k$());
  };
  protoOf(UserResourceImpl).follow = function (request) {
    return this.oauthPostUnit$default_p8ojst_k$('/user/follow', request.toMap_1tsnvl_k$());
  };
  protoOf(UserResourceImpl).unfollow = function (request) {
    return this.oauthPostUnit$default_p8ojst_k$('/user/unfollow', request.toMap_1tsnvl_k$());
  };
  function Json$json$lambda($this$Json) {
    $this$Json.set_explicitNulls_mtj2ai_k$(false);
    $this$Json.set_encodeDefaults_c5evsg_k$(true);
    $this$Json.set_ignoreUnknownKeys_pzvtne_k$(true);
    // Inline function 'kotlinx.serialization.modules.SerializersModule' call
    var builder = new SerializersModuleBuilder();
    builder.contextual_s0h8js_k$(PrimitiveClasses_getInstance().get_anyClass_x0jl4l_k$(), AnySerializer_getInstance());
    builder.contextual_s0h8js_k$(getKClass(Post), PostSerializer_getInstance());
    var tmp$ret$1 = builder.build_boe8ts_k$();
    $this$Json.set_serializersModule_6xge6s_k$(tmp$ret$1);
    return Unit_getInstance();
  }
  function Json_0() {
    Json_instance = this;
    var tmp = this;
    tmp.json_1 = Json(VOID, Json$json$lambda);
  }
  protoOf(Json_0).get_json_woos35_k$ = function () {
    return this.json_1;
  };
  var Json_instance;
  function Json_getInstance() {
    if (Json_instance == null)
      new Json_0();
    return Json_instance;
  }
  function MediaType() {
    MediaType_instance = this;
    this.JSON_1 = Application_getInstance().get_Json_wo4ci9_k$().toString();
  }
  protoOf(MediaType).get_JSON_wo3nzl_k$ = function () {
    return this.JSON_1;
  };
  var MediaType_instance;
  function MediaType_getInstance() {
    if (MediaType_instance == null)
      new MediaType();
    return MediaType_instance;
  }
  function PostSerializer() {
    PostSerializer_instance = this;
    JsonContentPolymorphicSerializer.call(this, getKClass(Post));
  }
  protoOf(PostSerializer).selectDeserializer_70cedr_k$ = function (element) {
    var type = get_jsonObject(element).get_6bo4tg_k$('type');
    var tmp;
    var tmp_0;
    if (type instanceof JsonPrimitive) {
      tmp_0 = type.get_isString_zep7bw_k$();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      switch (type.get_content_h02jrk_k$()) {
        case 'text':
          tmp = Companion_getInstance_25().serializer_9w0wvi_k$();
          break;
        case 'photo':
          tmp = Companion_getInstance_23().serializer_9w0wvi_k$();
          break;
        case 'quote':
          tmp = Companion_getInstance_24().serializer_9w0wvi_k$();
          break;
        case 'link':
          tmp = Companion_getInstance_22().serializer_9w0wvi_k$();
          break;
        case 'video':
          tmp = Companion_getInstance_26().serializer_9w0wvi_k$();
          break;
        case 'answer':
          tmp = Companion_getInstance_19().serializer_9w0wvi_k$();
          break;
        default:
          tmp = Companion_getInstance_18().serializer_9w0wvi_k$();
          break;
      }
    } else {
      tmp = Companion_getInstance_18().serializer_9w0wvi_k$();
    }
    return tmp;
  };
  var PostSerializer_instance;
  function PostSerializer_getInstance() {
    if (PostSerializer_instance == null)
      new PostSerializer();
    return PostSerializer_instance;
  }
  //region block: post-declaration
  protoOf(AuthAuthorizeUrlRequest).addParam_z3s3jk_k$ = addParam;
  protoOf(AuthOAuth2TokenRefreshRequest).addParam_z3s3jk_k$ = addParam;
  protoOf(AuthOAuth2TokenRequest).addParam_z3s3jk_k$ = addParam;
  protoOf(BlogDraftsRequest).addParam_z3s3jk_k$ = addParam;
  protoOf(BlogFollowersRequest).addParam_z3s3jk_k$ = addParam;
  protoOf(BlogFollowingRequest).addParam_z3s3jk_k$ = addParam;
  protoOf(BlogLikesRequest).addParam_z3s3jk_k$ = addParam;
  protoOf(BlogPostsRequest).addParam_z3s3jk_k$ = addParam;
  protoOf(BlogQueueRequest).addParam_z3s3jk_k$ = addParam;
  protoOf(BlogSubmissionsRequest).addParam_z3s3jk_k$ = addParam;
  protoOf(BlogAudioPostRequest).addParam_z3s3jk_k$ = addParam;
  protoOf(BlogChatPostRequest).addParam_z3s3jk_k$ = addParam;
  protoOf(BlogDeleteRequest).addParam_z3s3jk_k$ = addParam;
  protoOf(BlogLinkPostRequest).addParam_z3s3jk_k$ = addParam;
  protoOf(BlogPhotoPostRequest).addParam_z3s3jk_k$ = addParam;
  protoOf(BlogQuotePostRequest).addParam_z3s3jk_k$ = addParam;
  protoOf(BlogReblogRequest).addParam_z3s3jk_k$ = addParam;
  protoOf(BlogTextPostRequest).addParam_z3s3jk_k$ = addParam;
  protoOf(BlogVideoPostRequest).addParam_z3s3jk_k$ = addParam;
  protoOf(TaggedRequest).addParam_z3s3jk_k$ = addParam;
  protoOf(UserDashboardRequest).addParam_z3s3jk_k$ = addParam;
  protoOf(UserFollowRequest).addParam_z3s3jk_k$ = addParam;
  protoOf(UserFollowingRequest).addParam_z3s3jk_k$ = addParam;
  protoOf(UserLikeRequest).addParam_z3s3jk_k$ = addParam;
  protoOf(UserLikesRequest).addParam_z3s3jk_k$ = addParam;
  protoOf(UserUnfollowRequest).addParam_z3s3jk_k$ = addParam;
  protoOf(UserUnlikeRequest).addParam_z3s3jk_k$ = addParam;
  protoOf($serializer_0).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_1).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_2).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_3).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_4).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_5).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_6).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_7).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_8).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_9).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_10).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  defineProp(protoOf(PhotoType), 'name', protoOf(PhotoType).get_name_woqyms_k$);
  defineProp(protoOf(PhotoType), 'ordinal', protoOf(PhotoType).get_ordinal_ip24qg_k$);
  defineProp(protoOf(PostType), 'name', protoOf(PostType).get_name_woqyms_k$);
  defineProp(protoOf(PostType), 'ordinal', protoOf(PostType).get_ordinal_ip24qg_k$);
  protoOf($serializer_11).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_12).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_13).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_14).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_15).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_16).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  defineProp(protoOf(Post), 'asLegacyTextPost', protoOf(Post).get_asLegacyTextPost_cezf1t_k$);
  defineProp(protoOf(Post), 'asLegacyPhotoPost', protoOf(Post).get_asLegacyPhotoPost_x42bxq_k$);
  defineProp(protoOf(Post), 'asLegacyQuotePost', protoOf(Post).get_asLegacyQuotePost_mm094o_k$);
  defineProp(protoOf(Post), 'asLegacyLinkPost', protoOf(Post).get_asLegacyLinkPost_m9lhvm_k$);
  defineProp(protoOf(Post), 'asLegacyVideoPost', protoOf(Post).get_asLegacyVideoPost_1ukk7d_k$);
  defineProp(protoOf(Post), 'asLegacyAnswerPost', protoOf(Post).get_asLegacyAnswerPost_egzita_k$);
  defineProp(protoOf(Post), 'blogName', function () {
    return this.get_blogName_sa6pee_k$();
  }, function (value) {
    this.set_blogName_4hbv7x_k$(value);
  });
  defineProp(protoOf(Post), 'idString', function () {
    return this.get_idString_sjsr85_k$();
  }, function (value) {
    this.set_idString_uk2vzm_k$(value);
  });
  defineProp(protoOf(Post), 'genesisPostId', function () {
    return this.get_genesisPostId_95cwau_k$();
  }, function (value) {
    this.set_genesisPostId_z3sus1_k$(value);
  });
  defineProp(protoOf(Post), 'postUrl', function () {
    return this.get_postUrl_57da2i_k$();
  }, function (value) {
    this.set_postUrl_etq64l_k$(value);
  });
  defineProp(protoOf(Post), 'parentPostUrl', function () {
    return this.get_parentPostUrl_e3yik_k$();
  }, function (value) {
    this.set_parentPostUrl_9ua7l_k$(value);
  });
  defineProp(protoOf(Post), 'type', function () {
    return this.get_type_wovaf7_k$();
  }, function (value) {
    this.set_type_4507og_k$(value);
  });
  defineProp(protoOf(Post), 'timestamp', function () {
    return this.get_timestamp_9fccx9_k$();
  }, function (value) {
    this.set_timestamp_cgo46a_k$(value);
  });
  defineProp(protoOf(Post), 'date', function () {
    return this.get_date_wokkxj_k$();
  }, function (value) {
    this.set_date_y25dgs_k$(value);
  });
  defineProp(protoOf(Post), 'format', function () {
    return this.get_format_dfdtds_k$();
  }, function (value) {
    this.set_format_yd74t9_k$(value);
  });
  defineProp(protoOf(Post), 'reblogKey', function () {
    return this.get_reblogKey_8swysh_k$();
  }, function (value) {
    this.set_reblogKey_q2gl9m_k$(value);
  });
  defineProp(protoOf(Post), 'tags', function () {
    return this.get_tags_wousf6_k$();
  }, function (value) {
    this.set_tags_7racvz_k$(value);
  });
  defineProp(protoOf(Post), 'isBookmarklet', function () {
    return this.get_isBookmarklet_xsfl2q_k$();
  }, function (value) {
    this.set_isBookmarklet_e6r6jm_k$(value);
  });
  defineProp(protoOf(Post), 'isMobile', function () {
    return this.get_isMobile_wp3xh1_k$();
  }, function (value) {
    this.set_isMobile_ymy749_k$(value);
  });
  defineProp(protoOf(Post), 'sourceUrl', function () {
    return this.get_sourceUrl_jko7yt_k$();
  }, function (value) {
    this.set_sourceUrl_nz40kg_k$(value);
  });
  defineProp(protoOf(Post), 'sourceTitle', function () {
    return this.get_sourceTitle_cbkkgk_k$();
  }, function (value) {
    this.set_sourceTitle_6ljuq1_k$(value);
  });
  defineProp(protoOf(Post), 'isLiked', function () {
    return this.get_isLiked_zemrwa_k$();
  }, function (value) {
    this.set_isLiked_vjtt2e_k$(value);
  });
  defineProp(protoOf(Post), 'state', function () {
    return this.get_state_iypx7s_k$();
  }, function (value) {
    this.set_state_836lgd_k$(value);
  });
  defineProp(protoOf(Post), 'title', function () {
    return this.get_title_iz32un_k$();
  }, function (value) {
    this.set_title_ceyuu4_k$(value);
  });
  defineProp(protoOf(Post), 'body', function () {
    return this.get_body_wojkyz_k$();
  }, function (value) {
    this.set_body_d8bq7s_k$(value);
  });
  defineProp(protoOf(Post), 'noteCount', function () {
    return this.get_noteCount_xhpyss_k$();
  }, function (value) {
    this.set_noteCount_gc35kr_k$(value);
  });
  defineProp(protoOf(Post), 'summary', function () {
    return this.get_summary_tgfqkj_k$();
  }, function (value) {
    this.set_summary_elnle6_k$(value);
  });
  defineProp(protoOf(Post), 'slug', function () {
    return this.get_slug_woudx0_k$();
  }, function (value) {
    this.set_slug_iclwbz_k$(value);
  });
  defineProp(protoOf(Post), 'rebloggedFromId', function () {
    return this.get_rebloggedFromId_8qykib_k$();
  }, function (value) {
    this.set_rebloggedFromId_7fi68u_k$(value);
  });
  defineProp(protoOf(Post), 'rebloggedFromUrl', function () {
    return this.get_rebloggedFromUrl_cwotgd_k$();
  }, function (value) {
    this.set_rebloggedFromUrl_5gzcjq_k$(value);
  });
  defineProp(protoOf(Post), 'rebloggedFromName', function () {
    return this.get_rebloggedFromName_q1fs6b_k$();
  }, function (value) {
    this.set_rebloggedFromName_70jpu_k$(value);
  });
  defineProp(protoOf(Post), 'rebloggedFromTitle', function () {
    return this.get_rebloggedFromTitle_pswmt6_k$();
  }, function (value) {
    this.set_rebloggedFromTitle_lpffbx_k$(value);
  });
  defineProp(protoOf(Post), 'rebloggedFromUuid', function () {
    return this.get_rebloggedFromUuid_q1awj7_k$();
  }, function (value) {
    this.set_rebloggedFromUuid_y1lhby_k$(value);
  });
  defineProp(protoOf(Post), 'rebloggedFromCanMessage', function () {
    return this.get_rebloggedFromCanMessage_ik49xz_k$();
  }, function (value) {
    this.set_rebloggedFromCanMessage_xd73vv_k$(value);
  });
  defineProp(protoOf(Post), 'rebloggedFromFollowing', function () {
    return this.get_rebloggedFromFollowing_60tgsh_k$();
  }, function (value) {
    this.set_rebloggedFromFollowing_134hoz_k$(value);
  });
  defineProp(protoOf(Post), 'rebloggedRootId', function () {
    return this.get_rebloggedRootId_342cd7_k$();
  }, function (value) {
    this.set_rebloggedRootId_dkbyli_k$(value);
  });
  defineProp(protoOf(Post), 'rebloggedRootUrl', function () {
    return this.get_rebloggedRootUrl_pgwc2j_k$();
  }, function (value) {
    this.set_rebloggedRootUrl_hgpegy_k$(value);
  });
  defineProp(protoOf(Post), 'rebloggedRootName', function () {
    return this.get_rebloggedRootName_87qluz_k$();
  }, function (value) {
    this.set_rebloggedRootName_w79je_k$(value);
  });
  defineProp(protoOf(Post), 'rebloggedRootTitle', function () {
    return this.get_rebloggedRootTitle_tjzf4e_k$();
  }, function (value) {
    this.set_rebloggedRootTitle_n6vp_k$(value);
  });
  defineProp(protoOf(Post), 'rebloggedRootUuid', function () {
    return this.get_rebloggedRootUuid_87lq7v_k$();
  }, function (value) {
    this.set_rebloggedRootUuid_xcerie_k$(value);
  });
  defineProp(protoOf(Post), 'rebloggedRootCanMessage', function () {
    return this.get_rebloggedRootCanMessage_s8kylb_k$();
  }, function (value) {
    this.set_rebloggedRootCanMessage_92f4mr_k$(value);
  });
  defineProp(protoOf(Post), 'rebloggedRootFollowing', function () {
    return this.get_rebloggedRootFollowing_mdgzg9_k$();
  }, function (value) {
    this.set_rebloggedRootFollowing_9l3e05_k$(value);
  });
  defineProp(protoOf(Post), 'notes', function () {
    return this.get_notes_ivw520_k$();
  }, function (value) {
    this.set_notes_59gpwq_k$(value);
  });
  defineProp(protoOf(Post), 'blog', function () {
    return this.get_blog_wojizv_k$();
  }, function (value) {
    this.set_blog_o3ffjm_k$(value);
  });
  defineProp(protoOf(Post), 'reblog', function () {
    return this.get_reblog_iy53z2_k$();
  }, function (value) {
    this.set_reblog_scs22y_k$(value);
  });
  defineProp(protoOf(Post), 'trail', function () {
    return this.get_trail_iz8fkt_k$();
  }, function (value) {
    this.set_trail_t0ip0s_k$(value);
  });
  protoOf($serializer_17).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_18).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_19).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_20).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_21).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_22).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_23).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_24).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_25).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_26).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_27).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_28).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_29).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_30).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_31).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_32).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_33).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    defineProp($work$socialhub$ktumblr, 'TumblrFactory', TumblrFactory_getInstance, VOID, true);
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    $work$socialhub$ktumblr$api$request.FileRequest = FileRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$auth = $work$socialhub$ktumblr$api$request.auth || ($work$socialhub$ktumblr$api$request.auth = {});
    $work$socialhub$ktumblr$api$request$auth.AuthAuthorizeUrlRequest = AuthAuthorizeUrlRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$auth = $work$socialhub$ktumblr$api$request.auth || ($work$socialhub$ktumblr$api$request.auth = {});
    $work$socialhub$ktumblr$api$request$auth.AuthOAuth2TokenRefreshRequest = AuthOAuth2TokenRefreshRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$auth = $work$socialhub$ktumblr$api$request.auth || ($work$socialhub$ktumblr$api$request.auth = {});
    $work$socialhub$ktumblr$api$request$auth.AuthOAuth2TokenRequest = AuthOAuth2TokenRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$blog = $work$socialhub$ktumblr$api$request.blog || ($work$socialhub$ktumblr$api$request.blog = {});
    $work$socialhub$ktumblr$api$request$blog.BlogAvatarRequest = BlogAvatarRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$blog = $work$socialhub$ktumblr$api$request.blog || ($work$socialhub$ktumblr$api$request.blog = {});
    $work$socialhub$ktumblr$api$request$blog.BlogDraftsRequest = BlogDraftsRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$blog = $work$socialhub$ktumblr$api$request.blog || ($work$socialhub$ktumblr$api$request.blog = {});
    $work$socialhub$ktumblr$api$request$blog.BlogFollowersRequest = BlogFollowersRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$blog = $work$socialhub$ktumblr$api$request.blog || ($work$socialhub$ktumblr$api$request.blog = {});
    $work$socialhub$ktumblr$api$request$blog.BlogFollowingRequest = BlogFollowingRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$blog = $work$socialhub$ktumblr$api$request.blog || ($work$socialhub$ktumblr$api$request.blog = {});
    $work$socialhub$ktumblr$api$request$blog.BlogInfoRequest = BlogInfoRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$blog = $work$socialhub$ktumblr$api$request.blog || ($work$socialhub$ktumblr$api$request.blog = {});
    $work$socialhub$ktumblr$api$request$blog.BlogLikesRequest = BlogLikesRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$blog = $work$socialhub$ktumblr$api$request.blog || ($work$socialhub$ktumblr$api$request.blog = {});
    $work$socialhub$ktumblr$api$request$blog.BlogPostsRequest = BlogPostsRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$blog = $work$socialhub$ktumblr$api$request.blog || ($work$socialhub$ktumblr$api$request.blog = {});
    $work$socialhub$ktumblr$api$request$blog.BlogQueueRequest = BlogQueueRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$blog = $work$socialhub$ktumblr$api$request.blog || ($work$socialhub$ktumblr$api$request.blog = {});
    $work$socialhub$ktumblr$api$request$blog.BlogSubmissionsRequest = BlogSubmissionsRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$blog = $work$socialhub$ktumblr$api$request.blog || ($work$socialhub$ktumblr$api$request.blog = {});
    var $work$socialhub$ktumblr$api$request$blog$post = $work$socialhub$ktumblr$api$request$blog.post || ($work$socialhub$ktumblr$api$request$blog.post = {});
    $work$socialhub$ktumblr$api$request$blog$post.BlogAudioPostRequest = BlogAudioPostRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$blog = $work$socialhub$ktumblr$api$request.blog || ($work$socialhub$ktumblr$api$request.blog = {});
    var $work$socialhub$ktumblr$api$request$blog$post = $work$socialhub$ktumblr$api$request$blog.post || ($work$socialhub$ktumblr$api$request$blog.post = {});
    $work$socialhub$ktumblr$api$request$blog$post.BlogChatPostRequest = BlogChatPostRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$blog = $work$socialhub$ktumblr$api$request.blog || ($work$socialhub$ktumblr$api$request.blog = {});
    var $work$socialhub$ktumblr$api$request$blog$post = $work$socialhub$ktumblr$api$request$blog.post || ($work$socialhub$ktumblr$api$request$blog.post = {});
    $work$socialhub$ktumblr$api$request$blog$post.BlogDeleteRequest = BlogDeleteRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$blog = $work$socialhub$ktumblr$api$request.blog || ($work$socialhub$ktumblr$api$request.blog = {});
    var $work$socialhub$ktumblr$api$request$blog$post = $work$socialhub$ktumblr$api$request$blog.post || ($work$socialhub$ktumblr$api$request$blog.post = {});
    $work$socialhub$ktumblr$api$request$blog$post.BlogLinkPostRequest = BlogLinkPostRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$blog = $work$socialhub$ktumblr$api$request.blog || ($work$socialhub$ktumblr$api$request.blog = {});
    var $work$socialhub$ktumblr$api$request$blog$post = $work$socialhub$ktumblr$api$request$blog.post || ($work$socialhub$ktumblr$api$request$blog.post = {});
    $work$socialhub$ktumblr$api$request$blog$post.BlogPhotoPostRequest = BlogPhotoPostRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$blog = $work$socialhub$ktumblr$api$request.blog || ($work$socialhub$ktumblr$api$request.blog = {});
    var $work$socialhub$ktumblr$api$request$blog$post = $work$socialhub$ktumblr$api$request$blog.post || ($work$socialhub$ktumblr$api$request$blog.post = {});
    $work$socialhub$ktumblr$api$request$blog$post.BlogPostRequest = BlogPostRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$blog = $work$socialhub$ktumblr$api$request.blog || ($work$socialhub$ktumblr$api$request.blog = {});
    var $work$socialhub$ktumblr$api$request$blog$post = $work$socialhub$ktumblr$api$request$blog.post || ($work$socialhub$ktumblr$api$request$blog.post = {});
    $work$socialhub$ktumblr$api$request$blog$post.BlogQuotePostRequest = BlogQuotePostRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$blog = $work$socialhub$ktumblr$api$request.blog || ($work$socialhub$ktumblr$api$request.blog = {});
    var $work$socialhub$ktumblr$api$request$blog$post = $work$socialhub$ktumblr$api$request$blog.post || ($work$socialhub$ktumblr$api$request$blog.post = {});
    $work$socialhub$ktumblr$api$request$blog$post.BlogReblogRequest = BlogReblogRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$blog = $work$socialhub$ktumblr$api$request.blog || ($work$socialhub$ktumblr$api$request.blog = {});
    var $work$socialhub$ktumblr$api$request$blog$post = $work$socialhub$ktumblr$api$request$blog.post || ($work$socialhub$ktumblr$api$request$blog.post = {});
    $work$socialhub$ktumblr$api$request$blog$post.BlogTextPostRequest = BlogTextPostRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$blog = $work$socialhub$ktumblr$api$request.blog || ($work$socialhub$ktumblr$api$request.blog = {});
    var $work$socialhub$ktumblr$api$request$blog$post = $work$socialhub$ktumblr$api$request$blog.post || ($work$socialhub$ktumblr$api$request$blog.post = {});
    $work$socialhub$ktumblr$api$request$blog$post.BlogVideoPostRequest = BlogVideoPostRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$tagged = $work$socialhub$ktumblr$api$request.tagged || ($work$socialhub$ktumblr$api$request.tagged = {});
    $work$socialhub$ktumblr$api$request$tagged.TaggedRequest = TaggedRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$user = $work$socialhub$ktumblr$api$request.user || ($work$socialhub$ktumblr$api$request.user = {});
    $work$socialhub$ktumblr$api$request$user.UserDashboardRequest = UserDashboardRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$user = $work$socialhub$ktumblr$api$request.user || ($work$socialhub$ktumblr$api$request.user = {});
    $work$socialhub$ktumblr$api$request$user.UserFollowRequest = UserFollowRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$user = $work$socialhub$ktumblr$api$request.user || ($work$socialhub$ktumblr$api$request.user = {});
    $work$socialhub$ktumblr$api$request$user.UserFollowingRequest = UserFollowingRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$user = $work$socialhub$ktumblr$api$request.user || ($work$socialhub$ktumblr$api$request.user = {});
    $work$socialhub$ktumblr$api$request$user.UserLikeRequest = UserLikeRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$user = $work$socialhub$ktumblr$api$request.user || ($work$socialhub$ktumblr$api$request.user = {});
    $work$socialhub$ktumblr$api$request$user.UserLikesRequest = UserLikesRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$user = $work$socialhub$ktumblr$api$request.user || ($work$socialhub$ktumblr$api$request.user = {});
    $work$socialhub$ktumblr$api$request$user.UserUnfollowRequest = UserUnfollowRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$request = $work$socialhub$ktumblr$api.request || ($work$socialhub$ktumblr$api.request = {});
    var $work$socialhub$ktumblr$api$request$user = $work$socialhub$ktumblr$api$request.user || ($work$socialhub$ktumblr$api$request.user = {});
    $work$socialhub$ktumblr$api$request$user.UserUnlikeRequest = UserUnlikeRequest;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$response = $work$socialhub$ktumblr$api.response || ($work$socialhub$ktumblr$api.response = {});
    $work$socialhub$ktumblr$api$response.Body = Body;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$response = $work$socialhub$ktumblr$api.response || ($work$socialhub$ktumblr$api.response = {});
    $work$socialhub$ktumblr$api$response.Meta = Meta;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$response = $work$socialhub$ktumblr$api.response || ($work$socialhub$ktumblr$api.response = {});
    $work$socialhub$ktumblr$api$response.Response = Response;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$response = $work$socialhub$ktumblr$api.response || ($work$socialhub$ktumblr$api.response = {});
    $work$socialhub$ktumblr$api$response.ResponseUnit = ResponseUnit;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$response = $work$socialhub$ktumblr$api.response || ($work$socialhub$ktumblr$api.response = {});
    var $work$socialhub$ktumblr$api$response$auth = $work$socialhub$ktumblr$api$response.auth || ($work$socialhub$ktumblr$api$response.auth = {});
    $work$socialhub$ktumblr$api$response$auth.AuthOAuth2TokenResponse = AuthOAuth2TokenResponse;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$response = $work$socialhub$ktumblr$api.response || ($work$socialhub$ktumblr$api.response = {});
    var $work$socialhub$ktumblr$api$response$blog = $work$socialhub$ktumblr$api$response.blog || ($work$socialhub$ktumblr$api$response.blog = {});
    $work$socialhub$ktumblr$api$response$blog.BlogFollowersResponse = BlogFollowersResponse;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$response = $work$socialhub$ktumblr$api.response || ($work$socialhub$ktumblr$api.response = {});
    var $work$socialhub$ktumblr$api$response$blog = $work$socialhub$ktumblr$api$response.blog || ($work$socialhub$ktumblr$api$response.blog = {});
    $work$socialhub$ktumblr$api$response$blog.BlogFollowingResponse = BlogFollowingResponse;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$response = $work$socialhub$ktumblr$api.response || ($work$socialhub$ktumblr$api.response = {});
    var $work$socialhub$ktumblr$api$response$blog = $work$socialhub$ktumblr$api$response.blog || ($work$socialhub$ktumblr$api$response.blog = {});
    $work$socialhub$ktumblr$api$response$blog.BlogInfoResponse = BlogInfoResponse;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$response = $work$socialhub$ktumblr$api.response || ($work$socialhub$ktumblr$api.response = {});
    var $work$socialhub$ktumblr$api$response$blog = $work$socialhub$ktumblr$api$response.blog || ($work$socialhub$ktumblr$api$response.blog = {});
    $work$socialhub$ktumblr$api$response$blog.BlogLikesResponse = BlogLikesResponse;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$response = $work$socialhub$ktumblr$api.response || ($work$socialhub$ktumblr$api.response = {});
    var $work$socialhub$ktumblr$api$response$blog = $work$socialhub$ktumblr$api$response.blog || ($work$socialhub$ktumblr$api$response.blog = {});
    $work$socialhub$ktumblr$api$response$blog.BlogPostsResponse = BlogPostsResponse;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$response = $work$socialhub$ktumblr$api.response || ($work$socialhub$ktumblr$api.response = {});
    var $work$socialhub$ktumblr$api$response$user = $work$socialhub$ktumblr$api$response.user || ($work$socialhub$ktumblr$api$response.user = {});
    $work$socialhub$ktumblr$api$response$user.UserDashboardResponse = UserDashboardResponse;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$response = $work$socialhub$ktumblr$api.response || ($work$socialhub$ktumblr$api.response = {});
    var $work$socialhub$ktumblr$api$response$user = $work$socialhub$ktumblr$api$response.user || ($work$socialhub$ktumblr$api$response.user = {});
    $work$socialhub$ktumblr$api$response$user.UserFollowingResponse = UserFollowingResponse;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$response = $work$socialhub$ktumblr$api.response || ($work$socialhub$ktumblr$api.response = {});
    var $work$socialhub$ktumblr$api$response$user = $work$socialhub$ktumblr$api$response.user || ($work$socialhub$ktumblr$api$response.user = {});
    $work$socialhub$ktumblr$api$response$user.UserLikesResponse = UserLikesResponse;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$api = $work$socialhub$ktumblr.api || ($work$socialhub$ktumblr.api = {});
    var $work$socialhub$ktumblr$api$response = $work$socialhub$ktumblr$api.response || ($work$socialhub$ktumblr$api.response = {});
    var $work$socialhub$ktumblr$api$response$user = $work$socialhub$ktumblr$api$response.user || ($work$socialhub$ktumblr$api$response.user = {});
    $work$socialhub$ktumblr$api$response$user.UserResponse = UserResponse;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$define = $work$socialhub$ktumblr.define || ($work$socialhub$ktumblr.define = {});
    $work$socialhub$ktumblr$define.PhotoType = PhotoType;
    $work$socialhub$ktumblr$define.PhotoType.values = values;
    $work$socialhub$ktumblr$define.PhotoType.valueOf = valueOf;
    defineProp($work$socialhub$ktumblr$define.PhotoType, 'SOURCE', PhotoType_SOURCE_getInstance, VOID, true);
    defineProp($work$socialhub$ktumblr$define.PhotoType, 'FILE', PhotoType_FILE_getInstance, VOID, true);
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$define = $work$socialhub$ktumblr.define || ($work$socialhub$ktumblr.define = {});
    $work$socialhub$ktumblr$define.PostType = PostType;
    $work$socialhub$ktumblr$define.PostType.values = values_0;
    $work$socialhub$ktumblr$define.PostType.valueOf = valueOf_0;
    defineProp($work$socialhub$ktumblr$define.PostType, 'TEXT', PostType_TEXT_getInstance, VOID, true);
    defineProp($work$socialhub$ktumblr$define.PostType, 'PHOTO', PostType_PHOTO_getInstance, VOID, true);
    defineProp($work$socialhub$ktumblr$define.PostType, 'QUOTE', PostType_QUOTE_getInstance, VOID, true);
    defineProp($work$socialhub$ktumblr$define.PostType, 'LINK', PostType_LINK_getInstance, VOID, true);
    defineProp($work$socialhub$ktumblr$define.PostType, 'CHAT', PostType_CHAT_getInstance, VOID, true);
    defineProp($work$socialhub$ktumblr$define.PostType, 'AUDIO', PostType_AUDIO_getInstance, VOID, true);
    defineProp($work$socialhub$ktumblr$define.PostType, 'VIDEO', PostType_VIDEO_getInstance, VOID, true);
    defineProp($work$socialhub$ktumblr$define.PostType, 'ANSWER', PostType_ANSWER_getInstance, VOID, true);
    defineProp($work$socialhub$ktumblr$define.PostType, 'POSTCARD', PostType_POSTCARD_getInstance, VOID, true);
    defineProp($work$socialhub$ktumblr$define.PostType, 'UNKNOWN', PostType_UNKNOWN_getInstance, VOID, true);
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$entity = $work$socialhub$ktumblr.entity || ($work$socialhub$ktumblr.entity = {});
    $work$socialhub$ktumblr$entity.Note = Note;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$entity = $work$socialhub$ktumblr.entity || ($work$socialhub$ktumblr.entity = {});
    $work$socialhub$ktumblr$entity.NoteAvatar = NoteAvatar;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$entity = $work$socialhub$ktumblr.entity || ($work$socialhub$ktumblr.entity = {});
    var $work$socialhub$ktumblr$entity$blog = $work$socialhub$ktumblr$entity.blog || ($work$socialhub$ktumblr$entity.blog = {});
    $work$socialhub$ktumblr$entity$blog.Blog = Blog;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$entity = $work$socialhub$ktumblr.entity || ($work$socialhub$ktumblr.entity = {});
    var $work$socialhub$ktumblr$entity$blog = $work$socialhub$ktumblr$entity.blog || ($work$socialhub$ktumblr$entity.blog = {});
    $work$socialhub$ktumblr$entity$blog.BlogAvatar = BlogAvatar;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$entity = $work$socialhub$ktumblr.entity || ($work$socialhub$ktumblr.entity = {});
    var $work$socialhub$ktumblr$entity$blog = $work$socialhub$ktumblr$entity.blog || ($work$socialhub$ktumblr$entity.blog = {});
    $work$socialhub$ktumblr$entity$blog.BlogTheme = BlogTheme;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$entity = $work$socialhub$ktumblr.entity || ($work$socialhub$ktumblr.entity = {});
    var $work$socialhub$ktumblr$entity$blog = $work$socialhub$ktumblr$entity.blog || ($work$socialhub$ktumblr$entity.blog = {});
    $work$socialhub$ktumblr$entity$blog.Reblog = Reblog;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$entity = $work$socialhub$ktumblr.entity || ($work$socialhub$ktumblr.entity = {});
    var $work$socialhub$ktumblr$entity$post = $work$socialhub$ktumblr$entity.post || ($work$socialhub$ktumblr$entity.post = {});
    $work$socialhub$ktumblr$entity$post.Post = Post;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$entity = $work$socialhub$ktumblr.entity || ($work$socialhub$ktumblr.entity = {});
    var $work$socialhub$ktumblr$entity$post = $work$socialhub$ktumblr$entity.post || ($work$socialhub$ktumblr$entity.post = {});
    var $work$socialhub$ktumblr$entity$post$legacy = $work$socialhub$ktumblr$entity$post.legacy || ($work$socialhub$ktumblr$entity$post.legacy = {});
    $work$socialhub$ktumblr$entity$post$legacy.LegacyAnswerPost = LegacyAnswerPost;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$entity = $work$socialhub$ktumblr.entity || ($work$socialhub$ktumblr.entity = {});
    var $work$socialhub$ktumblr$entity$post = $work$socialhub$ktumblr$entity.post || ($work$socialhub$ktumblr$entity.post = {});
    var $work$socialhub$ktumblr$entity$post$legacy = $work$socialhub$ktumblr$entity$post.legacy || ($work$socialhub$ktumblr$entity$post.legacy = {});
    $work$socialhub$ktumblr$entity$post$legacy.LegacyAudioPost = LegacyAudioPost;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$entity = $work$socialhub$ktumblr.entity || ($work$socialhub$ktumblr.entity = {});
    var $work$socialhub$ktumblr$entity$post = $work$socialhub$ktumblr$entity.post || ($work$socialhub$ktumblr$entity.post = {});
    var $work$socialhub$ktumblr$entity$post$legacy = $work$socialhub$ktumblr$entity$post.legacy || ($work$socialhub$ktumblr$entity$post.legacy = {});
    $work$socialhub$ktumblr$entity$post$legacy.LegacyChatPost = LegacyChatPost;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$entity = $work$socialhub$ktumblr.entity || ($work$socialhub$ktumblr.entity = {});
    var $work$socialhub$ktumblr$entity$post = $work$socialhub$ktumblr$entity.post || ($work$socialhub$ktumblr$entity.post = {});
    var $work$socialhub$ktumblr$entity$post$legacy = $work$socialhub$ktumblr$entity$post.legacy || ($work$socialhub$ktumblr$entity$post.legacy = {});
    $work$socialhub$ktumblr$entity$post$legacy.LegacyLinkPost = LegacyLinkPost;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$entity = $work$socialhub$ktumblr.entity || ($work$socialhub$ktumblr.entity = {});
    var $work$socialhub$ktumblr$entity$post = $work$socialhub$ktumblr$entity.post || ($work$socialhub$ktumblr$entity.post = {});
    var $work$socialhub$ktumblr$entity$post$legacy = $work$socialhub$ktumblr$entity$post.legacy || ($work$socialhub$ktumblr$entity$post.legacy = {});
    $work$socialhub$ktumblr$entity$post$legacy.LegacyPhotoPost = LegacyPhotoPost;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$entity = $work$socialhub$ktumblr.entity || ($work$socialhub$ktumblr.entity = {});
    var $work$socialhub$ktumblr$entity$post = $work$socialhub$ktumblr$entity.post || ($work$socialhub$ktumblr$entity.post = {});
    var $work$socialhub$ktumblr$entity$post$legacy = $work$socialhub$ktumblr$entity$post.legacy || ($work$socialhub$ktumblr$entity$post.legacy = {});
    $work$socialhub$ktumblr$entity$post$legacy.LegacyQuotePost = LegacyQuotePost;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$entity = $work$socialhub$ktumblr.entity || ($work$socialhub$ktumblr.entity = {});
    var $work$socialhub$ktumblr$entity$post = $work$socialhub$ktumblr$entity.post || ($work$socialhub$ktumblr$entity.post = {});
    var $work$socialhub$ktumblr$entity$post$legacy = $work$socialhub$ktumblr$entity$post.legacy || ($work$socialhub$ktumblr$entity$post.legacy = {});
    $work$socialhub$ktumblr$entity$post$legacy.LegacyVideoPost = LegacyVideoPost;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$entity = $work$socialhub$ktumblr.entity || ($work$socialhub$ktumblr.entity = {});
    var $work$socialhub$ktumblr$entity$post = $work$socialhub$ktumblr$entity.post || ($work$socialhub$ktumblr$entity.post = {});
    var $work$socialhub$ktumblr$entity$post$options = $work$socialhub$ktumblr$entity$post.options || ($work$socialhub$ktumblr$entity$post.options = {});
    $work$socialhub$ktumblr$entity$post$options.Dialogue = Dialogue;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$entity = $work$socialhub$ktumblr.entity || ($work$socialhub$ktumblr.entity = {});
    var $work$socialhub$ktumblr$entity$post = $work$socialhub$ktumblr$entity.post || ($work$socialhub$ktumblr$entity.post = {});
    var $work$socialhub$ktumblr$entity$post$options = $work$socialhub$ktumblr$entity$post.options || ($work$socialhub$ktumblr$entity$post.options = {});
    $work$socialhub$ktumblr$entity$post$options.Photo = Photo;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$entity = $work$socialhub$ktumblr.entity || ($work$socialhub$ktumblr.entity = {});
    var $work$socialhub$ktumblr$entity$post = $work$socialhub$ktumblr$entity.post || ($work$socialhub$ktumblr$entity.post = {});
    var $work$socialhub$ktumblr$entity$post$options = $work$socialhub$ktumblr$entity$post.options || ($work$socialhub$ktumblr$entity$post.options = {});
    $work$socialhub$ktumblr$entity$post$options.PhotoSize = PhotoSize;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$entity = $work$socialhub$ktumblr.entity || ($work$socialhub$ktumblr.entity = {});
    var $work$socialhub$ktumblr$entity$post = $work$socialhub$ktumblr$entity.post || ($work$socialhub$ktumblr$entity.post = {});
    var $work$socialhub$ktumblr$entity$post$options = $work$socialhub$ktumblr$entity$post.options || ($work$socialhub$ktumblr$entity$post.options = {});
    $work$socialhub$ktumblr$entity$post$options.Video = Video;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$entity = $work$socialhub$ktumblr.entity || ($work$socialhub$ktumblr.entity = {});
    var $work$socialhub$ktumblr$entity$trail = $work$socialhub$ktumblr$entity.trail || ($work$socialhub$ktumblr$entity.trail = {});
    $work$socialhub$ktumblr$entity$trail.BlogInTrail = BlogInTrail;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$entity = $work$socialhub$ktumblr.entity || ($work$socialhub$ktumblr.entity = {});
    var $work$socialhub$ktumblr$entity$trail = $work$socialhub$ktumblr$entity.trail || ($work$socialhub$ktumblr$entity.trail = {});
    $work$socialhub$ktumblr$entity$trail.IdInTrail = IdInTrail;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$entity = $work$socialhub$ktumblr.entity || ($work$socialhub$ktumblr.entity = {});
    var $work$socialhub$ktumblr$entity$trail = $work$socialhub$ktumblr$entity.trail || ($work$socialhub$ktumblr$entity.trail = {});
    $work$socialhub$ktumblr$entity$trail.Trail = Trail;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$entity = $work$socialhub$ktumblr.entity || ($work$socialhub$ktumblr.entity = {});
    var $work$socialhub$ktumblr$entity$user = $work$socialhub$ktumblr$entity.user || ($work$socialhub$ktumblr$entity.user = {});
    $work$socialhub$ktumblr$entity$user.FollowerUser = FollowerUser;
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$ktumblr = $work$socialhub.ktumblr || ($work$socialhub.ktumblr = {});
    var $work$socialhub$ktumblr$entity = $work$socialhub$ktumblr.entity || ($work$socialhub$ktumblr.entity = {});
    var $work$socialhub$ktumblr$entity$user = $work$socialhub$ktumblr$entity.user || ($work$socialhub$ktumblr$entity.user = {});
    $work$socialhub$ktumblr$entity$user.User = User;
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = TumblrAuth;
  _.$_$.b = TumblrImpl;
  //endregion
  return _;
}));

//# sourceMappingURL=ktumblr-core.js.map
