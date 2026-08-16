import React from 'react';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { RESOURCE_ARTICLES } from '../data/firmData';
import { PageView } from '../types';

interface ResourcesPreviewSectionProps {
  onNavigate: (page: PageView, param?: string) => void;
}

export const ResourcesPreviewSection: React.FC<ResourcesPreviewSectionProps> = ({ onNavigate }) => {
  const featuredArticles = RESOURCE_ARTICLES.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-[#FBF9F5] text-[#1E293B] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#B38E45] font-semibold">
              Legal Insights & Analysis
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0E1726] font-normal leading-tight">
              Business Law Insights
            </h2>
            <p className="text-base text-slate-600 font-light">
              Practical guides and legal considerations for Austin business owners, entrepreneurs, and growing companies.
            </p>
          </div>
          <button
            onClick={() => onNavigate('resources')}
            className="self-start sm:self-end px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0E1726] hover:text-[#B38E45] border border-stone-300 hover:border-[#B38E45] rounded transition-colors flex items-center"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </button>
        </div>

        {/* 3 Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => onNavigate('resource-detail', article.id)}
              className="bg-white border border-stone-200 rounded-lg p-7 shadow-sm hover:shadow-lg hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4">
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold uppercase tracking-wider text-[#B38E45] bg-[#F3EFE6] px-2.5 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-stone-400 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl text-[#0E1726] font-medium leading-snug group-hover:text-[#B38E45] transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  {article.excerpt}
                </p>
              </div>

              {/* Read Link */}
              <div className="pt-6 mt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#0E1726] group-hover:text-[#B38E45]">
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
