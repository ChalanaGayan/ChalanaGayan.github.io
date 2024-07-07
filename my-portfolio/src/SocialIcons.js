// src/SocialIcons.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Icon = ({ url, position, onClick }) => {
    const { scene } = useGLTF(url);
    return <primitive object={scene} position={position} scale={0.1} onClick={onClick} />;
};

const SocialIcons = () => {
    const icons = [
        { url: '/path/to/github.glb', position: [2, 2, 0], onClick: () => window.open('https://github.com/your-profile', '_blank') },
        { url: '/path/to/facebook.glb', position: [-2, 2, 0], onClick: () => window.open('https://facebook.com/your-profile', '_blank') },
        { url: '/path/to/linkedin.glb', position: [2, -2, 0], onClick: () => window.open('https://linkedin.com/in/your-profile', '_blank') },
        { url: '/path/to/cv.glb', position: [-2, -2, 0], onClick: () => window.open('/path/to/your/cv.pdf', '_blank') }
    ];

    return (
        <Canvas>
            {icons.map((icon, index) => (
                <Icon key={index} url={icon.url} position={icon.position} onClick={icon.onClick} />
            ))}
        </Canvas>
    );
};

export default SocialIcons;
