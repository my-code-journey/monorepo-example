import React from "react";
import {
  useBlogsQuery,
  useCreateBlogMutation,
  createBlogMutationOptions
} from "@gg/controllers";

interface Props {}

const App: React.FC<Props> = () => {
  const { data } = useBlogsQuery();
  const [createBlog] = useCreateBlogMutation();

  return (
    <div>
      <button
        onClick={() => {
          createBlog(
            createBlogMutationOptions({
              author: "" + Math.random(),
              title: "random blog"
            })
          );
        }}
      >
        add blog
      </button>
      {(data && data.blogs ? data.blogs : []).map(b => {
        return (
          <div key={b!.title! + b!.author}>
            {b!.title} {b!.author}
          </div>
        );
      })}
    </div>
  );
};

export default App;
