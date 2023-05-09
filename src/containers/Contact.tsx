import type { FC } from 'react';
import Link from 'next/link';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconSourceCode,
} from '@tabler/icons-react';
import { ContactForm } from '@/components';

const Contact: FC = () => {
  const socials = [
    {
      href: 'https://github.com/JusticeMatthew',
      icon: <IconBrandGithub size={40} className="group-hover:text-green" />,
      text: 'JusticeMatthew',
    },
    {
      href: 'https://www.linkedin.com/in/justicematthew/',
      icon: <IconBrandLinkedin size={40} className="group-hover:text-green" />,
      text: 'justicematthew',
    },
    {
      href: 'https://www.youtube.com/@dawncasting',
      icon: <IconBrandYoutube size={40} className="group-hover:text-green" />,
      text: '@dawncasting',
    },
    {
      href: 'https://github.com/JusticeMatthew/justiceportfolio',
      icon: <IconSourceCode size={40} className="group-hover:text-green" />,
      text: 'source_code',
    },
  ];

  return (
    <div
      id="contact"
      className="flex h-screen w-full items-end justify-center bg-zinc-950 text-white"
    >
      <div className="absolute h-full w-full bg-contact bg-cover opacity-[0.035]" />
      <div className="absolute h-full w-full bg-contactSmall bg-cover opacity-50" />
      <div className="md:section flex h-3/4 flex-col items-center justify-center gap-12 px-10 md:h-[90%] md:flex-row md:justify-between lg:px-16">
        <ContactForm />
        <div
          id="socials"
          className="z-10 flex h-40 w-auto flex-row gap-2 md:-mt-1 md:h-[18.375rem] md:flex-col md:justify-between md:gap-0"
        >
          {socials.map(({ href, icon, text }, idx) => (
            <Link
              key={idx}
              href={href}
              target="_blank"
              className="group flex h-16 w-auto flex-row items-center gap-1 rounded-lg bg-zinc-900 p-3 font-roboto text-2xl tracking-wide text-zinc-400 transition-all hover:scale-105 md:h-auto"
            >
              {icon}
              <span className="hidden md:inline">{text}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
