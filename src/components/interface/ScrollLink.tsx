import React, { type ReactNode, type FC } from 'react';
import { Link } from 'react-scroll';

interface ScrollLinkProps {
  children: ReactNode;
  to: string;
  active?: string;
  className?: string;
}

const ScrollLink: FC<ScrollLinkProps> = ({
  children,
  to,
  active,
  className,
}) => {
  return (
    <Link
      to={to}
      activeClass={active}
      spy={true}
      smooth={true}
      duration={500}
      className={className}
    >
      {children}
    </Link>
  );
};

export default ScrollLink;
