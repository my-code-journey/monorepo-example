import React from "react";
import { Text, SafeAreaView, FlatList, Button } from "react-native";
import {
  useBlogsQuery,
  useCreateBlogMutation,
  createBlogMutationOptions
} from "@gg/controllers";

interface Props {}

export const Blogs: React.FC<Props> = () => {
  const { data } = useBlogsQuery();
  const [createBlog] = useCreateBlogMutation();

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={() => (
          <Button
            title="add blog"
            onPress={() => {
              createBlog(
                createBlogMutationOptions({
                  author: "" + Math.random(),
                  title: "random blog"
                })
              );
            }}
          />
        )}
        data={data && data.blogs ? data.blogs : []}
        keyExtractor={item => item.title + item.author}
        renderItem={({ item }) => (
          <Text>
            {item.title} by {item.author}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};
