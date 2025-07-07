"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Box, Cylinder, Sphere } from "@react-three/drei"
import { Html } from "@react-three/drei"

export default function Component() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-sky-200 to-green-100">
      <Canvas shadows camera={{ position: [25, 20, 25], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[15, 15, 10]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
        />

        {/* Estrutura da fábrica */}
        <FactoryStructure />

        {/* Máquinas de produção */}
        <ProductionMachines />

        {/* Sistema de energia sustentável */}
        <SustainableEnergy />

        {/* Sistema de esteiras */}
        <ConveyorSystem />

        {/* Produtos em movimento */}
        <MovingProducts />

        {/* Área de expedição */}
        <ShippingArea />

        {/* Painéis de controle */}
        <ControlPanels />

        <Environment preset="park" background />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minDistance={10}
          maxDistance={50}
        />
      </Canvas>
    </div>
  )
}

function FactoryStructure() {
  return (
    <group>
      {/* Piso principal da fábrica */}
      <Box args={[35, 0.3, 25]} position={[0, -0.15, 0]} receiveShadow>
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </Box>

      {/* Paredes externas */}
      <Box args={[0.3, 5, 25]} position={[-17.5, 2.5, 0]} castShadow>
        <meshStandardMaterial color="#D2691E" roughness={0.9} />
      </Box>
      <Box args={[0.3, 5, 25]} position={[17.5, 2.5, 0]} castShadow>
        <meshStandardMaterial color="#D2691E" roughness={0.9} />
      </Box>
      <Box args={[35, 5, 0.3]} position={[0, 2.5, -12.5]} castShadow>
        <meshStandardMaterial color="#D2691E" roughness={0.9} />
      </Box>
      <Box args={[35, 5, 0.3]} position={[0, 2.5, 12.5]} castShadow>
        <meshStandardMaterial color="#D2691E" roughness={0.9} />
      </Box>

      {/* Estrutura do teto */}
      <Box args={[35, 0.2, 25]} position={[0, 4.9, 0]} castShadow>
        <meshStandardMaterial color="#654321" roughness={0.7} />
      </Box>

      {/* Vigas de sustentação */}
      {[-10, 0, 10].map((x, i) => (
        <Box key={i} args={[0.4, 5, 0.4]} position={[x, 2.5, -8]} castShadow>
          <meshStandardMaterial color="#654321" roughness={0.8} />
        </Box>
      ))}
      {[-10, 0, 10].map((x, i) => (
        <Box key={i} args={[0.4, 5, 0.4]} position={[x, 2.5, 8]} castShadow>
          <meshStandardMaterial color="#654321" roughness={0.8} />
        </Box>
      ))}
    </group>
  )
}

function ProductionMachines() {
  const machine1Ref = useRef()
  const machine2Ref = useRef()
  const machine3Ref = useRef()
  const machine4Ref = useRef()
  const machine5Ref = useRef()

  useFrame((state) => {
    const time = state.clock.elapsedTime

    if (machine1Ref.current) {
      machine1Ref.current.rotation.y = Math.sin(time * 2) * 0.1
    }
    if (machine2Ref.current) {
      machine2Ref.current.rotation.x = Math.sin(time * 1.5) * 0.05
    }
    if (machine3Ref.current) {
      machine3Ref.current.rotation.z = Math.sin(time * 1.8) * 0.03
    }
    if (machine4Ref.current) {
      machine4Ref.current.rotation.y += 0.02
    }
    if (machine5Ref.current) {
      machine5Ref.current.rotation.x = Math.sin(time * 1.2) * 0.08
    }
  })

  return (
    <group>
      {/* Máquina 1: Desbaste */}
      <group position={[-12, 1.8, -3]} ref={machine1Ref}>
        <Box args={[2.5, 3.5, 2.5]} castShadow>
          <meshStandardMaterial color="#22c55e" metalness={0.3} roughness={0.7} />
        </Box>
        <Cylinder args={[0.4, 0.4, 1.2]} position={[0, 2.2, 0]} castShadow>
          <meshStandardMaterial color="#16a34a" metalness={0.5} roughness={0.5} />
        </Cylinder>
        <Box args={[0.8, 0.5, 0.3]} position={[-1.4, 0, 0]} castShadow>
          <meshStandardMaterial color="#15803d" />
        </Box>
        <Box args={[0.8, 0.5, 0.3]} position={[1.4, 0, 0]} castShadow>
          <meshStandardMaterial color="#15803d" />
        </Box>
        <Html position={[0, -2.5, 0]} center>
          <div className="bg-green-50 px-3 py-2 rounded-lg shadow-md text-sm border border-green-300">
            <div className="font-bold text-green-800">🪚 DESBASTE</div>
            <div className="text-green-600 text-xs">Preparação inicial</div>
          </div>
        </Html>
      </group>

      {/* Máquina 2: Lixamento */}
      <group position={[-6, 1.5, -3]} ref={machine2Ref}>
        <Box args={[3.5, 2.8, 2]} castShadow>
          <meshStandardMaterial color="#3b82f6" metalness={0.3} roughness={0.7} />
        </Box>
        <Box args={[0.6, 0.6, 2.5]} position={[0, 1.8, 0]} castShadow>
          <meshStandardMaterial color="#1d4ed8" metalness={0.5} roughness={0.5} />
        </Box>
        <Box args={[0.8, 0.5, 0.3]} position={[-2, 0, 0]} castShadow>
          <meshStandardMaterial color="#1e40af" />
        </Box>
        <Box args={[0.8, 0.5, 0.3]} position={[2, 0, 0]} castShadow>
          <meshStandardMaterial color="#1e40af" />
        </Box>
        <Html position={[0, -2, 0]} center>
          <div className="bg-blue-50 px-3 py-2 rounded-lg shadow-md text-sm border border-blue-300">
            <div className="font-bold text-blue-800">🔧 LIXAMENTO</div>
            <div className="text-blue-600 text-xs">Acabamento fino</div>
          </div>
        </Html>
      </group>

      {/* Máquina 3: Corte de precisão */}
      <group position={[0, 1.2, -3]} ref={machine3Ref}>
        <Cylinder args={[1.2, 1.4, 2.4]} castShadow>
          <meshStandardMaterial color="#f59e0b" metalness={0.4} roughness={0.6} />
        </Cylinder>
        <Sphere args={[0.4]} position={[0, 1.5, 0]} castShadow>
          <meshStandardMaterial color="#d97706" metalness={0.6} roughness={0.4} />
        </Sphere>
        <Cylinder args={[0.25, 0.25, 0.6]} position={[-1.5, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <meshStandardMaterial color="#ea580c" />
        </Cylinder>
        <Cylinder args={[0.25, 0.25, 0.6]} position={[1.5, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <meshStandardMaterial color="#ea580c" />
        </Cylinder>
        <Html position={[0, -1.8, 0]} center>
          <div className="bg-orange-50 px-3 py-2 rounded-lg shadow-md text-sm border border-orange-300">
            <div className="font-bold text-orange-800">✂️ CORTE</div>
            <div className="text-orange-600 text-xs">Peças precisas</div>
          </div>
        </Html>
      </group>

      {/* Máquina 4: Furação */}
      <group position={[6, 1.5, -3]}>
        <Box args={[2.5, 3, 2.5]} castShadow>
          <meshStandardMaterial color="#8b5cf6" metalness={0.3} roughness={0.7} />
        </Box>
        <group ref={machine4Ref} position={[0, 1.8, 0]}>
          <Cylinder args={[0.15, 0.15, 1.5]} castShadow>
            <meshStandardMaterial color="#6d28d9" metalness={0.7} roughness={0.3} />
          </Cylinder>
        </group>
        <Box args={[0.7, 0.4, 0.3]} position={[-1.4, 0, 0]} castShadow>
          <meshStandardMaterial color="#7c3aed" />
        </Box>
        <Box args={[0.7, 0.4, 0.3]} position={[1.4, 0, 0]} castShadow>
          <meshStandardMaterial color="#7c3aed" />
        </Box>
        <Html position={[0, -2.2, 0]} center>
          <div className="bg-purple-50 px-3 py-2 rounded-lg shadow-md text-sm border border-purple-300">
            <div className="font-bold text-purple-800">🔩 FURAÇÃO</div>
            <div className="text-purple-600 text-xs">Encaixes perfeitos</div>
          </div>
        </Html>
      </group>

      {/* Máquina 5: Montagem Final */}
      <group position={[12, 2, -3]} ref={machine5Ref}>
        <Box args={[4, 4, 3]} castShadow>
          <meshStandardMaterial color="#ef4444" metalness={0.3} roughness={0.7} />
        </Box>
        <Box args={[1, 1, 1.2]} position={[0, 2.5, 0]} castShadow>
          <meshStandardMaterial color="#dc2626" metalness={0.5} roughness={0.5} />
        </Box>
        {/* Braços robóticos */}
        <Box args={[0.3, 2, 0.3]} position={[-1.2, 0.8, 0]} rotation={[0, 0, 0.4]} castShadow>
          <meshStandardMaterial color="#b91c1c" metalness={0.4} roughness={0.6} />
        </Box>
        <Box args={[0.3, 2, 0.3]} position={[1.2, 0.8, 0]} rotation={[0, 0, -0.4]} castShadow>
          <meshStandardMaterial color="#b91c1c" metalness={0.4} roughness={0.6} />
        </Box>
        <Box args={[0.8, 0.5, 0.3]} position={[-2.2, 0, 0]} castShadow>
          <meshStandardMaterial color="#991b1b" />
        </Box>
        <Box args={[0.8, 0.5, 0.3]} position={[2.2, 0, 0]} castShadow>
          <meshStandardMaterial color="#991b1b" />
        </Box>
        <Html position={[0, -2.8, 0]} center>
          <div className="bg-red-50 px-3 py-2 rounded-lg shadow-md text-sm border border-red-300">
            <div className="font-bold text-red-800">🔧 MONTAGEM</div>
            <div className="text-red-600 text-xs">Cozinha completa</div>
          </div>
        </Html>
      </group>
    </group>
  )
}

function SustainableEnergy() {
  const solarRef = useRef()
  const windRef = useRef()
  const recycleRef = useRef()

  useFrame((state) => {
    const time = state.clock.elapsedTime

    if (windRef.current) {
      windRef.current.rotation.z += 0.03
    }
    if (solarRef.current) {
      solarRef.current.rotation.y = Math.sin(time * 0.5) * 0.4
    }
    if (recycleRef.current) {
      recycleRef.current.rotation.y += 0.015
    }
  })

  return (
    <group>
      {/* Painéis solares */}
      <group position={[-14, 4, 8]} ref={solarRef}>
        <Box args={[5, 0.15, 4]} castShadow>
          <meshStandardMaterial color="#1e40af" metalness={0.6} roughness={0.2} />
        </Box>
        <Box args={[4.8, 0.08, 3.8]} position={[0, 0.12, 0]}>
          <meshStandardMaterial color="#3b82f6" metalness={0.7} roughness={0.1} />
        </Box>
        <Html position={[0, -1.5, 0]} center>
          <div className="bg-blue-100 px-2 py-1 rounded shadow-sm text-xs font-semibold text-blue-800">
            ⚡ ENERGIA SOLAR
          </div>
        </Html>
      </group>

      {/* Turbina eólica */}
      <group position={[14, 5, 8]}>
        <Cylinder args={[0.15, 0.15, 6]} castShadow>
          <meshStandardMaterial color="#6b7280" metalness={0.5} roughness={0.5} />
        </Cylinder>
        <group ref={windRef} position={[0, 3, 0]}>
          <Box args={[0.12, 2.5, 0.4]} position={[1.2, 0, 0]} castShadow>
            <meshStandardMaterial color="#f3f4f6" metalness={0.3} roughness={0.7} />
          </Box>
          <Box args={[0.12, 2.5, 0.4]} position={[-1.2, 0, 0]} castShadow>
            <meshStandardMaterial color="#f3f4f6" metalness={0.3} roughness={0.7} />
          </Box>
          <Box args={[0.4, 2.5, 0.12]} position={[0, 0, 1.2]} castShadow>
            <meshStandardMaterial color="#f3f4f6" metalness={0.3} roughness={0.7} />
          </Box>
        </group>
        <Html position={[0, -4, 0]} center>
          <div className="bg-gray-100 px-2 py-1 rounded shadow-sm text-xs font-semibold text-gray-800">
            💨 ENERGIA EÓLICA
          </div>
        </Html>
      </group>

      {/* Sistema de reciclagem */}
      <group position={[-10, 1.5, 9]}>
        <Cylinder args={[2, 2, 3]} castShadow>
          <meshStandardMaterial color="#059669" metalness={0.4} roughness={0.6} />
        </Cylinder>
        <group ref={recycleRef} position={[0, 2, 0]}>
          <Box args={[0.4, 0.4, 3]} castShadow>
            <meshStandardMaterial color="#10b981" metalness={0.5} roughness={0.5} />
          </Box>
          <Box args={[3, 0.4, 0.4]} castShadow>
            <meshStandardMaterial color="#10b981" metalness={0.5} roughness={0.5} />
          </Box>
        </group>
        <Html position={[0, -2.5, 0]} center>
          <div className="bg-green-100 px-2 py-1 rounded shadow-sm text-xs font-semibold text-green-800">
            ♻️ RECICLAGEM
          </div>
        </Html>
      </group>

      {/* Containers de separação */}
      <group position={[-6, 0.8, 10]}>
        <Box args={[1, 1.5, 1]} position={[-1.5, 0, 0]} castShadow>
          <meshStandardMaterial color="#dc2626" />
        </Box>
        <Box args={[1, 1.5, 1]} position={[0, 0, 0]} castShadow>
          <meshStandardMaterial color="#2563eb" />
        </Box>
        <Box args={[1, 1.5, 1]} position={[1.5, 0, 0]} castShadow>
          <meshStandardMaterial color="#16a34a" />
        </Box>
        <Html position={[0, -1.5, 0]} center>
          <div className="bg-white px-2 py-1 rounded shadow-sm text-xs font-semibold text-gray-700">🗂️ SEPARAÇÃO</div>
        </Html>
      </group>
    </group>
  )
}

function ConveyorSystem() {
  return (
    <group>
      {/* Esteira principal */}
      <Box args={[28, 0.15, 1]} position={[0, 0.6, -3]} castShadow>
        <meshStandardMaterial color="#374151" metalness={0.2} roughness={0.8} />
      </Box>

      {/* Esteira de saída */}
      <Box args={[6, 0.15, 1]} position={[15, 0.6, -3]} castShadow>
        <meshStandardMaterial color="#374151" metalness={0.2} roughness={0.8} />
      </Box>

      {/* Esteira curva */}
      <Box args={[1, 0.15, 12]} position={[15, 0.6, 3]} castShadow>
        <meshStandardMaterial color="#374151" metalness={0.2} roughness={0.8} />
      </Box>

      {/* Esteira final */}
      <Box args={[6, 0.15, 1]} position={[12, 0.6, 9]} castShadow>
        <meshStandardMaterial color="#374151" metalness={0.2} roughness={0.8} />
      </Box>

      {/* Suportes das esteiras */}
      {[-12, -6, 0, 6, 12].map((x, i) => (
        <Box key={i} args={[0.3, 1.2, 0.3]} position={[x, 0, -3]} castShadow>
          <meshStandardMaterial color="#4b5563" />
        </Box>
      ))}
    </group>
  )
}

function MovingProducts() {
  const product1Ref = useRef() // Madeira bruta
  const product2Ref = useRef() // Chapa desbastada
  const product3Ref = useRef() // Chapa lixada
  const product4Ref = useRef() // Peças cortadas
  const product5Ref = useRef() // Peças furadas
  const product6Ref = useRef() // Cozinha montada

  useFrame((state) => {
    const time = state.clock.elapsedTime * 0.25
    const cycleTime = 20 // 20 segundos por ciclo

    // Produto 1: Madeira bruta
    if (product1Ref.current) {
      const progress = (time % cycleTime) / cycleTime
      if (progress < 0.15) {
        const x = -14 + (progress / 0.15) * 28
        product1Ref.current.position.set(x, 0.8, -3)
        product1Ref.current.visible = true
      } else {
        product1Ref.current.visible = false
      }
    }

    // Produto 2: Chapa desbastada
    if (product2Ref.current) {
      const progress = ((time - 2) % cycleTime) / cycleTime
      if (progress > 0 && progress < 0.15) {
        const x = -14 + (progress / 0.15) * 28
        product2Ref.current.position.set(x, 0.75, -3)
        product2Ref.current.visible = true
      } else {
        product2Ref.current.visible = false
      }
    }

    // Produto 3: Chapa lixada
    if (product3Ref.current) {
      const progress = ((time - 4) % cycleTime) / cycleTime
      if (progress > 0 && progress < 0.15) {
        const x = -14 + (progress / 0.15) * 28
        product3Ref.current.position.set(x, 0.73, -3)
        product3Ref.current.visible = true
      } else {
        product3Ref.current.visible = false
      }
    }

    // Produto 4: Peças cortadas
    if (product4Ref.current) {
      const progress = ((time - 6) % cycleTime) / cycleTime
      if (progress > 0 && progress < 0.15) {
        const x = -14 + (progress / 0.15) * 28
        product4Ref.current.position.set(x, 0.73, -3)
        product4Ref.current.visible = true
      } else {
        product4Ref.current.visible = false
      }
    }

    // Produto 5: Peças furadas
    if (product5Ref.current) {
      const progress = ((time - 8) % cycleTime) / cycleTime
      if (progress > 0 && progress < 0.15) {
        const x = -14 + (progress / 0.15) * 28
        product5Ref.current.position.set(x, 0.73, -3)
        product5Ref.current.visible = true
      } else {
        product5Ref.current.visible = false
      }
    }

    // Produto 6: Cozinha completa
    if (product6Ref.current) {
      const progress = ((time - 10) % cycleTime) / cycleTime
      if (progress > 0 && progress < 0.4) {
        if (progress < 0.1) {
          // Montagem
          product6Ref.current.position.set(12, 1.2, -3)
        } else if (progress < 0.2) {
          // Saída da montagem
          const exitProgress = (progress - 0.1) / 0.1
          product6Ref.current.position.set(12 + exitProgress * 6, 1.2, -3)
        } else if (progress < 0.3) {
          // Curva
          const curveProgress = (progress - 0.2) / 0.1
          product6Ref.current.position.set(18 - curveProgress * 3, 1.2, -3 + curveProgress * 12)
        } else {
          // Chegada na expedição
          const finalProgress = (progress - 0.3) / 0.1
          product6Ref.current.position.set(15 - finalProgress * 3, 1.2, 9)
        }
        product6Ref.current.visible = true
      } else {
        product6Ref.current.visible = false
      }
    }
  })

  return (
    <group>
      {/* Madeira bruta */}
      <Box args={[1.2, 0.2, 0.8]} ref={product1Ref} castShadow>
        <meshStandardMaterial color="#654321" roughness={0.95} />
      </Box>

      {/* Chapa desbastada */}
      <Box args={[1.4, 0.15, 0.9]} ref={product2Ref} castShadow>
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </Box>

      {/* Chapa lixada */}
      <Box args={[1.5, 0.12, 1]} ref={product3Ref} castShadow>
        <meshStandardMaterial color="#CD853F" roughness={0.5} />
      </Box>

      {/* Peças cortadas */}
      <group ref={product4Ref}>
        <Box args={[0.7, 0.06, 0.5]} position={[-0.5, 0, 0]} castShadow>
          <meshStandardMaterial color="#CD853F" roughness={0.4} />
        </Box>
        <Box args={[0.4, 0.06, 0.7]} position={[0.3, 0, 0]} castShadow>
          <meshStandardMaterial color="#CD853F" roughness={0.4} />
        </Box>
        <Box args={[0.6, 0.06, 0.4]} position={[0, 0, 0.5]} castShadow>
          <meshStandardMaterial color="#CD853F" roughness={0.4} />
        </Box>
      </group>

      {/* Peças furadas */}
      <group ref={product5Ref}>
        <Box args={[0.7, 0.06, 0.5]} position={[-0.5, 0, 0]} castShadow>
          <meshStandardMaterial color="#CD853F" roughness={0.3} />
        </Box>
        <Box args={[0.4, 0.06, 0.7]} position={[0.3, 0, 0]} castShadow>
          <meshStandardMaterial color="#CD853F" roughness={0.3} />
        </Box>
        <Box args={[0.6, 0.06, 0.4]} position={[0, 0, 0.5]} castShadow>
          <meshStandardMaterial color="#CD853F" roughness={0.3} />
        </Box>
      </group>

      {/* Cozinha completa */}
      <group ref={product6Ref}>
        {/* Bancada principal */}
        <Box args={[3, 0.08, 0.6]} position={[0, 0.6, 0]} castShadow>
          <meshStandardMaterial color="#F5F5DC" roughness={0.1} metalness={0.2} clearcoat={0.9} />
        </Box>

        {/* Armários inferiores */}
        <Box args={[1.2, 0.5, 0.55]} position={[-0.9, 0.25, 0]} castShadow>
          <meshStandardMaterial color="#8B4513" roughness={0.3} clearcoat={0.6} />
        </Box>
        <Box args={[1.2, 0.5, 0.55]} position={[0.9, 0.25, 0]} castShadow>
          <meshStandardMaterial color="#8B4513" roughness={0.3} clearcoat={0.6} />
        </Box>

        {/* Portas */}
        <Box args={[0.58, 0.45, 0.03]} position={[-0.9, 0.25, 0.29]} castShadow>
          <meshStandardMaterial color="#DEB887" roughness={0.2} clearcoat={0.7} />
        </Box>
        <Box args={[0.58, 0.45, 0.03]} position={[0.9, 0.25, 0.29]} castShadow>
          <meshStandardMaterial color="#DEB887" roughness={0.2} clearcoat={0.7} />
        </Box>

        {/* Armários superiores */}
        <Box args={[1.2, 0.6, 0.35]} position={[-0.9, 1.1, -0.1]} castShadow>
          <meshStandardMaterial color="#8B4513" roughness={0.3} clearcoat={0.6} />
        </Box>
        <Box args={[1.2, 0.6, 0.35]} position={[0.9, 1.1, -0.1]} castShadow>
          <meshStandardMaterial color="#8B4513" roughness={0.3} clearcoat={0.6} />
        </Box>

        {/* Portas superiores */}
        <Box args={[0.58, 0.55, 0.03]} position={[-0.9, 1.1, 0.08]} castShadow>
          <meshStandardMaterial color="#DEB887" roughness={0.2} clearcoat={0.7} />
        </Box>
        <Box args={[0.58, 0.55, 0.03]} position={[0.9, 1.1, 0.08]} castShadow>
          <meshStandardMaterial color="#DEB887" roughness={0.2} clearcoat={0.7} />
        </Box>

        {/* Puxadores */}
        <Cylinder args={[0.01, 0.01, 0.08]} position={[-0.7, 0.25, 0.32]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <meshStandardMaterial color="#C0C0C0" metalness={0.8} roughness={0.2} />
        </Cylinder>
        <Cylinder args={[0.01, 0.01, 0.08]} position={[0.7, 0.25, 0.32]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <meshStandardMaterial color="#C0C0C0" metalness={0.8} roughness={0.2} />
        </Cylinder>
        <Cylinder args={[0.01, 0.01, 0.08]} position={[-0.7, 1.1, 0.11]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <meshStandardMaterial color="#C0C0C0" metalness={0.8} roughness={0.2} />
        </Cylinder>
        <Cylinder args={[0.01, 0.01, 0.08]} position={[0.7, 1.1, 0.11]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <meshStandardMaterial color="#C0C0C0" metalness={0.8} roughness={0.2} />
        </Cylinder>
      </group>
    </group>
  )
}

function ShippingArea() {
  return (
    <group>
      {/* Plataforma de expedição */}
      <Box args={[8, 0.4, 6]} position={[12, 0.2, 9]} castShadow>
        <meshStandardMaterial color="#6b7280" metalness={0.3} roughness={0.7} />
      </Box>

      {/* Cozinhas prontas */}
      {[
        { pos: [-2, 0, -1], rot: 0 },
        { pos: [0, 0, 1], rot: Math.PI / 4 },
        { pos: [2, 0, -0.5], rot: -Math.PI / 6 },
      ].map((item, i) => (
        <group key={i} position={[12 + item.pos[0], 1, 9 + item.pos[2]]} rotation={[0, item.rot, 0]}>
          <Box args={[2.5, 0.08, 0.6]} position={[0, 0.6, 0]} castShadow>
            <meshStandardMaterial color="#F5F5DC" roughness={0.1} metalness={0.2} clearcoat={0.9} />
          </Box>
          <Box args={[2.3, 0.5, 0.55]} position={[0, 0.25, 0]} castShadow>
            <meshStandardMaterial color="#8B4513" roughness={0.3} clearcoat={0.6} />
          </Box>
        </group>
      ))}

      {/* Caminhão de entrega */}
      <group position={[18, 1, 9]}>
        <Box args={[2.5, 2, 2]} position={[0, 1, 0]} castShadow>
          <meshStandardMaterial color="#1f2937" metalness={0.4} roughness={0.6} />
        </Box>
        <Box args={[4, 1.5, 2.2]} position={[-3.2, 0.75, 0]} castShadow>
          <meshStandardMaterial color="#f3f4f6" metalness={0.2} roughness={0.8} />
        </Box>
        {/* Rodas */}
        {[
          [1, 0.4, 1],
          [1, 0.4, -1],
          [-3.2, 0.4, 1],
          [-3.2, 0.4, -1],
        ].map((pos, i) => (
          <Cylinder key={i} args={[0.4, 0.4, 0.3]} position={pos} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <meshStandardMaterial color="#1f2937" />
          </Cylinder>
        ))}
      </group>

      <Html position={[12, -1, 9]} center>
        <div className="bg-blue-50 px-4 py-2 rounded-lg shadow-lg text-sm border border-blue-300">
          <div className="font-bold text-blue-800">🚚 ÁREA DE EXPEDIÇÃO</div>
          <div className="text-blue-600 text-xs">Cozinhas prontas para entrega</div>
        </div>
      </Html>
    </group>
  )
}

function ControlPanels() {
  const [metrics, setMetrics] = useState({
    efficiency: 96,
    recycling: 92,
    cleanEnergy: 100,
    production: 12,
    quality: 98,
  })

  useFrame((state) => {
    const time = Math.floor(state.clock.elapsedTime)
    if (time % 8 === 0) {
      setMetrics({
        efficiency: Math.floor(94 + Math.random() * 6),
        recycling: Math.floor(90 + Math.random() * 10),
        cleanEnergy: Math.floor(98 + Math.random() * 2),
        production: Math.floor(10 + Math.random() * 6),
        quality: Math.floor(96 + Math.random() * 4),
      })
    }
  })

  return (
    <group>
      {/* Painel principal */}
      <group position={[0, 3, -10]}>
        <Box args={[8, 4, 0.3]} castShadow>
          <meshStandardMaterial color="#1f2937" metalness={0.5} roughness={0.5} />
        </Box>
        <Html position={[0, 0, 0.2]} center>
          <div className="bg-gradient-to-br from-green-800 to-green-900 text-white p-6 rounded-xl w-80 text-center shadow-2xl">
            <h2 className="font-bold mb-4 text-lg">🏭 FÁBRICA SUSTENTÁVEL DE COZINHAS</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-green-700 p-2 rounded">
                <div className="text-green-200 text-xs">🏠 PRODUTO</div>
                <div className="font-bold">Cozinhas Modulares</div>
              </div>
              <div className="bg-green-700 p-2 rounded">
                <div className="text-green-200 text-xs">🌱 SUSTENTÁVEL</div>
                <div className="font-bold">100% Renovável</div>
              </div>
              <div className="bg-green-700 p-2 rounded">
                <div className="text-green-200 text-xs">♻️ RECICLAGEM</div>
                <div className="font-bold">Zero Desperdício</div>
              </div>
              <div className="bg-green-700 p-2 rounded">
                <div className="text-green-200 text-xs">🌍 IMPACTO</div>
                <div className="font-bold">Carbono Neutro</div>
              </div>
            </div>
          </div>
        </Html>
      </group>

      {/* Painel de métricas */}
      <group position={[12, 2.5, -10]}>
        <Html center>
          <div className="bg-white p-4 rounded-xl shadow-xl border-2 border-gray-200 w-72">
            <h3 className="font-bold text-gray-800 mb-3 text-center">📊 MÉTRICAS EM TEMPO REAL</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Eficiência:</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 rounded-full transition-all duration-1000"
                      style={{ width: `${metrics.efficiency}%` }}
                    ></div>
                  </div>
                  <span className="text-green-600 font-bold text-sm w-8">{metrics.efficiency}%</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Reciclagem:</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full transition-all duration-1000"
                      style={{ width: `${metrics.recycling}%` }}
                    ></div>
                  </div>
                  <span className="text-blue-600 font-bold text-sm w-8">{metrics.recycling}%</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Energia Limpa:</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-500 rounded-full transition-all duration-1000"
                      style={{ width: `${metrics.cleanEnergy}%` }}
                    ></div>
                  </div>
                  <span className="text-yellow-600 font-bold text-sm w-8">{metrics.cleanEnergy}%</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Qualidade:</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-500 rounded-full transition-all duration-1000"
                      style={{ width: `${metrics.quality}%` }}
                    ></div>
                  </div>
                  <span className="text-purple-600 font-bold text-sm w-8">{metrics.quality}%</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2 border-t">
                <span className="text-gray-700 font-medium">Produção Diária:</span>
                <span className="text-indigo-600 font-bold">{metrics.production} cozinhas</span>
              </div>
            </div>

            <div className="text-xs text-green-600 mt-3 text-center font-semibold bg-green-50 p-2 rounded">
              🔄 Atualização automática a cada 8 segundos
            </div>
          </div>
        </Html>
      </group>
    </group>
  )
}
