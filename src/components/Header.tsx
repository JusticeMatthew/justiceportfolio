import { useEffect, type FC } from 'react';
import Image from 'next/image';
import { Events } from 'react-scroll';
import { ScrollLink } from '@/components';

const Header: FC = () => {
  useEffect(() => {
    Events.scrollEvent.register('begin', () => null);
    Events.scrollEvent.register('end', () => null);

    return Events.scrollEvent.remove('begin'), Events.scrollEvent.remove('end');
  }, []);

  return (
    <div className="fixed z-20 flex h-20 w-full items-center justify-center text-white backdrop-blur-md">
      <div className="section flex items-center justify-between">
        <ScrollLink
          to="home"
          active=""
          className="cursor-pointer rounded-md bg-zinc-900 px-2 py-[.3rem]"
        >
          <Image
            src="/images/logoTest.png"
            width={50}
            height={50}
            alt="logo"
            className="p-1"
          />
          {/* <h1 className="font-robotoCondensed text-3xl font-bold uppercase leading-none tracking-wider">
            <span className="text-green">M</span>J
          </h1> */}
        </ScrollLink>
        <nav className="flex">
          {['home', 'projects', 'about', 'contact'].map((navLink, idx) => (
            <ScrollLink
              key={idx}
              to={navLink}
              active="text-green bg-zinc-900 rounded-md"
              className="mx-1 cursor-pointer rounded-md bg-transparent px-3 py-2 transition-all last:mr-0 hover:bg-zinc-900 hover:text-green"
            >
              <p className="font-robotoCondensed uppercase">{navLink}</p>
            </ScrollLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
