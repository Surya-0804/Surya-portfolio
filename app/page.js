import Achievements from '@/components/main/Achievements';
import Articles from '@/components/main/Articles';
import ContactMe from '@/components/main/ContactMe';
import Encryption from '@/components/main/Encryption';
import Experience from '@/components/main/Experience';
import Hero from '@/components/main/Hero';
import Projects from '@/components/main/Projects';
import Skills from '@/components/main/Skills';
import EperienceCard from '@/components/sub/EperienceCard';

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        {/**Adding comment */}
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Experience />
        <Articles />
        <Achievements />
        <ContactMe />
      </div>
    </main>
  );
}
