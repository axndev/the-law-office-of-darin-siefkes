import React, { useState } from 'react';
import { Search, Clock, ArrowRight, BookOpen, Tag, Filter } from 'lucide-react';
import { RESOURCE_ARTICLES } from '../data/firmData';
import { PageView } from '../types';

interface ResourcesPageProps {
  onNavigate: (page: PageView, param?: string) => void;
  onOpenConsultation: () => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Contracts & Agreements', 'Business Formation', 'Transactions & M&A', 'Intellectual Property', 'Disputes & Governance', 'Franchise Law'];

  const filteredArticles = RESOURCE_ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = RESOURCE_ARTICLES[0];

  return (
    <div className="bg-[#FBF9F5] text-[#1E293B]">
      {/* Header Banner */}
      <section className="bg-[#0E1726] text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#141F32] border border-[#C5A059]/30 text-xs text-[#C5A059]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Austin Business Law Archive</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal leading-tight">
            Business Law <span className="italic text-[#D6B36E]">Insights</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-light max-w-3xl leading-relaxed">
            Practical legal commentary, due diligence guides, and transactional insights for Texas business owners, executives, and entrepreneurs.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-12">
        {/* Featured Article Card */}
        {selectedCategory === 'All' && !searchQuery && (
          <div
            onClick={() => onNavigate('resource-detail', featuredArticle.id)}
            className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:border-[#C5A059] transition-all duration-300 cursor-pointer group grid grid-cols-1 lg:grid-cols-12"
          >
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-xs">
                  <span className="bg-[#0E1726] text-[#C5A059] px-3 py-1 rounded font-semibold uppercase tracking-wider">
                    Featured Insight
                  </span>
                  <span className="text-slate-500 font-medium">{featuredArticle.category}</span>
                  <span className="text-stone-400">&bull;</span>
                  <span className="text-stone-500 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0E1726] font-medium leading-tight group-hover:text-[#B38E45] transition-colors">
                  {featuredArticle.title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-stone-100 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#0E1726] group-hover:text-[#B38E45]">
                <span>Read Full Article & Checklist</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#141F32] p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium block">
                  Key Takeaways Preview
                </span>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  {featuredArticle.keyTakeaways.slice(0, 3).map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#C5A059] font-bold mr-2">&bull;</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 text-[11px] text-slate-400">
                Author: Darin P. Siefkes &bull; Austin Business Lawyer
              </div>
            </div>
          </div>
        )}

        {/* Filter and Search Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-stone-200">
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#0E1726] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-stone-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search legal articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-white border border-stone-300 rounded text-xs text-slate-900 focus:outline-none focus:border-[#B38E45]"
            />
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => onNavigate('resource-detail', article.id)}
              className="bg-white border border-stone-200 rounded-xl p-8 shadow-sm hover:shadow-lg hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold uppercase tracking-wider text-[#B38E45] bg-[#F3EFE6] px-2.5 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-stone-400 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#0E1726] font-medium leading-snug group-hover:text-[#B38E45] transition-colors">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-1 pt-2">
                  {article.tags.map((tag) => (
                    <span key={tag} className="text-[10px] text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#0E1726] group-hover:text-[#B38E45]">
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="py-16 text-center text-slate-500">
            <p className="text-lg font-serif text-slate-800">No articles match your selection.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-[#B38E45] font-semibold uppercase tracking-wider hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
