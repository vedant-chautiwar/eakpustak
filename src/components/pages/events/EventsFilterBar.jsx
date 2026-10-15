import React from 'react';
import { Search, X, SlidersHorizontal, Calendar, Tag, ArrowUpDown } from 'lucide-react';
import {
  CATEGORY_OPTIONS,
  TYPE_TABS,
  TIMEFRAME_OPTIONS,
  SORT_OPTIONS,
} from '../../../data/eventsNoticesData';

/**
 * EventsFilterBar
 * Accessible, robust filter control bar supporting combined search,
 * category, timeframe, and type tab filtering with active filter badges.
 */
export default function EventsFilterBar({
  activeTab,
  setActiveTab,
  activeCategory,
  setActiveCategory,
  activeTimeframe,
  setActiveTimeframe,
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  countsByType,
  totalResults,
  onResetFilters,
}) {
  const isFiltered =
    activeTab !== 'all' ||
    activeCategory !== 'All Categories' ||
    activeTimeframe !== 'all' ||
    searchQuery.trim() !== '' ||
    sortBy !== 'date-asc';

  return (
    <section
      id="filter-controls"
      aria-label="Notices and events search and filters"
      className="bg-white border-b border-hairline sticky top-[80px] z-30 shadow-sm transition-shadow duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Row 1: Primary Type Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-3 border-b border-hairline scrollbar-none">
          {TYPE_TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            const count = countsByType[tab.countKey] || 0;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-micro transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-navy-950 text-white shadow-sm ring-1 ring-navy-900'
                    : 'bg-chalk-50 text-slate-600 hover:text-navy-950 hover:bg-chalk-100 border border-hairline'
                }`}
                aria-pressed={isActive}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Row 2: Search, Category, Date Timeframe, and Sort Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
          {/* Search Box (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search circulars, exams, events, dates, keywords..."
              aria-label="Search notices and events"
              className="w-full bg-chalk-50 border border-hairline pl-9 pr-9 py-2.5 text-xs rounded-micro text-navy-950 placeholder:text-slate-400 focus:border-navy-950 focus:bg-white focus:ring-1 focus:ring-navy-950 outline-none transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search text"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-navy-950 transition-colors p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Dropdown (3 cols on lg) */}
          <div className="lg:col-span-3 relative">
            <div className="relative">
              <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                aria-label="Filter by department category"
                className="w-full bg-chalk-50 border border-hairline pl-8 pr-8 py-2.5 text-xs rounded-micro text-navy-950 focus:border-navy-950 focus:bg-white focus:ring-1 focus:ring-navy-950 outline-none cursor-pointer truncate"
              >
                {CATEGORY_OPTIONS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Date / Timeframe Dropdown (2 cols on lg) */}
          <div className="lg:col-span-2 relative">
            <div className="relative">
              <Calendar className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={activeTimeframe}
                onChange={(e) => setActiveTimeframe(e.target.value)}
                aria-label="Filter by timeframe"
                className="w-full bg-chalk-50 border border-hairline pl-8 pr-8 py-2.5 text-xs rounded-micro text-navy-950 focus:border-navy-950 focus:bg-white focus:ring-1 focus:ring-navy-950 outline-none cursor-pointer truncate"
              >
                {TIMEFRAME_OPTIONS.map((t) => (
                  <option key={t.key} value={t.key}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort By Dropdown (2 cols on lg) */}
          <div className="lg:col-span-2 relative">
            <div className="relative">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort announcements"
                className="w-full bg-chalk-50 border border-hairline pl-8 pr-8 py-2.5 text-xs rounded-micro text-navy-950 focus:border-navy-950 focus:bg-white focus:ring-1 focus:ring-navy-950 outline-none cursor-pointer truncate"
              >
                {SORT_OPTIONS.map((s) => (
                  <option key={s.key} value={s.key}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Row 3: Active Filters Summary & Badges (shown when any filter active) */}
        {isFiltered && (
          <div className="flex flex-wrap items-center gap-2 pt-3 mt-3 border-t border-hairline text-xs">
            <span className="font-semibold text-slate-400 flex items-center gap-1 text-[11px] uppercase tracking-wider">
              <SlidersHorizontal className="w-3 h-3 text-brass-600" />
              Active Filters:
            </span>

            {activeTab !== 'all' && (
              <span className="inline-flex items-center gap-1 bg-chalk-100 text-navy-950 px-2 py-0.5 rounded-micro border border-hairline text-xs">
                Type: {TYPE_TABS.find((t) => t.key === activeTab)?.label}
                <button
                  type="button"
                  onClick={() => setActiveTab('all')}
                  aria-label="Remove type filter"
                  className="hover:text-crimson-700 ml-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {activeCategory !== 'All Categories' && (
              <span className="inline-flex items-center gap-1 bg-chalk-100 text-navy-950 px-2 py-0.5 rounded-micro border border-hairline text-xs">
                Category: {activeCategory}
                <button
                  type="button"
                  onClick={() => setActiveCategory('All Categories')}
                  aria-label="Remove category filter"
                  className="hover:text-crimson-700 ml-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {activeTimeframe !== 'all' && (
              <span className="inline-flex items-center gap-1 bg-chalk-100 text-navy-950 px-2 py-0.5 rounded-micro border border-hairline text-xs">
                Timeline:{' '}
                {TIMEFRAME_OPTIONS.find((t) => t.key === activeTimeframe)?.label}
                <button
                  type="button"
                  onClick={() => setActiveTimeframe('all')}
                  aria-label="Remove timeframe filter"
                  className="hover:text-crimson-700 ml-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {searchQuery && (
              <span className="inline-flex items-center gap-1 bg-chalk-100 text-navy-950 px-2 py-0.5 rounded-micro border border-hairline text-xs">
                Keyword: "{searchQuery}"
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="hover:text-crimson-700 ml-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {sortBy !== 'date-asc' && (
              <span className="inline-flex items-center gap-1 bg-chalk-100 text-navy-950 px-2 py-0.5 rounded-micro border border-hairline text-xs">
                Sorted:{' '}
                {SORT_OPTIONS.find((s) => s.key === sortBy)?.label}
                <button
                  type="button"
                  onClick={() => setSortBy('date-asc')}
                  aria-label="Reset sort"
                  className="hover:text-crimson-700 ml-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            <button
              type="button"
              onClick={onResetFilters}
              className="text-xs font-semibold text-brass-700 hover:text-brass-800 underline underline-offset-2 ml-auto cursor-pointer"
            >
              Clear All Filters ({totalResults} matching)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
