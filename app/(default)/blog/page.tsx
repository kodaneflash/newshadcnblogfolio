"use client";
import { PostList } from "./_components/post-list";
import { getPosts } from "@/sanity/lib/sanity";
import HeroSection from "@/components/hero-section";
import { HeroHighlight } from "@/components/ui/hero-highlight";

export default async function Home() {
  const allPosts = await getPosts();

  return (
    <main className="min-h-screen antialiased">
      <HeroHighlight>
        <HeroSection
          title="Read My Blog"
          description="Est minim eu eiusmod duis pariatur elit dolore mollit eu cupidatat laborum pa"
        />
      </HeroHighlight>
      <PostList allPosts={allPosts} />
    </main> 
  );
}
