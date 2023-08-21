import { getPostData } from "@/service/post";
import MarkdownViewer from "@/app/components/MarkdownViewer";

type TProps = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: TProps) {
  const post = await getPostData(slug);

  return (
    <>
      <h1>{post.title}</h1>
      <MarkdownViewer content={post.content} />
    </>
  );
}
