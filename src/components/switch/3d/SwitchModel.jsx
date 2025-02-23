import React from "react";
import { useGLTF } from "@react-three/drei";

const SwitchModel = ({ size, ...props }) => {

  const model = useGLTF(
    size === "small" ? "/models/nintendo_switch.glb" : "/models/nintendo_switch_lite.glb"
  );

  if (!model?.nodes || !model?.materials) {
    console.warn("GLTF Model not loaded yet:", size);
    return null;
  }

  const { nodes, materials } = model;

  return (
    <group {...props} rotation={[-Math.PI / 2, 0, 0]} scale={[8, 8, 8]}>
      {size === "small" ? (
 
        nodes.switch_tabletqc_skeleton_rootJoint ? (
          <group position={[0, 0, -3]}>
            <primitive object={nodes.switch_tabletqc_skeleton_rootJoint} />
            <skinnedMesh
              geometry={nodes.RT_screen_tablet_0?.geometry}
              material={materials.RT_screen_tablet}
              skeleton={nodes.RT_screen_tablet_0?.skeleton}
            />
            <skinnedMesh
              geometry={nodes.joycon_R_tablet_0?.geometry}
              material={materials.n_switch_joycon_R2}
              skeleton={nodes.joycon_R_tablet_0?.skeleton}
            />
            <skinnedMesh
              geometry={nodes.joycon_L_tablet_0?.geometry}
              material={materials.n_switch_joycon_L}
              skeleton={nodes.joycon_L_tablet_0?.skeleton}
            />
            <skinnedMesh
              geometry={nodes.tablet_0?.geometry}
              material={materials.n_switch_tablet}
              skeleton={nodes.tablet_0?.skeleton}
            />
            <skinnedMesh
              geometry={nodes.tablet_0_1?.geometry}
              material={materials.n_switch_tablet}
              skeleton={nodes.tablet_0_1?.skeleton}
            />
          </group>
        ) : (
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="red" />
          </mesh>
        )
      ) : (

        nodes.defaultMaterial ? (
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial.geometry}
              material={materials.DefaultMaterial}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_1.geometry}
              material={materials.DefaultMaterial}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_2.geometry}
              material={materials.DefaultMaterial}
            />
          </group>
        ) : (
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="blue" />
          </mesh>
        )
      )}
    </group>
  );
};

export default SwitchModel;

useGLTF.preload("/models/nintendo_switch.glb");
useGLTF.preload("/models/nintendo_switch_lite.glb");