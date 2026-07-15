import Achievements from '@/components/main/Achievements';
import Articles from '@/components/main/Articles';
import ContactMe from '@/components/main/ContactMe';
import WhatIBuild from '@/components/main/WhatIBuild';
import Experience from '@/components/main/Experience';
import Hero from '@/components/main/Hero';
import ImpactMetrics from '@/components/main/ImpactMetrics';
import Projects from '@/components/main/Projects';
import Skills from '@/components/main/Skills';

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <WhatIBuild />
        <Skills />
        <ImpactMetrics />
        <Experience />
        <Projects />
        <Articles />
        <Achievements />
        <ContactMe />
      </div>
    </main>
  );
}
