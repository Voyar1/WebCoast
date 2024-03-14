import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import { getAllPostsWithSlug } from "@/lib/actions/post.action";

export default async function Home() {
  const result = await getAllPostsWithSlug();
  console.log(result.edges);
  return (
    <main className="min-h-screen text-black">
      <Hero />
      <Contact />
    </main>
  );
}
