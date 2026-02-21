type Nullable<T> = T | null | undefined
declare function KtSingleton<T>(): T & (abstract new() => any);
export declare namespace io.ktor.client.engine.js {
    /** @deprecated  */
    const initHook: any;
}
export declare namespace work.socialhub.ktumblr {
    interface Tumblr {
        auth(): work.socialhub.ktumblr.api.AuthResource;
        user(): work.socialhub.ktumblr.api.UserResource;
        blog(): work.socialhub.ktumblr.api.BlogResource;
        tagged(): work.socialhub.ktumblr.api.TaggedResource;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.ktumblr.Tumblr": unique symbol;
        };
    }
}
export declare namespace work.socialhub.ktumblr {
    abstract class TumblrFactory extends KtSingleton<TumblrFactory.$metadata$.constructor>() {
        private constructor();
    }
    namespace TumblrFactory {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                instance(clientId?: string, clientSecret?: Nullable<string>, accessToken?: Nullable<string>, refreshToken?: Nullable<string>): work.socialhub.ktumblr.Tumblr;
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.ktumblr.api {
    interface AuthResource {
        authorizeUrl(request: work.socialhub.ktumblr.api.request.auth.AuthAuthorizeUrlRequest): string;
        oAuth2Token(request: work.socialhub.ktumblr.api.request.auth.AuthOAuth2TokenRequest): Promise<work.socialhub.ktumblr.api.response.Response<work.socialhub.ktumblr.api.response.auth.AuthOAuth2TokenResponse>>;
        oAuth2TokenRefresh(request: work.socialhub.ktumblr.api.request.auth.AuthOAuth2TokenRefreshRequest): Promise<work.socialhub.ktumblr.api.response.Response<work.socialhub.ktumblr.api.response.auth.AuthOAuth2TokenResponse>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.ktumblr.api.AuthResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.ktumblr.api {
    interface BlogResource {
        blogInfo(request: work.socialhub.ktumblr.api.request.blog.BlogInfoRequest): Promise<work.socialhub.ktumblr.api.response.Response<work.socialhub.ktumblr.api.response.Body<work.socialhub.ktumblr.api.response.blog.BlogInfoResponse>>>;
        blogAvatar(request: work.socialhub.ktumblr.api.request.blog.BlogAvatarRequest): Promise<work.socialhub.ktumblr.api.response.Response<string>>;
        blogLikes(request: work.socialhub.ktumblr.api.request.blog.BlogLikesRequest): Promise<work.socialhub.ktumblr.api.response.Response<work.socialhub.ktumblr.api.response.Body<work.socialhub.ktumblr.api.response.blog.BlogLikesResponse>>>;
        blogFollowing(request: work.socialhub.ktumblr.api.request.blog.BlogFollowingRequest): Promise<work.socialhub.ktumblr.api.response.Response<work.socialhub.ktumblr.api.response.Body<work.socialhub.ktumblr.api.response.blog.BlogFollowingResponse>>>;
        blogFollowers(request: work.socialhub.ktumblr.api.request.blog.BlogFollowersRequest): Promise<work.socialhub.ktumblr.api.response.Response<work.socialhub.ktumblr.api.response.Body<work.socialhub.ktumblr.api.response.blog.BlogFollowersResponse>>>;
        blogPosts(request: work.socialhub.ktumblr.api.request.blog.BlogPostsRequest): Promise<work.socialhub.ktumblr.api.response.Response<work.socialhub.ktumblr.api.response.Body<work.socialhub.ktumblr.api.response.blog.BlogPostsResponse>>>;
        blogQueuedPosts(request: work.socialhub.ktumblr.api.request.blog.BlogQueueRequest): Promise<work.socialhub.ktumblr.api.response.Response<work.socialhub.ktumblr.api.response.Body<work.socialhub.ktumblr.api.response.blog.BlogPostsResponse>>>;
        blogDraftPosts(request: work.socialhub.ktumblr.api.request.blog.BlogDraftsRequest): Promise<work.socialhub.ktumblr.api.response.Response<work.socialhub.ktumblr.api.response.Body<work.socialhub.ktumblr.api.response.blog.BlogPostsResponse>>>;
        blogSubmissions(request: work.socialhub.ktumblr.api.request.blog.BlogSubmissionsRequest): Promise<work.socialhub.ktumblr.api.response.Response<work.socialhub.ktumblr.api.response.Body<work.socialhub.ktumblr.api.response.blog.BlogPostsResponse>>>;
        postCreate(request: work.socialhub.ktumblr.api.request.blog.post.BlogPostRequest): work.socialhub.ktumblr.api.response.ResponseUnit;
        postEdit(request: work.socialhub.ktumblr.api.request.blog.post.BlogPostRequest): work.socialhub.ktumblr.api.response.ResponseUnit;
        postReblog(request: work.socialhub.ktumblr.api.request.blog.post.BlogReblogRequest): work.socialhub.ktumblr.api.response.ResponseUnit;
        postDelete(request: work.socialhub.ktumblr.api.request.blog.post.BlogDeleteRequest): work.socialhub.ktumblr.api.response.ResponseUnit;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.ktumblr.api.BlogResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.ktumblr.api {
    interface TaggedResource {
        tagged(request: work.socialhub.ktumblr.api.request.tagged.TaggedRequest): Promise<work.socialhub.ktumblr.api.response.Response<work.socialhub.ktumblr.api.response.Body<Array<work.socialhub.ktumblr.entity.post.Post>>>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.ktumblr.api.TaggedResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.ktumblr.api {
    interface UserResource {
        user(): Promise<work.socialhub.ktumblr.api.response.Response<work.socialhub.ktumblr.api.response.Body<work.socialhub.ktumblr.api.response.user.UserResponse>>>;
        userDashboard(request: work.socialhub.ktumblr.api.request.user.UserDashboardRequest): Promise<work.socialhub.ktumblr.api.response.Response<work.socialhub.ktumblr.api.response.Body<work.socialhub.ktumblr.api.response.user.UserDashboardResponse>>>;
        userFollowing(request: work.socialhub.ktumblr.api.request.user.UserFollowingRequest): Promise<work.socialhub.ktumblr.api.response.Response<work.socialhub.ktumblr.api.response.Body<work.socialhub.ktumblr.api.response.user.UserFollowingResponse>>>;
        userLikes(request: work.socialhub.ktumblr.api.request.user.UserLikesRequest): Promise<work.socialhub.ktumblr.api.response.Response<work.socialhub.ktumblr.api.response.Body<work.socialhub.ktumblr.api.response.user.UserLikesResponse>>>;
        like(request: work.socialhub.ktumblr.api.request.user.UserLikeRequest): work.socialhub.ktumblr.api.response.ResponseUnit;
        unlike(request: work.socialhub.ktumblr.api.request.user.UserUnlikeRequest): work.socialhub.ktumblr.api.response.ResponseUnit;
        follow(request: work.socialhub.ktumblr.api.request.user.UserFollowRequest): work.socialhub.ktumblr.api.response.ResponseUnit;
        unfollow(request: work.socialhub.ktumblr.api.request.user.UserUnfollowRequest): work.socialhub.ktumblr.api.response.ResponseUnit;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.ktumblr.api.UserResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.ktumblr.api.request {
    class FileRequest {
        constructor(name: string, data: Int8Array);
        get name(): string;
        get data(): Int8Array;
    }
    namespace FileRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FileRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.auth {
    class AuthAuthorizeUrlRequest /* implements work.socialhub.ktumblr.api.request.MapRequest */ {
        constructor();
        get responseType(): string;
        set responseType(value: string);
        get redirectUri(): Nullable<string>;
        set redirectUri(value: Nullable<string>);
        get state(): Nullable<string>;
        set state(value: Nullable<string>);
        get scope(): string;
        set scope(value: string);
    }
    namespace AuthAuthorizeUrlRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AuthAuthorizeUrlRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.auth {
    class AuthOAuth2TokenRefreshRequest /* implements work.socialhub.ktumblr.api.request.MapRequest */ {
        constructor();
        get grantType(): string;
        set grantType(value: string);
        get clientId(): Nullable<string>;
        set clientId(value: Nullable<string>);
        get clientSecret(): Nullable<string>;
        set clientSecret(value: Nullable<string>);
        get refreshToken(): Nullable<string>;
        set refreshToken(value: Nullable<string>);
    }
    namespace AuthOAuth2TokenRefreshRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AuthOAuth2TokenRefreshRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.auth {
    class AuthOAuth2TokenRequest /* implements work.socialhub.ktumblr.api.request.MapRequest */ {
        constructor();
        get grantType(): string;
        set grantType(value: string);
        get code(): Nullable<string>;
        set code(value: Nullable<string>);
        get clientId(): Nullable<string>;
        set clientId(value: Nullable<string>);
        get clientSecret(): Nullable<string>;
        set clientSecret(value: Nullable<string>);
        get redirectUri(): Nullable<string>;
        set redirectUri(value: Nullable<string>);
    }
    namespace AuthOAuth2TokenRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AuthOAuth2TokenRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.blog {
    class BlogAvatarRequest {
        constructor();
        get blogName(): Nullable<string>;
        set blogName(value: Nullable<string>);
        get size(): Nullable<number>;
        set size(value: Nullable<number>);
    }
    namespace BlogAvatarRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlogAvatarRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.blog {
    class BlogDraftsRequest /* implements work.socialhub.ktumblr.api.request.MapRequest */ {
        constructor();
        get blogName(): Nullable<string>;
        set blogName(value: Nullable<string>);
        get beforeId(): Nullable<number>;
        set beforeId(value: Nullable<number>);
        get filter(): Nullable<string>;
        set filter(value: Nullable<string>);
    }
    namespace BlogDraftsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlogDraftsRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.blog {
    class BlogFollowersRequest /* implements work.socialhub.ktumblr.api.request.MapRequest */ {
        constructor();
        get blogName(): Nullable<string>;
        set blogName(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get offset(): Nullable<number>;
        set offset(value: Nullable<number>);
    }
    namespace BlogFollowersRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlogFollowersRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.blog {
    class BlogFollowingRequest /* implements work.socialhub.ktumblr.api.request.MapRequest */ {
        constructor();
        get blogName(): Nullable<string>;
        set blogName(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get offset(): Nullable<number>;
        set offset(value: Nullable<number>);
    }
    namespace BlogFollowingRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlogFollowingRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.blog {
    class BlogInfoRequest {
        constructor();
        get blogName(): Nullable<string>;
        set blogName(value: Nullable<string>);
    }
    namespace BlogInfoRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlogInfoRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.blog {
    class BlogLikesRequest /* implements work.socialhub.ktumblr.api.request.MapRequest */ {
        constructor();
        get blogName(): Nullable<string>;
        set blogName(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get offset(): Nullable<number>;
        set offset(value: Nullable<number>);
        get before(): Nullable<number>;
        set before(value: Nullable<number>);
        get after(): Nullable<number>;
        set after(value: Nullable<number>);
    }
    namespace BlogLikesRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlogLikesRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.blog {
    class BlogPostsRequest /* implements work.socialhub.ktumblr.api.request.MapRequest */ {
        constructor();
        get blogName(): Nullable<string>;
        set blogName(value: Nullable<string>);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get id(): Nullable<number>;
        set id(value: Nullable<number>);
        get tag(): Nullable<string>;
        set tag(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get offset(): Nullable<number>;
        set offset(value: Nullable<number>);
        get reblogInfo(): Nullable<boolean>;
        set reblogInfo(value: Nullable<boolean>);
        get notesInfo(): Nullable<boolean>;
        set notesInfo(value: Nullable<boolean>);
        get filter(): Nullable<string>;
        set filter(value: Nullable<string>);
        get before(): Nullable<number>;
        set before(value: Nullable<number>);
        get npf(): Nullable<boolean>;
        set npf(value: Nullable<boolean>);
    }
    namespace BlogPostsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlogPostsRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.blog {
    class BlogQueueRequest /* implements work.socialhub.ktumblr.api.request.MapRequest */ {
        constructor();
        get blogName(): Nullable<string>;
        set blogName(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get offset(): Nullable<number>;
        set offset(value: Nullable<number>);
        get filter(): Nullable<string>;
        set filter(value: Nullable<string>);
    }
    namespace BlogQueueRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlogQueueRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.blog {
    class BlogSubmissionsRequest /* implements work.socialhub.ktumblr.api.request.MapRequest */ {
        constructor();
        get blogName(): Nullable<string>;
        set blogName(value: Nullable<string>);
        get offset(): Nullable<string>;
        set offset(value: Nullable<string>);
        get filter(): Nullable<string>;
        set filter(value: Nullable<string>);
    }
    namespace BlogSubmissionsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlogSubmissionsRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.blog.post {
    class BlogAudioPostRequest extends work.socialhub.ktumblr.api.request.blog.post.BlogPostRequest.$metadata$.constructor /* implements work.socialhub.ktumblr.api.request.MapRequest */ {
        constructor();
        get caption(): Nullable<string>;
        set caption(value: Nullable<string>);
        get externalUrl(): Nullable<string>;
        set externalUrl(value: Nullable<string>);
        get data(): Nullable<string>;
        set data(value: Nullable<string>);
    }
    namespace BlogAudioPostRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlogAudioPostRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.blog.post {
    class BlogChatPostRequest extends work.socialhub.ktumblr.api.request.blog.post.BlogPostRequest.$metadata$.constructor /* implements work.socialhub.ktumblr.api.request.MapRequest */ {
        constructor();
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get conversation(): Nullable<string>;
        set conversation(value: Nullable<string>);
    }
    namespace BlogChatPostRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlogChatPostRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.blog.post {
    class BlogDeleteRequest /* implements work.socialhub.ktumblr.api.request.MapRequest */ {
        constructor();
        get blogName(): Nullable<string>;
        set blogName(value: Nullable<string>);
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
    }
    namespace BlogDeleteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlogDeleteRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.blog.post {
    class BlogLinkPostRequest extends work.socialhub.ktumblr.api.request.blog.post.BlogPostRequest.$metadata$.constructor /* implements work.socialhub.ktumblr.api.request.MapRequest */ {
        constructor();
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get thumbnail(): Nullable<string>;
        set thumbnail(value: Nullable<string>);
        get excerpt(): Nullable<string>;
        set excerpt(value: Nullable<string>);
        get author(): Nullable<string>;
        set author(value: Nullable<string>);
    }
    namespace BlogLinkPostRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlogLinkPostRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.blog.post {
    class BlogPhotoPostRequest extends work.socialhub.ktumblr.api.request.blog.post.BlogPostRequest.$metadata$.constructor /* implements work.socialhub.ktumblr.api.request.MapRequest */ {
        constructor();
        get caption(): Nullable<string>;
        set caption(value: Nullable<string>);
        get link(): Nullable<string>;
        set link(value: Nullable<string>);
        get source(): Nullable<string>;
        set source(value: Nullable<string>);
        get data(): Nullable<Array<work.socialhub.ktumblr.api.request.FileRequest>>;
        set data(value: Nullable<Array<work.socialhub.ktumblr.api.request.FileRequest>>);
        get data64(): Nullable<string>;
        set data64(value: Nullable<string>);
    }
    namespace BlogPhotoPostRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlogPhotoPostRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.blog.post {
    class BlogPostRequest {
        constructor();
        get blogName(): Nullable<string>;
        set blogName(value: Nullable<string>);
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get state(): Nullable<string>;
        set state(value: Nullable<string>);
        get tags(): Nullable<string>;
        set tags(value: Nullable<string>);
        get tweet(): Nullable<string>;
        set tweet(value: Nullable<string>);
        get date(): Nullable<string>;
        set date(value: Nullable<string>);
        get format(): Nullable<string>;
        set format(value: Nullable<string>);
        get slug(): Nullable<string>;
        set slug(value: Nullable<string>);
        get nativeInlineImages(): Nullable<boolean>;
        set nativeInlineImages(value: Nullable<boolean>);
    }
    namespace BlogPostRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlogPostRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.blog.post {
    class BlogQuotePostRequest extends work.socialhub.ktumblr.api.request.blog.post.BlogPostRequest.$metadata$.constructor /* implements work.socialhub.ktumblr.api.request.MapRequest */ {
        constructor();
        get quote(): Nullable<string>;
        set quote(value: Nullable<string>);
        get source(): Nullable<string>;
        set source(value: Nullable<string>);
    }
    namespace BlogQuotePostRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlogQuotePostRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.blog.post {
    class BlogReblogRequest /* implements work.socialhub.ktumblr.api.request.MapRequest */ {
        constructor();
        get blogName(): Nullable<string>;
        set blogName(value: Nullable<string>);
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get reblogKey(): Nullable<string>;
        set reblogKey(value: Nullable<string>);
        get comment(): Nullable<string>;
        set comment(value: Nullable<string>);
        get nativeInlineImages(): Nullable<boolean>;
        set nativeInlineImages(value: Nullable<boolean>);
    }
    namespace BlogReblogRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlogReblogRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.blog.post {
    class BlogTextPostRequest extends work.socialhub.ktumblr.api.request.blog.post.BlogPostRequest.$metadata$.constructor /* implements work.socialhub.ktumblr.api.request.MapRequest */ {
        constructor();
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get body(): Nullable<string>;
        set body(value: Nullable<string>);
    }
    namespace BlogTextPostRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlogTextPostRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.blog.post {
    class BlogVideoPostRequest extends work.socialhub.ktumblr.api.request.blog.post.BlogPostRequest.$metadata$.constructor /* implements work.socialhub.ktumblr.api.request.MapRequest */ {
        constructor();
        get caption(): Nullable<string>;
        set caption(value: Nullable<string>);
        get embed(): Nullable<string>;
        set embed(value: Nullable<string>);
        get data(): Nullable<string>;
        set data(value: Nullable<string>);
    }
    namespace BlogVideoPostRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlogVideoPostRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.tagged {
    class TaggedRequest /* implements work.socialhub.ktumblr.api.request.MapRequest */ {
        constructor();
        get tag(): Nullable<string>;
        set tag(value: Nullable<string>);
        get before(): Nullable<number>;
        set before(value: Nullable<number>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get filter(): Nullable<string>;
        set filter(value: Nullable<string>);
    }
    namespace TaggedRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TaggedRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.user {
    class UserDashboardRequest /* implements work.socialhub.ktumblr.api.request.MapRequest */ {
        constructor();
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get offset(): Nullable<number>;
        set offset(value: Nullable<number>);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get sinceId(): Nullable<number>;
        set sinceId(value: Nullable<number>);
        get reblogInfo(): Nullable<boolean>;
        set reblogInfo(value: Nullable<boolean>);
        get notesInfo(): Nullable<boolean>;
        set notesInfo(value: Nullable<boolean>);
        get npf(): Nullable<boolean>;
        set npf(value: Nullable<boolean>);
    }
    namespace UserDashboardRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UserDashboardRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.user {
    class UserFollowRequest /* implements work.socialhub.ktumblr.api.request.MapRequest */ {
        constructor();
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get email(): Nullable<string>;
        set email(value: Nullable<string>);
    }
    namespace UserFollowRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UserFollowRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.user {
    class UserFollowingRequest /* implements work.socialhub.ktumblr.api.request.MapRequest */ {
        constructor();
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get offset(): Nullable<number>;
        set offset(value: Nullable<number>);
    }
    namespace UserFollowingRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UserFollowingRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.user {
    class UserLikeRequest /* implements work.socialhub.ktumblr.api.request.MapRequest */ {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get reblogKey(): Nullable<string>;
        set reblogKey(value: Nullable<string>);
    }
    namespace UserLikeRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UserLikeRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.user {
    class UserLikesRequest /* implements work.socialhub.ktumblr.api.request.MapRequest */ {
        constructor();
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get offset(): Nullable<number>;
        set offset(value: Nullable<number>);
        get before(): Nullable<number>;
        set before(value: Nullable<number>);
        get after(): Nullable<number>;
        set after(value: Nullable<number>);
    }
    namespace UserLikesRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UserLikesRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.user {
    class UserUnfollowRequest /* implements work.socialhub.ktumblr.api.request.MapRequest */ {
        constructor();
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
    }
    namespace UserUnfollowRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UserUnfollowRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.request.user {
    class UserUnlikeRequest /* implements work.socialhub.ktumblr.api.request.MapRequest */ {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get reblogKey(): Nullable<string>;
        set reblogKey(value: Nullable<string>);
    }
    namespace UserUnlikeRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UserUnlikeRequest;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.response {
    class Body<T> {
        constructor();
        get meta(): Nullable<work.socialhub.ktumblr.api.response.Meta>;
        set meta(value: Nullable<work.socialhub.ktumblr.api.response.Meta>);
        get response(): Nullable<T>;
        set response(value: Nullable<T>);
    }
    namespace Body {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new <T>() => Body<T>;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.response {
    class Meta {
        constructor();
        get status(): Nullable<number>;
        set status(value: Nullable<number>);
        get msg(): Nullable<string>;
        set msg(value: Nullable<string>);
    }
    namespace Meta {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Meta;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.response {
    class Response<T> {
        constructor(data: T, json: string, status?: Nullable<number>, message?: Nullable<string>);
        get data(): T;
        set data(value: T);
        get json(): string;
        set json(value: string);
        get status(): Nullable<number>;
        get message(): Nullable<string>;
        copy(data?: T, json?: string, status?: Nullable<number>, message?: Nullable<string>): Promise<work.socialhub.ktumblr.api.response.Response<T>>;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace Response {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new <T>() => Response<T>;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.response {
    class ResponseUnit {
        constructor(json: string, status?: Nullable<number>, message?: Nullable<string>);
        get json(): string;
        set json(value: string);
        get status(): Nullable<number>;
        get message(): Nullable<string>;
    }
    namespace ResponseUnit {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ResponseUnit;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.response.auth {
    class AuthOAuth2TokenResponse {
        constructor();
        get accessToken(): Nullable<string>;
        set accessToken(value: Nullable<string>);
        get expiresIn(): Nullable<number>;
        set expiresIn(value: Nullable<number>);
        get tokenType(): Nullable<string>;
        set tokenType(value: Nullable<string>);
        get scope(): Nullable<string>;
        set scope(value: Nullable<string>);
        get refreshToken(): Nullable<string>;
        set refreshToken(value: Nullable<string>);
    }
    namespace AuthOAuth2TokenResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AuthOAuth2TokenResponse;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.response.blog {
    class BlogFollowersResponse {
        constructor();
        get totalUsers(): Nullable<number>;
        set totalUsers(value: Nullable<number>);
        get users(): Nullable<Array<work.socialhub.ktumblr.entity.user.FollowerUser>>;
        set users(value: Nullable<Array<work.socialhub.ktumblr.entity.user.FollowerUser>>);
    }
    namespace BlogFollowersResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlogFollowersResponse;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.response.blog {
    class BlogFollowingResponse {
        constructor();
        get blogs(): Nullable<Array<work.socialhub.ktumblr.entity.blog.Blog>>;
        set blogs(value: Nullable<Array<work.socialhub.ktumblr.entity.blog.Blog>>);
        get totalBlogs(): Nullable<number>;
        set totalBlogs(value: Nullable<number>);
    }
    namespace BlogFollowingResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlogFollowingResponse;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.response.blog {
    class BlogInfoResponse {
        constructor();
        get blog(): Nullable<work.socialhub.ktumblr.entity.blog.Blog>;
        set blog(value: Nullable<work.socialhub.ktumblr.entity.blog.Blog>);
    }
    namespace BlogInfoResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlogInfoResponse;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.response.blog {
    class BlogLikesResponse {
        constructor();
        get likedPosts(): Nullable<Array<work.socialhub.ktumblr.entity.post.Post>>;
        set likedPosts(value: Nullable<Array<work.socialhub.ktumblr.entity.post.Post>>);
        get likedCount(): Nullable<number>;
        set likedCount(value: Nullable<number>);
    }
    namespace BlogLikesResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlogLikesResponse;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.response.blog {
    class BlogPostsResponse {
        constructor();
        get blog(): Nullable<work.socialhub.ktumblr.entity.blog.Blog>;
        set blog(value: Nullable<work.socialhub.ktumblr.entity.blog.Blog>);
        get posts(): Nullable<Array<work.socialhub.ktumblr.entity.post.Post>>;
        set posts(value: Nullable<Array<work.socialhub.ktumblr.entity.post.Post>>);
        get totalPosts(): Nullable<number>;
        set totalPosts(value: Nullable<number>);
    }
    namespace BlogPostsResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlogPostsResponse;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.response.user {
    class UserDashboardResponse {
        constructor();
        get posts(): Nullable<Array<work.socialhub.ktumblr.entity.post.Post>>;
        set posts(value: Nullable<Array<work.socialhub.ktumblr.entity.post.Post>>);
    }
    namespace UserDashboardResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UserDashboardResponse;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.response.user {
    class UserFollowingResponse {
        constructor();
        get totalBlog(): Nullable<number>;
        set totalBlog(value: Nullable<number>);
        get blogs(): Nullable<Array<work.socialhub.ktumblr.entity.blog.Blog>>;
        set blogs(value: Nullable<Array<work.socialhub.ktumblr.entity.blog.Blog>>);
    }
    namespace UserFollowingResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UserFollowingResponse;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.response.user {
    class UserLikesResponse {
        constructor();
        get likedPosts(): Nullable<Array<work.socialhub.ktumblr.entity.post.Post>>;
        set likedPosts(value: Nullable<Array<work.socialhub.ktumblr.entity.post.Post>>);
        get likedCount(): Nullable<number>;
        set likedCount(value: Nullable<number>);
    }
    namespace UserLikesResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UserLikesResponse;
        }
    }
}
export declare namespace work.socialhub.ktumblr.api.response.user {
    class UserResponse {
        constructor();
        get user(): Nullable<work.socialhub.ktumblr.entity.user.User>;
        set user(value: Nullable<work.socialhub.ktumblr.entity.user.User>);
    }
    namespace UserResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UserResponse;
        }
    }
}
export declare namespace work.socialhub.ktumblr.define {
    abstract class PhotoType {
        private constructor();
        static get SOURCE(): work.socialhub.ktumblr.define.PhotoType & {
            get name(): "SOURCE";
            get ordinal(): 0;
        };
        static get FILE(): work.socialhub.ktumblr.define.PhotoType & {
            get name(): "FILE";
            get ordinal(): 1;
        };
        get name(): "SOURCE" | "FILE";
        get ordinal(): 0 | 1;
        get prefix(): string;
        static values(): Array<work.socialhub.ktumblr.define.PhotoType>;
        static valueOf(value: string): work.socialhub.ktumblr.define.PhotoType;
    }
    namespace PhotoType {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PhotoType;
        }
    }
}
export declare namespace work.socialhub.ktumblr.define {
    abstract class PostType {
        private constructor();
        static get TEXT(): work.socialhub.ktumblr.define.PostType & {
            get name(): "TEXT";
            get ordinal(): 0;
        };
        static get PHOTO(): work.socialhub.ktumblr.define.PostType & {
            get name(): "PHOTO";
            get ordinal(): 1;
        };
        static get QUOTE(): work.socialhub.ktumblr.define.PostType & {
            get name(): "QUOTE";
            get ordinal(): 2;
        };
        static get LINK(): work.socialhub.ktumblr.define.PostType & {
            get name(): "LINK";
            get ordinal(): 3;
        };
        static get CHAT(): work.socialhub.ktumblr.define.PostType & {
            get name(): "CHAT";
            get ordinal(): 4;
        };
        static get AUDIO(): work.socialhub.ktumblr.define.PostType & {
            get name(): "AUDIO";
            get ordinal(): 5;
        };
        static get VIDEO(): work.socialhub.ktumblr.define.PostType & {
            get name(): "VIDEO";
            get ordinal(): 6;
        };
        static get ANSWER(): work.socialhub.ktumblr.define.PostType & {
            get name(): "ANSWER";
            get ordinal(): 7;
        };
        static get POSTCARD(): work.socialhub.ktumblr.define.PostType & {
            get name(): "POSTCARD";
            get ordinal(): 8;
        };
        static get UNKNOWN(): work.socialhub.ktumblr.define.PostType & {
            get name(): "UNKNOWN";
            get ordinal(): 9;
        };
        get name(): "TEXT" | "PHOTO" | "QUOTE" | "LINK" | "CHAT" | "AUDIO" | "VIDEO" | "ANSWER" | "POSTCARD" | "UNKNOWN";
        get ordinal(): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
        get value(): string;
        static values(): Array<work.socialhub.ktumblr.define.PostType>;
        static valueOf(value: string): work.socialhub.ktumblr.define.PostType;
    }
    namespace PostType {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PostType;
        }
    }
}
export declare namespace work.socialhub.ktumblr.entity {
    class Note {
        constructor();
        get type(): Nullable<string>;
        get timestamp(): Nullable<number>;
        get blogName(): Nullable<string>;
        get blogUuid(): Nullable<string>;
        get blogUrl(): Nullable<string>;
        get isFollowed(): Nullable<boolean>;
        get avatarShape(): Nullable<string>;
        get postId(): Nullable<string>;
        get reblogParentBlogName(): Nullable<string>;
    }
    namespace Note {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Note;
        }
    }
}
export declare namespace work.socialhub.ktumblr.entity {
    class NoteAvatar {
        constructor();
        get size64(): Nullable<string>;
        set size64(value: Nullable<string>);
        get size128(): Nullable<string>;
        set size128(value: Nullable<string>);
    }
    namespace NoteAvatar {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NoteAvatar;
        }
    }
}
export declare namespace work.socialhub.ktumblr.entity.blog {
    class Blog /* extends work.socialhub.ktumblr.entity.Resource */ {
        constructor();
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get postCount(): number;
        set postCount(value: number);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get updated(): Nullable<number>;
        set updated(value: Nullable<number>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get isAsk(): Nullable<boolean>;
        set isAsk(value: Nullable<boolean>);
        get isAskAnon(): Nullable<boolean>;
        set isAskAnon(value: Nullable<boolean>);
        get isFollowed(): Nullable<boolean>;
        set isFollowed(value: Nullable<boolean>);
        get likeCount(): Nullable<number>;
        get isBlockedFromPrimary(): Nullable<boolean>;
        get avatar(): Nullable<Array<work.socialhub.ktumblr.entity.blog.BlogAvatar>>;
        get url(): Nullable<string>;
        get theme(): Nullable<work.socialhub.ktumblr.entity.blog.BlogTheme>;
        get isAdmin(): Nullable<boolean>;
        get askPageTitle(): Nullable<string>;
        get isNSFW(): Nullable<boolean>;
        get isPrimary(): Nullable<boolean>;
        get followerCount(): Nullable<number>;
    }
    namespace Blog {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Blog;
        }
    }
}
export declare namespace work.socialhub.ktumblr.entity.blog {
    class BlogAvatar {
        constructor();
        get width(): Nullable<number>;
        set width(value: Nullable<number>);
        get height(): Nullable<number>;
        set height(value: Nullable<number>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
    }
    namespace BlogAvatar {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlogAvatar;
        }
    }
}
export declare namespace work.socialhub.ktumblr.entity.blog {
    class BlogTheme {
        constructor();
        get avatarShape(): Nullable<string>;
        set avatarShape(value: Nullable<string>);
        get backgroundColor(): Nullable<string>;
        set backgroundColor(value: Nullable<string>);
        get bodyFont(): Nullable<string>;
        set bodyFont(value: Nullable<string>);
        get headerImage(): Nullable<string>;
        set headerImage(value: Nullable<string>);
        get headerImageFocused(): Nullable<string>;
        set headerImageFocused(value: Nullable<string>);
        get headerImagePoster(): Nullable<string>;
        set headerImagePoster(value: Nullable<string>);
        get headerImageScaled(): Nullable<string>;
        set headerImageScaled(value: Nullable<string>);
        get isHeaderStretch(): boolean;
        set isHeaderStretch(value: boolean);
        get linkColor(): Nullable<string>;
        get isShowAvatar(): boolean;
        get isShowDescription(): boolean;
        get isShowHeaderImage(): boolean;
        get isShowTitle(): boolean;
        get titleColor(): Nullable<string>;
        get titleFont(): Nullable<string>;
        get titleFontWeight(): Nullable<string>;
    }
    namespace BlogTheme {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlogTheme;
        }
    }
}
export declare namespace work.socialhub.ktumblr.entity.blog {
    class Reblog {
        constructor();
        get comment(): Nullable<string>;
        set comment(value: Nullable<string>);
        get treeHtml(): Nullable<string>;
        set treeHtml(value: Nullable<string>);
    }
    namespace Reblog {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Reblog;
        }
    }
}
export declare namespace work.socialhub.ktumblr.entity.post {
    abstract class Post {
        constructor();
        get asLegacyTextPost(): Nullable<work.socialhub.ktumblr.entity.post.Post>/* Nullable<work.socialhub.ktumblr.entity.post.legacy.LegacyTextPost> */;
        get asLegacyPhotoPost(): Nullable<work.socialhub.ktumblr.entity.post.legacy.LegacyPhotoPost>;
        get asLegacyQuotePost(): Nullable<work.socialhub.ktumblr.entity.post.legacy.LegacyQuotePost>;
        get asLegacyLinkPost(): Nullable<work.socialhub.ktumblr.entity.post.legacy.LegacyLinkPost>;
        get asLegacyVideoPost(): Nullable<work.socialhub.ktumblr.entity.post.legacy.LegacyVideoPost>;
        get asLegacyAnswerPost(): Nullable<work.socialhub.ktumblr.entity.post.legacy.LegacyAnswerPost>;
        abstract get blogName(): Nullable<string>;
        abstract set blogName(value: Nullable<string>);
        abstract get idString(): Nullable<string>;
        abstract set idString(value: Nullable<string>);
        abstract get genesisPostId(): Nullable<string>;
        abstract set genesisPostId(value: Nullable<string>);
        abstract get postUrl(): Nullable<string>;
        abstract set postUrl(value: Nullable<string>);
        abstract get parentPostUrl(): Nullable<string>;
        abstract set parentPostUrl(value: Nullable<string>);
        abstract get type(): Nullable<string>;
        abstract set type(value: Nullable<string>);
        abstract get timestamp(): Nullable<number>;
        abstract set timestamp(value: Nullable<number>);
        abstract get date(): Nullable<string>;
        abstract set date(value: Nullable<string>);
        abstract get format(): Nullable<string>;
        abstract set format(value: Nullable<string>);
        abstract get reblogKey(): Nullable<string>;
        abstract set reblogKey(value: Nullable<string>);
        abstract get tags(): Nullable<Array<string>>;
        abstract set tags(value: Nullable<Array<string>>);
        abstract get isBookmarklet(): Nullable<boolean>;
        abstract set isBookmarklet(value: Nullable<boolean>);
        abstract get isMobile(): Nullable<boolean>;
        abstract set isMobile(value: Nullable<boolean>);
        abstract get sourceUrl(): Nullable<string>;
        abstract set sourceUrl(value: Nullable<string>);
        abstract get sourceTitle(): Nullable<string>;
        abstract set sourceTitle(value: Nullable<string>);
        abstract get isLiked(): Nullable<boolean>;
        abstract set isLiked(value: Nullable<boolean>);
        abstract get state(): Nullable<string>;
        abstract set state(value: Nullable<string>);
        abstract get title(): Nullable<string>;
        abstract set title(value: Nullable<string>);
        abstract get body(): Nullable<string>;
        abstract set body(value: Nullable<string>);
        abstract get noteCount(): Nullable<number>;
        abstract set noteCount(value: Nullable<number>);
        abstract get summary(): Nullable<string>;
        abstract set summary(value: Nullable<string>);
        abstract get slug(): Nullable<string>;
        abstract set slug(value: Nullable<string>);
        abstract get rebloggedFromId(): Nullable<string>;
        abstract set rebloggedFromId(value: Nullable<string>);
        abstract get rebloggedFromUrl(): Nullable<string>;
        abstract set rebloggedFromUrl(value: Nullable<string>);
        abstract get rebloggedFromName(): Nullable<string>;
        abstract set rebloggedFromName(value: Nullable<string>);
        abstract get rebloggedFromTitle(): Nullable<string>;
        abstract set rebloggedFromTitle(value: Nullable<string>);
        abstract get rebloggedFromUuid(): Nullable<string>;
        abstract set rebloggedFromUuid(value: Nullable<string>);
        abstract get rebloggedFromCanMessage(): Nullable<boolean>;
        abstract set rebloggedFromCanMessage(value: Nullable<boolean>);
        abstract get rebloggedFromFollowing(): Nullable<boolean>;
        abstract set rebloggedFromFollowing(value: Nullable<boolean>);
        abstract get rebloggedRootId(): Nullable<string>;
        abstract set rebloggedRootId(value: Nullable<string>);
        abstract get rebloggedRootUrl(): Nullable<string>;
        abstract set rebloggedRootUrl(value: Nullable<string>);
        abstract get rebloggedRootName(): Nullable<string>;
        abstract set rebloggedRootName(value: Nullable<string>);
        abstract get rebloggedRootTitle(): Nullable<string>;
        abstract set rebloggedRootTitle(value: Nullable<string>);
        abstract get rebloggedRootUuid(): Nullable<string>;
        abstract set rebloggedRootUuid(value: Nullable<string>);
        abstract get rebloggedRootCanMessage(): Nullable<boolean>;
        abstract set rebloggedRootCanMessage(value: Nullable<boolean>);
        abstract get rebloggedRootFollowing(): Nullable<boolean>;
        abstract set rebloggedRootFollowing(value: Nullable<boolean>);
        abstract get notes(): Nullable<Array<work.socialhub.ktumblr.entity.Note>>;
        abstract set notes(value: Nullable<Array<work.socialhub.ktumblr.entity.Note>>);
        abstract get blog(): Nullable<work.socialhub.ktumblr.entity.blog.Blog>;
        abstract set blog(value: Nullable<work.socialhub.ktumblr.entity.blog.Blog>);
        abstract get reblog(): Nullable<work.socialhub.ktumblr.entity.blog.Reblog>;
        abstract set reblog(value: Nullable<work.socialhub.ktumblr.entity.blog.Reblog>);
        abstract get trail(): Nullable<Array<work.socialhub.ktumblr.entity.trail.Trail>>;
        abstract set trail(value: Nullable<Array<work.socialhub.ktumblr.entity.trail.Trail>>);
    }
    namespace Post {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Post;
        }
    }
}
export declare namespace work.socialhub.ktumblr.entity.post.legacy {
    class LegacyAnswerPost extends work.socialhub.ktumblr.entity.post.Post.$metadata$.constructor {
        constructor(blogName: Nullable<string>, idString: Nullable<string>, genesisPostId: Nullable<string>, postUrl: Nullable<string>, parentPostUrl: Nullable<string>, type: Nullable<string>, timestamp: Nullable<number>, date: Nullable<string>, format: Nullable<string>, reblogKey: Nullable<string>, tags: Nullable<Array<string>>, isBookmarklet: Nullable<boolean>, isMobile: Nullable<boolean>, sourceUrl: Nullable<string>, sourceTitle: Nullable<string>, isLiked: Nullable<boolean>, state: Nullable<string>, title: Nullable<string>, body: Nullable<string>, noteCount: Nullable<number>, summary: Nullable<string>, slug: Nullable<string>, rebloggedFromId: Nullable<string>, rebloggedFromUrl: Nullable<string>, rebloggedFromName: Nullable<string>, rebloggedFromTitle: Nullable<string>, rebloggedFromUuid: Nullable<string>, rebloggedFromCanMessage: Nullable<boolean>, rebloggedFromFollowing: Nullable<boolean>, rebloggedRootId: Nullable<string>, rebloggedRootUrl: Nullable<string>, rebloggedRootName: Nullable<string>, rebloggedRootTitle: Nullable<string>, rebloggedRootUuid: Nullable<string>, rebloggedRootCanMessage: Nullable<boolean>, rebloggedRootFollowing: Nullable<boolean>, notes: Nullable<Array<work.socialhub.ktumblr.entity.Note>>, blog: Nullable<work.socialhub.ktumblr.entity.blog.Blog>, reblog: Nullable<work.socialhub.ktumblr.entity.blog.Reblog>, trail: Nullable<Array<work.socialhub.ktumblr.entity.trail.Trail>>);
        get blogName(): Nullable<string>;
        set blogName(value: Nullable<string>);
        get idString(): Nullable<string>;
        set idString(value: Nullable<string>);
        get genesisPostId(): Nullable<string>;
        set genesisPostId(value: Nullable<string>);
        get postUrl(): Nullable<string>;
        set postUrl(value: Nullable<string>);
        get parentPostUrl(): Nullable<string>;
        set parentPostUrl(value: Nullable<string>);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get timestamp(): Nullable<number>;
        set timestamp(value: Nullable<number>);
        get date(): Nullable<string>;
        set date(value: Nullable<string>);
        get format(): Nullable<string>;
        set format(value: Nullable<string>);
        get reblogKey(): Nullable<string>;
        set reblogKey(value: Nullable<string>);
        get tags(): Nullable<Array<string>>;
        set tags(value: Nullable<Array<string>>);
        get isBookmarklet(): Nullable<boolean>;
        set isBookmarklet(value: Nullable<boolean>);
        get isMobile(): Nullable<boolean>;
        set isMobile(value: Nullable<boolean>);
        get sourceUrl(): Nullable<string>;
        set sourceUrl(value: Nullable<string>);
        get sourceTitle(): Nullable<string>;
        set sourceTitle(value: Nullable<string>);
        get isLiked(): Nullable<boolean>;
        set isLiked(value: Nullable<boolean>);
        get state(): Nullable<string>;
        set state(value: Nullable<string>);
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get body(): Nullable<string>;
        set body(value: Nullable<string>);
        get noteCount(): Nullable<number>;
        set noteCount(value: Nullable<number>);
        get summary(): Nullable<string>;
        set summary(value: Nullable<string>);
        get slug(): Nullable<string>;
        set slug(value: Nullable<string>);
        get rebloggedFromId(): Nullable<string>;
        set rebloggedFromId(value: Nullable<string>);
        get rebloggedFromUrl(): Nullable<string>;
        set rebloggedFromUrl(value: Nullable<string>);
        get rebloggedFromName(): Nullable<string>;
        set rebloggedFromName(value: Nullable<string>);
        get rebloggedFromTitle(): Nullable<string>;
        set rebloggedFromTitle(value: Nullable<string>);
        get rebloggedFromUuid(): Nullable<string>;
        set rebloggedFromUuid(value: Nullable<string>);
        get rebloggedFromCanMessage(): Nullable<boolean>;
        set rebloggedFromCanMessage(value: Nullable<boolean>);
        get rebloggedFromFollowing(): Nullable<boolean>;
        set rebloggedFromFollowing(value: Nullable<boolean>);
        get rebloggedRootId(): Nullable<string>;
        set rebloggedRootId(value: Nullable<string>);
        get rebloggedRootUrl(): Nullable<string>;
        set rebloggedRootUrl(value: Nullable<string>);
        get rebloggedRootName(): Nullable<string>;
        set rebloggedRootName(value: Nullable<string>);
        get rebloggedRootTitle(): Nullable<string>;
        set rebloggedRootTitle(value: Nullable<string>);
        get rebloggedRootUuid(): Nullable<string>;
        set rebloggedRootUuid(value: Nullable<string>);
        get rebloggedRootCanMessage(): Nullable<boolean>;
        set rebloggedRootCanMessage(value: Nullable<boolean>);
        get rebloggedRootFollowing(): Nullable<boolean>;
        set rebloggedRootFollowing(value: Nullable<boolean>);
        get notes(): Nullable<Array<work.socialhub.ktumblr.entity.Note>>;
        set notes(value: Nullable<Array<work.socialhub.ktumblr.entity.Note>>);
        get blog(): Nullable<work.socialhub.ktumblr.entity.blog.Blog>;
        set blog(value: Nullable<work.socialhub.ktumblr.entity.blog.Blog>);
        get reblog(): Nullable<work.socialhub.ktumblr.entity.blog.Reblog>;
        set reblog(value: Nullable<work.socialhub.ktumblr.entity.blog.Reblog>);
        get trail(): Nullable<Array<work.socialhub.ktumblr.entity.trail.Trail>>;
        set trail(value: Nullable<Array<work.socialhub.ktumblr.entity.trail.Trail>>);
        get askingName(): Nullable<string>;
        get askingUrl(): Nullable<string>;
        get question(): Nullable<string>;
        get answer(): Nullable<string>;
    }
    namespace LegacyAnswerPost {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => LegacyAnswerPost;
        }
    }
}
export declare namespace work.socialhub.ktumblr.entity.post.legacy {
    class LegacyAudioPost extends work.socialhub.ktumblr.entity.post.Post.$metadata$.constructor {
        constructor(blogName: Nullable<string>, idString: Nullable<string>, genesisPostId: Nullable<string>, postUrl: Nullable<string>, parentPostUrl: Nullable<string>, type: Nullable<string>, timestamp: Nullable<number>, date: Nullable<string>, format: Nullable<string>, reblogKey: Nullable<string>, tags: Nullable<Array<string>>, isBookmarklet: Nullable<boolean>, isMobile: Nullable<boolean>, sourceUrl: Nullable<string>, sourceTitle: Nullable<string>, isLiked: Nullable<boolean>, state: Nullable<string>, title: Nullable<string>, body: Nullable<string>, noteCount: Nullable<number>, summary: Nullable<string>, slug: Nullable<string>, rebloggedFromId: Nullable<string>, rebloggedFromUrl: Nullable<string>, rebloggedFromName: Nullable<string>, rebloggedFromTitle: Nullable<string>, rebloggedFromUuid: Nullable<string>, rebloggedFromCanMessage: Nullable<boolean>, rebloggedFromFollowing: Nullable<boolean>, rebloggedRootId: Nullable<string>, rebloggedRootUrl: Nullable<string>, rebloggedRootName: Nullable<string>, rebloggedRootTitle: Nullable<string>, rebloggedRootUuid: Nullable<string>, rebloggedRootCanMessage: Nullable<boolean>, rebloggedRootFollowing: Nullable<boolean>, notes: Nullable<Array<work.socialhub.ktumblr.entity.Note>>, blog: Nullable<work.socialhub.ktumblr.entity.blog.Blog>, reblog: Nullable<work.socialhub.ktumblr.entity.blog.Reblog>, trail: Nullable<Array<work.socialhub.ktumblr.entity.trail.Trail>>);
        get blogName(): Nullable<string>;
        set blogName(value: Nullable<string>);
        get idString(): Nullable<string>;
        set idString(value: Nullable<string>);
        get genesisPostId(): Nullable<string>;
        set genesisPostId(value: Nullable<string>);
        get postUrl(): Nullable<string>;
        set postUrl(value: Nullable<string>);
        get parentPostUrl(): Nullable<string>;
        set parentPostUrl(value: Nullable<string>);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get timestamp(): Nullable<number>;
        set timestamp(value: Nullable<number>);
        get date(): Nullable<string>;
        set date(value: Nullable<string>);
        get format(): Nullable<string>;
        set format(value: Nullable<string>);
        get reblogKey(): Nullable<string>;
        set reblogKey(value: Nullable<string>);
        get tags(): Nullable<Array<string>>;
        set tags(value: Nullable<Array<string>>);
        get isBookmarklet(): Nullable<boolean>;
        set isBookmarklet(value: Nullable<boolean>);
        get isMobile(): Nullable<boolean>;
        set isMobile(value: Nullable<boolean>);
        get sourceUrl(): Nullable<string>;
        set sourceUrl(value: Nullable<string>);
        get sourceTitle(): Nullable<string>;
        set sourceTitle(value: Nullable<string>);
        get isLiked(): Nullable<boolean>;
        set isLiked(value: Nullable<boolean>);
        get state(): Nullable<string>;
        set state(value: Nullable<string>);
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get body(): Nullable<string>;
        set body(value: Nullable<string>);
        get noteCount(): Nullable<number>;
        set noteCount(value: Nullable<number>);
        get summary(): Nullable<string>;
        set summary(value: Nullable<string>);
        get slug(): Nullable<string>;
        set slug(value: Nullable<string>);
        get rebloggedFromId(): Nullable<string>;
        set rebloggedFromId(value: Nullable<string>);
        get rebloggedFromUrl(): Nullable<string>;
        set rebloggedFromUrl(value: Nullable<string>);
        get rebloggedFromName(): Nullable<string>;
        set rebloggedFromName(value: Nullable<string>);
        get rebloggedFromTitle(): Nullable<string>;
        set rebloggedFromTitle(value: Nullable<string>);
        get rebloggedFromUuid(): Nullable<string>;
        set rebloggedFromUuid(value: Nullable<string>);
        get rebloggedFromCanMessage(): Nullable<boolean>;
        set rebloggedFromCanMessage(value: Nullable<boolean>);
        get rebloggedFromFollowing(): Nullable<boolean>;
        set rebloggedFromFollowing(value: Nullable<boolean>);
        get rebloggedRootId(): Nullable<string>;
        set rebloggedRootId(value: Nullable<string>);
        get rebloggedRootUrl(): Nullable<string>;
        set rebloggedRootUrl(value: Nullable<string>);
        get rebloggedRootName(): Nullable<string>;
        set rebloggedRootName(value: Nullable<string>);
        get rebloggedRootTitle(): Nullable<string>;
        set rebloggedRootTitle(value: Nullable<string>);
        get rebloggedRootUuid(): Nullable<string>;
        set rebloggedRootUuid(value: Nullable<string>);
        get rebloggedRootCanMessage(): Nullable<boolean>;
        set rebloggedRootCanMessage(value: Nullable<boolean>);
        get rebloggedRootFollowing(): Nullable<boolean>;
        set rebloggedRootFollowing(value: Nullable<boolean>);
        get notes(): Nullable<Array<work.socialhub.ktumblr.entity.Note>>;
        set notes(value: Nullable<Array<work.socialhub.ktumblr.entity.Note>>);
        get blog(): Nullable<work.socialhub.ktumblr.entity.blog.Blog>;
        set blog(value: Nullable<work.socialhub.ktumblr.entity.blog.Blog>);
        get reblog(): Nullable<work.socialhub.ktumblr.entity.blog.Reblog>;
        set reblog(value: Nullable<work.socialhub.ktumblr.entity.blog.Reblog>);
        get trail(): Nullable<Array<work.socialhub.ktumblr.entity.trail.Trail>>;
        set trail(value: Nullable<Array<work.socialhub.ktumblr.entity.trail.Trail>>);
        get caption(): Nullable<string>;
        set caption(value: Nullable<string>);
    }
    namespace LegacyAudioPost {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => LegacyAudioPost;
        }
    }
}
export declare namespace work.socialhub.ktumblr.entity.post.legacy {
    class LegacyChatPost extends work.socialhub.ktumblr.entity.post.Post.$metadata$.constructor {
        constructor(blogName: Nullable<string>, idString: Nullable<string>, genesisPostId: Nullable<string>, postUrl: Nullable<string>, parentPostUrl: Nullable<string>, type: Nullable<string>, timestamp: Nullable<number>, date: Nullable<string>, format: Nullable<string>, reblogKey: Nullable<string>, tags: Nullable<Array<string>>, isBookmarklet: Nullable<boolean>, isMobile: Nullable<boolean>, sourceUrl: Nullable<string>, sourceTitle: Nullable<string>, isLiked: Nullable<boolean>, state: Nullable<string>, title: Nullable<string>, body: Nullable<string>, noteCount: Nullable<number>, summary: Nullable<string>, slug: Nullable<string>, rebloggedFromId: Nullable<string>, rebloggedFromUrl: Nullable<string>, rebloggedFromName: Nullable<string>, rebloggedFromTitle: Nullable<string>, rebloggedFromUuid: Nullable<string>, rebloggedFromCanMessage: Nullable<boolean>, rebloggedFromFollowing: Nullable<boolean>, rebloggedRootId: Nullable<string>, rebloggedRootUrl: Nullable<string>, rebloggedRootName: Nullable<string>, rebloggedRootTitle: Nullable<string>, rebloggedRootUuid: Nullable<string>, rebloggedRootCanMessage: Nullable<boolean>, rebloggedRootFollowing: Nullable<boolean>, notes: Nullable<Array<work.socialhub.ktumblr.entity.Note>>, blog: Nullable<work.socialhub.ktumblr.entity.blog.Blog>, reblog: Nullable<work.socialhub.ktumblr.entity.blog.Reblog>, trail: Nullable<Array<work.socialhub.ktumblr.entity.trail.Trail>>);
        get blogName(): Nullable<string>;
        set blogName(value: Nullable<string>);
        get idString(): Nullable<string>;
        set idString(value: Nullable<string>);
        get genesisPostId(): Nullable<string>;
        set genesisPostId(value: Nullable<string>);
        get postUrl(): Nullable<string>;
        set postUrl(value: Nullable<string>);
        get parentPostUrl(): Nullable<string>;
        set parentPostUrl(value: Nullable<string>);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get timestamp(): Nullable<number>;
        set timestamp(value: Nullable<number>);
        get date(): Nullable<string>;
        set date(value: Nullable<string>);
        get format(): Nullable<string>;
        set format(value: Nullable<string>);
        get reblogKey(): Nullable<string>;
        set reblogKey(value: Nullable<string>);
        get tags(): Nullable<Array<string>>;
        set tags(value: Nullable<Array<string>>);
        get isBookmarklet(): Nullable<boolean>;
        set isBookmarklet(value: Nullable<boolean>);
        get isMobile(): Nullable<boolean>;
        set isMobile(value: Nullable<boolean>);
        get sourceUrl(): Nullable<string>;
        set sourceUrl(value: Nullable<string>);
        get sourceTitle(): Nullable<string>;
        set sourceTitle(value: Nullable<string>);
        get isLiked(): Nullable<boolean>;
        set isLiked(value: Nullable<boolean>);
        get state(): Nullable<string>;
        set state(value: Nullable<string>);
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get body(): Nullable<string>;
        set body(value: Nullable<string>);
        get noteCount(): Nullable<number>;
        set noteCount(value: Nullable<number>);
        get summary(): Nullable<string>;
        set summary(value: Nullable<string>);
        get slug(): Nullable<string>;
        set slug(value: Nullable<string>);
        get rebloggedFromId(): Nullable<string>;
        set rebloggedFromId(value: Nullable<string>);
        get rebloggedFromUrl(): Nullable<string>;
        set rebloggedFromUrl(value: Nullable<string>);
        get rebloggedFromName(): Nullable<string>;
        set rebloggedFromName(value: Nullable<string>);
        get rebloggedFromTitle(): Nullable<string>;
        set rebloggedFromTitle(value: Nullable<string>);
        get rebloggedFromUuid(): Nullable<string>;
        set rebloggedFromUuid(value: Nullable<string>);
        get rebloggedFromCanMessage(): Nullable<boolean>;
        set rebloggedFromCanMessage(value: Nullable<boolean>);
        get rebloggedFromFollowing(): Nullable<boolean>;
        set rebloggedFromFollowing(value: Nullable<boolean>);
        get rebloggedRootId(): Nullable<string>;
        set rebloggedRootId(value: Nullable<string>);
        get rebloggedRootUrl(): Nullable<string>;
        set rebloggedRootUrl(value: Nullable<string>);
        get rebloggedRootName(): Nullable<string>;
        set rebloggedRootName(value: Nullable<string>);
        get rebloggedRootTitle(): Nullable<string>;
        set rebloggedRootTitle(value: Nullable<string>);
        get rebloggedRootUuid(): Nullable<string>;
        set rebloggedRootUuid(value: Nullable<string>);
        get rebloggedRootCanMessage(): Nullable<boolean>;
        set rebloggedRootCanMessage(value: Nullable<boolean>);
        get rebloggedRootFollowing(): Nullable<boolean>;
        set rebloggedRootFollowing(value: Nullable<boolean>);
        get notes(): Nullable<Array<work.socialhub.ktumblr.entity.Note>>;
        set notes(value: Nullable<Array<work.socialhub.ktumblr.entity.Note>>);
        get blog(): Nullable<work.socialhub.ktumblr.entity.blog.Blog>;
        set blog(value: Nullable<work.socialhub.ktumblr.entity.blog.Blog>);
        get reblog(): Nullable<work.socialhub.ktumblr.entity.blog.Reblog>;
        set reblog(value: Nullable<work.socialhub.ktumblr.entity.blog.Reblog>);
        get trail(): Nullable<Array<work.socialhub.ktumblr.entity.trail.Trail>>;
        set trail(value: Nullable<Array<work.socialhub.ktumblr.entity.trail.Trail>>);
        get dialogue(): Nullable<Array<work.socialhub.ktumblr.entity.post.options.Dialogue>>;
    }
    namespace LegacyChatPost {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => LegacyChatPost;
        }
    }
}
export declare namespace work.socialhub.ktumblr.entity.post.legacy {
    class LegacyLinkPost extends work.socialhub.ktumblr.entity.post.Post.$metadata$.constructor {
        constructor(blogName: Nullable<string>, idString: Nullable<string>, genesisPostId: Nullable<string>, postUrl: Nullable<string>, parentPostUrl: Nullable<string>, type: Nullable<string>, timestamp: Nullable<number>, date: Nullable<string>, format: Nullable<string>, reblogKey: Nullable<string>, tags: Nullable<Array<string>>, isBookmarklet: Nullable<boolean>, isMobile: Nullable<boolean>, sourceUrl: Nullable<string>, sourceTitle: Nullable<string>, isLiked: Nullable<boolean>, state: Nullable<string>, title: Nullable<string>, body: Nullable<string>, noteCount: Nullable<number>, summary: Nullable<string>, slug: Nullable<string>, rebloggedFromId: Nullable<string>, rebloggedFromUrl: Nullable<string>, rebloggedFromName: Nullable<string>, rebloggedFromTitle: Nullable<string>, rebloggedFromUuid: Nullable<string>, rebloggedFromCanMessage: Nullable<boolean>, rebloggedFromFollowing: Nullable<boolean>, rebloggedRootId: Nullable<string>, rebloggedRootUrl: Nullable<string>, rebloggedRootName: Nullable<string>, rebloggedRootTitle: Nullable<string>, rebloggedRootUuid: Nullable<string>, rebloggedRootCanMessage: Nullable<boolean>, rebloggedRootFollowing: Nullable<boolean>, notes: Nullable<Array<work.socialhub.ktumblr.entity.Note>>, blog: Nullable<work.socialhub.ktumblr.entity.blog.Blog>, reblog: Nullable<work.socialhub.ktumblr.entity.blog.Reblog>, trail: Nullable<Array<work.socialhub.ktumblr.entity.trail.Trail>>);
        get blogName(): Nullable<string>;
        set blogName(value: Nullable<string>);
        get idString(): Nullable<string>;
        set idString(value: Nullable<string>);
        get genesisPostId(): Nullable<string>;
        set genesisPostId(value: Nullable<string>);
        get postUrl(): Nullable<string>;
        set postUrl(value: Nullable<string>);
        get parentPostUrl(): Nullable<string>;
        set parentPostUrl(value: Nullable<string>);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get timestamp(): Nullable<number>;
        set timestamp(value: Nullable<number>);
        get date(): Nullable<string>;
        set date(value: Nullable<string>);
        get format(): Nullable<string>;
        set format(value: Nullable<string>);
        get reblogKey(): Nullable<string>;
        set reblogKey(value: Nullable<string>);
        get tags(): Nullable<Array<string>>;
        set tags(value: Nullable<Array<string>>);
        get isBookmarklet(): Nullable<boolean>;
        set isBookmarklet(value: Nullable<boolean>);
        get isMobile(): Nullable<boolean>;
        set isMobile(value: Nullable<boolean>);
        get sourceUrl(): Nullable<string>;
        set sourceUrl(value: Nullable<string>);
        get sourceTitle(): Nullable<string>;
        set sourceTitle(value: Nullable<string>);
        get isLiked(): Nullable<boolean>;
        set isLiked(value: Nullable<boolean>);
        get state(): Nullable<string>;
        set state(value: Nullable<string>);
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get body(): Nullable<string>;
        set body(value: Nullable<string>);
        get noteCount(): Nullable<number>;
        set noteCount(value: Nullable<number>);
        get summary(): Nullable<string>;
        set summary(value: Nullable<string>);
        get slug(): Nullable<string>;
        set slug(value: Nullable<string>);
        get rebloggedFromId(): Nullable<string>;
        set rebloggedFromId(value: Nullable<string>);
        get rebloggedFromUrl(): Nullable<string>;
        set rebloggedFromUrl(value: Nullable<string>);
        get rebloggedFromName(): Nullable<string>;
        set rebloggedFromName(value: Nullable<string>);
        get rebloggedFromTitle(): Nullable<string>;
        set rebloggedFromTitle(value: Nullable<string>);
        get rebloggedFromUuid(): Nullable<string>;
        set rebloggedFromUuid(value: Nullable<string>);
        get rebloggedFromCanMessage(): Nullable<boolean>;
        set rebloggedFromCanMessage(value: Nullable<boolean>);
        get rebloggedFromFollowing(): Nullable<boolean>;
        set rebloggedFromFollowing(value: Nullable<boolean>);
        get rebloggedRootId(): Nullable<string>;
        set rebloggedRootId(value: Nullable<string>);
        get rebloggedRootUrl(): Nullable<string>;
        set rebloggedRootUrl(value: Nullable<string>);
        get rebloggedRootName(): Nullable<string>;
        set rebloggedRootName(value: Nullable<string>);
        get rebloggedRootTitle(): Nullable<string>;
        set rebloggedRootTitle(value: Nullable<string>);
        get rebloggedRootUuid(): Nullable<string>;
        set rebloggedRootUuid(value: Nullable<string>);
        get rebloggedRootCanMessage(): Nullable<boolean>;
        set rebloggedRootCanMessage(value: Nullable<boolean>);
        get rebloggedRootFollowing(): Nullable<boolean>;
        set rebloggedRootFollowing(value: Nullable<boolean>);
        get notes(): Nullable<Array<work.socialhub.ktumblr.entity.Note>>;
        set notes(value: Nullable<Array<work.socialhub.ktumblr.entity.Note>>);
        get blog(): Nullable<work.socialhub.ktumblr.entity.blog.Blog>;
        set blog(value: Nullable<work.socialhub.ktumblr.entity.blog.Blog>);
        get reblog(): Nullable<work.socialhub.ktumblr.entity.blog.Reblog>;
        set reblog(value: Nullable<work.socialhub.ktumblr.entity.blog.Reblog>);
        get trail(): Nullable<Array<work.socialhub.ktumblr.entity.trail.Trail>>;
        set trail(value: Nullable<Array<work.socialhub.ktumblr.entity.trail.Trail>>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get linkAuthor(): Nullable<string>;
        set linkAuthor(value: Nullable<string>);
        get excerpt(): Nullable<string>;
        set excerpt(value: Nullable<string>);
        get publisher(): Nullable<string>;
        set publisher(value: Nullable<string>);
    }
    namespace LegacyLinkPost {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => LegacyLinkPost;
        }
    }
}
export declare namespace work.socialhub.ktumblr.entity.post.legacy {
    class LegacyPhotoPost extends work.socialhub.ktumblr.entity.post.Post.$metadata$.constructor {
        constructor(blogName: Nullable<string>, idString: Nullable<string>, genesisPostId: Nullable<string>, postUrl: Nullable<string>, parentPostUrl: Nullable<string>, type: Nullable<string>, timestamp: Nullable<number>, date: Nullable<string>, format: Nullable<string>, reblogKey: Nullable<string>, tags: Nullable<Array<string>>, isBookmarklet: Nullable<boolean>, isMobile: Nullable<boolean>, sourceUrl: Nullable<string>, sourceTitle: Nullable<string>, isLiked: Nullable<boolean>, state: Nullable<string>, title: Nullable<string>, body: Nullable<string>, noteCount: Nullable<number>, summary: Nullable<string>, slug: Nullable<string>, rebloggedFromId: Nullable<string>, rebloggedFromUrl: Nullable<string>, rebloggedFromName: Nullable<string>, rebloggedFromTitle: Nullable<string>, rebloggedFromUuid: Nullable<string>, rebloggedFromCanMessage: Nullable<boolean>, rebloggedFromFollowing: Nullable<boolean>, rebloggedRootId: Nullable<string>, rebloggedRootUrl: Nullable<string>, rebloggedRootName: Nullable<string>, rebloggedRootTitle: Nullable<string>, rebloggedRootUuid: Nullable<string>, rebloggedRootCanMessage: Nullable<boolean>, rebloggedRootFollowing: Nullable<boolean>, notes: Nullable<Array<work.socialhub.ktumblr.entity.Note>>, blog: Nullable<work.socialhub.ktumblr.entity.blog.Blog>, reblog: Nullable<work.socialhub.ktumblr.entity.blog.Reblog>, trail: Nullable<Array<work.socialhub.ktumblr.entity.trail.Trail>>);
        get blogName(): Nullable<string>;
        set blogName(value: Nullable<string>);
        get idString(): Nullable<string>;
        set idString(value: Nullable<string>);
        get genesisPostId(): Nullable<string>;
        set genesisPostId(value: Nullable<string>);
        get postUrl(): Nullable<string>;
        set postUrl(value: Nullable<string>);
        get parentPostUrl(): Nullable<string>;
        set parentPostUrl(value: Nullable<string>);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get timestamp(): Nullable<number>;
        set timestamp(value: Nullable<number>);
        get date(): Nullable<string>;
        set date(value: Nullable<string>);
        get format(): Nullable<string>;
        set format(value: Nullable<string>);
        get reblogKey(): Nullable<string>;
        set reblogKey(value: Nullable<string>);
        get tags(): Nullable<Array<string>>;
        set tags(value: Nullable<Array<string>>);
        get isBookmarklet(): Nullable<boolean>;
        set isBookmarklet(value: Nullable<boolean>);
        get isMobile(): Nullable<boolean>;
        set isMobile(value: Nullable<boolean>);
        get sourceUrl(): Nullable<string>;
        set sourceUrl(value: Nullable<string>);
        get sourceTitle(): Nullable<string>;
        set sourceTitle(value: Nullable<string>);
        get isLiked(): Nullable<boolean>;
        set isLiked(value: Nullable<boolean>);
        get state(): Nullable<string>;
        set state(value: Nullable<string>);
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get body(): Nullable<string>;
        set body(value: Nullable<string>);
        get noteCount(): Nullable<number>;
        set noteCount(value: Nullable<number>);
        get summary(): Nullable<string>;
        set summary(value: Nullable<string>);
        get slug(): Nullable<string>;
        set slug(value: Nullable<string>);
        get rebloggedFromId(): Nullable<string>;
        set rebloggedFromId(value: Nullable<string>);
        get rebloggedFromUrl(): Nullable<string>;
        set rebloggedFromUrl(value: Nullable<string>);
        get rebloggedFromName(): Nullable<string>;
        set rebloggedFromName(value: Nullable<string>);
        get rebloggedFromTitle(): Nullable<string>;
        set rebloggedFromTitle(value: Nullable<string>);
        get rebloggedFromUuid(): Nullable<string>;
        set rebloggedFromUuid(value: Nullable<string>);
        get rebloggedFromCanMessage(): Nullable<boolean>;
        set rebloggedFromCanMessage(value: Nullable<boolean>);
        get rebloggedFromFollowing(): Nullable<boolean>;
        set rebloggedFromFollowing(value: Nullable<boolean>);
        get rebloggedRootId(): Nullable<string>;
        set rebloggedRootId(value: Nullable<string>);
        get rebloggedRootUrl(): Nullable<string>;
        set rebloggedRootUrl(value: Nullable<string>);
        get rebloggedRootName(): Nullable<string>;
        set rebloggedRootName(value: Nullable<string>);
        get rebloggedRootTitle(): Nullable<string>;
        set rebloggedRootTitle(value: Nullable<string>);
        get rebloggedRootUuid(): Nullable<string>;
        set rebloggedRootUuid(value: Nullable<string>);
        get rebloggedRootCanMessage(): Nullable<boolean>;
        set rebloggedRootCanMessage(value: Nullable<boolean>);
        get rebloggedRootFollowing(): Nullable<boolean>;
        set rebloggedRootFollowing(value: Nullable<boolean>);
        get notes(): Nullable<Array<work.socialhub.ktumblr.entity.Note>>;
        set notes(value: Nullable<Array<work.socialhub.ktumblr.entity.Note>>);
        get blog(): Nullable<work.socialhub.ktumblr.entity.blog.Blog>;
        set blog(value: Nullable<work.socialhub.ktumblr.entity.blog.Blog>);
        get reblog(): Nullable<work.socialhub.ktumblr.entity.blog.Reblog>;
        set reblog(value: Nullable<work.socialhub.ktumblr.entity.blog.Reblog>);
        get trail(): Nullable<Array<work.socialhub.ktumblr.entity.trail.Trail>>;
        set trail(value: Nullable<Array<work.socialhub.ktumblr.entity.trail.Trail>>);
        get caption(): Nullable<string>;
        set caption(value: Nullable<string>);
        get width(): Nullable<number>;
        set width(value: Nullable<number>);
        get height(): Nullable<number>;
        set height(value: Nullable<number>);
        get photos(): Nullable<Array<work.socialhub.ktumblr.entity.post.options.Photo>>;
        set photos(value: Nullable<Array<work.socialhub.ktumblr.entity.post.options.Photo>>);
    }
    namespace LegacyPhotoPost {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => LegacyPhotoPost;
        }
    }
}
export declare namespace work.socialhub.ktumblr.entity.post.legacy {
    class LegacyQuotePost extends work.socialhub.ktumblr.entity.post.Post.$metadata$.constructor {
        constructor(blogName: Nullable<string>, idString: Nullable<string>, genesisPostId: Nullable<string>, postUrl: Nullable<string>, parentPostUrl: Nullable<string>, type: Nullable<string>, timestamp: Nullable<number>, date: Nullable<string>, format: Nullable<string>, reblogKey: Nullable<string>, tags: Nullable<Array<string>>, isBookmarklet: Nullable<boolean>, isMobile: Nullable<boolean>, sourceUrl: Nullable<string>, sourceTitle: Nullable<string>, isLiked: Nullable<boolean>, state: Nullable<string>, title: Nullable<string>, body: Nullable<string>, noteCount: Nullable<number>, summary: Nullable<string>, slug: Nullable<string>, rebloggedFromId: Nullable<string>, rebloggedFromUrl: Nullable<string>, rebloggedFromName: Nullable<string>, rebloggedFromTitle: Nullable<string>, rebloggedFromUuid: Nullable<string>, rebloggedFromCanMessage: Nullable<boolean>, rebloggedFromFollowing: Nullable<boolean>, rebloggedRootId: Nullable<string>, rebloggedRootUrl: Nullable<string>, rebloggedRootName: Nullable<string>, rebloggedRootTitle: Nullable<string>, rebloggedRootUuid: Nullable<string>, rebloggedRootCanMessage: Nullable<boolean>, rebloggedRootFollowing: Nullable<boolean>, notes: Nullable<Array<work.socialhub.ktumblr.entity.Note>>, blog: Nullable<work.socialhub.ktumblr.entity.blog.Blog>, reblog: Nullable<work.socialhub.ktumblr.entity.blog.Reblog>, trail: Nullable<Array<work.socialhub.ktumblr.entity.trail.Trail>>);
        get blogName(): Nullable<string>;
        set blogName(value: Nullable<string>);
        get idString(): Nullable<string>;
        set idString(value: Nullable<string>);
        get genesisPostId(): Nullable<string>;
        set genesisPostId(value: Nullable<string>);
        get postUrl(): Nullable<string>;
        set postUrl(value: Nullable<string>);
        get parentPostUrl(): Nullable<string>;
        set parentPostUrl(value: Nullable<string>);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get timestamp(): Nullable<number>;
        set timestamp(value: Nullable<number>);
        get date(): Nullable<string>;
        set date(value: Nullable<string>);
        get format(): Nullable<string>;
        set format(value: Nullable<string>);
        get reblogKey(): Nullable<string>;
        set reblogKey(value: Nullable<string>);
        get tags(): Nullable<Array<string>>;
        set tags(value: Nullable<Array<string>>);
        get isBookmarklet(): Nullable<boolean>;
        set isBookmarklet(value: Nullable<boolean>);
        get isMobile(): Nullable<boolean>;
        set isMobile(value: Nullable<boolean>);
        get sourceUrl(): Nullable<string>;
        set sourceUrl(value: Nullable<string>);
        get sourceTitle(): Nullable<string>;
        set sourceTitle(value: Nullable<string>);
        get isLiked(): Nullable<boolean>;
        set isLiked(value: Nullable<boolean>);
        get state(): Nullable<string>;
        set state(value: Nullable<string>);
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get body(): Nullable<string>;
        set body(value: Nullable<string>);
        get noteCount(): Nullable<number>;
        set noteCount(value: Nullable<number>);
        get summary(): Nullable<string>;
        set summary(value: Nullable<string>);
        get slug(): Nullable<string>;
        set slug(value: Nullable<string>);
        get rebloggedFromId(): Nullable<string>;
        set rebloggedFromId(value: Nullable<string>);
        get rebloggedFromUrl(): Nullable<string>;
        set rebloggedFromUrl(value: Nullable<string>);
        get rebloggedFromName(): Nullable<string>;
        set rebloggedFromName(value: Nullable<string>);
        get rebloggedFromTitle(): Nullable<string>;
        set rebloggedFromTitle(value: Nullable<string>);
        get rebloggedFromUuid(): Nullable<string>;
        set rebloggedFromUuid(value: Nullable<string>);
        get rebloggedFromCanMessage(): Nullable<boolean>;
        set rebloggedFromCanMessage(value: Nullable<boolean>);
        get rebloggedFromFollowing(): Nullable<boolean>;
        set rebloggedFromFollowing(value: Nullable<boolean>);
        get rebloggedRootId(): Nullable<string>;
        set rebloggedRootId(value: Nullable<string>);
        get rebloggedRootUrl(): Nullable<string>;
        set rebloggedRootUrl(value: Nullable<string>);
        get rebloggedRootName(): Nullable<string>;
        set rebloggedRootName(value: Nullable<string>);
        get rebloggedRootTitle(): Nullable<string>;
        set rebloggedRootTitle(value: Nullable<string>);
        get rebloggedRootUuid(): Nullable<string>;
        set rebloggedRootUuid(value: Nullable<string>);
        get rebloggedRootCanMessage(): Nullable<boolean>;
        set rebloggedRootCanMessage(value: Nullable<boolean>);
        get rebloggedRootFollowing(): Nullable<boolean>;
        set rebloggedRootFollowing(value: Nullable<boolean>);
        get notes(): Nullable<Array<work.socialhub.ktumblr.entity.Note>>;
        set notes(value: Nullable<Array<work.socialhub.ktumblr.entity.Note>>);
        get blog(): Nullable<work.socialhub.ktumblr.entity.blog.Blog>;
        set blog(value: Nullable<work.socialhub.ktumblr.entity.blog.Blog>);
        get reblog(): Nullable<work.socialhub.ktumblr.entity.blog.Reblog>;
        set reblog(value: Nullable<work.socialhub.ktumblr.entity.blog.Reblog>);
        get trail(): Nullable<Array<work.socialhub.ktumblr.entity.trail.Trail>>;
        set trail(value: Nullable<Array<work.socialhub.ktumblr.entity.trail.Trail>>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get source(): Nullable<string>;
        set source(value: Nullable<string>);
    }
    namespace LegacyQuotePost {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => LegacyQuotePost;
        }
    }
}
export declare namespace work.socialhub.ktumblr.entity.post.legacy {
    class LegacyVideoPost extends work.socialhub.ktumblr.entity.post.Post.$metadata$.constructor {
        constructor(blogName: Nullable<string>, idString: Nullable<string>, genesisPostId: Nullable<string>, postUrl: Nullable<string>, parentPostUrl: Nullable<string>, type: Nullable<string>, timestamp: Nullable<number>, date: Nullable<string>, format: Nullable<string>, reblogKey: Nullable<string>, tags: Nullable<Array<string>>, isBookmarklet: Nullable<boolean>, isMobile: Nullable<boolean>, sourceUrl: Nullable<string>, sourceTitle: Nullable<string>, isLiked: Nullable<boolean>, state: Nullable<string>, title: Nullable<string>, body: Nullable<string>, noteCount: Nullable<number>, summary: Nullable<string>, slug: Nullable<string>, rebloggedFromId: Nullable<string>, rebloggedFromUrl: Nullable<string>, rebloggedFromName: Nullable<string>, rebloggedFromTitle: Nullable<string>, rebloggedFromUuid: Nullable<string>, rebloggedFromCanMessage: Nullable<boolean>, rebloggedFromFollowing: Nullable<boolean>, rebloggedRootId: Nullable<string>, rebloggedRootUrl: Nullable<string>, rebloggedRootName: Nullable<string>, rebloggedRootTitle: Nullable<string>, rebloggedRootUuid: Nullable<string>, rebloggedRootCanMessage: Nullable<boolean>, rebloggedRootFollowing: Nullable<boolean>, notes: Nullable<Array<work.socialhub.ktumblr.entity.Note>>, blog: Nullable<work.socialhub.ktumblr.entity.blog.Blog>, reblog: Nullable<work.socialhub.ktumblr.entity.blog.Reblog>, trail: Nullable<Array<work.socialhub.ktumblr.entity.trail.Trail>>);
        get blogName(): Nullable<string>;
        set blogName(value: Nullable<string>);
        get idString(): Nullable<string>;
        set idString(value: Nullable<string>);
        get genesisPostId(): Nullable<string>;
        set genesisPostId(value: Nullable<string>);
        get postUrl(): Nullable<string>;
        set postUrl(value: Nullable<string>);
        get parentPostUrl(): Nullable<string>;
        set parentPostUrl(value: Nullable<string>);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get timestamp(): Nullable<number>;
        set timestamp(value: Nullable<number>);
        get date(): Nullable<string>;
        set date(value: Nullable<string>);
        get format(): Nullable<string>;
        set format(value: Nullable<string>);
        get reblogKey(): Nullable<string>;
        set reblogKey(value: Nullable<string>);
        get tags(): Nullable<Array<string>>;
        set tags(value: Nullable<Array<string>>);
        get isBookmarklet(): Nullable<boolean>;
        set isBookmarklet(value: Nullable<boolean>);
        get isMobile(): Nullable<boolean>;
        set isMobile(value: Nullable<boolean>);
        get sourceUrl(): Nullable<string>;
        set sourceUrl(value: Nullable<string>);
        get sourceTitle(): Nullable<string>;
        set sourceTitle(value: Nullable<string>);
        get isLiked(): Nullable<boolean>;
        set isLiked(value: Nullable<boolean>);
        get state(): Nullable<string>;
        set state(value: Nullable<string>);
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get body(): Nullable<string>;
        set body(value: Nullable<string>);
        get noteCount(): Nullable<number>;
        set noteCount(value: Nullable<number>);
        get summary(): Nullable<string>;
        set summary(value: Nullable<string>);
        get slug(): Nullable<string>;
        set slug(value: Nullable<string>);
        get rebloggedFromId(): Nullable<string>;
        set rebloggedFromId(value: Nullable<string>);
        get rebloggedFromUrl(): Nullable<string>;
        set rebloggedFromUrl(value: Nullable<string>);
        get rebloggedFromName(): Nullable<string>;
        set rebloggedFromName(value: Nullable<string>);
        get rebloggedFromTitle(): Nullable<string>;
        set rebloggedFromTitle(value: Nullable<string>);
        get rebloggedFromUuid(): Nullable<string>;
        set rebloggedFromUuid(value: Nullable<string>);
        get rebloggedFromCanMessage(): Nullable<boolean>;
        set rebloggedFromCanMessage(value: Nullable<boolean>);
        get rebloggedFromFollowing(): Nullable<boolean>;
        set rebloggedFromFollowing(value: Nullable<boolean>);
        get rebloggedRootId(): Nullable<string>;
        set rebloggedRootId(value: Nullable<string>);
        get rebloggedRootUrl(): Nullable<string>;
        set rebloggedRootUrl(value: Nullable<string>);
        get rebloggedRootName(): Nullable<string>;
        set rebloggedRootName(value: Nullable<string>);
        get rebloggedRootTitle(): Nullable<string>;
        set rebloggedRootTitle(value: Nullable<string>);
        get rebloggedRootUuid(): Nullable<string>;
        set rebloggedRootUuid(value: Nullable<string>);
        get rebloggedRootCanMessage(): Nullable<boolean>;
        set rebloggedRootCanMessage(value: Nullable<boolean>);
        get rebloggedRootFollowing(): Nullable<boolean>;
        set rebloggedRootFollowing(value: Nullable<boolean>);
        get notes(): Nullable<Array<work.socialhub.ktumblr.entity.Note>>;
        set notes(value: Nullable<Array<work.socialhub.ktumblr.entity.Note>>);
        get blog(): Nullable<work.socialhub.ktumblr.entity.blog.Blog>;
        set blog(value: Nullable<work.socialhub.ktumblr.entity.blog.Blog>);
        get reblog(): Nullable<work.socialhub.ktumblr.entity.blog.Reblog>;
        set reblog(value: Nullable<work.socialhub.ktumblr.entity.blog.Reblog>);
        get trail(): Nullable<Array<work.socialhub.ktumblr.entity.trail.Trail>>;
        set trail(value: Nullable<Array<work.socialhub.ktumblr.entity.trail.Trail>>);
        get caption(): Nullable<string>;
        set caption(value: Nullable<string>);
        get player(): Nullable<Array<work.socialhub.ktumblr.entity.post.options.Video>>;
    }
    namespace LegacyVideoPost {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => LegacyVideoPost;
        }
    }
}
export declare namespace work.socialhub.ktumblr.entity.post.options {
    class Dialogue {
        constructor();
        get name(): Nullable<string>;
        get label(): Nullable<string>;
        get phrase(): Nullable<string>;
    }
    namespace Dialogue {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Dialogue;
        }
    }
}
export declare namespace work.socialhub.ktumblr.entity.post.options {
    class Photo {
        constructor();
        get caption(): Nullable<string>;
        get originalSize(): Nullable<work.socialhub.ktumblr.entity.post.options.PhotoSize>;
        get altSizes(): Nullable<Array<work.socialhub.ktumblr.entity.post.options.PhotoSize>>;
    }
    namespace Photo {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Photo;
        }
    }
}
export declare namespace work.socialhub.ktumblr.entity.post.options {
    class PhotoSize {
        constructor();
        get width(): number;
        get height(): number;
        get url(): Nullable<string>;
    }
    namespace PhotoSize {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PhotoSize;
        }
    }
}
export declare namespace work.socialhub.ktumblr.entity.post.options {
    class Video {
        constructor();
        get width(): Nullable<number>;
        get embedCode(): Nullable<string>;
    }
    namespace Video {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Video;
        }
    }
}
export declare namespace work.socialhub.ktumblr.entity.trail {
    class BlogInTrail {
        constructor();
        get name(): Nullable<string>;
        get isActive(): boolean;
        get theme(): Nullable<work.socialhub.ktumblr.entity.blog.BlogTheme>;
        get isShareLikes(): boolean;
        get isShareFollowing(): boolean;
        get isCanBeFollowed(): boolean;
    }
    namespace BlogInTrail {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlogInTrail;
        }
    }
}
export declare namespace work.socialhub.ktumblr.entity.trail {
    class IdInTrail {
        constructor();
        get id(): Nullable<string>;
    }
    namespace IdInTrail {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => IdInTrail;
        }
    }
}
export declare namespace work.socialhub.ktumblr.entity.trail {
    class Trail {
        constructor();
        get blog(): Nullable<work.socialhub.ktumblr.entity.trail.BlogInTrail>;
        get post(): Nullable<work.socialhub.ktumblr.entity.trail.IdInTrail>;
        get contentRaw(): Nullable<string>;
        get content(): Nullable<string>;
        get isCurrentItem(): boolean;
        get isRootItem(): boolean;
    }
    namespace Trail {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Trail;
        }
    }
}
export declare namespace work.socialhub.ktumblr.entity.user {
    class FollowerUser {
        constructor();
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get following(): Nullable<boolean>;
        set following(value: Nullable<boolean>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get updated(): Nullable<string>;
        set updated(value: Nullable<string>);
    }
    namespace FollowerUser {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FollowerUser;
        }
    }
}
export declare namespace work.socialhub.ktumblr.entity.user {
    class User /* extends work.socialhub.ktumblr.entity.Resource */ {
        constructor();
        get followingCount(): Nullable<number>;
        get defaultPostFormat(): Nullable<string>;
        get name(): Nullable<string>;
        get likeCount(): Nullable<number>;
        get blogs(): Nullable<Array<work.socialhub.ktumblr.entity.blog.Blog>>;
    }
    namespace User {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => User;
        }
    }
}
export declare namespace work.socialhub.ktumblr {
    abstract class KtumblrFactory extends KtSingleton<KtumblrFactory.$metadata$.constructor>() {
        private constructor();
    }
    namespace KtumblrFactory {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                instance(clientId?: string, clientSecret?: Nullable<string>, accessToken?: Nullable<string>, refreshToken?: Nullable<string>): work.socialhub.ktumblr.Tumblr;
                private constructor();
            }
        }
    }
}
export as namespace work_socialhub_ktumblr_all;