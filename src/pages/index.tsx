import { Landing, Projects, About, Contact } from '@/containers';

export default function Home() {
  return (
    <main className="flex w-full flex-col font-sans selection:bg-green selection:text-black">
      <Landing />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
