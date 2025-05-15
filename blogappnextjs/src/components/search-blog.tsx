"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"

interface SearchBarProps {
  onSearch: (searchTerm: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <form onSubmit={handleSubmit} className="relative mb-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-300"
        />
        <Search className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
      </div>
      <button
        type="submit"
        className="absolute right-2 top-2 bg-slate-800 text-white px-4 py-1 rounded-md hover:bg-slate-700"
      >
        Search
      </button>
    </form>
  )
}
