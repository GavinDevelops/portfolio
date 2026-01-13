import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

// Global mouse position normalized to -1 to 1
const mousePosition = { x: 0, y: 0 }

interface ShapeProps {
  position: [number, number, number]
  geometry: 'icosahedron' | 'octahedron' | 'dodecahedron'
  color: string
  size: number
  speed: number
  floatIntensity: number
}

function Shape({ position, geometry, color, size, speed, floatIntensity }: ShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.x += delta * speed * 0.3
      meshRef.current.rotation.y += delta * speed * 0.2

      // Mouse follow effect - shapes move toward cursor
      const targetX = position[0] + mousePosition.x * 1.5
      const targetY = position[1] + mousePosition.y * 1.5
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        targetX,
        0.03
      )
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        targetY,
        0.03
      )
    }
  })

  const geometryComponent = useMemo(() => {
    switch (geometry) {
      case 'icosahedron':
        return <icosahedronGeometry args={[size, 0]} />
      case 'octahedron':
        return <octahedronGeometry args={[size, 0]} />
      case 'dodecahedron':
        return <dodecahedronGeometry args={[size, 0]} />
    }
  }, [geometry, size])

  return (
    <Float
      speed={speed}
      rotationIntensity={0.5}
      floatIntensity={floatIntensity}
      floatingRange={[-0.2, 0.2]}
    >
      <mesh ref={meshRef} position={position}>
        {geometryComponent}
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  )
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null!)
  const particleCount = 50

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    const redColor = new THREE.Color('#ef4444')
    const amberColor = new THREE.Color('#f59e0b')

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 10
      positions[i3 + 1] = (Math.random() - 0.5) * 10
      positions[i3 + 2] = (Math.random() - 0.5) * 5

      const color = Math.random() > 0.5 ? redColor : amberColor
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b
    }

    return [positions, colors]
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

function Scene() {
  const shapes: ShapeProps[] = [
    {
      position: [2, 1, 0],
      geometry: 'icosahedron',
      color: '#ef4444',
      size: 0.8,
      speed: 1.5,
      floatIntensity: 1,
    },
    {
      position: [3, -1.5, -1],
      geometry: 'octahedron',
      color: '#f59e0b',
      size: 0.6,
      speed: 2,
      floatIntensity: 1.5,
    },
    {
      position: [1, -0.5, 0.5],
      geometry: 'dodecahedron',
      color: '#ef4444',
      size: 0.5,
      speed: 1,
      floatIntensity: 2,
    },
    {
      position: [4, 0.5, -0.5],
      geometry: 'icosahedron',
      color: '#fbbf24',
      size: 0.4,
      speed: 2.5,
      floatIntensity: 1.2,
    },
  ]

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#f59e0b" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ef4444" />

      {shapes.map((shape, index) => (
        <Shape key={index} {...shape} />
      ))}

      <Particles />
    </>
  )
}

export function GeometricScene() {
  // Track mouse position globally so it works even when hovering over other elements
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize to -1 to 1 range
      mousePosition.x = (event.clientX / window.innerWidth) * 2 - 1
      mousePosition.y = -((event.clientY / window.innerHeight) * 2 - 1)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 hidden lg:block pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
