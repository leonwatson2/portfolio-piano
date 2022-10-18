import { useGLTF } from '@react-three/drei';

export function CastIron() {
  const { nodes, materials } = useGLTF('/piano-assets/boesendorfer200.gltf');

  return (
    <mesh
      geometry={nodes['cast-iron_frame'].geometry}
      material={materials.frame}
      position={[0.05, 0.89, -0.23]}
    />
  );
}
