import type { FC } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import scrollDown from '@/scrollDown.json';
import { Button, WavyText, ScrollLink } from '@/components';

const Landing: FC = () => {
  const fadeIn = {
    animate: { opacity: [0, 1] },
    transition: { duration: 0.5, delay: 0.9 },
  };

  return (
    <section
      id="home"
      className="flex h-screen w-full items-center justify-center bg-papyrus text-white"
    >
      <div className="my-4 flex w-container flex-col items-center justify-center px-6">
        <h1 className="text-center font-roboto text-5xl font-bold leading-normal">
          <WavyText text="Transforming" />
          <motion.span animate={fadeIn.animate} transition={fadeIn.transition}>
            {' '}
            your online presence with <br />
            <span className="border-b-4 border-green pb-1">
              stunning design
            </span>{' '}
            and seamless functionality
          </motion.span>
        </h1>
        <motion.p
          animate={fadeIn.animate}
          transition={fadeIn.transition}
          className="mt-10 text-center text-sm leading-snug text-zinc-500"
        >
          Ready to take your digital presence to the next level?
          {/*eslint-disable-next-line react/no-unescaped-entities*/}
          <br /> Let's work together to create a modern website that not only
          looks great <br /> but also delivers a fantastic user experience.
        </motion.p>
        <motion.div
          animate={fadeIn.animate}
          transition={fadeIn.transition}
          className="mt-12 flex justify-center gap-6"
        >
          <ScrollLink to="projects">
            <Button variant="primary" size="default">
              Projects
            </Button>
          </ScrollLink>
          <ScrollLink to="contact">
            <Button variant="secondary" size="default">
              Contact
            </Button>
          </ScrollLink>
        </motion.div>
      </div>
      <div className="absolute mb-6 flex w-full justify-center self-end">
        <ScrollLink to="projects" className="cursor-pointer rounded-full">
          <motion.div
            initial={{
              scaleY: 0,
              transformOrigin: '0% 20%',
              style: {
                position: 'absolute',
                bottom: '0px',
              },
            }}
            animate={{ scaleY: 1, transition: { duration: 0.4, delay: 1.4 } }}
          >
            <motion.div
              whileHover={{
                y: [0, -5, 0],
                transition: {
                  duration: 0.7,
                  repeat: Infinity,
                },
              }}
            >
              <Lottie
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                animationData={scrollDown}
                loop={true}
                className="h-14 w-14 translate-x-[3px]"
              />
            </motion.div>
          </motion.div>
        </ScrollLink>
      </div>
    </section>
  );
};

export default Landing;
