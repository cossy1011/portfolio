import * as THREE from 'three';
import * as CANNON from 'cannon';
import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { useCannon, Provider } from './useCannon';
import styled from "styled-components";
import { RGBFormat } from 'three';

const Container = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;
    `

const Ball = ({ position, args, isVisible }) => {
    const ref = useCannon({ mass: 100000 }, body => {
        body.addShape(new CANNON.Sphere());
        body.position.set(...position);
    });
    if (isVisible) {
        return (
            <mesh ref={ref} castShadow receiveShadow>
                <sphereBufferGeometry attach='geometry' args={args} />
                <meshStandardMaterial attach='material' />
            </mesh>
        );
    } else {
        return (
            <></>
        );
    }
};

const Plane = ({ position, isVisible }) => {
    const ref = useCannon({ mass: 0 }, body => {
        body.addShape(new CANNON.Plane());
        body.position.set(...position);
    });
    if (isVisible) {
        return (
            <mesh ref={ref} receiveShadow>
                <planeBufferGeometry attach='geometry' args={[1000, 1000]} />
                <meshPhongMaterial attach='material' color='#272727' />
            </mesh>
        );
    } else {
        return (
            <></>
        );
    } 
};

const  Swarm = ({ eventHandler, mouse, isVisible }) => {
    window.setTimeout(eventHandler, 6200)
    const count = isVisible ? 0 : 20000
    const mesh = useRef()
    const light = useRef()

    const dummy = useMemo(() => new THREE.Object3D(), [])
    // Generate some random positions, speed factors and timings
    const particles = useMemo(() => {
      const temp = []
      for (let i = 0; i < count; i++) {
        const t = Math.random() * 100
        const factor = 20 + Math.random() * 100
        const speed = 0.01 + Math.random() / 200
        const xFactor = -50 + Math.random() * 100
        const yFactor = -50 + Math.random() * 100
        const zFactor = -50 + Math.random() * 100
        const rColor = Math.random() * 255
        const gColor = Math.random() * 255
        const bColor = Math.random() * 255
        temp.push({ t, factor, speed, xFactor, yFactor, zFactor, rColor, gColor, bColor, mx: 0, my: 0 })
      }
      return temp
    }, [count])
    // The innards of this hook will run every frame
    useFrame(state => {
      // Run through the randomized data to calculate some movement
      particles.forEach((particle, i) => {
        let { t, factor, speed, xFactor, yFactor, zFactor, rColor, gColor, bColor } = particle
        // There is no sense or reason to any of this, just messing around with trigonometric functions
        t = particle.t += speed / 2
        const a = Math.cos(t) + Math.sin(t * 1) / 10
        const b = Math.sin(t) + Math.cos(t * 2) / 10
        const s = Math.cos(t)
        particle.mx += (mouse.current[0] - particle.mx) * 0.01
        particle.my += (mouse.current[1] * -1 - particle.my) * 0.01
        // Update the dummy object
        dummy.position.set(
          (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
          (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
          (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
        )
        dummy.scale.set(s, s, s)
        dummy.rotation.set(s * 5, s * 5, s * 5)
        dummy.updateMatrix()
        // And apply the matrix to the instanced item
        mesh.current.setMatrixAt(i, dummy.matrix)
      })
      mesh.current.instanceMatrix.needsUpdate = true
    })
    if (isVisible) {
        return (
        <>
            <instancedMesh ref={mesh} args={[null, null, count]}>
            <sphereBufferGeometry attach="geometry" args={[0.00001, 0]} />
            <meshStandardMaterial attach="material" color="white" />
            </instancedMesh>
        </>
        )
    } else {
        return (
            <>
                <pointLight ref={light} distance={20} intensity={8} color="lightblue" />
                <instancedMesh ref={mesh} args={[null, null, count]}>
                    <bufferGeometry attach='geometry'>
                        {/* <bufferAttribute
                            attachObject={['attributes', 'position']}
                            count={positions.length / 3}
                            array={new Float32Array(positions)}
                            itemSize={3}
                        />
                        <bufferAttribute
                            attachObject={['attributes', 'color']}
                            count={colors.length / 4}
                            array={new Uint8Array(colors)}
                            itemSize={4}
                            normalized
                        /> */}
                    </bufferGeometry>
                <sphereBufferGeometry attach="geometry" args={[0.2, 10]} />
                <meshStandardMaterial attach="material" color="#ff00ff" />
                </instancedMesh>
            </>
        )
    }
  }


const Background = () => {
    const [ isVisible, setVisible ] = useState(true)
    const mouse = useRef([0, 0])
    
    return (
        <Container>
            <Canvas camera={{ position: [0, 0, -12]}} >
                <ambientLight intensity={1} />
                <spotLight
                    intensity={0.6}
                    position={[0, 0, 50]}
                    angle={0}
                    penumbra={1}
                    castShadow
                />
                <Provider>
                    <Plane position={[0, 0, -10]} isVisible={isVisible}/>
                    <Ball position={[0, 0, 10]} args={[1, 50, 50]} isVisible={isVisible} />
                </Provider>
                <Swarm mouse={mouse} isVisible={isVisible} eventHandler={setVisible} />
            </Canvas>
        </Container>
    )
}

export default Background;