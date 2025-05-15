"use client"

import { useState, ChangeEvent, FormEvent } from "react"
import type { Post } from "@/lib/blog"

interface AddBlogFormProps {
  onAddBlog: (newBlog: Post) => void
  categories: string[]
}

export default function AddBlogForm({ onAddBlog, categories }: AddBlogFormProps) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    excerpt: "",
    content: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.title.trim()) newErrors.title = "Please enter a title"
    if (!formData.author.trim()) newErrors.author = "Please enter your name"
    if (!formData.category) newErrors.category = "Please select a category"
    if (!formData.content.trim()) newErrors.content = "Content cannot be empty"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    const newBlogPost: Post = {
      slug: formData.title.toLowerCase().replace(/\s+/g, "-"),
      title: formData.title,
      author: formData.author,
      date: new Date().toISOString().split("T")[0],
      category: formData.category,
      excerpt: formData.excerpt || formData.content.substring(0, 120) + "...",
      content: formData.content,
    }

    onAddBlog(newBlogPost)
    setFormData({ title: "", author: "", category: "", excerpt: "", content: "" })
    setIsFormOpen(false)
  }

  if (!isFormOpen) {
    return (
      <div className="mb-8">
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-slate-800 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-slate-700"
        >
          Write a New Blog Post
        </button>
      </div>
    )
  }

  const renderInput = (
    id: string,
    label: string,
    type: "text" | "textarea" | "select" = "text",
    optional = false
  ) => (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium">
        {label} {optional && "(optional)"}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          value={formData[id as keyof typeof formData]}
          onChange={handleInputChange}
          rows={6}
          className={`w-full p-2 border rounded-md ${errors[id] ? "border-red-500" : ""}`}
        />
      ) : type === "select" ? (
        <select
          id={id}
          name={id}
          value={formData[id as keyof typeof formData]}
          onChange={handleInputChange}
  className={`w-full p-2 border rounded-md text-black appearance-none ${errors[id] ? "border-red-500" : "border-gray-300"}`}
        >
          <option value="">Select a category</option>
          {categories.filter(cat => cat !== "All").map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="text"
          id={id}
          name={id}
          value={formData[id as keyof typeof formData]}
          onChange={handleInputChange}
          className={`w-full p-2 border rounded-md ${errors[id] ? "border-red-500" : ""}`}
        />
      )}
      {errors[id] && <p className="text-red-500 text-xs">{errors[id]}</p>}
    </div>
  )

  return (
    <div className="mb-8">
      <div className="border rounded-lg p-6 bg-gray-600	">
        <h2 className="text-xl font-bold mb-4 text-center">Create New Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            {renderInput("title", "Title")}
            {renderInput("author", "Your Name")}
            {renderInput("category", "Category", "select")}
            {renderInput("excerpt", "Excerpt", "text", true)}
          </div>
          <div className="mt-4">{renderInput("content", "Content", "textarea")}</div>
          <div className="mt-6 flex gap-2">
            <button type="submit" className="bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800">
              Publish Post
            </button>
            <button
              type="button"
              onClick={() => setIsFormOpen(false)}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
