import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, Scale, ArrowRight, FileText } from 'lucide-react';
import { PRACTICE_AREAS, RESOURCE_ARTICLES, FIRM_INFO } from '../data/firmData';
import { PageView } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageView, param?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return { practiceAreas: [], articles: [], general: [] };
    const q = query.toLowerCase();

    const matchingPractices = PRACTICE_AREAS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.whatWeHelpWith.some((item) => item.toLowerCase().includes(q))
    );

    const matchingArticles = RESOURCE_ARTICLES.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q))
    );

    return {
      practiceAreas: matchingPractices,
      articles: matchingArticles,
    };
  }, [query]);

  if (!isOpen) return null;

  const handleSelectPractice = (id: string) => {
    onNavigate('practice-area-detail', id);
    onClose();
  };

  const handleSelectArticle = (id: string) => {
    onNavigate('resource-detail', id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-start justify-center p-4 pt-16 sm:pt-24 animate-in fade-in duration-150">
      <div
        className="relative bg-[#0E1726] border border-slate-700/90 rounded-xl shadow-2xl max-w-2xl w-full text-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-700/80 flex items-center space-x-3 bg-[#141F32]">
          <Search className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search practice areas, legal guides, contracts, LLCs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent border-none text-white text-base focus:outline-none placeholder:text-slate-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-white px-2 py-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {!query.trim() ? (
            <div className="py-6 text-center space-y-4">
              <p className="text-xs uppercase tracking-widest text-[#C5A059] font-medium">Quick Search Topics</p>
              <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
                {['Business Formation', 'Texas LLC', 'Contract Drafting', 'Trademarks', 'Commercial Lease', 'Buying a Business', 'FDD Review'].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-3 py-1.5 rounded-full bg-[#141F32] hover:bg-[#1C2B44] text-xs text-slate-300 hover:text-[#C5A059] border border-slate-700 transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : (
            <>
              {/* Practice Areas */}
              {searchResults.practiceAreas.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-2 flex items-center">
                    <Scale className="w-3.5 h-3.5 mr-1.5" />
                    Practice Areas ({searchResults.practiceAreas.length})
                  </h4>
                  <div className="space-y-1.5">
                    {searchResults.practiceAreas.map((area) => (
                      <button
                        key={area.id}
                        onClick={() => handleSelectPractice(area.id)}
                        className="w-full text-left p-3 rounded-lg bg-[#141F32]/60 hover:bg-[#141F32] border border-slate-800 hover:border-[#C5A059]/50 transition-colors group flex items-center justify-between"
                      >
                        <div>
                          <div className="font-serif text-white group-hover:text-[#C5A059] text-sm font-medium">
                            {area.title}
                          </div>
                          <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                            {area.shortDescription}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#C5A059] flex-shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Articles & Guides */}
              {searchResults.articles.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-2 flex items-center">
                    <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                    Legal Guides & Insights ({searchResults.articles.length})
                  </h4>
                  <div className="space-y-1.5">
                    {searchResults.articles.map((article) => (
                      <button
                        key={article.id}
                        onClick={() => handleSelectArticle(article.id)}
                        className="w-full text-left p-3 rounded-lg bg-[#141F32]/60 hover:bg-[#141F32] border border-slate-800 hover:border-[#C5A059]/50 transition-colors group flex items-center justify-between"
                      >
                        <div>
                          <div className="text-[10px] uppercase tracking-wider text-[#C5A059] font-medium">
                            {article.category}
                          </div>
                          <div className="font-serif text-white group-hover:text-[#C5A059] text-sm font-medium">
                            {article.title}
                          </div>
                          <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                            {article.excerpt}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#C5A059] flex-shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {searchResults.practiceAreas.length === 0 && searchResults.articles.length === 0 && (
                <div className="py-8 text-center text-slate-400">
                  <p className="text-sm">No exact matches found for "{query}".</p>
                  <p className="text-xs text-slate-500 mt-1">
                    Try searching for terms like "LLC", "Contract", "Trademark", "Due Diligence", or "Lease".
                  </p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#09101D] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Search Austin Business Legal Resources</span>
          <button
            onClick={() => {
              onNavigate('contact');
              onClose();
            }}
            className="text-[#C5A059] hover:underline"
          >
            Direct Inquiry &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
