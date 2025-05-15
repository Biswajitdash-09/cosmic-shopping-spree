
import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { products } from "@/data/products";
import { CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<Array<{id: number, title: string}>>([]);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };
    
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  
  useEffect(() => {
    if (searchTerm.length > 1) {
      const filtered = products
        .filter(product => 
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map(product => ({
          id: product.id,
          title: product.title
        }));
      setSearchResults(filtered.slice(0, 5));
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOpen(false);
    console.log('Searching for:', searchTerm);
    // In a real implementation, you would redirect to search results
    if (searchTerm) {
      navigate(`/category/${searchTerm.toLowerCase()}`);
    }
  };

  return (
    <>
      <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-8">
        <div className="relative flex items-center">
          <Input
            type="text"
            placeholder="Search products... (Ctrl+K)"
            className="w-full rounded-l-md rounded-r-none border-none h-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={() => setIsOpen(true)}
          />
          <Button 
            type="submit" 
            className="h-10 px-4 rounded-l-none bg-amazon-yellow hover:bg-amazon-orange"
          >
            <Search className="h-5 w-5 text-amazon-dark"/>
          </Button>
        </div>
      </form>
      
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput
          placeholder="Search products..."
          value={searchTerm}
          onValueChange={setSearchTerm}
          ref={inputRef}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {searchResults.length > 0 && (
            <CommandGroup heading="Products">
              {searchResults.map((result) => (
                <CommandItem
                  key={result.id}
                  onSelect={() => {
                    navigate(`/product/${result.id}`);
                    setIsOpen(false);
                  }}
                >
                  {result.title}
                </CommandItem>
              ))}
            </CommandGroup>
          )}
          <CommandGroup heading="Categories">
            <CommandItem onSelect={() => {
              navigate('/category/electronics');
              setIsOpen(false);
            }}>
              Electronics
            </CommandItem>
            <CommandItem onSelect={() => {
              navigate('/category/clothing');
              setIsOpen(false);
            }}>
              Clothing
            </CommandItem>
            <CommandItem onSelect={() => {
              navigate('/category/books');
              setIsOpen(false);
            }}>
              Books
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchBar;
