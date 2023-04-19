import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components';

interface ProjectCardProps {
  img: string;
  description: string;
  github: string;
  projectLink: string;
  name: string;
  alt: string;
  stack: string[];
}

const ProjectCard: FC<ProjectCardProps> = ({
  img,
  description,
  github,
  projectLink,
  name,
  alt,
  stack,
}) => {
  return (
    <div className="relative h-80 w-72 cursor-default rounded-lg bg-zinc-900 py-4 pl-6 pr-4 shadow ring-white hover:ring-1">
      <div className="flex w-full items-center justify-between text-2xl">
        <h2 className="font-roboto leading-7">{name}</h2>
        <div className="relative h-24 w-24 rounded-full">
          <Image src={img} alt={alt} fill={true} />
        </div>
      </div>
      <p className="mt-3 pr-1 font-sans text-[.65rem] text-white/75">
        {description}
      </p>
      <div className="absolute bottom-6 flex gap-2">
        <Link href={projectLink} target="_blank">
          <Button variant="primary" size="small">
            Project
          </Button>
        </Link>
        <Link href={github} target="_blank">
          <Button variant="secondary" size="small">
            GitHub
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-[1.85rem] right-6 flex flex-row gap-1">
        {stack.map((item, idx) => (
          <div key={idx}>
            <Image src={item} alt={item} width={20} height={20} />
            <span className="sr-only">{item.slice(7, -4)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
