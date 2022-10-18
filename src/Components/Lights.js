import { useRef } from 'react';
import { PointLightHelper } from 'three';
import { useHelper } from '@react-three/drei';

export function Lights() {
  const light = useRef();
  useHelper(light, PointLightHelper, 'yellow');
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight ref={light} castShadow position={[0, 4, 2]} intensity={1} />
    </>
  );
}
