import Link from "next/link";
import { format } from "date-fns";
import type { Post } from "@/lib/blog";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <>
      <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <Link href={`/posts/${post.slug}`}>
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <span className="bg-slate-100 text-slate-800 text-xs px-2 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            <div className="text-gray-500 text-sm mb-4">
              {format(new Date(post.date), "MMMM d, yyyy")} • {post.author}
            </div>
            <p className="text-gray-700">{post.excerpt}</p>
          </div>
        </Link>
      </div>
    </>
  );
}
