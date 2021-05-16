import {
  CreateBlogMutation,
  CreateBlogMutationVariables,
  BlogsDocument,
  BlogsQuery
} from "../generated/graphql-hooks";
import { MutationFunctionOptions } from "@apollo/react-common";

export const createBlogMutationOptions = (
  variables: CreateBlogMutationVariables
): MutationFunctionOptions<CreateBlogMutation> => {
  return {
    variables,
    optimisticResponse: {
      __typename: "Mutation",
      createBlog: {
        __typename: "Blog",
        title: variables.title,
        author: variables.author
      }
    },
    update: store => {
      try {
        const data = store.readQuery<BlogsQuery>({ query: BlogsDocument });
        if (data) {
          store.writeQuery<BlogsQuery>({
            query: BlogsDocument,
            data: {
              blogs: [...data.blogs, { __typename: "Blog", ...variables }]
            }
          });
        }
      } catch {}
    }
  };
};
