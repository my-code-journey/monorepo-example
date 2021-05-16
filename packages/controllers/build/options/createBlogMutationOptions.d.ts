import { CreateBlogMutationVariables } from "../generated/graphql-hooks";
import { MutationFunctionOptions } from "@apollo/react-common";
export declare const createBlogMutationOptions: (variables: CreateBlogMutationVariables) => MutationFunctionOptions<{
    __typename?: "Mutation" | undefined;
} & {
    createBlog: import("../generated/graphql-hooks").Maybe<{
        __typename?: "Blog" | undefined;
    } & Pick<import("../generated/graphql-hooks").Blog, "title" | "author">>;
}, Record<string, any>>;
