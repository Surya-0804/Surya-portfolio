import Achievements from '@/components/main/Achievements';
import Articles from '@/components/main/Articles';
import AboutMe from '@/components/main/AboutMe';
import ContactMe from '@/components/main/ContactMe';
import Experience from '@/components/main/Experience';
import Hero from '@/components/main/Hero';
import ImpactMetrics from '@/components/main/ImpactMetrics';
import Projects from '@/components/main/Projects';
import Skills from '@/components/main/Skills';

export default function Home() {
  return (
    <main className="h-full w-full relative z-30">
      <div className="flex flex-col gap-20">
        <Hero />
        <AboutMe />
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
