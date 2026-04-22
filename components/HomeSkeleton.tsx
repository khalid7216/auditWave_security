"use client";

import Skeleton from "./Skeleton";

export default function HomeSkeleton() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Navbar Skeleton */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-6 md:px-12 py-6 bg-bg border-b border-border">
        <Skeleton width="120px" height="24px" />
        <div className="hidden md:flex gap-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} width="60px" height="14px" />
          ))}
        </div>
      </nav>

      <main className="pt-[100px]">
        {/* Hero Skeleton */}
        <section className="min-h-[80vh] flex items-center px-6 md:px-12 relative overflow-hidden">
          <div className="max-w-[780px] w-full">
            <Skeleton width="200px" height="30px" className="mb-6" />
            <Skeleton width="80%" height="80px" className="mb-4" />
            <Skeleton width="60%" height="80px" className="mb-8" />
            <Skeleton width="100%" height="20px" className="mb-2" />
            <Skeleton width="90%" height="20px" className="mb-10" />
            <div className="flex gap-4">
              <Skeleton width="180px" height="48px" />
              <Skeleton width="140px" height="48px" />
            </div>
          </div>
        </section>

        {/* Skills Skeleton */}
        <section className="py-[100px] px-6 md:px-12 max-w-[1200px] mx-auto border-t border-border">
          <Skeleton width="150px" height="16px" className="mb-4" />
          <Skeleton width="300px" height="40px" className="mb-12" />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-panel border border-border rounded-[6px] p-8 h-[250px]">
                <Skeleton width="40px" height="40px" circle className="mb-6" />
                <Skeleton width="60%" height="20px" className="mb-4" />
                <Skeleton width="100%" height="14px" className="mb-2" />
                <Skeleton width="100%" height="14px" className="mb-2" />
                <Skeleton width="80%" height="14px" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
