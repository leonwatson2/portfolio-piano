export function BalancePins({ nodes, materials }) {
  return (
    <group>
      <mesh
        geometry={nodes.C8_balance_pin.geometry}
        material={materials.chrome}
        position={[1.32, 0.77, -0.24]}
      />
      <mesh
        geometry={nodes.black_keys_balance_pin005.geometry}
        material={materials.chrome}
        position={[1.29, 0.77, -0.25]}
      />
      <mesh
        geometry={nodes.black_keys_balance_pin006.geometry}
        material={materials.chrome}
        position={[1.02, 0.77, -0.25]}
      />
      <mesh
        geometry={nodes.white_keys_balance_pin005.geometry}
        material={materials.chrome}
        position={[1.01, 0.77, -0.24]}
      />
      <mesh
        geometry={nodes.white_keys_balance_pin006.geometry}
        material={materials.chrome}
        position={[0.74, 0.77, -0.24]}
      />
      <mesh
        geometry={nodes.black_keys_balance_pin007.geometry}
        material={materials.chrome}
        position={[0.76, 0.77, -0.25]}
      />
      <mesh
        geometry={nodes.white_keys_balance_pin007.geometry}
        material={materials.chrome}
        position={[0.42, 0.77, -0.24]}
      />
      <mesh
        geometry={nodes.black_keys_balance_pin.geometry}
        material={materials.chrome}
        position={[0.43, 0.77, -0.25]}
      />
      <mesh
        geometry={nodes.black_keys_balance_pin001.geometry}
        material={materials['red felt']}
        position={[1.34, 0.79, -0.25]}
      />
      <mesh
        geometry={nodes.white_keys_balance_pin.geometry}
        material={materials['red felt']}
        position={[1.35, 0.79, -0.24]}
      />
      <mesh
        geometry={nodes.white_keys_balance_pin001.geometry}
        material={materials['red felt']}
        position={[1.05, 0.79, -0.24]}
      />
      <mesh
        geometry={nodes.black_keys_balance_pin002.geometry}
        material={materials['red felt']}
        position={[1.07, 0.79, -0.25]}
      />
      <mesh
        geometry={nodes.white_keys_balance_pin002.geometry}
        material={materials['red felt']}
        position={[0.79, 0.79, -0.24]}
      />
      <mesh
        geometry={nodes.black_keys_balance_pin003.geometry}
        material={materials['red felt']}
        position={[0.8, 0.79, -0.25]}
      />
      <mesh
        geometry={nodes.white_keys_balance_pin003.geometry}
        material={materials['red felt']}
        position={[0.46, 0.79, -0.24]}
      />
      <mesh
        geometry={nodes.black_keys_balance_pin004.geometry}
        material={materials['red felt']}
        position={[0.47, 0.79, -0.25]}
      />
      <mesh
        geometry={nodes.C8_balance_pin001.geometry}
        material={materials['red felt']}
        position={[1.36, 0.79, -0.24]}
      />
    </group>
  );
}
