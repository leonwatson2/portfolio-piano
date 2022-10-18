export function Screws({ nodes, materials }) {
  return (
    <group>
      <mesh
        geometry={nodes.screws.geometry}
        material={materials.chrome}
        position={[0.12, 0.86, -1.81]}
        rotation={[Math.PI, -1.51, Math.PI]}
        scale={0.68}
      />
      <mesh
        geometry={nodes.screws_capotasto.geometry}
        material={materials.chrome}
        position={[1.42, 0.92, -0.47]}
        rotation={[0, -0.57, 0]}
        scale={0.54}
      />
      <mesh
        geometry={nodes.capodastro.geometry}
        material={materials.frame}
        position={[1.42, 0.91, -0.47]}
      />
      <mesh
        geometry={nodes.screws001.geometry}
        material={materials.chrome}
        position={[1.39, 0.84, -0.31]}
        rotation={[0, -0.99, 0]}
        scale={0.27}
      />
      <mesh
        geometry={nodes.screws007.geometry}
        material={materials.brass}
        position={[0.01, 1.05, -1.57]}
        rotation={[Math.PI, -0.59, Math.PI]}
        scale={0.37}
      />
      <mesh
        geometry={nodes.screws002.geometry}
        material={materials.brass}
        position={[0.08, 0.99, -1.57]}
        rotation={[-2.55, 0, -Math.PI / 2]}
        scale={0.37}
      />
    </group>
  );
}
