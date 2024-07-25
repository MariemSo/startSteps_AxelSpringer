import { Param, posts } from "@/types/types";

export default function Post({ params }: Param) {
  const id = parseInt(params.id);
  const post = posts.find((post) => post.id == id);
  return (
    <>
      {post ? (
        <>
          <p>Title:{post.title}</p>
          <p>Content:{post.content ? post.content : "Not Found"}</p>
          <p>
            User: name:{post.user.name}age-{post.user.age}
          </p>
        </>
      ) : (
        <p>Not Found</p>
      )}
    </>
  );
}
