import { posts } from "@/types/types"; //@ is pointing to src folder

export default function Home() {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <p>Id:{post.id}</p>
          <p>Title: {post.title}</p>
          <p>Content: {post.content ? post.content : "No content"}</p>
        </div>
      ))}
    </>
  );
}
