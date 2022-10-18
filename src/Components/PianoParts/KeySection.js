import { useGLTF } from '@react-three/drei';
export function KeySection() {
  const { nodes, materials } = useGLTF('/piano-assets/boesendorfer200.gltf');
  return (
    <group position={[1.35, 0.65, -0.17]}>
      <mesh
        castShadow
        geometry={nodes.Cube105.geometry}
        material={materials['polished black']}
      />
      <mesh
        castShadow
        geometry={nodes.Cube105_1.geometry}
        material={materials['brass.003']}
      />
    </group>
  );
}
