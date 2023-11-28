import { useRef, useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import balloonScene from "../assets/3d/bear.glb";

const Balloons = () => {
  const balloonRef = useRef();
  const { scene, animations } = useGLTF(balloonScene);
  const { actions } = useAnimations(animations, balloonRef);

  useEffect(() => {
    actions["ArmatureAction"].play();
  }, []);

  return (
    <mesh position={[3, 1.5, 0]} scale={[0.35, 0.3, 0.4]} ref={balloonRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Balloons;
