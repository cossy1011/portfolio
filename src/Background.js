import * as THREE from 'three';
import * as CANNON from 'cannon';
import React, { useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { useCannon, Provider } from './useCannon';

const Things = () =>  {
    const ref = useRef();
    useFrame(() => {
        ref.current.rotation.z += 0.01;
    })
    return (
        <mesh
            ref={ref}
        >
            <planeBufferGeometry attach='geometry' args={[1, 1]} />
            <meshBasicMaterial
                attach='material'
                color="white"
                opacity={0.5}
                transparent
            />
        </mesh>
    )
}

const Ball = ({ position, args }) => {
    const ref = useCannon({ mass: 100000 }, body => {
        body.addShape(new CANNON.Sphere());
        body.position.set(...position);
    });
    return (
        <mesh ref={ref} castShadow receiveShadow>
            <sphereBufferGeometry attach='geometry' args={args} />
            <meshStandardMaterial attach='material' />
        </mesh>
    );
};

const Box = ({ position, args }) => {
    const ref = useCannon({ mass: 100000 }, body => {
        body.addShape(new CANNON.Box(new CANNON.Vec3(1, 1, 1)));
        body.position.set(...position);
    });
    return (
        <mesh ref={ref} castShadow receiveShadow>
            <boxGeometry attach='geometry' args={args} />
            <meshStandardMaterial attach='material' />
        </mesh>
    );
};

const Plane = ({ position }) => {
    const ref = useCannon({ mass: 0 }, body => {
        body.addShape(new CANNON.Plane());
        body.position.set(...position);
    });
    return (
        <mesh ref={ref} receiveShadow>
            <planeBufferGeometry attach='geometry' args={[1000, 1000]} />
            <meshPhongMaterial attach='material' color='#272727' />
        </mesh>
    );
};

const Background = () => {
    return (
        <div　style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -1,
        }}>
            <Canvas camera={{ position: [0, 0, -12]}}>
                <ambientLight intensity={1} />
                <spotLight
                    intensity={0.6}
                    position={[0, 0, 50]}
                    angle={0}
                    penumbra={1}
                    castShadow
                />
                <Provider>
                    <Plane position={[0, 0, -10]} />
                    <Ball position={[0, 0, 10]} args={[1, 50, 50]} />
                </Provider>
            </Canvas>
        </div>
    )
}

export default Background;