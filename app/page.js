import Articles from '@/components/main/Articles';
import Encryption from '@/components/main/Encryption';
import Experience from '@/components/main/Experience';
import Hero from '@/components/main/Hero';
import Projects from '@/components/main/Projects';
import Skills from '@/components/main/Skills';

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
      </div>
    </main>
  );
}
