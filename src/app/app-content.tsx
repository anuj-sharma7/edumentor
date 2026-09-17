'use client';

import { usePathname } from 'next/navigation';
import { SidebarProvider } from '@/components/ui/sidebar';
import AppSidebar from '@/components/layout/sidebar';
import Header from '@/components/layout/header';

export default function AppContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDoubtSolverPage = pathname.startsWith('/doubt-solver');
  const isDppStartPage = pathname.startsWith('/dpp/start');
  const isTaggingPage = pathname.startsWith('/tagging');
  const isMockTestStartPage = pathname.startsWith('/mock-test/start');
  const isMockTestReviewPage = pathname.startsWith('/mock-test/review');


  if (isDoubtSolverPage || isDppStartPage || isTaggingPage || isMockTestStartPage || isMockTestReviewPage) {
    return <main>{children}</main>;
  }

  return (
    <SidebarProvider>
      {/* w-full + min-w-0: this div is a flex item of SidebarProvider's wrapper, and
          a flex item defaults to min-width:auto, so it refuses to shrink below its
          content and drags the whole page wider than the viewport on small screens. */}
      <div className="flex min-h-screen w-full min-w-0">
        <AppSidebar />
        {/* min-w-0: a flex child defaults to min-width:auto and refuses to shrink
            below its content, which pushes the whole shell wider than the viewport. */}
        <div className="flex min-w-0 flex-1 flex-col">
          <Header />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
