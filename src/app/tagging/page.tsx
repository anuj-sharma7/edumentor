
"use client";

import { useSearchParams } from "next/navigation";

import TaggingInterface from "./tagging-form";

export default function AITaggerPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
      <div className="relative h-full w-full max-w-7xl mx-auto">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-cyan-purple-pink" />
        <TaggingInterface />
      </div>
    </div>
  );
}
