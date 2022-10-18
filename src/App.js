import './App.css';
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Piano } from './Components/Piano';

import { Controls, withControls } from 'react-three-gui';
import { Loader, useLocalStorage } from './utils/helpers';
import { Lights } from './Components/Lights';

const TheCanvas = withControls(Canvas);

function App() {
  const [current, setCurrent] = useState(
    localStorage.getItem('currentPart') || 0
  );
  const [persistedParts, setPersistedParts] = useState(
    JSON.parse(localStorage.getItem('persistedParts')) || []
  );
  useLocalStorage('currentPart', current);
  useLocalStorage('persistedParts', JSON.stringify(persistedParts));
  useEffect(() => {
    const handleKeyUp = (e) => {
      switch (e.keyCode) {
        case 37: // left
          current < 0
            ? setCurrent(84)
            : setCurrent((oldCurrent) => (oldCurrent - 1) % 113);
          break;
        case 39: // right
          setCurrent((oldCurrent) => (oldCurrent + 1) % 113);
          break;
        case 32: // space
          setPersistedParts((old) =>
            old
              .concat(current)
              .filter((v, i, a) => a.findLastIndex((t) => t === v) === i)
          );
          break;
        case 17: // ctrl
          setPersistedParts((old) => old.filter((p) => p !== current));
          break;
        default:
          return;
      }
    };
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [current, setCurrent, setPersistedParts]);
  return (
    <div className='App'>
      <Controls.Provider>
        <TheCanvas shadows={{ type: 'BasicShadowMap' }}>
          <Suspense fallback={<Loader />}>
            <OrbitControls />
            <Lights />
            <mesh
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -0.2, 0]}
            >
              <planeGeometry args={[10, 10]} />
              <meshStandardMaterial color={'#27100B'} />
            </mesh>

            <Piano current={current} persistedParts={persistedParts} />
          </Suspense>
        </TheCanvas>
      </Controls.Provider>
    </div>
  );
}
useGLTF.preload('/piano-assets/boesendorfer200.gltf');
export default App;
