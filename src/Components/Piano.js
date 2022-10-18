import React, { useEffect, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
// import { BalancePins, CastIron, Screws } from './PianoParts';
import { pianoParts } from '../PianoPartsArray';
export function Piano({ current, persistedParts, ...props }) {
  const { nodes, materials } = useGLTF('/piano-assets/boesendorfer200.gltf');
  const parts = useMemo(
    () => pianoParts(nodes, materials, false),
    [nodes, materials]
  );
  useEffect(() => {
    console.log(persistedParts, parts.length);
  }, [persistedParts]);
  console.log(current);
  return (
    <group {...props} dispose={null} position={[-0.75, 0, 1]}>
      {persistedParts.map((p) => parts[p], [])}

      {parts[current]}
    </group>
  );
}

useGLTF.preload('/piano-assets/boesendorfer200.gltf');
