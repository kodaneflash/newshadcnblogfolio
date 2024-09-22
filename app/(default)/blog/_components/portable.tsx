"use client";
import React from "react";
import { ptComponents } from "./pt-components";
import { PortableText } from "@portabletext/react";
import { getPost } from "@/sanity/lib/sanity";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/date-format";
import { buttonVariants } from "@/components/ui/button";
import { TableOfContents } from './table-of-contents';

async function PostDetail({ postSlug }: any) {
  const post = await getPost(postSlug);

  return (
    <article className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-3xl lg:max-w-4xl">
        <div className="mb-12">
          <Link
            href="/blog"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "mb-8 inline-flex"  
            )}
          >
            &larr; See all posts
          </Link>
          
          {post.mainImage && (
            <div className="mb-8">  
              <Image
                src={post.mainImage}
                alt={post.title}
                width={1200}
                height={675}
                className="rounded-lg object-cover w-full"
              />
            </div>
          )}
          
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl mb-8">  
            {post.title}
          </h1>

          <div className="mt-6 flex items-center space-x-4">
            <Image
              src={post.authorImg}
              alt={post.author}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <p className="text-lg font-medium">{post.author}</p>
              <time
                dateTime={post.publishedAt}
                className="mt-2 block text-sm text-muted-foreground"
              >
                {formatDate(post.publishedAt)}
              </time>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <aside className="w-full lg:hidden">
            {post.headings && <TableOfContents headings={post.headings} />}
          </aside>
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="hidden lg:block lg:w-1/4">
              <div className="lg:sticky lg:top-8">
                {post.headings && <TableOfContents headings={post.headings} />}
              </div>
            </aside>
            <div className="prose prose-lg mx-auto w-full lg:w-3/4">
              <PortableText value={post.body} components={ptComponents} />
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex justify-center">
          <Link
            href="/blog"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            See all posts
          </Link>
        </div>
      </div>
    </article>
  );
}

export default PostDetail;
