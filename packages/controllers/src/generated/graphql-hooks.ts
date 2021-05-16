import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


export type Blog = {
   __typename?: 'Blog',
  title?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Mutation = {
   __typename?: 'Mutation',
  createBlog?: Maybe<Blog>,
};


export type MutationCreateBlogArgs = {
  title?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>
};

export type Query = {
   __typename?: 'Query',
  blogs: Array<Blog>,
};


export type BlogsQueryVariables = {};


export type BlogsQuery = (
  { __typename?: 'Query' }
  & { blogs: Array<(
    { __typename?: 'Blog' }
    & Pick<Blog, 'title' | 'author'>
  )> }
);

export type CreateBlogMutationVariables = {
  title?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>
};


export type CreateBlogMutation = (
  { __typename?: 'Mutation' }
  & { createBlog: Maybe<(
    { __typename?: 'Blog' }
    & Pick<Blog, 'title' | 'author'>
  )> }
);


export const BlogsDocument = gql`
    query Blogs {
  blogs {
    title
    author
  }
}
    `;

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
export function useBlogsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BlogsQuery, BlogsQueryVariables>) {
        return ApolloReactHooks.useQuery<BlogsQuery, BlogsQueryVariables>(BlogsDocument, baseOptions);
      }
export function useBlogsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BlogsQuery, BlogsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BlogsQuery, BlogsQueryVariables>(BlogsDocument, baseOptions);
        }
export type BlogsQueryHookResult = ReturnType<typeof useBlogsQuery>;
export type BlogsLazyQueryHookResult = ReturnType<typeof useBlogsLazyQuery>;
export type BlogsQueryResult = ApolloReactCommon.QueryResult<BlogsQuery, BlogsQueryVariables>;
export const CreateBlogDocument = gql`
    mutation CreateBlog($title: String, $author: String) {
  createBlog(title: $title, author: $author) {
    title
    author
  }
}
    `;
export type CreateBlogMutationFn = ApolloReactCommon.MutationFunction<CreateBlogMutation, CreateBlogMutationVariables>;

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
export function useCreateBlogMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateBlogMutation, CreateBlogMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateBlogMutation, CreateBlogMutationVariables>(CreateBlogDocument, baseOptions);
      }
export type CreateBlogMutationHookResult = ReturnType<typeof useCreateBlogMutation>;
export type CreateBlogMutationResult = ApolloReactCommon.MutationResult<CreateBlogMutation>;
export type CreateBlogMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateBlogMutation, CreateBlogMutationVariables>;