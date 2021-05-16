import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Blog {
    title: String
    author: String
  }

  type Query {
    blogs: [Blog!]!
  }

  type Mutation {
    createBlog(title: String, author: String): Blog
  }
`;

const blogs = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

const resolvers = {
  Query: {
    blogs: () => blogs
  },
  Mutation: {
    createBlog: (_: any, blog: any) => {
      blogs.push(blog);
      return blog;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 5000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
