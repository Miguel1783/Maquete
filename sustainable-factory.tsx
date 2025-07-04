"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Box, Cylinder, Sphere } from "@react-three/drei"
import { Html } from "@react-three/drei"

export default function Component() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-sky-200 to-green-100">
      <Canvas shadows camera={{ position: [15, 12, 15], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        {/* Base da fábrica */}
        <FactoryBase />

        {/* Máquinas de produção */}
        <ProductionMachines />

        {/* Sistema de energia renovável */}
        <RenewableEnergy />

        {/* Sistema de reciclagem */}
        <RecyclingSystem />

        {/* Esteira transportadora */}
        <ConveyorBelt />

        {/* Painéis informativos */}
        <InfoPanels />

        <Environment preset="park" background />
        <OrbitControls enablePan={true} enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  )
}

function FactoryBase() {
  return (
    <group>
      {/* Chão da fábrica */}
      <Box args={[20, 0.2, 15]} position={[0, -0.1, 0]} receiveShadow>
        <meshStandardMaterial color="#e5e7eb" />
      </Box>

      {/* Paredes */}
      <Box args={[0.2, 4, 15]} position={[-10, 2, 0]} castShadow>
        <meshStandardMaterial color="#9ca3af" />
      </Box>
      <Box args={[20, 4, 0.2]} position={[0, 2, -7.5]} castShadow>
        <meshStandardMaterial color="#9ca3af" />
      </Box>
    </group>
  )
}

function ProductionMachines() {
  const machine1Ref = useRef()
  const machine2Ref = useRef()
  const machine3Ref = useRef()

  useFrame((state) => {
    if (machine1Ref.current) {
      machine1Ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 2) * 0.1
    }
    if (machine2Ref.current) {
      machine2Ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 1.5) * 0.05
    }
    if (machine3Ref.current) {
      machine3Ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.8) * 0.03
    }
  })

  return (
    <group>
      {/* Máquina 1: Moldagem inicial */}
      <group position={[-6, 1.5, -3]} ref={machine1Ref}>
        <Box args={[2, 3, 2]} castShadow>
          <meshStandardMaterial color="#22c55e" />
        </Box>
        <Cylinder args={[0.3, 0.3, 1]} position={[0, 2, 0]} castShadow>
          <meshStandardMaterial color="#16a34a" />
        </Cylinder>
        {/* Entrada da máquina */}
        <Box args={[0.6, 0.4, 0.2]} position={[-1.2, 0, 0]} castShadow>
          <meshStandardMaterial color="#15803d" />
        </Box>
        {/* Saída da máquina */}
        <Box args={[0.6, 0.4, 0.2]} position={[1.2, 0, 0]} castShadow>
          <meshStandardMaterial color="#15803d" />
        </Box>
        <Html position={[0, -2, 0]} center>
          <div className="bg-gradient-to-r from-green-100 to-green-200 px-3 py-2 rounded-lg shadow-lg text-xs border border-green-300">
            <div className="font-bold text-green-800 mb-1">🔄 ESTAÇÃO 01</div>
            <div className="text-green-700 font-semibold">Trituração e Moldagem</div>
            <div className="text-green-600 text-xs">Transforma resíduos em blocos</div>
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="text-red-600 text-lg">🟥</span>
              <span className="text-gray-500">→</span>
              <span className="text-blue-600 text-lg">🟦</span>
            </div>
          </div>
        </Html>
      </group>

      {/* Máquina 2: Montagem e processamento */}
      <group position={[2, 1, -3]} ref={machine2Ref}>
        <Box args={[3, 2, 1.5]} castShadow>
          <meshStandardMaterial color="#3b82f6" />
        </Box>
        <Box args={[0.5, 0.5, 2]} position={[0, 1.5, 0]} castShadow>
          <meshStandardMaterial color="#1d4ed8" />
        </Box>
        {/* Entrada da máquina */}
        <Box args={[0.6, 0.4, 0.2]} position={[-1.7, 0, 0]} castShadow>
          <meshStandardMaterial color="#1e40af" />
        </Box>
        {/* Saída da máquina */}
        <Box args={[0.6, 0.4, 0.2]} position={[1.7, 0, 0]} castShadow>
          <meshStandardMaterial color="#1e40af" />
        </Box>
        <Html position={[0, -1.5, 0]} center>
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 px-3 py-2 rounded-lg shadow-lg text-xs border border-blue-300">
            <div className="font-bold text-blue-800 mb-1">⚙️ ESTAÇÃO 02</div>
            <div className="text-blue-700 font-semibold">Montagem e Soldagem</div>
            <div className="text-blue-600 text-xs">Une peças com energia solar</div>
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="text-blue-600 text-lg">🟦</span>
              <span className="text-gray-500">→</span>
              <span className="text-green-600 text-lg">🟢</span>
            </div>
          </div>
        </Html>
      </group>

      {/* Máquina 3: Acabamento final */}
      <group position={[6, 0.8, -3]} ref={machine3Ref}>
        <Cylinder args={[1, 1.2, 1.6]} castShadow>
          <meshStandardMaterial color="#f59e0b" />
        </Cylinder>
        <Sphere args={[0.3]} position={[0, 1.2, 0]} castShadow>
          <meshStandardMaterial color="#d97706" />
        </Sphere>
        {/* Entrada da máquina */}
        <Cylinder args={[0.2, 0.2, 0.4]} position={[-1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <meshStandardMaterial color="#ea580c" />
        </Cylinder>
        {/* Saída da máquina */}
        <Cylinder args={[0.2, 0.2, 0.4]} position={[1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <meshStandardMaterial color="#ea580c" />
        </Cylinder>
        <Html position={[0, -1.2, 0]} center>
          <div className="bg-gradient-to-r from-yellow-100 to-orange-200 px-3 py-2 rounded-lg shadow-lg text-xs border border-orange-300">
            <div className="font-bold text-orange-800 mb-1">✨ ESTAÇÃO 03</div>
            <div className="text-orange-700 font-semibold">Polimento e Embalagem</div>
            <div className="text-orange-600 text-xs">Finaliza com materiais recicláveis</div>
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="text-green-600 text-lg">🟢</span>
              <span className="text-gray-500">→</span>
              <span className="text-yellow-600 text-lg">🟡</span>
            </div>
          </div>
        </Html>
      </group>
    </group>
  )
}

function RenewableEnergy() {
  const solarRef = useRef()
  const windRef = useRef()

  useFrame((state) => {
    if (windRef.current) {
      windRef.current.rotation.z += 0.02
    }
    if (solarRef.current) {
      solarRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  return (
    <group>
      {/* Painéis solares */}
      <group position={[-8, 3, 2]} ref={solarRef}>
        <Box args={[3, 0.1, 2]} castShadow>
          <meshStandardMaterial color="#1e40af" />
        </Box>
        <Box args={[2.8, 0.05, 1.8]} position={[0, 0.1, 0]}>
          <meshStandardMaterial color="#3b82f6" />
        </Box>
        <Html position={[0, -1, 0]} center>
          <div className="bg-white px-2 py-1 rounded shadow text-xs">Painéis Solares</div>
        </Html>
      </group>

      {/* Turbina eólica */}
      <group position={[8, 4, 3]}>
        <Cylinder args={[0.1, 0.1, 4]} castShadow>
          <meshStandardMaterial color="#6b7280" />
        </Cylinder>
        <group ref={windRef} position={[0, 2, 0]}>
          <Box args={[0.1, 2, 0.3]} position={[1, 0, 0]} castShadow>
            <meshStandardMaterial color="#f3f4f6" />
          </Box>
          <Box args={[0.1, 2, 0.3]} position={[-1, 0, 0]} castShadow>
            <meshStandardMaterial color="#f3f4f6" />
          </Box>
          <Box args={[0.3, 2, 0.1]} position={[0, 0, 1]} castShadow>
            <meshStandardMaterial color="#f3f4f6" />
          </Box>
        </group>
        <Html position={[0, -3, 0]} center>
          <div className="bg-white px-2 py-1 rounded shadow text-xs">Energia Eólica</div>
        </Html>
      </group>
    </group>
  )
}

function RecyclingSystem() {
  const recycleRef = useRef()

  useFrame((state) => {
    if (recycleRef.current) {
      recycleRef.current.rotation.y += 0.01
    }
  })

  return (
    <group>
      {/* Centro de reciclagem */}
      <group position={[-2, 1, 4]}>
        <Cylinder args={[1.5, 1.5, 2]} castShadow>
          <meshStandardMaterial color="#059669" />
        </Cylinder>
        <group ref={recycleRef} position={[0, 1.5, 0]}>
          <Box args={[0.3, 0.3, 2]} castShadow>
            <meshStandardMaterial color="#10b981" />
          </Box>
          <Box args={[2, 0.3, 0.3]} castShadow>
            <meshStandardMaterial color="#10b981" />
          </Box>
        </group>
        <Html position={[0, -2, 0]} center>
          <div className="bg-white px-2 py-1 rounded shadow text-xs">Centro de Reciclagem</div>
        </Html>
      </group>

      {/* Containers de separação */}
      <group position={[2, 0.5, 5]}>
        <Box args={[0.8, 1, 0.8]} position={[-1, 0, 0]} castShadow>
          <meshStandardMaterial color="#dc2626" />
        </Box>
        <Box args={[0.8, 1, 0.8]} position={[0, 0, 0]} castShadow>
          <meshStandardMaterial color="#2563eb" />
        </Box>
        <Box args={[0.8, 1, 0.8]} position={[1, 0, 0]} castShadow>
          <meshStandardMaterial color="#16a34a" />
        </Box>
        <Html position={[0, -1.2, 0]} center>
          <div className="bg-white px-2 py-1 rounded shadow text-xs">Separação de Resíduos</div>
        </Html>
      </group>
    </group>
  )
}

function ConveyorBelt() {
  const product1Ref = useRef()
  const product2Ref = useRef()
  const product3Ref = useRef()
  const product4Ref = useRef()

  useFrame((state) => {
    const time = state.clock.elapsedTime * 0.5

    // Produto 1: Material bruto entrando na primeira máquina
    if (product1Ref.current) {
      const progress = (time % 8) / 8
      if (progress < 0.3) {
        // Movendo para a primeira máquina pela esteira conectada
        product1Ref.current.position.x = -10.5 + progress * 15 // -10.5 to -6
        product1Ref.current.position.z = -3
        product1Ref.current.visible = true
      } else if (progress < 0.4) {
        // Dentro da primeira máquina (invisível)
        product1Ref.current.visible = false
      } else {
        product1Ref.current.visible = false
      }
    }

    // Produto 2: Saindo da primeira máquina (semi-processado)
    if (product2Ref.current) {
      const progress = ((time - 3.2) % 8) / 8
      if (progress > 0 && progress < 0.25) {
        // Saindo da primeira máquina para a segunda
        product2Ref.current.position.x = -6 + progress * 32 // -6 to 2
        product2Ref.current.position.z = -3
        product2Ref.current.visible = true
      } else if (progress >= 0.25 && progress < 0.35) {
        // Dentro da segunda máquina
        product2Ref.current.visible = false
      } else {
        product2Ref.current.visible = false
      }
    }

    // Produto 3: Saindo da segunda máquina para a terceira
    if (product3Ref.current) {
      const progress = ((time - 6.4) % 8) / 8
      if (progress > 0 && progress < 0.25) {
        product3Ref.current.position.x = 2 + progress * 16 // 2 to 6
        product3Ref.current.position.z = -3
        product3Ref.current.visible = true
      } else if (progress >= 0.25 && progress < 0.35) {
        // Dentro da terceira máquina
        product3Ref.current.visible = false
      } else {
        product3Ref.current.visible = false
      }
    }

    // Produto 4: Produto final saindo da terceira máquina
    if (product4Ref.current) {
      const progress = ((time - 9.6) % 8) / 8
      if (progress > 0 && progress < 0.4) {
        product4Ref.current.position.x = 6 + progress * 10 // 6 to 10
        product4Ref.current.position.z = -3
        product4Ref.current.visible = true
      } else {
        product4Ref.current.visible = false
      }
    }
  })

  return (
    <group>
      {/* Esteira de entrada - material bruto - CONECTADA na máquina 1 */}
      <Box args={[6, 0.1, 0.8]} position={[-7.5, 0.5, -3]} castShadow>
        <meshStandardMaterial color="#374151" />
      </Box>

      {/* Esteira entre máquina 1 e 2 */}
      <Box args={[8, 0.1, 0.8]} position={[-2, 0.5, -3]} castShadow>
        <meshStandardMaterial color="#374151" />
      </Box>

      {/* Esteira entre máquina 2 e 3 */}
      <Box args={[4, 0.1, 0.8]} position={[4, 0.5, -3]} castShadow>
        <meshStandardMaterial color="#374151" />
      </Box>

      {/* Esteira de saída - produto final */}
      <Box args={[4, 0.1, 0.8]} position={[8, 0.5, -3]} castShadow>
        <meshStandardMaterial color="#374151" />
      </Box>

      {/* Produto 1: Material bruto (cubo vermelho) */}
      <Box args={[0.4, 0.3, 0.4]} position={[-10.5, 0.8, -3]} ref={product1Ref} castShadow>
        <meshStandardMaterial color="#dc2626" />
      </Box>

      {/* Produto 2: Semi-processado (cubo azul, mais alto) */}
      <Box args={[0.5, 0.5, 0.4]} position={[-6, 0.8, -3]} ref={product2Ref} castShadow>
        <meshStandardMaterial color="#2563eb" />
      </Box>

      {/* Produto 3: Quase finalizado (cilindro verde) */}
      <Cylinder args={[0.3, 0.3, 0.6]} position={[2, 0.8, -3]} ref={product3Ref} castShadow>
        <meshStandardMaterial color="#16a34a" />
      </Cylinder>

      {/* Produto 4: Produto final (esfera dourada) */}
      <Sphere args={[0.3]} position={[6, 0.8, -3]} ref={product4Ref} castShadow>
        <meshStandardMaterial color="#f59e0b" metalness={0.8} roughness={0.2} />
      </Sphere>

      {/* Suportes das esteiras */}
      <Cylinder args={[0.1, 0.1, 0.5]} position={[-10.5, 0.25, -3]} castShadow>
        <meshStandardMaterial color="#6b7280" />
      </Cylinder>
      <Cylinder args={[0.1, 0.1, 0.5]} position={[-10, 0.25, 0]} castShadow>
        <meshStandardMaterial color="#6b7280" />
      </Cylinder>
      <Cylinder args={[0.1, 0.1, 0.5]} position={[-6, 0.25, 0]} castShadow>
        <meshStandardMaterial color="#6b7280" />
      </Cylinder>
      <Cylinder args={[0.1, 0.1, 0.5]} position={[2, 0.25, -3]} castShadow>
        <meshStandardMaterial color="#6b7280" />
      </Cylinder>
      <Cylinder args={[0.1, 0.1, 0.5]} position={[6, 0.25, -3]} castShadow>
        <meshStandardMaterial color="#6b7280" />
      </Cylinder>
      <Cylinder args={[0.1, 0.1, 0.5]} position={[10, 0.25, -3]} castShadow>
        <meshStandardMaterial color="#6b7280" />
      </Cylinder>

      {/* Indicadores de direção das esteiras */}
      <Html position={[-7.5, 1.5, -3]} center>
        <div className="bg-red-100 px-2 py-1 rounded shadow text-xs">➡️ Matéria-Prima</div>
      </Html>

      <Html position={[-2, 1.5, -3]} center>
        <div className="bg-blue-100 px-2 py-1 rounded shadow text-xs">➡️ Semi-processado</div>
      </Html>

      <Html position={[4, 1.5, -3]} center>
        <div className="bg-green-100 px-2 py-1 rounded shadow text-xs">➡️ Pré-acabamento</div>
      </Html>

      <Html position={[8, 1.5, -3]} center>
        <div className="bg-yellow-100 px-2 py-1 rounded shadow text-xs">➡️ Produto Final</div>
      </Html>
    </group>
  )
}

function InfoPanels() {
  const [metrics, setMetrics] = useState({
    efficiency: 95,
    recycling: 90,
    cleanEnergy: 100,
  })

  useFrame((state) => {
    // Atualizar métricas a cada 10 segundos baseado na produção
    const time = Math.floor(state.clock.elapsedTime)
    if (time % 10 === 0) {
      // Atualiza a cada 10 segundos
      setMetrics({
        efficiency: Math.floor(92 + Math.random() * 8), // 92-100%
        recycling: Math.floor(88 + Math.random() * 12), // 88-100%
        cleanEnergy: Math.floor(98 + Math.random() * 2), // 98-100%
      })
    }
  })

  return (
    <group>
      {/* Painel de controle principal */}
      <group position={[0, 2, -6]}>
        <Box args={[4, 2, 0.2]} castShadow>
          <meshStandardMaterial color="#1f2937" />
        </Box>
        <Html position={[0, 0, 0.2]} center>
          <div className="bg-green-900 text-white p-4 rounded w-64 text-center">
            <h3 className="font-bold mb-2">🏭 Fábrica Sustentável</h3>
            <div className="text-sm space-y-1">
              <p>🌱 100% Energia Renovável</p>
              <p>♻️ Zero Desperdício</p>
              <p>💧 Reuso de Água</p>
              <p>🌍 Carbono Neutro</p>
            </div>
          </div>
        </Html>
      </group>

      {/* Indicadores de eficiência - MODIFICADO para tempo real */}
      <group position={[8, 1.5, -6]}>
        <Html center>
          <div className="bg-white p-4 rounded-lg shadow-xl border-2 border-green-200">
            <h4 className="font-bold text-green-800 mb-3 text-center">📊 INDICADORES DE PERFORMANCE</h4>
            <div className="text-xs space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700">🎯 Eficiência:</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-3 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-500"
                      style={{ width: `${metrics.efficiency}%` }}
                    ></div>
                  </div>
                  <span className="text-green-600 font-bold w-8">{metrics.efficiency}%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700">♻️ Reciclagem:</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-3 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500"
                      style={{ width: `${metrics.recycling}%` }}
                    ></div>
                  </div>
                  <span className="text-blue-600 font-bold w-8">{metrics.recycling}%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700">⚡ Energia Limpa:</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-3 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full transition-all duration-500"
                      style={{ width: `${metrics.cleanEnergy}%` }}
                    ></div>
                  </div>
                  <span className="text-yellow-600 font-bold w-8">{metrics.cleanEnergy}%</span>
                </div>
              </div>
            </div>
            <div className="text-xs text-green-600 mt-3 text-center font-semibold">
              🔄 Atualizado a cada 10 segundos
            </div>
          </div>
        </Html>
      </group>
    </group>
  )
}
