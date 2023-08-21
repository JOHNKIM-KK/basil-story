"use client";
import PostGrid from "@/app/components/PostGrid";
import { getAllPost } from "@/service/post";
import { useState } from "react";

const categories = ["all", "my story", "frontend", "backend", "javascript"];

export default async function AllPosts() {
  const [category, setCategory] = useState<string>("all");

  const posts = await getAllPost();
  return (
    <div className={"flex"}>
      <section className={"m-4"}>
        <PostGrid posts={posts} />
      </section>
      <section>
        <title>Category</title>
        <ul>
          {categories.map((c) => (
            <li key={c} onClick={() => setCategory(c)}>
              {c}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
