/* eslint-disable react/no-unescaped-entities */
import type { FC } from 'react';
import { HexParticles } from '@/components';

const About: FC = () => {
  return (
    <div
      id="about"
      className="flex h-screen w-full items-center justify-center bg-zinc-950 text-white"
    >
      <HexParticles />
      <div className="section z-10 flex items-center justify-center">
        <p className="w-[30rem] rounded-lg p-10 text-center text-sm leading-normal text-zinc-100 backdrop-blur-md">
          Hello, I'm Matthew Justice - a US-based web developer/designer with a
          passion for learning and understanding. With expertise in HTML, CSS,
          JavaScript, and React, I am constantly exploring new technologies and
          expanding my knowledge to create beautiful, intuitive user
          experiences. When I'm not coding, you'll likely find me experimenting
          with new frameworks, exploring the latest design trends, or tinkering
          with new projects. Let's connect and bring your vision to life!
        </p>
      </div>
    </div>
  );
};

export default About;
