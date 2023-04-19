import { useEffect } from 'react';
import { Events } from 'react-scroll';
import { Landing, Projects, About, Contact } from '@/containers';

export default function Home() {
  useEffect(() => {
    Events.scrollEvent.register('begin', () => null);
    Events.scrollEvent.register('end', () => null);

    return Events.scrollEvent.remove('begin'), Events.scrollEvent.remove('end');
  }, []);

  return (
    <main className="flex w-full flex-col items-center font-sans selection:bg-green selection:text-black">
      <Landing />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
