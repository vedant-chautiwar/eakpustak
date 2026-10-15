import React, { useRef, useState, useMemo, useCallback } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {
  Search,
  Clock,
  ChevronRight,
  AlertCircle,
  ArrowRight,
  Sparkles,
  RefreshCw,
  BellRing,
  ExternalLink,
} from 'lucide-react';

import Button from '../components/common/Button';
import SectionHeading from '../components/common/SectionHeading';
import Badge from '../components/common/Badge';

import EventsHero from '../components/pages/events/EventsHero';
import EventsFilterBar from '../components/pages/events/EventsFilterBar';
import NoticeCard from '../components/pages/events/NoticeCard';
import EventCard from '../components/pages/events/EventCard';
import ItemDetailModal from '../components/pages/events/ItemDetailModal';
import Toast from '../components/pages/events/Toast';

import { NOTICES_AND_EVENTS } from '../data/eventsNoticesData';

// Simulated current school operational date for accurate timeline calculations
const SCHOOL_CURRENT_DATE = new Date('2026-10-14T00:00:00');
const INITIAL_PAGE_SIZE = 6;

/**
 * EventsNoticesPage
 * High-utility parent communication portal for EAK International School.
 * Features:
 * - Search by title, description, reference codes, departments, audience
 * - Multi-criteria category, timeframe, and type tab filtering
 * - Functional "Load More" interaction with progress counters
 * - Restrained GSAP hero animations without replaying on filter changes
 * - Accessible empty states and clear active-filter tags
 * - Interactive detail modal and feedback toasts
 */
export default function EventsNoticesPage() {
  const heroRef = useRef(null);

  // Filter & Search States
  const [activeTab, setActiveTab] = useState('all');
  const [activeCategory, setActiveCategory] = useState('All Categories');
  const [activeTimeframe, setActiveTimeframe] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date-asc');
  const [priorityOnly, setPriorityOnly] = useState(false);

  // Pagination / Load More State
  const [visibleCount, setVisibleCount] = useState(INITIAL_PAGE_SIZE);

  // Interactive Modal & Toast States
  const [selectedItem, setSelectedItem] = useState(null);
  const [toast, setToast] = useState(null);

  // ─── 1. Restrained GSAP Entrance Animation ─────────────────────────────
  // Runs ONLY once on initial mount (dependencies: []) to prevent jank on filter changes
  useGSAP(
    () => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced || !heroRef.current) return;

      const heroElements = heroRef.current.querySelectorAll('.hero-reveal');
      if (heroElements.length > 0) {
        gsap.fromTo(
          heroElements,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.08,
            ease: 'power3.out',
            delay: 0.1,
          }
        );
      }
    },
    { scope: heroRef, dependencies: [] }
  );

  // ─── 2. Date Filtering Helper ──────────────────────────────────────────
  const matchesTimeframe = useCallback((dateISO, timeframe) => {
    const itemDate = new Date(`${dateISO}T00:00:00`);
    if (timeframe === 'all') return true;

    if (timeframe === 'upcoming') {
      return itemDate >= SCHOOL_CURRENT_DATE;
    }

    if (timeframe === 'this-month') {
      // October 2026 (month index 9)
      return itemDate.getFullYear() === 2026 && itemDate.getMonth() === 9;
    }

    if (timeframe === 'next-month') {
      // November 2026 (month index 10)
      return itemDate.getFullYear() === 2026 && itemDate.getMonth() === 10;
    }

    if (timeframe === 'december-plus') {
      // December 2026 onwards
      return itemDate >= new Date('2026-12-01T00:00:00');
    }

    if (timeframe === 'archive') {
      // Historical/Past records before operational date
      return itemDate < SCHOOL_CURRENT_DATE;
    }

    return true;
  }, []);

  // ─── 3. Multi-Criteria Filter & Sort Logic ─────────────────────────────
  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    const matched = NOTICES_AND_EVENTS.filter((item) => {
      // 1. Type Tab Filter
      if (activeTab !== 'all' && item.type !== activeTab) {
        return false;
      }

      // 2. Category Filter
      if (activeCategory !== 'All Categories' && item.category !== activeCategory) {
        return false;
      }

      // 3. Timeframe / Date Filter
      if (!matchesTimeframe(item.dateISO, activeTimeframe)) {
        return false;
      }

      // 4. Priority Only Toggle
      if (priorityOnly && !item.important) {
        return false;
      }

      // 5. Search Query (matches title, summary, description, ref, audience, department, venue)
      if (q) {
        const searchableContent = [
          item.title,
          item.summary || '',
          item.description || '',
          item.ref || '',
          item.category || '',
          item.audience || '',
          item.department || '',
          item.venue || '',
          item.type || '',
          item.holidaySpan || '',
        ]
          .join(' ')
          .toLowerCase();

        if (!searchableContent.includes(q)) {
          return false;
        }
      }

      return true;
    });

    // Sort Results
    return [...matched].sort((a, b) => {
      if (sortBy === 'date-asc') {
        return new Date(a.dateISO) - new Date(b.dateISO);
      }
      if (sortBy === 'date-desc') {
        return new Date(b.dateISO) - new Date(a.dateISO);
      }
      if (sortBy === 'priority') {
        if (a.important && !b.important) return -1;
        if (!a.important && b.important) return 1;
        return new Date(a.dateISO) - new Date(b.dateISO);
      }
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  }, [
    activeTab,
    activeCategory,
    activeTimeframe,
    priorityOnly,
    searchQuery,
    sortBy,
    matchesTimeframe,
  ]);

  // ─── 4. Filter Change Handlers (Resetting Pagination Cleanly) ─────────
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setPriorityOnly(false);
    setVisibleCount(INITIAL_PAGE_SIZE);
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(INITIAL_PAGE_SIZE);
  };

  const handleTimeframeChange = (tf) => {
    setActiveTimeframe(tf);
    setVisibleCount(INITIAL_PAGE_SIZE);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setVisibleCount(INITIAL_PAGE_SIZE);
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
    setVisibleCount(INITIAL_PAGE_SIZE);
  };

  // ─── 5. Visible Subset for "Load More" ──────────────────────────────────
  const visibleItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const hasMore = visibleCount < filteredItems.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, filteredItems.length));
  };

  const handleShowAll = () => {
    setVisibleCount(filteredItems.length);
  };

  // ─── 6. Category & Type Counts for Filter Badges ────────────────────────
  const countsByType = useMemo(() => {
    const counts = {
      all: NOTICES_AND_EVENTS.length,
      circular: 0,
      examination: 0,
      holiday: 0,
      event: 0,
      competition: 0,
    };
    NOTICES_AND_EVENTS.forEach((item) => {
      if (counts[item.type] !== undefined) {
        counts[item.type] += 1;
      }
    });
    return counts;
  }, []);

  // ─── 7. High-Level Operational Metrics for Hero ────────────────────────
  const operationalStats = useMemo(() => {
    return {
      circulars: countsByType.circular,
      examinations: countsByType.examination,
      holidays: countsByType.holiday,
      events: countsByType.event,
      competitions: countsByType.competition,
      priorityCount: NOTICES_AND_EVENTS.filter((i) => i.important).length,
    };
  }, [countsByType]);

  // ─── 8. Featured Next 3 Upcoming Events ────────────────────────────────
  const featuredUpcomingEvents = useMemo(() => {
    return NOTICES_AND_EVENTS.filter(
      (item) =>
        (item.type === 'event' || item.type === 'competition') &&
        new Date(item.dateISO) >= SCHOOL_CURRENT_DATE
    )
      .sort((a, b) => new Date(a.dateISO) - new Date(b.dateISO))
      .slice(0, 3);
  }, []);

  // ─── 9. Action Handlers (Toast Feedback) ───────────────────────────────
  const handleDownload = (filename) => {
    setToast({
      title: 'Document Generated',
      message: `Downloaded official dossier: ${filename} (Authorized PDF Prototype).`,
      type: 'success',
    });
  };

  const handleAddToCalendar = (item) => {
    setToast({
      title: 'Calendar Feed Synced',
      message: `"${item.title}" scheduled for ${item.date} has been added to your calendar (.ics).`,
      type: 'info',
    });
  };

  const handleResetFilters = () => {
    setActiveTab('all');
    setActiveCategory('All Categories');
    setActiveTimeframe('all');
    setSearchQuery('');
    setSortBy('date-asc');
    setPriorityOnly(false);
    setVisibleCount(INITIAL_PAGE_SIZE);
  };

  const handleFilterType = (typeKey) => {
    setActiveTab(typeKey);
    setPriorityOnly(false);
    setVisibleCount(INITIAL_PAGE_SIZE);
    document.getElementById('filter-controls')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFilterPriority = () => {
    setPriorityOnly(true);
    setActiveTab('all');
    setVisibleCount(INITIAL_PAGE_SIZE);
    document.getElementById('filter-controls')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCalendar = () => {
    handleDownload('EAK_Michaelmas_Term_2026_Calendar.pdf');
  };

  return (
    <div className="min-h-screen bg-chalk-50 text-slate-800">
      {/* ─── Hero Section with Overview & Operational Stats ─────────────────── */}
      <EventsHero
        heroRef={heroRef}
        stats={operationalStats}
        onFilterType={handleFilterType}
        onFilterPriority={handleFilterPriority}
        onDownloadCalendar={handleDownloadCalendar}
      />

      {/* ─── Featured Upcoming Events Strip (Immediate Visibility) ───────── */}
      <section
        className="py-12 bg-white border-b border-hairline"
        aria-label="Upcoming events preview"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <SectionHeading
              eyebrow="Calendar Preview"
              title="Next Scheduled Highlights"
              description="Immediate inter-house athletic meets, academic symposia, and concerts on the Michaelmas calendar."
            />
            <button
              type="button"
              onClick={() => handleFilterType('event')}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy-950 hover:text-brass-600 transition-colors cursor-pointer"
            >
              All Events ({countsByType.event}) <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredUpcomingEvents.map((ev) => {
              const d = new Date(ev.dateISO);
              const day = d.getDate().toString().padStart(2, '0');
              const mon = d.toLocaleString('en-GB', { month: 'short' }).toUpperCase();
              return (
                <div
                  key={ev.id}
                  onClick={() => setSelectedItem(ev)}
                  className="group bg-chalk-50 border border-hairline rounded-micro p-5 hover:border-brass-500 hover:bg-white hover:shadow-subtle transition-all duration-200 cursor-pointer flex gap-4"
                >
                  <div className="shrink-0 w-14 h-14 bg-navy-950 rounded-micro flex flex-col items-center justify-center text-center">
                    <span className="font-serif text-xl font-bold text-white leading-none">
                      {day}
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-brass-500 mt-0.5">
                      {mon}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant={ev.categoryVariant}>{ev.category}</Badge>
                      {ev.type === 'competition' && (
                        <span className="text-[10px] font-bold text-brass-700 uppercase tracking-wider">
                          Cup Final
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-sm font-semibold text-navy-950 leading-snug truncate group-hover:text-brass-700 transition-colors">
                      {ev.title}
                    </h3>
                    {ev.time && (
                      <p className="text-xs text-slate-500 mt-1 flex items-center gap-1 truncate">
                        <Clock className="w-3 h-3 text-brass-600 shrink-0" />
                        {ev.time}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Sticky Interactive Filter & Search Bar ──────────────────────── */}
      <EventsFilterBar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        activeCategory={activeCategory}
        setActiveCategory={handleCategoryChange}
        activeTimeframe={activeTimeframe}
        setActiveTimeframe={handleTimeframeChange}
        searchQuery={searchQuery}
        setSearchQuery={handleSearchChange}
        sortBy={sortBy}
        setSortBy={handleSortChange}
        countsByType={countsByType}
        totalResults={filteredItems.length}
        onResetFilters={handleResetFilters}
      />

      {/* ─── Filtered Results Section ────────────────────────────────────── */}
      <section
        className="py-14 bg-chalk-50"
        aria-label="Filtered notices and announcements"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Status Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-hairline">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-navy-950 uppercase tracking-wider">
                {filteredItems.length === 0
                  ? 'No records found'
                  : `Showing ${Math.min(visibleCount, filteredItems.length)} of ${
                      filteredItems.length
                    } ${filteredItems.length === 1 ? 'Announcement' : 'Announcements'}`}
              </span>
              {priorityOnly && (
                <span className="inline-flex items-center gap-1 bg-crimson-700/10 text-crimson-700 text-xs px-2 py-0.5 rounded-micro font-semibold">
                  <AlertCircle className="w-3 h-3" />
                  Priority Only
                </span>
              )}
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5 text-brass-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Verified • Academic Registry
              </span>
              <span>Ref: AY-2026/27</span>
            </div>
          </div>

          {/* ─── Empty State (When no results match) ───────────────────────── */}
          {filteredItems.length === 0 && (
            <div className="py-20 px-4 text-center bg-white border border-hairline rounded-micro max-w-2xl mx-auto space-y-4 shadow-subtle">
              <div className="w-14 h-14 bg-chalk-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
                <Search className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-navy-950 mb-1">
                  No matching announcements found
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  We couldn't find any circulars, examination advisories, or calendar fixtures matching your current criteria.
                </p>
              </div>

              <div className="p-4 bg-chalk-50 rounded-micro border border-hairline max-w-md mx-auto text-xs text-slate-500 text-left space-y-1.5">
                <p className="font-semibold text-navy-950 uppercase tracking-wider text-[10px]">
                  Suggested Troubleshooting:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Clear search keywords or check for spelling errors.</li>
                  <li>Reset category dropdown to "All Categories".</li>
                  <li>Switch the timeline selector to "All Dates".</li>
                  <li>View the "All Updates" primary tab.</li>
                </ul>
              </div>

              <div className="pt-2">
                <Button
                  onClick={handleResetFilters}
                  variant="primary"
                  size="md"
                  icon={RefreshCw}
                  iconPosition="left"
                >
                  Reset All Filters
                </Button>
              </div>
            </div>
          )}

          {/* ─── Active Grid Results ───────────────────────────────────────── */}
          {filteredItems.length > 0 && (
            <div className="space-y-10">
              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-200">
                {visibleItems.map((item) => {
                  const isEventOrCompetition =
                    item.type === 'event' || item.type === 'competition';

                  if (isEventOrCompetition) {
                    return (
                      <EventCard
                        key={item.id}
                        item={item}
                        onSelect={setSelectedItem}
                        onAddToCalendar={handleAddToCalendar}
                      />
                    );
                  }

                  return (
                    <NoticeCard
                      key={item.id}
                      item={item}
                      onSelect={setSelectedItem}
                      onDownload={handleDownload}
                    />
                  );
                })}
              </div>

              {/* ─── Functional "Load More" / Pagination Controls ───────────── */}
              {filteredItems.length > INITIAL_PAGE_SIZE && (
                <div className="pt-6 border-t border-hairline flex flex-col items-center justify-center space-y-4">
                  {/* Progress Bar & Counter */}
                  <div className="w-full max-w-md space-y-1.5 text-center">
                    <div className="flex justify-between text-xs text-slate-500 font-mono">
                      <span>
                        Showing {Math.min(visibleCount, filteredItems.length)} of {filteredItems.length}
                      </span>
                      <span>
                        {Math.round(
                          (Math.min(visibleCount, filteredItems.length) /
                            filteredItems.length) *
                            100
                        )}
                        %
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-navy-950 transition-all duration-300 rounded-full"
                        style={{
                          width: `${(Math.min(visibleCount, filteredItems.length) /
                            filteredItems.length) *
                            100}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Buttons */}
                  {hasMore ? (
                    <div className="flex flex-wrap items-center gap-3">
                      <Button
                        onClick={handleLoadMore}
                        variant="primary"
                        size="md"
                        icon={ChevronRight}
                        iconPosition="right"
                      >
                        Load More Updates ({filteredItems.length - visibleCount} remaining)
                      </Button>
                      <Button
                        onClick={handleShowAll}
                        variant="outline"
                        size="md"
                      >
                        Show All ({filteredItems.length})
                      </Button>
                    </div>
                  ) : (
                    <p className="text-xs text-slate-500 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-brass-600" />
                      All {filteredItems.length} announcements are currently displayed.
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ─── Parent Subscription & Portal Support Banner ─────────────────── */}
      <section
        className="py-16 bg-white border-t border-hairline"
        aria-label="Parent portal notifications"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-950 rounded-micro p-8 sm:p-12 lg:p-14 text-white grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-elevated">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brass-500">
                <BellRing className="w-4 h-4 text-brass-500" />
                Real-Time Parent Notifications
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight">
                Receive Urgent Circulars &amp; Calendar Updates Instantly.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Enrolled families can subscribe to automated SMS dispatches and push notifications for urgent examination hall tickets, weather advisories, and term bus route amendments via the EAK Parent Portal application.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-micro p-6 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Simulated Registry Notification Alert
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter parent guardian email..."
                  aria-label="Parent email address"
                  className="flex-1 bg-white/10 border border-white/20 px-3.5 py-2.5 text-xs text-white placeholder:text-slate-400 rounded-micro focus:border-brass-500 focus:bg-white/15 outline-none transition-colors"
                />
                <Button
                  onClick={() =>
                    handleDownload('EAK_Parent_Notification_Subscription.pdf')
                  }
                  variant="accent"
                  size="sm"
                >
                  Subscribe
                </Button>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>iOS &amp; Android Supported</span>
                <span className="text-brass-400 font-semibold flex items-center gap-1">
                  Parent Portal v4.2 <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Accessible Item Detail Modal ─────────────────────────────────── */}
      <ItemDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onDownload={handleDownload}
        onAddToCalendar={handleAddToCalendar}
      />

      {/* ─── Feedback Toast Notification ──────────────────────────────────── */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
