import React from 'react';
import { ArrowLeft, Clock, Calendar, Tag, Shield, CheckCircle2, ArrowRight, Share2, Phone } from 'lucide-react';
import { RESOURCE_ARTICLES, FIRM_INFO } from '../data/firmData';
import { PageView } from '../types';

interface ResourceDetailPageProps {
  articleId: string;
  onNavigate: (page: PageView, param?: string) => void;
  onOpenConsultation: () => void;
}

export const ResourceDetailPage: React.FC<ResourceDetailPageProps> = ({
  articleId,
  onNavigate,
  onOpenConsultation,
}) => {
  const currentArticle = RESOURCE_ARTICLES.find((a) => a.id === articleId) || RESOURCE_ARTICLES[0];
  const relatedArticles = RESOURCE_ARTICLES.filter((a) => a.id !== currentArticle.id).slice(0, 2);

  return (
    <div className="bg-[#FBF9F5] text-[#1E293B]">
      {/* Header Banner */}
      <section className="bg-[#0E1726] text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <button
            onClick={() => onNavigate('resources')}
            className="inline-flex items-center text-xs uppercase tracking-widest text-[#C5A059] hover:text-[#D6B36E] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Back to All Resources</span>
          </button>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-xs text-slate-300">
              <span className="bg-[#141F32] border border-[#C5A059]/40 text-[#C5A059] px-3 py-1 rounded font-semibold uppercase tracking-wider">
                {currentArticle.category}
              </span>
              <span className="text-stone-400">&bull;</span>
              <span className="flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1 text-[#C5A059]" />
                {currentArticle.readTime}
              </span>
              <span className="text-stone-400">&bull;</span>
              <span>{currentArticle.date}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white leading-tight">
              {currentArticle.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              {currentArticle.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Main Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-12">
        {/* Key Takeaways Callout Box */}
        <div className="bg-[#141F32] text-white rounded-xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-4">
          <div className="flex items-center space-x-2 text-[#C5A059]">
            <Shield className="w-5 h-5" />
            <h3 className="font-serif text-lg text-white font-medium">Executive Summary & Key Takeaways</h3>
          </div>
          <ul className="grid grid-cols-1 gap-3 text-xs sm:text-sm text-slate-200">
            {currentArticle.keyTakeaways.map((point, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] mr-2.5 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Structured Sections */}
        <div className="space-y-10 text-slate-800 font-light leading-relaxed">
          {currentArticle.content.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#0E1726] font-medium leading-snug">
                {sec.sectionHeading}
              </h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="pt-6 border-t border-stone-200 flex items-center space-x-2 text-xs">
          <Tag className="w-4 h-4 text-stone-400" />
          <span className="text-stone-500 font-medium">Filed under:</span>
          <div className="flex flex-wrap gap-1.5">
            {currentArticle.tags.map((tag) => (
              <span key={tag} className="bg-stone-200/70 text-slate-700 px-2.5 py-0.5 rounded text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio Card */}
        <div className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm flex flex-col sm:flex-row items-start gap-6">
          <div className="w-16 h-16 rounded-full bg-[#0E1726] text-[#C5A059] flex items-center justify-center font-serif text-2xl font-bold flex-shrink-0 border border-[#C5A059]/40 shadow">
            DS
          </div>
          <div className="space-y-2 text-xs text-slate-600">
            <h4 className="text-lg font-serif text-[#0E1726] font-medium">About Darin P. Siefkes</h4>
            <p className="leading-relaxed">
              Darin Siefkes is the founder of The Law Office of Darin Siefkes, PLLC in Austin, Texas. He earned his J.D., <em>cum laude</em>, from Baylor University School of Law in 2005 and advises small businesses, startups, and established enterprises on entity formation, commercial agreements, transactions, and proactive risk management.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="text-[#B38E45] font-semibold uppercase tracking-wider hover:underline"
              >
                Schedule Legal Consultation With Darin &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Consultation Callout */}
        <div className="bg-[#0E1726] text-white rounded-xl p-8 sm:p-10 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
              Practical Business Legal Counsel
            </span>
            <h3 className="text-2xl font-serif font-normal">Have a question regarding this legal topic?</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with attorney Darin Siefkes regarding your specific commercial needs.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3.5 bg-[#C5A059] hover:bg-[#D6B36E] text-[#0E1726] font-semibold text-xs uppercase tracking-wider rounded transition-colors whitespace-nowrap"
          >
            Request Consultation
          </button>
        </div>

        {/* Related Articles */}
        <div className="space-y-6 pt-6 border-t border-stone-200">
          <h3 className="font-serif text-2xl text-[#0E1726] font-medium">Related Insights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                onClick={() => {
                  onNavigate('resource-detail', rel.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white p-6 rounded-lg border border-stone-200 hover:border-[#C5A059] cursor-pointer shadow-sm transition-all group space-y-2"
              >
                <span className="text-[10px] uppercase font-semibold text-[#B38E45] bg-[#F3EFE6] px-2 py-0.5 rounded">
                  {rel.category}
                </span>
                <h4 className="font-serif text-lg text-[#0E1726] font-medium group-hover:text-[#B38E45] transition-colors leading-snug">
                  {rel.title}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-2">{rel.excerpt}</p>
                <div className="pt-2 flex items-center text-xs font-semibold text-[#0E1726] group-hover:text-[#B38E45]">
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
