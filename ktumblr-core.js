(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './khttpclient.js', './kotlinx-coroutines-core.js', './ktor-ktor-http.js', './kotlinx-serialization-kotlinx-serialization-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./khttpclient.js'), require('./kotlinx-coroutines-core.js'), require('./ktor-ktor-http.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktumblr-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktumblr-core'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'ktumblr-core'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'ktumblr-core'.");
    }
    if (typeof khttpclient === 'undefined') {
      throw new Error("Error loading module 'ktumblr-core'. Its dependency 'khttpclient' was not found. Please, check whether 'khttpclient' is loaded prior to 'ktumblr-core'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktumblr-core'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktumblr-core'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktumblr-core'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktumblr-core'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'ktumblr-core'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'ktumblr-core'.");
    }
    globalThis['ktumblr-core'] = factory(typeof globalThis['ktumblr-core'] === 'undefined' ? {} : globalThis['ktumblr-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], khttpclient, globalThis['kotlinx-coroutines-core'], globalThis['ktor-ktor-http'], globalThis['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_work_socialhub_khttpclient, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ob;
  var initMetadataForInterface = kotlin_kotlin.$_$.ta;
  var VOID = kotlin_kotlin.$_$.c;
  var toString = kotlin_kotlin.$_$.rb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.h4;
  var Unit_instance = kotlin_kotlin.$_$.q2;
  var initMetadataForClass = kotlin_kotlin.$_$.pa;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.p4;
  var objectCreate = kotlin_kotlin.$_$.nb;
  var captureStack = kotlin_kotlin.$_$.z9;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.q4;
  var RuntimeException = kotlin_kotlin.$_$.if;
  var initMetadataForObject = kotlin_kotlin.$_$.va;
  var defineProp = kotlin_kotlin.$_$.ia;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.i3;
  var joinToString = kotlin_kotlin.$_$.u6;
  var to = kotlin_kotlin.$_$.mg;
  var emptyMap = kotlin_kotlin.$_$.j6;
  var ensureNotNull = kotlin_kotlin.$_$.bg;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.y2;
  var toMap = kotlin_kotlin.$_$.x7;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.qa;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var toString_0 = kotlin_kotlin.$_$.lg;
  var hashCode = kotlin_kotlin.$_$.oa;
  var getStringHashCode = kotlin_kotlin.$_$.na;
  var equals = kotlin_kotlin.$_$.ja;
  var getKClass = kotlin_kotlin.$_$.hc;
  var ReferenceArraySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.u2;
  var lazy = kotlin_kotlin.$_$.gg;
  var THROW_IAE = kotlin_kotlin.$_$.kf;
  var Enum = kotlin_kotlin.$_$.ze;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.f2;
  var throwArrayMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var contains = kotlin_kotlin.$_$.sc;
  var CoroutineImpl = kotlin_kotlin.$_$.w8;
  var HttpRequest = kotlin_work_socialhub_khttpclient.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.e8;
  var initMetadataForLambda = kotlin_kotlin.$_$.ua;
  var constructCallableReference = kotlin_kotlin.$_$.ha;
  var Exception = kotlin_kotlin.$_$.bf;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ra;
  var THROW_CCE = kotlin_kotlin.$_$.jf;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var isInterface = kotlin_kotlin.$_$.eb;
  var arrayOf = kotlin_kotlin.$_$.xf;
  var createKType = kotlin_kotlin.$_$.fc;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var await_0 = kotlin_kotlin.$_$.v2;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.j1;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.n;
  var set_encodedPath = kotlin_io_ktor_ktor_http.$_$.u1;
  var promisify = kotlin_kotlin.$_$.i8;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.dc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.d4;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ig;
  var JsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.d;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.q5;
  var JsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var get_boolean = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.g;
  var get_booleanOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.h;
  var get_double = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.i;
  var get_doubleOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.j;
  var get_float = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.k;
  var get_floatOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.l;
  var get_long = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.p;
  var get_longOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.q;
  var get_int = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.m;
  var get_intOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.n;
  var JsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.e;
  var buildClassSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var JsonDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var SerializersModuleBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.f;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var JsonContentPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var get_jsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.o;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.u4;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(Tumblr, 'Tumblr');
  initMetadataForClass(TumblrAuth, 'TumblrAuth');
  initMetadataForClass(TumblrException, 'TumblrException', VOID, RuntimeException);
  initMetadataForObject(TumblrFactory, 'TumblrFactory');
  initMetadataForClass(TumblrImpl, 'TumblrImpl', VOID, VOID, [Tumblr]);
  function oAuth2Token$suspendBridge(request, $completion) {
  }
  function oAuth2TokenRefresh$suspendBridge(request, $completion) {
  }
  initMetadataForInterface(AuthResource, 'AuthResource', VOID, VOID, VOID, [1, 2]);
  function blogInfo$suspendBridge(request, $completion) {
  }
  function blogAvatar$suspendBridge(request, $completion) {
  }
  function blogLikes$suspendBridge(request, $completion) {
  }
  function blogFollowing$suspendBridge(request, $completion) {
  }
  function blogFollowers$suspendBridge(request, $completion) {
  }
  function blogPosts$suspendBridge(request, $completion) {
  }
  function blogQueuedPosts$suspendBridge(request, $completion) {
  }
  function blogDraftPosts$suspendBridge(request, $completion) {
  }
  function blogSubmissions$suspendBridge(request, $completion) {
  }
  function postCreate$suspendBridge(request, $completion) {
  }
  function postEdit$suspendBridge(request, $completion) {
  }
  function postReblog$suspendBridge(request, $completion) {
  }
  function postDelete$suspendBridge(request, $completion) {
  }
  function blogBanner$suspendBridge(request, $completion) {
  }
  function blogUpdateInfo$suspendBridge(request, $completion) {
  }
  function postEditTags$suspendBridge(request, $completion) {
  }
  function postUpdate$suspendBridge(request, $completion) {
  }
  initMetadataForInterface(BlogResource, 'BlogResource', VOID, VOID, VOID, [1, 2]);
  function tagged$suspendBridge(request, $completion) {
  }
  initMetadataForInterface(TaggedResource, 'TaggedResource', VOID, VOID, VOID, [1, 2]);
  function user$suspendBridge($completion) {
  }
  function userDashboard$suspendBridge(request, $completion) {
  }
  function userFollowing$suspendBridge(request, $completion) {
  }
  function userLikes$suspendBridge(request, $completion) {
  }
  function like$suspendBridge(request, $completion) {
  }
  function unlike$suspendBridge(request, $completion) {
  }
  function follow$suspendBridge(request, $completion) {
  }
  function unfollow$suspendBridge(request, $completion) {
  }
  initMetadataForInterface(UserResource, 'UserResource', VOID, VOID, VOID, [0, 1, 2]);
  initMetadataForClass(FileRequest, 'FileRequest');
  function addParam(_this__u8e3s4, key, value) {
    if (value == null)
      return Unit_instance;
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.k2(key, value);
  }
  initMetadataForInterface(MapRequest, 'MapRequest');
  initMetadataForClass(AuthAuthorizeUrlRequest, 'AuthAuthorizeUrlRequest', AuthAuthorizeUrlRequest, VOID, [MapRequest]);
  initMetadataForClass(AuthOAuth2TokenRefreshRequest, 'AuthOAuth2TokenRefreshRequest', AuthOAuth2TokenRefreshRequest, VOID, [MapRequest]);
  initMetadataForClass(AuthOAuth2TokenRequest, 'AuthOAuth2TokenRequest', AuthOAuth2TokenRequest, VOID, [MapRequest]);
  initMetadataForClass(BlogAvatarRequest, 'BlogAvatarRequest', BlogAvatarRequest);
  initMetadataForClass(BlogBannerRequest, 'BlogBannerRequest', BlogBannerRequest);
  initMetadataForClass(BlogDraftsRequest, 'BlogDraftsRequest', BlogDraftsRequest, VOID, [MapRequest]);
  initMetadataForClass(BlogFollowersRequest, 'BlogFollowersRequest', BlogFollowersRequest, VOID, [MapRequest]);
  initMetadataForClass(BlogFollowingRequest, 'BlogFollowingRequest', BlogFollowingRequest, VOID, [MapRequest]);
  initMetadataForClass(BlogInfoRequest, 'BlogInfoRequest', BlogInfoRequest);
  initMetadataForClass(BlogLikesRequest, 'BlogLikesRequest', BlogLikesRequest, VOID, [MapRequest]);
  initMetadataForClass(BlogPostsRequest, 'BlogPostsRequest', BlogPostsRequest, VOID, [MapRequest]);
  initMetadataForClass(BlogQueueRequest, 'BlogQueueRequest', BlogQueueRequest, VOID, [MapRequest]);
  initMetadataForClass(BlogSubmissionsRequest, 'BlogSubmissionsRequest', BlogSubmissionsRequest, VOID, [MapRequest]);
  initMetadataForClass(BlogUpdateInfoRequest, 'BlogUpdateInfoRequest', BlogUpdateInfoRequest, VOID, [MapRequest]);
  initMetadataForClass(BlogPostRequest, 'BlogPostRequest', BlogPostRequest);
  initMetadataForClass(BlogAudioPostRequest, 'BlogAudioPostRequest', BlogAudioPostRequest, BlogPostRequest, [MapRequest]);
  initMetadataForClass(BlogChatPostRequest, 'BlogChatPostRequest', BlogChatPostRequest, BlogPostRequest, [MapRequest]);
  initMetadataForClass(BlogDeleteRequest, 'BlogDeleteRequest', BlogDeleteRequest, VOID, [MapRequest]);
  initMetadataForClass(BlogLinkPostRequest, 'BlogLinkPostRequest', BlogLinkPostRequest, BlogPostRequest, [MapRequest]);
  initMetadataForClass(BlogPhotoPostRequest, 'BlogPhotoPostRequest', BlogPhotoPostRequest, BlogPostRequest, [MapRequest]);
  initMetadataForClass(BlogPostEditTagsRequest, 'BlogPostEditTagsRequest', BlogPostEditTagsRequest, VOID, [MapRequest]);
  initMetadataForClass(BlogPostUpdateRequest, 'BlogPostUpdateRequest', BlogPostUpdateRequest, VOID, [MapRequest]);
  initMetadataForClass(BlogQuotePostRequest, 'BlogQuotePostRequest', BlogQuotePostRequest, BlogPostRequest, [MapRequest]);
  initMetadataForClass(BlogReblogRequest, 'BlogReblogRequest', BlogReblogRequest, VOID, [MapRequest]);
  initMetadataForClass(BlogTextPostRequest, 'BlogTextPostRequest', BlogTextPostRequest, BlogPostRequest, [MapRequest]);
  initMetadataForClass(BlogVideoPostRequest, 'BlogVideoPostRequest', BlogVideoPostRequest, BlogPostRequest, [MapRequest]);
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
  initMetadataForClass(Body, 'Body', Body, VOID, VOID, VOID, VOID, {0: Companion_getInstance_0});
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Meta, 'Meta', Meta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForClass(Response, 'Response');
  initMetadataForClass(ResponseUnit, 'ResponseUnit');
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(AuthOAuth2TokenResponse, 'AuthOAuth2TokenResponse', AuthOAuth2TokenResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForCompanion(Companion_2);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BlogBannerResponse, 'BlogBannerResponse', BlogBannerResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BlogFollowersResponse, 'BlogFollowersResponse', BlogFollowersResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BlogFollowingResponse, 'BlogFollowingResponse', BlogFollowingResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForCompanion(Companion_5);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BlogInfoResponse, 'BlogInfoResponse', BlogInfoResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForCompanion(Companion_6);
  initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BlogLikesResponse, 'BlogLikesResponse', BlogLikesResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
  initMetadataForCompanion(Companion_7);
  initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BlogPostsResponse, 'BlogPostsResponse', BlogPostsResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  initMetadataForCompanion(Companion_8);
  initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BlogUpdatedInfoResponse, 'BlogUpdatedInfoResponse', BlogUpdatedInfoResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
  initMetadataForCompanion(Companion_9);
  initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(UserDashboardResponse, 'UserDashboardResponse', UserDashboardResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
  initMetadataForCompanion(Companion_10);
  initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(UserFollowingResponse, 'UserFollowingResponse', UserFollowingResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_9});
  initMetadataForCompanion(Companion_11);
  initMetadataForObject($serializer_11, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(UserLikesResponse, 'UserLikesResponse', UserLikesResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_10});
  initMetadataForCompanion(Companion_12);
  initMetadataForObject($serializer_12, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(UserResponse, 'UserResponse', UserResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_11});
  initMetadataForClass(PhotoType, 'PhotoType', VOID, Enum);
  initMetadataForClass(PostType, 'PostType', VOID, Enum);
  initMetadataForCompanion(Companion_13);
  initMetadataForObject($serializer_13, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Note, 'Note', Note, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_12});
  initMetadataForCompanion(Companion_14);
  initMetadataForObject($serializer_14, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(NoteAvatar, 'NoteAvatar', NoteAvatar, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_13});
  initMetadataForClass(Resource, 'Resource', Resource);
  initMetadataForCompanion(Companion_15);
  initMetadataForObject($serializer_15, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Blog, 'Blog', Blog, Resource, VOID, VOID, VOID, {0: $serializer_getInstance_14});
  initMetadataForCompanion(Companion_16);
  initMetadataForObject($serializer_16, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BlogAvatar, 'BlogAvatar', BlogAvatar, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_15});
  initMetadataForCompanion(Companion_17);
  initMetadataForObject($serializer_17, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BlogTheme, 'BlogTheme', BlogTheme, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_16});
  initMetadataForCompanion(Companion_18);
  initMetadataForObject($serializer_18, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Reblog, 'Reblog', Reblog, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_17});
  initMetadataForCompanion(Companion_19);
  initMetadataForClass(Post, 'Post', VOID, VOID, VOID, VOID, VOID, {0: PostSerializer_getInstance});
  initMetadataForCompanion(Companion_20);
  initMetadataForObject($serializer_19, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(LegacyAnswerPost, 'LegacyAnswerPost', VOID, Post, VOID, VOID, VOID, {0: $serializer_getInstance_18});
  initMetadataForCompanion(Companion_21);
  initMetadataForObject($serializer_20, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(LegacyAudioPost, 'LegacyAudioPost', VOID, Post, VOID, VOID, VOID, {0: $serializer_getInstance_19});
  initMetadataForCompanion(Companion_22);
  initMetadataForObject($serializer_21, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(LegacyChatPost, 'LegacyChatPost', VOID, Post, VOID, VOID, VOID, {0: $serializer_getInstance_20});
  initMetadataForCompanion(Companion_23);
  initMetadataForObject($serializer_22, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(LegacyLinkPost, 'LegacyLinkPost', VOID, Post, VOID, VOID, VOID, {0: $serializer_getInstance_21});
  initMetadataForCompanion(Companion_24);
  initMetadataForObject($serializer_23, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(LegacyPhotoPost, 'LegacyPhotoPost', VOID, Post, VOID, VOID, VOID, {0: $serializer_getInstance_22});
  initMetadataForCompanion(Companion_25);
  initMetadataForObject($serializer_24, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(LegacyPostcardPost, 'LegacyPostcardPost', VOID, Post, VOID, VOID, VOID, {0: $serializer_getInstance_23});
  initMetadataForCompanion(Companion_26);
  initMetadataForObject($serializer_25, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(LegacyQuotePost, 'LegacyQuotePost', VOID, Post, VOID, VOID, VOID, {0: $serializer_getInstance_24});
  initMetadataForCompanion(Companion_27);
  initMetadataForObject($serializer_26, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(LegacyTextPost, 'LegacyTextPost', VOID, Post, VOID, VOID, VOID, {0: $serializer_getInstance_25});
  initMetadataForCompanion(Companion_28);
  initMetadataForObject($serializer_27, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(LegacyVideoPost, 'LegacyVideoPost', VOID, Post, VOID, VOID, VOID, {0: $serializer_getInstance_26});
  initMetadataForCompanion(Companion_29);
  initMetadataForObject($serializer_28, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Dialogue, 'Dialogue', Dialogue, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_27});
  initMetadataForCompanion(Companion_30);
  initMetadataForObject($serializer_29, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Photo, 'Photo', Photo, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_28});
  initMetadataForCompanion(Companion_31);
  initMetadataForObject($serializer_30, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PhotoSize, 'PhotoSize', PhotoSize, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_29});
  initMetadataForCompanion(Companion_32);
  initMetadataForObject($serializer_31, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Video, 'Video', Video, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_30});
  initMetadataForCompanion(Companion_33);
  initMetadataForObject($serializer_32, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BlogInTrail, 'BlogInTrail', BlogInTrail, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_31});
  initMetadataForCompanion(Companion_34);
  initMetadataForObject($serializer_33, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(IdInTrail, 'IdInTrail', IdInTrail, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_32});
  initMetadataForCompanion(Companion_35);
  initMetadataForObject($serializer_34, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Trail, 'Trail', Trail, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_33});
  initMetadataForCompanion(Companion_36);
  initMetadataForObject($serializer_35, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(FollowerUser, 'FollowerUser', FollowerUser, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_34});
  initMetadataForCompanion(Companion_37);
  initMetadataForObject($serializer_36, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(User, 'User', User, Resource, VOID, VOID, VOID, {0: $serializer_getInstance_35});
  initMetadataForLambda(AbstractResourceImpl$oauthPostUnit$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AbstractResourceImpl$oauthPutUnit$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($proceedUnitCOROUTINE$, CoroutineImpl);
  initMetadataForClass(AbstractResourceImpl, 'AbstractResourceImpl', VOID, VOID, VOID, [3, 2, 1]);
  initMetadataForLambda(AuthResourceImpl$oAuth2TokenBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AuthResourceImpl$oAuth2TokenRefreshBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($oAuth2TokenCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($oAuth2Token$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($oAuth2TokenRefreshCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($oAuth2TokenRefresh$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(AuthResourceImpl, 'AuthResourceImpl', VOID, AbstractResourceImpl, [AuthResource], [1, 3, 2]);
  initMetadataForLambda(BlogResourceImpl$blogInfoBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(BlogResourceImpl$blogAvatarBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(BlogResourceImpl$blogLikesBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(BlogResourceImpl$blogFollowingBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(BlogResourceImpl$blogFollowersBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(BlogResourceImpl$blogPostsBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(BlogResourceImpl$blogQueuedPostsBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(BlogResourceImpl$blogDraftPostsBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(BlogResourceImpl$blogSubmissionsBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(BlogResourceImpl$postCreateBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(BlogResourceImpl$postEditBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(BlogResourceImpl$postReblogBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(BlogResourceImpl$postDeleteBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(BlogResourceImpl$blogBannerBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(BlogResourceImpl$blogUpdateInfoBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(BlogResourceImpl$postEditTagsBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(BlogResourceImpl$postUpdateBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($blogInfoCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($blogInfo$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($blogAvatarCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($blogAvatar$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($blogLikesCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($blogLikes$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($blogFollowingCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($blogFollowing$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($blogFollowersCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($blogFollowers$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($blogPostsCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($blogPosts$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($blogQueuedPostsCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($blogQueuedPosts$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($blogDraftPostsCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($blogDraftPosts$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($blogSubmissionsCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($blogSubmissions$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($postCreate$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($postEdit$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($postReblog$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($postDelete$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($blogBannerCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($blogBanner$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($blogUpdateInfo$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($postEditTags$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($postUpdate$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(BlogResourceImpl, 'BlogResourceImpl', VOID, AbstractResourceImpl, [BlogResource], [1, 3, 2]);
  initMetadataForLambda(TaggedResourceImpl$taggedBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($taggedCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($tagged$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(TaggedResourceImpl, 'TaggedResourceImpl', VOID, AbstractResourceImpl, [TaggedResource], [1, 3, 2]);
  initMetadataForLambda(UserResourceImpl$userBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(UserResourceImpl$userDashboardBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(UserResourceImpl$userFollowingBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(UserResourceImpl$userLikesBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(UserResourceImpl$likeBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(UserResourceImpl$unlikeBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(UserResourceImpl$followBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(UserResourceImpl$unfollowBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($userCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($user$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($userDashboardCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($userDashboard$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($userFollowingCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($userFollowing$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($userLikesCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($userLikes$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($like$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($unlike$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($follow$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($unfollow$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(UserResourceImpl, 'UserResourceImpl', VOID, AbstractResourceImpl, [UserResource], [0, 1, 3, 2]);
  initMetadataForObject(AnySerializer, 'AnySerializer', VOID, VOID, [KSerializer]);
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
    this.w4u_1 = clientId;
    this.x4u_1 = clientSecret;
    this.y4u_1 = accessToken;
    this.z4u_1 = refreshToken;
  }
  protoOf(TumblrAuth).a4v = function () {
    // Inline function 'kotlin.checkNotNull' call
    var tmp0 = this.y4u_1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'Required value was null.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    return 'Bearer ' + this.y4u_1;
  };
  function TumblrException_init_$Init$(e, $this) {
    RuntimeException_init_$Init$(e, $this);
    TumblrException.call($this);
    return $this;
  }
  function TumblrException_init_$Create$(e) {
    var tmp = TumblrException_init_$Init$(e, objectCreate(protoOf(TumblrException)));
    captureStack(tmp, TumblrException_init_$Create$);
    return tmp;
  }
  function TumblrException_init_$Init$_0(status, body, $this) {
    RuntimeException_init_$Init$_0('status code: ' + status + ', body: ' + body, $this);
    TumblrException.call($this);
    $this.b4v_1 = status;
    $this.c4v_1 = body;
    return $this;
  }
  function TumblrException_init_$Create$_0(status, body) {
    var tmp = TumblrException_init_$Init$_0(status, body, objectCreate(protoOf(TumblrException)));
    captureStack(tmp, TumblrException_init_$Create$_0);
    return tmp;
  }
  function TumblrException() {
    captureStack(this, TumblrException);
    this.b4v_1 = null;
    this.c4v_1 = null;
  }
  function TumblrFactory() {
  }
  protoOf(TumblrFactory).d4v = function (clientId, clientSecret, accessToken, refreshToken) {
    return new TumblrImpl(new TumblrAuth(clientId, clientSecret, accessToken, refreshToken));
  };
  protoOf(TumblrFactory).instance = function (clientId, clientSecret, accessToken, refreshToken, $super) {
    clientId = clientId === VOID ? '' : clientId;
    clientSecret = clientSecret === VOID ? null : clientSecret;
    accessToken = accessToken === VOID ? null : accessToken;
    refreshToken = refreshToken === VOID ? null : refreshToken;
    return $super === VOID ? this.d4v(clientId, clientSecret, accessToken, refreshToken) : $super.d4v.call(this, clientId, clientSecret, accessToken, refreshToken);
  };
  var TumblrFactory_instance;
  function TumblrFactory_getInstance() {
    return TumblrFactory_instance;
  }
  function TumblrImpl(tumblrAuth) {
    this.e4v_1 = tumblrAuth;
    this.f4v_1 = new AuthResourceImpl(this.e4v_1);
    this.g4v_1 = new UserResourceImpl(this.e4v_1);
    this.h4v_1 = new BlogResourceImpl(this.e4v_1);
    this.i4v_1 = new TaggedResourceImpl(this.e4v_1);
  }
  protoOf(TumblrImpl).auth = function () {
    return this.f4v_1;
  };
  protoOf(TumblrImpl).user = function () {
    return this.g4v_1;
  };
  protoOf(TumblrImpl).blog = function () {
    return this.h4v_1;
  };
  protoOf(TumblrImpl).tagged = function () {
    return this.i4v_1;
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
  protoOf(FileRequest).m = function () {
    return this.name;
  };
  protoOf(FileRequest).p4y = function () {
    return this.data;
  };
  function MapRequest() {
  }
  function addParam_0(_this__u8e3s4, key, value) {
    if (value == null)
      return Unit_instance;
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.k2(key, value);
  }
  function AuthAuthorizeUrlRequest() {
    this.responseType = 'code';
    this.redirectUri = null;
    this.state = null;
    this.scope = 'write offline_access';
  }
  protoOf(AuthAuthorizeUrlRequest).r4y = function (_set____db54di) {
    this.responseType = _set____db54di;
  };
  protoOf(AuthAuthorizeUrlRequest).s4y = function () {
    return this.responseType;
  };
  protoOf(AuthAuthorizeUrlRequest).t4y = function (_set____db54di) {
    this.redirectUri = _set____db54di;
  };
  protoOf(AuthAuthorizeUrlRequest).u4y = function () {
    return this.redirectUri;
  };
  protoOf(AuthAuthorizeUrlRequest).v4y = function (_set____db54di) {
    this.state = _set____db54di;
  };
  protoOf(AuthAuthorizeUrlRequest).w4y = function () {
    return this.state;
  };
  protoOf(AuthAuthorizeUrlRequest).x4y = function (_set____db54di) {
    this.scope = _set____db54di;
  };
  protoOf(AuthAuthorizeUrlRequest).y4y = function () {
    return this.scope;
  };
  protoOf(AuthAuthorizeUrlRequest).z4y = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.q4y(this_0, 'response_type', this.responseType);
    this.q4y(this_0, 'redirect_uri', this.redirectUri);
    this.q4y(this_0, 'state', this.state);
    this.q4y(this_0, 'scope', this.scope);
    return this_0;
  };
  function AuthOAuth2TokenRefreshRequest() {
    this.grantType = 'refresh_token';
    this.clientId = null;
    this.clientSecret = null;
    this.refreshToken = null;
  }
  protoOf(AuthOAuth2TokenRefreshRequest).a4z = function (_set____db54di) {
    this.grantType = _set____db54di;
  };
  protoOf(AuthOAuth2TokenRefreshRequest).b4z = function () {
    return this.grantType;
  };
  protoOf(AuthOAuth2TokenRefreshRequest).c4z = function (_set____db54di) {
    this.clientId = _set____db54di;
  };
  protoOf(AuthOAuth2TokenRefreshRequest).d4z = function () {
    return this.clientId;
  };
  protoOf(AuthOAuth2TokenRefreshRequest).e4z = function (_set____db54di) {
    this.clientSecret = _set____db54di;
  };
  protoOf(AuthOAuth2TokenRefreshRequest).f4z = function () {
    return this.clientSecret;
  };
  protoOf(AuthOAuth2TokenRefreshRequest).g4z = function (_set____db54di) {
    this.refreshToken = _set____db54di;
  };
  protoOf(AuthOAuth2TokenRefreshRequest).h4z = function () {
    return this.refreshToken;
  };
  protoOf(AuthOAuth2TokenRefreshRequest).z4y = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.q4y(this_0, 'grant_type', this.grantType);
    this.q4y(this_0, 'client_id', this.clientId);
    this.q4y(this_0, 'client_secret', this.clientSecret);
    this.q4y(this_0, 'refresh_token', this.refreshToken);
    return this_0;
  };
  function AuthOAuth2TokenRequest() {
    this.grantType = 'authorization_code';
    this.code = null;
    this.clientId = null;
    this.clientSecret = null;
    this.redirectUri = null;
  }
  protoOf(AuthOAuth2TokenRequest).a4z = function (_set____db54di) {
    this.grantType = _set____db54di;
  };
  protoOf(AuthOAuth2TokenRequest).b4z = function () {
    return this.grantType;
  };
  protoOf(AuthOAuth2TokenRequest).i4z = function (_set____db54di) {
    this.code = _set____db54di;
  };
  protoOf(AuthOAuth2TokenRequest).j4z = function () {
    return this.code;
  };
  protoOf(AuthOAuth2TokenRequest).c4z = function (_set____db54di) {
    this.clientId = _set____db54di;
  };
  protoOf(AuthOAuth2TokenRequest).d4z = function () {
    return this.clientId;
  };
  protoOf(AuthOAuth2TokenRequest).e4z = function (_set____db54di) {
    this.clientSecret = _set____db54di;
  };
  protoOf(AuthOAuth2TokenRequest).f4z = function () {
    return this.clientSecret;
  };
  protoOf(AuthOAuth2TokenRequest).t4y = function (_set____db54di) {
    this.redirectUri = _set____db54di;
  };
  protoOf(AuthOAuth2TokenRequest).u4y = function () {
    return this.redirectUri;
  };
  protoOf(AuthOAuth2TokenRequest).z4y = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.q4y(this_0, 'grant_type', this.grantType);
    this.q4y(this_0, 'code', this.code);
    this.q4y(this_0, 'client_id', this.clientId);
    this.q4y(this_0, 'client_secret', this.clientSecret);
    this.q4y(this_0, 'redirect_uri', this.redirectUri);
    return this_0;
  };
  function BlogAvatarRequest() {
    this.blogName = null;
    this.size = 0;
  }
  protoOf(BlogAvatarRequest).k4z = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogAvatarRequest).l4z = function () {
    return this.blogName;
  };
  protoOf(BlogAvatarRequest).m4z = function (_set____db54di) {
    this.size = _set____db54di;
  };
  protoOf(BlogAvatarRequest).e1 = function () {
    return this.size;
  };
  function BlogBannerRequest() {
    this.blogName = null;
    this.size = null;
  }
  protoOf(BlogBannerRequest).k4z = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogBannerRequest).l4z = function () {
    return this.blogName;
  };
  protoOf(BlogBannerRequest).n4z = function (_set____db54di) {
    this.size = _set____db54di;
  };
  protoOf(BlogBannerRequest).e1 = function () {
    return this.size;
  };
  function BlogDraftsRequest() {
    this.blogName = null;
    this.beforeId = null;
    this.filter = null;
  }
  protoOf(BlogDraftsRequest).k4z = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogDraftsRequest).l4z = function () {
    return this.blogName;
  };
  protoOf(BlogDraftsRequest).o4z = function (_set____db54di) {
    this.beforeId = _set____db54di;
  };
  protoOf(BlogDraftsRequest).p4z = function () {
    return this.beforeId;
  };
  protoOf(BlogDraftsRequest).q4z = function (_set____db54di) {
    this.filter = _set____db54di;
  };
  protoOf(BlogDraftsRequest).r4z = function () {
    return this.filter;
  };
  protoOf(BlogDraftsRequest).z4y = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.q4y(this_0, 'before_id', this.beforeId);
    this.q4y(this_0, 'filter', this.filter);
    return this_0;
  };
  function BlogFollowersRequest() {
    this.blogName = null;
    this.limit = null;
    this.offset = null;
  }
  protoOf(BlogFollowersRequest).k4z = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogFollowersRequest).l4z = function () {
    return this.blogName;
  };
  protoOf(BlogFollowersRequest).s4z = function (_set____db54di) {
    this.limit = _set____db54di;
  };
  protoOf(BlogFollowersRequest).t4z = function () {
    return this.limit;
  };
  protoOf(BlogFollowersRequest).u4z = function (_set____db54di) {
    this.offset = _set____db54di;
  };
  protoOf(BlogFollowersRequest).v4z = function () {
    return this.offset;
  };
  protoOf(BlogFollowersRequest).z4y = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.q4y(this_0, 'limit', this.limit);
    this.q4y(this_0, 'offset', this.offset);
    return this_0;
  };
  function BlogFollowingRequest() {
    this.blogName = null;
    this.limit = null;
    this.offset = null;
  }
  protoOf(BlogFollowingRequest).k4z = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogFollowingRequest).l4z = function () {
    return this.blogName;
  };
  protoOf(BlogFollowingRequest).s4z = function (_set____db54di) {
    this.limit = _set____db54di;
  };
  protoOf(BlogFollowingRequest).t4z = function () {
    return this.limit;
  };
  protoOf(BlogFollowingRequest).u4z = function (_set____db54di) {
    this.offset = _set____db54di;
  };
  protoOf(BlogFollowingRequest).v4z = function () {
    return this.offset;
  };
  protoOf(BlogFollowingRequest).z4y = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.q4y(this_0, 'limit', this.limit);
    this.q4y(this_0, 'offset', this.offset);
    return this_0;
  };
  function BlogInfoRequest() {
    this.blogName = null;
  }
  protoOf(BlogInfoRequest).k4z = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogInfoRequest).l4z = function () {
    return this.blogName;
  };
  function BlogLikesRequest() {
    this.blogName = null;
    this.limit = null;
    this.offset = null;
    this.before = null;
    this.after = null;
  }
  protoOf(BlogLikesRequest).k4z = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogLikesRequest).l4z = function () {
    return this.blogName;
  };
  protoOf(BlogLikesRequest).s4z = function (_set____db54di) {
    this.limit = _set____db54di;
  };
  protoOf(BlogLikesRequest).t4z = function () {
    return this.limit;
  };
  protoOf(BlogLikesRequest).u4z = function (_set____db54di) {
    this.offset = _set____db54di;
  };
  protoOf(BlogLikesRequest).v4z = function () {
    return this.offset;
  };
  protoOf(BlogLikesRequest).w4z = function (_set____db54di) {
    this.before = _set____db54di;
  };
  protoOf(BlogLikesRequest).x4z = function () {
    return this.before;
  };
  protoOf(BlogLikesRequest).y4z = function (_set____db54di) {
    this.after = _set____db54di;
  };
  protoOf(BlogLikesRequest).z4z = function () {
    return this.after;
  };
  protoOf(BlogLikesRequest).z4y = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.q4y(this_0, 'limit', this.limit);
    this.q4y(this_0, 'offset', this.offset);
    this.q4y(this_0, 'before', this.before);
    this.q4y(this_0, 'after', this.after);
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
    this.types = null;
  }
  protoOf(BlogPostsRequest).k4z = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogPostsRequest).l4z = function () {
    return this.blogName;
  };
  protoOf(BlogPostsRequest).a50 = function (_set____db54di) {
    this.type = _set____db54di;
  };
  protoOf(BlogPostsRequest).b50 = function () {
    return this.type;
  };
  protoOf(BlogPostsRequest).c50 = function (_set____db54di) {
    this.id = _set____db54di;
  };
  protoOf(BlogPostsRequest).d50 = function () {
    return this.id;
  };
  protoOf(BlogPostsRequest).e50 = function (_set____db54di) {
    this.tag = _set____db54di;
  };
  protoOf(BlogPostsRequest).f50 = function () {
    return this.tag;
  };
  protoOf(BlogPostsRequest).s4z = function (_set____db54di) {
    this.limit = _set____db54di;
  };
  protoOf(BlogPostsRequest).t4z = function () {
    return this.limit;
  };
  protoOf(BlogPostsRequest).u4z = function (_set____db54di) {
    this.offset = _set____db54di;
  };
  protoOf(BlogPostsRequest).v4z = function () {
    return this.offset;
  };
  protoOf(BlogPostsRequest).g50 = function (_set____db54di) {
    this.reblogInfo = _set____db54di;
  };
  protoOf(BlogPostsRequest).h50 = function () {
    return this.reblogInfo;
  };
  protoOf(BlogPostsRequest).i50 = function (_set____db54di) {
    this.notesInfo = _set____db54di;
  };
  protoOf(BlogPostsRequest).j50 = function () {
    return this.notesInfo;
  };
  protoOf(BlogPostsRequest).q4z = function (_set____db54di) {
    this.filter = _set____db54di;
  };
  protoOf(BlogPostsRequest).r4z = function () {
    return this.filter;
  };
  protoOf(BlogPostsRequest).w4z = function (_set____db54di) {
    this.before = _set____db54di;
  };
  protoOf(BlogPostsRequest).x4z = function () {
    return this.before;
  };
  protoOf(BlogPostsRequest).k50 = function (_set____db54di) {
    this.npf = _set____db54di;
  };
  protoOf(BlogPostsRequest).l50 = function () {
    return this.npf;
  };
  protoOf(BlogPostsRequest).m50 = function (_set____db54di) {
    this.types = _set____db54di;
  };
  protoOf(BlogPostsRequest).n50 = function () {
    return this.types;
  };
  protoOf(BlogPostsRequest).z4y = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.q4y(this_0, 'id', this.id);
    this.q4y(this_0, 'tag', this.tag);
    this.q4y(this_0, 'limit', this.limit);
    this.q4y(this_0, 'offset', this.offset);
    this.q4y(this_0, 'reblog_info', this.reblogInfo);
    this.q4y(this_0, 'notes_info', this.notesInfo);
    this.q4y(this_0, 'filter', this.filter);
    this.q4y(this_0, 'before', this.before);
    this.q4y(this_0, 'npf', this.npf);
    var tmp0_safe_receiver = this.types;
    this.q4y(this_0, 'types', tmp0_safe_receiver == null ? null : joinToString(tmp0_safe_receiver, ','));
    return this_0;
  };
  function BlogQueueRequest() {
    this.blogName = null;
    this.limit = null;
    this.offset = null;
    this.filter = null;
  }
  protoOf(BlogQueueRequest).k4z = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogQueueRequest).l4z = function () {
    return this.blogName;
  };
  protoOf(BlogQueueRequest).s4z = function (_set____db54di) {
    this.limit = _set____db54di;
  };
  protoOf(BlogQueueRequest).t4z = function () {
    return this.limit;
  };
  protoOf(BlogQueueRequest).u4z = function (_set____db54di) {
    this.offset = _set____db54di;
  };
  protoOf(BlogQueueRequest).v4z = function () {
    return this.offset;
  };
  protoOf(BlogQueueRequest).q4z = function (_set____db54di) {
    this.filter = _set____db54di;
  };
  protoOf(BlogQueueRequest).r4z = function () {
    return this.filter;
  };
  protoOf(BlogQueueRequest).z4y = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.q4y(this_0, 'limit', this.limit);
    this.q4y(this_0, 'offset', this.offset);
    this.q4y(this_0, 'filter', this.filter);
    return this_0;
  };
  function BlogSubmissionsRequest() {
    this.blogName = null;
    this.offset = null;
    this.filter = null;
  }
  protoOf(BlogSubmissionsRequest).k4z = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogSubmissionsRequest).l4z = function () {
    return this.blogName;
  };
  protoOf(BlogSubmissionsRequest).o50 = function (_set____db54di) {
    this.offset = _set____db54di;
  };
  protoOf(BlogSubmissionsRequest).v4z = function () {
    return this.offset;
  };
  protoOf(BlogSubmissionsRequest).q4z = function (_set____db54di) {
    this.filter = _set____db54di;
  };
  protoOf(BlogSubmissionsRequest).r4z = function () {
    return this.filter;
  };
  protoOf(BlogSubmissionsRequest).z4y = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.q4y(this_0, 'offset', this.offset);
    this.q4y(this_0, 'filter', this.filter);
    return this_0;
  };
  function BlogUpdateInfoRequest() {
    this.blogName = null;
    this.name = null;
    this.title = null;
    this.description = null;
    this.ask = null;
    this.submit = null;
    this.isDescriptionIndexable = null;
    this.isIndexFollowed = null;
  }
  protoOf(BlogUpdateInfoRequest).k4z = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogUpdateInfoRequest).l4z = function () {
    return this.blogName;
  };
  protoOf(BlogUpdateInfoRequest).p50 = function (_set____db54di) {
    this.name = _set____db54di;
  };
  protoOf(BlogUpdateInfoRequest).m = function () {
    return this.name;
  };
  protoOf(BlogUpdateInfoRequest).q50 = function (_set____db54di) {
    this.title = _set____db54di;
  };
  protoOf(BlogUpdateInfoRequest).r50 = function () {
    return this.title;
  };
  protoOf(BlogUpdateInfoRequest).s50 = function (_set____db54di) {
    this.description = _set____db54di;
  };
  protoOf(BlogUpdateInfoRequest).t50 = function () {
    return this.description;
  };
  protoOf(BlogUpdateInfoRequest).u50 = function (_set____db54di) {
    this.ask = _set____db54di;
  };
  protoOf(BlogUpdateInfoRequest).v50 = function () {
    return this.ask;
  };
  protoOf(BlogUpdateInfoRequest).w50 = function (_set____db54di) {
    this.submit = _set____db54di;
  };
  protoOf(BlogUpdateInfoRequest).x50 = function () {
    return this.submit;
  };
  protoOf(BlogUpdateInfoRequest).y50 = function (_set____db54di) {
    this.isDescriptionIndexable = _set____db54di;
  };
  protoOf(BlogUpdateInfoRequest).z50 = function () {
    return this.isDescriptionIndexable;
  };
  protoOf(BlogUpdateInfoRequest).a51 = function (_set____db54di) {
    this.isIndexFollowed = _set____db54di;
  };
  protoOf(BlogUpdateInfoRequest).b51 = function () {
    return this.isIndexFollowed;
  };
  protoOf(BlogUpdateInfoRequest).z4y = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.q4y(this_0, 'name', this.name);
    this.q4y(this_0, 'title', this.title);
    this.q4y(this_0, 'description', this.description);
    this.q4y(this_0, 'ask', this.ask);
    this.q4y(this_0, 'submit', this.submit);
    this.q4y(this_0, 'is_description_indexable', this.isDescriptionIndexable);
    this.q4y(this_0, 'is_index_followed', this.isIndexFollowed);
    return this_0;
  };
  function BlogAudioPostRequest() {
    BlogPostRequest.call(this);
    this.caption = null;
    this.externalUrl = null;
    this.data = null;
  }
  protoOf(BlogAudioPostRequest).c51 = function (_set____db54di) {
    this.caption = _set____db54di;
  };
  protoOf(BlogAudioPostRequest).d51 = function () {
    return this.caption;
  };
  protoOf(BlogAudioPostRequest).e51 = function (_set____db54di) {
    this.externalUrl = _set____db54di;
  };
  protoOf(BlogAudioPostRequest).f51 = function () {
    return this.externalUrl;
  };
  protoOf(BlogAudioPostRequest).g51 = function (_set____db54di) {
    this.data = _set____db54di;
  };
  protoOf(BlogAudioPostRequest).p4y = function () {
    return this.data;
  };
  protoOf(BlogAudioPostRequest).z4y = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.h51();
    this.q4y(this_0, 'caption', this.caption);
    this.q4y(this_0, 'external_url', this.externalUrl);
    this.q4y(this_0, 'data', this.data);
    return this_0;
  };
  function BlogChatPostRequest() {
    BlogPostRequest.call(this);
    this.title = null;
    this.conversation = null;
  }
  protoOf(BlogChatPostRequest).q50 = function (_set____db54di) {
    this.title = _set____db54di;
  };
  protoOf(BlogChatPostRequest).r50 = function () {
    return this.title;
  };
  protoOf(BlogChatPostRequest).v51 = function (_set____db54di) {
    this.conversation = _set____db54di;
  };
  protoOf(BlogChatPostRequest).w51 = function () {
    return this.conversation;
  };
  protoOf(BlogChatPostRequest).z4y = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.h51();
    this.q4y(this_0, 'title', this.title);
    this.q4y(this_0, 'conversation', this.conversation);
    return this_0;
  };
  function BlogDeleteRequest() {
    this.blogName = null;
    this.id = null;
  }
  protoOf(BlogDeleteRequest).k4z = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogDeleteRequest).l4z = function () {
    return this.blogName;
  };
  protoOf(BlogDeleteRequest).i51 = function (_set____db54di) {
    this.id = _set____db54di;
  };
  protoOf(BlogDeleteRequest).d50 = function () {
    return this.id;
  };
  protoOf(BlogDeleteRequest).z4y = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.q4y(this_0, 'id', this.id);
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
  protoOf(BlogLinkPostRequest).q50 = function (_set____db54di) {
    this.title = _set____db54di;
  };
  protoOf(BlogLinkPostRequest).r50 = function () {
    return this.title;
  };
  protoOf(BlogLinkPostRequest).x51 = function (_set____db54di) {
    this.url = _set____db54di;
  };
  protoOf(BlogLinkPostRequest).d3c = function () {
    return this.url;
  };
  protoOf(BlogLinkPostRequest).s50 = function (_set____db54di) {
    this.description = _set____db54di;
  };
  protoOf(BlogLinkPostRequest).t50 = function () {
    return this.description;
  };
  protoOf(BlogLinkPostRequest).y51 = function (_set____db54di) {
    this.thumbnail = _set____db54di;
  };
  protoOf(BlogLinkPostRequest).z51 = function () {
    return this.thumbnail;
  };
  protoOf(BlogLinkPostRequest).a52 = function (_set____db54di) {
    this.excerpt = _set____db54di;
  };
  protoOf(BlogLinkPostRequest).b52 = function () {
    return this.excerpt;
  };
  protoOf(BlogLinkPostRequest).c52 = function (_set____db54di) {
    this.author = _set____db54di;
  };
  protoOf(BlogLinkPostRequest).d52 = function () {
    return this.author;
  };
  protoOf(BlogLinkPostRequest).z4y = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.h51();
    this.q4y(this_0, 'title', this.title);
    this.q4y(this_0, 'url', this.url);
    this.q4y(this_0, 'description', this.description);
    this.q4y(this_0, 'thumbnail', this.thumbnail);
    this.q4y(this_0, 'excerpt', this.excerpt);
    this.q4y(this_0, 'author', this.author);
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
  protoOf(BlogPhotoPostRequest).c51 = function (_set____db54di) {
    this.caption = _set____db54di;
  };
  protoOf(BlogPhotoPostRequest).d51 = function () {
    return this.caption;
  };
  protoOf(BlogPhotoPostRequest).e52 = function (_set____db54di) {
    this.link = _set____db54di;
  };
  protoOf(BlogPhotoPostRequest).f52 = function () {
    return this.link;
  };
  protoOf(BlogPhotoPostRequest).g52 = function (_set____db54di) {
    this.source = _set____db54di;
  };
  protoOf(BlogPhotoPostRequest).g4r = function () {
    return this.source;
  };
  protoOf(BlogPhotoPostRequest).h52 = function (_set____db54di) {
    this.data = _set____db54di;
  };
  protoOf(BlogPhotoPostRequest).p4y = function () {
    return this.data;
  };
  protoOf(BlogPhotoPostRequest).i52 = function (_set____db54di) {
    this.data64 = _set____db54di;
  };
  protoOf(BlogPhotoPostRequest).j52 = function () {
    return this.data64;
  };
  protoOf(BlogPhotoPostRequest).z4y = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.h51();
    this.q4y(this_0, 'caption', this.caption);
    this.q4y(this_0, 'link', this.link);
    this.q4y(this_0, 'source', this.source);
    this.q4y(this_0, 'data64', this.data64);
    return this_0;
  };
  protoOf(BlogPhotoPostRequest).k52 = function () {
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
        this_0.k2(tmp2, value);
      }
    }
    return this_0;
  };
  function BlogPostEditTagsRequest() {
    this.blogName = null;
    this.id = null;
    this.tags = null;
  }
  protoOf(BlogPostEditTagsRequest).k4z = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogPostEditTagsRequest).l4z = function () {
    return this.blogName;
  };
  protoOf(BlogPostEditTagsRequest).i51 = function (_set____db54di) {
    this.id = _set____db54di;
  };
  protoOf(BlogPostEditTagsRequest).d50 = function () {
    return this.id;
  };
  protoOf(BlogPostEditTagsRequest).l52 = function (_set____db54di) {
    this.tags = _set____db54di;
  };
  protoOf(BlogPostEditTagsRequest).k51 = function () {
    return this.tags;
  };
  protoOf(BlogPostEditTagsRequest).z4y = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.q4y(this_0, 'id', this.id);
    var tmp0_safe_receiver = this.tags;
    this.q4y(this_0, 'tags', tmp0_safe_receiver == null ? null : joinToString(tmp0_safe_receiver, ','));
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
  protoOf(BlogPostRequest).k4z = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogPostRequest).l4z = function () {
    return this.blogName;
  };
  protoOf(BlogPostRequest).i51 = function (_set____db54di) {
    this.id = _set____db54di;
  };
  protoOf(BlogPostRequest).d50 = function () {
    return this.id;
  };
  protoOf(BlogPostRequest).a50 = function (_set____db54di) {
    this.type = _set____db54di;
  };
  protoOf(BlogPostRequest).b50 = function () {
    return this.type;
  };
  protoOf(BlogPostRequest).v4y = function (_set____db54di) {
    this.state = _set____db54di;
  };
  protoOf(BlogPostRequest).w4y = function () {
    return this.state;
  };
  protoOf(BlogPostRequest).j51 = function (_set____db54di) {
    this.tags = _set____db54di;
  };
  protoOf(BlogPostRequest).k51 = function () {
    return this.tags;
  };
  protoOf(BlogPostRequest).l51 = function (_set____db54di) {
    this.tweet = _set____db54di;
  };
  protoOf(BlogPostRequest).m51 = function () {
    return this.tweet;
  };
  protoOf(BlogPostRequest).n51 = function (_set____db54di) {
    this.date = _set____db54di;
  };
  protoOf(BlogPostRequest).o51 = function () {
    return this.date;
  };
  protoOf(BlogPostRequest).p51 = function (_set____db54di) {
    this.format = _set____db54di;
  };
  protoOf(BlogPostRequest).q51 = function () {
    return this.format;
  };
  protoOf(BlogPostRequest).r51 = function (_set____db54di) {
    this.slug = _set____db54di;
  };
  protoOf(BlogPostRequest).s51 = function () {
    return this.slug;
  };
  protoOf(BlogPostRequest).t51 = function (_set____db54di) {
    this.nativeInlineImages = _set____db54di;
  };
  protoOf(BlogPostRequest).u51 = function () {
    return this.nativeInlineImages;
  };
  protoOf(BlogPostRequest).h51 = function () {
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
  function BlogPostUpdateRequest() {
    this.blogName = null;
    this.id = null;
    this.type = null;
    this.title = null;
    this.body = null;
    this.slug = null;
    this.startDate = null;
    this.tzAddress = null;
    this.replyKey = null;
    this.tags = null;
    this.data = null;
    this.caption = null;
    this.link = null;
    this.quoteText = null;
    this.quoteSource = null;
    this.linkUrl = null;
    this.linkTitle = null;
    this.linkDescription = null;
    this.chatTitle = null;
    this.chatLabel = null;
    this.chatDialogue = null;
    this.externalUrl = null;
    this.embed = null;
    this.answer = null;
  }
  protoOf(BlogPostUpdateRequest).k4z = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogPostUpdateRequest).l4z = function () {
    return this.blogName;
  };
  protoOf(BlogPostUpdateRequest).i51 = function (_set____db54di) {
    this.id = _set____db54di;
  };
  protoOf(BlogPostUpdateRequest).d50 = function () {
    return this.id;
  };
  protoOf(BlogPostUpdateRequest).a50 = function (_set____db54di) {
    this.type = _set____db54di;
  };
  protoOf(BlogPostUpdateRequest).b50 = function () {
    return this.type;
  };
  protoOf(BlogPostUpdateRequest).q50 = function (_set____db54di) {
    this.title = _set____db54di;
  };
  protoOf(BlogPostUpdateRequest).r50 = function () {
    return this.title;
  };
  protoOf(BlogPostUpdateRequest).m52 = function (_set____db54di) {
    this.body = _set____db54di;
  };
  protoOf(BlogPostUpdateRequest).n52 = function () {
    return this.body;
  };
  protoOf(BlogPostUpdateRequest).r51 = function (_set____db54di) {
    this.slug = _set____db54di;
  };
  protoOf(BlogPostUpdateRequest).s51 = function () {
    return this.slug;
  };
  protoOf(BlogPostUpdateRequest).o52 = function (_set____db54di) {
    this.startDate = _set____db54di;
  };
  protoOf(BlogPostUpdateRequest).p52 = function () {
    return this.startDate;
  };
  protoOf(BlogPostUpdateRequest).q52 = function (_set____db54di) {
    this.tzAddress = _set____db54di;
  };
  protoOf(BlogPostUpdateRequest).r52 = function () {
    return this.tzAddress;
  };
  protoOf(BlogPostUpdateRequest).s52 = function (_set____db54di) {
    this.replyKey = _set____db54di;
  };
  protoOf(BlogPostUpdateRequest).t52 = function () {
    return this.replyKey;
  };
  protoOf(BlogPostUpdateRequest).l52 = function (_set____db54di) {
    this.tags = _set____db54di;
  };
  protoOf(BlogPostUpdateRequest).k51 = function () {
    return this.tags;
  };
  protoOf(BlogPostUpdateRequest).h52 = function (_set____db54di) {
    this.data = _set____db54di;
  };
  protoOf(BlogPostUpdateRequest).p4y = function () {
    return this.data;
  };
  protoOf(BlogPostUpdateRequest).c51 = function (_set____db54di) {
    this.caption = _set____db54di;
  };
  protoOf(BlogPostUpdateRequest).d51 = function () {
    return this.caption;
  };
  protoOf(BlogPostUpdateRequest).e52 = function (_set____db54di) {
    this.link = _set____db54di;
  };
  protoOf(BlogPostUpdateRequest).f52 = function () {
    return this.link;
  };
  protoOf(BlogPostUpdateRequest).u52 = function (_set____db54di) {
    this.quoteText = _set____db54di;
  };
  protoOf(BlogPostUpdateRequest).v52 = function () {
    return this.quoteText;
  };
  protoOf(BlogPostUpdateRequest).w52 = function (_set____db54di) {
    this.quoteSource = _set____db54di;
  };
  protoOf(BlogPostUpdateRequest).x52 = function () {
    return this.quoteSource;
  };
  protoOf(BlogPostUpdateRequest).y52 = function (_set____db54di) {
    this.linkUrl = _set____db54di;
  };
  protoOf(BlogPostUpdateRequest).z52 = function () {
    return this.linkUrl;
  };
  protoOf(BlogPostUpdateRequest).a53 = function (_set____db54di) {
    this.linkTitle = _set____db54di;
  };
  protoOf(BlogPostUpdateRequest).b53 = function () {
    return this.linkTitle;
  };
  protoOf(BlogPostUpdateRequest).c53 = function (_set____db54di) {
    this.linkDescription = _set____db54di;
  };
  protoOf(BlogPostUpdateRequest).d53 = function () {
    return this.linkDescription;
  };
  protoOf(BlogPostUpdateRequest).e53 = function (_set____db54di) {
    this.chatTitle = _set____db54di;
  };
  protoOf(BlogPostUpdateRequest).f53 = function () {
    return this.chatTitle;
  };
  protoOf(BlogPostUpdateRequest).g53 = function (_set____db54di) {
    this.chatLabel = _set____db54di;
  };
  protoOf(BlogPostUpdateRequest).h53 = function () {
    return this.chatLabel;
  };
  protoOf(BlogPostUpdateRequest).i53 = function (_set____db54di) {
    this.chatDialogue = _set____db54di;
  };
  protoOf(BlogPostUpdateRequest).j53 = function () {
    return this.chatDialogue;
  };
  protoOf(BlogPostUpdateRequest).e51 = function (_set____db54di) {
    this.externalUrl = _set____db54di;
  };
  protoOf(BlogPostUpdateRequest).f51 = function () {
    return this.externalUrl;
  };
  protoOf(BlogPostUpdateRequest).k53 = function (_set____db54di) {
    this.embed = _set____db54di;
  };
  protoOf(BlogPostUpdateRequest).l53 = function () {
    return this.embed;
  };
  protoOf(BlogPostUpdateRequest).m53 = function (_set____db54di) {
    this.answer = _set____db54di;
  };
  protoOf(BlogPostUpdateRequest).n53 = function () {
    return this.answer;
  };
  protoOf(BlogPostUpdateRequest).z4y = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.q4y(this_0, 'id', this.id);
    this.q4y(this_0, 'type', this.type);
    this.q4y(this_0, 'title', this.title);
    this.q4y(this_0, 'body', this.body);
    this.q4y(this_0, 'slug', this.slug);
    this.q4y(this_0, 'start_date', this.startDate);
    this.q4y(this_0, 'tz_address', this.tzAddress);
    this.q4y(this_0, 'reply_key', this.replyKey);
    var tmp0_safe_receiver = this.tags;
    this.q4y(this_0, 'tags', tmp0_safe_receiver == null ? null : joinToString(tmp0_safe_receiver, ','));
    this.q4y(this_0, 'caption', this.caption);
    this.q4y(this_0, 'link', this.link);
    this.q4y(this_0, 'quote_text', this.quoteText);
    this.q4y(this_0, 'quote_source', this.quoteSource);
    this.q4y(this_0, 'link_url', this.linkUrl);
    this.q4y(this_0, 'link_title', this.linkTitle);
    this.q4y(this_0, 'link_description', this.linkDescription);
    this.q4y(this_0, 'chat_title', this.chatTitle);
    this.q4y(this_0, 'chat_label', this.chatLabel);
    this.q4y(this_0, 'chat_dialogue', this.chatDialogue);
    this.q4y(this_0, 'external_url', this.externalUrl);
    this.q4y(this_0, 'embed', this.embed);
    this.q4y(this_0, 'answer', this.answer);
    return this_0;
  };
  protoOf(BlogPostUpdateRequest).toFileMap = function () {
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    var this_0 = this.data;
    var tmp;
    if (this_0 == null) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isEmpty' call
      tmp = this_0.length === 0;
    }
    if (tmp) {
      // Inline function 'kotlin.collections.mapOf' call
      return emptyMap();
    }
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_1 = ensureNotNull(this.data);
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$(this_1.length);
    var index = 0;
    var inductionVariable = 0;
    var last = this_1.length;
    while (inductionVariable < last) {
      var item = this_1[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var tmp$ret$5 = to('data[' + _unary__edvuaz + ']', to(item.name, item.data));
      destination.c1(tmp$ret$5);
    }
    return toMap(destination);
  };
  function BlogQuotePostRequest() {
    BlogPostRequest.call(this);
    this.quote = null;
    this.source = null;
  }
  protoOf(BlogQuotePostRequest).o53 = function (_set____db54di) {
    this.quote = _set____db54di;
  };
  protoOf(BlogQuotePostRequest).p53 = function () {
    return this.quote;
  };
  protoOf(BlogQuotePostRequest).g52 = function (_set____db54di) {
    this.source = _set____db54di;
  };
  protoOf(BlogQuotePostRequest).g4r = function () {
    return this.source;
  };
  protoOf(BlogQuotePostRequest).z4y = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.h51();
    this.q4y(this_0, 'quote', this.quote);
    this.q4y(this_0, 'source', this.source);
    return this_0;
  };
  function BlogReblogRequest() {
    this.blogName = null;
    this.id = null;
    this.reblogKey = null;
    this.comment = null;
    this.nativeInlineImages = null;
  }
  protoOf(BlogReblogRequest).k4z = function (_set____db54di) {
    this.blogName = _set____db54di;
  };
  protoOf(BlogReblogRequest).l4z = function () {
    return this.blogName;
  };
  protoOf(BlogReblogRequest).i51 = function (_set____db54di) {
    this.id = _set____db54di;
  };
  protoOf(BlogReblogRequest).d50 = function () {
    return this.id;
  };
  protoOf(BlogReblogRequest).q53 = function (_set____db54di) {
    this.reblogKey = _set____db54di;
  };
  protoOf(BlogReblogRequest).r53 = function () {
    return this.reblogKey;
  };
  protoOf(BlogReblogRequest).s53 = function (_set____db54di) {
    this.comment = _set____db54di;
  };
  protoOf(BlogReblogRequest).t53 = function () {
    return this.comment;
  };
  protoOf(BlogReblogRequest).t51 = function (_set____db54di) {
    this.nativeInlineImages = _set____db54di;
  };
  protoOf(BlogReblogRequest).u51 = function () {
    return this.nativeInlineImages;
  };
  protoOf(BlogReblogRequest).z4y = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.q4y(this_0, 'id', this.id);
    this.q4y(this_0, 'reblog_key', this.reblogKey);
    this.q4y(this_0, 'comment', this.comment);
    this.q4y(this_0, 'native_inline_images', this.nativeInlineImages);
    return this_0;
  };
  function BlogTextPostRequest() {
    BlogPostRequest.call(this);
    this.title = null;
    this.body = null;
  }
  protoOf(BlogTextPostRequest).q50 = function (_set____db54di) {
    this.title = _set____db54di;
  };
  protoOf(BlogTextPostRequest).r50 = function () {
    return this.title;
  };
  protoOf(BlogTextPostRequest).m52 = function (_set____db54di) {
    this.body = _set____db54di;
  };
  protoOf(BlogTextPostRequest).n52 = function () {
    return this.body;
  };
  protoOf(BlogTextPostRequest).z4y = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.h51();
    this.q4y(this_0, 'title', this.title);
    this.q4y(this_0, 'body', this.body);
    return this_0;
  };
  function BlogVideoPostRequest() {
    BlogPostRequest.call(this);
    this.caption = null;
    this.embed = null;
    this.data = null;
  }
  protoOf(BlogVideoPostRequest).c51 = function (_set____db54di) {
    this.caption = _set____db54di;
  };
  protoOf(BlogVideoPostRequest).d51 = function () {
    return this.caption;
  };
  protoOf(BlogVideoPostRequest).k53 = function (_set____db54di) {
    this.embed = _set____db54di;
  };
  protoOf(BlogVideoPostRequest).l53 = function () {
    return this.embed;
  };
  protoOf(BlogVideoPostRequest).g51 = function (_set____db54di) {
    this.data = _set____db54di;
  };
  protoOf(BlogVideoPostRequest).p4y = function () {
    return this.data;
  };
  protoOf(BlogVideoPostRequest).z4y = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.h51();
    this.q4y(this_0, 'caption', this.caption);
    this.q4y(this_0, 'embed', this.embed);
    this.q4y(this_0, 'data', this.data);
    return this_0;
  };
  function TaggedRequest() {
    this.tag = null;
    this.before = null;
    this.limit = null;
    this.filter = null;
  }
  protoOf(TaggedRequest).e50 = function (_set____db54di) {
    this.tag = _set____db54di;
  };
  protoOf(TaggedRequest).f50 = function () {
    return this.tag;
  };
  protoOf(TaggedRequest).w4z = function (_set____db54di) {
    this.before = _set____db54di;
  };
  protoOf(TaggedRequest).x4z = function () {
    return this.before;
  };
  protoOf(TaggedRequest).s4z = function (_set____db54di) {
    this.limit = _set____db54di;
  };
  protoOf(TaggedRequest).t4z = function () {
    return this.limit;
  };
  protoOf(TaggedRequest).q4z = function (_set____db54di) {
    this.filter = _set____db54di;
  };
  protoOf(TaggedRequest).r4z = function () {
    return this.filter;
  };
  protoOf(TaggedRequest).z4y = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.q4y(this_0, 'tag', this.tag);
    this.q4y(this_0, 'before', this.before);
    this.q4y(this_0, 'limit', this.limit);
    this.q4y(this_0, 'filter', this.filter);
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
  protoOf(UserDashboardRequest).s4z = function (_set____db54di) {
    this.limit = _set____db54di;
  };
  protoOf(UserDashboardRequest).t4z = function () {
    return this.limit;
  };
  protoOf(UserDashboardRequest).u4z = function (_set____db54di) {
    this.offset = _set____db54di;
  };
  protoOf(UserDashboardRequest).v4z = function () {
    return this.offset;
  };
  protoOf(UserDashboardRequest).a50 = function (_set____db54di) {
    this.type = _set____db54di;
  };
  protoOf(UserDashboardRequest).b50 = function () {
    return this.type;
  };
  protoOf(UserDashboardRequest).u53 = function (_set____db54di) {
    this.sinceId = _set____db54di;
  };
  protoOf(UserDashboardRequest).v53 = function () {
    return this.sinceId;
  };
  protoOf(UserDashboardRequest).g50 = function (_set____db54di) {
    this.reblogInfo = _set____db54di;
  };
  protoOf(UserDashboardRequest).h50 = function () {
    return this.reblogInfo;
  };
  protoOf(UserDashboardRequest).i50 = function (_set____db54di) {
    this.notesInfo = _set____db54di;
  };
  protoOf(UserDashboardRequest).j50 = function () {
    return this.notesInfo;
  };
  protoOf(UserDashboardRequest).k50 = function (_set____db54di) {
    this.npf = _set____db54di;
  };
  protoOf(UserDashboardRequest).l50 = function () {
    return this.npf;
  };
  protoOf(UserDashboardRequest).z4y = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.q4y(this_0, 'limit', this.limit);
    this.q4y(this_0, 'offset', this.offset);
    this.q4y(this_0, 'type', this.type);
    this.q4y(this_0, 'since_id', this.sinceId);
    this.q4y(this_0, 'reblog_info', this.reblogInfo);
    this.q4y(this_0, 'notes_info', this.notesInfo);
    this.q4y(this_0, 'npf', this.npf);
    return this_0;
  };
  function UserFollowRequest() {
    this.url = null;
    this.email = null;
  }
  protoOf(UserFollowRequest).x51 = function (_set____db54di) {
    this.url = _set____db54di;
  };
  protoOf(UserFollowRequest).d3c = function () {
    return this.url;
  };
  protoOf(UserFollowRequest).w53 = function (_set____db54di) {
    this.email = _set____db54di;
  };
  protoOf(UserFollowRequest).x53 = function () {
    return this.email;
  };
  protoOf(UserFollowRequest).z4y = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.q4y(this_0, 'url', this.url);
    this.q4y(this_0, 'email', this.email);
    return this_0;
  };
  function UserFollowingRequest() {
    this.limit = null;
    this.offset = null;
  }
  protoOf(UserFollowingRequest).s4z = function (_set____db54di) {
    this.limit = _set____db54di;
  };
  protoOf(UserFollowingRequest).t4z = function () {
    return this.limit;
  };
  protoOf(UserFollowingRequest).u4z = function (_set____db54di) {
    this.offset = _set____db54di;
  };
  protoOf(UserFollowingRequest).v4z = function () {
    return this.offset;
  };
  protoOf(UserFollowingRequest).z4y = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.q4y(this_0, 'limit', this.limit);
    this.q4y(this_0, 'offset', this.offset);
    return this_0;
  };
  function UserLikeRequest() {
    this.id = null;
    this.reblogKey = null;
  }
  protoOf(UserLikeRequest).i51 = function (_set____db54di) {
    this.id = _set____db54di;
  };
  protoOf(UserLikeRequest).d50 = function () {
    return this.id;
  };
  protoOf(UserLikeRequest).q53 = function (_set____db54di) {
    this.reblogKey = _set____db54di;
  };
  protoOf(UserLikeRequest).r53 = function () {
    return this.reblogKey;
  };
  protoOf(UserLikeRequest).z4y = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.q4y(this_0, 'id', this.id);
    this.q4y(this_0, 'reblog_key', this.reblogKey);
    return this_0;
  };
  function UserLikesRequest() {
    this.limit = null;
    this.offset = null;
    this.before = null;
    this.after = null;
  }
  protoOf(UserLikesRequest).s4z = function (_set____db54di) {
    this.limit = _set____db54di;
  };
  protoOf(UserLikesRequest).t4z = function () {
    return this.limit;
  };
  protoOf(UserLikesRequest).u4z = function (_set____db54di) {
    this.offset = _set____db54di;
  };
  protoOf(UserLikesRequest).v4z = function () {
    return this.offset;
  };
  protoOf(UserLikesRequest).w4z = function (_set____db54di) {
    this.before = _set____db54di;
  };
  protoOf(UserLikesRequest).x4z = function () {
    return this.before;
  };
  protoOf(UserLikesRequest).y4z = function (_set____db54di) {
    this.after = _set____db54di;
  };
  protoOf(UserLikesRequest).z4z = function () {
    return this.after;
  };
  protoOf(UserLikesRequest).z4y = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.q4y(this_0, 'limit', this.limit);
    this.q4y(this_0, 'offset', this.offset);
    this.q4y(this_0, 'before', this.before);
    this.q4y(this_0, 'after', this.after);
    return this_0;
  };
  function UserUnfollowRequest() {
    this.url = null;
  }
  protoOf(UserUnfollowRequest).x51 = function (_set____db54di) {
    this.url = _set____db54di;
  };
  protoOf(UserUnfollowRequest).d3c = function () {
    return this.url;
  };
  protoOf(UserUnfollowRequest).z4y = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.q4y(this_0, 'url', this.url);
    return this_0;
  };
  function UserUnlikeRequest() {
    this.id = null;
    this.reblogKey = null;
  }
  protoOf(UserUnlikeRequest).i51 = function (_set____db54di) {
    this.id = _set____db54di;
  };
  protoOf(UserUnlikeRequest).d50 = function () {
    return this.id;
  };
  protoOf(UserUnlikeRequest).q53 = function (_set____db54di) {
    this.reblogKey = _set____db54di;
  };
  protoOf(UserUnlikeRequest).r53 = function () {
    return this.reblogKey;
  };
  protoOf(UserUnlikeRequest).z4y = function () {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$();
    this.q4y(this_0, 'id', this.id);
    this.q4y(this_0, 'reblog_key', this.reblogKey);
    return this_0;
  };
  function $serializer_init_$Init$(typeSerial0, $this) {
    $serializer.call($this);
    $this.z53_1 = typeSerial0;
    return $this;
  }
  function $serializer_init_$Create$(typeSerial0) {
    return $serializer_init_$Init$(typeSerial0, objectCreate(protoOf($serializer)));
  }
  function Companion() {
    Companion_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.Body', null, 2);
    tmp0_serialDesc.ew('meta', true);
    tmp0_serialDesc.ew('response', true);
    this.a54_1 = tmp0_serialDesc;
  }
  protoOf(Companion).b54 = function (typeSerial0) {
    return $serializer_init_$Create$(typeSerial0);
  };
  protoOf(Companion).cx = function (typeParamsSerializers) {
    return this.b54(typeParamsSerializers[0]);
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.Body', this, 2);
    tmp0_serialDesc.ew('meta', true);
    tmp0_serialDesc.ew('response', true);
    this.y53_1 = tmp0_serialDesc;
  }
  protoOf($serializer).on = function (decoder) {
    var tmp0_desc = this.y53_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.mq(tmp0_desc);
    if (tmp6_input.cr()) {
      tmp4_local0 = tmp6_input.ar(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.ar(tmp0_desc, 1, this.z53_1, tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.ar(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.ar(tmp0_desc, 1, this.z53_1, tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.nq(tmp0_desc);
    return Body_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer).nn = function () {
    return this.y53_1;
  };
  protoOf($serializer).tw = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance()), get_nullable(this.z53_1)];
  };
  protoOf($serializer).uw = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.z53_1];
  };
  function Body_init_$Init$(seen0, meta, response, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, Companion_getInstance_0().a54_1);
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
  protoOf(Body).c54 = function (_set____db54di) {
    this.meta = _set____db54di;
  };
  protoOf(Body).d54 = function () {
    return this.meta;
  };
  protoOf(Body).e54 = function (_set____db54di) {
    this.response = _set____db54di;
  };
  protoOf(Body).l39 = function () {
    return this.response;
  };
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.Meta', this, 2);
    tmp0_serialDesc.ew('status', true);
    tmp0_serialDesc.ew('msg', true);
    this.f54_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).on = function (decoder) {
    var tmp0_desc = this.f54_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.mq(tmp0_desc);
    if (tmp6_input.cr()) {
      tmp4_local0 = tmp6_input.ar(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.ar(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.nq(tmp0_desc);
    return Meta_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_0).nn = function () {
    return this.f54_1;
  };
  protoOf($serializer_0).tw = function () {
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
      throwMissingFieldException(seen0, 0, $serializer_getInstance().f54_1);
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
    this.status = null;
    this.msg = null;
  }
  protoOf(Meta).g54 = function (_set____db54di) {
    this.status = _set____db54di;
  };
  protoOf(Meta).l3c = function () {
    return this.status;
  };
  protoOf(Meta).h54 = function (_set____db54di) {
    this.msg = _set____db54di;
  };
  protoOf(Meta).i54 = function () {
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
  protoOf(Response).j54 = function (_set____db54di) {
    this.data = _set____db54di;
  };
  protoOf(Response).p4y = function () {
    return this.data;
  };
  protoOf(Response).k54 = function (_set____db54di) {
    this.json = _set____db54di;
  };
  protoOf(Response).i4k = function () {
    return this.json;
  };
  protoOf(Response).l3c = function () {
    return this.status;
  };
  protoOf(Response).e = function () {
    return this.message;
  };
  protoOf(Response).ke = function () {
    return this.data;
  };
  protoOf(Response).le = function () {
    return this.json;
  };
  protoOf(Response).h49 = function () {
    return this.status;
  };
  protoOf(Response).l54 = function () {
    return this.message;
  };
  protoOf(Response).m54 = function (data, json, status, message) {
    return new Response(data, json, status, message);
  };
  protoOf(Response).copy = function (data, json, status, message, $super) {
    data = data === VOID ? this.data : data;
    json = json === VOID ? this.json : json;
    status = status === VOID ? this.status : status;
    message = message === VOID ? this.message : message;
    return $super === VOID ? this.m54(data, json, status, message) : $super.m54.call(this, data, json, status, message);
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
  protoOf(ResponseUnit).k54 = function (_set____db54di) {
    this.json = _set____db54di;
  };
  protoOf(ResponseUnit).i4k = function () {
    return this.json;
  };
  protoOf(ResponseUnit).l3c = function () {
    return this.status;
  };
  protoOf(ResponseUnit).e = function () {
    return this.message;
  };
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function $serializer_1() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.auth.AuthOAuth2TokenResponse', this, 5);
    tmp0_serialDesc.ew('access_token', true);
    tmp0_serialDesc.ew('expires_in', true);
    tmp0_serialDesc.ew('token_type', true);
    tmp0_serialDesc.ew('scope', true);
    tmp0_serialDesc.ew('refresh_token', true);
    this.n54_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).on = function (decoder) {
    var tmp0_desc = this.n54_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.mq(tmp0_desc);
    if (tmp9_input.cr()) {
      tmp4_local0 = tmp9_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.ar(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.ar(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.ar(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.ar(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.nq(tmp0_desc);
    return AuthOAuth2TokenResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_1).nn = function () {
    return this.n54_1;
  };
  protoOf($serializer_1).tw = function () {
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
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().n54_1);
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
    this.accessToken = null;
    this.expiresIn = null;
    this.tokenType = null;
    this.scope = null;
    this.refreshToken = null;
  }
  protoOf(AuthOAuth2TokenResponse).o54 = function (_set____db54di) {
    this.accessToken = _set____db54di;
  };
  protoOf(AuthOAuth2TokenResponse).p54 = function () {
    return this.accessToken;
  };
  protoOf(AuthOAuth2TokenResponse).q54 = function (_set____db54di) {
    this.expiresIn = _set____db54di;
  };
  protoOf(AuthOAuth2TokenResponse).r54 = function () {
    return this.expiresIn;
  };
  protoOf(AuthOAuth2TokenResponse).s54 = function (_set____db54di) {
    this.tokenType = _set____db54di;
  };
  protoOf(AuthOAuth2TokenResponse).t54 = function () {
    return this.tokenType;
  };
  protoOf(AuthOAuth2TokenResponse).u54 = function (_set____db54di) {
    this.scope = _set____db54di;
  };
  protoOf(AuthOAuth2TokenResponse).y4y = function () {
    return this.scope;
  };
  protoOf(AuthOAuth2TokenResponse).g4z = function (_set____db54di) {
    this.refreshToken = _set____db54di;
  };
  protoOf(AuthOAuth2TokenResponse).h4z = function () {
    return this.refreshToken;
  };
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function $serializer_2() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogBannerResponse', this, 3);
    tmp0_serialDesc.ew('banner', true);
    tmp0_serialDesc.ew('height', true);
    tmp0_serialDesc.ew('width', true);
    this.v54_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).on = function (decoder) {
    var tmp0_desc = this.v54_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.mq(tmp0_desc);
    if (tmp7_input.cr()) {
      tmp4_local0 = tmp7_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.ar(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.ar(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.ar(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.ar(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.nq(tmp0_desc);
    return BlogBannerResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_2).nn = function () {
    return this.v54_1;
  };
  protoOf($serializer_2).tw = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_2();
    return $serializer_instance_1;
  }
  function BlogBannerResponse_init_$Init$(seen0, banner, height, width, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_1().v54_1);
    }
    if (0 === (seen0 & 1))
      $this.banner = null;
    else
      $this.banner = banner;
    if (0 === (seen0 & 2))
      $this.height = null;
    else
      $this.height = height;
    if (0 === (seen0 & 4))
      $this.width = null;
    else
      $this.width = width;
    return $this;
  }
  function BlogBannerResponse_init_$Create$(seen0, banner, height, width, serializationConstructorMarker) {
    return BlogBannerResponse_init_$Init$(seen0, banner, height, width, serializationConstructorMarker, objectCreate(protoOf(BlogBannerResponse)));
  }
  function BlogBannerResponse() {
    this.banner = null;
    this.height = null;
    this.width = null;
  }
  protoOf(BlogBannerResponse).w54 = function (_set____db54di) {
    this.banner = _set____db54di;
  };
  protoOf(BlogBannerResponse).x54 = function () {
    return this.banner;
  };
  protoOf(BlogBannerResponse).y54 = function (_set____db54di) {
    this.height = _set____db54di;
  };
  protoOf(BlogBannerResponse).z54 = function () {
    return this.height;
  };
  protoOf(BlogBannerResponse).a55 = function (_set____db54di) {
    this.width = _set____db54di;
  };
  protoOf(BlogBannerResponse).b55 = function () {
    return this.width;
  };
  function BlogFollowersResponse$Companion$$childSerializers$_anonymous__jotz7a() {
    return new ReferenceArraySerializer(getKClass(FollowerUser), $serializer_getInstance_34());
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.c55_1 = [null, lazy(tmp_0, BlogFollowersResponse$Companion$$childSerializers$_anonymous__jotz7a)];
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function $serializer_3() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogFollowersResponse', this, 2);
    tmp0_serialDesc.ew('total_users', true);
    tmp0_serialDesc.ew('users', true);
    this.d55_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).on = function (decoder) {
    var tmp0_desc = this.d55_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.mq(tmp0_desc);
    var tmp7_cached = Companion_getInstance_4().c55_1;
    if (tmp6_input.cr()) {
      tmp4_local0 = tmp6_input.ar(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.ar(tmp0_desc, 1, tmp7_cached[1].n1(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.ar(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.ar(tmp0_desc, 1, tmp7_cached[1].n1(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.nq(tmp0_desc);
    return BlogFollowersResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_3).nn = function () {
    return this.d55_1;
  };
  protoOf($serializer_3).tw = function () {
    var tmp0_cached = Companion_getInstance_4().c55_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[1].n1())];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_3();
    return $serializer_instance_2;
  }
  function BlogFollowersResponse_init_$Init$(seen0, totalUsers, users, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_2().d55_1);
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
    Companion_getInstance_4();
    this.totalUsers = null;
    this.users = null;
  }
  protoOf(BlogFollowersResponse).e55 = function (_set____db54di) {
    this.totalUsers = _set____db54di;
  };
  protoOf(BlogFollowersResponse).f55 = function () {
    return this.totalUsers;
  };
  protoOf(BlogFollowersResponse).g55 = function (_set____db54di) {
    this.users = _set____db54di;
  };
  protoOf(BlogFollowersResponse).h55 = function () {
    return this.users;
  };
  function BlogFollowingResponse$Companion$$childSerializers$_anonymous__1p0ydi() {
    return new ReferenceArraySerializer(getKClass(Blog), $serializer_getInstance_14());
  }
  function Companion_4() {
    Companion_instance_4 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.i55_1 = [lazy(tmp_0, BlogFollowingResponse$Companion$$childSerializers$_anonymous__1p0ydi), null];
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function $serializer_4() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogFollowingResponse', this, 2);
    tmp0_serialDesc.ew('blogs', true);
    tmp0_serialDesc.ew('total_blogs', true);
    this.j55_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).on = function (decoder) {
    var tmp0_desc = this.j55_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.mq(tmp0_desc);
    var tmp7_cached = Companion_getInstance_5().i55_1;
    if (tmp6_input.cr()) {
      tmp4_local0 = tmp6_input.ar(tmp0_desc, 0, tmp7_cached[0].n1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.ar(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.ar(tmp0_desc, 0, tmp7_cached[0].n1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.ar(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.nq(tmp0_desc);
    return BlogFollowingResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_4).nn = function () {
    return this.j55_1;
  };
  protoOf($serializer_4).tw = function () {
    var tmp0_cached = Companion_getInstance_5().i55_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].n1()), get_nullable(IntSerializer_getInstance())];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_4();
    return $serializer_instance_3;
  }
  function BlogFollowingResponse_init_$Init$(seen0, blogs, totalBlogs, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_3().j55_1);
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
    Companion_getInstance_5();
    this.blogs = null;
    this.totalBlogs = null;
  }
  protoOf(BlogFollowingResponse).k55 = function (_set____db54di) {
    this.blogs = _set____db54di;
  };
  protoOf(BlogFollowingResponse).l55 = function () {
    return this.blogs;
  };
  protoOf(BlogFollowingResponse).m55 = function (_set____db54di) {
    this.totalBlogs = _set____db54di;
  };
  protoOf(BlogFollowingResponse).n55 = function () {
    return this.totalBlogs;
  };
  function Companion_5() {
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    return Companion_instance_5;
  }
  function $serializer_5() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogInfoResponse', this, 1);
    tmp0_serialDesc.ew('blog', true);
    this.o55_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).on = function (decoder) {
    var tmp0_desc = this.o55_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.mq(tmp0_desc);
    if (tmp5_input.cr()) {
      tmp4_local0 = tmp5_input.ar(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.ar(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.nq(tmp0_desc);
    return BlogInfoResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_5).nn = function () {
    return this.o55_1;
  };
  protoOf($serializer_5).tw = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_14())];
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_5();
    return $serializer_instance_4;
  }
  function BlogInfoResponse_init_$Init$(seen0, blog, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_4().o55_1);
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
    this.blog = null;
  }
  protoOf(BlogInfoResponse).p55 = function (_set____db54di) {
    this.blog = _set____db54di;
  };
  protoOf(BlogInfoResponse).q55 = function () {
    return this.blog;
  };
  function BlogLikesResponse$Companion$$childSerializers$_anonymous__2jkvu9() {
    return new ReferenceArraySerializer(getKClass(Post), PostSerializer_getInstance());
  }
  function Companion_6() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.r55_1 = [lazy(tmp_0, BlogLikesResponse$Companion$$childSerializers$_anonymous__2jkvu9), null];
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function $serializer_6() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogLikesResponse', this, 2);
    tmp0_serialDesc.ew('liked_posts', true);
    tmp0_serialDesc.ew('liked_count', true);
    this.s55_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).on = function (decoder) {
    var tmp0_desc = this.s55_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.mq(tmp0_desc);
    var tmp7_cached = Companion_getInstance_7().r55_1;
    if (tmp6_input.cr()) {
      tmp4_local0 = tmp6_input.ar(tmp0_desc, 0, tmp7_cached[0].n1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.ar(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.ar(tmp0_desc, 0, tmp7_cached[0].n1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.ar(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.nq(tmp0_desc);
    return BlogLikesResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_6).nn = function () {
    return this.s55_1;
  };
  protoOf($serializer_6).tw = function () {
    var tmp0_cached = Companion_getInstance_7().r55_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].n1()), get_nullable(IntSerializer_getInstance())];
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_6();
    return $serializer_instance_5;
  }
  function BlogLikesResponse_init_$Init$(seen0, likedPosts, likedCount, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_5().s55_1);
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
    Companion_getInstance_7();
    this.likedPosts = null;
    this.likedCount = null;
  }
  protoOf(BlogLikesResponse).t55 = function (_set____db54di) {
    this.likedPosts = _set____db54di;
  };
  protoOf(BlogLikesResponse).u55 = function () {
    return this.likedPosts;
  };
  protoOf(BlogLikesResponse).v55 = function (_set____db54di) {
    this.likedCount = _set____db54di;
  };
  protoOf(BlogLikesResponse).w55 = function () {
    return this.likedCount;
  };
  function BlogPostsResponse$Companion$$childSerializers$_anonymous__tab7i0() {
    return new ReferenceArraySerializer(getKClass(Post), PostSerializer_getInstance());
  }
  function Companion_7() {
    Companion_instance_7 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.x55_1 = [null, lazy(tmp_0, BlogPostsResponse$Companion$$childSerializers$_anonymous__tab7i0), null];
  }
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function $serializer_7() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogPostsResponse', this, 3);
    tmp0_serialDesc.ew('blog', true);
    tmp0_serialDesc.ew('posts', true);
    tmp0_serialDesc.ew('total_posts', true);
    this.y55_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).on = function (decoder) {
    var tmp0_desc = this.y55_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.mq(tmp0_desc);
    var tmp8_cached = Companion_getInstance_8().x55_1;
    if (tmp7_input.cr()) {
      tmp4_local0 = tmp7_input.ar(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.ar(tmp0_desc, 1, tmp8_cached[1].n1(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.ar(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.ar(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.ar(tmp0_desc, 1, tmp8_cached[1].n1(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.ar(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.nq(tmp0_desc);
    return BlogPostsResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_7).nn = function () {
    return this.y55_1;
  };
  protoOf($serializer_7).tw = function () {
    var tmp0_cached = Companion_getInstance_8().x55_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_14()), get_nullable(tmp0_cached[1].n1()), get_nullable(IntSerializer_getInstance())];
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_7();
    return $serializer_instance_6;
  }
  function BlogPostsResponse_init_$Init$(seen0, blog, posts, totalPosts, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_6().y55_1);
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
    Companion_getInstance_8();
    this.blog = null;
    this.posts = null;
    this.totalPosts = null;
  }
  protoOf(BlogPostsResponse).p55 = function (_set____db54di) {
    this.blog = _set____db54di;
  };
  protoOf(BlogPostsResponse).q55 = function () {
    return this.blog;
  };
  protoOf(BlogPostsResponse).z55 = function (_set____db54di) {
    this.posts = _set____db54di;
  };
  protoOf(BlogPostsResponse).a56 = function () {
    return this.posts;
  };
  protoOf(BlogPostsResponse).b56 = function (_set____db54di) {
    this.totalPosts = _set____db54di;
  };
  protoOf(BlogPostsResponse).c56 = function () {
    return this.totalPosts;
  };
  function Companion_8() {
  }
  var Companion_instance_8;
  function Companion_getInstance_9() {
    return Companion_instance_8;
  }
  function $serializer_8() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.blog.BlogUpdatedInfoResponse', this, 1);
    tmp0_serialDesc.ew('blog', true);
    this.d56_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).on = function (decoder) {
    var tmp0_desc = this.d56_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.mq(tmp0_desc);
    if (tmp5_input.cr()) {
      tmp4_local0 = tmp5_input.ar(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.ar(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.nq(tmp0_desc);
    return BlogUpdatedInfoResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_8).nn = function () {
    return this.d56_1;
  };
  protoOf($serializer_8).tw = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_14())];
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_8();
    return $serializer_instance_7;
  }
  function BlogUpdatedInfoResponse_init_$Init$(seen0, blog, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_7().d56_1);
    }
    if (0 === (seen0 & 1))
      $this.blog = null;
    else
      $this.blog = blog;
    return $this;
  }
  function BlogUpdatedInfoResponse_init_$Create$(seen0, blog, serializationConstructorMarker) {
    return BlogUpdatedInfoResponse_init_$Init$(seen0, blog, serializationConstructorMarker, objectCreate(protoOf(BlogUpdatedInfoResponse)));
  }
  function BlogUpdatedInfoResponse() {
    this.blog = null;
  }
  protoOf(BlogUpdatedInfoResponse).p55 = function (_set____db54di) {
    this.blog = _set____db54di;
  };
  protoOf(BlogUpdatedInfoResponse).q55 = function () {
    return this.blog;
  };
  function UserDashboardResponse$Companion$$childSerializers$_anonymous__a2e48w() {
    return new ReferenceArraySerializer(getKClass(Post), PostSerializer_getInstance());
  }
  function Companion_9() {
    Companion_instance_9 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.e56_1 = [lazy(tmp_0, UserDashboardResponse$Companion$$childSerializers$_anonymous__a2e48w)];
  }
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function $serializer_9() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.user.UserDashboardResponse', this, 1);
    tmp0_serialDesc.ew('posts', true);
    this.f56_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).on = function (decoder) {
    var tmp0_desc = this.f56_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.mq(tmp0_desc);
    var tmp6_cached = Companion_getInstance_10().e56_1;
    if (tmp5_input.cr()) {
      tmp4_local0 = tmp5_input.ar(tmp0_desc, 0, tmp6_cached[0].n1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.ar(tmp0_desc, 0, tmp6_cached[0].n1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.nq(tmp0_desc);
    return UserDashboardResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_9).nn = function () {
    return this.f56_1;
  };
  protoOf($serializer_9).tw = function () {
    var tmp0_cached = Companion_getInstance_10().e56_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].n1())];
  };
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_9();
    return $serializer_instance_8;
  }
  function UserDashboardResponse_init_$Init$(seen0, posts, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_8().f56_1);
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
    Companion_getInstance_10();
    this.posts = null;
  }
  protoOf(UserDashboardResponse).z55 = function (_set____db54di) {
    this.posts = _set____db54di;
  };
  protoOf(UserDashboardResponse).a56 = function () {
    return this.posts;
  };
  function UserFollowingResponse$Companion$$childSerializers$_anonymous__uj1vy5() {
    return new ReferenceArraySerializer(getKClass(Blog), $serializer_getInstance_14());
  }
  function Companion_10() {
    Companion_instance_10 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.g56_1 = [null, lazy(tmp_0, UserFollowingResponse$Companion$$childSerializers$_anonymous__uj1vy5)];
  }
  var Companion_instance_10;
  function Companion_getInstance_11() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function $serializer_10() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.user.UserFollowingResponse', this, 2);
    tmp0_serialDesc.ew('total_blogs', true);
    tmp0_serialDesc.ew('blogs', true);
    this.h56_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).on = function (decoder) {
    var tmp0_desc = this.h56_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.mq(tmp0_desc);
    var tmp7_cached = Companion_getInstance_11().g56_1;
    if (tmp6_input.cr()) {
      tmp4_local0 = tmp6_input.ar(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.ar(tmp0_desc, 1, tmp7_cached[1].n1(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.ar(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.ar(tmp0_desc, 1, tmp7_cached[1].n1(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.nq(tmp0_desc);
    return UserFollowingResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_10).nn = function () {
    return this.h56_1;
  };
  protoOf($serializer_10).tw = function () {
    var tmp0_cached = Companion_getInstance_11().g56_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[1].n1())];
  };
  var $serializer_instance_9;
  function $serializer_getInstance_9() {
    if ($serializer_instance_9 == null)
      new $serializer_10();
    return $serializer_instance_9;
  }
  function UserFollowingResponse_init_$Init$(seen0, totalBlog, blogs, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_9().h56_1);
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
    Companion_getInstance_11();
    this.totalBlog = null;
    this.blogs = null;
  }
  protoOf(UserFollowingResponse).i56 = function (_set____db54di) {
    this.totalBlog = _set____db54di;
  };
  protoOf(UserFollowingResponse).j56 = function () {
    return this.totalBlog;
  };
  protoOf(UserFollowingResponse).k55 = function (_set____db54di) {
    this.blogs = _set____db54di;
  };
  protoOf(UserFollowingResponse).l55 = function () {
    return this.blogs;
  };
  function UserLikesResponse$Companion$$childSerializers$_anonymous__py82i0() {
    return new ReferenceArraySerializer(getKClass(Post), PostSerializer_getInstance());
  }
  function Companion_11() {
    Companion_instance_11 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.k56_1 = [lazy(tmp_0, UserLikesResponse$Companion$$childSerializers$_anonymous__py82i0), null];
  }
  var Companion_instance_11;
  function Companion_getInstance_12() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function $serializer_11() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.user.UserLikesResponse', this, 2);
    tmp0_serialDesc.ew('liked_posts', true);
    tmp0_serialDesc.ew('liked_count', true);
    this.l56_1 = tmp0_serialDesc;
  }
  protoOf($serializer_11).on = function (decoder) {
    var tmp0_desc = this.l56_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.mq(tmp0_desc);
    var tmp7_cached = Companion_getInstance_12().k56_1;
    if (tmp6_input.cr()) {
      tmp4_local0 = tmp6_input.ar(tmp0_desc, 0, tmp7_cached[0].n1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.ar(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.ar(tmp0_desc, 0, tmp7_cached[0].n1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.ar(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.nq(tmp0_desc);
    return UserLikesResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_11).nn = function () {
    return this.l56_1;
  };
  protoOf($serializer_11).tw = function () {
    var tmp0_cached = Companion_getInstance_12().k56_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].n1()), get_nullable(IntSerializer_getInstance())];
  };
  var $serializer_instance_10;
  function $serializer_getInstance_10() {
    if ($serializer_instance_10 == null)
      new $serializer_11();
    return $serializer_instance_10;
  }
  function UserLikesResponse_init_$Init$(seen0, likedPosts, likedCount, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_10().l56_1);
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
    Companion_getInstance_12();
    this.likedPosts = null;
    this.likedCount = null;
  }
  protoOf(UserLikesResponse).t55 = function (_set____db54di) {
    this.likedPosts = _set____db54di;
  };
  protoOf(UserLikesResponse).u55 = function () {
    return this.likedPosts;
  };
  protoOf(UserLikesResponse).v55 = function (_set____db54di) {
    this.likedCount = _set____db54di;
  };
  protoOf(UserLikesResponse).w55 = function () {
    return this.likedCount;
  };
  function Companion_12() {
  }
  var Companion_instance_12;
  function Companion_getInstance_13() {
    return Companion_instance_12;
  }
  function $serializer_12() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.api.response.user.UserResponse', this, 1);
    tmp0_serialDesc.ew('user', true);
    this.m56_1 = tmp0_serialDesc;
  }
  protoOf($serializer_12).on = function (decoder) {
    var tmp0_desc = this.m56_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.mq(tmp0_desc);
    if (tmp5_input.cr()) {
      tmp4_local0 = tmp5_input.ar(tmp0_desc, 0, $serializer_getInstance_35(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.ar(tmp0_desc, 0, $serializer_getInstance_35(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.nq(tmp0_desc);
    return UserResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_12).nn = function () {
    return this.m56_1;
  };
  protoOf($serializer_12).tw = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_35())];
  };
  var $serializer_instance_11;
  function $serializer_getInstance_11() {
    if ($serializer_instance_11 == null)
      new $serializer_12();
    return $serializer_instance_11;
  }
  function UserResponse_init_$Init$(seen0, user, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_11().m56_1);
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
    this.user = null;
  }
  protoOf(UserResponse).n56 = function (_set____db54di) {
    this.user = _set____db54di;
  };
  protoOf(UserResponse).d2q = function () {
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
  var PhotoType_entriesInitialized;
  function PhotoType_initEntries() {
    if (PhotoType_entriesInitialized)
      return Unit_instance;
    PhotoType_entriesInitialized = true;
    PhotoType_SOURCE_instance = new PhotoType('SOURCE', 0, 'source');
    PhotoType_FILE_instance = new PhotoType('FILE', 1, 'data');
  }
  function PhotoType(name, ordinal, prefix) {
    Enum.call(this, name, ordinal);
    this.prefix = prefix;
  }
  protoOf(PhotoType).q56 = function () {
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
  var PostType_entriesInitialized;
  function PostType_initEntries() {
    if (PostType_entriesInitialized)
      return Unit_instance;
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
  function PostType(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value = value;
  }
  protoOf(PostType).n1 = function () {
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
  function Companion_13() {
  }
  var Companion_instance_13;
  function Companion_getInstance_14() {
    return Companion_instance_13;
  }
  function $serializer_13() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.Note', this, 9);
    tmp0_serialDesc.ew('type', true);
    tmp0_serialDesc.ew('timestamp', true);
    tmp0_serialDesc.ew('blog_name', true);
    tmp0_serialDesc.ew('blog_uuid', true);
    tmp0_serialDesc.ew('blog_url', true);
    tmp0_serialDesc.ew('followed', true);
    tmp0_serialDesc.ew('avatar_shape', true);
    tmp0_serialDesc.ew('post_id', true);
    tmp0_serialDesc.ew('reblog_parent_blog_name', true);
    this.t56_1 = tmp0_serialDesc;
  }
  protoOf($serializer_13).on = function (decoder) {
    var tmp0_desc = this.t56_1;
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
    var tmp13_input = decoder.mq(tmp0_desc);
    if (tmp13_input.cr()) {
      tmp4_local0 = tmp13_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.ar(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.ar(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.ar(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.ar(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.ar(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.ar(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.ar(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.ar(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.ar(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.ar(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.ar(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.ar(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp13_input.nq(tmp0_desc);
    return Note_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  };
  protoOf($serializer_13).nn = function () {
    return this.t56_1;
  };
  protoOf($serializer_13).tw = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_12;
  function $serializer_getInstance_12() {
    if ($serializer_instance_12 == null)
      new $serializer_13();
    return $serializer_instance_12;
  }
  function Note_init_$Init$(seen0, type, timestamp, blogName, blogUuid, blogUrl, isFollowed, avatarShape, postId, reblogParentBlogName, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_12().t56_1);
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
  protoOf(Note).b50 = function () {
    return this.type;
  };
  protoOf(Note).u56 = function () {
    return this.timestamp;
  };
  protoOf(Note).l4z = function () {
    return this.blogName;
  };
  protoOf(Note).v56 = function () {
    return this.blogUuid;
  };
  protoOf(Note).w56 = function () {
    return this.blogUrl;
  };
  protoOf(Note).x56 = function () {
    return this.isFollowed;
  };
  protoOf(Note).y56 = function () {
    return this.avatarShape;
  };
  protoOf(Note).z56 = function () {
    return this.postId;
  };
  protoOf(Note).a57 = function () {
    return this.reblogParentBlogName;
  };
  function Companion_14() {
  }
  var Companion_instance_14;
  function Companion_getInstance_15() {
    return Companion_instance_14;
  }
  function $serializer_14() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.NoteAvatar', this, 2);
    tmp0_serialDesc.ew('64', true);
    tmp0_serialDesc.ew('128', true);
    this.b57_1 = tmp0_serialDesc;
  }
  protoOf($serializer_14).on = function (decoder) {
    var tmp0_desc = this.b57_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.mq(tmp0_desc);
    if (tmp6_input.cr()) {
      tmp4_local0 = tmp6_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.nq(tmp0_desc);
    return NoteAvatar_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_14).nn = function () {
    return this.b57_1;
  };
  protoOf($serializer_14).tw = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_13;
  function $serializer_getInstance_13() {
    if ($serializer_instance_13 == null)
      new $serializer_14();
    return $serializer_instance_13;
  }
  function NoteAvatar_init_$Init$(seen0, size64, size128, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_13().b57_1);
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
    this.size64 = null;
    this.size128 = null;
  }
  protoOf(NoteAvatar).c57 = function (_set____db54di) {
    this.size64 = _set____db54di;
  };
  protoOf(NoteAvatar).d57 = function () {
    return this.size64;
  };
  protoOf(NoteAvatar).e57 = function (_set____db54di) {
    this.size128 = _set____db54di;
  };
  protoOf(NoteAvatar).f57 = function () {
    return this.size128;
  };
  function Resource() {
  }
  function Blog$Companion$$childSerializers$_anonymous__tmgjug() {
    return new ReferenceArraySerializer(getKClass(BlogAvatar), $serializer_getInstance_15());
  }
  function Companion_15() {
    Companion_instance_15 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.g57_1 = [null, null, null, null, null, null, null, null, null, null, lazy(tmp_0, Blog$Companion$$childSerializers$_anonymous__tmgjug), null, null, null, null, null, null, null];
  }
  var Companion_instance_15;
  function Companion_getInstance_16() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function $serializer_15() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.blog.Blog', this, 18);
    tmp0_serialDesc.ew('title', true);
    tmp0_serialDesc.ew('posts', true);
    tmp0_serialDesc.ew('name', true);
    tmp0_serialDesc.ew('updated', true);
    tmp0_serialDesc.ew('description', true);
    tmp0_serialDesc.ew('ask', true);
    tmp0_serialDesc.ew('ask_anon', true);
    tmp0_serialDesc.ew('followed', true);
    tmp0_serialDesc.ew('likes', true);
    tmp0_serialDesc.ew('is_blocked_from_primary', true);
    tmp0_serialDesc.ew('avatar', true);
    tmp0_serialDesc.ew('url', true);
    tmp0_serialDesc.ew('theme', true);
    tmp0_serialDesc.ew('admin', true);
    tmp0_serialDesc.ew('ask_page_title', true);
    tmp0_serialDesc.ew('is_nsfw', true);
    tmp0_serialDesc.ew('primary', true);
    tmp0_serialDesc.ew('followers', true);
    this.h57_1 = tmp0_serialDesc;
  }
  protoOf($serializer_15).on = function (decoder) {
    var tmp0_desc = this.h57_1;
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
    var tmp22_input = decoder.mq(tmp0_desc);
    var tmp23_cached = Companion_getInstance_16().g57_1;
    if (tmp22_input.cr()) {
      tmp4_local0 = tmp22_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp22_input.rq(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp22_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp22_input.ar(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp22_input.ar(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp22_input.ar(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp22_input.ar(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp22_input.ar(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp22_input.ar(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp22_input.ar(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp22_input.ar(tmp0_desc, 10, tmp23_cached[10].n1(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp22_input.ar(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp22_input.ar(tmp0_desc, 12, $serializer_getInstance_16(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp22_input.ar(tmp0_desc, 13, BooleanSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp22_input.ar(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp22_input.ar(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp22_input.ar(tmp0_desc, 16, BooleanSerializer_getInstance(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp22_input.ar(tmp0_desc, 17, IntSerializer_getInstance(), tmp21_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp22_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp22_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp22_input.rq(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp22_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp22_input.ar(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp22_input.ar(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp22_input.ar(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp22_input.ar(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp22_input.ar(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp22_input.ar(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp22_input.ar(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp22_input.ar(tmp0_desc, 10, tmp23_cached[10].n1(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp22_input.ar(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp22_input.ar(tmp0_desc, 12, $serializer_getInstance_16(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp22_input.ar(tmp0_desc, 13, BooleanSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp22_input.ar(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp22_input.ar(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp22_input.ar(tmp0_desc, 16, BooleanSerializer_getInstance(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp22_input.ar(tmp0_desc, 17, IntSerializer_getInstance(), tmp21_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp22_input.nq(tmp0_desc);
    return Blog_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, null);
  };
  protoOf($serializer_15).nn = function () {
    return this.h57_1;
  };
  protoOf($serializer_15).tw = function () {
    var tmp0_cached = Companion_getInstance_16().g57_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[10].n1()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_16()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  };
  var $serializer_instance_14;
  function $serializer_getInstance_14() {
    if ($serializer_instance_14 == null)
      new $serializer_15();
    return $serializer_instance_14;
  }
  function Blog_init_$Init$(seen0, title, postCount, name, updated, description, isAsk, isAskAnon, isFollowed, likeCount, isBlockedFromPrimary, avatar, url, theme, isAdmin, askPageTitle, isNSFW, isPrimary, followerCount, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_14().h57_1);
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
    Companion_getInstance_16();
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
  protoOf(Blog).q50 = function (_set____db54di) {
    this.title = _set____db54di;
  };
  protoOf(Blog).r50 = function () {
    return this.title;
  };
  protoOf(Blog).i57 = function (_set____db54di) {
    this.postCount = _set____db54di;
  };
  protoOf(Blog).j57 = function () {
    return this.postCount;
  };
  protoOf(Blog).p50 = function (_set____db54di) {
    this.name = _set____db54di;
  };
  protoOf(Blog).m = function () {
    return this.name;
  };
  protoOf(Blog).k57 = function (_set____db54di) {
    this.updated = _set____db54di;
  };
  protoOf(Blog).l57 = function () {
    return this.updated;
  };
  protoOf(Blog).s50 = function (_set____db54di) {
    this.description = _set____db54di;
  };
  protoOf(Blog).t50 = function () {
    return this.description;
  };
  protoOf(Blog).m57 = function (_set____db54di) {
    this.isAsk = _set____db54di;
  };
  protoOf(Blog).n57 = function () {
    return this.isAsk;
  };
  protoOf(Blog).o57 = function (_set____db54di) {
    this.isAskAnon = _set____db54di;
  };
  protoOf(Blog).p57 = function () {
    return this.isAskAnon;
  };
  protoOf(Blog).q57 = function (_set____db54di) {
    this.isFollowed = _set____db54di;
  };
  protoOf(Blog).x56 = function () {
    return this.isFollowed;
  };
  protoOf(Blog).r57 = function () {
    return this.likeCount;
  };
  protoOf(Blog).s57 = function () {
    return this.isBlockedFromPrimary;
  };
  protoOf(Blog).t57 = function () {
    return this.avatar;
  };
  protoOf(Blog).d3c = function () {
    return this.url;
  };
  protoOf(Blog).u57 = function () {
    return this.theme;
  };
  protoOf(Blog).v57 = function () {
    return this.isAdmin;
  };
  protoOf(Blog).w57 = function () {
    return this.askPageTitle;
  };
  protoOf(Blog).x57 = function () {
    return this.isNSFW;
  };
  protoOf(Blog).y57 = function () {
    return this.isPrimary;
  };
  protoOf(Blog).z57 = function () {
    return this.followerCount;
  };
  function Companion_16() {
  }
  var Companion_instance_16;
  function Companion_getInstance_17() {
    return Companion_instance_16;
  }
  function $serializer_16() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.blog.BlogAvatar', this, 3);
    tmp0_serialDesc.ew('width', true);
    tmp0_serialDesc.ew('height', true);
    tmp0_serialDesc.ew('url', true);
    this.a58_1 = tmp0_serialDesc;
  }
  protoOf($serializer_16).on = function (decoder) {
    var tmp0_desc = this.a58_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.mq(tmp0_desc);
    if (tmp7_input.cr()) {
      tmp4_local0 = tmp7_input.ar(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.ar(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.ar(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.ar(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.nq(tmp0_desc);
    return BlogAvatar_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_16).nn = function () {
    return this.a58_1;
  };
  protoOf($serializer_16).tw = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_15;
  function $serializer_getInstance_15() {
    if ($serializer_instance_15 == null)
      new $serializer_16();
    return $serializer_instance_15;
  }
  function BlogAvatar_init_$Init$(seen0, width, height, url, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_15().a58_1);
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
    this.width = null;
    this.height = null;
    this.url = null;
  }
  protoOf(BlogAvatar).a55 = function (_set____db54di) {
    this.width = _set____db54di;
  };
  protoOf(BlogAvatar).b55 = function () {
    return this.width;
  };
  protoOf(BlogAvatar).y54 = function (_set____db54di) {
    this.height = _set____db54di;
  };
  protoOf(BlogAvatar).z54 = function () {
    return this.height;
  };
  protoOf(BlogAvatar).x51 = function (_set____db54di) {
    this.url = _set____db54di;
  };
  protoOf(BlogAvatar).d3c = function () {
    return this.url;
  };
  function Companion_17() {
  }
  var Companion_instance_17;
  function Companion_getInstance_18() {
    return Companion_instance_17;
  }
  function $serializer_17() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.blog.BlogTheme', this, 16);
    tmp0_serialDesc.ew('avatar_shape', true);
    tmp0_serialDesc.ew('background_color', true);
    tmp0_serialDesc.ew('body_font', true);
    tmp0_serialDesc.ew('header_image', true);
    tmp0_serialDesc.ew('header_image_focused', true);
    tmp0_serialDesc.ew('header_image_poster', true);
    tmp0_serialDesc.ew('header_image_scaled', true);
    tmp0_serialDesc.ew('header_stretch', true);
    tmp0_serialDesc.ew('link_color', true);
    tmp0_serialDesc.ew('show_avatar', true);
    tmp0_serialDesc.ew('show_description', true);
    tmp0_serialDesc.ew('show_header_image', true);
    tmp0_serialDesc.ew('show_title', true);
    tmp0_serialDesc.ew('title_color', true);
    tmp0_serialDesc.ew('title_font', true);
    tmp0_serialDesc.ew('title_font_weight', true);
    this.b58_1 = tmp0_serialDesc;
  }
  protoOf($serializer_17).on = function (decoder) {
    var tmp0_desc = this.b58_1;
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
    var tmp20_input = decoder.mq(tmp0_desc);
    if (tmp20_input.cr()) {
      tmp4_local0 = tmp20_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp20_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp20_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp20_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp20_input.ar(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp20_input.ar(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp20_input.ar(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp20_input.oq(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp20_input.ar(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp20_input.oq(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp20_input.oq(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp20_input.oq(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp20_input.oq(tmp0_desc, 12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp20_input.ar(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp20_input.ar(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp20_input.ar(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp20_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp20_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp20_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp20_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp20_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp20_input.ar(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp20_input.ar(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp20_input.ar(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp20_input.oq(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp20_input.ar(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp20_input.oq(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp20_input.oq(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp20_input.oq(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp20_input.oq(tmp0_desc, 12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp20_input.ar(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp20_input.ar(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp20_input.ar(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp20_input.nq(tmp0_desc);
    return BlogTheme_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, null);
  };
  protoOf($serializer_17).nn = function () {
    return this.b58_1;
  };
  protoOf($serializer_17).tw = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_16;
  function $serializer_getInstance_16() {
    if ($serializer_instance_16 == null)
      new $serializer_17();
    return $serializer_instance_16;
  }
  function BlogTheme_init_$Init$(seen0, avatarShape, backgroundColor, bodyFont, headerImage, headerImageFocused, headerImagePoster, headerImageScaled, isHeaderStretch, linkColor, isShowAvatar, isShowDescription, isShowHeaderImage, isShowTitle, titleColor, titleFont, titleFontWeight, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_16().b58_1);
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
  protoOf(BlogTheme).c58 = function (_set____db54di) {
    this.avatarShape = _set____db54di;
  };
  protoOf(BlogTheme).y56 = function () {
    return this.avatarShape;
  };
  protoOf(BlogTheme).d58 = function (_set____db54di) {
    this.backgroundColor = _set____db54di;
  };
  protoOf(BlogTheme).e58 = function () {
    return this.backgroundColor;
  };
  protoOf(BlogTheme).f58 = function (_set____db54di) {
    this.bodyFont = _set____db54di;
  };
  protoOf(BlogTheme).g58 = function () {
    return this.bodyFont;
  };
  protoOf(BlogTheme).h58 = function (_set____db54di) {
    this.headerImage = _set____db54di;
  };
  protoOf(BlogTheme).i58 = function () {
    return this.headerImage;
  };
  protoOf(BlogTheme).j58 = function (_set____db54di) {
    this.headerImageFocused = _set____db54di;
  };
  protoOf(BlogTheme).k58 = function () {
    return this.headerImageFocused;
  };
  protoOf(BlogTheme).l58 = function (_set____db54di) {
    this.headerImagePoster = _set____db54di;
  };
  protoOf(BlogTheme).m58 = function () {
    return this.headerImagePoster;
  };
  protoOf(BlogTheme).n58 = function (_set____db54di) {
    this.headerImageScaled = _set____db54di;
  };
  protoOf(BlogTheme).o58 = function () {
    return this.headerImageScaled;
  };
  protoOf(BlogTheme).p58 = function (_set____db54di) {
    this.isHeaderStretch = _set____db54di;
  };
  protoOf(BlogTheme).q58 = function () {
    return this.isHeaderStretch;
  };
  protoOf(BlogTheme).r58 = function () {
    return this.linkColor;
  };
  protoOf(BlogTheme).s58 = function () {
    return this.isShowAvatar;
  };
  protoOf(BlogTheme).t58 = function () {
    return this.isShowDescription;
  };
  protoOf(BlogTheme).u58 = function () {
    return this.isShowHeaderImage;
  };
  protoOf(BlogTheme).v58 = function () {
    return this.isShowTitle;
  };
  protoOf(BlogTheme).w58 = function () {
    return this.titleColor;
  };
  protoOf(BlogTheme).x58 = function () {
    return this.titleFont;
  };
  protoOf(BlogTheme).y58 = function () {
    return this.titleFontWeight;
  };
  function Companion_18() {
  }
  var Companion_instance_18;
  function Companion_getInstance_19() {
    return Companion_instance_18;
  }
  function $serializer_18() {
    $serializer_instance_17 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.blog.Reblog', this, 2);
    tmp0_serialDesc.ew('comment', true);
    tmp0_serialDesc.ew('tree_html', true);
    this.z58_1 = tmp0_serialDesc;
  }
  protoOf($serializer_18).on = function (decoder) {
    var tmp0_desc = this.z58_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.mq(tmp0_desc);
    if (tmp6_input.cr()) {
      tmp4_local0 = tmp6_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.nq(tmp0_desc);
    return Reblog_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_18).nn = function () {
    return this.z58_1;
  };
  protoOf($serializer_18).tw = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_17;
  function $serializer_getInstance_17() {
    if ($serializer_instance_17 == null)
      new $serializer_18();
    return $serializer_instance_17;
  }
  function Reblog_init_$Init$(seen0, comment, treeHtml, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_17().z58_1);
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
    this.comment = null;
    this.treeHtml = null;
  }
  protoOf(Reblog).s53 = function (_set____db54di) {
    this.comment = _set____db54di;
  };
  protoOf(Reblog).t53 = function () {
    return this.comment;
  };
  protoOf(Reblog).a59 = function (_set____db54di) {
    this.treeHtml = _set____db54di;
  };
  protoOf(Reblog).b59 = function () {
    return this.treeHtml;
  };
  function Companion_19() {
  }
  protoOf(Companion_19).r4k = function () {
    return PostSerializer_getInstance();
  };
  var Companion_instance_19;
  function Companion_getInstance_20() {
    return Companion_instance_19;
  }
  function Post() {
  }
  protoOf(Post).c59 = function () {
    return this instanceof LegacyTextPost ? this : null;
  };
  protoOf(Post).d59 = function () {
    return this instanceof LegacyPhotoPost ? this : null;
  };
  protoOf(Post).e59 = function () {
    return this instanceof LegacyQuotePost ? this : null;
  };
  protoOf(Post).f59 = function () {
    return this instanceof LegacyLinkPost ? this : null;
  };
  protoOf(Post).g59 = function () {
    return this instanceof LegacyVideoPost ? this : null;
  };
  protoOf(Post).h59 = function () {
    return this instanceof LegacyAudioPost ? this : null;
  };
  protoOf(Post).i59 = function () {
    return this instanceof LegacyChatPost ? this : null;
  };
  protoOf(Post).j59 = function () {
    return this instanceof LegacyAnswerPost ? this : null;
  };
  protoOf(Post).k59 = function () {
    return this instanceof LegacyPostcardPost ? this : null;
  };
  function LegacyAnswerPost$Companion$$childSerializers$_anonymous__8d95a5() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().ob(), StringSerializer_getInstance());
  }
  function LegacyAnswerPost$Companion$$childSerializers$_anonymous__8d95a5_0() {
    return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_12());
  }
  function LegacyAnswerPost$Companion$$childSerializers$_anonymous__8d95a5_1() {
    return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_33());
  }
  function Companion_20() {
    Companion_instance_20 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyAnswerPost$Companion$$childSerializers$_anonymous__8d95a5);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyAnswerPost$Companion$$childSerializers$_anonymous__8d95a5_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.q5b_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyAnswerPost$Companion$$childSerializers$_anonymous__8d95a5_1), null, null, null, null];
  }
  protoOf(Companion_20).r4k = function () {
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyAnswerPost', this, 44);
    tmp0_serialDesc.ew('blog_name', false);
    tmp0_serialDesc.ew('id_string', false);
    tmp0_serialDesc.ew('genesis_post_id', false);
    tmp0_serialDesc.ew('post_url', false);
    tmp0_serialDesc.ew('parent_post_url', false);
    tmp0_serialDesc.ew('type', false);
    tmp0_serialDesc.ew('timestamp', false);
    tmp0_serialDesc.ew('date', false);
    tmp0_serialDesc.ew('format', false);
    tmp0_serialDesc.ew('reblog_key', false);
    tmp0_serialDesc.ew('tags', false);
    tmp0_serialDesc.ew('bookmarklet', false);
    tmp0_serialDesc.ew('mobile', false);
    tmp0_serialDesc.ew('source_url', false);
    tmp0_serialDesc.ew('source_title', false);
    tmp0_serialDesc.ew('liked', false);
    tmp0_serialDesc.ew('state', false);
    tmp0_serialDesc.ew('title', false);
    tmp0_serialDesc.ew('body', false);
    tmp0_serialDesc.ew('note_count', false);
    tmp0_serialDesc.ew('summary', false);
    tmp0_serialDesc.ew('slug', false);
    tmp0_serialDesc.ew('reblogged_from_id', false);
    tmp0_serialDesc.ew('reblogged_from_url', false);
    tmp0_serialDesc.ew('reblogged_from_name', false);
    tmp0_serialDesc.ew('reblogged_from_title', false);
    tmp0_serialDesc.ew('reblogged_from_uuid', false);
    tmp0_serialDesc.ew('reblogged_from_can_message', false);
    tmp0_serialDesc.ew('reblogged_from_following', false);
    tmp0_serialDesc.ew('reblogged_root_id', false);
    tmp0_serialDesc.ew('reblogged_root_url', false);
    tmp0_serialDesc.ew('reblogged_root_name', false);
    tmp0_serialDesc.ew('reblogged_root_title', false);
    tmp0_serialDesc.ew('reblogged_root_uuid', false);
    tmp0_serialDesc.ew('reblogged_root_can_message', false);
    tmp0_serialDesc.ew('reblogged_root_following', false);
    tmp0_serialDesc.ew('notes', false);
    tmp0_serialDesc.ew('blog', false);
    tmp0_serialDesc.ew('reblog', false);
    tmp0_serialDesc.ew('trail', false);
    tmp0_serialDesc.ew('asking_name', true);
    tmp0_serialDesc.ew('asking_url', true);
    tmp0_serialDesc.ew('question', true);
    tmp0_serialDesc.ew('answer', true);
    this.r5b_1 = tmp0_serialDesc;
  }
  protoOf($serializer_19).on = function (decoder) {
    var tmp0_desc = this.r5b_1;
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
    var tmp49_input = decoder.mq(tmp0_desc);
    var tmp50_cached = Companion_getInstance_21().q5b_1;
    if (tmp49_input.cr()) {
      tmp5_local0 = tmp49_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp49_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp49_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp49_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp49_input.ar(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp49_input.ar(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp49_input.ar(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp49_input.ar(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp49_input.ar(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp49_input.ar(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp49_input.ar(tmp0_desc, 10, tmp50_cached[10].n1(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp49_input.ar(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp49_input.ar(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp49_input.ar(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp49_input.ar(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp49_input.ar(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp49_input.ar(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp49_input.ar(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp49_input.ar(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp49_input.ar(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp49_input.ar(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp49_input.ar(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp49_input.ar(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp49_input.ar(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp49_input.ar(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp49_input.ar(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp49_input.ar(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp49_input.ar(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp49_input.ar(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp49_input.ar(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp49_input.ar(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp49_input.ar(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp49_input.ar(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp49_input.ar(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp49_input.ar(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp49_input.ar(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp49_input.ar(tmp0_desc, 36, tmp50_cached[36].n1(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp49_input.ar(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp49_input.ar(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp49_input.ar(tmp0_desc, 39, tmp50_cached[39].n1(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp49_input.ar(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp49_input.ar(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp47_local42 = tmp49_input.ar(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp48_local43 = tmp49_input.ar(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp49_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp49_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp49_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp49_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp49_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp49_input.ar(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp49_input.ar(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp49_input.ar(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp49_input.ar(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp49_input.ar(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp49_input.ar(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp49_input.ar(tmp0_desc, 10, tmp50_cached[10].n1(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp49_input.ar(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp49_input.ar(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp49_input.ar(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp49_input.ar(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp49_input.ar(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp49_input.ar(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp49_input.ar(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp49_input.ar(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp49_input.ar(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp49_input.ar(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp49_input.ar(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp49_input.ar(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp49_input.ar(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp49_input.ar(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp49_input.ar(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp49_input.ar(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp49_input.ar(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp49_input.ar(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp49_input.ar(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp49_input.ar(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp49_input.ar(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp49_input.ar(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp49_input.ar(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp49_input.ar(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp49_input.ar(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp49_input.ar(tmp0_desc, 36, tmp50_cached[36].n1(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp49_input.ar(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp49_input.ar(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp49_input.ar(tmp0_desc, 39, tmp50_cached[39].n1(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp49_input.ar(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp49_input.ar(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp47_local42 = tmp49_input.ar(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp48_local43 = tmp49_input.ar(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp49_input.nq(tmp0_desc);
    return LegacyAnswerPost_init_$Create$(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, tmp47_local42, tmp48_local43, null);
  };
  protoOf($serializer_19).nn = function () {
    return this.r5b_1;
  };
  protoOf($serializer_19).tw = function () {
    var tmp0_cached = Companion_getInstance_21().q5b_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].n1()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].n1()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].n1()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_18;
  function $serializer_getInstance_18() {
    if ($serializer_instance_18 == null)
      new $serializer_19();
    return $serializer_instance_18;
  }
  function LegacyAnswerPost_init_$Init$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, askingName, askingUrl, question, answer, serializationConstructorMarker, $this) {
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_18().r5b_1);
    }
    Post.call($this);
    $this.s5b_1 = blogName;
    $this.t5b_1 = idString;
    $this.u5b_1 = genesisPostId;
    $this.v5b_1 = postUrl;
    $this.w5b_1 = parentPostUrl;
    $this.x5b_1 = type;
    $this.y5b_1 = timestamp;
    $this.z5b_1 = date;
    $this.a5c_1 = format;
    $this.b5c_1 = reblogKey;
    $this.c5c_1 = tags;
    $this.d5c_1 = isBookmarklet;
    $this.e5c_1 = isMobile;
    $this.f5c_1 = sourceUrl;
    $this.g5c_1 = sourceTitle;
    $this.h5c_1 = isLiked;
    $this.i5c_1 = state;
    $this.j5c_1 = title;
    $this.k5c_1 = body;
    $this.l5c_1 = noteCount;
    $this.m5c_1 = summary;
    $this.n5c_1 = slug;
    $this.o5c_1 = rebloggedFromId;
    $this.p5c_1 = rebloggedFromUrl;
    $this.q5c_1 = rebloggedFromName;
    $this.r5c_1 = rebloggedFromTitle;
    $this.s5c_1 = rebloggedFromUuid;
    $this.t5c_1 = rebloggedFromCanMessage;
    $this.u5c_1 = rebloggedFromFollowing;
    $this.v5c_1 = rebloggedRootId;
    $this.w5c_1 = rebloggedRootUrl;
    $this.x5c_1 = rebloggedRootName;
    $this.y5c_1 = rebloggedRootTitle;
    $this.z5c_1 = rebloggedRootUuid;
    $this.a5d_1 = rebloggedRootCanMessage;
    $this.b5d_1 = rebloggedRootFollowing;
    $this.c5d_1 = notes;
    $this.d5d_1 = blog;
    $this.e5d_1 = reblog;
    $this.f5d_1 = trail;
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
    Companion_getInstance_21();
    Post.call(this);
    this.s5b_1 = blogName;
    this.t5b_1 = idString;
    this.u5b_1 = genesisPostId;
    this.v5b_1 = postUrl;
    this.w5b_1 = parentPostUrl;
    this.x5b_1 = type;
    this.y5b_1 = timestamp;
    this.z5b_1 = date;
    this.a5c_1 = format;
    this.b5c_1 = reblogKey;
    this.c5c_1 = tags;
    this.d5c_1 = isBookmarklet;
    this.e5c_1 = isMobile;
    this.f5c_1 = sourceUrl;
    this.g5c_1 = sourceTitle;
    this.h5c_1 = isLiked;
    this.i5c_1 = state;
    this.j5c_1 = title;
    this.k5c_1 = body;
    this.l5c_1 = noteCount;
    this.m5c_1 = summary;
    this.n5c_1 = slug;
    this.o5c_1 = rebloggedFromId;
    this.p5c_1 = rebloggedFromUrl;
    this.q5c_1 = rebloggedFromName;
    this.r5c_1 = rebloggedFromTitle;
    this.s5c_1 = rebloggedFromUuid;
    this.t5c_1 = rebloggedFromCanMessage;
    this.u5c_1 = rebloggedFromFollowing;
    this.v5c_1 = rebloggedRootId;
    this.w5c_1 = rebloggedRootUrl;
    this.x5c_1 = rebloggedRootName;
    this.y5c_1 = rebloggedRootTitle;
    this.z5c_1 = rebloggedRootUuid;
    this.a5d_1 = rebloggedRootCanMessage;
    this.b5d_1 = rebloggedRootFollowing;
    this.c5d_1 = notes;
    this.d5d_1 = blog;
    this.e5d_1 = reblog;
    this.f5d_1 = trail;
    this.askingName = null;
    this.askingUrl = null;
    this.question = null;
    this.answer = null;
  }
  protoOf(LegacyAnswerPost).k4z = function (_set____db54di) {
    this.s5b_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).l4z = function () {
    return this.s5b_1;
  };
  protoOf(LegacyAnswerPost).l59 = function (_set____db54di) {
    this.t5b_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).m59 = function () {
    return this.t5b_1;
  };
  protoOf(LegacyAnswerPost).n59 = function (_set____db54di) {
    this.u5b_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).o59 = function () {
    return this.u5b_1;
  };
  protoOf(LegacyAnswerPost).p59 = function (_set____db54di) {
    this.v5b_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).q59 = function () {
    return this.v5b_1;
  };
  protoOf(LegacyAnswerPost).r59 = function (_set____db54di) {
    this.w5b_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).s59 = function () {
    return this.w5b_1;
  };
  protoOf(LegacyAnswerPost).a50 = function (_set____db54di) {
    this.x5b_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).b50 = function () {
    return this.x5b_1;
  };
  protoOf(LegacyAnswerPost).t59 = function (_set____db54di) {
    this.y5b_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).u56 = function () {
    return this.y5b_1;
  };
  protoOf(LegacyAnswerPost).n51 = function (_set____db54di) {
    this.z5b_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).o51 = function () {
    return this.z5b_1;
  };
  protoOf(LegacyAnswerPost).p51 = function (_set____db54di) {
    this.a5c_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).q51 = function () {
    return this.a5c_1;
  };
  protoOf(LegacyAnswerPost).q53 = function (_set____db54di) {
    this.b5c_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).r53 = function () {
    return this.b5c_1;
  };
  protoOf(LegacyAnswerPost).l52 = function (_set____db54di) {
    this.c5c_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).k51 = function () {
    return this.c5c_1;
  };
  protoOf(LegacyAnswerPost).u59 = function (_set____db54di) {
    this.d5c_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).v59 = function () {
    return this.d5c_1;
  };
  protoOf(LegacyAnswerPost).w59 = function (_set____db54di) {
    this.e5c_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).x59 = function () {
    return this.e5c_1;
  };
  protoOf(LegacyAnswerPost).y59 = function (_set____db54di) {
    this.f5c_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).z59 = function () {
    return this.f5c_1;
  };
  protoOf(LegacyAnswerPost).a5a = function (_set____db54di) {
    this.g5c_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).b5a = function () {
    return this.g5c_1;
  };
  protoOf(LegacyAnswerPost).c5a = function (_set____db54di) {
    this.h5c_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).d5a = function () {
    return this.h5c_1;
  };
  protoOf(LegacyAnswerPost).v4y = function (_set____db54di) {
    this.i5c_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).w4y = function () {
    return this.i5c_1;
  };
  protoOf(LegacyAnswerPost).q50 = function (_set____db54di) {
    this.j5c_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).r50 = function () {
    return this.j5c_1;
  };
  protoOf(LegacyAnswerPost).m52 = function (_set____db54di) {
    this.k5c_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).n52 = function () {
    return this.k5c_1;
  };
  protoOf(LegacyAnswerPost).e5a = function (_set____db54di) {
    this.l5c_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).f5a = function () {
    return this.l5c_1;
  };
  protoOf(LegacyAnswerPost).g5a = function (_set____db54di) {
    this.m5c_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).h5a = function () {
    return this.m5c_1;
  };
  protoOf(LegacyAnswerPost).r51 = function (_set____db54di) {
    this.n5c_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).s51 = function () {
    return this.n5c_1;
  };
  protoOf(LegacyAnswerPost).i5a = function (_set____db54di) {
    this.o5c_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).j5a = function () {
    return this.o5c_1;
  };
  protoOf(LegacyAnswerPost).k5a = function (_set____db54di) {
    this.p5c_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).l5a = function () {
    return this.p5c_1;
  };
  protoOf(LegacyAnswerPost).m5a = function (_set____db54di) {
    this.q5c_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).n5a = function () {
    return this.q5c_1;
  };
  protoOf(LegacyAnswerPost).o5a = function (_set____db54di) {
    this.r5c_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).p5a = function () {
    return this.r5c_1;
  };
  protoOf(LegacyAnswerPost).q5a = function (_set____db54di) {
    this.s5c_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).r5a = function () {
    return this.s5c_1;
  };
  protoOf(LegacyAnswerPost).s5a = function (_set____db54di) {
    this.t5c_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).t5a = function () {
    return this.t5c_1;
  };
  protoOf(LegacyAnswerPost).u5a = function (_set____db54di) {
    this.u5c_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).v5a = function () {
    return this.u5c_1;
  };
  protoOf(LegacyAnswerPost).w5a = function (_set____db54di) {
    this.v5c_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).x5a = function () {
    return this.v5c_1;
  };
  protoOf(LegacyAnswerPost).y5a = function (_set____db54di) {
    this.w5c_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).z5a = function () {
    return this.w5c_1;
  };
  protoOf(LegacyAnswerPost).a5b = function (_set____db54di) {
    this.x5c_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).b5b = function () {
    return this.x5c_1;
  };
  protoOf(LegacyAnswerPost).c5b = function (_set____db54di) {
    this.y5c_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).d5b = function () {
    return this.y5c_1;
  };
  protoOf(LegacyAnswerPost).e5b = function (_set____db54di) {
    this.z5c_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).f5b = function () {
    return this.z5c_1;
  };
  protoOf(LegacyAnswerPost).g5b = function (_set____db54di) {
    this.a5d_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).h5b = function () {
    return this.a5d_1;
  };
  protoOf(LegacyAnswerPost).i5b = function (_set____db54di) {
    this.b5d_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).j5b = function () {
    return this.b5d_1;
  };
  protoOf(LegacyAnswerPost).k5b = function (_set____db54di) {
    this.c5d_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).l5b = function () {
    return this.c5d_1;
  };
  protoOf(LegacyAnswerPost).p55 = function (_set____db54di) {
    this.d5d_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).q55 = function () {
    return this.d5d_1;
  };
  protoOf(LegacyAnswerPost).m5b = function (_set____db54di) {
    this.e5d_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).n5b = function () {
    return this.e5d_1;
  };
  protoOf(LegacyAnswerPost).o5b = function (_set____db54di) {
    this.f5d_1 = _set____db54di;
  };
  protoOf(LegacyAnswerPost).p5b = function () {
    return this.f5d_1;
  };
  protoOf(LegacyAnswerPost).g5d = function () {
    return this.askingName;
  };
  protoOf(LegacyAnswerPost).h5d = function () {
    return this.askingUrl;
  };
  protoOf(LegacyAnswerPost).i5d = function () {
    return this.question;
  };
  protoOf(LegacyAnswerPost).n53 = function () {
    return this.answer;
  };
  function LegacyAudioPost$Companion$$childSerializers$_anonymous__ug3per() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().ob(), StringSerializer_getInstance());
  }
  function LegacyAudioPost$Companion$$childSerializers$_anonymous__ug3per_0() {
    return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_12());
  }
  function LegacyAudioPost$Companion$$childSerializers$_anonymous__ug3per_1() {
    return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_33());
  }
  function Companion_21() {
    Companion_instance_21 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyAudioPost$Companion$$childSerializers$_anonymous__ug3per);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyAudioPost$Companion$$childSerializers$_anonymous__ug3per_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.j5d_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyAudioPost$Companion$$childSerializers$_anonymous__ug3per_1), null];
  }
  protoOf(Companion_21).r4k = function () {
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyAudioPost', this, 41);
    tmp0_serialDesc.ew('blog_name', false);
    tmp0_serialDesc.ew('id_string', false);
    tmp0_serialDesc.ew('genesis_post_id', false);
    tmp0_serialDesc.ew('post_url', false);
    tmp0_serialDesc.ew('parent_post_url', false);
    tmp0_serialDesc.ew('type', false);
    tmp0_serialDesc.ew('timestamp', false);
    tmp0_serialDesc.ew('date', false);
    tmp0_serialDesc.ew('format', false);
    tmp0_serialDesc.ew('reblog_key', false);
    tmp0_serialDesc.ew('tags', false);
    tmp0_serialDesc.ew('bookmarklet', false);
    tmp0_serialDesc.ew('mobile', false);
    tmp0_serialDesc.ew('source_url', false);
    tmp0_serialDesc.ew('source_title', false);
    tmp0_serialDesc.ew('liked', false);
    tmp0_serialDesc.ew('state', false);
    tmp0_serialDesc.ew('title', false);
    tmp0_serialDesc.ew('body', false);
    tmp0_serialDesc.ew('note_count', false);
    tmp0_serialDesc.ew('summary', false);
    tmp0_serialDesc.ew('slug', false);
    tmp0_serialDesc.ew('reblogged_from_id', false);
    tmp0_serialDesc.ew('reblogged_from_url', false);
    tmp0_serialDesc.ew('reblogged_from_name', false);
    tmp0_serialDesc.ew('reblogged_from_title', false);
    tmp0_serialDesc.ew('reblogged_from_uuid', false);
    tmp0_serialDesc.ew('reblogged_from_can_message', false);
    tmp0_serialDesc.ew('reblogged_from_following', false);
    tmp0_serialDesc.ew('reblogged_root_id', false);
    tmp0_serialDesc.ew('reblogged_root_url', false);
    tmp0_serialDesc.ew('reblogged_root_name', false);
    tmp0_serialDesc.ew('reblogged_root_title', false);
    tmp0_serialDesc.ew('reblogged_root_uuid', false);
    tmp0_serialDesc.ew('reblogged_root_can_message', false);
    tmp0_serialDesc.ew('reblogged_root_following', false);
    tmp0_serialDesc.ew('notes', false);
    tmp0_serialDesc.ew('blog', false);
    tmp0_serialDesc.ew('reblog', false);
    tmp0_serialDesc.ew('trail', false);
    tmp0_serialDesc.ew('caption', true);
    this.k5d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_20).on = function (decoder) {
    var tmp0_desc = this.k5d_1;
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
    var tmp46_input = decoder.mq(tmp0_desc);
    var tmp47_cached = Companion_getInstance_22().j5d_1;
    if (tmp46_input.cr()) {
      tmp5_local0 = tmp46_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp46_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp46_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp46_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp46_input.ar(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp46_input.ar(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp46_input.ar(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp46_input.ar(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp46_input.ar(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp46_input.ar(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp46_input.ar(tmp0_desc, 10, tmp47_cached[10].n1(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp46_input.ar(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp46_input.ar(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp46_input.ar(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp46_input.ar(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp46_input.ar(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp46_input.ar(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp46_input.ar(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp46_input.ar(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp46_input.ar(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp46_input.ar(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp46_input.ar(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp46_input.ar(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp46_input.ar(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp46_input.ar(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp46_input.ar(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp46_input.ar(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp46_input.ar(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp46_input.ar(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp46_input.ar(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp46_input.ar(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp46_input.ar(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp46_input.ar(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp46_input.ar(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp46_input.ar(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp46_input.ar(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp46_input.ar(tmp0_desc, 36, tmp47_cached[36].n1(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp46_input.ar(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp46_input.ar(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp46_input.ar(tmp0_desc, 39, tmp47_cached[39].n1(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp46_input.ar(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp46_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp46_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp46_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp46_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp46_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp46_input.ar(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp46_input.ar(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp46_input.ar(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp46_input.ar(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp46_input.ar(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp46_input.ar(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp46_input.ar(tmp0_desc, 10, tmp47_cached[10].n1(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp46_input.ar(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp46_input.ar(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp46_input.ar(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp46_input.ar(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp46_input.ar(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp46_input.ar(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp46_input.ar(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp46_input.ar(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp46_input.ar(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp46_input.ar(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp46_input.ar(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp46_input.ar(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp46_input.ar(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp46_input.ar(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp46_input.ar(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp46_input.ar(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp46_input.ar(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp46_input.ar(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp46_input.ar(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp46_input.ar(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp46_input.ar(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp46_input.ar(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp46_input.ar(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp46_input.ar(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp46_input.ar(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp46_input.ar(tmp0_desc, 36, tmp47_cached[36].n1(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp46_input.ar(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp46_input.ar(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp46_input.ar(tmp0_desc, 39, tmp47_cached[39].n1(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp46_input.ar(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp46_input.nq(tmp0_desc);
    return LegacyAudioPost_init_$Create$(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, null);
  };
  protoOf($serializer_20).nn = function () {
    return this.k5d_1;
  };
  protoOf($serializer_20).tw = function () {
    var tmp0_cached = Companion_getInstance_22().j5d_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].n1()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].n1()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].n1()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_19;
  function $serializer_getInstance_19() {
    if ($serializer_instance_19 == null)
      new $serializer_20();
    return $serializer_instance_19;
  }
  function LegacyAudioPost_init_$Init$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, caption, serializationConstructorMarker, $this) {
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_19().k5d_1);
    }
    Post.call($this);
    $this.l5d_1 = blogName;
    $this.m5d_1 = idString;
    $this.n5d_1 = genesisPostId;
    $this.o5d_1 = postUrl;
    $this.p5d_1 = parentPostUrl;
    $this.q5d_1 = type;
    $this.r5d_1 = timestamp;
    $this.s5d_1 = date;
    $this.t5d_1 = format;
    $this.u5d_1 = reblogKey;
    $this.v5d_1 = tags;
    $this.w5d_1 = isBookmarklet;
    $this.x5d_1 = isMobile;
    $this.y5d_1 = sourceUrl;
    $this.z5d_1 = sourceTitle;
    $this.a5e_1 = isLiked;
    $this.b5e_1 = state;
    $this.c5e_1 = title;
    $this.d5e_1 = body;
    $this.e5e_1 = noteCount;
    $this.f5e_1 = summary;
    $this.g5e_1 = slug;
    $this.h5e_1 = rebloggedFromId;
    $this.i5e_1 = rebloggedFromUrl;
    $this.j5e_1 = rebloggedFromName;
    $this.k5e_1 = rebloggedFromTitle;
    $this.l5e_1 = rebloggedFromUuid;
    $this.m5e_1 = rebloggedFromCanMessage;
    $this.n5e_1 = rebloggedFromFollowing;
    $this.o5e_1 = rebloggedRootId;
    $this.p5e_1 = rebloggedRootUrl;
    $this.q5e_1 = rebloggedRootName;
    $this.r5e_1 = rebloggedRootTitle;
    $this.s5e_1 = rebloggedRootUuid;
    $this.t5e_1 = rebloggedRootCanMessage;
    $this.u5e_1 = rebloggedRootFollowing;
    $this.v5e_1 = notes;
    $this.w5e_1 = blog;
    $this.x5e_1 = reblog;
    $this.y5e_1 = trail;
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
    Companion_getInstance_22();
    Post.call(this);
    this.l5d_1 = blogName;
    this.m5d_1 = idString;
    this.n5d_1 = genesisPostId;
    this.o5d_1 = postUrl;
    this.p5d_1 = parentPostUrl;
    this.q5d_1 = type;
    this.r5d_1 = timestamp;
    this.s5d_1 = date;
    this.t5d_1 = format;
    this.u5d_1 = reblogKey;
    this.v5d_1 = tags;
    this.w5d_1 = isBookmarklet;
    this.x5d_1 = isMobile;
    this.y5d_1 = sourceUrl;
    this.z5d_1 = sourceTitle;
    this.a5e_1 = isLiked;
    this.b5e_1 = state;
    this.c5e_1 = title;
    this.d5e_1 = body;
    this.e5e_1 = noteCount;
    this.f5e_1 = summary;
    this.g5e_1 = slug;
    this.h5e_1 = rebloggedFromId;
    this.i5e_1 = rebloggedFromUrl;
    this.j5e_1 = rebloggedFromName;
    this.k5e_1 = rebloggedFromTitle;
    this.l5e_1 = rebloggedFromUuid;
    this.m5e_1 = rebloggedFromCanMessage;
    this.n5e_1 = rebloggedFromFollowing;
    this.o5e_1 = rebloggedRootId;
    this.p5e_1 = rebloggedRootUrl;
    this.q5e_1 = rebloggedRootName;
    this.r5e_1 = rebloggedRootTitle;
    this.s5e_1 = rebloggedRootUuid;
    this.t5e_1 = rebloggedRootCanMessage;
    this.u5e_1 = rebloggedRootFollowing;
    this.v5e_1 = notes;
    this.w5e_1 = blog;
    this.x5e_1 = reblog;
    this.y5e_1 = trail;
    this.caption = null;
  }
  protoOf(LegacyAudioPost).k4z = function (_set____db54di) {
    this.l5d_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).l4z = function () {
    return this.l5d_1;
  };
  protoOf(LegacyAudioPost).l59 = function (_set____db54di) {
    this.m5d_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).m59 = function () {
    return this.m5d_1;
  };
  protoOf(LegacyAudioPost).n59 = function (_set____db54di) {
    this.n5d_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).o59 = function () {
    return this.n5d_1;
  };
  protoOf(LegacyAudioPost).p59 = function (_set____db54di) {
    this.o5d_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).q59 = function () {
    return this.o5d_1;
  };
  protoOf(LegacyAudioPost).r59 = function (_set____db54di) {
    this.p5d_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).s59 = function () {
    return this.p5d_1;
  };
  protoOf(LegacyAudioPost).a50 = function (_set____db54di) {
    this.q5d_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).b50 = function () {
    return this.q5d_1;
  };
  protoOf(LegacyAudioPost).t59 = function (_set____db54di) {
    this.r5d_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).u56 = function () {
    return this.r5d_1;
  };
  protoOf(LegacyAudioPost).n51 = function (_set____db54di) {
    this.s5d_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).o51 = function () {
    return this.s5d_1;
  };
  protoOf(LegacyAudioPost).p51 = function (_set____db54di) {
    this.t5d_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).q51 = function () {
    return this.t5d_1;
  };
  protoOf(LegacyAudioPost).q53 = function (_set____db54di) {
    this.u5d_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).r53 = function () {
    return this.u5d_1;
  };
  protoOf(LegacyAudioPost).l52 = function (_set____db54di) {
    this.v5d_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).k51 = function () {
    return this.v5d_1;
  };
  protoOf(LegacyAudioPost).u59 = function (_set____db54di) {
    this.w5d_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).v59 = function () {
    return this.w5d_1;
  };
  protoOf(LegacyAudioPost).w59 = function (_set____db54di) {
    this.x5d_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).x59 = function () {
    return this.x5d_1;
  };
  protoOf(LegacyAudioPost).y59 = function (_set____db54di) {
    this.y5d_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).z59 = function () {
    return this.y5d_1;
  };
  protoOf(LegacyAudioPost).a5a = function (_set____db54di) {
    this.z5d_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).b5a = function () {
    return this.z5d_1;
  };
  protoOf(LegacyAudioPost).c5a = function (_set____db54di) {
    this.a5e_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).d5a = function () {
    return this.a5e_1;
  };
  protoOf(LegacyAudioPost).v4y = function (_set____db54di) {
    this.b5e_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).w4y = function () {
    return this.b5e_1;
  };
  protoOf(LegacyAudioPost).q50 = function (_set____db54di) {
    this.c5e_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).r50 = function () {
    return this.c5e_1;
  };
  protoOf(LegacyAudioPost).m52 = function (_set____db54di) {
    this.d5e_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).n52 = function () {
    return this.d5e_1;
  };
  protoOf(LegacyAudioPost).e5a = function (_set____db54di) {
    this.e5e_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).f5a = function () {
    return this.e5e_1;
  };
  protoOf(LegacyAudioPost).g5a = function (_set____db54di) {
    this.f5e_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).h5a = function () {
    return this.f5e_1;
  };
  protoOf(LegacyAudioPost).r51 = function (_set____db54di) {
    this.g5e_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).s51 = function () {
    return this.g5e_1;
  };
  protoOf(LegacyAudioPost).i5a = function (_set____db54di) {
    this.h5e_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).j5a = function () {
    return this.h5e_1;
  };
  protoOf(LegacyAudioPost).k5a = function (_set____db54di) {
    this.i5e_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).l5a = function () {
    return this.i5e_1;
  };
  protoOf(LegacyAudioPost).m5a = function (_set____db54di) {
    this.j5e_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).n5a = function () {
    return this.j5e_1;
  };
  protoOf(LegacyAudioPost).o5a = function (_set____db54di) {
    this.k5e_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).p5a = function () {
    return this.k5e_1;
  };
  protoOf(LegacyAudioPost).q5a = function (_set____db54di) {
    this.l5e_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).r5a = function () {
    return this.l5e_1;
  };
  protoOf(LegacyAudioPost).s5a = function (_set____db54di) {
    this.m5e_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).t5a = function () {
    return this.m5e_1;
  };
  protoOf(LegacyAudioPost).u5a = function (_set____db54di) {
    this.n5e_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).v5a = function () {
    return this.n5e_1;
  };
  protoOf(LegacyAudioPost).w5a = function (_set____db54di) {
    this.o5e_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).x5a = function () {
    return this.o5e_1;
  };
  protoOf(LegacyAudioPost).y5a = function (_set____db54di) {
    this.p5e_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).z5a = function () {
    return this.p5e_1;
  };
  protoOf(LegacyAudioPost).a5b = function (_set____db54di) {
    this.q5e_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).b5b = function () {
    return this.q5e_1;
  };
  protoOf(LegacyAudioPost).c5b = function (_set____db54di) {
    this.r5e_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).d5b = function () {
    return this.r5e_1;
  };
  protoOf(LegacyAudioPost).e5b = function (_set____db54di) {
    this.s5e_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).f5b = function () {
    return this.s5e_1;
  };
  protoOf(LegacyAudioPost).g5b = function (_set____db54di) {
    this.t5e_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).h5b = function () {
    return this.t5e_1;
  };
  protoOf(LegacyAudioPost).i5b = function (_set____db54di) {
    this.u5e_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).j5b = function () {
    return this.u5e_1;
  };
  protoOf(LegacyAudioPost).k5b = function (_set____db54di) {
    this.v5e_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).l5b = function () {
    return this.v5e_1;
  };
  protoOf(LegacyAudioPost).p55 = function (_set____db54di) {
    this.w5e_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).q55 = function () {
    return this.w5e_1;
  };
  protoOf(LegacyAudioPost).m5b = function (_set____db54di) {
    this.x5e_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).n5b = function () {
    return this.x5e_1;
  };
  protoOf(LegacyAudioPost).o5b = function (_set____db54di) {
    this.y5e_1 = _set____db54di;
  };
  protoOf(LegacyAudioPost).p5b = function () {
    return this.y5e_1;
  };
  protoOf(LegacyAudioPost).c51 = function (_set____db54di) {
    this.caption = _set____db54di;
  };
  protoOf(LegacyAudioPost).d51 = function () {
    return this.caption;
  };
  function LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().ob(), StringSerializer_getInstance());
  }
  function LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1_0() {
    return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_12());
  }
  function LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1_1() {
    return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_33());
  }
  function LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1_2() {
    return new ReferenceArraySerializer(getKClass(Dialogue), $serializer_getInstance_27());
  }
  function Companion_22() {
    Companion_instance_22 = this;
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
    tmp.z5e_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, tmp_5, lazy(tmp_6, LegacyChatPost$Companion$$childSerializers$_anonymous__33v5m1_2)];
  }
  protoOf(Companion_22).r4k = function () {
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyChatPost', this, 41);
    tmp0_serialDesc.ew('blog_name', false);
    tmp0_serialDesc.ew('id_string', false);
    tmp0_serialDesc.ew('genesis_post_id', false);
    tmp0_serialDesc.ew('post_url', false);
    tmp0_serialDesc.ew('parent_post_url', false);
    tmp0_serialDesc.ew('type', false);
    tmp0_serialDesc.ew('timestamp', false);
    tmp0_serialDesc.ew('date', false);
    tmp0_serialDesc.ew('format', false);
    tmp0_serialDesc.ew('reblog_key', false);
    tmp0_serialDesc.ew('tags', false);
    tmp0_serialDesc.ew('bookmarklet', false);
    tmp0_serialDesc.ew('mobile', false);
    tmp0_serialDesc.ew('source_url', false);
    tmp0_serialDesc.ew('source_title', false);
    tmp0_serialDesc.ew('liked', false);
    tmp0_serialDesc.ew('state', false);
    tmp0_serialDesc.ew('title', false);
    tmp0_serialDesc.ew('body', false);
    tmp0_serialDesc.ew('note_count', false);
    tmp0_serialDesc.ew('summary', false);
    tmp0_serialDesc.ew('slug', false);
    tmp0_serialDesc.ew('reblogged_from_id', false);
    tmp0_serialDesc.ew('reblogged_from_url', false);
    tmp0_serialDesc.ew('reblogged_from_name', false);
    tmp0_serialDesc.ew('reblogged_from_title', false);
    tmp0_serialDesc.ew('reblogged_from_uuid', false);
    tmp0_serialDesc.ew('reblogged_from_can_message', false);
    tmp0_serialDesc.ew('reblogged_from_following', false);
    tmp0_serialDesc.ew('reblogged_root_id', false);
    tmp0_serialDesc.ew('reblogged_root_url', false);
    tmp0_serialDesc.ew('reblogged_root_name', false);
    tmp0_serialDesc.ew('reblogged_root_title', false);
    tmp0_serialDesc.ew('reblogged_root_uuid', false);
    tmp0_serialDesc.ew('reblogged_root_can_message', false);
    tmp0_serialDesc.ew('reblogged_root_following', false);
    tmp0_serialDesc.ew('notes', false);
    tmp0_serialDesc.ew('blog', false);
    tmp0_serialDesc.ew('reblog', false);
    tmp0_serialDesc.ew('trail', false);
    tmp0_serialDesc.ew('dialogue', true);
    this.a5f_1 = tmp0_serialDesc;
  }
  protoOf($serializer_21).on = function (decoder) {
    var tmp0_desc = this.a5f_1;
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
    var tmp46_input = decoder.mq(tmp0_desc);
    var tmp47_cached = Companion_getInstance_23().z5e_1;
    if (tmp46_input.cr()) {
      tmp5_local0 = tmp46_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp46_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp46_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp46_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp46_input.ar(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp46_input.ar(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp46_input.ar(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp46_input.ar(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp46_input.ar(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp46_input.ar(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp46_input.ar(tmp0_desc, 10, tmp47_cached[10].n1(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp46_input.ar(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp46_input.ar(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp46_input.ar(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp46_input.ar(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp46_input.ar(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp46_input.ar(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp46_input.ar(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp46_input.ar(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp46_input.ar(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp46_input.ar(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp46_input.ar(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp46_input.ar(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp46_input.ar(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp46_input.ar(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp46_input.ar(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp46_input.ar(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp46_input.ar(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp46_input.ar(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp46_input.ar(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp46_input.ar(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp46_input.ar(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp46_input.ar(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp46_input.ar(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp46_input.ar(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp46_input.ar(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp46_input.ar(tmp0_desc, 36, tmp47_cached[36].n1(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp46_input.ar(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp46_input.ar(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp46_input.ar(tmp0_desc, 39, tmp47_cached[39].n1(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp46_input.ar(tmp0_desc, 40, tmp47_cached[40].n1(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp46_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp46_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp46_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp46_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp46_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp46_input.ar(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp46_input.ar(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp46_input.ar(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp46_input.ar(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp46_input.ar(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp46_input.ar(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp46_input.ar(tmp0_desc, 10, tmp47_cached[10].n1(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp46_input.ar(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp46_input.ar(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp46_input.ar(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp46_input.ar(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp46_input.ar(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp46_input.ar(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp46_input.ar(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp46_input.ar(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp46_input.ar(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp46_input.ar(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp46_input.ar(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp46_input.ar(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp46_input.ar(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp46_input.ar(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp46_input.ar(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp46_input.ar(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp46_input.ar(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp46_input.ar(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp46_input.ar(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp46_input.ar(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp46_input.ar(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp46_input.ar(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp46_input.ar(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp46_input.ar(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp46_input.ar(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp46_input.ar(tmp0_desc, 36, tmp47_cached[36].n1(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp46_input.ar(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp46_input.ar(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp46_input.ar(tmp0_desc, 39, tmp47_cached[39].n1(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp46_input.ar(tmp0_desc, 40, tmp47_cached[40].n1(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp46_input.nq(tmp0_desc);
    return LegacyChatPost_init_$Create$(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, null);
  };
  protoOf($serializer_21).nn = function () {
    return this.a5f_1;
  };
  protoOf($serializer_21).tw = function () {
    var tmp0_cached = Companion_getInstance_23().z5e_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].n1()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].n1()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].n1()), get_nullable(tmp0_cached[40].n1())];
  };
  var $serializer_instance_20;
  function $serializer_getInstance_20() {
    if ($serializer_instance_20 == null)
      new $serializer_21();
    return $serializer_instance_20;
  }
  function LegacyChatPost_init_$Init$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, dialogue, serializationConstructorMarker, $this) {
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_20().a5f_1);
    }
    Post.call($this);
    $this.b5f_1 = blogName;
    $this.c5f_1 = idString;
    $this.d5f_1 = genesisPostId;
    $this.e5f_1 = postUrl;
    $this.f5f_1 = parentPostUrl;
    $this.g5f_1 = type;
    $this.h5f_1 = timestamp;
    $this.i5f_1 = date;
    $this.j5f_1 = format;
    $this.k5f_1 = reblogKey;
    $this.l5f_1 = tags;
    $this.m5f_1 = isBookmarklet;
    $this.n5f_1 = isMobile;
    $this.o5f_1 = sourceUrl;
    $this.p5f_1 = sourceTitle;
    $this.q5f_1 = isLiked;
    $this.r5f_1 = state;
    $this.s5f_1 = title;
    $this.t5f_1 = body;
    $this.u5f_1 = noteCount;
    $this.v5f_1 = summary;
    $this.w5f_1 = slug;
    $this.x5f_1 = rebloggedFromId;
    $this.y5f_1 = rebloggedFromUrl;
    $this.z5f_1 = rebloggedFromName;
    $this.a5g_1 = rebloggedFromTitle;
    $this.b5g_1 = rebloggedFromUuid;
    $this.c5g_1 = rebloggedFromCanMessage;
    $this.d5g_1 = rebloggedFromFollowing;
    $this.e5g_1 = rebloggedRootId;
    $this.f5g_1 = rebloggedRootUrl;
    $this.g5g_1 = rebloggedRootName;
    $this.h5g_1 = rebloggedRootTitle;
    $this.i5g_1 = rebloggedRootUuid;
    $this.j5g_1 = rebloggedRootCanMessage;
    $this.k5g_1 = rebloggedRootFollowing;
    $this.l5g_1 = notes;
    $this.m5g_1 = blog;
    $this.n5g_1 = reblog;
    $this.o5g_1 = trail;
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
    Companion_getInstance_23();
    Post.call(this);
    this.b5f_1 = blogName;
    this.c5f_1 = idString;
    this.d5f_1 = genesisPostId;
    this.e5f_1 = postUrl;
    this.f5f_1 = parentPostUrl;
    this.g5f_1 = type;
    this.h5f_1 = timestamp;
    this.i5f_1 = date;
    this.j5f_1 = format;
    this.k5f_1 = reblogKey;
    this.l5f_1 = tags;
    this.m5f_1 = isBookmarklet;
    this.n5f_1 = isMobile;
    this.o5f_1 = sourceUrl;
    this.p5f_1 = sourceTitle;
    this.q5f_1 = isLiked;
    this.r5f_1 = state;
    this.s5f_1 = title;
    this.t5f_1 = body;
    this.u5f_1 = noteCount;
    this.v5f_1 = summary;
    this.w5f_1 = slug;
    this.x5f_1 = rebloggedFromId;
    this.y5f_1 = rebloggedFromUrl;
    this.z5f_1 = rebloggedFromName;
    this.a5g_1 = rebloggedFromTitle;
    this.b5g_1 = rebloggedFromUuid;
    this.c5g_1 = rebloggedFromCanMessage;
    this.d5g_1 = rebloggedFromFollowing;
    this.e5g_1 = rebloggedRootId;
    this.f5g_1 = rebloggedRootUrl;
    this.g5g_1 = rebloggedRootName;
    this.h5g_1 = rebloggedRootTitle;
    this.i5g_1 = rebloggedRootUuid;
    this.j5g_1 = rebloggedRootCanMessage;
    this.k5g_1 = rebloggedRootFollowing;
    this.l5g_1 = notes;
    this.m5g_1 = blog;
    this.n5g_1 = reblog;
    this.o5g_1 = trail;
    this.dialogue = null;
  }
  protoOf(LegacyChatPost).k4z = function (_set____db54di) {
    this.b5f_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).l4z = function () {
    return this.b5f_1;
  };
  protoOf(LegacyChatPost).l59 = function (_set____db54di) {
    this.c5f_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).m59 = function () {
    return this.c5f_1;
  };
  protoOf(LegacyChatPost).n59 = function (_set____db54di) {
    this.d5f_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).o59 = function () {
    return this.d5f_1;
  };
  protoOf(LegacyChatPost).p59 = function (_set____db54di) {
    this.e5f_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).q59 = function () {
    return this.e5f_1;
  };
  protoOf(LegacyChatPost).r59 = function (_set____db54di) {
    this.f5f_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).s59 = function () {
    return this.f5f_1;
  };
  protoOf(LegacyChatPost).a50 = function (_set____db54di) {
    this.g5f_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).b50 = function () {
    return this.g5f_1;
  };
  protoOf(LegacyChatPost).t59 = function (_set____db54di) {
    this.h5f_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).u56 = function () {
    return this.h5f_1;
  };
  protoOf(LegacyChatPost).n51 = function (_set____db54di) {
    this.i5f_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).o51 = function () {
    return this.i5f_1;
  };
  protoOf(LegacyChatPost).p51 = function (_set____db54di) {
    this.j5f_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).q51 = function () {
    return this.j5f_1;
  };
  protoOf(LegacyChatPost).q53 = function (_set____db54di) {
    this.k5f_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).r53 = function () {
    return this.k5f_1;
  };
  protoOf(LegacyChatPost).l52 = function (_set____db54di) {
    this.l5f_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).k51 = function () {
    return this.l5f_1;
  };
  protoOf(LegacyChatPost).u59 = function (_set____db54di) {
    this.m5f_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).v59 = function () {
    return this.m5f_1;
  };
  protoOf(LegacyChatPost).w59 = function (_set____db54di) {
    this.n5f_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).x59 = function () {
    return this.n5f_1;
  };
  protoOf(LegacyChatPost).y59 = function (_set____db54di) {
    this.o5f_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).z59 = function () {
    return this.o5f_1;
  };
  protoOf(LegacyChatPost).a5a = function (_set____db54di) {
    this.p5f_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).b5a = function () {
    return this.p5f_1;
  };
  protoOf(LegacyChatPost).c5a = function (_set____db54di) {
    this.q5f_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).d5a = function () {
    return this.q5f_1;
  };
  protoOf(LegacyChatPost).v4y = function (_set____db54di) {
    this.r5f_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).w4y = function () {
    return this.r5f_1;
  };
  protoOf(LegacyChatPost).q50 = function (_set____db54di) {
    this.s5f_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).r50 = function () {
    return this.s5f_1;
  };
  protoOf(LegacyChatPost).m52 = function (_set____db54di) {
    this.t5f_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).n52 = function () {
    return this.t5f_1;
  };
  protoOf(LegacyChatPost).e5a = function (_set____db54di) {
    this.u5f_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).f5a = function () {
    return this.u5f_1;
  };
  protoOf(LegacyChatPost).g5a = function (_set____db54di) {
    this.v5f_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).h5a = function () {
    return this.v5f_1;
  };
  protoOf(LegacyChatPost).r51 = function (_set____db54di) {
    this.w5f_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).s51 = function () {
    return this.w5f_1;
  };
  protoOf(LegacyChatPost).i5a = function (_set____db54di) {
    this.x5f_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).j5a = function () {
    return this.x5f_1;
  };
  protoOf(LegacyChatPost).k5a = function (_set____db54di) {
    this.y5f_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).l5a = function () {
    return this.y5f_1;
  };
  protoOf(LegacyChatPost).m5a = function (_set____db54di) {
    this.z5f_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).n5a = function () {
    return this.z5f_1;
  };
  protoOf(LegacyChatPost).o5a = function (_set____db54di) {
    this.a5g_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).p5a = function () {
    return this.a5g_1;
  };
  protoOf(LegacyChatPost).q5a = function (_set____db54di) {
    this.b5g_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).r5a = function () {
    return this.b5g_1;
  };
  protoOf(LegacyChatPost).s5a = function (_set____db54di) {
    this.c5g_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).t5a = function () {
    return this.c5g_1;
  };
  protoOf(LegacyChatPost).u5a = function (_set____db54di) {
    this.d5g_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).v5a = function () {
    return this.d5g_1;
  };
  protoOf(LegacyChatPost).w5a = function (_set____db54di) {
    this.e5g_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).x5a = function () {
    return this.e5g_1;
  };
  protoOf(LegacyChatPost).y5a = function (_set____db54di) {
    this.f5g_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).z5a = function () {
    return this.f5g_1;
  };
  protoOf(LegacyChatPost).a5b = function (_set____db54di) {
    this.g5g_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).b5b = function () {
    return this.g5g_1;
  };
  protoOf(LegacyChatPost).c5b = function (_set____db54di) {
    this.h5g_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).d5b = function () {
    return this.h5g_1;
  };
  protoOf(LegacyChatPost).e5b = function (_set____db54di) {
    this.i5g_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).f5b = function () {
    return this.i5g_1;
  };
  protoOf(LegacyChatPost).g5b = function (_set____db54di) {
    this.j5g_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).h5b = function () {
    return this.j5g_1;
  };
  protoOf(LegacyChatPost).i5b = function (_set____db54di) {
    this.k5g_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).j5b = function () {
    return this.k5g_1;
  };
  protoOf(LegacyChatPost).k5b = function (_set____db54di) {
    this.l5g_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).l5b = function () {
    return this.l5g_1;
  };
  protoOf(LegacyChatPost).p55 = function (_set____db54di) {
    this.m5g_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).q55 = function () {
    return this.m5g_1;
  };
  protoOf(LegacyChatPost).m5b = function (_set____db54di) {
    this.n5g_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).n5b = function () {
    return this.n5g_1;
  };
  protoOf(LegacyChatPost).o5b = function (_set____db54di) {
    this.o5g_1 = _set____db54di;
  };
  protoOf(LegacyChatPost).p5b = function () {
    return this.o5g_1;
  };
  protoOf(LegacyChatPost).p5g = function () {
    return this.dialogue;
  };
  function LegacyLinkPost$Companion$$childSerializers$_anonymous__ugz0c9() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().ob(), StringSerializer_getInstance());
  }
  function LegacyLinkPost$Companion$$childSerializers$_anonymous__ugz0c9_0() {
    return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_12());
  }
  function LegacyLinkPost$Companion$$childSerializers$_anonymous__ugz0c9_1() {
    return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_33());
  }
  function Companion_23() {
    Companion_instance_23 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyLinkPost$Companion$$childSerializers$_anonymous__ugz0c9);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyLinkPost$Companion$$childSerializers$_anonymous__ugz0c9_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.q5g_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyLinkPost$Companion$$childSerializers$_anonymous__ugz0c9_1), null, null, null, null, null];
  }
  protoOf(Companion_23).r4k = function () {
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyLinkPost', this, 45);
    tmp0_serialDesc.ew('blog_name', false);
    tmp0_serialDesc.ew('id_string', false);
    tmp0_serialDesc.ew('genesis_post_id', false);
    tmp0_serialDesc.ew('post_url', false);
    tmp0_serialDesc.ew('parent_post_url', false);
    tmp0_serialDesc.ew('type', false);
    tmp0_serialDesc.ew('timestamp', false);
    tmp0_serialDesc.ew('date', false);
    tmp0_serialDesc.ew('format', false);
    tmp0_serialDesc.ew('reblog_key', false);
    tmp0_serialDesc.ew('tags', false);
    tmp0_serialDesc.ew('bookmarklet', false);
    tmp0_serialDesc.ew('mobile', false);
    tmp0_serialDesc.ew('source_url', false);
    tmp0_serialDesc.ew('source_title', false);
    tmp0_serialDesc.ew('liked', false);
    tmp0_serialDesc.ew('state', false);
    tmp0_serialDesc.ew('title', false);
    tmp0_serialDesc.ew('body', false);
    tmp0_serialDesc.ew('note_count', false);
    tmp0_serialDesc.ew('summary', false);
    tmp0_serialDesc.ew('slug', false);
    tmp0_serialDesc.ew('reblogged_from_id', false);
    tmp0_serialDesc.ew('reblogged_from_url', false);
    tmp0_serialDesc.ew('reblogged_from_name', false);
    tmp0_serialDesc.ew('reblogged_from_title', false);
    tmp0_serialDesc.ew('reblogged_from_uuid', false);
    tmp0_serialDesc.ew('reblogged_from_can_message', false);
    tmp0_serialDesc.ew('reblogged_from_following', false);
    tmp0_serialDesc.ew('reblogged_root_id', false);
    tmp0_serialDesc.ew('reblogged_root_url', false);
    tmp0_serialDesc.ew('reblogged_root_name', false);
    tmp0_serialDesc.ew('reblogged_root_title', false);
    tmp0_serialDesc.ew('reblogged_root_uuid', false);
    tmp0_serialDesc.ew('reblogged_root_can_message', false);
    tmp0_serialDesc.ew('reblogged_root_following', false);
    tmp0_serialDesc.ew('notes', false);
    tmp0_serialDesc.ew('blog', false);
    tmp0_serialDesc.ew('reblog', false);
    tmp0_serialDesc.ew('trail', false);
    tmp0_serialDesc.ew('description', true);
    tmp0_serialDesc.ew('url', true);
    tmp0_serialDesc.ew('link_author', true);
    tmp0_serialDesc.ew('excerpt', true);
    tmp0_serialDesc.ew('publisher', true);
    this.r5g_1 = tmp0_serialDesc;
  }
  protoOf($serializer_22).on = function (decoder) {
    var tmp0_desc = this.r5g_1;
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
    var tmp50_input = decoder.mq(tmp0_desc);
    var tmp51_cached = Companion_getInstance_24().q5g_1;
    if (tmp50_input.cr()) {
      tmp5_local0 = tmp50_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp50_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp50_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp50_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp50_input.ar(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp50_input.ar(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp50_input.ar(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp50_input.ar(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp50_input.ar(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp50_input.ar(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp50_input.ar(tmp0_desc, 10, tmp51_cached[10].n1(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp50_input.ar(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp50_input.ar(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp50_input.ar(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp50_input.ar(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp50_input.ar(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp50_input.ar(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp50_input.ar(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp50_input.ar(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp50_input.ar(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp50_input.ar(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp50_input.ar(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp50_input.ar(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp50_input.ar(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp50_input.ar(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp50_input.ar(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp50_input.ar(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp50_input.ar(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp50_input.ar(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp50_input.ar(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp50_input.ar(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp50_input.ar(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp50_input.ar(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp50_input.ar(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp50_input.ar(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp50_input.ar(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp50_input.ar(tmp0_desc, 36, tmp51_cached[36].n1(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp50_input.ar(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp50_input.ar(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp50_input.ar(tmp0_desc, 39, tmp51_cached[39].n1(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp50_input.ar(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp50_input.ar(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp47_local42 = tmp50_input.ar(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp48_local43 = tmp50_input.ar(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
      tmp49_local44 = tmp50_input.ar(tmp0_desc, 44, StringSerializer_getInstance(), tmp49_local44);
      tmp4_bitMask1 = tmp4_bitMask1 | 4096;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp50_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp50_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp50_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp50_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp50_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp50_input.ar(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp50_input.ar(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp50_input.ar(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp50_input.ar(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp50_input.ar(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp50_input.ar(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp50_input.ar(tmp0_desc, 10, tmp51_cached[10].n1(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp50_input.ar(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp50_input.ar(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp50_input.ar(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp50_input.ar(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp50_input.ar(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp50_input.ar(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp50_input.ar(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp50_input.ar(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp50_input.ar(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp50_input.ar(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp50_input.ar(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp50_input.ar(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp50_input.ar(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp50_input.ar(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp50_input.ar(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp50_input.ar(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp50_input.ar(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp50_input.ar(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp50_input.ar(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp50_input.ar(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp50_input.ar(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp50_input.ar(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp50_input.ar(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp50_input.ar(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp50_input.ar(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp50_input.ar(tmp0_desc, 36, tmp51_cached[36].n1(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp50_input.ar(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp50_input.ar(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp50_input.ar(tmp0_desc, 39, tmp51_cached[39].n1(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp50_input.ar(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp50_input.ar(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp47_local42 = tmp50_input.ar(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp48_local43 = tmp50_input.ar(tmp0_desc, 43, StringSerializer_getInstance(), tmp48_local43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          case 44:
            tmp49_local44 = tmp50_input.ar(tmp0_desc, 44, StringSerializer_getInstance(), tmp49_local44);
            tmp4_bitMask1 = tmp4_bitMask1 | 4096;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp50_input.nq(tmp0_desc);
    return LegacyLinkPost_init_$Create$(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, tmp47_local42, tmp48_local43, tmp49_local44, null);
  };
  protoOf($serializer_22).nn = function () {
    return this.r5g_1;
  };
  protoOf($serializer_22).tw = function () {
    var tmp0_cached = Companion_getInstance_24().q5g_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].n1()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].n1()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].n1()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_21;
  function $serializer_getInstance_21() {
    if ($serializer_instance_21 == null)
      new $serializer_22();
    return $serializer_instance_21;
  }
  function LegacyLinkPost_init_$Init$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, description, url, linkAuthor, excerpt, publisher, serializationConstructorMarker, $this) {
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_21().r5g_1);
    }
    Post.call($this);
    $this.s5g_1 = blogName;
    $this.t5g_1 = idString;
    $this.u5g_1 = genesisPostId;
    $this.v5g_1 = postUrl;
    $this.w5g_1 = parentPostUrl;
    $this.x5g_1 = type;
    $this.y5g_1 = timestamp;
    $this.z5g_1 = date;
    $this.a5h_1 = format;
    $this.b5h_1 = reblogKey;
    $this.c5h_1 = tags;
    $this.d5h_1 = isBookmarklet;
    $this.e5h_1 = isMobile;
    $this.f5h_1 = sourceUrl;
    $this.g5h_1 = sourceTitle;
    $this.h5h_1 = isLiked;
    $this.i5h_1 = state;
    $this.j5h_1 = title;
    $this.k5h_1 = body;
    $this.l5h_1 = noteCount;
    $this.m5h_1 = summary;
    $this.n5h_1 = slug;
    $this.o5h_1 = rebloggedFromId;
    $this.p5h_1 = rebloggedFromUrl;
    $this.q5h_1 = rebloggedFromName;
    $this.r5h_1 = rebloggedFromTitle;
    $this.s5h_1 = rebloggedFromUuid;
    $this.t5h_1 = rebloggedFromCanMessage;
    $this.u5h_1 = rebloggedFromFollowing;
    $this.v5h_1 = rebloggedRootId;
    $this.w5h_1 = rebloggedRootUrl;
    $this.x5h_1 = rebloggedRootName;
    $this.y5h_1 = rebloggedRootTitle;
    $this.z5h_1 = rebloggedRootUuid;
    $this.a5i_1 = rebloggedRootCanMessage;
    $this.b5i_1 = rebloggedRootFollowing;
    $this.c5i_1 = notes;
    $this.d5i_1 = blog;
    $this.e5i_1 = reblog;
    $this.f5i_1 = trail;
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
    Companion_getInstance_24();
    Post.call(this);
    this.s5g_1 = blogName;
    this.t5g_1 = idString;
    this.u5g_1 = genesisPostId;
    this.v5g_1 = postUrl;
    this.w5g_1 = parentPostUrl;
    this.x5g_1 = type;
    this.y5g_1 = timestamp;
    this.z5g_1 = date;
    this.a5h_1 = format;
    this.b5h_1 = reblogKey;
    this.c5h_1 = tags;
    this.d5h_1 = isBookmarklet;
    this.e5h_1 = isMobile;
    this.f5h_1 = sourceUrl;
    this.g5h_1 = sourceTitle;
    this.h5h_1 = isLiked;
    this.i5h_1 = state;
    this.j5h_1 = title;
    this.k5h_1 = body;
    this.l5h_1 = noteCount;
    this.m5h_1 = summary;
    this.n5h_1 = slug;
    this.o5h_1 = rebloggedFromId;
    this.p5h_1 = rebloggedFromUrl;
    this.q5h_1 = rebloggedFromName;
    this.r5h_1 = rebloggedFromTitle;
    this.s5h_1 = rebloggedFromUuid;
    this.t5h_1 = rebloggedFromCanMessage;
    this.u5h_1 = rebloggedFromFollowing;
    this.v5h_1 = rebloggedRootId;
    this.w5h_1 = rebloggedRootUrl;
    this.x5h_1 = rebloggedRootName;
    this.y5h_1 = rebloggedRootTitle;
    this.z5h_1 = rebloggedRootUuid;
    this.a5i_1 = rebloggedRootCanMessage;
    this.b5i_1 = rebloggedRootFollowing;
    this.c5i_1 = notes;
    this.d5i_1 = blog;
    this.e5i_1 = reblog;
    this.f5i_1 = trail;
    this.description = null;
    this.url = null;
    this.linkAuthor = null;
    this.excerpt = null;
    this.publisher = null;
  }
  protoOf(LegacyLinkPost).k4z = function (_set____db54di) {
    this.s5g_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).l4z = function () {
    return this.s5g_1;
  };
  protoOf(LegacyLinkPost).l59 = function (_set____db54di) {
    this.t5g_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).m59 = function () {
    return this.t5g_1;
  };
  protoOf(LegacyLinkPost).n59 = function (_set____db54di) {
    this.u5g_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).o59 = function () {
    return this.u5g_1;
  };
  protoOf(LegacyLinkPost).p59 = function (_set____db54di) {
    this.v5g_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).q59 = function () {
    return this.v5g_1;
  };
  protoOf(LegacyLinkPost).r59 = function (_set____db54di) {
    this.w5g_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).s59 = function () {
    return this.w5g_1;
  };
  protoOf(LegacyLinkPost).a50 = function (_set____db54di) {
    this.x5g_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).b50 = function () {
    return this.x5g_1;
  };
  protoOf(LegacyLinkPost).t59 = function (_set____db54di) {
    this.y5g_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).u56 = function () {
    return this.y5g_1;
  };
  protoOf(LegacyLinkPost).n51 = function (_set____db54di) {
    this.z5g_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).o51 = function () {
    return this.z5g_1;
  };
  protoOf(LegacyLinkPost).p51 = function (_set____db54di) {
    this.a5h_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).q51 = function () {
    return this.a5h_1;
  };
  protoOf(LegacyLinkPost).q53 = function (_set____db54di) {
    this.b5h_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).r53 = function () {
    return this.b5h_1;
  };
  protoOf(LegacyLinkPost).l52 = function (_set____db54di) {
    this.c5h_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).k51 = function () {
    return this.c5h_1;
  };
  protoOf(LegacyLinkPost).u59 = function (_set____db54di) {
    this.d5h_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).v59 = function () {
    return this.d5h_1;
  };
  protoOf(LegacyLinkPost).w59 = function (_set____db54di) {
    this.e5h_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).x59 = function () {
    return this.e5h_1;
  };
  protoOf(LegacyLinkPost).y59 = function (_set____db54di) {
    this.f5h_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).z59 = function () {
    return this.f5h_1;
  };
  protoOf(LegacyLinkPost).a5a = function (_set____db54di) {
    this.g5h_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).b5a = function () {
    return this.g5h_1;
  };
  protoOf(LegacyLinkPost).c5a = function (_set____db54di) {
    this.h5h_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).d5a = function () {
    return this.h5h_1;
  };
  protoOf(LegacyLinkPost).v4y = function (_set____db54di) {
    this.i5h_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).w4y = function () {
    return this.i5h_1;
  };
  protoOf(LegacyLinkPost).q50 = function (_set____db54di) {
    this.j5h_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).r50 = function () {
    return this.j5h_1;
  };
  protoOf(LegacyLinkPost).m52 = function (_set____db54di) {
    this.k5h_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).n52 = function () {
    return this.k5h_1;
  };
  protoOf(LegacyLinkPost).e5a = function (_set____db54di) {
    this.l5h_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).f5a = function () {
    return this.l5h_1;
  };
  protoOf(LegacyLinkPost).g5a = function (_set____db54di) {
    this.m5h_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).h5a = function () {
    return this.m5h_1;
  };
  protoOf(LegacyLinkPost).r51 = function (_set____db54di) {
    this.n5h_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).s51 = function () {
    return this.n5h_1;
  };
  protoOf(LegacyLinkPost).i5a = function (_set____db54di) {
    this.o5h_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).j5a = function () {
    return this.o5h_1;
  };
  protoOf(LegacyLinkPost).k5a = function (_set____db54di) {
    this.p5h_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).l5a = function () {
    return this.p5h_1;
  };
  protoOf(LegacyLinkPost).m5a = function (_set____db54di) {
    this.q5h_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).n5a = function () {
    return this.q5h_1;
  };
  protoOf(LegacyLinkPost).o5a = function (_set____db54di) {
    this.r5h_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).p5a = function () {
    return this.r5h_1;
  };
  protoOf(LegacyLinkPost).q5a = function (_set____db54di) {
    this.s5h_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).r5a = function () {
    return this.s5h_1;
  };
  protoOf(LegacyLinkPost).s5a = function (_set____db54di) {
    this.t5h_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).t5a = function () {
    return this.t5h_1;
  };
  protoOf(LegacyLinkPost).u5a = function (_set____db54di) {
    this.u5h_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).v5a = function () {
    return this.u5h_1;
  };
  protoOf(LegacyLinkPost).w5a = function (_set____db54di) {
    this.v5h_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).x5a = function () {
    return this.v5h_1;
  };
  protoOf(LegacyLinkPost).y5a = function (_set____db54di) {
    this.w5h_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).z5a = function () {
    return this.w5h_1;
  };
  protoOf(LegacyLinkPost).a5b = function (_set____db54di) {
    this.x5h_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).b5b = function () {
    return this.x5h_1;
  };
  protoOf(LegacyLinkPost).c5b = function (_set____db54di) {
    this.y5h_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).d5b = function () {
    return this.y5h_1;
  };
  protoOf(LegacyLinkPost).e5b = function (_set____db54di) {
    this.z5h_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).f5b = function () {
    return this.z5h_1;
  };
  protoOf(LegacyLinkPost).g5b = function (_set____db54di) {
    this.a5i_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).h5b = function () {
    return this.a5i_1;
  };
  protoOf(LegacyLinkPost).i5b = function (_set____db54di) {
    this.b5i_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).j5b = function () {
    return this.b5i_1;
  };
  protoOf(LegacyLinkPost).k5b = function (_set____db54di) {
    this.c5i_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).l5b = function () {
    return this.c5i_1;
  };
  protoOf(LegacyLinkPost).p55 = function (_set____db54di) {
    this.d5i_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).q55 = function () {
    return this.d5i_1;
  };
  protoOf(LegacyLinkPost).m5b = function (_set____db54di) {
    this.e5i_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).n5b = function () {
    return this.e5i_1;
  };
  protoOf(LegacyLinkPost).o5b = function (_set____db54di) {
    this.f5i_1 = _set____db54di;
  };
  protoOf(LegacyLinkPost).p5b = function () {
    return this.f5i_1;
  };
  protoOf(LegacyLinkPost).s50 = function (_set____db54di) {
    this.description = _set____db54di;
  };
  protoOf(LegacyLinkPost).t50 = function () {
    return this.description;
  };
  protoOf(LegacyLinkPost).x51 = function (_set____db54di) {
    this.url = _set____db54di;
  };
  protoOf(LegacyLinkPost).d3c = function () {
    return this.url;
  };
  protoOf(LegacyLinkPost).g5i = function (_set____db54di) {
    this.linkAuthor = _set____db54di;
  };
  protoOf(LegacyLinkPost).h5i = function () {
    return this.linkAuthor;
  };
  protoOf(LegacyLinkPost).a52 = function (_set____db54di) {
    this.excerpt = _set____db54di;
  };
  protoOf(LegacyLinkPost).b52 = function () {
    return this.excerpt;
  };
  protoOf(LegacyLinkPost).i5i = function (_set____db54di) {
    this.publisher = _set____db54di;
  };
  protoOf(LegacyLinkPost).j5i = function () {
    return this.publisher;
  };
  function LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().ob(), StringSerializer_getInstance());
  }
  function LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3_0() {
    return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_12());
  }
  function LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3_1() {
    return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_33());
  }
  function LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3_2() {
    return new ReferenceArraySerializer(getKClass(Photo), $serializer_getInstance_28());
  }
  function Companion_24() {
    Companion_instance_24 = this;
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
    tmp.k5i_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, tmp_5, null, null, null, lazy(tmp_6, LegacyPhotoPost$Companion$$childSerializers$_anonymous__ydiyf3_2)];
  }
  protoOf(Companion_24).r4k = function () {
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyPhotoPost', this, 44);
    tmp0_serialDesc.ew('blog_name', false);
    tmp0_serialDesc.ew('id_string', false);
    tmp0_serialDesc.ew('genesis_post_id', false);
    tmp0_serialDesc.ew('post_url', false);
    tmp0_serialDesc.ew('parent_post_url', false);
    tmp0_serialDesc.ew('type', false);
    tmp0_serialDesc.ew('timestamp', false);
    tmp0_serialDesc.ew('date', false);
    tmp0_serialDesc.ew('format', false);
    tmp0_serialDesc.ew('reblog_key', false);
    tmp0_serialDesc.ew('tags', false);
    tmp0_serialDesc.ew('bookmarklet', false);
    tmp0_serialDesc.ew('mobile', false);
    tmp0_serialDesc.ew('source_url', false);
    tmp0_serialDesc.ew('source_title', false);
    tmp0_serialDesc.ew('liked', false);
    tmp0_serialDesc.ew('state', false);
    tmp0_serialDesc.ew('title', false);
    tmp0_serialDesc.ew('body', false);
    tmp0_serialDesc.ew('note_count', false);
    tmp0_serialDesc.ew('summary', false);
    tmp0_serialDesc.ew('slug', false);
    tmp0_serialDesc.ew('reblogged_from_id', false);
    tmp0_serialDesc.ew('reblogged_from_url', false);
    tmp0_serialDesc.ew('reblogged_from_name', false);
    tmp0_serialDesc.ew('reblogged_from_title', false);
    tmp0_serialDesc.ew('reblogged_from_uuid', false);
    tmp0_serialDesc.ew('reblogged_from_can_message', false);
    tmp0_serialDesc.ew('reblogged_from_following', false);
    tmp0_serialDesc.ew('reblogged_root_id', false);
    tmp0_serialDesc.ew('reblogged_root_url', false);
    tmp0_serialDesc.ew('reblogged_root_name', false);
    tmp0_serialDesc.ew('reblogged_root_title', false);
    tmp0_serialDesc.ew('reblogged_root_uuid', false);
    tmp0_serialDesc.ew('reblogged_root_can_message', false);
    tmp0_serialDesc.ew('reblogged_root_following', false);
    tmp0_serialDesc.ew('notes', false);
    tmp0_serialDesc.ew('blog', false);
    tmp0_serialDesc.ew('reblog', false);
    tmp0_serialDesc.ew('trail', false);
    tmp0_serialDesc.ew('caption', true);
    tmp0_serialDesc.ew('width', true);
    tmp0_serialDesc.ew('height', true);
    tmp0_serialDesc.ew('photos', true);
    this.l5i_1 = tmp0_serialDesc;
  }
  protoOf($serializer_23).on = function (decoder) {
    var tmp0_desc = this.l5i_1;
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
    var tmp49_input = decoder.mq(tmp0_desc);
    var tmp50_cached = Companion_getInstance_25().k5i_1;
    if (tmp49_input.cr()) {
      tmp5_local0 = tmp49_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp49_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp49_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp49_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp49_input.ar(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp49_input.ar(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp49_input.ar(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp49_input.ar(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp49_input.ar(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp49_input.ar(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp49_input.ar(tmp0_desc, 10, tmp50_cached[10].n1(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp49_input.ar(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp49_input.ar(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp49_input.ar(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp49_input.ar(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp49_input.ar(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp49_input.ar(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp49_input.ar(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp49_input.ar(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp49_input.ar(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp49_input.ar(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp49_input.ar(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp49_input.ar(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp49_input.ar(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp49_input.ar(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp49_input.ar(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp49_input.ar(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp49_input.ar(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp49_input.ar(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp49_input.ar(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp49_input.ar(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp49_input.ar(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp49_input.ar(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp49_input.ar(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp49_input.ar(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp49_input.ar(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp49_input.ar(tmp0_desc, 36, tmp50_cached[36].n1(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp49_input.ar(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp49_input.ar(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp49_input.ar(tmp0_desc, 39, tmp50_cached[39].n1(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp49_input.ar(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp49_input.ar(tmp0_desc, 41, IntSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp47_local42 = tmp49_input.ar(tmp0_desc, 42, IntSerializer_getInstance(), tmp47_local42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp48_local43 = tmp49_input.ar(tmp0_desc, 43, tmp50_cached[43].n1(), tmp48_local43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp49_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp49_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp49_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp49_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp49_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp49_input.ar(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp49_input.ar(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp49_input.ar(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp49_input.ar(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp49_input.ar(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp49_input.ar(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp49_input.ar(tmp0_desc, 10, tmp50_cached[10].n1(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp49_input.ar(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp49_input.ar(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp49_input.ar(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp49_input.ar(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp49_input.ar(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp49_input.ar(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp49_input.ar(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp49_input.ar(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp49_input.ar(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp49_input.ar(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp49_input.ar(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp49_input.ar(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp49_input.ar(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp49_input.ar(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp49_input.ar(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp49_input.ar(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp49_input.ar(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp49_input.ar(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp49_input.ar(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp49_input.ar(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp49_input.ar(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp49_input.ar(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp49_input.ar(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp49_input.ar(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp49_input.ar(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp49_input.ar(tmp0_desc, 36, tmp50_cached[36].n1(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp49_input.ar(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp49_input.ar(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp49_input.ar(tmp0_desc, 39, tmp50_cached[39].n1(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp49_input.ar(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp49_input.ar(tmp0_desc, 41, IntSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp47_local42 = tmp49_input.ar(tmp0_desc, 42, IntSerializer_getInstance(), tmp47_local42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp48_local43 = tmp49_input.ar(tmp0_desc, 43, tmp50_cached[43].n1(), tmp48_local43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp49_input.nq(tmp0_desc);
    return LegacyPhotoPost_init_$Create$(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, tmp47_local42, tmp48_local43, null);
  };
  protoOf($serializer_23).nn = function () {
    return this.l5i_1;
  };
  protoOf($serializer_23).tw = function () {
    var tmp0_cached = Companion_getInstance_25().k5i_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].n1()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].n1()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].n1()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[43].n1())];
  };
  var $serializer_instance_22;
  function $serializer_getInstance_22() {
    if ($serializer_instance_22 == null)
      new $serializer_23();
    return $serializer_instance_22;
  }
  function LegacyPhotoPost_init_$Init$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, caption, width, height, photos, serializationConstructorMarker, $this) {
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_22().l5i_1);
    }
    Post.call($this);
    $this.m5i_1 = blogName;
    $this.n5i_1 = idString;
    $this.o5i_1 = genesisPostId;
    $this.p5i_1 = postUrl;
    $this.q5i_1 = parentPostUrl;
    $this.r5i_1 = type;
    $this.s5i_1 = timestamp;
    $this.t5i_1 = date;
    $this.u5i_1 = format;
    $this.v5i_1 = reblogKey;
    $this.w5i_1 = tags;
    $this.x5i_1 = isBookmarklet;
    $this.y5i_1 = isMobile;
    $this.z5i_1 = sourceUrl;
    $this.a5j_1 = sourceTitle;
    $this.b5j_1 = isLiked;
    $this.c5j_1 = state;
    $this.d5j_1 = title;
    $this.e5j_1 = body;
    $this.f5j_1 = noteCount;
    $this.g5j_1 = summary;
    $this.h5j_1 = slug;
    $this.i5j_1 = rebloggedFromId;
    $this.j5j_1 = rebloggedFromUrl;
    $this.k5j_1 = rebloggedFromName;
    $this.l5j_1 = rebloggedFromTitle;
    $this.m5j_1 = rebloggedFromUuid;
    $this.n5j_1 = rebloggedFromCanMessage;
    $this.o5j_1 = rebloggedFromFollowing;
    $this.p5j_1 = rebloggedRootId;
    $this.q5j_1 = rebloggedRootUrl;
    $this.r5j_1 = rebloggedRootName;
    $this.s5j_1 = rebloggedRootTitle;
    $this.t5j_1 = rebloggedRootUuid;
    $this.u5j_1 = rebloggedRootCanMessage;
    $this.v5j_1 = rebloggedRootFollowing;
    $this.w5j_1 = notes;
    $this.x5j_1 = blog;
    $this.y5j_1 = reblog;
    $this.z5j_1 = trail;
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
    Companion_getInstance_25();
    Post.call(this);
    this.m5i_1 = blogName;
    this.n5i_1 = idString;
    this.o5i_1 = genesisPostId;
    this.p5i_1 = postUrl;
    this.q5i_1 = parentPostUrl;
    this.r5i_1 = type;
    this.s5i_1 = timestamp;
    this.t5i_1 = date;
    this.u5i_1 = format;
    this.v5i_1 = reblogKey;
    this.w5i_1 = tags;
    this.x5i_1 = isBookmarklet;
    this.y5i_1 = isMobile;
    this.z5i_1 = sourceUrl;
    this.a5j_1 = sourceTitle;
    this.b5j_1 = isLiked;
    this.c5j_1 = state;
    this.d5j_1 = title;
    this.e5j_1 = body;
    this.f5j_1 = noteCount;
    this.g5j_1 = summary;
    this.h5j_1 = slug;
    this.i5j_1 = rebloggedFromId;
    this.j5j_1 = rebloggedFromUrl;
    this.k5j_1 = rebloggedFromName;
    this.l5j_1 = rebloggedFromTitle;
    this.m5j_1 = rebloggedFromUuid;
    this.n5j_1 = rebloggedFromCanMessage;
    this.o5j_1 = rebloggedFromFollowing;
    this.p5j_1 = rebloggedRootId;
    this.q5j_1 = rebloggedRootUrl;
    this.r5j_1 = rebloggedRootName;
    this.s5j_1 = rebloggedRootTitle;
    this.t5j_1 = rebloggedRootUuid;
    this.u5j_1 = rebloggedRootCanMessage;
    this.v5j_1 = rebloggedRootFollowing;
    this.w5j_1 = notes;
    this.x5j_1 = blog;
    this.y5j_1 = reblog;
    this.z5j_1 = trail;
    this.caption = null;
    this.width = null;
    this.height = null;
    this.photos = null;
  }
  protoOf(LegacyPhotoPost).k4z = function (_set____db54di) {
    this.m5i_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).l4z = function () {
    return this.m5i_1;
  };
  protoOf(LegacyPhotoPost).l59 = function (_set____db54di) {
    this.n5i_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).m59 = function () {
    return this.n5i_1;
  };
  protoOf(LegacyPhotoPost).n59 = function (_set____db54di) {
    this.o5i_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).o59 = function () {
    return this.o5i_1;
  };
  protoOf(LegacyPhotoPost).p59 = function (_set____db54di) {
    this.p5i_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).q59 = function () {
    return this.p5i_1;
  };
  protoOf(LegacyPhotoPost).r59 = function (_set____db54di) {
    this.q5i_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).s59 = function () {
    return this.q5i_1;
  };
  protoOf(LegacyPhotoPost).a50 = function (_set____db54di) {
    this.r5i_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).b50 = function () {
    return this.r5i_1;
  };
  protoOf(LegacyPhotoPost).t59 = function (_set____db54di) {
    this.s5i_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).u56 = function () {
    return this.s5i_1;
  };
  protoOf(LegacyPhotoPost).n51 = function (_set____db54di) {
    this.t5i_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).o51 = function () {
    return this.t5i_1;
  };
  protoOf(LegacyPhotoPost).p51 = function (_set____db54di) {
    this.u5i_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).q51 = function () {
    return this.u5i_1;
  };
  protoOf(LegacyPhotoPost).q53 = function (_set____db54di) {
    this.v5i_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).r53 = function () {
    return this.v5i_1;
  };
  protoOf(LegacyPhotoPost).l52 = function (_set____db54di) {
    this.w5i_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).k51 = function () {
    return this.w5i_1;
  };
  protoOf(LegacyPhotoPost).u59 = function (_set____db54di) {
    this.x5i_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).v59 = function () {
    return this.x5i_1;
  };
  protoOf(LegacyPhotoPost).w59 = function (_set____db54di) {
    this.y5i_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).x59 = function () {
    return this.y5i_1;
  };
  protoOf(LegacyPhotoPost).y59 = function (_set____db54di) {
    this.z5i_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).z59 = function () {
    return this.z5i_1;
  };
  protoOf(LegacyPhotoPost).a5a = function (_set____db54di) {
    this.a5j_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).b5a = function () {
    return this.a5j_1;
  };
  protoOf(LegacyPhotoPost).c5a = function (_set____db54di) {
    this.b5j_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).d5a = function () {
    return this.b5j_1;
  };
  protoOf(LegacyPhotoPost).v4y = function (_set____db54di) {
    this.c5j_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).w4y = function () {
    return this.c5j_1;
  };
  protoOf(LegacyPhotoPost).q50 = function (_set____db54di) {
    this.d5j_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).r50 = function () {
    return this.d5j_1;
  };
  protoOf(LegacyPhotoPost).m52 = function (_set____db54di) {
    this.e5j_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).n52 = function () {
    return this.e5j_1;
  };
  protoOf(LegacyPhotoPost).e5a = function (_set____db54di) {
    this.f5j_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).f5a = function () {
    return this.f5j_1;
  };
  protoOf(LegacyPhotoPost).g5a = function (_set____db54di) {
    this.g5j_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).h5a = function () {
    return this.g5j_1;
  };
  protoOf(LegacyPhotoPost).r51 = function (_set____db54di) {
    this.h5j_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).s51 = function () {
    return this.h5j_1;
  };
  protoOf(LegacyPhotoPost).i5a = function (_set____db54di) {
    this.i5j_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).j5a = function () {
    return this.i5j_1;
  };
  protoOf(LegacyPhotoPost).k5a = function (_set____db54di) {
    this.j5j_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).l5a = function () {
    return this.j5j_1;
  };
  protoOf(LegacyPhotoPost).m5a = function (_set____db54di) {
    this.k5j_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).n5a = function () {
    return this.k5j_1;
  };
  protoOf(LegacyPhotoPost).o5a = function (_set____db54di) {
    this.l5j_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).p5a = function () {
    return this.l5j_1;
  };
  protoOf(LegacyPhotoPost).q5a = function (_set____db54di) {
    this.m5j_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).r5a = function () {
    return this.m5j_1;
  };
  protoOf(LegacyPhotoPost).s5a = function (_set____db54di) {
    this.n5j_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).t5a = function () {
    return this.n5j_1;
  };
  protoOf(LegacyPhotoPost).u5a = function (_set____db54di) {
    this.o5j_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).v5a = function () {
    return this.o5j_1;
  };
  protoOf(LegacyPhotoPost).w5a = function (_set____db54di) {
    this.p5j_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).x5a = function () {
    return this.p5j_1;
  };
  protoOf(LegacyPhotoPost).y5a = function (_set____db54di) {
    this.q5j_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).z5a = function () {
    return this.q5j_1;
  };
  protoOf(LegacyPhotoPost).a5b = function (_set____db54di) {
    this.r5j_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).b5b = function () {
    return this.r5j_1;
  };
  protoOf(LegacyPhotoPost).c5b = function (_set____db54di) {
    this.s5j_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).d5b = function () {
    return this.s5j_1;
  };
  protoOf(LegacyPhotoPost).e5b = function (_set____db54di) {
    this.t5j_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).f5b = function () {
    return this.t5j_1;
  };
  protoOf(LegacyPhotoPost).g5b = function (_set____db54di) {
    this.u5j_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).h5b = function () {
    return this.u5j_1;
  };
  protoOf(LegacyPhotoPost).i5b = function (_set____db54di) {
    this.v5j_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).j5b = function () {
    return this.v5j_1;
  };
  protoOf(LegacyPhotoPost).k5b = function (_set____db54di) {
    this.w5j_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).l5b = function () {
    return this.w5j_1;
  };
  protoOf(LegacyPhotoPost).p55 = function (_set____db54di) {
    this.x5j_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).q55 = function () {
    return this.x5j_1;
  };
  protoOf(LegacyPhotoPost).m5b = function (_set____db54di) {
    this.y5j_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).n5b = function () {
    return this.y5j_1;
  };
  protoOf(LegacyPhotoPost).o5b = function (_set____db54di) {
    this.z5j_1 = _set____db54di;
  };
  protoOf(LegacyPhotoPost).p5b = function () {
    return this.z5j_1;
  };
  protoOf(LegacyPhotoPost).c51 = function (_set____db54di) {
    this.caption = _set____db54di;
  };
  protoOf(LegacyPhotoPost).d51 = function () {
    return this.caption;
  };
  protoOf(LegacyPhotoPost).a55 = function (_set____db54di) {
    this.width = _set____db54di;
  };
  protoOf(LegacyPhotoPost).b55 = function () {
    return this.width;
  };
  protoOf(LegacyPhotoPost).y54 = function (_set____db54di) {
    this.height = _set____db54di;
  };
  protoOf(LegacyPhotoPost).z54 = function () {
    return this.height;
  };
  protoOf(LegacyPhotoPost).a5k = function (_set____db54di) {
    this.photos = _set____db54di;
  };
  protoOf(LegacyPhotoPost).b5k = function () {
    return this.photos;
  };
  function LegacyPostcardPost$Companion$$childSerializers$_anonymous__zckyb3() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().ob(), StringSerializer_getInstance());
  }
  function LegacyPostcardPost$Companion$$childSerializers$_anonymous__zckyb3_0() {
    return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_12());
  }
  function LegacyPostcardPost$Companion$$childSerializers$_anonymous__zckyb3_1() {
    return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_33());
  }
  function Companion_25() {
    Companion_instance_25 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyPostcardPost$Companion$$childSerializers$_anonymous__zckyb3);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyPostcardPost$Companion$$childSerializers$_anonymous__zckyb3_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.c5k_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyPostcardPost$Companion$$childSerializers$_anonymous__zckyb3_1), null];
  }
  protoOf(Companion_25).r4k = function () {
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyPostcardPost', this, 41);
    tmp0_serialDesc.ew('blog_name', false);
    tmp0_serialDesc.ew('id_string', false);
    tmp0_serialDesc.ew('genesis_post_id', false);
    tmp0_serialDesc.ew('post_url', false);
    tmp0_serialDesc.ew('parent_post_url', false);
    tmp0_serialDesc.ew('type', false);
    tmp0_serialDesc.ew('timestamp', false);
    tmp0_serialDesc.ew('date', false);
    tmp0_serialDesc.ew('format', false);
    tmp0_serialDesc.ew('reblog_key', false);
    tmp0_serialDesc.ew('tags', false);
    tmp0_serialDesc.ew('bookmarklet', false);
    tmp0_serialDesc.ew('mobile', false);
    tmp0_serialDesc.ew('source_url', false);
    tmp0_serialDesc.ew('source_title', false);
    tmp0_serialDesc.ew('liked', false);
    tmp0_serialDesc.ew('state', false);
    tmp0_serialDesc.ew('title', false);
    tmp0_serialDesc.ew('body', false);
    tmp0_serialDesc.ew('note_count', false);
    tmp0_serialDesc.ew('summary', false);
    tmp0_serialDesc.ew('slug', false);
    tmp0_serialDesc.ew('reblogged_from_id', false);
    tmp0_serialDesc.ew('reblogged_from_url', false);
    tmp0_serialDesc.ew('reblogged_from_name', false);
    tmp0_serialDesc.ew('reblogged_from_title', false);
    tmp0_serialDesc.ew('reblogged_from_uuid', false);
    tmp0_serialDesc.ew('reblogged_from_can_message', false);
    tmp0_serialDesc.ew('reblogged_from_following', false);
    tmp0_serialDesc.ew('reblogged_root_id', false);
    tmp0_serialDesc.ew('reblogged_root_url', false);
    tmp0_serialDesc.ew('reblogged_root_name', false);
    tmp0_serialDesc.ew('reblogged_root_title', false);
    tmp0_serialDesc.ew('reblogged_root_uuid', false);
    tmp0_serialDesc.ew('reblogged_root_can_message', false);
    tmp0_serialDesc.ew('reblogged_root_following', false);
    tmp0_serialDesc.ew('notes', false);
    tmp0_serialDesc.ew('blog', false);
    tmp0_serialDesc.ew('reblog', false);
    tmp0_serialDesc.ew('trail', false);
    tmp0_serialDesc.ew('url', true);
    this.d5k_1 = tmp0_serialDesc;
  }
  protoOf($serializer_24).on = function (decoder) {
    var tmp0_desc = this.d5k_1;
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
    var tmp46_input = decoder.mq(tmp0_desc);
    var tmp47_cached = Companion_getInstance_26().c5k_1;
    if (tmp46_input.cr()) {
      tmp5_local0 = tmp46_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp46_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp46_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp46_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp46_input.ar(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp46_input.ar(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp46_input.ar(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp46_input.ar(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp46_input.ar(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp46_input.ar(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp46_input.ar(tmp0_desc, 10, tmp47_cached[10].n1(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp46_input.ar(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp46_input.ar(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp46_input.ar(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp46_input.ar(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp46_input.ar(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp46_input.ar(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp46_input.ar(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp46_input.ar(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp46_input.ar(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp46_input.ar(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp46_input.ar(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp46_input.ar(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp46_input.ar(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp46_input.ar(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp46_input.ar(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp46_input.ar(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp46_input.ar(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp46_input.ar(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp46_input.ar(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp46_input.ar(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp46_input.ar(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp46_input.ar(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp46_input.ar(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp46_input.ar(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp46_input.ar(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp46_input.ar(tmp0_desc, 36, tmp47_cached[36].n1(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp46_input.ar(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp46_input.ar(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp46_input.ar(tmp0_desc, 39, tmp47_cached[39].n1(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp46_input.ar(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp46_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp46_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp46_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp46_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp46_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp46_input.ar(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp46_input.ar(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp46_input.ar(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp46_input.ar(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp46_input.ar(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp46_input.ar(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp46_input.ar(tmp0_desc, 10, tmp47_cached[10].n1(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp46_input.ar(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp46_input.ar(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp46_input.ar(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp46_input.ar(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp46_input.ar(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp46_input.ar(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp46_input.ar(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp46_input.ar(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp46_input.ar(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp46_input.ar(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp46_input.ar(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp46_input.ar(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp46_input.ar(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp46_input.ar(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp46_input.ar(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp46_input.ar(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp46_input.ar(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp46_input.ar(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp46_input.ar(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp46_input.ar(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp46_input.ar(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp46_input.ar(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp46_input.ar(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp46_input.ar(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp46_input.ar(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp46_input.ar(tmp0_desc, 36, tmp47_cached[36].n1(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp46_input.ar(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp46_input.ar(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp46_input.ar(tmp0_desc, 39, tmp47_cached[39].n1(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp46_input.ar(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp46_input.nq(tmp0_desc);
    return LegacyPostcardPost_init_$Create$(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, null);
  };
  protoOf($serializer_24).nn = function () {
    return this.d5k_1;
  };
  protoOf($serializer_24).tw = function () {
    var tmp0_cached = Companion_getInstance_26().c5k_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].n1()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].n1()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].n1()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_23;
  function $serializer_getInstance_23() {
    if ($serializer_instance_23 == null)
      new $serializer_24();
    return $serializer_instance_23;
  }
  function LegacyPostcardPost_init_$Init$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, url, serializationConstructorMarker, $this) {
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_23().d5k_1);
    }
    Post.call($this);
    $this.e5k_1 = blogName;
    $this.f5k_1 = idString;
    $this.g5k_1 = genesisPostId;
    $this.h5k_1 = postUrl;
    $this.i5k_1 = parentPostUrl;
    $this.j5k_1 = type;
    $this.k5k_1 = timestamp;
    $this.l5k_1 = date;
    $this.m5k_1 = format;
    $this.n5k_1 = reblogKey;
    $this.o5k_1 = tags;
    $this.p5k_1 = isBookmarklet;
    $this.q5k_1 = isMobile;
    $this.r5k_1 = sourceUrl;
    $this.s5k_1 = sourceTitle;
    $this.t5k_1 = isLiked;
    $this.u5k_1 = state;
    $this.v5k_1 = title;
    $this.w5k_1 = body;
    $this.x5k_1 = noteCount;
    $this.y5k_1 = summary;
    $this.z5k_1 = slug;
    $this.a5l_1 = rebloggedFromId;
    $this.b5l_1 = rebloggedFromUrl;
    $this.c5l_1 = rebloggedFromName;
    $this.d5l_1 = rebloggedFromTitle;
    $this.e5l_1 = rebloggedFromUuid;
    $this.f5l_1 = rebloggedFromCanMessage;
    $this.g5l_1 = rebloggedFromFollowing;
    $this.h5l_1 = rebloggedRootId;
    $this.i5l_1 = rebloggedRootUrl;
    $this.j5l_1 = rebloggedRootName;
    $this.k5l_1 = rebloggedRootTitle;
    $this.l5l_1 = rebloggedRootUuid;
    $this.m5l_1 = rebloggedRootCanMessage;
    $this.n5l_1 = rebloggedRootFollowing;
    $this.o5l_1 = notes;
    $this.p5l_1 = blog;
    $this.q5l_1 = reblog;
    $this.r5l_1 = trail;
    if (0 === (seen1 & 256))
      $this.url = null;
    else
      $this.url = url;
    return $this;
  }
  function LegacyPostcardPost_init_$Create$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, url, serializationConstructorMarker) {
    return LegacyPostcardPost_init_$Init$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, url, serializationConstructorMarker, objectCreate(protoOf(LegacyPostcardPost)));
  }
  function LegacyPostcardPost(blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail) {
    Companion_getInstance_26();
    Post.call(this);
    this.e5k_1 = blogName;
    this.f5k_1 = idString;
    this.g5k_1 = genesisPostId;
    this.h5k_1 = postUrl;
    this.i5k_1 = parentPostUrl;
    this.j5k_1 = type;
    this.k5k_1 = timestamp;
    this.l5k_1 = date;
    this.m5k_1 = format;
    this.n5k_1 = reblogKey;
    this.o5k_1 = tags;
    this.p5k_1 = isBookmarklet;
    this.q5k_1 = isMobile;
    this.r5k_1 = sourceUrl;
    this.s5k_1 = sourceTitle;
    this.t5k_1 = isLiked;
    this.u5k_1 = state;
    this.v5k_1 = title;
    this.w5k_1 = body;
    this.x5k_1 = noteCount;
    this.y5k_1 = summary;
    this.z5k_1 = slug;
    this.a5l_1 = rebloggedFromId;
    this.b5l_1 = rebloggedFromUrl;
    this.c5l_1 = rebloggedFromName;
    this.d5l_1 = rebloggedFromTitle;
    this.e5l_1 = rebloggedFromUuid;
    this.f5l_1 = rebloggedFromCanMessage;
    this.g5l_1 = rebloggedFromFollowing;
    this.h5l_1 = rebloggedRootId;
    this.i5l_1 = rebloggedRootUrl;
    this.j5l_1 = rebloggedRootName;
    this.k5l_1 = rebloggedRootTitle;
    this.l5l_1 = rebloggedRootUuid;
    this.m5l_1 = rebloggedRootCanMessage;
    this.n5l_1 = rebloggedRootFollowing;
    this.o5l_1 = notes;
    this.p5l_1 = blog;
    this.q5l_1 = reblog;
    this.r5l_1 = trail;
    this.url = null;
  }
  protoOf(LegacyPostcardPost).k4z = function (_set____db54di) {
    this.e5k_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).l4z = function () {
    return this.e5k_1;
  };
  protoOf(LegacyPostcardPost).l59 = function (_set____db54di) {
    this.f5k_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).m59 = function () {
    return this.f5k_1;
  };
  protoOf(LegacyPostcardPost).n59 = function (_set____db54di) {
    this.g5k_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).o59 = function () {
    return this.g5k_1;
  };
  protoOf(LegacyPostcardPost).p59 = function (_set____db54di) {
    this.h5k_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).q59 = function () {
    return this.h5k_1;
  };
  protoOf(LegacyPostcardPost).r59 = function (_set____db54di) {
    this.i5k_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).s59 = function () {
    return this.i5k_1;
  };
  protoOf(LegacyPostcardPost).a50 = function (_set____db54di) {
    this.j5k_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).b50 = function () {
    return this.j5k_1;
  };
  protoOf(LegacyPostcardPost).t59 = function (_set____db54di) {
    this.k5k_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).u56 = function () {
    return this.k5k_1;
  };
  protoOf(LegacyPostcardPost).n51 = function (_set____db54di) {
    this.l5k_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).o51 = function () {
    return this.l5k_1;
  };
  protoOf(LegacyPostcardPost).p51 = function (_set____db54di) {
    this.m5k_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).q51 = function () {
    return this.m5k_1;
  };
  protoOf(LegacyPostcardPost).q53 = function (_set____db54di) {
    this.n5k_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).r53 = function () {
    return this.n5k_1;
  };
  protoOf(LegacyPostcardPost).l52 = function (_set____db54di) {
    this.o5k_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).k51 = function () {
    return this.o5k_1;
  };
  protoOf(LegacyPostcardPost).u59 = function (_set____db54di) {
    this.p5k_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).v59 = function () {
    return this.p5k_1;
  };
  protoOf(LegacyPostcardPost).w59 = function (_set____db54di) {
    this.q5k_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).x59 = function () {
    return this.q5k_1;
  };
  protoOf(LegacyPostcardPost).y59 = function (_set____db54di) {
    this.r5k_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).z59 = function () {
    return this.r5k_1;
  };
  protoOf(LegacyPostcardPost).a5a = function (_set____db54di) {
    this.s5k_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).b5a = function () {
    return this.s5k_1;
  };
  protoOf(LegacyPostcardPost).c5a = function (_set____db54di) {
    this.t5k_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).d5a = function () {
    return this.t5k_1;
  };
  protoOf(LegacyPostcardPost).v4y = function (_set____db54di) {
    this.u5k_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).w4y = function () {
    return this.u5k_1;
  };
  protoOf(LegacyPostcardPost).q50 = function (_set____db54di) {
    this.v5k_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).r50 = function () {
    return this.v5k_1;
  };
  protoOf(LegacyPostcardPost).m52 = function (_set____db54di) {
    this.w5k_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).n52 = function () {
    return this.w5k_1;
  };
  protoOf(LegacyPostcardPost).e5a = function (_set____db54di) {
    this.x5k_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).f5a = function () {
    return this.x5k_1;
  };
  protoOf(LegacyPostcardPost).g5a = function (_set____db54di) {
    this.y5k_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).h5a = function () {
    return this.y5k_1;
  };
  protoOf(LegacyPostcardPost).r51 = function (_set____db54di) {
    this.z5k_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).s51 = function () {
    return this.z5k_1;
  };
  protoOf(LegacyPostcardPost).i5a = function (_set____db54di) {
    this.a5l_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).j5a = function () {
    return this.a5l_1;
  };
  protoOf(LegacyPostcardPost).k5a = function (_set____db54di) {
    this.b5l_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).l5a = function () {
    return this.b5l_1;
  };
  protoOf(LegacyPostcardPost).m5a = function (_set____db54di) {
    this.c5l_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).n5a = function () {
    return this.c5l_1;
  };
  protoOf(LegacyPostcardPost).o5a = function (_set____db54di) {
    this.d5l_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).p5a = function () {
    return this.d5l_1;
  };
  protoOf(LegacyPostcardPost).q5a = function (_set____db54di) {
    this.e5l_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).r5a = function () {
    return this.e5l_1;
  };
  protoOf(LegacyPostcardPost).s5a = function (_set____db54di) {
    this.f5l_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).t5a = function () {
    return this.f5l_1;
  };
  protoOf(LegacyPostcardPost).u5a = function (_set____db54di) {
    this.g5l_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).v5a = function () {
    return this.g5l_1;
  };
  protoOf(LegacyPostcardPost).w5a = function (_set____db54di) {
    this.h5l_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).x5a = function () {
    return this.h5l_1;
  };
  protoOf(LegacyPostcardPost).y5a = function (_set____db54di) {
    this.i5l_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).z5a = function () {
    return this.i5l_1;
  };
  protoOf(LegacyPostcardPost).a5b = function (_set____db54di) {
    this.j5l_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).b5b = function () {
    return this.j5l_1;
  };
  protoOf(LegacyPostcardPost).c5b = function (_set____db54di) {
    this.k5l_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).d5b = function () {
    return this.k5l_1;
  };
  protoOf(LegacyPostcardPost).e5b = function (_set____db54di) {
    this.l5l_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).f5b = function () {
    return this.l5l_1;
  };
  protoOf(LegacyPostcardPost).g5b = function (_set____db54di) {
    this.m5l_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).h5b = function () {
    return this.m5l_1;
  };
  protoOf(LegacyPostcardPost).i5b = function (_set____db54di) {
    this.n5l_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).j5b = function () {
    return this.n5l_1;
  };
  protoOf(LegacyPostcardPost).k5b = function (_set____db54di) {
    this.o5l_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).l5b = function () {
    return this.o5l_1;
  };
  protoOf(LegacyPostcardPost).p55 = function (_set____db54di) {
    this.p5l_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).q55 = function () {
    return this.p5l_1;
  };
  protoOf(LegacyPostcardPost).m5b = function (_set____db54di) {
    this.q5l_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).n5b = function () {
    return this.q5l_1;
  };
  protoOf(LegacyPostcardPost).o5b = function (_set____db54di) {
    this.r5l_1 = _set____db54di;
  };
  protoOf(LegacyPostcardPost).p5b = function () {
    return this.r5l_1;
  };
  protoOf(LegacyPostcardPost).x51 = function (_set____db54di) {
    this.url = _set____db54di;
  };
  protoOf(LegacyPostcardPost).d3c = function () {
    return this.url;
  };
  function LegacyQuotePost$Companion$$childSerializers$_anonymous__qrbaix() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().ob(), StringSerializer_getInstance());
  }
  function LegacyQuotePost$Companion$$childSerializers$_anonymous__qrbaix_0() {
    return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_12());
  }
  function LegacyQuotePost$Companion$$childSerializers$_anonymous__qrbaix_1() {
    return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_33());
  }
  function Companion_26() {
    Companion_instance_26 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyQuotePost$Companion$$childSerializers$_anonymous__qrbaix);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyQuotePost$Companion$$childSerializers$_anonymous__qrbaix_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.s5l_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyQuotePost$Companion$$childSerializers$_anonymous__qrbaix_1), null, null];
  }
  protoOf(Companion_26).r4k = function () {
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyQuotePost', this, 42);
    tmp0_serialDesc.ew('blog_name', false);
    tmp0_serialDesc.ew('id_string', false);
    tmp0_serialDesc.ew('genesis_post_id', false);
    tmp0_serialDesc.ew('post_url', false);
    tmp0_serialDesc.ew('parent_post_url', false);
    tmp0_serialDesc.ew('type', false);
    tmp0_serialDesc.ew('timestamp', false);
    tmp0_serialDesc.ew('date', false);
    tmp0_serialDesc.ew('format', false);
    tmp0_serialDesc.ew('reblog_key', false);
    tmp0_serialDesc.ew('tags', false);
    tmp0_serialDesc.ew('bookmarklet', false);
    tmp0_serialDesc.ew('mobile', false);
    tmp0_serialDesc.ew('source_url', false);
    tmp0_serialDesc.ew('source_title', false);
    tmp0_serialDesc.ew('liked', false);
    tmp0_serialDesc.ew('state', false);
    tmp0_serialDesc.ew('title', false);
    tmp0_serialDesc.ew('body', false);
    tmp0_serialDesc.ew('note_count', false);
    tmp0_serialDesc.ew('summary', false);
    tmp0_serialDesc.ew('slug', false);
    tmp0_serialDesc.ew('reblogged_from_id', false);
    tmp0_serialDesc.ew('reblogged_from_url', false);
    tmp0_serialDesc.ew('reblogged_from_name', false);
    tmp0_serialDesc.ew('reblogged_from_title', false);
    tmp0_serialDesc.ew('reblogged_from_uuid', false);
    tmp0_serialDesc.ew('reblogged_from_can_message', false);
    tmp0_serialDesc.ew('reblogged_from_following', false);
    tmp0_serialDesc.ew('reblogged_root_id', false);
    tmp0_serialDesc.ew('reblogged_root_url', false);
    tmp0_serialDesc.ew('reblogged_root_name', false);
    tmp0_serialDesc.ew('reblogged_root_title', false);
    tmp0_serialDesc.ew('reblogged_root_uuid', false);
    tmp0_serialDesc.ew('reblogged_root_can_message', false);
    tmp0_serialDesc.ew('reblogged_root_following', false);
    tmp0_serialDesc.ew('notes', false);
    tmp0_serialDesc.ew('blog', false);
    tmp0_serialDesc.ew('reblog', false);
    tmp0_serialDesc.ew('trail', false);
    tmp0_serialDesc.ew('text', true);
    tmp0_serialDesc.ew('source', true);
    this.t5l_1 = tmp0_serialDesc;
  }
  protoOf($serializer_25).on = function (decoder) {
    var tmp0_desc = this.t5l_1;
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
    var tmp47_input = decoder.mq(tmp0_desc);
    var tmp48_cached = Companion_getInstance_27().s5l_1;
    if (tmp47_input.cr()) {
      tmp5_local0 = tmp47_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp47_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp47_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp47_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp47_input.ar(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp47_input.ar(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp47_input.ar(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp47_input.ar(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp47_input.ar(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp47_input.ar(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp47_input.ar(tmp0_desc, 10, tmp48_cached[10].n1(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp47_input.ar(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp47_input.ar(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp47_input.ar(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp47_input.ar(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp47_input.ar(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp47_input.ar(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp47_input.ar(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp47_input.ar(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp47_input.ar(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp47_input.ar(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp47_input.ar(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp47_input.ar(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp47_input.ar(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp47_input.ar(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp47_input.ar(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp47_input.ar(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp47_input.ar(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp47_input.ar(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp47_input.ar(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp47_input.ar(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp47_input.ar(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp47_input.ar(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp47_input.ar(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp47_input.ar(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp47_input.ar(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp47_input.ar(tmp0_desc, 36, tmp48_cached[36].n1(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp47_input.ar(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp47_input.ar(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp47_input.ar(tmp0_desc, 39, tmp48_cached[39].n1(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp47_input.ar(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp47_input.ar(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp47_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp47_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp47_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp47_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp47_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp47_input.ar(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp47_input.ar(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp47_input.ar(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp47_input.ar(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp47_input.ar(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp47_input.ar(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp47_input.ar(tmp0_desc, 10, tmp48_cached[10].n1(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp47_input.ar(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp47_input.ar(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp47_input.ar(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp47_input.ar(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp47_input.ar(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp47_input.ar(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp47_input.ar(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp47_input.ar(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp47_input.ar(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp47_input.ar(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp47_input.ar(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp47_input.ar(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp47_input.ar(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp47_input.ar(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp47_input.ar(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp47_input.ar(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp47_input.ar(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp47_input.ar(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp47_input.ar(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp47_input.ar(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp47_input.ar(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp47_input.ar(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp47_input.ar(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp47_input.ar(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp47_input.ar(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp47_input.ar(tmp0_desc, 36, tmp48_cached[36].n1(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp47_input.ar(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp47_input.ar(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp47_input.ar(tmp0_desc, 39, tmp48_cached[39].n1(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp47_input.ar(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp47_input.ar(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp47_input.nq(tmp0_desc);
    return LegacyQuotePost_init_$Create$(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, null);
  };
  protoOf($serializer_25).nn = function () {
    return this.t5l_1;
  };
  protoOf($serializer_25).tw = function () {
    var tmp0_cached = Companion_getInstance_27().s5l_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].n1()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].n1()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].n1()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_24;
  function $serializer_getInstance_24() {
    if ($serializer_instance_24 == null)
      new $serializer_25();
    return $serializer_instance_24;
  }
  function LegacyQuotePost_init_$Init$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, text, source, serializationConstructorMarker, $this) {
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_24().t5l_1);
    }
    Post.call($this);
    $this.u5l_1 = blogName;
    $this.v5l_1 = idString;
    $this.w5l_1 = genesisPostId;
    $this.x5l_1 = postUrl;
    $this.y5l_1 = parentPostUrl;
    $this.z5l_1 = type;
    $this.a5m_1 = timestamp;
    $this.b5m_1 = date;
    $this.c5m_1 = format;
    $this.d5m_1 = reblogKey;
    $this.e5m_1 = tags;
    $this.f5m_1 = isBookmarklet;
    $this.g5m_1 = isMobile;
    $this.h5m_1 = sourceUrl;
    $this.i5m_1 = sourceTitle;
    $this.j5m_1 = isLiked;
    $this.k5m_1 = state;
    $this.l5m_1 = title;
    $this.m5m_1 = body;
    $this.n5m_1 = noteCount;
    $this.o5m_1 = summary;
    $this.p5m_1 = slug;
    $this.q5m_1 = rebloggedFromId;
    $this.r5m_1 = rebloggedFromUrl;
    $this.s5m_1 = rebloggedFromName;
    $this.t5m_1 = rebloggedFromTitle;
    $this.u5m_1 = rebloggedFromUuid;
    $this.v5m_1 = rebloggedFromCanMessage;
    $this.w5m_1 = rebloggedFromFollowing;
    $this.x5m_1 = rebloggedRootId;
    $this.y5m_1 = rebloggedRootUrl;
    $this.z5m_1 = rebloggedRootName;
    $this.a5n_1 = rebloggedRootTitle;
    $this.b5n_1 = rebloggedRootUuid;
    $this.c5n_1 = rebloggedRootCanMessage;
    $this.d5n_1 = rebloggedRootFollowing;
    $this.e5n_1 = notes;
    $this.f5n_1 = blog;
    $this.g5n_1 = reblog;
    $this.h5n_1 = trail;
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
    Companion_getInstance_27();
    Post.call(this);
    this.u5l_1 = blogName;
    this.v5l_1 = idString;
    this.w5l_1 = genesisPostId;
    this.x5l_1 = postUrl;
    this.y5l_1 = parentPostUrl;
    this.z5l_1 = type;
    this.a5m_1 = timestamp;
    this.b5m_1 = date;
    this.c5m_1 = format;
    this.d5m_1 = reblogKey;
    this.e5m_1 = tags;
    this.f5m_1 = isBookmarklet;
    this.g5m_1 = isMobile;
    this.h5m_1 = sourceUrl;
    this.i5m_1 = sourceTitle;
    this.j5m_1 = isLiked;
    this.k5m_1 = state;
    this.l5m_1 = title;
    this.m5m_1 = body;
    this.n5m_1 = noteCount;
    this.o5m_1 = summary;
    this.p5m_1 = slug;
    this.q5m_1 = rebloggedFromId;
    this.r5m_1 = rebloggedFromUrl;
    this.s5m_1 = rebloggedFromName;
    this.t5m_1 = rebloggedFromTitle;
    this.u5m_1 = rebloggedFromUuid;
    this.v5m_1 = rebloggedFromCanMessage;
    this.w5m_1 = rebloggedFromFollowing;
    this.x5m_1 = rebloggedRootId;
    this.y5m_1 = rebloggedRootUrl;
    this.z5m_1 = rebloggedRootName;
    this.a5n_1 = rebloggedRootTitle;
    this.b5n_1 = rebloggedRootUuid;
    this.c5n_1 = rebloggedRootCanMessage;
    this.d5n_1 = rebloggedRootFollowing;
    this.e5n_1 = notes;
    this.f5n_1 = blog;
    this.g5n_1 = reblog;
    this.h5n_1 = trail;
    this.text = null;
    this.source = null;
  }
  protoOf(LegacyQuotePost).k4z = function (_set____db54di) {
    this.u5l_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).l4z = function () {
    return this.u5l_1;
  };
  protoOf(LegacyQuotePost).l59 = function (_set____db54di) {
    this.v5l_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).m59 = function () {
    return this.v5l_1;
  };
  protoOf(LegacyQuotePost).n59 = function (_set____db54di) {
    this.w5l_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).o59 = function () {
    return this.w5l_1;
  };
  protoOf(LegacyQuotePost).p59 = function (_set____db54di) {
    this.x5l_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).q59 = function () {
    return this.x5l_1;
  };
  protoOf(LegacyQuotePost).r59 = function (_set____db54di) {
    this.y5l_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).s59 = function () {
    return this.y5l_1;
  };
  protoOf(LegacyQuotePost).a50 = function (_set____db54di) {
    this.z5l_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).b50 = function () {
    return this.z5l_1;
  };
  protoOf(LegacyQuotePost).t59 = function (_set____db54di) {
    this.a5m_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).u56 = function () {
    return this.a5m_1;
  };
  protoOf(LegacyQuotePost).n51 = function (_set____db54di) {
    this.b5m_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).o51 = function () {
    return this.b5m_1;
  };
  protoOf(LegacyQuotePost).p51 = function (_set____db54di) {
    this.c5m_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).q51 = function () {
    return this.c5m_1;
  };
  protoOf(LegacyQuotePost).q53 = function (_set____db54di) {
    this.d5m_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).r53 = function () {
    return this.d5m_1;
  };
  protoOf(LegacyQuotePost).l52 = function (_set____db54di) {
    this.e5m_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).k51 = function () {
    return this.e5m_1;
  };
  protoOf(LegacyQuotePost).u59 = function (_set____db54di) {
    this.f5m_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).v59 = function () {
    return this.f5m_1;
  };
  protoOf(LegacyQuotePost).w59 = function (_set____db54di) {
    this.g5m_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).x59 = function () {
    return this.g5m_1;
  };
  protoOf(LegacyQuotePost).y59 = function (_set____db54di) {
    this.h5m_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).z59 = function () {
    return this.h5m_1;
  };
  protoOf(LegacyQuotePost).a5a = function (_set____db54di) {
    this.i5m_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).b5a = function () {
    return this.i5m_1;
  };
  protoOf(LegacyQuotePost).c5a = function (_set____db54di) {
    this.j5m_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).d5a = function () {
    return this.j5m_1;
  };
  protoOf(LegacyQuotePost).v4y = function (_set____db54di) {
    this.k5m_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).w4y = function () {
    return this.k5m_1;
  };
  protoOf(LegacyQuotePost).q50 = function (_set____db54di) {
    this.l5m_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).r50 = function () {
    return this.l5m_1;
  };
  protoOf(LegacyQuotePost).m52 = function (_set____db54di) {
    this.m5m_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).n52 = function () {
    return this.m5m_1;
  };
  protoOf(LegacyQuotePost).e5a = function (_set____db54di) {
    this.n5m_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).f5a = function () {
    return this.n5m_1;
  };
  protoOf(LegacyQuotePost).g5a = function (_set____db54di) {
    this.o5m_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).h5a = function () {
    return this.o5m_1;
  };
  protoOf(LegacyQuotePost).r51 = function (_set____db54di) {
    this.p5m_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).s51 = function () {
    return this.p5m_1;
  };
  protoOf(LegacyQuotePost).i5a = function (_set____db54di) {
    this.q5m_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).j5a = function () {
    return this.q5m_1;
  };
  protoOf(LegacyQuotePost).k5a = function (_set____db54di) {
    this.r5m_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).l5a = function () {
    return this.r5m_1;
  };
  protoOf(LegacyQuotePost).m5a = function (_set____db54di) {
    this.s5m_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).n5a = function () {
    return this.s5m_1;
  };
  protoOf(LegacyQuotePost).o5a = function (_set____db54di) {
    this.t5m_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).p5a = function () {
    return this.t5m_1;
  };
  protoOf(LegacyQuotePost).q5a = function (_set____db54di) {
    this.u5m_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).r5a = function () {
    return this.u5m_1;
  };
  protoOf(LegacyQuotePost).s5a = function (_set____db54di) {
    this.v5m_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).t5a = function () {
    return this.v5m_1;
  };
  protoOf(LegacyQuotePost).u5a = function (_set____db54di) {
    this.w5m_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).v5a = function () {
    return this.w5m_1;
  };
  protoOf(LegacyQuotePost).w5a = function (_set____db54di) {
    this.x5m_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).x5a = function () {
    return this.x5m_1;
  };
  protoOf(LegacyQuotePost).y5a = function (_set____db54di) {
    this.y5m_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).z5a = function () {
    return this.y5m_1;
  };
  protoOf(LegacyQuotePost).a5b = function (_set____db54di) {
    this.z5m_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).b5b = function () {
    return this.z5m_1;
  };
  protoOf(LegacyQuotePost).c5b = function (_set____db54di) {
    this.a5n_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).d5b = function () {
    return this.a5n_1;
  };
  protoOf(LegacyQuotePost).e5b = function (_set____db54di) {
    this.b5n_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).f5b = function () {
    return this.b5n_1;
  };
  protoOf(LegacyQuotePost).g5b = function (_set____db54di) {
    this.c5n_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).h5b = function () {
    return this.c5n_1;
  };
  protoOf(LegacyQuotePost).i5b = function (_set____db54di) {
    this.d5n_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).j5b = function () {
    return this.d5n_1;
  };
  protoOf(LegacyQuotePost).k5b = function (_set____db54di) {
    this.e5n_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).l5b = function () {
    return this.e5n_1;
  };
  protoOf(LegacyQuotePost).p55 = function (_set____db54di) {
    this.f5n_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).q55 = function () {
    return this.f5n_1;
  };
  protoOf(LegacyQuotePost).m5b = function (_set____db54di) {
    this.g5n_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).n5b = function () {
    return this.g5n_1;
  };
  protoOf(LegacyQuotePost).o5b = function (_set____db54di) {
    this.h5n_1 = _set____db54di;
  };
  protoOf(LegacyQuotePost).p5b = function () {
    return this.h5n_1;
  };
  protoOf(LegacyQuotePost).i5n = function (_set____db54di) {
    this.text = _set____db54di;
  };
  protoOf(LegacyQuotePost).j5n = function () {
    return this.text;
  };
  protoOf(LegacyQuotePost).g52 = function (_set____db54di) {
    this.source = _set____db54di;
  };
  protoOf(LegacyQuotePost).g4r = function () {
    return this.source;
  };
  function LegacyTextPost$Companion$$childSerializers$_anonymous__5pflt8() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().ob(), StringSerializer_getInstance());
  }
  function LegacyTextPost$Companion$$childSerializers$_anonymous__5pflt8_0() {
    return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_12());
  }
  function LegacyTextPost$Companion$$childSerializers$_anonymous__5pflt8_1() {
    return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_33());
  }
  function Companion_27() {
    Companion_instance_27 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, LegacyTextPost$Companion$$childSerializers$_anonymous__5pflt8);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, LegacyTextPost$Companion$$childSerializers$_anonymous__5pflt8_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.k5n_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, lazy(tmp_4, LegacyTextPost$Companion$$childSerializers$_anonymous__5pflt8_1)];
  }
  protoOf(Companion_27).r4k = function () {
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyTextPost', this, 40);
    tmp0_serialDesc.ew('blog_name', false);
    tmp0_serialDesc.ew('id_string', false);
    tmp0_serialDesc.ew('genesis_post_id', false);
    tmp0_serialDesc.ew('post_url', false);
    tmp0_serialDesc.ew('parent_post_url', false);
    tmp0_serialDesc.ew('type', false);
    tmp0_serialDesc.ew('timestamp', false);
    tmp0_serialDesc.ew('date', false);
    tmp0_serialDesc.ew('format', false);
    tmp0_serialDesc.ew('reblog_key', false);
    tmp0_serialDesc.ew('tags', false);
    tmp0_serialDesc.ew('bookmarklet', false);
    tmp0_serialDesc.ew('mobile', false);
    tmp0_serialDesc.ew('source_url', false);
    tmp0_serialDesc.ew('source_title', false);
    tmp0_serialDesc.ew('liked', false);
    tmp0_serialDesc.ew('state', false);
    tmp0_serialDesc.ew('title', false);
    tmp0_serialDesc.ew('body', false);
    tmp0_serialDesc.ew('note_count', false);
    tmp0_serialDesc.ew('summary', false);
    tmp0_serialDesc.ew('slug', false);
    tmp0_serialDesc.ew('reblogged_from_id', false);
    tmp0_serialDesc.ew('reblogged_from_url', false);
    tmp0_serialDesc.ew('reblogged_from_name', false);
    tmp0_serialDesc.ew('reblogged_from_title', false);
    tmp0_serialDesc.ew('reblogged_from_uuid', false);
    tmp0_serialDesc.ew('reblogged_from_can_message', false);
    tmp0_serialDesc.ew('reblogged_from_following', false);
    tmp0_serialDesc.ew('reblogged_root_id', false);
    tmp0_serialDesc.ew('reblogged_root_url', false);
    tmp0_serialDesc.ew('reblogged_root_name', false);
    tmp0_serialDesc.ew('reblogged_root_title', false);
    tmp0_serialDesc.ew('reblogged_root_uuid', false);
    tmp0_serialDesc.ew('reblogged_root_can_message', false);
    tmp0_serialDesc.ew('reblogged_root_following', false);
    tmp0_serialDesc.ew('notes', false);
    tmp0_serialDesc.ew('blog', false);
    tmp0_serialDesc.ew('reblog', false);
    tmp0_serialDesc.ew('trail', false);
    this.l5n_1 = tmp0_serialDesc;
  }
  protoOf($serializer_26).on = function (decoder) {
    var tmp0_desc = this.l5n_1;
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
    var tmp45_input = decoder.mq(tmp0_desc);
    var tmp46_cached = Companion_getInstance_28().k5n_1;
    if (tmp45_input.cr()) {
      tmp5_local0 = tmp45_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp45_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp45_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp45_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp45_input.ar(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp45_input.ar(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp45_input.ar(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp45_input.ar(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp45_input.ar(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp45_input.ar(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp45_input.ar(tmp0_desc, 10, tmp46_cached[10].n1(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp45_input.ar(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp45_input.ar(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp45_input.ar(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp45_input.ar(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp45_input.ar(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp45_input.ar(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp45_input.ar(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp45_input.ar(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp45_input.ar(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp45_input.ar(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp45_input.ar(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp45_input.ar(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp45_input.ar(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp45_input.ar(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp45_input.ar(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp45_input.ar(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp45_input.ar(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp45_input.ar(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp45_input.ar(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp45_input.ar(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp45_input.ar(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp45_input.ar(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp45_input.ar(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp45_input.ar(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp45_input.ar(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp45_input.ar(tmp0_desc, 36, tmp46_cached[36].n1(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp45_input.ar(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp45_input.ar(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp45_input.ar(tmp0_desc, 39, tmp46_cached[39].n1(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp45_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp45_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp45_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp45_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp45_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp45_input.ar(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp45_input.ar(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp45_input.ar(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp45_input.ar(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp45_input.ar(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp45_input.ar(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp45_input.ar(tmp0_desc, 10, tmp46_cached[10].n1(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp45_input.ar(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp45_input.ar(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp45_input.ar(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp45_input.ar(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp45_input.ar(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp45_input.ar(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp45_input.ar(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp45_input.ar(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp45_input.ar(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp45_input.ar(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp45_input.ar(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp45_input.ar(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp45_input.ar(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp45_input.ar(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp45_input.ar(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp45_input.ar(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp45_input.ar(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp45_input.ar(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp45_input.ar(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp45_input.ar(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp45_input.ar(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp45_input.ar(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp45_input.ar(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp45_input.ar(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp45_input.ar(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp45_input.ar(tmp0_desc, 36, tmp46_cached[36].n1(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp45_input.ar(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp45_input.ar(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp45_input.ar(tmp0_desc, 39, tmp46_cached[39].n1(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp45_input.nq(tmp0_desc);
    return LegacyTextPost_init_$Create$(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, null);
  };
  protoOf($serializer_26).nn = function () {
    return this.l5n_1;
  };
  protoOf($serializer_26).tw = function () {
    var tmp0_cached = Companion_getInstance_28().k5n_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].n1()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].n1()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].n1())];
  };
  var $serializer_instance_25;
  function $serializer_getInstance_25() {
    if ($serializer_instance_25 == null)
      new $serializer_26();
    return $serializer_instance_25;
  }
  function LegacyTextPost_init_$Init$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, serializationConstructorMarker, $this) {
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_25().l5n_1);
    }
    Post.call($this);
    $this.m5n_1 = blogName;
    $this.n5n_1 = idString;
    $this.o5n_1 = genesisPostId;
    $this.p5n_1 = postUrl;
    $this.q5n_1 = parentPostUrl;
    $this.r5n_1 = type;
    $this.s5n_1 = timestamp;
    $this.t5n_1 = date;
    $this.u5n_1 = format;
    $this.v5n_1 = reblogKey;
    $this.w5n_1 = tags;
    $this.x5n_1 = isBookmarklet;
    $this.y5n_1 = isMobile;
    $this.z5n_1 = sourceUrl;
    $this.a5o_1 = sourceTitle;
    $this.b5o_1 = isLiked;
    $this.c5o_1 = state;
    $this.d5o_1 = title;
    $this.e5o_1 = body;
    $this.f5o_1 = noteCount;
    $this.g5o_1 = summary;
    $this.h5o_1 = slug;
    $this.i5o_1 = rebloggedFromId;
    $this.j5o_1 = rebloggedFromUrl;
    $this.k5o_1 = rebloggedFromName;
    $this.l5o_1 = rebloggedFromTitle;
    $this.m5o_1 = rebloggedFromUuid;
    $this.n5o_1 = rebloggedFromCanMessage;
    $this.o5o_1 = rebloggedFromFollowing;
    $this.p5o_1 = rebloggedRootId;
    $this.q5o_1 = rebloggedRootUrl;
    $this.r5o_1 = rebloggedRootName;
    $this.s5o_1 = rebloggedRootTitle;
    $this.t5o_1 = rebloggedRootUuid;
    $this.u5o_1 = rebloggedRootCanMessage;
    $this.v5o_1 = rebloggedRootFollowing;
    $this.w5o_1 = notes;
    $this.x5o_1 = blog;
    $this.y5o_1 = reblog;
    $this.z5o_1 = trail;
    return $this;
  }
  function LegacyTextPost_init_$Create$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, serializationConstructorMarker) {
    return LegacyTextPost_init_$Init$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, serializationConstructorMarker, objectCreate(protoOf(LegacyTextPost)));
  }
  function LegacyTextPost() {
  }
  protoOf(LegacyTextPost).k4z = function (_set____db54di) {
    this.m5n_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).l4z = function () {
    return this.m5n_1;
  };
  protoOf(LegacyTextPost).l59 = function (_set____db54di) {
    this.n5n_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).m59 = function () {
    return this.n5n_1;
  };
  protoOf(LegacyTextPost).n59 = function (_set____db54di) {
    this.o5n_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).o59 = function () {
    return this.o5n_1;
  };
  protoOf(LegacyTextPost).p59 = function (_set____db54di) {
    this.p5n_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).q59 = function () {
    return this.p5n_1;
  };
  protoOf(LegacyTextPost).r59 = function (_set____db54di) {
    this.q5n_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).s59 = function () {
    return this.q5n_1;
  };
  protoOf(LegacyTextPost).a50 = function (_set____db54di) {
    this.r5n_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).b50 = function () {
    return this.r5n_1;
  };
  protoOf(LegacyTextPost).t59 = function (_set____db54di) {
    this.s5n_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).u56 = function () {
    return this.s5n_1;
  };
  protoOf(LegacyTextPost).n51 = function (_set____db54di) {
    this.t5n_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).o51 = function () {
    return this.t5n_1;
  };
  protoOf(LegacyTextPost).p51 = function (_set____db54di) {
    this.u5n_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).q51 = function () {
    return this.u5n_1;
  };
  protoOf(LegacyTextPost).q53 = function (_set____db54di) {
    this.v5n_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).r53 = function () {
    return this.v5n_1;
  };
  protoOf(LegacyTextPost).l52 = function (_set____db54di) {
    this.w5n_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).k51 = function () {
    return this.w5n_1;
  };
  protoOf(LegacyTextPost).u59 = function (_set____db54di) {
    this.x5n_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).v59 = function () {
    return this.x5n_1;
  };
  protoOf(LegacyTextPost).w59 = function (_set____db54di) {
    this.y5n_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).x59 = function () {
    return this.y5n_1;
  };
  protoOf(LegacyTextPost).y59 = function (_set____db54di) {
    this.z5n_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).z59 = function () {
    return this.z5n_1;
  };
  protoOf(LegacyTextPost).a5a = function (_set____db54di) {
    this.a5o_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).b5a = function () {
    return this.a5o_1;
  };
  protoOf(LegacyTextPost).c5a = function (_set____db54di) {
    this.b5o_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).d5a = function () {
    return this.b5o_1;
  };
  protoOf(LegacyTextPost).v4y = function (_set____db54di) {
    this.c5o_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).w4y = function () {
    return this.c5o_1;
  };
  protoOf(LegacyTextPost).q50 = function (_set____db54di) {
    this.d5o_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).r50 = function () {
    return this.d5o_1;
  };
  protoOf(LegacyTextPost).m52 = function (_set____db54di) {
    this.e5o_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).n52 = function () {
    return this.e5o_1;
  };
  protoOf(LegacyTextPost).e5a = function (_set____db54di) {
    this.f5o_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).f5a = function () {
    return this.f5o_1;
  };
  protoOf(LegacyTextPost).g5a = function (_set____db54di) {
    this.g5o_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).h5a = function () {
    return this.g5o_1;
  };
  protoOf(LegacyTextPost).r51 = function (_set____db54di) {
    this.h5o_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).s51 = function () {
    return this.h5o_1;
  };
  protoOf(LegacyTextPost).i5a = function (_set____db54di) {
    this.i5o_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).j5a = function () {
    return this.i5o_1;
  };
  protoOf(LegacyTextPost).k5a = function (_set____db54di) {
    this.j5o_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).l5a = function () {
    return this.j5o_1;
  };
  protoOf(LegacyTextPost).m5a = function (_set____db54di) {
    this.k5o_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).n5a = function () {
    return this.k5o_1;
  };
  protoOf(LegacyTextPost).o5a = function (_set____db54di) {
    this.l5o_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).p5a = function () {
    return this.l5o_1;
  };
  protoOf(LegacyTextPost).q5a = function (_set____db54di) {
    this.m5o_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).r5a = function () {
    return this.m5o_1;
  };
  protoOf(LegacyTextPost).s5a = function (_set____db54di) {
    this.n5o_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).t5a = function () {
    return this.n5o_1;
  };
  protoOf(LegacyTextPost).u5a = function (_set____db54di) {
    this.o5o_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).v5a = function () {
    return this.o5o_1;
  };
  protoOf(LegacyTextPost).w5a = function (_set____db54di) {
    this.p5o_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).x5a = function () {
    return this.p5o_1;
  };
  protoOf(LegacyTextPost).y5a = function (_set____db54di) {
    this.q5o_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).z5a = function () {
    return this.q5o_1;
  };
  protoOf(LegacyTextPost).a5b = function (_set____db54di) {
    this.r5o_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).b5b = function () {
    return this.r5o_1;
  };
  protoOf(LegacyTextPost).c5b = function (_set____db54di) {
    this.s5o_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).d5b = function () {
    return this.s5o_1;
  };
  protoOf(LegacyTextPost).e5b = function (_set____db54di) {
    this.t5o_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).f5b = function () {
    return this.t5o_1;
  };
  protoOf(LegacyTextPost).g5b = function (_set____db54di) {
    this.u5o_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).h5b = function () {
    return this.u5o_1;
  };
  protoOf(LegacyTextPost).i5b = function (_set____db54di) {
    this.v5o_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).j5b = function () {
    return this.v5o_1;
  };
  protoOf(LegacyTextPost).k5b = function (_set____db54di) {
    this.w5o_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).l5b = function () {
    return this.w5o_1;
  };
  protoOf(LegacyTextPost).p55 = function (_set____db54di) {
    this.x5o_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).q55 = function () {
    return this.x5o_1;
  };
  protoOf(LegacyTextPost).m5b = function (_set____db54di) {
    this.y5o_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).n5b = function () {
    return this.y5o_1;
  };
  protoOf(LegacyTextPost).o5b = function (_set____db54di) {
    this.z5o_1 = _set____db54di;
  };
  protoOf(LegacyTextPost).p5b = function () {
    return this.z5o_1;
  };
  function LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().ob(), StringSerializer_getInstance());
  }
  function LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8_0() {
    return new ReferenceArraySerializer(getKClass(Note), $serializer_getInstance_12());
  }
  function LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8_1() {
    return new ReferenceArraySerializer(getKClass(Trail), $serializer_getInstance_33());
  }
  function LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8_2() {
    return new ReferenceArraySerializer(getKClass(Video), $serializer_getInstance_30());
  }
  function Companion_28() {
    Companion_instance_28 = this;
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
    tmp.a5p_1 = [null, null, null, null, null, null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_3, null, null, tmp_5, null, lazy(tmp_6, LegacyVideoPost$Companion$$childSerializers$_anonymous__fctmk8_2)];
  }
  protoOf(Companion_28).r4k = function () {
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.legacy.LegacyVideoPost', this, 42);
    tmp0_serialDesc.ew('blog_name', false);
    tmp0_serialDesc.ew('id_string', false);
    tmp0_serialDesc.ew('genesis_post_id', false);
    tmp0_serialDesc.ew('post_url', false);
    tmp0_serialDesc.ew('parent_post_url', false);
    tmp0_serialDesc.ew('type', false);
    tmp0_serialDesc.ew('timestamp', false);
    tmp0_serialDesc.ew('date', false);
    tmp0_serialDesc.ew('format', false);
    tmp0_serialDesc.ew('reblog_key', false);
    tmp0_serialDesc.ew('tags', false);
    tmp0_serialDesc.ew('bookmarklet', false);
    tmp0_serialDesc.ew('mobile', false);
    tmp0_serialDesc.ew('source_url', false);
    tmp0_serialDesc.ew('source_title', false);
    tmp0_serialDesc.ew('liked', false);
    tmp0_serialDesc.ew('state', false);
    tmp0_serialDesc.ew('title', false);
    tmp0_serialDesc.ew('body', false);
    tmp0_serialDesc.ew('note_count', false);
    tmp0_serialDesc.ew('summary', false);
    tmp0_serialDesc.ew('slug', false);
    tmp0_serialDesc.ew('reblogged_from_id', false);
    tmp0_serialDesc.ew('reblogged_from_url', false);
    tmp0_serialDesc.ew('reblogged_from_name', false);
    tmp0_serialDesc.ew('reblogged_from_title', false);
    tmp0_serialDesc.ew('reblogged_from_uuid', false);
    tmp0_serialDesc.ew('reblogged_from_can_message', false);
    tmp0_serialDesc.ew('reblogged_from_following', false);
    tmp0_serialDesc.ew('reblogged_root_id', false);
    tmp0_serialDesc.ew('reblogged_root_url', false);
    tmp0_serialDesc.ew('reblogged_root_name', false);
    tmp0_serialDesc.ew('reblogged_root_title', false);
    tmp0_serialDesc.ew('reblogged_root_uuid', false);
    tmp0_serialDesc.ew('reblogged_root_can_message', false);
    tmp0_serialDesc.ew('reblogged_root_following', false);
    tmp0_serialDesc.ew('notes', false);
    tmp0_serialDesc.ew('blog', false);
    tmp0_serialDesc.ew('reblog', false);
    tmp0_serialDesc.ew('trail', false);
    tmp0_serialDesc.ew('caption', true);
    tmp0_serialDesc.ew('player', true);
    this.b5p_1 = tmp0_serialDesc;
  }
  protoOf($serializer_27).on = function (decoder) {
    var tmp0_desc = this.b5p_1;
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
    var tmp47_input = decoder.mq(tmp0_desc);
    var tmp48_cached = Companion_getInstance_29().a5p_1;
    if (tmp47_input.cr()) {
      tmp5_local0 = tmp47_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp47_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp47_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp47_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp47_input.ar(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp47_input.ar(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp47_input.ar(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp47_input.ar(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp47_input.ar(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp47_input.ar(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp47_input.ar(tmp0_desc, 10, tmp48_cached[10].n1(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp47_input.ar(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp47_input.ar(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp47_input.ar(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp47_input.ar(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp47_input.ar(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp47_input.ar(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp47_input.ar(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp47_input.ar(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp47_input.ar(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp47_input.ar(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp47_input.ar(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp47_input.ar(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp47_input.ar(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp47_input.ar(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp47_input.ar(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp47_input.ar(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp47_input.ar(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp47_input.ar(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp47_input.ar(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp47_input.ar(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp47_input.ar(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp47_input.ar(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp47_input.ar(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp47_input.ar(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp47_input.ar(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp47_input.ar(tmp0_desc, 36, tmp48_cached[36].n1(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp47_input.ar(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp47_input.ar(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp47_input.ar(tmp0_desc, 39, tmp48_cached[39].n1(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp47_input.ar(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp47_input.ar(tmp0_desc, 41, tmp48_cached[41].n1(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp47_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp47_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp47_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp47_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp47_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp47_input.ar(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp47_input.ar(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp47_input.ar(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp47_input.ar(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp47_input.ar(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp47_input.ar(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp47_input.ar(tmp0_desc, 10, tmp48_cached[10].n1(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp47_input.ar(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp47_input.ar(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp47_input.ar(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp47_input.ar(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp47_input.ar(tmp0_desc, 15, BooleanSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp47_input.ar(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp47_input.ar(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp47_input.ar(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp47_input.ar(tmp0_desc, 19, IntSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp47_input.ar(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp47_input.ar(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp47_input.ar(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp47_input.ar(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp47_input.ar(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp47_input.ar(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp47_input.ar(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp47_input.ar(tmp0_desc, 27, BooleanSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp47_input.ar(tmp0_desc, 28, BooleanSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp47_input.ar(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp47_input.ar(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp47_input.ar(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp47_input.ar(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp47_input.ar(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp47_input.ar(tmp0_desc, 34, BooleanSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp47_input.ar(tmp0_desc, 35, BooleanSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp47_input.ar(tmp0_desc, 36, tmp48_cached[36].n1(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp47_input.ar(tmp0_desc, 37, $serializer_getInstance_14(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp47_input.ar(tmp0_desc, 38, $serializer_getInstance_17(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp47_input.ar(tmp0_desc, 39, tmp48_cached[39].n1(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp47_input.ar(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp47_input.ar(tmp0_desc, 41, tmp48_cached[41].n1(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp47_input.nq(tmp0_desc);
    return LegacyVideoPost_init_$Create$(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, null);
  };
  protoOf($serializer_27).nn = function () {
    return this.b5p_1;
  };
  protoOf($serializer_27).tw = function () {
    var tmp0_cached = Companion_getInstance_29().a5p_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[10].n1()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[36].n1()), get_nullable($serializer_getInstance_14()), get_nullable($serializer_getInstance_17()), get_nullable(tmp0_cached[39].n1()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[41].n1())];
  };
  var $serializer_instance_26;
  function $serializer_getInstance_26() {
    if ($serializer_instance_26 == null)
      new $serializer_27();
    return $serializer_instance_26;
  }
  function LegacyVideoPost_init_$Init$(seen0, seen1, blogName, idString, genesisPostId, postUrl, parentPostUrl, type, timestamp, date, format, reblogKey, tags, isBookmarklet, isMobile, sourceUrl, sourceTitle, isLiked, state, title, body, noteCount, summary, slug, rebloggedFromId, rebloggedFromUrl, rebloggedFromName, rebloggedFromTitle, rebloggedFromUuid, rebloggedFromCanMessage, rebloggedFromFollowing, rebloggedRootId, rebloggedRootUrl, rebloggedRootName, rebloggedRootTitle, rebloggedRootUuid, rebloggedRootCanMessage, rebloggedRootFollowing, notes, blog, reblog, trail, caption, player, serializationConstructorMarker, $this) {
    if (!!(!(-1 === (-1 & seen0)) | !(255 === (255 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([-1, 255]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_26().b5p_1);
    }
    Post.call($this);
    $this.c5p_1 = blogName;
    $this.d5p_1 = idString;
    $this.e5p_1 = genesisPostId;
    $this.f5p_1 = postUrl;
    $this.g5p_1 = parentPostUrl;
    $this.h5p_1 = type;
    $this.i5p_1 = timestamp;
    $this.j5p_1 = date;
    $this.k5p_1 = format;
    $this.l5p_1 = reblogKey;
    $this.m5p_1 = tags;
    $this.n5p_1 = isBookmarklet;
    $this.o5p_1 = isMobile;
    $this.p5p_1 = sourceUrl;
    $this.q5p_1 = sourceTitle;
    $this.r5p_1 = isLiked;
    $this.s5p_1 = state;
    $this.t5p_1 = title;
    $this.u5p_1 = body;
    $this.v5p_1 = noteCount;
    $this.w5p_1 = summary;
    $this.x5p_1 = slug;
    $this.y5p_1 = rebloggedFromId;
    $this.z5p_1 = rebloggedFromUrl;
    $this.a5q_1 = rebloggedFromName;
    $this.b5q_1 = rebloggedFromTitle;
    $this.c5q_1 = rebloggedFromUuid;
    $this.d5q_1 = rebloggedFromCanMessage;
    $this.e5q_1 = rebloggedFromFollowing;
    $this.f5q_1 = rebloggedRootId;
    $this.g5q_1 = rebloggedRootUrl;
    $this.h5q_1 = rebloggedRootName;
    $this.i5q_1 = rebloggedRootTitle;
    $this.j5q_1 = rebloggedRootUuid;
    $this.k5q_1 = rebloggedRootCanMessage;
    $this.l5q_1 = rebloggedRootFollowing;
    $this.m5q_1 = notes;
    $this.n5q_1 = blog;
    $this.o5q_1 = reblog;
    $this.p5q_1 = trail;
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
    Companion_getInstance_29();
    Post.call(this);
    this.c5p_1 = blogName;
    this.d5p_1 = idString;
    this.e5p_1 = genesisPostId;
    this.f5p_1 = postUrl;
    this.g5p_1 = parentPostUrl;
    this.h5p_1 = type;
    this.i5p_1 = timestamp;
    this.j5p_1 = date;
    this.k5p_1 = format;
    this.l5p_1 = reblogKey;
    this.m5p_1 = tags;
    this.n5p_1 = isBookmarklet;
    this.o5p_1 = isMobile;
    this.p5p_1 = sourceUrl;
    this.q5p_1 = sourceTitle;
    this.r5p_1 = isLiked;
    this.s5p_1 = state;
    this.t5p_1 = title;
    this.u5p_1 = body;
    this.v5p_1 = noteCount;
    this.w5p_1 = summary;
    this.x5p_1 = slug;
    this.y5p_1 = rebloggedFromId;
    this.z5p_1 = rebloggedFromUrl;
    this.a5q_1 = rebloggedFromName;
    this.b5q_1 = rebloggedFromTitle;
    this.c5q_1 = rebloggedFromUuid;
    this.d5q_1 = rebloggedFromCanMessage;
    this.e5q_1 = rebloggedFromFollowing;
    this.f5q_1 = rebloggedRootId;
    this.g5q_1 = rebloggedRootUrl;
    this.h5q_1 = rebloggedRootName;
    this.i5q_1 = rebloggedRootTitle;
    this.j5q_1 = rebloggedRootUuid;
    this.k5q_1 = rebloggedRootCanMessage;
    this.l5q_1 = rebloggedRootFollowing;
    this.m5q_1 = notes;
    this.n5q_1 = blog;
    this.o5q_1 = reblog;
    this.p5q_1 = trail;
    this.caption = null;
    this.player = null;
  }
  protoOf(LegacyVideoPost).k4z = function (_set____db54di) {
    this.c5p_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).l4z = function () {
    return this.c5p_1;
  };
  protoOf(LegacyVideoPost).l59 = function (_set____db54di) {
    this.d5p_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).m59 = function () {
    return this.d5p_1;
  };
  protoOf(LegacyVideoPost).n59 = function (_set____db54di) {
    this.e5p_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).o59 = function () {
    return this.e5p_1;
  };
  protoOf(LegacyVideoPost).p59 = function (_set____db54di) {
    this.f5p_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).q59 = function () {
    return this.f5p_1;
  };
  protoOf(LegacyVideoPost).r59 = function (_set____db54di) {
    this.g5p_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).s59 = function () {
    return this.g5p_1;
  };
  protoOf(LegacyVideoPost).a50 = function (_set____db54di) {
    this.h5p_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).b50 = function () {
    return this.h5p_1;
  };
  protoOf(LegacyVideoPost).t59 = function (_set____db54di) {
    this.i5p_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).u56 = function () {
    return this.i5p_1;
  };
  protoOf(LegacyVideoPost).n51 = function (_set____db54di) {
    this.j5p_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).o51 = function () {
    return this.j5p_1;
  };
  protoOf(LegacyVideoPost).p51 = function (_set____db54di) {
    this.k5p_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).q51 = function () {
    return this.k5p_1;
  };
  protoOf(LegacyVideoPost).q53 = function (_set____db54di) {
    this.l5p_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).r53 = function () {
    return this.l5p_1;
  };
  protoOf(LegacyVideoPost).l52 = function (_set____db54di) {
    this.m5p_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).k51 = function () {
    return this.m5p_1;
  };
  protoOf(LegacyVideoPost).u59 = function (_set____db54di) {
    this.n5p_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).v59 = function () {
    return this.n5p_1;
  };
  protoOf(LegacyVideoPost).w59 = function (_set____db54di) {
    this.o5p_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).x59 = function () {
    return this.o5p_1;
  };
  protoOf(LegacyVideoPost).y59 = function (_set____db54di) {
    this.p5p_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).z59 = function () {
    return this.p5p_1;
  };
  protoOf(LegacyVideoPost).a5a = function (_set____db54di) {
    this.q5p_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).b5a = function () {
    return this.q5p_1;
  };
  protoOf(LegacyVideoPost).c5a = function (_set____db54di) {
    this.r5p_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).d5a = function () {
    return this.r5p_1;
  };
  protoOf(LegacyVideoPost).v4y = function (_set____db54di) {
    this.s5p_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).w4y = function () {
    return this.s5p_1;
  };
  protoOf(LegacyVideoPost).q50 = function (_set____db54di) {
    this.t5p_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).r50 = function () {
    return this.t5p_1;
  };
  protoOf(LegacyVideoPost).m52 = function (_set____db54di) {
    this.u5p_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).n52 = function () {
    return this.u5p_1;
  };
  protoOf(LegacyVideoPost).e5a = function (_set____db54di) {
    this.v5p_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).f5a = function () {
    return this.v5p_1;
  };
  protoOf(LegacyVideoPost).g5a = function (_set____db54di) {
    this.w5p_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).h5a = function () {
    return this.w5p_1;
  };
  protoOf(LegacyVideoPost).r51 = function (_set____db54di) {
    this.x5p_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).s51 = function () {
    return this.x5p_1;
  };
  protoOf(LegacyVideoPost).i5a = function (_set____db54di) {
    this.y5p_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).j5a = function () {
    return this.y5p_1;
  };
  protoOf(LegacyVideoPost).k5a = function (_set____db54di) {
    this.z5p_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).l5a = function () {
    return this.z5p_1;
  };
  protoOf(LegacyVideoPost).m5a = function (_set____db54di) {
    this.a5q_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).n5a = function () {
    return this.a5q_1;
  };
  protoOf(LegacyVideoPost).o5a = function (_set____db54di) {
    this.b5q_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).p5a = function () {
    return this.b5q_1;
  };
  protoOf(LegacyVideoPost).q5a = function (_set____db54di) {
    this.c5q_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).r5a = function () {
    return this.c5q_1;
  };
  protoOf(LegacyVideoPost).s5a = function (_set____db54di) {
    this.d5q_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).t5a = function () {
    return this.d5q_1;
  };
  protoOf(LegacyVideoPost).u5a = function (_set____db54di) {
    this.e5q_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).v5a = function () {
    return this.e5q_1;
  };
  protoOf(LegacyVideoPost).w5a = function (_set____db54di) {
    this.f5q_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).x5a = function () {
    return this.f5q_1;
  };
  protoOf(LegacyVideoPost).y5a = function (_set____db54di) {
    this.g5q_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).z5a = function () {
    return this.g5q_1;
  };
  protoOf(LegacyVideoPost).a5b = function (_set____db54di) {
    this.h5q_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).b5b = function () {
    return this.h5q_1;
  };
  protoOf(LegacyVideoPost).c5b = function (_set____db54di) {
    this.i5q_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).d5b = function () {
    return this.i5q_1;
  };
  protoOf(LegacyVideoPost).e5b = function (_set____db54di) {
    this.j5q_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).f5b = function () {
    return this.j5q_1;
  };
  protoOf(LegacyVideoPost).g5b = function (_set____db54di) {
    this.k5q_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).h5b = function () {
    return this.k5q_1;
  };
  protoOf(LegacyVideoPost).i5b = function (_set____db54di) {
    this.l5q_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).j5b = function () {
    return this.l5q_1;
  };
  protoOf(LegacyVideoPost).k5b = function (_set____db54di) {
    this.m5q_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).l5b = function () {
    return this.m5q_1;
  };
  protoOf(LegacyVideoPost).p55 = function (_set____db54di) {
    this.n5q_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).q55 = function () {
    return this.n5q_1;
  };
  protoOf(LegacyVideoPost).m5b = function (_set____db54di) {
    this.o5q_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).n5b = function () {
    return this.o5q_1;
  };
  protoOf(LegacyVideoPost).o5b = function (_set____db54di) {
    this.p5q_1 = _set____db54di;
  };
  protoOf(LegacyVideoPost).p5b = function () {
    return this.p5q_1;
  };
  protoOf(LegacyVideoPost).c51 = function (_set____db54di) {
    this.caption = _set____db54di;
  };
  protoOf(LegacyVideoPost).d51 = function () {
    return this.caption;
  };
  protoOf(LegacyVideoPost).q5q = function () {
    return this.player;
  };
  function Companion_29() {
  }
  var Companion_instance_29;
  function Companion_getInstance_30() {
    return Companion_instance_29;
  }
  function $serializer_28() {
    $serializer_instance_27 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.options.Dialogue', this, 3);
    tmp0_serialDesc.ew('name', true);
    tmp0_serialDesc.ew('label', true);
    tmp0_serialDesc.ew('phrase', true);
    this.r5q_1 = tmp0_serialDesc;
  }
  protoOf($serializer_28).on = function (decoder) {
    var tmp0_desc = this.r5q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.mq(tmp0_desc);
    if (tmp7_input.cr()) {
      tmp4_local0 = tmp7_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.nq(tmp0_desc);
    return Dialogue_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_28).nn = function () {
    return this.r5q_1;
  };
  protoOf($serializer_28).tw = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_27;
  function $serializer_getInstance_27() {
    if ($serializer_instance_27 == null)
      new $serializer_28();
    return $serializer_instance_27;
  }
  function Dialogue_init_$Init$(seen0, name, label, phrase, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_27().r5q_1);
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
    this.name = null;
    this.label = null;
    this.phrase = null;
  }
  protoOf(Dialogue).m = function () {
    return this.name;
  };
  protoOf(Dialogue).s5q = function () {
    return this.label;
  };
  protoOf(Dialogue).t5q = function () {
    return this.phrase;
  };
  function Photo$Companion$$childSerializers$_anonymous__7997i0() {
    return new ReferenceArraySerializer(getKClass(PhotoSize), $serializer_getInstance_29());
  }
  function Companion_30() {
    Companion_instance_30 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.u5q_1 = [null, null, lazy(tmp_0, Photo$Companion$$childSerializers$_anonymous__7997i0)];
  }
  var Companion_instance_30;
  function Companion_getInstance_31() {
    if (Companion_instance_30 == null)
      new Companion_30();
    return Companion_instance_30;
  }
  function $serializer_29() {
    $serializer_instance_28 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.options.Photo', this, 3);
    tmp0_serialDesc.ew('caption', true);
    tmp0_serialDesc.ew('original_size', true);
    tmp0_serialDesc.ew('alt_sizes', true);
    this.v5q_1 = tmp0_serialDesc;
  }
  protoOf($serializer_29).on = function (decoder) {
    var tmp0_desc = this.v5q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.mq(tmp0_desc);
    var tmp8_cached = Companion_getInstance_31().u5q_1;
    if (tmp7_input.cr()) {
      tmp4_local0 = tmp7_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.ar(tmp0_desc, 1, $serializer_getInstance_29(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.ar(tmp0_desc, 2, tmp8_cached[2].n1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.ar(tmp0_desc, 1, $serializer_getInstance_29(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.ar(tmp0_desc, 2, tmp8_cached[2].n1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.nq(tmp0_desc);
    return Photo_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_29).nn = function () {
    return this.v5q_1;
  };
  protoOf($serializer_29).tw = function () {
    var tmp0_cached = Companion_getInstance_31().u5q_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_29()), get_nullable(tmp0_cached[2].n1())];
  };
  var $serializer_instance_28;
  function $serializer_getInstance_28() {
    if ($serializer_instance_28 == null)
      new $serializer_29();
    return $serializer_instance_28;
  }
  function Photo_init_$Init$(seen0, caption, originalSize, altSizes, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_28().v5q_1);
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
    Companion_getInstance_31();
    this.caption = null;
    this.originalSize = null;
    this.altSizes = null;
  }
  protoOf(Photo).d51 = function () {
    return this.caption;
  };
  protoOf(Photo).w5q = function () {
    return this.originalSize;
  };
  protoOf(Photo).x5q = function () {
    return this.altSizes;
  };
  function Companion_31() {
  }
  var Companion_instance_31;
  function Companion_getInstance_32() {
    return Companion_instance_31;
  }
  function $serializer_30() {
    $serializer_instance_29 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.options.PhotoSize', this, 3);
    tmp0_serialDesc.ew('width', true);
    tmp0_serialDesc.ew('height', true);
    tmp0_serialDesc.ew('url', true);
    this.y5q_1 = tmp0_serialDesc;
  }
  protoOf($serializer_30).on = function (decoder) {
    var tmp0_desc = this.y5q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = null;
    var tmp7_input = decoder.mq(tmp0_desc);
    if (tmp7_input.cr()) {
      tmp4_local0 = tmp7_input.rq(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.rq(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.rq(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.rq(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.nq(tmp0_desc);
    return PhotoSize_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_30).nn = function () {
    return this.y5q_1;
  };
  protoOf($serializer_30).tw = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_29;
  function $serializer_getInstance_29() {
    if ($serializer_instance_29 == null)
      new $serializer_30();
    return $serializer_instance_29;
  }
  function PhotoSize_init_$Init$(seen0, width, height, url, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_29().y5q_1);
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
    this.width = 0;
    this.height = 0;
    this.url = null;
  }
  protoOf(PhotoSize).b55 = function () {
    return this.width;
  };
  protoOf(PhotoSize).z54 = function () {
    return this.height;
  };
  protoOf(PhotoSize).d3c = function () {
    return this.url;
  };
  function Companion_32() {
  }
  var Companion_instance_32;
  function Companion_getInstance_33() {
    return Companion_instance_32;
  }
  function $serializer_31() {
    $serializer_instance_30 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.post.options.Video', this, 2);
    tmp0_serialDesc.ew('width', true);
    tmp0_serialDesc.ew('embedCode', true);
    this.z5q_1 = tmp0_serialDesc;
  }
  protoOf($serializer_31).on = function (decoder) {
    var tmp0_desc = this.z5q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.mq(tmp0_desc);
    if (tmp6_input.cr()) {
      tmp4_local0 = tmp6_input.ar(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.ar(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.nq(tmp0_desc);
    return Video_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_31).nn = function () {
    return this.z5q_1;
  };
  protoOf($serializer_31).tw = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_30;
  function $serializer_getInstance_30() {
    if ($serializer_instance_30 == null)
      new $serializer_31();
    return $serializer_instance_30;
  }
  function Video_init_$Init$(seen0, width, embedCode, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_30().z5q_1);
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
    this.width = null;
    this.embedCode = null;
  }
  protoOf(Video).b55 = function () {
    return this.width;
  };
  protoOf(Video).a5r = function () {
    return this.embedCode;
  };
  function Companion_33() {
  }
  var Companion_instance_33;
  function Companion_getInstance_34() {
    return Companion_instance_33;
  }
  function $serializer_32() {
    $serializer_instance_31 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.trail.BlogInTrail', this, 6);
    tmp0_serialDesc.ew('name', true);
    tmp0_serialDesc.ew('active', true);
    tmp0_serialDesc.ew('theme', true);
    tmp0_serialDesc.ew('share_likes', true);
    tmp0_serialDesc.ew('share_following', true);
    tmp0_serialDesc.ew('can_be_followed', true);
    this.b5r_1 = tmp0_serialDesc;
  }
  protoOf($serializer_32).on = function (decoder) {
    var tmp0_desc = this.b5r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = null;
    var tmp7_local3 = false;
    var tmp8_local4 = false;
    var tmp9_local5 = false;
    var tmp10_input = decoder.mq(tmp0_desc);
    if (tmp10_input.cr()) {
      tmp4_local0 = tmp10_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.oq(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.ar(tmp0_desc, 2, $serializer_getInstance_16(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.oq(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.oq(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.oq(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.oq(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.ar(tmp0_desc, 2, $serializer_getInstance_16(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.oq(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.oq(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.oq(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.nq(tmp0_desc);
    return BlogInTrail_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_32).nn = function () {
    return this.b5r_1;
  };
  protoOf($serializer_32).tw = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), get_nullable($serializer_getInstance_16()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  var $serializer_instance_31;
  function $serializer_getInstance_31() {
    if ($serializer_instance_31 == null)
      new $serializer_32();
    return $serializer_instance_31;
  }
  function BlogInTrail_init_$Init$(seen0, name, isActive, theme, isShareLikes, isShareFollowing, isCanBeFollowed, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_31().b5r_1);
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
    this.name = null;
    this.isActive = false;
    this.theme = null;
    this.isShareLikes = false;
    this.isShareFollowing = false;
    this.isCanBeFollowed = false;
  }
  protoOf(BlogInTrail).m = function () {
    return this.name;
  };
  protoOf(BlogInTrail).f18 = function () {
    return this.isActive;
  };
  protoOf(BlogInTrail).u57 = function () {
    return this.theme;
  };
  protoOf(BlogInTrail).c5r = function () {
    return this.isShareLikes;
  };
  protoOf(BlogInTrail).d5r = function () {
    return this.isShareFollowing;
  };
  protoOf(BlogInTrail).e5r = function () {
    return this.isCanBeFollowed;
  };
  function Companion_34() {
  }
  var Companion_instance_34;
  function Companion_getInstance_35() {
    return Companion_instance_34;
  }
  function $serializer_33() {
    $serializer_instance_32 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.trail.IdInTrail', this, 1);
    tmp0_serialDesc.ew('id', true);
    this.f5r_1 = tmp0_serialDesc;
  }
  protoOf($serializer_33).on = function (decoder) {
    var tmp0_desc = this.f5r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.mq(tmp0_desc);
    if (tmp5_input.cr()) {
      tmp4_local0 = tmp5_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.nq(tmp0_desc);
    return IdInTrail_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_33).nn = function () {
    return this.f5r_1;
  };
  protoOf($serializer_33).tw = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_32;
  function $serializer_getInstance_32() {
    if ($serializer_instance_32 == null)
      new $serializer_33();
    return $serializer_instance_32;
  }
  function IdInTrail_init_$Init$(seen0, id, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_32().f5r_1);
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
    this.id = null;
  }
  protoOf(IdInTrail).d50 = function () {
    return this.id;
  };
  function Companion_35() {
  }
  var Companion_instance_35;
  function Companion_getInstance_36() {
    return Companion_instance_35;
  }
  function $serializer_34() {
    $serializer_instance_33 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.trail.Trail', this, 6);
    tmp0_serialDesc.ew('blog', true);
    tmp0_serialDesc.ew('post', true);
    tmp0_serialDesc.ew('content_raw', true);
    tmp0_serialDesc.ew('content', true);
    tmp0_serialDesc.ew('current_item', true);
    tmp0_serialDesc.ew('root_item', true);
    this.g5r_1 = tmp0_serialDesc;
  }
  protoOf($serializer_34).on = function (decoder) {
    var tmp0_desc = this.g5r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = false;
    var tmp9_local5 = false;
    var tmp10_input = decoder.mq(tmp0_desc);
    if (tmp10_input.cr()) {
      tmp4_local0 = tmp10_input.ar(tmp0_desc, 0, $serializer_getInstance_31(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.ar(tmp0_desc, 1, $serializer_getInstance_32(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.oq(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.oq(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.ar(tmp0_desc, 0, $serializer_getInstance_31(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.ar(tmp0_desc, 1, $serializer_getInstance_32(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.oq(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.oq(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.nq(tmp0_desc);
    return Trail_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_34).nn = function () {
    return this.g5r_1;
  };
  protoOf($serializer_34).tw = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_31()), get_nullable($serializer_getInstance_32()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  var $serializer_instance_33;
  function $serializer_getInstance_33() {
    if ($serializer_instance_33 == null)
      new $serializer_34();
    return $serializer_instance_33;
  }
  function Trail_init_$Init$(seen0, blog, post, contentRaw, content, isCurrentItem, isRootItem, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_33().g5r_1);
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
    this.blog = null;
    this.post = null;
    this.contentRaw = null;
    this.content = null;
    this.isCurrentItem = false;
    this.isRootItem = false;
  }
  protoOf(Trail).q55 = function () {
    return this.blog;
  };
  protoOf(Trail).h5r = function () {
    return this.post;
  };
  protoOf(Trail).i5r = function () {
    return this.contentRaw;
  };
  protoOf(Trail).e3c = function () {
    return this.content;
  };
  protoOf(Trail).j5r = function () {
    return this.isCurrentItem;
  };
  protoOf(Trail).k5r = function () {
    return this.isRootItem;
  };
  function Companion_36() {
  }
  var Companion_instance_36;
  function Companion_getInstance_37() {
    return Companion_instance_36;
  }
  function $serializer_35() {
    $serializer_instance_34 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.user.FollowerUser', this, 4);
    tmp0_serialDesc.ew('name', true);
    tmp0_serialDesc.ew('following', true);
    tmp0_serialDesc.ew('url', true);
    tmp0_serialDesc.ew('updated', true);
    this.l5r_1 = tmp0_serialDesc;
  }
  protoOf($serializer_35).on = function (decoder) {
    var tmp0_desc = this.l5r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.mq(tmp0_desc);
    if (tmp8_input.cr()) {
      tmp4_local0 = tmp8_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.ar(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.ar(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.ar(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.ar(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.nq(tmp0_desc);
    return FollowerUser_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_35).nn = function () {
    return this.l5r_1;
  };
  protoOf($serializer_35).tw = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_34;
  function $serializer_getInstance_34() {
    if ($serializer_instance_34 == null)
      new $serializer_35();
    return $serializer_instance_34;
  }
  function FollowerUser_init_$Init$(seen0, name, following, url, updated, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_34().l5r_1);
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
    this.name = null;
    this.following = null;
    this.url = null;
    this.updated = null;
  }
  protoOf(FollowerUser).p50 = function (_set____db54di) {
    this.name = _set____db54di;
  };
  protoOf(FollowerUser).m = function () {
    return this.name;
  };
  protoOf(FollowerUser).m5r = function (_set____db54di) {
    this.following = _set____db54di;
  };
  protoOf(FollowerUser).n5r = function () {
    return this.following;
  };
  protoOf(FollowerUser).x51 = function (_set____db54di) {
    this.url = _set____db54di;
  };
  protoOf(FollowerUser).d3c = function () {
    return this.url;
  };
  protoOf(FollowerUser).o5r = function (_set____db54di) {
    this.updated = _set____db54di;
  };
  protoOf(FollowerUser).l57 = function () {
    return this.updated;
  };
  function User$Companion$$childSerializers$_anonymous__6nf9sv() {
    return new ReferenceArraySerializer(getKClass(Blog), $serializer_getInstance_14());
  }
  function Companion_37() {
    Companion_instance_37 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.p5r_1 = [null, null, null, null, lazy(tmp_0, User$Companion$$childSerializers$_anonymous__6nf9sv)];
  }
  var Companion_instance_37;
  function Companion_getInstance_38() {
    if (Companion_instance_37 == null)
      new Companion_37();
    return Companion_instance_37;
  }
  function $serializer_36() {
    $serializer_instance_35 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ktumblr.entity.user.User', this, 5);
    tmp0_serialDesc.ew('following', true);
    tmp0_serialDesc.ew('default_post_format', true);
    tmp0_serialDesc.ew('name', true);
    tmp0_serialDesc.ew('likes', true);
    tmp0_serialDesc.ew('blogs', true);
    this.q5r_1 = tmp0_serialDesc;
  }
  protoOf($serializer_36).on = function (decoder) {
    var tmp0_desc = this.q5r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.mq(tmp0_desc);
    var tmp10_cached = Companion_getInstance_38().p5r_1;
    if (tmp9_input.cr()) {
      tmp4_local0 = tmp9_input.ar(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.ar(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.ar(tmp0_desc, 4, tmp10_cached[4].n1(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.dr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.ar(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.ar(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.ar(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.ar(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.ar(tmp0_desc, 4, tmp10_cached[4].n1(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.nq(tmp0_desc);
    return User_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_36).nn = function () {
    return this.q5r_1;
  };
  protoOf($serializer_36).tw = function () {
    var tmp0_cached = Companion_getInstance_38().p5r_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[4].n1())];
  };
  var $serializer_instance_35;
  function $serializer_getInstance_35() {
    if ($serializer_instance_35 == null)
      new $serializer_36();
    return $serializer_instance_35;
  }
  function User_init_$Init$(seen0, followingCount, defaultPostFormat, name, likeCount, blogs, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_35().q5r_1);
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
    Companion_getInstance_38();
    Resource.call(this);
    this.followingCount = null;
    this.defaultPostFormat = null;
    this.name = null;
    this.likeCount = null;
    this.blogs = null;
  }
  protoOf(User).r5r = function () {
    return this.followingCount;
  };
  protoOf(User).s5r = function () {
    return this.defaultPostFormat;
  };
  protoOf(User).m = function () {
    return this.name;
  };
  protoOf(User).r57 = function () {
    return this.likeCount;
  };
  protoOf(User).l55 = function () {
    return this.blogs;
  };
  function proceedUnit($this, body, $completion) {
    var tmp = new $proceedUnitCOROUTINE$($this, body, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function blogUrl($this, blogName) {
    return contains(blogName, '.') ? blogName : blogName + '.tumblr.com';
  }
  function AbstractResourceImpl$oauthPostUnit$slambda($path, this$0, $params, $files, resultContinuation) {
    this.l5s_1 = $path;
    this.m5s_1 = this$0;
    this.n5s_1 = $params;
    this.o5s_1 = $files;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractResourceImpl$oauthPostUnit$slambda).p5s = function ($completion) {
    var tmp = this.o2d($completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(AbstractResourceImpl$oauthPostUnit$slambda).c9 = function ($completion) {
    return this.p5s($completion);
  };
  protoOf(AbstractResourceImpl$oauthPostUnit$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            var this_0 = (new HttpRequest()).u4t('https://api.tumblr.com/v2' + this.l5s_1).w4t('Authorization', this.m5s_1.q5s_1.a4v()).v4t(MediaType_getInstance().r5s_1).b4u(this.n5s_1);
            var _iterator__ex2g4s = this.o5s_1.l1().t();
            while (_iterator__ex2g4s.u()) {
              var element = _iterator__ex2g4s.v();
              var key = element.m1();
              var pair = element.n1();
              this_0.d4s(key, pair.first, pair.second);
            }

            suspendResult = this_0.d4u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(AbstractResourceImpl$oauthPostUnit$slambda).o2d = function (completion) {
    return new AbstractResourceImpl$oauthPostUnit$slambda(this.l5s_1, this.m5s_1, this.n5s_1, this.o5s_1, completion);
  };
  function AbstractResourceImpl$oauthPostUnit$slambda_0($path, this$0, $params, $files, resultContinuation) {
    var i = new AbstractResourceImpl$oauthPostUnit$slambda($path, this$0, $params, $files, resultContinuation);
    return constructCallableReference(function ($completion) {
      return i.p5s($completion);
    }, 0);
  }
  function AbstractResourceImpl$oauthPutUnit$slambda($path, this$0, $params, resultContinuation) {
    this.a5t_1 = $path;
    this.b5t_1 = this$0;
    this.c5t_1 = $params;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractResourceImpl$oauthPutUnit$slambda).p5s = function ($completion) {
    var tmp = this.o2d($completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(AbstractResourceImpl$oauthPutUnit$slambda).c9 = function ($completion) {
    return this.p5s($completion);
  };
  protoOf(AbstractResourceImpl$oauthPutUnit$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = (new HttpRequest()).u4t('https://api.tumblr.com/v2' + this.a5t_1).w4t('Authorization', this.b5t_1.q5s_1.a4v()).v4t(MediaType_getInstance().r5s_1).b4u(this.c5t_1).e4u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(AbstractResourceImpl$oauthPutUnit$slambda).o2d = function (completion) {
    return new AbstractResourceImpl$oauthPutUnit$slambda(this.a5t_1, this.b5t_1, this.c5t_1, completion);
  };
  function AbstractResourceImpl$oauthPutUnit$slambda_0($path, this$0, $params, resultContinuation) {
    var i = new AbstractResourceImpl$oauthPutUnit$slambda($path, this$0, $params, resultContinuation);
    return constructCallableReference(function ($completion) {
      return i.p5s($completion);
    }, 0);
  }
  function $proceedUnitCOROUTINE$(_this__u8e3s4, body, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b5s_1 = _this__u8e3s4;
    this.c5s_1 = body;
  }
  protoOf($proceedUnitCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 3;
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.c5s_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            var containsArg = response.r4u_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              return new ResponseUnit(response.v4u());
            }

            throw TumblrException_init_$Create$_0(response.r4u_1, response.v4u());
          case 2:
            this.i8_1 = 3;
            var tmp_0 = this.k8_1;
            if (tmp_0 instanceof Exception) {
              var e = this.k8_1;
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.k8_1;
            }

          case 3:
            throw this.k8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i8_1 === 3) {
          throw e_0;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e_0;
        }
      }
     while (true);
  };
  function AbstractResourceImpl(auth) {
    this.q5s_1 = auth;
  }
  protoOf(AbstractResourceImpl).d5t = function (path, params, files, $completion) {
    return proceedUnit(this, AbstractResourceImpl$oauthPostUnit$slambda_0(path, this, params, files, null), $completion);
  };
  protoOf(AbstractResourceImpl).e5t = function (path, params, files, $completion, $super) {
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
    return $super === VOID ? this.d5t(path, params, files, $completion) : $super.d5t.call(this, path, params, files, $completion);
  };
  protoOf(AbstractResourceImpl).f5t = function (path, params, $completion) {
    return proceedUnit(this, AbstractResourceImpl$oauthPutUnit$slambda_0(path, this, params, null), $completion);
  };
  protoOf(AbstractResourceImpl).g5t = function (blogName, extPath) {
    return '/blog/' + blogUrl(this, blogName) + extPath;
  };
  function AuthResourceImpl$oAuth2TokenBlocking$slambda(this$0, $request, resultContinuation) {
    this.p5t_1 = this$0;
    this.q5t_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AuthResourceImpl$oAuth2TokenBlocking$slambda).s5t = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(AuthResourceImpl$oAuth2TokenBlocking$slambda).d9 = function (p1, $completion) {
    return this.s5t((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AuthResourceImpl$oAuth2TokenBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.p5t_1.k4v(this.q5t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(AuthResourceImpl$oAuth2TokenBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new AuthResourceImpl$oAuth2TokenBlocking$slambda(this.p5t_1, this.q5t_1, completion);
    i.r5t_1 = $this$toBlocking;
    return i;
  };
  function AuthResourceImpl$oAuth2TokenBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new AuthResourceImpl$oAuth2TokenBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.s5t($this$toBlocking, $completion);
    }, 1);
  }
  function AuthResourceImpl$oAuth2TokenRefreshBlocking$slambda(this$0, $request, resultContinuation) {
    this.b5u_1 = this$0;
    this.c5u_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AuthResourceImpl$oAuth2TokenRefreshBlocking$slambda).s5t = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(AuthResourceImpl$oAuth2TokenRefreshBlocking$slambda).d9 = function (p1, $completion) {
    return this.s5t((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AuthResourceImpl$oAuth2TokenRefreshBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.b5u_1.n4v(this.c5u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(AuthResourceImpl$oAuth2TokenRefreshBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new AuthResourceImpl$oAuth2TokenRefreshBlocking$slambda(this.b5u_1, this.c5u_1, completion);
    i.d5u_1 = $this$toBlocking;
    return i;
  };
  function AuthResourceImpl$oAuth2TokenRefreshBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new AuthResourceImpl$oAuth2TokenRefreshBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.s5t($this$toBlocking, $completion);
    }, 1);
  }
  function $oAuth2TokenCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m5u_1 = _this__u8e3s4;
    this.n5u_1 = request;
  }
  protoOf($oAuth2TokenCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 6;
            this.q5u_1 = this.m5u_1;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.q5u_1;
            this.i8_1 = 5;
            this.h8_1 = 2;
            suspendResult = (new HttpRequest()).u4t('https://api.tumblr.com/v2/oauth2/token').b4u(this.n5u_1.z4y()).d4u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.p5u_1 = suspendResult;
            var containsArg = this.p5u_1.r4u_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0 = Json_getInstance();
              var obj = this.p5u_1.v4u();
              var this_0 = tmp0.r5u_1;
              var this_1 = this_0.br();
              var this_2 = serializer(this_1, createKType(getKClass(AuthOAuth2TokenResponse), arrayOf([]), false));
              tmp_0.o5u_1 = new Response(this_0.c4i(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.p5u_1.v4u());
              this.i8_1 = 6;
              this.h8_1 = 4;
              continue $sm;
            } else {
              this.h8_1 = 3;
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_0(this.p5u_1.r4u_1, this.p5u_1.v4u());
          case 4:
            return this.o5u_1;
          case 5:
            this.i8_1 = 6;
            var tmp_1 = this.k8_1;
            if (tmp_1 instanceof Exception) {
              var e = this.k8_1;
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.k8_1;
            }

          case 6:
            throw this.k8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i8_1 === 6) {
          throw e_0;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e_0;
        }
      }
     while (true);
  };
  function $oAuth2Token$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a5v_1 = _this__u8e3s4;
    this.b5v_1 = request;
  }
  protoOf($oAuth2Token$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.a5v_1.oAuth2Token === protoOf(AuthResourceImpl).oAuth2Token) {
              this.h8_1 = 2;
              suspendResult = this.a5v_1.j4v(this.b5v_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.a5v_1.oAuth2Token(this.b5v_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.c5v_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.c5v_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.c5v_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $oAuth2TokenRefreshCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m5v_1 = _this__u8e3s4;
    this.n5v_1 = request;
  }
  protoOf($oAuth2TokenRefreshCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 6;
            this.q5v_1 = this.m5v_1;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.q5v_1;
            this.i8_1 = 5;
            this.h8_1 = 2;
            suspendResult = (new HttpRequest()).u4t('https://api.tumblr.com/v2/oauth2/token').b4u(this.n5v_1.z4y()).d4u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.p5v_1 = suspendResult;
            var containsArg = this.p5v_1.r4u_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0 = Json_getInstance();
              var obj = this.p5v_1.v4u();
              var this_0 = tmp0.r5u_1;
              var this_1 = this_0.br();
              var this_2 = serializer(this_1, createKType(getKClass(AuthOAuth2TokenResponse), arrayOf([]), false));
              tmp_0.o5v_1 = new Response(this_0.c4i(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.p5v_1.v4u());
              this.i8_1 = 6;
              this.h8_1 = 4;
              continue $sm;
            } else {
              this.h8_1 = 3;
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_0(this.p5v_1.r4u_1, this.p5v_1.v4u());
          case 4:
            return this.o5v_1;
          case 5:
            this.i8_1 = 6;
            var tmp_1 = this.k8_1;
            if (tmp_1 instanceof Exception) {
              var e = this.k8_1;
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.k8_1;
            }

          case 6:
            throw this.k8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i8_1 === 6) {
          throw e_0;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e_0;
        }
      }
     while (true);
  };
  function $oAuth2TokenRefresh$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z5v_1 = _this__u8e3s4;
    this.a5w_1 = request;
  }
  protoOf($oAuth2TokenRefresh$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.z5v_1.oAuth2TokenRefresh === protoOf(AuthResourceImpl).oAuth2TokenRefresh) {
              this.h8_1 = 2;
              suspendResult = this.z5v_1.m4v(this.a5w_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.z5v_1.oAuth2TokenRefresh(this.a5w_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.b5w_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.b5w_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.b5w_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function AuthResourceImpl(auth) {
    AbstractResourceImpl.call(this, auth);
  }
  protoOf(AuthResourceImpl).authorizeUrl = function (request) {
    // Inline function 'kotlin.apply' call
    var this_0 = new URLBuilder();
    this_0.v2p(Companion_getInstance().x2p_1);
    this_0.m2o_1 = 'www.tumblr.com';
    set_encodedPath(this_0, '/oauth2/authorize');
    // Inline function 'kotlin.apply' call
    var this_1 = this_0.v2o_1;
    this_1.y28('client_id', this.q5s_1.w4u_1);
    this_1.y28('response_type', request.responseType);
    this_1.y28('state', ensureNotNull(request.state));
    this_1.y28('scope', request.scope);
    var tmp0_safe_receiver = request.redirectUri;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_1.y28('redirect_uri', tmp0_safe_receiver);
    }
    return this_0.b2h().toString();
  };
  protoOf(AuthResourceImpl).j4v = function (request, $completion) {
    var tmp = new $oAuth2TokenCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(AuthResourceImpl).oAuth2Token = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.j4v(request, $completion);
    });
  };
  protoOf(AuthResourceImpl).k4v = function (request, $completion) {
    var tmp = new $oAuth2Token$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(AuthResourceImpl).l4v = function (request) {
    return toBlocking(AuthResourceImpl$oAuth2TokenBlocking$slambda_0(this, request, null));
  };
  protoOf(AuthResourceImpl).m4v = function (request, $completion) {
    var tmp = new $oAuth2TokenRefreshCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(AuthResourceImpl).oAuth2TokenRefresh = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.m4v(request, $completion);
    });
  };
  protoOf(AuthResourceImpl).n4v = function (request, $completion) {
    var tmp = new $oAuth2TokenRefresh$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(AuthResourceImpl).o4v = function (request) {
    return toBlocking(AuthResourceImpl$oAuth2TokenRefreshBlocking$slambda_0(this, request, null));
  };
  function BlogResourceImpl$blogInfoBlocking$slambda(this$0, $request, resultContinuation) {
    this.k5w_1 = this$0;
    this.l5w_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BlogResourceImpl$blogInfoBlocking$slambda).n5w = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl$blogInfoBlocking$slambda).d9 = function (p1, $completion) {
    return this.n5w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BlogResourceImpl$blogInfoBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.k5w_1.q4v(this.l5w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(BlogResourceImpl$blogInfoBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new BlogResourceImpl$blogInfoBlocking$slambda(this.k5w_1, this.l5w_1, completion);
    i.m5w_1 = $this$toBlocking;
    return i;
  };
  function BlogResourceImpl$blogInfoBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new BlogResourceImpl$blogInfoBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.n5w($this$toBlocking, $completion);
    }, 1);
  }
  function BlogResourceImpl$blogAvatarBlocking$slambda(this$0, $request, resultContinuation) {
    this.w5w_1 = this$0;
    this.x5w_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BlogResourceImpl$blogAvatarBlocking$slambda).z5w = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl$blogAvatarBlocking$slambda).d9 = function (p1, $completion) {
    return this.z5w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BlogResourceImpl$blogAvatarBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.w5w_1.t4v(this.x5w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(BlogResourceImpl$blogAvatarBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new BlogResourceImpl$blogAvatarBlocking$slambda(this.w5w_1, this.x5w_1, completion);
    i.y5w_1 = $this$toBlocking;
    return i;
  };
  function BlogResourceImpl$blogAvatarBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new BlogResourceImpl$blogAvatarBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.z5w($this$toBlocking, $completion);
    }, 1);
  }
  function BlogResourceImpl$blogLikesBlocking$slambda(this$0, $request, resultContinuation) {
    this.i5x_1 = this$0;
    this.j5x_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BlogResourceImpl$blogLikesBlocking$slambda).l5x = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl$blogLikesBlocking$slambda).d9 = function (p1, $completion) {
    return this.l5x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BlogResourceImpl$blogLikesBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.i5x_1.w4v(this.j5x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(BlogResourceImpl$blogLikesBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new BlogResourceImpl$blogLikesBlocking$slambda(this.i5x_1, this.j5x_1, completion);
    i.k5x_1 = $this$toBlocking;
    return i;
  };
  function BlogResourceImpl$blogLikesBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new BlogResourceImpl$blogLikesBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.l5x($this$toBlocking, $completion);
    }, 1);
  }
  function BlogResourceImpl$blogFollowingBlocking$slambda(this$0, $request, resultContinuation) {
    this.u5x_1 = this$0;
    this.v5x_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BlogResourceImpl$blogFollowingBlocking$slambda).x5x = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl$blogFollowingBlocking$slambda).d9 = function (p1, $completion) {
    return this.x5x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BlogResourceImpl$blogFollowingBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.u5x_1.z4v(this.v5x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(BlogResourceImpl$blogFollowingBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new BlogResourceImpl$blogFollowingBlocking$slambda(this.u5x_1, this.v5x_1, completion);
    i.w5x_1 = $this$toBlocking;
    return i;
  };
  function BlogResourceImpl$blogFollowingBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new BlogResourceImpl$blogFollowingBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.x5x($this$toBlocking, $completion);
    }, 1);
  }
  function BlogResourceImpl$blogFollowersBlocking$slambda(this$0, $request, resultContinuation) {
    this.g5y_1 = this$0;
    this.h5y_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BlogResourceImpl$blogFollowersBlocking$slambda).j5y = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl$blogFollowersBlocking$slambda).d9 = function (p1, $completion) {
    return this.j5y((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BlogResourceImpl$blogFollowersBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.g5y_1.c4w(this.h5y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(BlogResourceImpl$blogFollowersBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new BlogResourceImpl$blogFollowersBlocking$slambda(this.g5y_1, this.h5y_1, completion);
    i.i5y_1 = $this$toBlocking;
    return i;
  };
  function BlogResourceImpl$blogFollowersBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new BlogResourceImpl$blogFollowersBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.j5y($this$toBlocking, $completion);
    }, 1);
  }
  function BlogResourceImpl$blogPostsBlocking$slambda(this$0, $request, resultContinuation) {
    this.s5y_1 = this$0;
    this.t5y_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BlogResourceImpl$blogPostsBlocking$slambda).v5y = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl$blogPostsBlocking$slambda).d9 = function (p1, $completion) {
    return this.v5y((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BlogResourceImpl$blogPostsBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.s5y_1.f4w(this.t5y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(BlogResourceImpl$blogPostsBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new BlogResourceImpl$blogPostsBlocking$slambda(this.s5y_1, this.t5y_1, completion);
    i.u5y_1 = $this$toBlocking;
    return i;
  };
  function BlogResourceImpl$blogPostsBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new BlogResourceImpl$blogPostsBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.v5y($this$toBlocking, $completion);
    }, 1);
  }
  function BlogResourceImpl$blogQueuedPostsBlocking$slambda(this$0, $request, resultContinuation) {
    this.e5z_1 = this$0;
    this.f5z_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BlogResourceImpl$blogQueuedPostsBlocking$slambda).v5y = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl$blogQueuedPostsBlocking$slambda).d9 = function (p1, $completion) {
    return this.v5y((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BlogResourceImpl$blogQueuedPostsBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.e5z_1.i4w(this.f5z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(BlogResourceImpl$blogQueuedPostsBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new BlogResourceImpl$blogQueuedPostsBlocking$slambda(this.e5z_1, this.f5z_1, completion);
    i.g5z_1 = $this$toBlocking;
    return i;
  };
  function BlogResourceImpl$blogQueuedPostsBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new BlogResourceImpl$blogQueuedPostsBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.v5y($this$toBlocking, $completion);
    }, 1);
  }
  function BlogResourceImpl$blogDraftPostsBlocking$slambda(this$0, $request, resultContinuation) {
    this.p5z_1 = this$0;
    this.q5z_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BlogResourceImpl$blogDraftPostsBlocking$slambda).v5y = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl$blogDraftPostsBlocking$slambda).d9 = function (p1, $completion) {
    return this.v5y((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BlogResourceImpl$blogDraftPostsBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.p5z_1.l4w(this.q5z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(BlogResourceImpl$blogDraftPostsBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new BlogResourceImpl$blogDraftPostsBlocking$slambda(this.p5z_1, this.q5z_1, completion);
    i.r5z_1 = $this$toBlocking;
    return i;
  };
  function BlogResourceImpl$blogDraftPostsBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new BlogResourceImpl$blogDraftPostsBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.v5y($this$toBlocking, $completion);
    }, 1);
  }
  function BlogResourceImpl$blogSubmissionsBlocking$slambda(this$0, $request, resultContinuation) {
    this.a60_1 = this$0;
    this.b60_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BlogResourceImpl$blogSubmissionsBlocking$slambda).v5y = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl$blogSubmissionsBlocking$slambda).d9 = function (p1, $completion) {
    return this.v5y((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BlogResourceImpl$blogSubmissionsBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.a60_1.o4w(this.b60_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(BlogResourceImpl$blogSubmissionsBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new BlogResourceImpl$blogSubmissionsBlocking$slambda(this.a60_1, this.b60_1, completion);
    i.c60_1 = $this$toBlocking;
    return i;
  };
  function BlogResourceImpl$blogSubmissionsBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new BlogResourceImpl$blogSubmissionsBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.v5y($this$toBlocking, $completion);
    }, 1);
  }
  function BlogResourceImpl$postCreateBlocking$slambda(this$0, $request, resultContinuation) {
    this.l60_1 = this$0;
    this.m60_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BlogResourceImpl$postCreateBlocking$slambda).o60 = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl$postCreateBlocking$slambda).d9 = function (p1, $completion) {
    return this.o60((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BlogResourceImpl$postCreateBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.l60_1.r4w(this.m60_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(BlogResourceImpl$postCreateBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new BlogResourceImpl$postCreateBlocking$slambda(this.l60_1, this.m60_1, completion);
    i.n60_1 = $this$toBlocking;
    return i;
  };
  function BlogResourceImpl$postCreateBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new BlogResourceImpl$postCreateBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.o60($this$toBlocking, $completion);
    }, 1);
  }
  function BlogResourceImpl$postEditBlocking$slambda(this$0, $request, resultContinuation) {
    this.x60_1 = this$0;
    this.y60_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BlogResourceImpl$postEditBlocking$slambda).o60 = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl$postEditBlocking$slambda).d9 = function (p1, $completion) {
    return this.o60((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BlogResourceImpl$postEditBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.x60_1.u4w(this.y60_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(BlogResourceImpl$postEditBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new BlogResourceImpl$postEditBlocking$slambda(this.x60_1, this.y60_1, completion);
    i.z60_1 = $this$toBlocking;
    return i;
  };
  function BlogResourceImpl$postEditBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new BlogResourceImpl$postEditBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.o60($this$toBlocking, $completion);
    }, 1);
  }
  function BlogResourceImpl$postReblogBlocking$slambda(this$0, $request, resultContinuation) {
    this.i61_1 = this$0;
    this.j61_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BlogResourceImpl$postReblogBlocking$slambda).o60 = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl$postReblogBlocking$slambda).d9 = function (p1, $completion) {
    return this.o60((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BlogResourceImpl$postReblogBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.i61_1.x4w(this.j61_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(BlogResourceImpl$postReblogBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new BlogResourceImpl$postReblogBlocking$slambda(this.i61_1, this.j61_1, completion);
    i.k61_1 = $this$toBlocking;
    return i;
  };
  function BlogResourceImpl$postReblogBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new BlogResourceImpl$postReblogBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.o60($this$toBlocking, $completion);
    }, 1);
  }
  function BlogResourceImpl$postDeleteBlocking$slambda(this$0, $request, resultContinuation) {
    this.t61_1 = this$0;
    this.u61_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BlogResourceImpl$postDeleteBlocking$slambda).o60 = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl$postDeleteBlocking$slambda).d9 = function (p1, $completion) {
    return this.o60((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BlogResourceImpl$postDeleteBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.t61_1.a4x(this.u61_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(BlogResourceImpl$postDeleteBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new BlogResourceImpl$postDeleteBlocking$slambda(this.t61_1, this.u61_1, completion);
    i.v61_1 = $this$toBlocking;
    return i;
  };
  function BlogResourceImpl$postDeleteBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new BlogResourceImpl$postDeleteBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.o60($this$toBlocking, $completion);
    }, 1);
  }
  function BlogResourceImpl$blogBannerBlocking$slambda(this$0, $request, resultContinuation) {
    this.e62_1 = this$0;
    this.f62_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BlogResourceImpl$blogBannerBlocking$slambda).h62 = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl$blogBannerBlocking$slambda).d9 = function (p1, $completion) {
    return this.h62((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BlogResourceImpl$blogBannerBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.e62_1.d4x(this.f62_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(BlogResourceImpl$blogBannerBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new BlogResourceImpl$blogBannerBlocking$slambda(this.e62_1, this.f62_1, completion);
    i.g62_1 = $this$toBlocking;
    return i;
  };
  function BlogResourceImpl$blogBannerBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new BlogResourceImpl$blogBannerBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.h62($this$toBlocking, $completion);
    }, 1);
  }
  function BlogResourceImpl$blogUpdateInfoBlocking$slambda(this$0, $request, resultContinuation) {
    this.q62_1 = this$0;
    this.r62_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BlogResourceImpl$blogUpdateInfoBlocking$slambda).o60 = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl$blogUpdateInfoBlocking$slambda).d9 = function (p1, $completion) {
    return this.o60((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BlogResourceImpl$blogUpdateInfoBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.q62_1.g4x(this.r62_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(BlogResourceImpl$blogUpdateInfoBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new BlogResourceImpl$blogUpdateInfoBlocking$slambda(this.q62_1, this.r62_1, completion);
    i.s62_1 = $this$toBlocking;
    return i;
  };
  function BlogResourceImpl$blogUpdateInfoBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new BlogResourceImpl$blogUpdateInfoBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.o60($this$toBlocking, $completion);
    }, 1);
  }
  function BlogResourceImpl$postEditTagsBlocking$slambda(this$0, $request, resultContinuation) {
    this.b63_1 = this$0;
    this.c63_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BlogResourceImpl$postEditTagsBlocking$slambda).o60 = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl$postEditTagsBlocking$slambda).d9 = function (p1, $completion) {
    return this.o60((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BlogResourceImpl$postEditTagsBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.b63_1.j4x(this.c63_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(BlogResourceImpl$postEditTagsBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new BlogResourceImpl$postEditTagsBlocking$slambda(this.b63_1, this.c63_1, completion);
    i.d63_1 = $this$toBlocking;
    return i;
  };
  function BlogResourceImpl$postEditTagsBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new BlogResourceImpl$postEditTagsBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.o60($this$toBlocking, $completion);
    }, 1);
  }
  function BlogResourceImpl$postUpdateBlocking$slambda(this$0, $request, resultContinuation) {
    this.m63_1 = this$0;
    this.n63_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BlogResourceImpl$postUpdateBlocking$slambda).o60 = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl$postUpdateBlocking$slambda).d9 = function (p1, $completion) {
    return this.o60((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BlogResourceImpl$postUpdateBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.m63_1.m4x(this.n63_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(BlogResourceImpl$postUpdateBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new BlogResourceImpl$postUpdateBlocking$slambda(this.m63_1, this.n63_1, completion);
    i.o63_1 = $this$toBlocking;
    return i;
  };
  function BlogResourceImpl$postUpdateBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new BlogResourceImpl$postUpdateBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.o60($this$toBlocking, $completion);
    }, 1);
  }
  function $blogInfoCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x63_1 = _this__u8e3s4;
    this.y63_1 = request;
  }
  protoOf($blogInfoCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 6;
            var tmp0 = this.x63_1;
            var tmp2 = this.x63_1.g5t(ensureNotNull(this.y63_1.blogName), '/info');
            this.b64_1 = tmp0;
            this.d64_1 = tmp2;
            var tmp_0 = this;
            tmp_0.c64_1 = emptyMap();
            this.e64_1 = this.b64_1;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.e64_1;
            this.i8_1 = 5;
            this.h8_1 = 2;
            suspendResult = (new HttpRequest()).u4t('https://api.tumblr.com/v2' + this.d64_1).v4t(MediaType_getInstance().r5s_1).z4t(this.c64_1).y4t('api_key', this.b64_1.q5s_1.w4u_1).c4u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.a64_1 = suspendResult;
            var containsArg = this.a64_1.r4u_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_1 = this;
              var tmp0_0 = Json_getInstance();
              var obj = this.a64_1.v4u();
              var this_0 = tmp0_0.r5u_1;
              var this_1 = this_0.br();
              var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogInfoResponse), arrayOf([]), false))]), false));
              tmp_1.z63_1 = new Response(this_0.c4i(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.a64_1.v4u());
              this.i8_1 = 6;
              this.h8_1 = 4;
              continue $sm;
            } else {
              this.h8_1 = 3;
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_0(this.a64_1.r4u_1, this.a64_1.v4u());
          case 4:
            return this.z63_1;
          case 5:
            this.i8_1 = 6;
            var tmp_2 = this.k8_1;
            if (tmp_2 instanceof Exception) {
              var e = this.k8_1;
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.k8_1;
            }

          case 6:
            throw this.k8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i8_1 === 6) {
          throw e_0;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e_0;
        }
      }
     while (true);
  };
  function $blogInfo$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n64_1 = _this__u8e3s4;
    this.o64_1 = request;
  }
  protoOf($blogInfo$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.n64_1.blogInfo === protoOf(BlogResourceImpl).blogInfo) {
              this.h8_1 = 2;
              suspendResult = this.n64_1.p4v(this.o64_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.n64_1.blogInfo(this.o64_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.p64_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.p64_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.p64_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $blogAvatarCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z64_1 = _this__u8e3s4;
    this.a65_1 = request;
  }
  protoOf($blogAvatarCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            var ext = this.a65_1.size == null ? '' : '/' + ensureNotNull(this.a65_1.size);
            var path = this.z64_1.g5t(ensureNotNull(this.a65_1.blogName), '/avatar' + ext);
            this.h8_1 = 1;
            suspendResult = (new HttpRequest()).u4t('https://api.tumblr.com/v2' + path).x4t(false).c4u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var r = suspendResult;
            var tmp0 = r.s4u_1.s2('location');
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
            return new Response(url.d1(0), url.d1(0));
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $blogAvatar$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j65_1 = _this__u8e3s4;
    this.k65_1 = request;
  }
  protoOf($blogAvatar$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.j65_1.blogAvatar === protoOf(BlogResourceImpl).blogAvatar) {
              this.h8_1 = 2;
              suspendResult = this.j65_1.s4v(this.k65_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.j65_1.blogAvatar(this.k65_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.l65_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.l65_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.l65_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $blogLikesCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u65_1 = _this__u8e3s4;
    this.v65_1 = request;
  }
  protoOf($blogLikesCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 6;
            var tmp0 = this.u65_1;
            var tmp2 = this.u65_1.g5t(ensureNotNull(this.v65_1.blogName), '/likes');
            var tmp4 = this.v65_1.z4y();
            this.y65_1 = tmp0;
            this.a66_1 = tmp2;
            this.z65_1 = tmp4;
            this.b66_1 = this.y65_1;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.b66_1;
            this.i8_1 = 5;
            this.h8_1 = 2;
            suspendResult = (new HttpRequest()).u4t('https://api.tumblr.com/v2' + this.a66_1).v4t(MediaType_getInstance().r5s_1).z4t(this.z65_1).y4t('api_key', this.y65_1.q5s_1.w4u_1).c4u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.x65_1 = suspendResult;
            var containsArg = this.x65_1.r4u_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0_0 = Json_getInstance();
              var obj = this.x65_1.v4u();
              var this_0 = tmp0_0.r5u_1;
              var this_1 = this_0.br();
              var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogLikesResponse), arrayOf([]), false))]), false));
              tmp_0.w65_1 = new Response(this_0.c4i(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.x65_1.v4u());
              this.i8_1 = 6;
              this.h8_1 = 4;
              continue $sm;
            } else {
              this.h8_1 = 3;
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_0(this.x65_1.r4u_1, this.x65_1.v4u());
          case 4:
            return this.w65_1;
          case 5:
            this.i8_1 = 6;
            var tmp_1 = this.k8_1;
            if (tmp_1 instanceof Exception) {
              var e = this.k8_1;
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.k8_1;
            }

          case 6:
            throw this.k8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i8_1 === 6) {
          throw e_0;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e_0;
        }
      }
     while (true);
  };
  function $blogLikes$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k66_1 = _this__u8e3s4;
    this.l66_1 = request;
  }
  protoOf($blogLikes$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.k66_1.blogLikes === protoOf(BlogResourceImpl).blogLikes) {
              this.h8_1 = 2;
              suspendResult = this.k66_1.v4v(this.l66_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.k66_1.blogLikes(this.l66_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.m66_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.m66_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.m66_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $blogFollowingCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v66_1 = _this__u8e3s4;
    this.w66_1 = request;
  }
  protoOf($blogFollowingCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 6;
            var tmp0 = this.v66_1;
            var tmp2 = this.v66_1.g5t(ensureNotNull(this.w66_1.blogName), '/following');
            var tmp4 = this.w66_1.z4y();
            this.a67_1 = tmp0;
            this.b67_1 = tmp2;
            this.z66_1 = tmp4;
            this.c67_1 = this.a67_1;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.c67_1;
            this.i8_1 = 5;
            this.h8_1 = 2;
            suspendResult = (new HttpRequest()).u4t('https://api.tumblr.com/v2' + this.b67_1).w4t('Authorization', this.a67_1.q5s_1.a4v()).v4t(MediaType_getInstance().r5s_1).z4t(this.z66_1).c4u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.y66_1 = suspendResult;
            var containsArg = this.y66_1.r4u_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0_0 = Json_getInstance();
              var obj = this.y66_1.v4u();
              var this_0 = tmp0_0.r5u_1;
              var this_1 = this_0.br();
              var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogFollowingResponse), arrayOf([]), false))]), false));
              tmp_0.x66_1 = new Response(this_0.c4i(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.y66_1.v4u());
              this.i8_1 = 6;
              this.h8_1 = 4;
              continue $sm;
            } else {
              this.h8_1 = 3;
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_0(this.y66_1.r4u_1, this.y66_1.v4u());
          case 4:
            return this.x66_1;
          case 5:
            this.i8_1 = 6;
            var tmp_1 = this.k8_1;
            if (tmp_1 instanceof Exception) {
              var e = this.k8_1;
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.k8_1;
            }

          case 6:
            throw this.k8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i8_1 === 6) {
          throw e_0;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e_0;
        }
      }
     while (true);
  };
  function $blogFollowing$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l67_1 = _this__u8e3s4;
    this.m67_1 = request;
  }
  protoOf($blogFollowing$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.l67_1.blogFollowing === protoOf(BlogResourceImpl).blogFollowing) {
              this.h8_1 = 2;
              suspendResult = this.l67_1.y4v(this.m67_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.l67_1.blogFollowing(this.m67_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.n67_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.n67_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.n67_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $blogFollowersCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w67_1 = _this__u8e3s4;
    this.x67_1 = request;
  }
  protoOf($blogFollowersCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 6;
            var tmp0 = this.w67_1;
            var tmp2 = this.w67_1.g5t(ensureNotNull(this.x67_1.blogName), '/followers');
            var tmp4 = this.x67_1.z4y();
            this.b68_1 = tmp0;
            this.c68_1 = tmp2;
            this.a68_1 = tmp4;
            this.d68_1 = this.b68_1;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.d68_1;
            this.i8_1 = 5;
            this.h8_1 = 2;
            suspendResult = (new HttpRequest()).u4t('https://api.tumblr.com/v2' + this.c68_1).w4t('Authorization', this.b68_1.q5s_1.a4v()).v4t(MediaType_getInstance().r5s_1).z4t(this.a68_1).c4u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.z67_1 = suspendResult;
            var containsArg = this.z67_1.r4u_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0_0 = Json_getInstance();
              var obj = this.z67_1.v4u();
              var this_0 = tmp0_0.r5u_1;
              var this_1 = this_0.br();
              var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogFollowersResponse), arrayOf([]), false))]), false));
              tmp_0.y67_1 = new Response(this_0.c4i(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.z67_1.v4u());
              this.i8_1 = 6;
              this.h8_1 = 4;
              continue $sm;
            } else {
              this.h8_1 = 3;
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_0(this.z67_1.r4u_1, this.z67_1.v4u());
          case 4:
            return this.y67_1;
          case 5:
            this.i8_1 = 6;
            var tmp_1 = this.k8_1;
            if (tmp_1 instanceof Exception) {
              var e = this.k8_1;
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.k8_1;
            }

          case 6:
            throw this.k8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i8_1 === 6) {
          throw e_0;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e_0;
        }
      }
     while (true);
  };
  function $blogFollowers$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m68_1 = _this__u8e3s4;
    this.n68_1 = request;
  }
  protoOf($blogFollowers$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.m68_1.blogFollowers === protoOf(BlogResourceImpl).blogFollowers) {
              this.h8_1 = 2;
              suspendResult = this.m68_1.b4w(this.n68_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.m68_1.blogFollowers(this.n68_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.o68_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.o68_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.o68_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $blogPostsCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x68_1 = _this__u8e3s4;
    this.y68_1 = request;
  }
  protoOf($blogPostsCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 6;
            var ext = this.y68_1.type == null ? '' : '/' + ensureNotNull(this.y68_1.type);
            var tmp0 = this.x68_1;
            var tmp2 = this.x68_1.g5t(ensureNotNull(this.y68_1.blogName), '/posts' + ext);
            var tmp4 = this.y68_1.z4y();
            this.c69_1 = tmp0;
            this.d69_1 = tmp2;
            this.b69_1 = tmp4;
            this.e69_1 = this.c69_1;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.e69_1;
            this.i8_1 = 5;
            this.h8_1 = 2;
            suspendResult = (new HttpRequest()).u4t('https://api.tumblr.com/v2' + this.d69_1).w4t('Authorization', this.c69_1.q5s_1.a4v()).v4t(MediaType_getInstance().r5s_1).z4t(this.b69_1).c4u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.a69_1 = suspendResult;
            var containsArg = this.a69_1.r4u_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0_0 = Json_getInstance();
              var obj = this.a69_1.v4u();
              var this_0 = tmp0_0.r5u_1;
              var this_1 = this_0.br();
              var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
              tmp_0.z68_1 = new Response(this_0.c4i(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.a69_1.v4u());
              this.i8_1 = 6;
              this.h8_1 = 4;
              continue $sm;
            } else {
              this.h8_1 = 3;
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_0(this.a69_1.r4u_1, this.a69_1.v4u());
          case 4:
            return this.z68_1;
          case 5:
            this.i8_1 = 6;
            var tmp_1 = this.k8_1;
            if (tmp_1 instanceof Exception) {
              var e = this.k8_1;
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.k8_1;
            }

          case 6:
            throw this.k8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i8_1 === 6) {
          throw e_0;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e_0;
        }
      }
     while (true);
  };
  function $blogPosts$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n69_1 = _this__u8e3s4;
    this.o69_1 = request;
  }
  protoOf($blogPosts$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.n69_1.blogPosts === protoOf(BlogResourceImpl).blogPosts) {
              this.h8_1 = 2;
              suspendResult = this.n69_1.e4w(this.o69_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.n69_1.blogPosts(this.o69_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.p69_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.p69_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.p69_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $blogQueuedPostsCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y69_1 = _this__u8e3s4;
    this.z69_1 = request;
  }
  protoOf($blogQueuedPostsCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 6;
            var tmp0 = this.y69_1;
            var tmp2 = this.y69_1.g5t(ensureNotNull(this.z69_1.blogName), '/posts/queue');
            var tmp4 = this.z69_1.z4y();
            this.d6a_1 = tmp0;
            this.e6a_1 = tmp2;
            this.c6a_1 = tmp4;
            this.f6a_1 = this.d6a_1;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.f6a_1;
            this.i8_1 = 5;
            this.h8_1 = 2;
            suspendResult = (new HttpRequest()).u4t('https://api.tumblr.com/v2' + this.e6a_1).w4t('Authorization', this.d6a_1.q5s_1.a4v()).v4t(MediaType_getInstance().r5s_1).z4t(this.c6a_1).c4u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.b6a_1 = suspendResult;
            var containsArg = this.b6a_1.r4u_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0_0 = Json_getInstance();
              var obj = this.b6a_1.v4u();
              var this_0 = tmp0_0.r5u_1;
              var this_1 = this_0.br();
              var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
              tmp_0.a6a_1 = new Response(this_0.c4i(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.b6a_1.v4u());
              this.i8_1 = 6;
              this.h8_1 = 4;
              continue $sm;
            } else {
              this.h8_1 = 3;
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_0(this.b6a_1.r4u_1, this.b6a_1.v4u());
          case 4:
            return this.a6a_1;
          case 5:
            this.i8_1 = 6;
            var tmp_1 = this.k8_1;
            if (tmp_1 instanceof Exception) {
              var e = this.k8_1;
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.k8_1;
            }

          case 6:
            throw this.k8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i8_1 === 6) {
          throw e_0;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e_0;
        }
      }
     while (true);
  };
  function $blogQueuedPosts$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o6a_1 = _this__u8e3s4;
    this.p6a_1 = request;
  }
  protoOf($blogQueuedPosts$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.o6a_1.blogQueuedPosts === protoOf(BlogResourceImpl).blogQueuedPosts) {
              this.h8_1 = 2;
              suspendResult = this.o6a_1.h4w(this.p6a_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.o6a_1.blogQueuedPosts(this.p6a_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.q6a_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.q6a_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.q6a_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $blogDraftPostsCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z6a_1 = _this__u8e3s4;
    this.a6b_1 = request;
  }
  protoOf($blogDraftPostsCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 6;
            var tmp0 = this.z6a_1;
            var tmp2 = this.z6a_1.g5t(ensureNotNull(this.a6b_1.blogName), '/posts/draft');
            var tmp4 = this.a6b_1.z4y();
            this.e6b_1 = tmp0;
            this.f6b_1 = tmp2;
            this.d6b_1 = tmp4;
            this.g6b_1 = this.e6b_1;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.g6b_1;
            this.i8_1 = 5;
            this.h8_1 = 2;
            suspendResult = (new HttpRequest()).u4t('https://api.tumblr.com/v2' + this.f6b_1).w4t('Authorization', this.e6b_1.q5s_1.a4v()).v4t(MediaType_getInstance().r5s_1).z4t(this.d6b_1).c4u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.c6b_1 = suspendResult;
            var containsArg = this.c6b_1.r4u_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0_0 = Json_getInstance();
              var obj = this.c6b_1.v4u();
              var this_0 = tmp0_0.r5u_1;
              var this_1 = this_0.br();
              var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
              tmp_0.b6b_1 = new Response(this_0.c4i(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.c6b_1.v4u());
              this.i8_1 = 6;
              this.h8_1 = 4;
              continue $sm;
            } else {
              this.h8_1 = 3;
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_0(this.c6b_1.r4u_1, this.c6b_1.v4u());
          case 4:
            return this.b6b_1;
          case 5:
            this.i8_1 = 6;
            var tmp_1 = this.k8_1;
            if (tmp_1 instanceof Exception) {
              var e = this.k8_1;
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.k8_1;
            }

          case 6:
            throw this.k8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i8_1 === 6) {
          throw e_0;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e_0;
        }
      }
     while (true);
  };
  function $blogDraftPosts$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p6b_1 = _this__u8e3s4;
    this.q6b_1 = request;
  }
  protoOf($blogDraftPosts$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.p6b_1.blogDraftPosts === protoOf(BlogResourceImpl).blogDraftPosts) {
              this.h8_1 = 2;
              suspendResult = this.p6b_1.k4w(this.q6b_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.p6b_1.blogDraftPosts(this.q6b_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.r6b_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.r6b_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.r6b_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $blogSubmissionsCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a6c_1 = _this__u8e3s4;
    this.b6c_1 = request;
  }
  protoOf($blogSubmissionsCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 6;
            var tmp0 = this.a6c_1;
            var tmp2 = this.a6c_1.g5t(ensureNotNull(this.b6c_1.blogName), '/posts/submission');
            var tmp4 = this.b6c_1.z4y();
            this.f6c_1 = tmp0;
            this.g6c_1 = tmp2;
            this.e6c_1 = tmp4;
            this.h6c_1 = this.f6c_1;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.h6c_1;
            this.i8_1 = 5;
            this.h8_1 = 2;
            suspendResult = (new HttpRequest()).u4t('https://api.tumblr.com/v2' + this.g6c_1).w4t('Authorization', this.f6c_1.q5s_1.a4v()).v4t(MediaType_getInstance().r5s_1).z4t(this.e6c_1).c4u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.d6c_1 = suspendResult;
            var containsArg = this.d6c_1.r4u_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0_0 = Json_getInstance();
              var obj = this.d6c_1.v4u();
              var this_0 = tmp0_0.r5u_1;
              var this_1 = this_0.br();
              var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogPostsResponse), arrayOf([]), false))]), false));
              tmp_0.c6c_1 = new Response(this_0.c4i(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.d6c_1.v4u());
              this.i8_1 = 6;
              this.h8_1 = 4;
              continue $sm;
            } else {
              this.h8_1 = 3;
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_0(this.d6c_1.r4u_1, this.d6c_1.v4u());
          case 4:
            return this.c6c_1;
          case 5:
            this.i8_1 = 6;
            var tmp_1 = this.k8_1;
            if (tmp_1 instanceof Exception) {
              var e = this.k8_1;
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.k8_1;
            }

          case 6:
            throw this.k8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i8_1 === 6) {
          throw e_0;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e_0;
        }
      }
     while (true);
  };
  function $blogSubmissions$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q6c_1 = _this__u8e3s4;
    this.r6c_1 = request;
  }
  protoOf($blogSubmissions$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.q6c_1.blogSubmissions === protoOf(BlogResourceImpl).blogSubmissions) {
              this.h8_1 = 2;
              suspendResult = this.q6c_1.n4w(this.r6c_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.q6c_1.blogSubmissions(this.r6c_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.s6c_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.s6c_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.s6c_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $postCreate$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b6d_1 = _this__u8e3s4;
    this.c6d_1 = request;
  }
  protoOf($postCreate$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.b6d_1.postCreate === protoOf(BlogResourceImpl).postCreate) {
              this.h8_1 = 2;
              suspendResult = this.b6d_1.q4w(this.c6d_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.b6d_1.postCreate(this.c6d_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.d6d_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.d6d_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.d6d_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $postEdit$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m6d_1 = _this__u8e3s4;
    this.n6d_1 = request;
  }
  protoOf($postEdit$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.m6d_1.postEdit === protoOf(BlogResourceImpl).postEdit) {
              this.h8_1 = 2;
              suspendResult = this.m6d_1.t4w(this.n6d_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.m6d_1.postEdit(this.n6d_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.o6d_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.o6d_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.o6d_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $postReblog$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x6d_1 = _this__u8e3s4;
    this.y6d_1 = request;
  }
  protoOf($postReblog$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.x6d_1.postReblog === protoOf(BlogResourceImpl).postReblog) {
              this.h8_1 = 2;
              suspendResult = this.x6d_1.w4w(this.y6d_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.x6d_1.postReblog(this.y6d_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.z6d_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.z6d_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.z6d_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $postDelete$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i6e_1 = _this__u8e3s4;
    this.j6e_1 = request;
  }
  protoOf($postDelete$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.i6e_1.postDelete === protoOf(BlogResourceImpl).postDelete) {
              this.h8_1 = 2;
              suspendResult = this.i6e_1.z4w(this.j6e_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.i6e_1.postDelete(this.j6e_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.k6e_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.k6e_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.k6e_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $blogBannerCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t6e_1 = _this__u8e3s4;
    this.u6e_1 = request;
  }
  protoOf($blogBannerCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 6;
            var ext = this.u6e_1.size == null ? '' : '/' + ensureNotNull(this.u6e_1.size);
            var tmp0 = this.t6e_1;
            var tmp2 = this.t6e_1.g5t(ensureNotNull(this.u6e_1.blogName), '/banner' + ext);
            this.x6e_1 = tmp0;
            this.z6e_1 = tmp2;
            var tmp_0 = this;
            tmp_0.y6e_1 = emptyMap();
            this.a6f_1 = this.x6e_1;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.a6f_1;
            this.i8_1 = 5;
            this.h8_1 = 2;
            suspendResult = (new HttpRequest()).u4t('https://api.tumblr.com/v2' + this.z6e_1).v4t(MediaType_getInstance().r5s_1).z4t(this.y6e_1).y4t('api_key', this.x6e_1.q5s_1.w4u_1).c4u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w6e_1 = suspendResult;
            var containsArg = this.w6e_1.r4u_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_1 = this;
              var tmp0_0 = Json_getInstance();
              var obj = this.w6e_1.v4u();
              var this_0 = tmp0_0.r5u_1;
              var this_1 = this_0.br();
              var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BlogBannerResponse), arrayOf([]), false))]), false));
              tmp_1.v6e_1 = new Response(this_0.c4i(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.w6e_1.v4u());
              this.i8_1 = 6;
              this.h8_1 = 4;
              continue $sm;
            } else {
              this.h8_1 = 3;
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_0(this.w6e_1.r4u_1, this.w6e_1.v4u());
          case 4:
            return this.v6e_1;
          case 5:
            this.i8_1 = 6;
            var tmp_2 = this.k8_1;
            if (tmp_2 instanceof Exception) {
              var e = this.k8_1;
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.k8_1;
            }

          case 6:
            throw this.k8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i8_1 === 6) {
          throw e_0;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e_0;
        }
      }
     while (true);
  };
  function $blogBanner$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j6f_1 = _this__u8e3s4;
    this.k6f_1 = request;
  }
  protoOf($blogBanner$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.j6f_1.blogBanner === protoOf(BlogResourceImpl).blogBanner) {
              this.h8_1 = 2;
              suspendResult = this.j6f_1.c4x(this.k6f_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.j6f_1.blogBanner(this.k6f_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.l6f_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.l6f_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.l6f_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $blogUpdateInfo$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u6f_1 = _this__u8e3s4;
    this.v6f_1 = request;
  }
  protoOf($blogUpdateInfo$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.u6f_1.blogUpdateInfo === protoOf(BlogResourceImpl).blogUpdateInfo) {
              this.h8_1 = 2;
              suspendResult = this.u6f_1.f4x(this.v6f_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.u6f_1.blogUpdateInfo(this.v6f_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.w6f_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.w6f_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.w6f_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $postEditTags$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f6g_1 = _this__u8e3s4;
    this.g6g_1 = request;
  }
  protoOf($postEditTags$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.f6g_1.postEditTags === protoOf(BlogResourceImpl).postEditTags) {
              this.h8_1 = 2;
              suspendResult = this.f6g_1.i4x(this.g6g_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.f6g_1.postEditTags(this.g6g_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.h6g_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.h6g_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.h6g_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $postUpdate$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q6g_1 = _this__u8e3s4;
    this.r6g_1 = request;
  }
  protoOf($postUpdate$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.q6g_1.postUpdate === protoOf(BlogResourceImpl).postUpdate) {
              this.h8_1 = 2;
              suspendResult = this.q6g_1.l4x(this.r6g_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.q6g_1.postUpdate(this.r6g_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.s6g_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.s6g_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.s6g_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function BlogResourceImpl(auth) {
    AbstractResourceImpl.call(this, auth);
  }
  protoOf(BlogResourceImpl).p4v = function (request, $completion) {
    var tmp = new $blogInfoCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl).blogInfo = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.p4v(request, $completion);
    });
  };
  protoOf(BlogResourceImpl).q4v = function (request, $completion) {
    var tmp = new $blogInfo$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl).r4v = function (request) {
    return toBlocking(BlogResourceImpl$blogInfoBlocking$slambda_0(this, request, null));
  };
  protoOf(BlogResourceImpl).s4v = function (request, $completion) {
    var tmp = new $blogAvatarCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl).blogAvatar = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.s4v(request, $completion);
    });
  };
  protoOf(BlogResourceImpl).t4v = function (request, $completion) {
    var tmp = new $blogAvatar$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl).u4v = function (request) {
    return toBlocking(BlogResourceImpl$blogAvatarBlocking$slambda_0(this, request, null));
  };
  protoOf(BlogResourceImpl).v4v = function (request, $completion) {
    var tmp = new $blogLikesCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl).blogLikes = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.v4v(request, $completion);
    });
  };
  protoOf(BlogResourceImpl).w4v = function (request, $completion) {
    var tmp = new $blogLikes$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl).x4v = function (request) {
    return toBlocking(BlogResourceImpl$blogLikesBlocking$slambda_0(this, request, null));
  };
  protoOf(BlogResourceImpl).y4v = function (request, $completion) {
    var tmp = new $blogFollowingCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl).blogFollowing = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.y4v(request, $completion);
    });
  };
  protoOf(BlogResourceImpl).z4v = function (request, $completion) {
    var tmp = new $blogFollowing$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl).a4w = function (request) {
    return toBlocking(BlogResourceImpl$blogFollowingBlocking$slambda_0(this, request, null));
  };
  protoOf(BlogResourceImpl).b4w = function (request, $completion) {
    var tmp = new $blogFollowersCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl).blogFollowers = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.b4w(request, $completion);
    });
  };
  protoOf(BlogResourceImpl).c4w = function (request, $completion) {
    var tmp = new $blogFollowers$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl).d4w = function (request) {
    return toBlocking(BlogResourceImpl$blogFollowersBlocking$slambda_0(this, request, null));
  };
  protoOf(BlogResourceImpl).e4w = function (request, $completion) {
    var tmp = new $blogPostsCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl).blogPosts = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.e4w(request, $completion);
    });
  };
  protoOf(BlogResourceImpl).f4w = function (request, $completion) {
    var tmp = new $blogPosts$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl).g4w = function (request) {
    return toBlocking(BlogResourceImpl$blogPostsBlocking$slambda_0(this, request, null));
  };
  protoOf(BlogResourceImpl).h4w = function (request, $completion) {
    var tmp = new $blogQueuedPostsCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl).blogQueuedPosts = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.h4w(request, $completion);
    });
  };
  protoOf(BlogResourceImpl).i4w = function (request, $completion) {
    var tmp = new $blogQueuedPosts$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl).j4w = function (request) {
    return toBlocking(BlogResourceImpl$blogQueuedPostsBlocking$slambda_0(this, request, null));
  };
  protoOf(BlogResourceImpl).k4w = function (request, $completion) {
    var tmp = new $blogDraftPostsCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl).blogDraftPosts = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.k4w(request, $completion);
    });
  };
  protoOf(BlogResourceImpl).l4w = function (request, $completion) {
    var tmp = new $blogDraftPosts$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl).m4w = function (request) {
    return toBlocking(BlogResourceImpl$blogDraftPostsBlocking$slambda_0(this, request, null));
  };
  protoOf(BlogResourceImpl).n4w = function (request, $completion) {
    var tmp = new $blogSubmissionsCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl).blogSubmissions = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.n4w(request, $completion);
    });
  };
  protoOf(BlogResourceImpl).o4w = function (request, $completion) {
    var tmp = new $blogSubmissions$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl).p4w = function (request) {
    return toBlocking(BlogResourceImpl$blogSubmissionsBlocking$slambda_0(this, request, null));
  };
  protoOf(BlogResourceImpl).q4w = function (request, $completion) {
    var tmp = this.g5t(ensureNotNull(request.blogName), '/post');
    var tmp_0;
    if (request instanceof BlogTextPostRequest) {
      tmp_0 = request.z4y();
    } else {
      if (request instanceof BlogPhotoPostRequest) {
        tmp_0 = request.z4y();
      } else {
        if (request instanceof BlogQuotePostRequest) {
          tmp_0 = request.z4y();
        } else {
          if (request instanceof BlogLinkPostRequest) {
            tmp_0 = request.z4y();
          } else {
            if (request instanceof BlogChatPostRequest) {
              tmp_0 = request.z4y();
            } else {
              if (request instanceof BlogAudioPostRequest) {
                tmp_0 = request.z4y();
              } else {
                if (request instanceof BlogVideoPostRequest) {
                  tmp_0 = request.z4y();
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
      tmp_2 = request.k52();
    } else {
      // Inline function 'kotlin.collections.mapOf' call
      tmp_2 = emptyMap();
    }
    return this.d5t(tmp, tmp_1, tmp_2, $completion);
  };
  protoOf(BlogResourceImpl).postCreate = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.q4w(request, $completion);
    });
  };
  protoOf(BlogResourceImpl).r4w = function (request, $completion) {
    var tmp = new $postCreate$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl).s4w = function (request) {
    return toBlocking(BlogResourceImpl$postCreateBlocking$slambda_0(this, request, null));
  };
  protoOf(BlogResourceImpl).t4w = function (request, $completion) {
    var tmp = this.g5t(ensureNotNull(request.blogName), '/post/edit');
    var tmp_0;
    if (request instanceof BlogTextPostRequest) {
      tmp_0 = request.z4y();
    } else {
      if (request instanceof BlogPhotoPostRequest) {
        tmp_0 = request.z4y();
      } else {
        if (request instanceof BlogQuotePostRequest) {
          tmp_0 = request.z4y();
        } else {
          if (request instanceof BlogLinkPostRequest) {
            tmp_0 = request.z4y();
          } else {
            if (request instanceof BlogChatPostRequest) {
              tmp_0 = request.z4y();
            } else {
              if (request instanceof BlogAudioPostRequest) {
                tmp_0 = request.z4y();
              } else {
                if (request instanceof BlogVideoPostRequest) {
                  tmp_0 = request.z4y();
                } else {
                  throw IllegalArgumentException_init_$Create$('Unknown post type.');
                }
              }
            }
          }
        }
      }
    }
    return this.e5t(tmp, tmp_0, VOID, $completion);
  };
  protoOf(BlogResourceImpl).postEdit = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.t4w(request, $completion);
    });
  };
  protoOf(BlogResourceImpl).u4w = function (request, $completion) {
    var tmp = new $postEdit$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl).v4w = function (request) {
    return toBlocking(BlogResourceImpl$postEditBlocking$slambda_0(this, request, null));
  };
  protoOf(BlogResourceImpl).w4w = function (request, $completion) {
    return this.e5t(this.g5t(ensureNotNull(request.blogName), '/post/reblog'), request.z4y(), VOID, $completion);
  };
  protoOf(BlogResourceImpl).postReblog = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.w4w(request, $completion);
    });
  };
  protoOf(BlogResourceImpl).x4w = function (request, $completion) {
    var tmp = new $postReblog$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl).y4w = function (request) {
    return toBlocking(BlogResourceImpl$postReblogBlocking$slambda_0(this, request, null));
  };
  protoOf(BlogResourceImpl).z4w = function (request, $completion) {
    return this.e5t(this.g5t(ensureNotNull(request.blogName), '/post/delete'), request.z4y(), VOID, $completion);
  };
  protoOf(BlogResourceImpl).postDelete = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.z4w(request, $completion);
    });
  };
  protoOf(BlogResourceImpl).a4x = function (request, $completion) {
    var tmp = new $postDelete$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl).b4x = function (request) {
    return toBlocking(BlogResourceImpl$postDeleteBlocking$slambda_0(this, request, null));
  };
  protoOf(BlogResourceImpl).c4x = function (request, $completion) {
    var tmp = new $blogBannerCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl).blogBanner = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.c4x(request, $completion);
    });
  };
  protoOf(BlogResourceImpl).d4x = function (request, $completion) {
    var tmp = new $blogBanner$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl).e4x = function (request) {
    return toBlocking(BlogResourceImpl$blogBannerBlocking$slambda_0(this, request, null));
  };
  protoOf(BlogResourceImpl).f4x = function (request, $completion) {
    return this.f5t(this.g5t(ensureNotNull(request.blogName), '/info'), request.z4y(), $completion);
  };
  protoOf(BlogResourceImpl).blogUpdateInfo = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.f4x(request, $completion);
    });
  };
  protoOf(BlogResourceImpl).g4x = function (request, $completion) {
    var tmp = new $blogUpdateInfo$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl).h4x = function (request) {
    return toBlocking(BlogResourceImpl$blogUpdateInfoBlocking$slambda_0(this, request, null));
  };
  protoOf(BlogResourceImpl).i4x = function (request, $completion) {
    return this.e5t(this.g5t(ensureNotNull(request.blogName), '/post/edit/tags'), request.z4y(), VOID, $completion);
  };
  protoOf(BlogResourceImpl).postEditTags = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.i4x(request, $completion);
    });
  };
  protoOf(BlogResourceImpl).j4x = function (request, $completion) {
    var tmp = new $postEditTags$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl).k4x = function (request) {
    return toBlocking(BlogResourceImpl$postEditTagsBlocking$slambda_0(this, request, null));
  };
  protoOf(BlogResourceImpl).l4x = function (request, $completion) {
    return this.d5t(this.g5t(ensureNotNull(request.blogName), '/post/edit'), request.z4y(), request.toFileMap(), $completion);
  };
  protoOf(BlogResourceImpl).postUpdate = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.l4x(request, $completion);
    });
  };
  protoOf(BlogResourceImpl).m4x = function (request, $completion) {
    var tmp = new $postUpdate$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BlogResourceImpl).n4x = function (request) {
    return toBlocking(BlogResourceImpl$postUpdateBlocking$slambda_0(this, request, null));
  };
  function TaggedResourceImpl$taggedBlocking$slambda(this$0, $request, resultContinuation) {
    this.b6h_1 = this$0;
    this.c6h_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TaggedResourceImpl$taggedBlocking$slambda).e6h = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(TaggedResourceImpl$taggedBlocking$slambda).d9 = function (p1, $completion) {
    return this.e6h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(TaggedResourceImpl$taggedBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.b6h_1.p4x(this.c6h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(TaggedResourceImpl$taggedBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new TaggedResourceImpl$taggedBlocking$slambda(this.b6h_1, this.c6h_1, completion);
    i.d6h_1 = $this$toBlocking;
    return i;
  };
  function TaggedResourceImpl$taggedBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new TaggedResourceImpl$taggedBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.e6h($this$toBlocking, $completion);
    }, 1);
  }
  function $taggedCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n6h_1 = _this__u8e3s4;
    this.o6h_1 = request;
  }
  protoOf($taggedCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 6;
            var tmp0 = this.n6h_1;
            var tmp4 = this.o6h_1.z4y();
            this.r6h_1 = tmp0;
            this.t6h_1 = '/tagged';
            this.s6h_1 = tmp4;
            this.u6h_1 = this.r6h_1;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.u6h_1;
            this.i8_1 = 5;
            this.h8_1 = 2;
            suspendResult = (new HttpRequest()).u4t('https://api.tumblr.com/v2' + this.t6h_1).v4t(MediaType_getInstance().r5s_1).z4t(this.s6h_1).y4t('api_key', this.r6h_1.q5s_1.w4u_1).c4u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.q6h_1 = suspendResult;
            var containsArg = this.q6h_1.r4u_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0_0 = Json_getInstance();
              var obj = this.q6h_1.v4u();
              var this_0 = tmp0_0.r5u_1;
              var this_1 = this_0.br();
              var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nb(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Post), arrayOf([]), false))]), false))]), false));
              tmp_0.p6h_1 = new Response(this_0.c4i(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.q6h_1.v4u());
              this.i8_1 = 6;
              this.h8_1 = 4;
              continue $sm;
            } else {
              this.h8_1 = 3;
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_0(this.q6h_1.r4u_1, this.q6h_1.v4u());
          case 4:
            return this.p6h_1;
          case 5:
            this.i8_1 = 6;
            var tmp_1 = this.k8_1;
            if (tmp_1 instanceof Exception) {
              var e = this.k8_1;
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.k8_1;
            }

          case 6:
            throw this.k8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i8_1 === 6) {
          throw e_0;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e_0;
        }
      }
     while (true);
  };
  function $tagged$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d6i_1 = _this__u8e3s4;
    this.e6i_1 = request;
  }
  protoOf($tagged$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.d6i_1.tagged === protoOf(TaggedResourceImpl).tagged) {
              this.h8_1 = 2;
              suspendResult = this.d6i_1.o4x(this.e6i_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.d6i_1.tagged(this.e6i_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.f6i_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.f6i_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.f6i_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function TaggedResourceImpl(auth) {
    AbstractResourceImpl.call(this, auth);
  }
  protoOf(TaggedResourceImpl).o4x = function (request, $completion) {
    var tmp = new $taggedCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(TaggedResourceImpl).tagged = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.o4x(request, $completion);
    });
  };
  protoOf(TaggedResourceImpl).p4x = function (request, $completion) {
    var tmp = new $tagged$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(TaggedResourceImpl).q4x = function (request) {
    return toBlocking(TaggedResourceImpl$taggedBlocking$slambda_0(this, request, null));
  };
  function UserResourceImpl$userBlocking$slambda(this$0, resultContinuation) {
    this.p6i_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserResourceImpl$userBlocking$slambda).r6i = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(UserResourceImpl$userBlocking$slambda).d9 = function (p1, $completion) {
    return this.r6i((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserResourceImpl$userBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.p6i_1.s4x(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(UserResourceImpl$userBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new UserResourceImpl$userBlocking$slambda(this.p6i_1, completion);
    i.q6i_1 = $this$toBlocking;
    return i;
  };
  function UserResourceImpl$userBlocking$slambda_0(this$0, resultContinuation) {
    var i = new UserResourceImpl$userBlocking$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.r6i($this$toBlocking, $completion);
    }, 1);
  }
  function UserResourceImpl$userDashboardBlocking$slambda(this$0, $request, resultContinuation) {
    this.a6j_1 = this$0;
    this.b6j_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserResourceImpl$userDashboardBlocking$slambda).d6j = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(UserResourceImpl$userDashboardBlocking$slambda).d9 = function (p1, $completion) {
    return this.d6j((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserResourceImpl$userDashboardBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.a6j_1.v4x(this.b6j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(UserResourceImpl$userDashboardBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new UserResourceImpl$userDashboardBlocking$slambda(this.a6j_1, this.b6j_1, completion);
    i.c6j_1 = $this$toBlocking;
    return i;
  };
  function UserResourceImpl$userDashboardBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new UserResourceImpl$userDashboardBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.d6j($this$toBlocking, $completion);
    }, 1);
  }
  function UserResourceImpl$userFollowingBlocking$slambda(this$0, $request, resultContinuation) {
    this.m6j_1 = this$0;
    this.n6j_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserResourceImpl$userFollowingBlocking$slambda).p6j = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(UserResourceImpl$userFollowingBlocking$slambda).d9 = function (p1, $completion) {
    return this.p6j((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserResourceImpl$userFollowingBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.m6j_1.y4x(this.n6j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(UserResourceImpl$userFollowingBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new UserResourceImpl$userFollowingBlocking$slambda(this.m6j_1, this.n6j_1, completion);
    i.o6j_1 = $this$toBlocking;
    return i;
  };
  function UserResourceImpl$userFollowingBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new UserResourceImpl$userFollowingBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.p6j($this$toBlocking, $completion);
    }, 1);
  }
  function UserResourceImpl$userLikesBlocking$slambda(this$0, $request, resultContinuation) {
    this.y6j_1 = this$0;
    this.z6j_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserResourceImpl$userLikesBlocking$slambda).b6k = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(UserResourceImpl$userLikesBlocking$slambda).d9 = function (p1, $completion) {
    return this.b6k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserResourceImpl$userLikesBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.y6j_1.b4y(this.z6j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(UserResourceImpl$userLikesBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new UserResourceImpl$userLikesBlocking$slambda(this.y6j_1, this.z6j_1, completion);
    i.a6k_1 = $this$toBlocking;
    return i;
  };
  function UserResourceImpl$userLikesBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new UserResourceImpl$userLikesBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.b6k($this$toBlocking, $completion);
    }, 1);
  }
  function UserResourceImpl$likeBlocking$slambda(this$0, $request, resultContinuation) {
    this.k6k_1 = this$0;
    this.l6k_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserResourceImpl$likeBlocking$slambda).o60 = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(UserResourceImpl$likeBlocking$slambda).d9 = function (p1, $completion) {
    return this.o60((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserResourceImpl$likeBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.k6k_1.e4y(this.l6k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(UserResourceImpl$likeBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new UserResourceImpl$likeBlocking$slambda(this.k6k_1, this.l6k_1, completion);
    i.m6k_1 = $this$toBlocking;
    return i;
  };
  function UserResourceImpl$likeBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new UserResourceImpl$likeBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.o60($this$toBlocking, $completion);
    }, 1);
  }
  function UserResourceImpl$unlikeBlocking$slambda(this$0, $request, resultContinuation) {
    this.v6k_1 = this$0;
    this.w6k_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserResourceImpl$unlikeBlocking$slambda).o60 = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(UserResourceImpl$unlikeBlocking$slambda).d9 = function (p1, $completion) {
    return this.o60((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserResourceImpl$unlikeBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.v6k_1.h4y(this.w6k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(UserResourceImpl$unlikeBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new UserResourceImpl$unlikeBlocking$slambda(this.v6k_1, this.w6k_1, completion);
    i.x6k_1 = $this$toBlocking;
    return i;
  };
  function UserResourceImpl$unlikeBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new UserResourceImpl$unlikeBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.o60($this$toBlocking, $completion);
    }, 1);
  }
  function UserResourceImpl$followBlocking$slambda(this$0, $request, resultContinuation) {
    this.g6l_1 = this$0;
    this.h6l_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserResourceImpl$followBlocking$slambda).o60 = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(UserResourceImpl$followBlocking$slambda).d9 = function (p1, $completion) {
    return this.o60((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserResourceImpl$followBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.g6l_1.k4y(this.h6l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(UserResourceImpl$followBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new UserResourceImpl$followBlocking$slambda(this.g6l_1, this.h6l_1, completion);
    i.i6l_1 = $this$toBlocking;
    return i;
  };
  function UserResourceImpl$followBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new UserResourceImpl$followBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.o60($this$toBlocking, $completion);
    }, 1);
  }
  function UserResourceImpl$unfollowBlocking$slambda(this$0, $request, resultContinuation) {
    this.r6l_1 = this$0;
    this.s6l_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UserResourceImpl$unfollowBlocking$slambda).o60 = function ($this$toBlocking, $completion) {
    var tmp = this.h24($this$toBlocking, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(UserResourceImpl$unfollowBlocking$slambda).d9 = function (p1, $completion) {
    return this.o60((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UserResourceImpl$unfollowBlocking$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.r6l_1.n4y(this.s6l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(UserResourceImpl$unfollowBlocking$slambda).h24 = function ($this$toBlocking, completion) {
    var i = new UserResourceImpl$unfollowBlocking$slambda(this.r6l_1, this.s6l_1, completion);
    i.t6l_1 = $this$toBlocking;
    return i;
  };
  function UserResourceImpl$unfollowBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new UserResourceImpl$unfollowBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.o60($this$toBlocking, $completion);
    }, 1);
  }
  function $userCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c6m_1 = _this__u8e3s4;
  }
  protoOf($userCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 6;
            var tmp0 = this.c6m_1;
            var tmp2 = '/user/info';
            this.g6m_1 = tmp0;
            this.h6m_1 = tmp2;
            var tmp_0 = this;
            tmp_0.f6m_1 = emptyMap();
            this.i6m_1 = this.g6m_1;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.i6m_1;
            this.i8_1 = 5;
            this.h8_1 = 2;
            suspendResult = (new HttpRequest()).u4t('https://api.tumblr.com/v2' + this.h6m_1).w4t('Authorization', this.g6m_1.q5s_1.a4v()).v4t(MediaType_getInstance().r5s_1).z4t(this.f6m_1).c4u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.e6m_1 = suspendResult;
            var containsArg = this.e6m_1.r4u_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_1 = this;
              var tmp0_0 = Json_getInstance();
              var obj = this.e6m_1.v4u();
              var this_0 = tmp0_0.r5u_1;
              var this_1 = this_0.br();
              var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserResponse), arrayOf([]), false))]), false));
              tmp_1.d6m_1 = new Response(this_0.c4i(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.e6m_1.v4u());
              this.i8_1 = 6;
              this.h8_1 = 4;
              continue $sm;
            } else {
              this.h8_1 = 3;
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_0(this.e6m_1.r4u_1, this.e6m_1.v4u());
          case 4:
            return this.d6m_1;
          case 5:
            this.i8_1 = 6;
            var tmp_2 = this.k8_1;
            if (tmp_2 instanceof Exception) {
              var e = this.k8_1;
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.k8_1;
            }

          case 6:
            throw this.k8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i8_1 === 6) {
          throw e_0;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e_0;
        }
      }
     while (true);
  };
  function $user$suspendBridgeCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r6m_1 = _this__u8e3s4;
  }
  protoOf($user$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.r6m_1.user === protoOf(UserResourceImpl).user) {
              this.h8_1 = 2;
              suspendResult = this.r6m_1.r4x(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.r6m_1.user(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.s6m_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.s6m_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.s6m_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $userDashboardCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c6n_1 = _this__u8e3s4;
    this.d6n_1 = request;
  }
  protoOf($userDashboardCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 6;
            var tmp0 = this.c6n_1;
            var tmp2 = '/user/dashboard';
            var tmp4 = this.d6n_1.z4y();
            this.h6n_1 = tmp0;
            this.i6n_1 = tmp2;
            this.g6n_1 = tmp4;
            this.j6n_1 = this.h6n_1;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.j6n_1;
            this.i8_1 = 5;
            this.h8_1 = 2;
            suspendResult = (new HttpRequest()).u4t('https://api.tumblr.com/v2' + this.i6n_1).w4t('Authorization', this.h6n_1.q5s_1.a4v()).v4t(MediaType_getInstance().r5s_1).z4t(this.g6n_1).c4u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.f6n_1 = suspendResult;
            var containsArg = this.f6n_1.r4u_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0_0 = Json_getInstance();
              var obj = this.f6n_1.v4u();
              var this_0 = tmp0_0.r5u_1;
              var this_1 = this_0.br();
              var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserDashboardResponse), arrayOf([]), false))]), false));
              tmp_0.e6n_1 = new Response(this_0.c4i(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.f6n_1.v4u());
              this.i8_1 = 6;
              this.h8_1 = 4;
              continue $sm;
            } else {
              this.h8_1 = 3;
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_0(this.f6n_1.r4u_1, this.f6n_1.v4u());
          case 4:
            return this.e6n_1;
          case 5:
            this.i8_1 = 6;
            var tmp_1 = this.k8_1;
            if (tmp_1 instanceof Exception) {
              var e = this.k8_1;
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.k8_1;
            }

          case 6:
            throw this.k8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i8_1 === 6) {
          throw e_0;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e_0;
        }
      }
     while (true);
  };
  function $userDashboard$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s6n_1 = _this__u8e3s4;
    this.t6n_1 = request;
  }
  protoOf($userDashboard$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.s6n_1.userDashboard === protoOf(UserResourceImpl).userDashboard) {
              this.h8_1 = 2;
              suspendResult = this.s6n_1.u4x(this.t6n_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.s6n_1.userDashboard(this.t6n_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.u6n_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.u6n_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.u6n_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $userFollowingCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d6o_1 = _this__u8e3s4;
    this.e6o_1 = request;
  }
  protoOf($userFollowingCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 6;
            var tmp0 = this.d6o_1;
            var tmp2 = '/user/following';
            var tmp4 = this.e6o_1.z4y();
            this.i6o_1 = tmp0;
            this.j6o_1 = tmp2;
            this.h6o_1 = tmp4;
            this.k6o_1 = this.i6o_1;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.k6o_1;
            this.i8_1 = 5;
            this.h8_1 = 2;
            suspendResult = (new HttpRequest()).u4t('https://api.tumblr.com/v2' + this.j6o_1).w4t('Authorization', this.i6o_1.q5s_1.a4v()).v4t(MediaType_getInstance().r5s_1).z4t(this.h6o_1).c4u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.g6o_1 = suspendResult;
            var containsArg = this.g6o_1.r4u_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0_0 = Json_getInstance();
              var obj = this.g6o_1.v4u();
              var this_0 = tmp0_0.r5u_1;
              var this_1 = this_0.br();
              var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserFollowingResponse), arrayOf([]), false))]), false));
              tmp_0.f6o_1 = new Response(this_0.c4i(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.g6o_1.v4u());
              this.i8_1 = 6;
              this.h8_1 = 4;
              continue $sm;
            } else {
              this.h8_1 = 3;
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_0(this.g6o_1.r4u_1, this.g6o_1.v4u());
          case 4:
            return this.f6o_1;
          case 5:
            this.i8_1 = 6;
            var tmp_1 = this.k8_1;
            if (tmp_1 instanceof Exception) {
              var e = this.k8_1;
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.k8_1;
            }

          case 6:
            throw this.k8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i8_1 === 6) {
          throw e_0;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e_0;
        }
      }
     while (true);
  };
  function $userFollowing$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t6o_1 = _this__u8e3s4;
    this.u6o_1 = request;
  }
  protoOf($userFollowing$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.t6o_1.userFollowing === protoOf(UserResourceImpl).userFollowing) {
              this.h8_1 = 2;
              suspendResult = this.t6o_1.x4x(this.u6o_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.t6o_1.userFollowing(this.u6o_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.v6o_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.v6o_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.v6o_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $userLikesCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e6p_1 = _this__u8e3s4;
    this.f6p_1 = request;
  }
  protoOf($userLikesCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 6;
            var tmp0 = this.e6p_1;
            var tmp2 = '/user/likes';
            var tmp4 = this.f6p_1.z4y();
            this.j6p_1 = tmp0;
            this.k6p_1 = tmp2;
            this.i6p_1 = tmp4;
            this.l6p_1 = this.j6p_1;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.l6p_1;
            this.i8_1 = 5;
            this.h8_1 = 2;
            suspendResult = (new HttpRequest()).u4t('https://api.tumblr.com/v2' + this.k6p_1).w4t('Authorization', this.j6p_1.q5s_1.a4v()).v4t(MediaType_getInstance().r5s_1).z4t(this.i6p_1).c4u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.h6p_1 = suspendResult;
            var containsArg = this.h6p_1.r4u_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_0 = this;
              var tmp0_0 = Json_getInstance();
              var obj = this.h6p_1.v4u();
              var this_0 = tmp0_0.r5u_1;
              var this_1 = this_0.br();
              var this_2 = serializer(this_1, createKType(getKClass(Body), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UserLikesResponse), arrayOf([]), false))]), false));
              tmp_0.g6p_1 = new Response(this_0.c4i(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj), this.h6p_1.v4u());
              this.i8_1 = 6;
              this.h8_1 = 4;
              continue $sm;
            } else {
              this.h8_1 = 3;
              continue $sm;
            }

          case 3:
            throw TumblrException_init_$Create$_0(this.h6p_1.r4u_1, this.h6p_1.v4u());
          case 4:
            return this.g6p_1;
          case 5:
            this.i8_1 = 6;
            var tmp_1 = this.k8_1;
            if (tmp_1 instanceof Exception) {
              var e = this.k8_1;
              var tmp0_elvis_lhs = e instanceof TumblrException ? e : null;
              throw tmp0_elvis_lhs == null ? TumblrException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.k8_1;
            }

          case 6:
            throw this.k8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i8_1 === 6) {
          throw e_0;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e_0;
        }
      }
     while (true);
  };
  function $userLikes$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u6p_1 = _this__u8e3s4;
    this.v6p_1 = request;
  }
  protoOf($userLikes$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.u6p_1.userLikes === protoOf(UserResourceImpl).userLikes) {
              this.h8_1 = 2;
              suspendResult = this.u6p_1.a4y(this.v6p_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.u6p_1.userLikes(this.v6p_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.w6p_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.w6p_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.w6p_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $like$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f6q_1 = _this__u8e3s4;
    this.g6q_1 = request;
  }
  protoOf($like$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.f6q_1.like === protoOf(UserResourceImpl).like) {
              this.h8_1 = 2;
              suspendResult = this.f6q_1.d4y(this.g6q_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.f6q_1.like(this.g6q_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.h6q_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.h6q_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.h6q_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $unlike$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q6q_1 = _this__u8e3s4;
    this.r6q_1 = request;
  }
  protoOf($unlike$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.q6q_1.unlike === protoOf(UserResourceImpl).unlike) {
              this.h8_1 = 2;
              suspendResult = this.q6q_1.g4y(this.r6q_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.q6q_1.unlike(this.r6q_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.s6q_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.s6q_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.s6q_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $follow$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b6r_1 = _this__u8e3s4;
    this.c6r_1 = request;
  }
  protoOf($follow$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.b6r_1.follow === protoOf(UserResourceImpl).follow) {
              this.h8_1 = 2;
              suspendResult = this.b6r_1.j4y(this.c6r_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.b6r_1.follow(this.c6r_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.d6r_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.d6r_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.d6r_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $unfollow$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m6r_1 = _this__u8e3s4;
    this.n6r_1 = request;
  }
  protoOf($unfollow$suspendBridgeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            if (this.m6r_1.unfollow === protoOf(UserResourceImpl).unfollow) {
              this.h8_1 = 2;
              suspendResult = this.m6r_1.m4y(this.n6r_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = await_0(this.m6r_1.unfollow(this.n6r_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.o6r_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.o6r_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return this.o6r_1;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function UserResourceImpl(auth) {
    AbstractResourceImpl.call(this, auth);
  }
  protoOf(UserResourceImpl).r4x = function ($completion) {
    var tmp = new $userCOROUTINE$(this, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(UserResourceImpl).user = function () {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.r4x($completion);
    });
  };
  protoOf(UserResourceImpl).s4x = function ($completion) {
    var tmp = new $user$suspendBridgeCOROUTINE$(this, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(UserResourceImpl).t4x = function () {
    return toBlocking(UserResourceImpl$userBlocking$slambda_0(this, null));
  };
  protoOf(UserResourceImpl).u4x = function (request, $completion) {
    var tmp = new $userDashboardCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(UserResourceImpl).userDashboard = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.u4x(request, $completion);
    });
  };
  protoOf(UserResourceImpl).v4x = function (request, $completion) {
    var tmp = new $userDashboard$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(UserResourceImpl).w4x = function (request) {
    return toBlocking(UserResourceImpl$userDashboardBlocking$slambda_0(this, request, null));
  };
  protoOf(UserResourceImpl).x4x = function (request, $completion) {
    var tmp = new $userFollowingCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(UserResourceImpl).userFollowing = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.x4x(request, $completion);
    });
  };
  protoOf(UserResourceImpl).y4x = function (request, $completion) {
    var tmp = new $userFollowing$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(UserResourceImpl).z4x = function (request) {
    return toBlocking(UserResourceImpl$userFollowingBlocking$slambda_0(this, request, null));
  };
  protoOf(UserResourceImpl).a4y = function (request, $completion) {
    var tmp = new $userLikesCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(UserResourceImpl).userLikes = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.a4y(request, $completion);
    });
  };
  protoOf(UserResourceImpl).b4y = function (request, $completion) {
    var tmp = new $userLikes$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(UserResourceImpl).c4y = function (request) {
    return toBlocking(UserResourceImpl$userLikesBlocking$slambda_0(this, request, null));
  };
  protoOf(UserResourceImpl).d4y = function (request, $completion) {
    return this.e5t('/user/like', request.z4y(), VOID, $completion);
  };
  protoOf(UserResourceImpl).like = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.d4y(request, $completion);
    });
  };
  protoOf(UserResourceImpl).e4y = function (request, $completion) {
    var tmp = new $like$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(UserResourceImpl).f4y = function (request) {
    return toBlocking(UserResourceImpl$likeBlocking$slambda_0(this, request, null));
  };
  protoOf(UserResourceImpl).g4y = function (request, $completion) {
    return this.e5t('/user/unlike', request.z4y(), VOID, $completion);
  };
  protoOf(UserResourceImpl).unlike = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.g4y(request, $completion);
    });
  };
  protoOf(UserResourceImpl).h4y = function (request, $completion) {
    var tmp = new $unlike$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(UserResourceImpl).i4y = function (request) {
    return toBlocking(UserResourceImpl$unlikeBlocking$slambda_0(this, request, null));
  };
  protoOf(UserResourceImpl).j4y = function (request, $completion) {
    return this.e5t('/user/follow', request.z4y(), VOID, $completion);
  };
  protoOf(UserResourceImpl).follow = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.j4y(request, $completion);
    });
  };
  protoOf(UserResourceImpl).k4y = function (request, $completion) {
    var tmp = new $follow$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(UserResourceImpl).l4y = function (request) {
    return toBlocking(UserResourceImpl$followBlocking$slambda_0(this, request, null));
  };
  protoOf(UserResourceImpl).m4y = function (request, $completion) {
    return this.e5t('/user/unfollow', request.z4y(), VOID, $completion);
  };
  protoOf(UserResourceImpl).unfollow = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.m4y(request, $completion);
    });
  };
  protoOf(UserResourceImpl).n4y = function (request, $completion) {
    var tmp = new $unfollow$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(UserResourceImpl).o4y = function (request) {
    return toBlocking(UserResourceImpl$unfollowBlocking$slambda_0(this, request, null));
  };
  function toAny($this, $receiver) {
    if ($receiver instanceof JsonPrimitive) {
      var tmp;
      if ($receiver.l4k()) {
        tmp = $receiver.e3c();
      } else if (!(get_intOrNull($receiver) == null)) {
        tmp = get_int($receiver);
      } else if (!(get_longOrNull($receiver) == null)) {
        tmp = get_long($receiver);
      } else if (!(get_floatOrNull($receiver) == null)) {
        tmp = get_float($receiver);
      } else if (!(get_doubleOrNull($receiver) == null)) {
        tmp = get_double($receiver);
      } else if (!(get_booleanOrNull($receiver) == null)) {
        tmp = get_boolean($receiver);
      } else {
        throw IllegalStateException_init_$Create$("Can't deserialize unknown type: " + $receiver.toString());
      }
      return tmp;
    } else {
      if ($receiver instanceof JsonArray) {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(collectionSizeOrDefault($receiver, 10));
        var _iterator__ex2g4s = $receiver.t();
        while (_iterator__ex2g4s.u()) {
          var item = _iterator__ex2g4s.v();
          var tmp$ret$2 = toAny(AnySerializer_getInstance(), item);
          destination.c1(tmp$ret$2);
        }
        return destination;
      } else {
        if ($receiver instanceof JsonObject) {
          // Inline function 'kotlin.collections.map' call
          // Inline function 'kotlin.collections.mapTo' call
          var destination_0 = ArrayList_init_$Create$($receiver.e1());
          // Inline function 'kotlin.collections.iterator' call
          var _iterator__ex2g4s_0 = $receiver.l1().t();
          while (_iterator__ex2g4s_0.u()) {
            var item_0 = _iterator__ex2g4s_0.v();
            var tmp$ret$6 = to(item_0.m1(), toAny(AnySerializer_getInstance(), item_0.n1()));
            destination_0.c1(tmp$ret$6);
          }
          return toMap(destination_0);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  }
  function AnySerializer$additionalSerializer$lambda(_unused_var__etf5q3, _unused_var__etf5q3_0) {
    return false;
  }
  function AnySerializer() {
    AnySerializer_instance = this;
    var tmp = this;
    tmp.p6r_1 = AnySerializer$additionalSerializer$lambda;
    this.q6r_1 = buildClassSerialDescriptor('Any', []);
  }
  protoOf(AnySerializer).nn = function () {
    return this.q6r_1;
  };
  protoOf(AnySerializer).on = function (decoder) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!isInterface(decoder, JsonDecoder)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var element = decoder.g4k();
    return toAny(this, element);
  };
  var AnySerializer_instance;
  function AnySerializer_getInstance() {
    if (AnySerializer_instance == null)
      new AnySerializer();
    return AnySerializer_instance;
  }
  function Json$json$lambda($this$Json) {
    $this$Json.t4i_1 = false;
    $this$Json.s4i_1 = true;
    $this$Json.u4i_1 = true;
    var tmp = $this$Json;
    // Inline function 'kotlinx.serialization.modules.SerializersModule' call
    var builder = new SerializersModuleBuilder();
    builder.m13(PrimitiveClasses_getInstance().db(), AnySerializer_getInstance());
    builder.m13(getKClass(Post), PostSerializer_getInstance());
    tmp.j4j_1 = builder.lu();
    return Unit_instance;
  }
  function Json_0() {
    Json_instance = this;
    var tmp = this;
    tmp.r5u_1 = Json(VOID, Json$json$lambda);
  }
  var Json_instance;
  function Json_getInstance() {
    if (Json_instance == null)
      new Json_0();
    return Json_instance;
  }
  function MediaType() {
    MediaType_instance = this;
    this.r5s_1 = Application_getInstance().k2e_1.toString();
  }
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
  protoOf(PostSerializer).h4k = function (element) {
    var type = get_jsonObject(element).b28('type');
    var tmp;
    var tmp_0;
    if (type instanceof JsonPrimitive) {
      tmp_0 = type.l4k();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      switch (type.e3c()) {
        case 'text':
          tmp = Companion_getInstance_28().r4k();
          break;
        case 'photo':
          tmp = Companion_getInstance_25().r4k();
          break;
        case 'quote':
          tmp = Companion_getInstance_27().r4k();
          break;
        case 'link':
          tmp = Companion_getInstance_24().r4k();
          break;
        case 'video':
          tmp = Companion_getInstance_29().r4k();
          break;
        case 'audio':
          tmp = Companion_getInstance_22().r4k();
          break;
        case 'chat':
          tmp = Companion_getInstance_23().r4k();
          break;
        case 'answer':
          tmp = Companion_getInstance_21().r4k();
          break;
        case 'postcard':
          tmp = Companion_getInstance_26().r4k();
          break;
        default:
          tmp = Companion_instance_19.r4k();
          break;
      }
    } else {
      tmp = Companion_instance_19.r4k();
    }
    return tmp;
  };
  var PostSerializer_instance;
  function PostSerializer_getInstance() {
    if (PostSerializer_instance == null)
      new PostSerializer();
    return PostSerializer_instance;
  }
  function toBlocking(block) {
    throw UnsupportedOperationException_init_$Create$('Blocking operations are not supported in JavaScript. Please use suspend functions or Promise-based APIs instead.');
  }
  //region block: post-declaration
  protoOf(AuthAuthorizeUrlRequest).q4y = addParam;
  protoOf(AuthOAuth2TokenRefreshRequest).q4y = addParam;
  protoOf(AuthOAuth2TokenRequest).q4y = addParam;
  protoOf(BlogDraftsRequest).q4y = addParam;
  protoOf(BlogFollowersRequest).q4y = addParam;
  protoOf(BlogFollowingRequest).q4y = addParam;
  protoOf(BlogLikesRequest).q4y = addParam;
  protoOf(BlogPostsRequest).q4y = addParam;
  protoOf(BlogQueueRequest).q4y = addParam;
  protoOf(BlogSubmissionsRequest).q4y = addParam;
  protoOf(BlogUpdateInfoRequest).q4y = addParam;
  protoOf(BlogAudioPostRequest).q4y = addParam;
  protoOf(BlogChatPostRequest).q4y = addParam;
  protoOf(BlogDeleteRequest).q4y = addParam;
  protoOf(BlogLinkPostRequest).q4y = addParam;
  protoOf(BlogPhotoPostRequest).q4y = addParam;
  protoOf(BlogPostEditTagsRequest).q4y = addParam;
  protoOf(BlogPostUpdateRequest).q4y = addParam;
  protoOf(BlogQuotePostRequest).q4y = addParam;
  protoOf(BlogReblogRequest).q4y = addParam;
  protoOf(BlogTextPostRequest).q4y = addParam;
  protoOf(BlogVideoPostRequest).q4y = addParam;
  protoOf(TaggedRequest).q4y = addParam;
  protoOf(UserDashboardRequest).q4y = addParam;
  protoOf(UserFollowRequest).q4y = addParam;
  protoOf(UserFollowingRequest).q4y = addParam;
  protoOf(UserLikeRequest).q4y = addParam;
  protoOf(UserLikesRequest).q4y = addParam;
  protoOf(UserUnfollowRequest).q4y = addParam;
  protoOf(UserUnlikeRequest).q4y = addParam;
  protoOf($serializer_0).uw = typeParametersSerializers;
  protoOf($serializer_1).uw = typeParametersSerializers;
  protoOf($serializer_2).uw = typeParametersSerializers;
  protoOf($serializer_3).uw = typeParametersSerializers;
  protoOf($serializer_4).uw = typeParametersSerializers;
  protoOf($serializer_5).uw = typeParametersSerializers;
  protoOf($serializer_6).uw = typeParametersSerializers;
  protoOf($serializer_7).uw = typeParametersSerializers;
  protoOf($serializer_8).uw = typeParametersSerializers;
  protoOf($serializer_9).uw = typeParametersSerializers;
  protoOf($serializer_10).uw = typeParametersSerializers;
  protoOf($serializer_11).uw = typeParametersSerializers;
  protoOf($serializer_12).uw = typeParametersSerializers;
  defineProp(protoOf(PhotoType), 'name', protoOf(PhotoType).m);
  defineProp(protoOf(PhotoType), 'ordinal', protoOf(PhotoType).x2);
  defineProp(protoOf(PostType), 'name', protoOf(PostType).m);
  defineProp(protoOf(PostType), 'ordinal', protoOf(PostType).x2);
  protoOf($serializer_13).uw = typeParametersSerializers;
  protoOf($serializer_14).uw = typeParametersSerializers;
  protoOf($serializer_15).uw = typeParametersSerializers;
  protoOf($serializer_16).uw = typeParametersSerializers;
  protoOf($serializer_17).uw = typeParametersSerializers;
  protoOf($serializer_18).uw = typeParametersSerializers;
  defineProp(protoOf(Post), 'asLegacyTextPost', protoOf(Post).c59);
  defineProp(protoOf(Post), 'asLegacyPhotoPost', protoOf(Post).d59);
  defineProp(protoOf(Post), 'asLegacyQuotePost', protoOf(Post).e59);
  defineProp(protoOf(Post), 'asLegacyLinkPost', protoOf(Post).f59);
  defineProp(protoOf(Post), 'asLegacyVideoPost', protoOf(Post).g59);
  defineProp(protoOf(Post), 'asLegacyAudioPost', protoOf(Post).h59);
  defineProp(protoOf(Post), 'asLegacyChatPost', protoOf(Post).i59);
  defineProp(protoOf(Post), 'asLegacyAnswerPost', protoOf(Post).j59);
  defineProp(protoOf(Post), 'asLegacyPostcardPost', protoOf(Post).k59);
  defineProp(protoOf(Post), 'blogName', function () {
    return this.l4z();
  }, function (value) {
    this.k4z(value);
  });
  defineProp(protoOf(Post), 'idString', function () {
    return this.m59();
  }, function (value) {
    this.l59(value);
  });
  defineProp(protoOf(Post), 'genesisPostId', function () {
    return this.o59();
  }, function (value) {
    this.n59(value);
  });
  defineProp(protoOf(Post), 'postUrl', function () {
    return this.q59();
  }, function (value) {
    this.p59(value);
  });
  defineProp(protoOf(Post), 'parentPostUrl', function () {
    return this.s59();
  }, function (value) {
    this.r59(value);
  });
  defineProp(protoOf(Post), 'type', function () {
    return this.b50();
  }, function (value) {
    this.a50(value);
  });
  defineProp(protoOf(Post), 'timestamp', function () {
    return this.u56();
  }, function (value) {
    this.t59(value);
  });
  defineProp(protoOf(Post), 'date', function () {
    return this.o51();
  }, function (value) {
    this.n51(value);
  });
  defineProp(protoOf(Post), 'format', function () {
    return this.q51();
  }, function (value) {
    this.p51(value);
  });
  defineProp(protoOf(Post), 'reblogKey', function () {
    return this.r53();
  }, function (value) {
    this.q53(value);
  });
  defineProp(protoOf(Post), 'tags', function () {
    return this.k51();
  }, function (value) {
    this.l52(value);
  });
  defineProp(protoOf(Post), 'isBookmarklet', function () {
    return this.v59();
  }, function (value) {
    this.u59(value);
  });
  defineProp(protoOf(Post), 'isMobile', function () {
    return this.x59();
  }, function (value) {
    this.w59(value);
  });
  defineProp(protoOf(Post), 'sourceUrl', function () {
    return this.z59();
  }, function (value) {
    this.y59(value);
  });
  defineProp(protoOf(Post), 'sourceTitle', function () {
    return this.b5a();
  }, function (value) {
    this.a5a(value);
  });
  defineProp(protoOf(Post), 'isLiked', function () {
    return this.d5a();
  }, function (value) {
    this.c5a(value);
  });
  defineProp(protoOf(Post), 'state', function () {
    return this.w4y();
  }, function (value) {
    this.v4y(value);
  });
  defineProp(protoOf(Post), 'title', function () {
    return this.r50();
  }, function (value) {
    this.q50(value);
  });
  defineProp(protoOf(Post), 'body', function () {
    return this.n52();
  }, function (value) {
    this.m52(value);
  });
  defineProp(protoOf(Post), 'noteCount', function () {
    return this.f5a();
  }, function (value) {
    this.e5a(value);
  });
  defineProp(protoOf(Post), 'summary', function () {
    return this.h5a();
  }, function (value) {
    this.g5a(value);
  });
  defineProp(protoOf(Post), 'slug', function () {
    return this.s51();
  }, function (value) {
    this.r51(value);
  });
  defineProp(protoOf(Post), 'rebloggedFromId', function () {
    return this.j5a();
  }, function (value) {
    this.i5a(value);
  });
  defineProp(protoOf(Post), 'rebloggedFromUrl', function () {
    return this.l5a();
  }, function (value) {
    this.k5a(value);
  });
  defineProp(protoOf(Post), 'rebloggedFromName', function () {
    return this.n5a();
  }, function (value) {
    this.m5a(value);
  });
  defineProp(protoOf(Post), 'rebloggedFromTitle', function () {
    return this.p5a();
  }, function (value) {
    this.o5a(value);
  });
  defineProp(protoOf(Post), 'rebloggedFromUuid', function () {
    return this.r5a();
  }, function (value) {
    this.q5a(value);
  });
  defineProp(protoOf(Post), 'rebloggedFromCanMessage', function () {
    return this.t5a();
  }, function (value) {
    this.s5a(value);
  });
  defineProp(protoOf(Post), 'rebloggedFromFollowing', function () {
    return this.v5a();
  }, function (value) {
    this.u5a(value);
  });
  defineProp(protoOf(Post), 'rebloggedRootId', function () {
    return this.x5a();
  }, function (value) {
    this.w5a(value);
  });
  defineProp(protoOf(Post), 'rebloggedRootUrl', function () {
    return this.z5a();
  }, function (value) {
    this.y5a(value);
  });
  defineProp(protoOf(Post), 'rebloggedRootName', function () {
    return this.b5b();
  }, function (value) {
    this.a5b(value);
  });
  defineProp(protoOf(Post), 'rebloggedRootTitle', function () {
    return this.d5b();
  }, function (value) {
    this.c5b(value);
  });
  defineProp(protoOf(Post), 'rebloggedRootUuid', function () {
    return this.f5b();
  }, function (value) {
    this.e5b(value);
  });
  defineProp(protoOf(Post), 'rebloggedRootCanMessage', function () {
    return this.h5b();
  }, function (value) {
    this.g5b(value);
  });
  defineProp(protoOf(Post), 'rebloggedRootFollowing', function () {
    return this.j5b();
  }, function (value) {
    this.i5b(value);
  });
  defineProp(protoOf(Post), 'notes', function () {
    return this.l5b();
  }, function (value) {
    this.k5b(value);
  });
  defineProp(protoOf(Post), 'blog', function () {
    return this.q55();
  }, function (value) {
    this.p55(value);
  });
  defineProp(protoOf(Post), 'reblog', function () {
    return this.n5b();
  }, function (value) {
    this.m5b(value);
  });
  defineProp(protoOf(Post), 'trail', function () {
    return this.p5b();
  }, function (value) {
    this.o5b(value);
  });
  protoOf($serializer_19).uw = typeParametersSerializers;
  protoOf($serializer_20).uw = typeParametersSerializers;
  protoOf($serializer_21).uw = typeParametersSerializers;
  protoOf($serializer_22).uw = typeParametersSerializers;
  protoOf($serializer_23).uw = typeParametersSerializers;
  protoOf($serializer_24).uw = typeParametersSerializers;
  protoOf($serializer_25).uw = typeParametersSerializers;
  protoOf($serializer_26).uw = typeParametersSerializers;
  protoOf($serializer_27).uw = typeParametersSerializers;
  protoOf($serializer_28).uw = typeParametersSerializers;
  protoOf($serializer_29).uw = typeParametersSerializers;
  protoOf($serializer_30).uw = typeParametersSerializers;
  protoOf($serializer_31).uw = typeParametersSerializers;
  protoOf($serializer_32).uw = typeParametersSerializers;
  protoOf($serializer_33).uw = typeParametersSerializers;
  protoOf($serializer_34).uw = typeParametersSerializers;
  protoOf($serializer_35).uw = typeParametersSerializers;
  protoOf($serializer_36).uw = typeParametersSerializers;
  //endregion
  //region block: init
  TumblrFactory_instance = new TumblrFactory();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_5 = new Companion_5();
  Companion_instance_8 = new Companion_8();
  Companion_instance_12 = new Companion_12();
  Companion_instance_13 = new Companion_13();
  Companion_instance_14 = new Companion_14();
  Companion_instance_16 = new Companion_16();
  Companion_instance_17 = new Companion_17();
  Companion_instance_18 = new Companion_18();
  Companion_instance_19 = new Companion_19();
  Companion_instance_29 = new Companion_29();
  Companion_instance_31 = new Companion_31();
  Companion_instance_32 = new Companion_32();
  Companion_instance_33 = new Companion_33();
  Companion_instance_34 = new Companion_34();
  Companion_instance_35 = new Companion_35();
  Companion_instance_36 = new Companion_36();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var work = _.work || (_.work = {});
    var socialhub = work.socialhub || (work.socialhub = {});
    var ktumblr = socialhub.ktumblr || (socialhub.ktumblr = {});
    var work_0 = _.work || (_.work = {});
    var socialhub_0 = work_0.socialhub || (work_0.socialhub = {});
    var ktumblr_0 = socialhub_0.ktumblr || (socialhub_0.ktumblr = {});
    defineProp(ktumblr_0, 'TumblrFactory', TumblrFactory_getInstance, VOID, true);
    var work_1 = _.work || (_.work = {});
    var socialhub_1 = work_1.socialhub || (work_1.socialhub = {});
    var ktumblr_1 = socialhub_1.ktumblr || (socialhub_1.ktumblr = {});
    var api = ktumblr_1.api || (ktumblr_1.api = {});
    var work_2 = _.work || (_.work = {});
    var socialhub_2 = work_2.socialhub || (work_2.socialhub = {});
    var ktumblr_2 = socialhub_2.ktumblr || (socialhub_2.ktumblr = {});
    var api_0 = ktumblr_2.api || (ktumblr_2.api = {});
    var work_3 = _.work || (_.work = {});
    var socialhub_3 = work_3.socialhub || (work_3.socialhub = {});
    var ktumblr_3 = socialhub_3.ktumblr || (socialhub_3.ktumblr = {});
    var api_1 = ktumblr_3.api || (ktumblr_3.api = {});
    var work_4 = _.work || (_.work = {});
    var socialhub_4 = work_4.socialhub || (work_4.socialhub = {});
    var ktumblr_4 = socialhub_4.ktumblr || (socialhub_4.ktumblr = {});
    var api_2 = ktumblr_4.api || (ktumblr_4.api = {});
    var work_5 = _.work || (_.work = {});
    var socialhub_5 = work_5.socialhub || (work_5.socialhub = {});
    var ktumblr_5 = socialhub_5.ktumblr || (socialhub_5.ktumblr = {});
    var api_3 = ktumblr_5.api || (ktumblr_5.api = {});
    var request = api_3.request || (api_3.request = {});
    request.FileRequest = FileRequest;
    var work_6 = _.work || (_.work = {});
    var socialhub_6 = work_6.socialhub || (work_6.socialhub = {});
    var ktumblr_6 = socialhub_6.ktumblr || (socialhub_6.ktumblr = {});
    var api_4 = ktumblr_6.api || (ktumblr_6.api = {});
    var request_0 = api_4.request || (api_4.request = {});
    var auth = request_0.auth || (request_0.auth = {});
    auth.AuthAuthorizeUrlRequest = AuthAuthorizeUrlRequest;
    var work_7 = _.work || (_.work = {});
    var socialhub_7 = work_7.socialhub || (work_7.socialhub = {});
    var ktumblr_7 = socialhub_7.ktumblr || (socialhub_7.ktumblr = {});
    var api_5 = ktumblr_7.api || (ktumblr_7.api = {});
    var request_1 = api_5.request || (api_5.request = {});
    var auth_0 = request_1.auth || (request_1.auth = {});
    auth_0.AuthOAuth2TokenRefreshRequest = AuthOAuth2TokenRefreshRequest;
    var work_8 = _.work || (_.work = {});
    var socialhub_8 = work_8.socialhub || (work_8.socialhub = {});
    var ktumblr_8 = socialhub_8.ktumblr || (socialhub_8.ktumblr = {});
    var api_6 = ktumblr_8.api || (ktumblr_8.api = {});
    var request_2 = api_6.request || (api_6.request = {});
    var auth_1 = request_2.auth || (request_2.auth = {});
    auth_1.AuthOAuth2TokenRequest = AuthOAuth2TokenRequest;
    var work_9 = _.work || (_.work = {});
    var socialhub_9 = work_9.socialhub || (work_9.socialhub = {});
    var ktumblr_9 = socialhub_9.ktumblr || (socialhub_9.ktumblr = {});
    var api_7 = ktumblr_9.api || (ktumblr_9.api = {});
    var request_3 = api_7.request || (api_7.request = {});
    var blog = request_3.blog || (request_3.blog = {});
    blog.BlogAvatarRequest = BlogAvatarRequest;
    var work_10 = _.work || (_.work = {});
    var socialhub_10 = work_10.socialhub || (work_10.socialhub = {});
    var ktumblr_10 = socialhub_10.ktumblr || (socialhub_10.ktumblr = {});
    var api_8 = ktumblr_10.api || (ktumblr_10.api = {});
    var request_4 = api_8.request || (api_8.request = {});
    var blog_0 = request_4.blog || (request_4.blog = {});
    blog_0.BlogBannerRequest = BlogBannerRequest;
    var work_11 = _.work || (_.work = {});
    var socialhub_11 = work_11.socialhub || (work_11.socialhub = {});
    var ktumblr_11 = socialhub_11.ktumblr || (socialhub_11.ktumblr = {});
    var api_9 = ktumblr_11.api || (ktumblr_11.api = {});
    var request_5 = api_9.request || (api_9.request = {});
    var blog_1 = request_5.blog || (request_5.blog = {});
    blog_1.BlogDraftsRequest = BlogDraftsRequest;
    var work_12 = _.work || (_.work = {});
    var socialhub_12 = work_12.socialhub || (work_12.socialhub = {});
    var ktumblr_12 = socialhub_12.ktumblr || (socialhub_12.ktumblr = {});
    var api_10 = ktumblr_12.api || (ktumblr_12.api = {});
    var request_6 = api_10.request || (api_10.request = {});
    var blog_2 = request_6.blog || (request_6.blog = {});
    blog_2.BlogFollowersRequest = BlogFollowersRequest;
    var work_13 = _.work || (_.work = {});
    var socialhub_13 = work_13.socialhub || (work_13.socialhub = {});
    var ktumblr_13 = socialhub_13.ktumblr || (socialhub_13.ktumblr = {});
    var api_11 = ktumblr_13.api || (ktumblr_13.api = {});
    var request_7 = api_11.request || (api_11.request = {});
    var blog_3 = request_7.blog || (request_7.blog = {});
    blog_3.BlogFollowingRequest = BlogFollowingRequest;
    var work_14 = _.work || (_.work = {});
    var socialhub_14 = work_14.socialhub || (work_14.socialhub = {});
    var ktumblr_14 = socialhub_14.ktumblr || (socialhub_14.ktumblr = {});
    var api_12 = ktumblr_14.api || (ktumblr_14.api = {});
    var request_8 = api_12.request || (api_12.request = {});
    var blog_4 = request_8.blog || (request_8.blog = {});
    blog_4.BlogInfoRequest = BlogInfoRequest;
    var work_15 = _.work || (_.work = {});
    var socialhub_15 = work_15.socialhub || (work_15.socialhub = {});
    var ktumblr_15 = socialhub_15.ktumblr || (socialhub_15.ktumblr = {});
    var api_13 = ktumblr_15.api || (ktumblr_15.api = {});
    var request_9 = api_13.request || (api_13.request = {});
    var blog_5 = request_9.blog || (request_9.blog = {});
    blog_5.BlogLikesRequest = BlogLikesRequest;
    var work_16 = _.work || (_.work = {});
    var socialhub_16 = work_16.socialhub || (work_16.socialhub = {});
    var ktumblr_16 = socialhub_16.ktumblr || (socialhub_16.ktumblr = {});
    var api_14 = ktumblr_16.api || (ktumblr_16.api = {});
    var request_10 = api_14.request || (api_14.request = {});
    var blog_6 = request_10.blog || (request_10.blog = {});
    blog_6.BlogPostsRequest = BlogPostsRequest;
    var work_17 = _.work || (_.work = {});
    var socialhub_17 = work_17.socialhub || (work_17.socialhub = {});
    var ktumblr_17 = socialhub_17.ktumblr || (socialhub_17.ktumblr = {});
    var api_15 = ktumblr_17.api || (ktumblr_17.api = {});
    var request_11 = api_15.request || (api_15.request = {});
    var blog_7 = request_11.blog || (request_11.blog = {});
    blog_7.BlogQueueRequest = BlogQueueRequest;
    var work_18 = _.work || (_.work = {});
    var socialhub_18 = work_18.socialhub || (work_18.socialhub = {});
    var ktumblr_18 = socialhub_18.ktumblr || (socialhub_18.ktumblr = {});
    var api_16 = ktumblr_18.api || (ktumblr_18.api = {});
    var request_12 = api_16.request || (api_16.request = {});
    var blog_8 = request_12.blog || (request_12.blog = {});
    blog_8.BlogSubmissionsRequest = BlogSubmissionsRequest;
    var work_19 = _.work || (_.work = {});
    var socialhub_19 = work_19.socialhub || (work_19.socialhub = {});
    var ktumblr_19 = socialhub_19.ktumblr || (socialhub_19.ktumblr = {});
    var api_17 = ktumblr_19.api || (ktumblr_19.api = {});
    var request_13 = api_17.request || (api_17.request = {});
    var blog_9 = request_13.blog || (request_13.blog = {});
    blog_9.BlogUpdateInfoRequest = BlogUpdateInfoRequest;
    var work_20 = _.work || (_.work = {});
    var socialhub_20 = work_20.socialhub || (work_20.socialhub = {});
    var ktumblr_20 = socialhub_20.ktumblr || (socialhub_20.ktumblr = {});
    var api_18 = ktumblr_20.api || (ktumblr_20.api = {});
    var request_14 = api_18.request || (api_18.request = {});
    var blog_10 = request_14.blog || (request_14.blog = {});
    var post = blog_10.post || (blog_10.post = {});
    post.BlogAudioPostRequest = BlogAudioPostRequest;
    var work_21 = _.work || (_.work = {});
    var socialhub_21 = work_21.socialhub || (work_21.socialhub = {});
    var ktumblr_21 = socialhub_21.ktumblr || (socialhub_21.ktumblr = {});
    var api_19 = ktumblr_21.api || (ktumblr_21.api = {});
    var request_15 = api_19.request || (api_19.request = {});
    var blog_11 = request_15.blog || (request_15.blog = {});
    var post_0 = blog_11.post || (blog_11.post = {});
    post_0.BlogChatPostRequest = BlogChatPostRequest;
    var work_22 = _.work || (_.work = {});
    var socialhub_22 = work_22.socialhub || (work_22.socialhub = {});
    var ktumblr_22 = socialhub_22.ktumblr || (socialhub_22.ktumblr = {});
    var api_20 = ktumblr_22.api || (ktumblr_22.api = {});
    var request_16 = api_20.request || (api_20.request = {});
    var blog_12 = request_16.blog || (request_16.blog = {});
    var post_1 = blog_12.post || (blog_12.post = {});
    post_1.BlogDeleteRequest = BlogDeleteRequest;
    var work_23 = _.work || (_.work = {});
    var socialhub_23 = work_23.socialhub || (work_23.socialhub = {});
    var ktumblr_23 = socialhub_23.ktumblr || (socialhub_23.ktumblr = {});
    var api_21 = ktumblr_23.api || (ktumblr_23.api = {});
    var request_17 = api_21.request || (api_21.request = {});
    var blog_13 = request_17.blog || (request_17.blog = {});
    var post_2 = blog_13.post || (blog_13.post = {});
    post_2.BlogLinkPostRequest = BlogLinkPostRequest;
    var work_24 = _.work || (_.work = {});
    var socialhub_24 = work_24.socialhub || (work_24.socialhub = {});
    var ktumblr_24 = socialhub_24.ktumblr || (socialhub_24.ktumblr = {});
    var api_22 = ktumblr_24.api || (ktumblr_24.api = {});
    var request_18 = api_22.request || (api_22.request = {});
    var blog_14 = request_18.blog || (request_18.blog = {});
    var post_3 = blog_14.post || (blog_14.post = {});
    post_3.BlogPhotoPostRequest = BlogPhotoPostRequest;
    var work_25 = _.work || (_.work = {});
    var socialhub_25 = work_25.socialhub || (work_25.socialhub = {});
    var ktumblr_25 = socialhub_25.ktumblr || (socialhub_25.ktumblr = {});
    var api_23 = ktumblr_25.api || (ktumblr_25.api = {});
    var request_19 = api_23.request || (api_23.request = {});
    var blog_15 = request_19.blog || (request_19.blog = {});
    var post_4 = blog_15.post || (blog_15.post = {});
    post_4.BlogPostEditTagsRequest = BlogPostEditTagsRequest;
    var work_26 = _.work || (_.work = {});
    var socialhub_26 = work_26.socialhub || (work_26.socialhub = {});
    var ktumblr_26 = socialhub_26.ktumblr || (socialhub_26.ktumblr = {});
    var api_24 = ktumblr_26.api || (ktumblr_26.api = {});
    var request_20 = api_24.request || (api_24.request = {});
    var blog_16 = request_20.blog || (request_20.blog = {});
    var post_5 = blog_16.post || (blog_16.post = {});
    post_5.BlogPostRequest = BlogPostRequest;
    var work_27 = _.work || (_.work = {});
    var socialhub_27 = work_27.socialhub || (work_27.socialhub = {});
    var ktumblr_27 = socialhub_27.ktumblr || (socialhub_27.ktumblr = {});
    var api_25 = ktumblr_27.api || (ktumblr_27.api = {});
    var request_21 = api_25.request || (api_25.request = {});
    var blog_17 = request_21.blog || (request_21.blog = {});
    var post_6 = blog_17.post || (blog_17.post = {});
    post_6.BlogPostUpdateRequest = BlogPostUpdateRequest;
    var work_28 = _.work || (_.work = {});
    var socialhub_28 = work_28.socialhub || (work_28.socialhub = {});
    var ktumblr_28 = socialhub_28.ktumblr || (socialhub_28.ktumblr = {});
    var api_26 = ktumblr_28.api || (ktumblr_28.api = {});
    var request_22 = api_26.request || (api_26.request = {});
    var blog_18 = request_22.blog || (request_22.blog = {});
    var post_7 = blog_18.post || (blog_18.post = {});
    post_7.BlogQuotePostRequest = BlogQuotePostRequest;
    var work_29 = _.work || (_.work = {});
    var socialhub_29 = work_29.socialhub || (work_29.socialhub = {});
    var ktumblr_29 = socialhub_29.ktumblr || (socialhub_29.ktumblr = {});
    var api_27 = ktumblr_29.api || (ktumblr_29.api = {});
    var request_23 = api_27.request || (api_27.request = {});
    var blog_19 = request_23.blog || (request_23.blog = {});
    var post_8 = blog_19.post || (blog_19.post = {});
    post_8.BlogReblogRequest = BlogReblogRequest;
    var work_30 = _.work || (_.work = {});
    var socialhub_30 = work_30.socialhub || (work_30.socialhub = {});
    var ktumblr_30 = socialhub_30.ktumblr || (socialhub_30.ktumblr = {});
    var api_28 = ktumblr_30.api || (ktumblr_30.api = {});
    var request_24 = api_28.request || (api_28.request = {});
    var blog_20 = request_24.blog || (request_24.blog = {});
    var post_9 = blog_20.post || (blog_20.post = {});
    post_9.BlogTextPostRequest = BlogTextPostRequest;
    var work_31 = _.work || (_.work = {});
    var socialhub_31 = work_31.socialhub || (work_31.socialhub = {});
    var ktumblr_31 = socialhub_31.ktumblr || (socialhub_31.ktumblr = {});
    var api_29 = ktumblr_31.api || (ktumblr_31.api = {});
    var request_25 = api_29.request || (api_29.request = {});
    var blog_21 = request_25.blog || (request_25.blog = {});
    var post_10 = blog_21.post || (blog_21.post = {});
    post_10.BlogVideoPostRequest = BlogVideoPostRequest;
    var work_32 = _.work || (_.work = {});
    var socialhub_32 = work_32.socialhub || (work_32.socialhub = {});
    var ktumblr_32 = socialhub_32.ktumblr || (socialhub_32.ktumblr = {});
    var api_30 = ktumblr_32.api || (ktumblr_32.api = {});
    var request_26 = api_30.request || (api_30.request = {});
    var tagged = request_26.tagged || (request_26.tagged = {});
    tagged.TaggedRequest = TaggedRequest;
    var work_33 = _.work || (_.work = {});
    var socialhub_33 = work_33.socialhub || (work_33.socialhub = {});
    var ktumblr_33 = socialhub_33.ktumblr || (socialhub_33.ktumblr = {});
    var api_31 = ktumblr_33.api || (ktumblr_33.api = {});
    var request_27 = api_31.request || (api_31.request = {});
    var user = request_27.user || (request_27.user = {});
    user.UserDashboardRequest = UserDashboardRequest;
    var work_34 = _.work || (_.work = {});
    var socialhub_34 = work_34.socialhub || (work_34.socialhub = {});
    var ktumblr_34 = socialhub_34.ktumblr || (socialhub_34.ktumblr = {});
    var api_32 = ktumblr_34.api || (ktumblr_34.api = {});
    var request_28 = api_32.request || (api_32.request = {});
    var user_0 = request_28.user || (request_28.user = {});
    user_0.UserFollowRequest = UserFollowRequest;
    var work_35 = _.work || (_.work = {});
    var socialhub_35 = work_35.socialhub || (work_35.socialhub = {});
    var ktumblr_35 = socialhub_35.ktumblr || (socialhub_35.ktumblr = {});
    var api_33 = ktumblr_35.api || (ktumblr_35.api = {});
    var request_29 = api_33.request || (api_33.request = {});
    var user_1 = request_29.user || (request_29.user = {});
    user_1.UserFollowingRequest = UserFollowingRequest;
    var work_36 = _.work || (_.work = {});
    var socialhub_36 = work_36.socialhub || (work_36.socialhub = {});
    var ktumblr_36 = socialhub_36.ktumblr || (socialhub_36.ktumblr = {});
    var api_34 = ktumblr_36.api || (ktumblr_36.api = {});
    var request_30 = api_34.request || (api_34.request = {});
    var user_2 = request_30.user || (request_30.user = {});
    user_2.UserLikeRequest = UserLikeRequest;
    var work_37 = _.work || (_.work = {});
    var socialhub_37 = work_37.socialhub || (work_37.socialhub = {});
    var ktumblr_37 = socialhub_37.ktumblr || (socialhub_37.ktumblr = {});
    var api_35 = ktumblr_37.api || (ktumblr_37.api = {});
    var request_31 = api_35.request || (api_35.request = {});
    var user_3 = request_31.user || (request_31.user = {});
    user_3.UserLikesRequest = UserLikesRequest;
    var work_38 = _.work || (_.work = {});
    var socialhub_38 = work_38.socialhub || (work_38.socialhub = {});
    var ktumblr_38 = socialhub_38.ktumblr || (socialhub_38.ktumblr = {});
    var api_36 = ktumblr_38.api || (ktumblr_38.api = {});
    var request_32 = api_36.request || (api_36.request = {});
    var user_4 = request_32.user || (request_32.user = {});
    user_4.UserUnfollowRequest = UserUnfollowRequest;
    var work_39 = _.work || (_.work = {});
    var socialhub_39 = work_39.socialhub || (work_39.socialhub = {});
    var ktumblr_39 = socialhub_39.ktumblr || (socialhub_39.ktumblr = {});
    var api_37 = ktumblr_39.api || (ktumblr_39.api = {});
    var request_33 = api_37.request || (api_37.request = {});
    var user_5 = request_33.user || (request_33.user = {});
    user_5.UserUnlikeRequest = UserUnlikeRequest;
    var work_40 = _.work || (_.work = {});
    var socialhub_40 = work_40.socialhub || (work_40.socialhub = {});
    var ktumblr_40 = socialhub_40.ktumblr || (socialhub_40.ktumblr = {});
    var api_38 = ktumblr_40.api || (ktumblr_40.api = {});
    var response = api_38.response || (api_38.response = {});
    response.Body = Body;
    var work_41 = _.work || (_.work = {});
    var socialhub_41 = work_41.socialhub || (work_41.socialhub = {});
    var ktumblr_41 = socialhub_41.ktumblr || (socialhub_41.ktumblr = {});
    var api_39 = ktumblr_41.api || (ktumblr_41.api = {});
    var response_0 = api_39.response || (api_39.response = {});
    response_0.Meta = Meta;
    var work_42 = _.work || (_.work = {});
    var socialhub_42 = work_42.socialhub || (work_42.socialhub = {});
    var ktumblr_42 = socialhub_42.ktumblr || (socialhub_42.ktumblr = {});
    var api_40 = ktumblr_42.api || (ktumblr_42.api = {});
    var response_1 = api_40.response || (api_40.response = {});
    response_1.Response = Response;
    var work_43 = _.work || (_.work = {});
    var socialhub_43 = work_43.socialhub || (work_43.socialhub = {});
    var ktumblr_43 = socialhub_43.ktumblr || (socialhub_43.ktumblr = {});
    var api_41 = ktumblr_43.api || (ktumblr_43.api = {});
    var response_2 = api_41.response || (api_41.response = {});
    response_2.ResponseUnit = ResponseUnit;
    var work_44 = _.work || (_.work = {});
    var socialhub_44 = work_44.socialhub || (work_44.socialhub = {});
    var ktumblr_44 = socialhub_44.ktumblr || (socialhub_44.ktumblr = {});
    var api_42 = ktumblr_44.api || (ktumblr_44.api = {});
    var response_3 = api_42.response || (api_42.response = {});
    var auth_2 = response_3.auth || (response_3.auth = {});
    auth_2.AuthOAuth2TokenResponse = AuthOAuth2TokenResponse;
    var work_45 = _.work || (_.work = {});
    var socialhub_45 = work_45.socialhub || (work_45.socialhub = {});
    var ktumblr_45 = socialhub_45.ktumblr || (socialhub_45.ktumblr = {});
    var api_43 = ktumblr_45.api || (ktumblr_45.api = {});
    var response_4 = api_43.response || (api_43.response = {});
    var blog_22 = response_4.blog || (response_4.blog = {});
    blog_22.BlogBannerResponse = BlogBannerResponse;
    var work_46 = _.work || (_.work = {});
    var socialhub_46 = work_46.socialhub || (work_46.socialhub = {});
    var ktumblr_46 = socialhub_46.ktumblr || (socialhub_46.ktumblr = {});
    var api_44 = ktumblr_46.api || (ktumblr_46.api = {});
    var response_5 = api_44.response || (api_44.response = {});
    var blog_23 = response_5.blog || (response_5.blog = {});
    blog_23.BlogFollowersResponse = BlogFollowersResponse;
    var work_47 = _.work || (_.work = {});
    var socialhub_47 = work_47.socialhub || (work_47.socialhub = {});
    var ktumblr_47 = socialhub_47.ktumblr || (socialhub_47.ktumblr = {});
    var api_45 = ktumblr_47.api || (ktumblr_47.api = {});
    var response_6 = api_45.response || (api_45.response = {});
    var blog_24 = response_6.blog || (response_6.blog = {});
    blog_24.BlogFollowingResponse = BlogFollowingResponse;
    var work_48 = _.work || (_.work = {});
    var socialhub_48 = work_48.socialhub || (work_48.socialhub = {});
    var ktumblr_48 = socialhub_48.ktumblr || (socialhub_48.ktumblr = {});
    var api_46 = ktumblr_48.api || (ktumblr_48.api = {});
    var response_7 = api_46.response || (api_46.response = {});
    var blog_25 = response_7.blog || (response_7.blog = {});
    blog_25.BlogInfoResponse = BlogInfoResponse;
    var work_49 = _.work || (_.work = {});
    var socialhub_49 = work_49.socialhub || (work_49.socialhub = {});
    var ktumblr_49 = socialhub_49.ktumblr || (socialhub_49.ktumblr = {});
    var api_47 = ktumblr_49.api || (ktumblr_49.api = {});
    var response_8 = api_47.response || (api_47.response = {});
    var blog_26 = response_8.blog || (response_8.blog = {});
    blog_26.BlogLikesResponse = BlogLikesResponse;
    var work_50 = _.work || (_.work = {});
    var socialhub_50 = work_50.socialhub || (work_50.socialhub = {});
    var ktumblr_50 = socialhub_50.ktumblr || (socialhub_50.ktumblr = {});
    var api_48 = ktumblr_50.api || (ktumblr_50.api = {});
    var response_9 = api_48.response || (api_48.response = {});
    var blog_27 = response_9.blog || (response_9.blog = {});
    blog_27.BlogPostsResponse = BlogPostsResponse;
    var work_51 = _.work || (_.work = {});
    var socialhub_51 = work_51.socialhub || (work_51.socialhub = {});
    var ktumblr_51 = socialhub_51.ktumblr || (socialhub_51.ktumblr = {});
    var api_49 = ktumblr_51.api || (ktumblr_51.api = {});
    var response_10 = api_49.response || (api_49.response = {});
    var blog_28 = response_10.blog || (response_10.blog = {});
    blog_28.BlogUpdatedInfoResponse = BlogUpdatedInfoResponse;
    var work_52 = _.work || (_.work = {});
    var socialhub_52 = work_52.socialhub || (work_52.socialhub = {});
    var ktumblr_52 = socialhub_52.ktumblr || (socialhub_52.ktumblr = {});
    var api_50 = ktumblr_52.api || (ktumblr_52.api = {});
    var response_11 = api_50.response || (api_50.response = {});
    var user_6 = response_11.user || (response_11.user = {});
    user_6.UserDashboardResponse = UserDashboardResponse;
    var work_53 = _.work || (_.work = {});
    var socialhub_53 = work_53.socialhub || (work_53.socialhub = {});
    var ktumblr_53 = socialhub_53.ktumblr || (socialhub_53.ktumblr = {});
    var api_51 = ktumblr_53.api || (ktumblr_53.api = {});
    var response_12 = api_51.response || (api_51.response = {});
    var user_7 = response_12.user || (response_12.user = {});
    user_7.UserFollowingResponse = UserFollowingResponse;
    var work_54 = _.work || (_.work = {});
    var socialhub_54 = work_54.socialhub || (work_54.socialhub = {});
    var ktumblr_54 = socialhub_54.ktumblr || (socialhub_54.ktumblr = {});
    var api_52 = ktumblr_54.api || (ktumblr_54.api = {});
    var response_13 = api_52.response || (api_52.response = {});
    var user_8 = response_13.user || (response_13.user = {});
    user_8.UserLikesResponse = UserLikesResponse;
    var work_55 = _.work || (_.work = {});
    var socialhub_55 = work_55.socialhub || (work_55.socialhub = {});
    var ktumblr_55 = socialhub_55.ktumblr || (socialhub_55.ktumblr = {});
    var api_53 = ktumblr_55.api || (ktumblr_55.api = {});
    var response_14 = api_53.response || (api_53.response = {});
    var user_9 = response_14.user || (response_14.user = {});
    user_9.UserResponse = UserResponse;
    var work_56 = _.work || (_.work = {});
    var socialhub_56 = work_56.socialhub || (work_56.socialhub = {});
    var ktumblr_56 = socialhub_56.ktumblr || (socialhub_56.ktumblr = {});
    var define_0 = ktumblr_56.define || (ktumblr_56.define = {});
    define_0.PhotoType = PhotoType;
    define_0.PhotoType.values = values;
    define_0.PhotoType.valueOf = valueOf;
    defineProp(define_0.PhotoType, 'SOURCE', PhotoType_SOURCE_getInstance, VOID, true);
    defineProp(define_0.PhotoType, 'FILE', PhotoType_FILE_getInstance, VOID, true);
    var work_57 = _.work || (_.work = {});
    var socialhub_57 = work_57.socialhub || (work_57.socialhub = {});
    var ktumblr_57 = socialhub_57.ktumblr || (socialhub_57.ktumblr = {});
    var define_1 = ktumblr_57.define || (ktumblr_57.define = {});
    define_1.PostType = PostType;
    define_1.PostType.values = values_0;
    define_1.PostType.valueOf = valueOf_0;
    defineProp(define_1.PostType, 'TEXT', PostType_TEXT_getInstance, VOID, true);
    defineProp(define_1.PostType, 'PHOTO', PostType_PHOTO_getInstance, VOID, true);
    defineProp(define_1.PostType, 'QUOTE', PostType_QUOTE_getInstance, VOID, true);
    defineProp(define_1.PostType, 'LINK', PostType_LINK_getInstance, VOID, true);
    defineProp(define_1.PostType, 'CHAT', PostType_CHAT_getInstance, VOID, true);
    defineProp(define_1.PostType, 'AUDIO', PostType_AUDIO_getInstance, VOID, true);
    defineProp(define_1.PostType, 'VIDEO', PostType_VIDEO_getInstance, VOID, true);
    defineProp(define_1.PostType, 'ANSWER', PostType_ANSWER_getInstance, VOID, true);
    defineProp(define_1.PostType, 'POSTCARD', PostType_POSTCARD_getInstance, VOID, true);
    defineProp(define_1.PostType, 'UNKNOWN', PostType_UNKNOWN_getInstance, VOID, true);
    var work_58 = _.work || (_.work = {});
    var socialhub_58 = work_58.socialhub || (work_58.socialhub = {});
    var ktumblr_58 = socialhub_58.ktumblr || (socialhub_58.ktumblr = {});
    var entity = ktumblr_58.entity || (ktumblr_58.entity = {});
    entity.Note = Note;
    var work_59 = _.work || (_.work = {});
    var socialhub_59 = work_59.socialhub || (work_59.socialhub = {});
    var ktumblr_59 = socialhub_59.ktumblr || (socialhub_59.ktumblr = {});
    var entity_0 = ktumblr_59.entity || (ktumblr_59.entity = {});
    entity_0.NoteAvatar = NoteAvatar;
    var work_60 = _.work || (_.work = {});
    var socialhub_60 = work_60.socialhub || (work_60.socialhub = {});
    var ktumblr_60 = socialhub_60.ktumblr || (socialhub_60.ktumblr = {});
    var entity_1 = ktumblr_60.entity || (ktumblr_60.entity = {});
    var blog_29 = entity_1.blog || (entity_1.blog = {});
    blog_29.Blog = Blog;
    var work_61 = _.work || (_.work = {});
    var socialhub_61 = work_61.socialhub || (work_61.socialhub = {});
    var ktumblr_61 = socialhub_61.ktumblr || (socialhub_61.ktumblr = {});
    var entity_2 = ktumblr_61.entity || (ktumblr_61.entity = {});
    var blog_30 = entity_2.blog || (entity_2.blog = {});
    blog_30.BlogAvatar = BlogAvatar;
    var work_62 = _.work || (_.work = {});
    var socialhub_62 = work_62.socialhub || (work_62.socialhub = {});
    var ktumblr_62 = socialhub_62.ktumblr || (socialhub_62.ktumblr = {});
    var entity_3 = ktumblr_62.entity || (ktumblr_62.entity = {});
    var blog_31 = entity_3.blog || (entity_3.blog = {});
    blog_31.BlogTheme = BlogTheme;
    var work_63 = _.work || (_.work = {});
    var socialhub_63 = work_63.socialhub || (work_63.socialhub = {});
    var ktumblr_63 = socialhub_63.ktumblr || (socialhub_63.ktumblr = {});
    var entity_4 = ktumblr_63.entity || (ktumblr_63.entity = {});
    var blog_32 = entity_4.blog || (entity_4.blog = {});
    blog_32.Reblog = Reblog;
    var work_64 = _.work || (_.work = {});
    var socialhub_64 = work_64.socialhub || (work_64.socialhub = {});
    var ktumblr_64 = socialhub_64.ktumblr || (socialhub_64.ktumblr = {});
    var entity_5 = ktumblr_64.entity || (ktumblr_64.entity = {});
    var post_11 = entity_5.post || (entity_5.post = {});
    post_11.Post = Post;
    var work_65 = _.work || (_.work = {});
    var socialhub_65 = work_65.socialhub || (work_65.socialhub = {});
    var ktumblr_65 = socialhub_65.ktumblr || (socialhub_65.ktumblr = {});
    var entity_6 = ktumblr_65.entity || (ktumblr_65.entity = {});
    var post_12 = entity_6.post || (entity_6.post = {});
    var legacy = post_12.legacy || (post_12.legacy = {});
    legacy.LegacyAnswerPost = LegacyAnswerPost;
    var work_66 = _.work || (_.work = {});
    var socialhub_66 = work_66.socialhub || (work_66.socialhub = {});
    var ktumblr_66 = socialhub_66.ktumblr || (socialhub_66.ktumblr = {});
    var entity_7 = ktumblr_66.entity || (ktumblr_66.entity = {});
    var post_13 = entity_7.post || (entity_7.post = {});
    var legacy_0 = post_13.legacy || (post_13.legacy = {});
    legacy_0.LegacyAudioPost = LegacyAudioPost;
    var work_67 = _.work || (_.work = {});
    var socialhub_67 = work_67.socialhub || (work_67.socialhub = {});
    var ktumblr_67 = socialhub_67.ktumblr || (socialhub_67.ktumblr = {});
    var entity_8 = ktumblr_67.entity || (ktumblr_67.entity = {});
    var post_14 = entity_8.post || (entity_8.post = {});
    var legacy_1 = post_14.legacy || (post_14.legacy = {});
    legacy_1.LegacyChatPost = LegacyChatPost;
    var work_68 = _.work || (_.work = {});
    var socialhub_68 = work_68.socialhub || (work_68.socialhub = {});
    var ktumblr_68 = socialhub_68.ktumblr || (socialhub_68.ktumblr = {});
    var entity_9 = ktumblr_68.entity || (ktumblr_68.entity = {});
    var post_15 = entity_9.post || (entity_9.post = {});
    var legacy_2 = post_15.legacy || (post_15.legacy = {});
    legacy_2.LegacyLinkPost = LegacyLinkPost;
    var work_69 = _.work || (_.work = {});
    var socialhub_69 = work_69.socialhub || (work_69.socialhub = {});
    var ktumblr_69 = socialhub_69.ktumblr || (socialhub_69.ktumblr = {});
    var entity_10 = ktumblr_69.entity || (ktumblr_69.entity = {});
    var post_16 = entity_10.post || (entity_10.post = {});
    var legacy_3 = post_16.legacy || (post_16.legacy = {});
    legacy_3.LegacyPhotoPost = LegacyPhotoPost;
    var work_70 = _.work || (_.work = {});
    var socialhub_70 = work_70.socialhub || (work_70.socialhub = {});
    var ktumblr_70 = socialhub_70.ktumblr || (socialhub_70.ktumblr = {});
    var entity_11 = ktumblr_70.entity || (ktumblr_70.entity = {});
    var post_17 = entity_11.post || (entity_11.post = {});
    var legacy_4 = post_17.legacy || (post_17.legacy = {});
    legacy_4.LegacyPostcardPost = LegacyPostcardPost;
    var work_71 = _.work || (_.work = {});
    var socialhub_71 = work_71.socialhub || (work_71.socialhub = {});
    var ktumblr_71 = socialhub_71.ktumblr || (socialhub_71.ktumblr = {});
    var entity_12 = ktumblr_71.entity || (ktumblr_71.entity = {});
    var post_18 = entity_12.post || (entity_12.post = {});
    var legacy_5 = post_18.legacy || (post_18.legacy = {});
    legacy_5.LegacyQuotePost = LegacyQuotePost;
    var work_72 = _.work || (_.work = {});
    var socialhub_72 = work_72.socialhub || (work_72.socialhub = {});
    var ktumblr_72 = socialhub_72.ktumblr || (socialhub_72.ktumblr = {});
    var entity_13 = ktumblr_72.entity || (ktumblr_72.entity = {});
    var post_19 = entity_13.post || (entity_13.post = {});
    var legacy_6 = post_19.legacy || (post_19.legacy = {});
    legacy_6.LegacyVideoPost = LegacyVideoPost;
    var work_73 = _.work || (_.work = {});
    var socialhub_73 = work_73.socialhub || (work_73.socialhub = {});
    var ktumblr_73 = socialhub_73.ktumblr || (socialhub_73.ktumblr = {});
    var entity_14 = ktumblr_73.entity || (ktumblr_73.entity = {});
    var post_20 = entity_14.post || (entity_14.post = {});
    var options = post_20.options || (post_20.options = {});
    options.Dialogue = Dialogue;
    var work_74 = _.work || (_.work = {});
    var socialhub_74 = work_74.socialhub || (work_74.socialhub = {});
    var ktumblr_74 = socialhub_74.ktumblr || (socialhub_74.ktumblr = {});
    var entity_15 = ktumblr_74.entity || (ktumblr_74.entity = {});
    var post_21 = entity_15.post || (entity_15.post = {});
    var options_0 = post_21.options || (post_21.options = {});
    options_0.Photo = Photo;
    var work_75 = _.work || (_.work = {});
    var socialhub_75 = work_75.socialhub || (work_75.socialhub = {});
    var ktumblr_75 = socialhub_75.ktumblr || (socialhub_75.ktumblr = {});
    var entity_16 = ktumblr_75.entity || (ktumblr_75.entity = {});
    var post_22 = entity_16.post || (entity_16.post = {});
    var options_1 = post_22.options || (post_22.options = {});
    options_1.PhotoSize = PhotoSize;
    var work_76 = _.work || (_.work = {});
    var socialhub_76 = work_76.socialhub || (work_76.socialhub = {});
    var ktumblr_76 = socialhub_76.ktumblr || (socialhub_76.ktumblr = {});
    var entity_17 = ktumblr_76.entity || (ktumblr_76.entity = {});
    var post_23 = entity_17.post || (entity_17.post = {});
    var options_2 = post_23.options || (post_23.options = {});
    options_2.Video = Video;
    var work_77 = _.work || (_.work = {});
    var socialhub_77 = work_77.socialhub || (work_77.socialhub = {});
    var ktumblr_77 = socialhub_77.ktumblr || (socialhub_77.ktumblr = {});
    var entity_18 = ktumblr_77.entity || (ktumblr_77.entity = {});
    var trail = entity_18.trail || (entity_18.trail = {});
    trail.BlogInTrail = BlogInTrail;
    var work_78 = _.work || (_.work = {});
    var socialhub_78 = work_78.socialhub || (work_78.socialhub = {});
    var ktumblr_78 = socialhub_78.ktumblr || (socialhub_78.ktumblr = {});
    var entity_19 = ktumblr_78.entity || (ktumblr_78.entity = {});
    var trail_0 = entity_19.trail || (entity_19.trail = {});
    trail_0.IdInTrail = IdInTrail;
    var work_79 = _.work || (_.work = {});
    var socialhub_79 = work_79.socialhub || (work_79.socialhub = {});
    var ktumblr_79 = socialhub_79.ktumblr || (socialhub_79.ktumblr = {});
    var entity_20 = ktumblr_79.entity || (ktumblr_79.entity = {});
    var trail_1 = entity_20.trail || (entity_20.trail = {});
    trail_1.Trail = Trail;
    var work_80 = _.work || (_.work = {});
    var socialhub_80 = work_80.socialhub || (work_80.socialhub = {});
    var ktumblr_80 = socialhub_80.ktumblr || (socialhub_80.ktumblr = {});
    var entity_21 = ktumblr_80.entity || (ktumblr_80.entity = {});
    var user_10 = entity_21.user || (entity_21.user = {});
    user_10.FollowerUser = FollowerUser;
    var work_81 = _.work || (_.work = {});
    var socialhub_81 = work_81.socialhub || (work_81.socialhub = {});
    var ktumblr_81 = socialhub_81.ktumblr || (socialhub_81.ktumblr = {});
    var entity_22 = ktumblr_81.entity || (ktumblr_81.entity = {});
    var user_11 = entity_22.user || (entity_22.user = {});
    user_11.User = User;
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
