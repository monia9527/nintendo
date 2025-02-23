import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import * as THREE from "three";
import Lights from "./Lights";
import Loader from "./Loader";
import SwitchModel from "./SwitchModel";
import { Suspense, useEffect, useState } from "react";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
}) => {
  const [cameraPosition, setCameraPosition] = useState([0, 2, 15]);

  useEffect(() => {
    const updateCameraPosition = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setCameraPosition([0, 2, index === 1 ? 140 : 20]);
      } else {
        setCameraPosition([0, 2, index === 1 ? 100 : 13]);
      }
    };

    updateCameraPosition(); 
    window.addEventListener("resize", updateCameraPosition);
    return () => window.removeEventListener("resize", updateCameraPosition);
  }, [index]);

  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
    >
      <ambientLight intensity={0.4} />

      <PerspectiveCamera makeDefault fov={55} position={cameraPosition} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group ref={groupRef} name={index === 1 ? "small" : "large"} position={[0, 0, 0]}>
        <Suspense fallback={<Loader />}>
          {index === 1 ? (
            <SwitchModel
              modelType="switch"
              scale={[8, 8, 8]}
              size={size}
              visible={index === 1 && size === "small"}
            />
          ) : (
            <SwitchModel
              modelType="switch_oled"
              scale={[12, 12, 12]}
              size={size}
              visible={index === 2 && size === "large"}
            />
          )}
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
