'use client';

import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function TaggingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const initialQuery = searchParams.get('q') || '';
    setSearchQuery(initialQuery);
  }, [searchParams]);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      router.push(`/tagging?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Tagging Interface</h1>

      <div className="flex items-center space-x-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-6 h-6" />
          <Input
            type="search"
            placeholder="Enter your search query"
            className="pl-12 pr-4 py-3 rounded-full bg-gray-100 border-none shadow-sm focus:ring-2 focus:ring-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
        <Button onClick={() => router.push('/')}>Go Back</Button>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        {searchQuery ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">Results for: {searchQuery}</h2>
            {/* Display relevant results here */}
            <p>No content currently available for this search.</p>
          </div>
        ) : (
          <p className="text-gray-500">Enter a query to start tagging.</p>
        )}
      </div>
    </div>
  );
}
