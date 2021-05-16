import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export declare type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** The `Upload` scalar type represents a file upload. */
    Upload: any;
};
export declare type Blog = {
    __typename?: 'Blog';
    title?: Maybe<Scalars['String']>;
    author?: Maybe<Scalars['String']>;
};
export declare enum CacheControlScope {
    Public = "PUBLIC",
    Private = "PRIVATE"
}
export declare type Mutation = {
    __typename?: 'Mutation';
    createBlog?: Maybe<Blog>;
};
export declare type MutationCreateBlogArgs = {
    title?: Maybe<Scalars['String']>;
    author?: Maybe<Scalars['String']>;
};
export declare type Query = {
    __typename?: 'Query';
    blogs: Array<Blog>;
};
export declare type BlogsQueryVariables = {};
export declare type BlogsQuery = ({
    __typename?: 'Query';
} & {
    blogs: Array<({
        __typename?: 'Blog';
    } & Pick<Blog, 'title' | 'author'>)>;
});
export declare type CreateBlogMutationVariables = {
    title?: Maybe<Scalars['String']>;
    author?: Maybe<Scalars['String']>;
};
export declare type CreateBlogMutation = ({
    __typename?: 'Mutation';
} & {
    createBlog: Maybe<({
        __typename?: 'Blog';
    } & Pick<Blog, 'title' | 'author'>)>;
});
export declare const BlogsDocument: any;
/**
 * __useBlogsQuery__
 *
 * To run a query within a React component, call `useBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogsQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useBlogsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BlogsQuery, BlogsQueryVariables>): ApolloReactCommon.QueryResult<{
    __typename?: "Query" | undefined;
} & {
    blogs: ({
        __typename?: "Blog" | undefined;
    } & Pick<Blog, "title" | "author">)[];
}, BlogsQueryVariables>;
export declare function useBlogsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BlogsQuery, BlogsQueryVariables>): [(options?: ApolloReactHooks.QueryLazyOptions<BlogsQueryVariables> | undefined) => void, ApolloReactCommon.QueryResult<{
    __typename?: "Query" | undefined;
} & {
    blogs: ({
        __typename?: "Blog" | undefined;
    } & Pick<Blog, "title" | "author">)[];
}, BlogsQueryVariables>];
export declare type BlogsQueryHookResult = ReturnType<typeof useBlogsQuery>;
export declare type BlogsLazyQueryHookResult = ReturnType<typeof useBlogsLazyQuery>;
export declare type BlogsQueryResult = ApolloReactCommon.QueryResult<BlogsQuery, BlogsQueryVariables>;
export declare const CreateBlogDocument: any;
export declare type CreateBlogMutationFn = ApolloReactCommon.MutationFunction<CreateBlogMutation, CreateBlogMutationVariables>;
/**
 * __useCreateBlogMutation__
 *
 * To run a mutation, you first call `useCreateBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBlogMutation, { data, loading, error }] = useCreateBlogMutation({
 *   variables: {
 *      title: // value for 'title'
 *      author: // value for 'author'
 *   },
 * });
 */
export declare function useCreateBlogMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateBlogMutation, CreateBlogMutationVariables>): [(options?: ApolloReactCommon.MutationFunctionOptions<{
    __typename?: "Mutation" | undefined;
} & {
    createBlog: Maybe<{
        __typename?: "Blog" | undefined;
    } & Pick<Blog, "title" | "author">>;
}, CreateBlogMutationVariables> | undefined) => Promise<ApolloReactCommon.ExecutionResult<{
    __typename?: "Mutation" | undefined;
} & {
    createBlog: Maybe<{
        __typename?: "Blog" | undefined;
    } & Pick<Blog, "title" | "author">>;
}>>, ApolloReactCommon.MutationResult<{
    __typename?: "Mutation" | undefined;
} & {
    createBlog: Maybe<{
        __typename?: "Blog" | undefined;
    } & Pick<Blog, "title" | "author">>;
}>];
export declare type CreateBlogMutationHookResult = ReturnType<typeof useCreateBlogMutation>;
export declare type CreateBlogMutationResult = ApolloReactCommon.MutationResult<CreateBlogMutation>;
export declare type CreateBlogMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateBlogMutation, CreateBlogMutationVariables>;
