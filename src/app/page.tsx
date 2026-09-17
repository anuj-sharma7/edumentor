import DashboardView from './dashboard-view';
import { getDashboardStats, getTopChapters } from '@/lib/dashboard-stats';

/**
 * Server component on purpose: the figures below are derived from the full
 * question bank, and doing that here keeps the chapter data out of the client
 * bundle entirely. Only the resulting numbers cross the boundary.
 */
export default function HomePage() {
  return (
    <DashboardView
      stats={getDashboardStats()}
      chaptersBySubject={{
        physics: getTopChapters('Physics'),
        chemistry: getTopChapters('Chemistry'),
        mathematics: getTopChapters('Mathematics'),
      }}
    />
  );
}
