export const pianoParts = (nodes, materials, castShadow) => [
  <mesh
    castShadow={castShadow}
    geometry={nodes.rim_internal_left.geometry}
    material={materials['polished black']}
    position={[0.02, 0.65, -0.3]}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.rim_internal_left001.geometry}
    material={materials['polished black']}
    position={[1.44, 0.65, -0.3]}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.keyslip.geometry}
    material={materials['polished black']}
    position={[0.05, 0.7, 0]}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.keyblock_lx.geometry}
    material={materials['polished black']}
    position={[0.05, 0.7, -0.02]}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.keyblock_rx.geometry}
    material={materials['polished black']}
    position={[1.36, 0.7, -0.02]}
  />,
  <group name={'Pedals'} position={[0.61, 0.03, -0.27]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube063.geometry}
      material={materials.brass}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube063_1.geometry}
      material={materials['polished black']}
    />
  </group>,
  <group position={[0.03, 0.65, -0.17]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube104.geometry}
      material={materials['polished black']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube104_1.geometry}
      material={materials['brass.003']}
    />
  </group>,
  <group position={[0.05, 0.87, -0.19]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube107.geometry}
      material={materials['polished black']}
    />
  </group>,

  <group position={[1.35, 0.65, -0.17]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube105.geometry}
      material={materials['polished black']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube105_1.geometry}
      material={materials['brass.003']}
    />
  </group>,
  <mesh
    castShadow={castShadow}
    geometry={nodes.treble_caster.geometry}
    material={materials.brass}
    position={[1.41, 0.04, -0.36]}
    rotation={[0, 0, -Math.PI / 2]}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.bass_caster.geometry}
    material={materials.brass}
    position={[0.08, 0.04, -0.36]}
    rotation={[0, 0, -Math.PI / 2]}
  />,
  <group>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube003.geometry}
      material={materials.brass}
      position={[1.44, 0.99, -0.64]}
      rotation={[-Math.PI, 0, -Math.PI]}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube005.geometry}
      material={materials['polished black']}
      position={[1.44, 0.89, -0.66]}
      rotation={[0, Math.PI / 2, 0]}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube006.geometry}
      material={materials['polished black']}
      position={[1.44, 0.89, -0.71]}
      rotation={[0, Math.PI / 2, 0]}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.lid_prop.geometry}
      material={materials['polished black']}
      position={[1.41, 0.99, -0.67]}
      rotation={[-Math.PI / 2, 0.96, Math.PI / 2]}
    >
      <mesh
        castShadow={castShadow}
        geometry={nodes.half_prop.geometry}
        material={materials['polished black']}
      />
    </mesh>
  </group>,
  <group position={[1.35, 0.65, -0.17]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube105.geometry}
      material={materials['polished black']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube105_1.geometry}
      material={materials['brass.003']}
    />
  </group>,

  <group position={[0.69, 0.65, -1.81]} rotation={[0, Math.PI / 2, 0]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube103.geometry}
      material={materials['polished black']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube103_1.geometry}
      material={materials['brass.003']}
    />
  </group>,
  <mesh
    geometry={nodes['cast-iron_frame'].geometry}
    material={materials.frame}
    position={[0.05, 0.89, -0.23]}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.point_caster.geometry}
    material={materials.brass}
    position={[0.5, 0.04, -1.86]}
    rotation={[0, 0, -Math.PI / 2]}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.front_duplex_bridge.geometry}
    material={materials.chrome}
    position={[0.1, 0.86, -0.3]}
    rotation={[0, 0.16, 0]}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.front_duplex_bridge001.geometry}
    material={materials.chrome}
    position={[0.54, 0.86, -0.33]}
    rotation={[0, 0.35, 0]}
    scale={[0.82, 1, 1]}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.capstan.geometry}
    material={materials['brass.001']}
    position={[1.39, 0.84, -0.4]}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.white_keys_balance_pin004.geometry}
    material={materials.chrome}
    position={[1.3, 0.77, -0.24]}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.screw001.geometry}
    material={materials['brass.001']}
    position={[0.01, 0.67, -0.2]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={1.8}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.hammer_support002.geometry}
    material={materials['brass.001']}
    position={[1.02, 0.68, -0.2]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={1.8}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.hammer_support003.geometry}
    material={materials['brass.001']}
    position={[1.33, 0.67, -0.2]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={1.8}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.hammer_support004.geometry}
    material={materials['brass.001']}
    position={[0.75, 0.68, -0.2]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={1.8}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.hammer_support005.geometry}
    material={materials['brass.001']}
    position={[0.44, 0.68, -0.2]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={1.8}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.screw002.geometry}
    material={materials.chrome}
    position={[1.41, 0.84, -0.33]}
    rotation={[0, 0.33, 0]}
  />,
  <group position={[1.43, 0.72, -0.32]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube039.geometry}
      material={materials.chrome}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube039_1.geometry}
      material={materials['chrome.001']}
    />
  </group>,
  <group position={[1.11, 0.72, -0.32]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube017.geometry}
      material={materials.chrome}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube017_1.geometry}
      material={materials['chrome.001']}
    />
  </group>,
  <group position={[0.84, 0.72, -0.32]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube018.geometry}
      material={materials.chrome}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube018_1.geometry}
      material={materials['chrome.001']}
    />
  </group>,
  <group position={[0.52, 0.72, -0.32]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube021.geometry}
      material={materials.chrome}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube021_1.geometry}
      material={materials['chrome.001']}
    />
  </group>,
  <group position={[0.11, 0.72, -0.32]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube024.geometry}
      material={materials.chrome}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube024_1.geometry}
      material={materials['chrome.001']}
    />
  </group>,
  <mesh
    castShadow={castShadow}
    geometry={nodes.capstan001.geometry}
    material={materials['brass.001']}
    position={[1.08, 0.84, -0.4]}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.screw003.geometry}
    material={materials.chrome}
    position={[1.1, 0.84, -0.33]}
    rotation={[0, -0.59, 0]}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.screw004.geometry}
    material={materials.chrome}
    position={[0.82, 0.84, -0.33]}
    rotation={[0, 0.2, 0]}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.screw005.geometry}
    material={materials.chrome}
    position={[0.5, 0.84, -0.33]}
    rotation={[0, 1.04, 0]}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.screw.geometry}
    material={materials.chrome}
    position={[0.09, 0.84, -0.33]}
    rotation={[0, 1.04, 0]}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.capstan002.geometry}
    material={materials['brass.001']}
    position={[0.81, 0.84, -0.4]}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.capstan003.geometry}
    material={materials['brass.001']}
    position={[0.45, 0.84, -0.4]}
  />,
  <group position={[0.05, 0.97, -0.21]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube101.geometry}
      material={materials['polished black']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube101_1.geometry}
      material={materials['black felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.hinge.geometry}
      material={materials['brass.003']}
      position={[0.71, 0.02, -0.08]}
      rotation={[0, 0, -Math.PI / 2]}
    >
      <mesh
        castShadow={castShadow}
        geometry={nodes.Cylinder013_1.geometry}
        material={materials['chrome.005']}
        scale={[0.6, 1.02, 0.6]}
      />
    </mesh>
    <mesh
      castShadow={castShadow}
      geometry={nodes.hinge001.geometry}
      material={materials['brass.003']}
      position={[1.08, 0.02, -0.08]}
      rotation={[0, 0, -Math.PI / 2]}
    >
      <mesh
        castShadow={castShadow}
        geometry={nodes.Cylinder015_1.geometry}
        material={materials['chrome.005']}
        scale={[0.6, 1.02, 0.6]}
      />
    </mesh>
    <mesh
      castShadow={castShadow}
      geometry={nodes.hinge002.geometry}
      material={materials['brass.003']}
      position={[0.31, 0.02, -0.08]}
      rotation={[0, 0, -Math.PI / 2]}
    >
      <mesh
        castShadow={castShadow}
        geometry={nodes.Cylinder018_1.geometry}
        material={materials['chrome.005']}
        scale={[0.6, 1.02, 0.6]}
      />
    </mesh>
    <mesh
      castShadow={castShadow}
      geometry={nodes.music_desk.geometry}
      material={materials['polished black']}
      position={[0.71, 0.02, -0.08]}
      rotation={[-Math.PI / 9, 0, 0]}
      scale={[0.89, 1, 1]}
    >
      <mesh
        castShadow={castShadow}
        geometry={nodes.Cylinder014_1.geometry}
        material={materials['brass.003']}
        rotation={[-Math.PI, 0, Math.PI / 2]}
        scale={-1}
      />
      <mesh
        castShadow={castShadow}
        geometry={nodes.Cylinder016.geometry}
        material={materials['brass.003']}
        position={[0.42, 0, 0]}
        rotation={[-Math.PI, 0, Math.PI / 2]}
        scale={-1}
      />
      <mesh
        castShadow={castShadow}
        geometry={nodes.Cylinder019_1.geometry}
        material={materials['brass.003']}
        position={[-0.44, 0, 0]}
        rotation={[-Math.PI, 0, Math.PI / 2]}
        scale={-1}
      />
      <mesh
        castShadow={castShadow}
        geometry={nodes.Cylinder022_1.geometry}
        material={materials['brass.003']}
        position={[0.38, 0.15, 0]}
        rotation={[-Math.PI, 0, Math.PI / 2]}
        scale={-1}
      />
      <mesh
        castShadow={castShadow}
        geometry={nodes.Cylinder025_1.geometry}
        material={materials['brass.003']}
        position={[-0.4, 0.15, 0]}
        rotation={[-Math.PI, 0, Math.PI / 2]}
        scale={-1}
      />
      <mesh
        castShadow={castShadow}
        geometry={nodes.music_desk_support.geometry}
        material={materials['polished black.001']}
        position={[0.39, 0.15, 0]}
        rotation={[0.32, 0, 0]}
      >
        <mesh
          castShadow={castShadow}
          geometry={nodes.Cylinder023_1.geometry}
          material={materials['brass.003']}
          position={[-0.01, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
          scale={-1}
        >
          <mesh
            castShadow={castShadow}
            geometry={nodes.Cylinder021_1.geometry}
            material={materials['chrome.005']}
            rotation={[0, 0, -Math.PI]}
            scale={[-0.6, -1.02, -0.6]}
          />
        </mesh>
        <mesh
          castShadow={castShadow}
          geometry={nodes.Cylinder027_1.geometry}
          material={materials['brass.003']}
          position={[-0.78, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
          scale={-1}
        >
          <mesh
            castShadow={castShadow}
            geometry={nodes.Cylinder024_1.geometry}
            material={materials['chrome.005']}
            scale={[0.6, 1.02, 0.6]}
          />
        </mesh>
      </mesh>
    </mesh>
  </group>,
  <mesh
    castShadow={castShadow}
    geometry={nodes.treble.geometry}
    material={materials.chrome}
    position={[1.39, 0.86, -0.35]}
    rotation={[-Math.PI / 2, Math.PI / 2, 0]}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.mid_treble.geometry}
    material={materials.chrome}
    position={[1.39, 0.86, -0.35]}
    rotation={[-Math.PI / 2, Math.PI / 2, 0]}
  />,
  <group
    position={[1.39, 0.83, -0.35]}
    rotation={[-Math.PI / 2, Math.PI / 2, 0]}
  >
    <mesh
      castShadow={castShadow}
      geometry={nodes.Circle003.geometry}
      material={materials.chrome}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Circle003_1.geometry}
      material={materials['chrome.004']}
    />
  </group>,
  <mesh
    castShadow={castShadow}
    geometry={nodes.Circle004.geometry}
    material={materials.chrome}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.Circle004_1.geometry}
    material={materials['chrome.004']}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.Circle004_2.geometry}
    material={materials['copper strings']}
  />,
  <group position={[-0.23, 0, 0.01]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Circle005.geometry}
      material={materials.chrome}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Circle005_1.geometry}
      material={materials['chrome.004']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Circle005_2.geometry}
      material={materials['copper strings']}
    />
  </group>,
  <group position={[0, 0.65, -0.15]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube008.geometry}
      material={materials['black wood']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube008_1.geometry}
      material={materials.metal}
    />
  </group>,
  <group position={[0, 1, -1.1]} rotation={[0, 0, -0.96]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube110.geometry}
      material={materials['brass.003']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube110_1.geometry}
      material={materials['polished black']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube110_2.geometry}
      material={materials['black wood']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube110_3.geometry}
      material={materials['lid bottom']}
    />
    <group
      position={[-0.02, 1.47, 0.49]}
      rotation={[-Math.PI, 0, -Math.PI / 2]}
    >
      <mesh
        castShadow={castShadow}
        geometry={nodes.Cube106.geometry}
        material={materials['polished black']}
      />
      <mesh
        castShadow={castShadow}
        geometry={nodes.Cube106_1.geometry}
        material={materials['brass.003']}
      />
      <mesh
        castShadow={castShadow}
        geometry={nodes.Cube106_2.geometry}
        material={materials['metal.002']}
      />
    </group>
    ,
  </group>,
  <group position={[0, 0.65, -0.15]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube007.geometry}
      material={materials['black wood']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube007_1.geometry}
      material={materials['polished black']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube007_2.geometry}
      material={materials.metal}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube007_3.geometry}
      material={materials.brass}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube007_4.geometry}
      material={materials.copper}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube007_5.geometry}
      material={materials['green felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube007_6.geometry}
      material={materials.wood}
    />
  </group>,
  <group position={[0, 0.65, -0.15]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube102.geometry}
      material={materials['rim mat.001']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube102_1.geometry}
      material={materials['brass.003']}
    />
  </group>,
  <mesh
    castShadow={castShadow}
    geometry={nodes.hammers_rail006.geometry}
    material={materials['Wood action']}
    position={[1.15, 0.71, -0.56]}
    rotation={[-Math.PI / 2, 0, -Math.PI]}
  />,
  <group position={[1.12, 0.75, -0.61]} rotation={[Math.PI, 0, Math.PI]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube058.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube058_1.geometry}
      material={materials['chrome.001']}
    />
  </group>,
  <group position={[1.11, 0.76, -0.56]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube059.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube059_1.geometry}
      material={materials.metal}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube059_2.geometry}
      material={materials.chrome}
    />
  </group>,
  <group position={[1.12, 0.78, -0.59]} scale={-1}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube060.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube060_1.geometry}
      material={materials['chrome.001']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube060_2.geometry}
      material={materials['white felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube060_3.geometry}
      material={materials['red felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube060_4.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube060_5.geometry}
      material={materials['polished black']}
    />
  </group>,
  <group position={[0.83, 0.76, -0.56]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube075.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube075_1.geometry}
      material={materials.metal}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube075_2.geometry}
      material={materials.chrome}
    />
  </group>,
  <group position={[0.84, 0.78, -0.59]} scale={-1}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube076.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube076_1.geometry}
      material={materials['chrome.001']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube076_2.geometry}
      material={materials['white felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube076_3.geometry}
      material={materials['red felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube076_4.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube076_5.geometry}
      material={materials['polished black']}
    />
  </group>,
  <group position={[0.52, 0.76, -0.56]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube077.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube077_1.geometry}
      material={materials.metal}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube077_2.geometry}
      material={materials.chrome}
    />
  </group>,
  <group position={[0.52, 0.78, -0.59]} scale={-1}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube078.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube078_1.geometry}
      material={materials['chrome.001']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube078_2.geometry}
      material={materials['white felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube078_3.geometry}
      material={materials['red felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube078_4.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube078_5.geometry}
      material={materials['polished black']}
    />
  </group>,
  <group position={[0.1, 0.76, -0.56]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube079.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube079_1.geometry}
      material={materials.metal}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube079_2.geometry}
      material={materials.chrome}
    />
  </group>,
  <group position={[0.11, 0.78, -0.59]} scale={-1}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube080.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube080_1.geometry}
      material={materials['chrome.001']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube080_2.geometry}
      material={materials['white felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube080_3.geometry}
      material={materials['red felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube080_4.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube080_5.geometry}
      material={materials['polished black']}
    />
  </group>,
  <group position={[0.84, 0.75, -0.61]} rotation={[Math.PI, 0, Math.PI]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube014.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube014_1.geometry}
      material={materials['chrome.001']}
    />
  </group>,
  <group position={[0.52, 0.75, -0.61]} rotation={[Math.PI, 0, Math.PI]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube034.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube034_1.geometry}
      material={materials['chrome.001']}
    />
  </group>,
  <group position={[0.13, 0.75, -0.61]} rotation={[Math.PI, 0, Math.PI]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube099.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube099_1.geometry}
      material={materials['chrome.001']}
    />
  </group>,
  <mesh
    castShadow={castShadow}
    geometry={nodes.keyframe.geometry}
    material={materials['Wood action']}
    position={[0.14, 0.7, -0.02]}
  />,
  <group position={[0.29, 0.74, -0.07]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube023.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube023_1.geometry}
      material={materials['black wood']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube023_2.geometry}
      material={materials['red felt']}
    />
  </group>,
  <group position={[1.4, 0.84, -0.32]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube022.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube022_1.geometry}
      material={materials['chrome.001']}
    />
  </group>,
  <group position={[1.39, 0.87, -0.35]} rotation={[-Math.PI / 9, 0, 0]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube030.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube030_1.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube030_2.geometry}
      material={materials['yellow felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube030_3.geometry}
      material={materials['white felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube030_4.geometry}
      material={materials['red felt']}
    />
  </group>,
  <group position={[0.1, 0.76, -0.2]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube020.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube020_1.geometry}
      material={materials['red felt']}
    />
  </group>,
  <group position={[1.39, 0.82, -0.33]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cylinder007.geometry}
      material={materials['red felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cylinder007_1.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cylinder007_2.geometry}
      material={materials['chrome.001']}
    />
  </group>,
  <group position={[0.14, 0.69, -0.02]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube019.geometry}
      material={materials['keys white']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube019_1.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube019_2.geometry}
      material={materials['red felt']}
    />
  </group>,
  <group position={[1.39, 0.76, -0.45]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube035.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube035_1.geometry}
      material={materials['chrome.001']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube035_2.geometry}
      material={materials['white felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube035_3.geometry}
      material={materials['red felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube035_4.geometry}
      material={materials['Wood action']}
    />
  </group>,
  <mesh
    castShadow={castShadow}
    geometry={nodes.hammers_rail.geometry}
    material={materials['Wood action']}
    position={[1.39, 0.82, -0.32]}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.hammers_rail001.geometry}
    material={materials['Wood action']}
    position={[1.38, 0.82, -0.33]}
  />,
  <group position={[1.09, 0.84, -0.32]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube025.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube025_1.geometry}
      material={materials['chrome.001']}
    />
  </group>,
  <group position={[1.08, 0.87, -0.35]} rotation={[-Math.PI / 9, 0, 0]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube041.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube041_1.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube041_2.geometry}
      material={materials['yellow felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube041_3.geometry}
      material={materials['white felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube041_4.geometry}
      material={materials['red felt']}
    />
  </group>,
  <mesh
    castShadow={castShadow}
    geometry={nodes.hammers_rail002.geometry}
    material={materials['Wood action']}
    position={[1.07, 0.82, -0.33]}
  />,
  <group position={[1.08, 0.82, -0.33]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cylinder003.geometry}
      material={materials['red felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cylinder003_1.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cylinder003_2.geometry}
      material={materials['chrome.001']}
    />
  </group>,
  <group position={[0.81, 0.87, -0.35]} rotation={[-Math.PI / 9, 0, 0]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube046.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube046_1.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube046_2.geometry}
      material={materials['yellow felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube046_3.geometry}
      material={materials['white felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube046_4.geometry}
      material={materials['red felt']}
    />
  </group>,
  <group position={[0.81, 0.84, -0.32]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube047.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube047_1.geometry}
      material={materials['chrome.001']}
    />
  </group>,
  <group position={[0.81, 0.82, -0.33]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cylinder006.geometry}
      material={materials['red felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cylinder006_1.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cylinder006_2.geometry}
      material={materials['chrome.001']}
    />
  </group>,
  <mesh
    castShadow={castShadow}
    geometry={nodes.hammers_rail003.geometry}
    material={materials['Wood action']}
    position={[0.79, 0.82, -0.33]}
  />,
  <group position={[0.45, 0.87, -0.35]} rotation={[-Math.PI / 9, 0, 0]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube050.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube050_1.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube050_2.geometry}
      material={materials['yellow felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube050_3.geometry}
      material={materials['white felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube050_4.geometry}
      material={materials['red felt']}
    />
  </group>,
  <group position={[0.48, 0.84, -0.32]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube054.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube054_1.geometry}
      material={materials['chrome.001']}
    />
  </group>,
  <group position={[0.45, 0.82, -0.33]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cylinder009_1.geometry}
      material={materials['red felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cylinder009_2.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cylinder009_3.geometry}
      material={materials['chrome.001']}
    />
  </group>,
  <mesh
    castShadow={castShadow}
    geometry={nodes.hammers_rail004.geometry}
    material={materials['Wood action']}
    position={[0.47, 0.82, -0.33]}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.hammers_rail005.geometry}
    material={materials['Wood action']}
    position={[0.37, 0.76, -0.45]}
    rotation={[-Math.PI, 0, 0]}
  />,
  <mesh
    castShadow={castShadow}
    geometry={nodes.balance_rail.geometry}
    material={materials['Wood action']}
    position={[0.08, 0.72, -0.2]}
  />,
  <group position={[0.14, 0.69, -0.02]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube084.geometry}
      material={materials['keys white']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube084_1.geometry}
      material={materials['Wood action']}
    />
  </group>,
  <mesh
    castShadow={castShadow}
    geometry={nodes.black_keysbalance.geometry}
    material={materials['Wood action']}
    position={[0.29, 0.74, -0.07]}
  />,
  <group position={[1.41, 0.75, -0.42]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube083.geometry}
      material={materials['chrome.003']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube083_1.geometry}
      material={materials['green felt.002']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube083_2.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube083_3.geometry}
      material={materials['brass.002']}
    />
  </group>,
  <group position={[1.39, 0.79, -0.5]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube095.geometry}
      material={materials['green felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube095_1.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube095_2.geometry}
      material={materials['yellow felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube095_3.geometry}
      material={materials.chrome}
    />
  </group>,
  <group position={[1.08, 0.79, -0.5]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube096.geometry}
      material={materials['green felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube096_1.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube096_2.geometry}
      material={materials['yellow felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube096_3.geometry}
      material={materials.chrome}
    />
  </group>,
  <group position={[0.81, 0.79, -0.5]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube097.geometry}
      material={materials['green felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube097_1.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube097_2.geometry}
      material={materials['yellow felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube097_3.geometry}
      material={materials.chrome}
    />
  </group>,
  <group position={[0.45, 0.79, -0.5]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube098.geometry}
      material={materials['green felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube098_1.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube098_2.geometry}
      material={materials['yellow felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube098_3.geometry}
      material={materials.chrome}
    />
  </group>,
  <group position={[1.08, 0.76, -0.45]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube006_1.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube006_2.geometry}
      material={materials['chrome.001']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube006_3.geometry}
      material={materials['white felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube006_4.geometry}
      material={materials['red felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube006_5.geometry}
      material={materials['Wood action']}
    />
  </group>,
  <group position={[0.81, 0.76, -0.45]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube061.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube061_1.geometry}
      material={materials['chrome.001']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube061_2.geometry}
      material={materials['white felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube061_3.geometry}
      material={materials['red felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube061_4.geometry}
      material={materials['Wood action']}
    />
  </group>,
  <group position={[0.47, 0.76, -0.45]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube062.geometry}
      material={materials['Wood action']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube062_1.geometry}
      material={materials['chrome.001']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube062_2.geometry}
      material={materials['white felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube062_3.geometry}
      material={materials['red felt']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube062_4.geometry}
      material={materials['Wood action']}
    />
  </group>,
  <group position={[0.05, 0.89, -0.23]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube009.geometry}
      material={materials['pins wood']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube009_1.geometry}
      material={materials['red felt']}
    />
  </group>,
  <mesh
    castShadow={castShadow}
    geometry={nodes.ribs.geometry}
    material={materials.soundboard}
    position={[0.11, 0.81, -1.48]}
    rotation={[0, 0.93, 0]}
  />,
  <group position={[0, 0.48, -0.15]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube005_1.geometry}
      material={materials.soundboard}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube005_2.geometry}
      material={materials.chrome}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube005_3.geometry}
      material={materials.logo}
    />
  </group>,
  <group position={[1.39, 0.84, -0.56]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube001.geometry}
      material={materials['soundboard.002']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube001_1.geometry}
      material={materials['short bridge.001']}
    />
  </group>,
  <group position={[1.4, 0.84, -0.56]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube015.geometry}
      material={materials['soundboard.001']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube015_1.geometry}
      material={materials['long bridge']}
    />
  </group>,
  <group position={[1.49, 0.79, -0.17]}>
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube108.geometry}
      material={materials['fallboard.001']}
    />
    <mesh
      castShadow={castShadow}
      geometry={nodes.Cube108_1.geometry}
      material={materials['red felt.001']}
    />
  </group>,
  <mesh
    geometry={nodes.hinge_1001.geometry}
    material={materials.brass}
    position={[0, 1, -1.13]}
    rotation={[Math.PI / 2, 0, 0]}
    scale={1.4}
  />,
  <mesh
    geometry={nodes.hinge_2001.geometry}
    material={materials.brass}
    position={[0, 1, -0.68]}
    rotation={[Math.PI / 2, 0, 0]}
    scale={1.4}
  />,
  <mesh
    geometry={nodes.hinge_3001.geometry}
    material={materials.brass}
    position={[0, 1, -1.57]}
    rotation={[Math.PI / 2, 0, 0]}
    scale={1.4}
  />,
  <mesh
    geometry={nodes.Cylinder.geometry}
    material={materials.chrome}
    position={[0, 1, -1.13]}
    rotation={[-Math.PI / 2, 0, -Math.PI]}
    scale={-1}
  />,
  <mesh
    geometry={nodes.Cylinder009.geometry}
    material={materials.chrome}
    position={[0, 1, -0.69]}
    rotation={[-Math.PI / 2, 0, -Math.PI]}
    scale={-1}
  />,
  <mesh
    geometry={nodes.Cylinder010.geometry}
    material={materials.chrome}
    position={[0, 1, -1.57]}
    rotation={[-Math.PI / 2, 0, -Math.PI]}
    scale={-1}
  />,
  <mesh
    geometry={nodes.hinge_1.geometry}
    material={materials.brass}
    position={[0, 1, -1.14]}
    rotation={[Math.PI / 2, Math.PI / 2, 0]}
    scale={1.4}
  />,
  <mesh
    geometry={nodes.hinge_2.geometry}
    material={materials.brass}
    position={[0, 1, -0.69]}
    rotation={[Math.PI / 2, Math.PI / 2, 0]}
    scale={1.4}
  />,
  <mesh
    geometry={nodes.hinge_3.geometry}
    material={materials.brass}
    position={[0, 1, -1.57]}
    rotation={[Math.PI / 2, Math.PI / 2, 0]}
    scale={1.4}
  />,
  <mesh
    geometry={nodes.Cylinder011.geometry}
    material={materials.chrome}
    position={[1.41, 0.99, -0.71]}
    rotation={[Math.PI / 2, 0.61, 0]}
    scale={-1}
  />,
];
