import { Suspense, useCallback, type FC } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { polygonPathName, loadPolygonPath } from 'tsparticles-path-polygon';
import type { Engine } from 'tsparticles-engine';

const Loading: FC = () => {
  return <div>Loading...</div>;
};

const HexParticles: FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
    loadPolygonPath(engine);
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Particles
        init={particlesInit}
        className="absolute z-0 h-full w-full"
        options={{
          fullScreen: {
            enable: false,
          },
          particles: {
            color: {
              value: '#15db95',
            },
            move: {
              attract: {
                enable: false,
                distance: 10,
                rotate: {
                  x: 2000,
                  y: 2000,
                },
              },
              direction: 'none',
              enable: true,
              outModes: {
                default: 'destroy',
              },
              path: {
                clamp: false,
                enable: true,
                delay: {
                  value: 0,
                },
                generator: polygonPathName,
                options: {
                  sides: 6,
                  turnSteps: 30,
                  angle: 30,
                },
              },
              random: false,
              speed: 1,
              straight: false,
              trail: {
                fillColor: '#020202',
                length: 20,
                enable: true,
              },
            },
            number: {
              limit: 10,
              value: 0,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: 2,
            },
          },
          background: {
            color: '#000',
          },
          emitters: {
            direction: 'none',
            life: {
              count: 1,
              duration: 10,
            },
            rate: {
              quantity: 1,
              delay: 1,
            },
            size: {
              width: 0,
              height: 0,
            },
            position: {
              x: 50,
              y: 50,
            },
          },
        }}
      />
    </Suspense>
  );
};

export default HexParticles;
