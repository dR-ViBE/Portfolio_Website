'use client';

import { useState, useEffect, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import ProfileGate from '@/components/ProfileGate';
import Dashboard from '@/components/Dashboard';

function HomeContent() {
  const [currentProfile, setCurrentProfile] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    // If the URL has ?profile=Recruiter, auto-select that profile.
    const profileParam = searchParams.get('profile');
    if (profileParam) {
      setCurrentProfile(profileParam);
    }
  }, [searchParams]);

  const handleSelectProfile = (profile) => {
    setCurrentProfile(profile);
  };

  return (
    <div className="bg-[#141414] min-h-screen text-white">
      <AnimatePresence mode="wait">
        {!currentProfile ? (
          <ProfileGate key="gate" onSelectProfile={handleSelectProfile} />
        ) : (
          <Dashboard key="dashboard" profile={currentProfile} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="bg-[#141414] min-h-screen"></div>}>
      <HomeContent />
    </Suspense>
  );
}
