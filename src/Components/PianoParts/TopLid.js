import { useGLTF } from '@react-three/drei';
export function TopLid() {
  const { nodes, materials } = useGLTF('/piano-assets/boesendorfer200.gltf');
  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.Cube003.geometry}
        material={materials.brass}
        position={[1.44, 0.99, -0.64]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        geometry={nodes.Cube005.geometry}
        material={materials['polished black']}
        position={[1.44, 0.89, -0.66]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        geometry={nodes.Cube006.geometry}
        material={materials['polished black']}
        position={[1.44, 0.89, -0.71]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        geometry={nodes.lid_prop.geometry}
        material={materials['polished black']}
        position={[1.41, 0.99, -0.67]}
        rotation={[-Math.PI / 2, 0.96, Math.PI / 2]}
      >
        <mesh
          castShadow
          geometry={nodes.half_prop.geometry}
          material={materials['polished black']}
        />
      </mesh>
    </group>
  );
}
