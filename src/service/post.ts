import path from "path";
import { readFile } from "fs/promises";

export type TPost = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export async function getAllPost(): Promise<TPost[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<TPost[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getFeaturedPost(): Promise<TPost[]> {
  return getAllPost().then((post) => post.filter((p) => p.featured));
}
export async function getNonFeaturedPost(): Promise<TPost[]> {
  return getAllPost().then((post) => post.filter((p) => !p.featured));
}
