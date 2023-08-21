import { TPost } from "@/service/post";

type Props = { posts: TPost[] };

export default function PostGrid({ posts }: Props) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.path}>{post.title}</li>
      ))}
    </ul>
  );
}
