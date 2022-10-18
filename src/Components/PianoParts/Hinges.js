import { useGLTF } from '@react-three/drei';
export function Hinges() {
  const { nodes, materials } = useGLTF('/piano-assets/boesendorfer200.gltf');
  return (
    <>
      <mesh
        geometry={nodes.hinge_1001.geometry}
        material={materials.brass}
        position={[0, 1, -1.13]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.4}
      />
      <mesh
        geometry={nodes.hinge_2001.geometry}
        material={materials.brass}
        position={[0, 1, -0.68]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.4}
      />
      <mesh
        geometry={nodes.hinge_3001.geometry}
        material={materials.brass}
        position={[0, 1, -1.57]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.4}
      />
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={materials.chrome}
        position={[0, 1, -1.13]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Cylinder009.geometry}
        material={materials.chrome}
        position={[0, 1, -0.69]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Cylinder010.geometry}
        material={materials.chrome}
        position={[0, 1, -1.57]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={-1}
      />
      <mesh
        geometry={nodes.hinge_1.geometry}
        material={materials.brass}
        position={[0, 1, -1.14]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        scale={1.4}
      />
      <mesh
        geometry={nodes.hinge_2.geometry}
        material={materials.brass}
        position={[0, 1, -0.69]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        scale={1.4}
      />
      <mesh
        geometry={nodes.hinge_3.geometry}
        material={materials.brass}
        position={[0, 1, -1.57]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        scale={1.4}
      />
      <mesh
        geometry={nodes.Cylinder011.geometry}
        material={materials.chrome}
        position={[1.41, 0.99, -0.71]}
        rotation={[Math.PI / 2, 0.61, 0]}
        scale={-1}
      />
    </>
  );
}
