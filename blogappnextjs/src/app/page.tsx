"use client";

import { useState, useEffect } from "react";
import { getBlogPosts, getCategories } from "@/lib/blog";
import BlogCard from "@/components/blog-card";
import CategoryFilter from "@/components/category-filter";
import type { Post } from "@/lib/blog";
import AddBlogForm from "@/components/add-blog";
import SearchBar from "@/components/search-blog";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const allPosts = await getBlogPosts();
        const allCategories = await getCategories();

        setPosts(allPosts);
        setFilteredPosts(allPosts);
        setCategories(allCategories);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleFilterChange = (category: string) => {
    setActiveCategory(category);
    applyFilters(category, searchTerm);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    applyFilters(activeCategory, term);
  };

  const applyFilters = (category: string, term: string) => {
    let filtered = [...posts];

    if (category !== "All") {
      filtered = filtered.filter((post) => post.category === category);
    }

    if (term) {
      const searchLower = term.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchLower) ||
          post.content.toLowerCase().includes(searchLower) ||
          post.author.toLowerCase().includes(searchLower)
      );
    }

    setFilteredPosts(filtered);
  };

  const handleAddBlog = (newBlog: Post) => {
    const updatedPosts = [newBlog, ...posts];
    setPosts(updatedPosts);

    if (activeCategory === "All" || activeCategory === newBlog.category) {
      setFilteredPosts([newBlog, ...filteredPosts]);
    }

    if (!categories.includes(newBlog.category) && newBlog.category !== "All") {
      setCategories([...categories, newBlog.category]);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-slate-800"></div>
        </div>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>

      <AddBlogForm onAddBlog={handleAddBlog} categories={categories} />

      <SearchBar onSearch={handleSearch} />

      <CategoryFilter
        categories={categories}
        onCategoryChange={handleFilterChange}
      />

      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">
            {searchTerm
              ? `No posts found matching "${searchTerm}"`
              : "No posts found for this category."}
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, idx) => (
            <BlogCard key={`${post.slug}-${idx}`} post={post} />
          ))}
        </div>
      )}
    </main>
  );
}
