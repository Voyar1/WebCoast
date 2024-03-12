import Hero from "@/components/home/Hero";
import { getAllPostsWithSlug } from "@/lib/actions/post.action";

export default async function Home() {
  const result = await getAllPostsWithSlug();
  console.log(result.edges);
  return (
    <main className="flex min-h-screen">
      <Hero />
    </main>
  );
}
