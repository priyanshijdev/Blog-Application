import { Metadata } from "next";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import Link from "next/link";
import { getBlogPostById, getBlogPosts } from "@/lib/blog";

export function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getBlogPostById(params?.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPostById(params.slug);
  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="text-slate-600 hover:text-slate-800 mb-6 inline-block"
        >
          ← Back to all posts
        </Link>

        <div className="flex items-center gap-2 mb-4">
          <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm">
            {post?.category}
          </span>
        </div>

        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

        <div className="flex items-center text-gray-500 mb-6">
          <span>{format(new Date(post.date), "MMMM d, yyyy")}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>

        <div className="prose max-w-none">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}
