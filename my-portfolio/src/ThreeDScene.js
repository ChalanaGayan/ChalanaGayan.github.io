
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
    const { scene } = useGLTF('/path/to/your/3d-model.glb');
    return <primitive object={scene} scale={0.5} />;
};

const ThreeDScene = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <Model />
            <OrbitControls />
        </Canvas>
    );
};

export default ThreeDScene;
