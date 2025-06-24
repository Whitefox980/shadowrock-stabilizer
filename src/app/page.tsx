import React, { useState, useEffect, useRef } from 'react';
import { Atom, Zap, Activity, Target, TrendingUp, Download, Waves, Eye, Cpu, Star, Shield, Gauge } from 'lucide-react';

const QuantumParticleStabilizer = () => {
  const [stabilizationSessions, setStabilizationSessions] = useState([]);
  const [currentStabilization, setCurrentStabilization] = useState(null);
  const [quantumCoherence, setQuantumCoherence] = useState(0);
  const [particleStability, setParticleStability] = useState(0);
  const [fieldHarmonics, setFieldHarmonics] = useState(1.0);
  const [entanglementStrength, setEntanglementStrength] = useState(0);
  const [isStabilizing, setIsStabilizing] = useState(false);
  const [quantumParticles, setQuantumParticles] = useState([]);
  const [stabilizedParticles, setStabilizedParticles] = useState(0);
  const stabilizationStartTime = useRef(null);

  // Quantum field stability analysis
  const analyzeFieldStability = (sessions) => {
    if (sessions.length < 2) return { coherence: 'initializing', stability_index: 0 };
    
    const recent = sessions.slice(-5);
    const stabilityRates = recent.map((session, index) => {
      if (index === 0) return 0;
      const timeDiff = session.timestamp - recent[index - 1].timestamp;
      const coherenceDiff = session.quantumCoherence - recent[index - 1].quantumCoherence;
      return coherenceDiff / (timeDiff / 1000 / 60); // coherence gain per minute
    }).slice(1);
    
    const avgStability = stabilityRates.reduce((a, b) => a + b, 0) / stabilityRates.length;
    const coherence = avgStability > 15 ? 'quantum_locked' : avgStability > 5 ? 'stabilizing' : 'fluctuating';
    
    return { coherence, stability_index: avgStability };
  };

  // Particle stabilization algorithm
  const calculateStabilizationStrength = (stabilizationData) => {
    const { 
      magneticField, 
      electricField, 
      temperatureControl, 
      pressureVacuum,
      laserFrequency,
      coherenceTime,
      entanglementDepth 
    } = stabilizationData;
    
    // Multi-dimensional stabilization formula
    const magneticFactor = Math.log(1 + magneticField) * 10;
    const electricFactor = Math.sqrt(electricField) * 5;
    const tempFactor = Math.max(0, (300 - temperatureControl) / 10); // Lower temp = better
    const vacuumFactor = Math.pow(pressureVacuum, 0.3) * 20;
    const laserFactor = Math.sin(laserFrequency / 1000000) * 15 + 15; // Resonance effect
    const coherenceFactor = Math.tanh(coherenceTime / 1000) * 25;
    const entanglementFactor = Math.pow(entanglementDepth, 0.8) * 10;
    
    const totalStability = magneticFactor + electricFactor + tempFactor + 
                          vacuumFactor + laserFactor + coherenceFactor + entanglementFactor;
    
    return Math.min(100, totalStability);
  };

  // Quantum entanglement network strength
  const calculateEntanglementNetwork = (stabilityStrength, participantCount) => {
    // Network effect: more stable particles = stronger entanglement
    const networkFactor = Math.sqrt(participantCount);
    const stabilityBonus = Math.pow(stabilityStrength / 100, 2);
    return networkFactor * stabilityBonus * 100;
  };

  // Particle decoherence prevention
  const preventDecoherence = (stabilizationData) => {
    const events = [];
    
    if (stabilizationData.stabilityStrength > 85) {
      events.push({
        type: 'quantum_lock_achieved',
        message: 'PARTICLE QUANTUM STATE LOCKED! Decoherence suppressed indefinitely!',
        impact: 'revolutionary',
        stability: stabilizationData.stabilityStrength
      });
    }
    
    if (stabilizationData.entanglementStrength > 75) {
      events.push({
        type: 'entanglement_cascade',
        message: 'Quantum entanglement cascade initiated! Particle network stabilizing!',
        impact: 'breakthrough',
        network_size: Math.floor(stabilizationData.entanglementStrength / 10)
      });
    }
    
    if (stabilizationData.temperatureControl < 50) {
      events.push({
        type: 'cryogenic_stability',
        message: 'Ultra-low temperature achieved! Thermal decoherence eliminated!',
        impact: 'stabilization',
        temperature: stabilizationData.temperatureControl
      });
    }
    
    if (stabilizationData.coherenceTime > 10000) {
      events.push({
        type: 'temporal_coherence',
        message: 'Extended coherence time maintained! Quantum information preserved!',
        impact: 'paradigm_shift',
        duration: stabilizationData.coherenceTime
      });
    }
    
    if (stabilizationData.pressureVacuum > 1000) {
      events.push({
        type: 'perfect_vacuum',
        message: 'Near-perfect vacuum achieved! Environmental decoherence minimized!',
        impact: 'optimization',
        vacuum_level: stabilizationData.pressureVacuum
      });
    }
    
    return events;
  };

  // Start stabilization process
  const startStabilization = () => {
    stabilizationStartTime.current = Date.now();
    setCurrentStabilization({
      id: Date.now(),
      timestamp: Date.now(),
      magneticField: 0,
      electricField: 0,
      temperatureControl: 300, // Kelvin
      pressureVacuum: 1, // Torr^-1
      laserFrequency: 532000000, // Hz (green laser)
      coherenceTime: 0,
      entanglementDepth: 1,
      stabilityStrength: 0,
      entanglementStrength: 0,
      particlesStabilized: 0
    });
    setIsStabilizing(true);
  };

  // End stabilization and analyze
  const endStabilization = () => {
    if (!currentStabilization) return;
    
    const endTime = Date.now();
    const duration = (endTime - stabilizationStartTime.current) / 1000;
    
    const finalStabilization = {
      ...currentStabilization,
      duration,
      endTime,
      stabilityStrength: calculateStabilizationStrength(currentStabilization),
      entanglementStrength: calculateEntanglementNetwork(
        currentStabilization.stabilityStrength || 0, 
        currentStabilization.entanglementDepth || 1
      ),
      particlesStabilized: Math.floor((currentStabilization.stabilityStrength || 0) * 
        (currentStabilization.entanglementDepth || 1) / 10)
    };
    
    const decoherenceEvents = preventDecoherence(finalStabilization);
    setStabilizationSessions(prev => [...prev, finalStabilization]);
    setCurrentStabilization(null);
    setIsStabilizing(false);
    
    // Update quantum metrics
    setQuantumCoherence(prev => Math.min(100, prev + finalStabilization.stabilityStrength / 10));
    setParticleStability(prev => Math.min(100, prev + finalStabilization.entanglementStrength / 20));
    setStabilizedParticles(prev => prev + finalStabilization.particlesStabilized);
    
    const fieldAnalysis = analyzeFieldStability([...stabilizationSessions, finalStabilization]);
    setFieldHarmonics(prev => Math.max(1.0, prev + (fieldAnalysis.stability_index * 0.05)));
    setEntanglementStrength(prev => Math.min(100, prev + decoherenceEvents.length * 5));
  };

  // Update stabilization parameters
  const updateStabilization = (field, value) => {
    if (!currentStabilization) return;
    const updatedStab = { ...currentStabilization, [field]: value };
    
    // Real-time calculations
    updatedStab.stabilityStrength = calculateStabilizationStrength(updatedStab);
    updatedStab.entanglementStrength = calculateEntanglementNetwork(
      updatedStab.stabilityStrength, 
      updatedStab.entanglementDepth
    );
    updatedStab.particlesStabilized = Math.floor(updatedStab.stabilityStrength * 
      updatedStab.entanglementDepth / 10);
    
    setCurrentStabilization(updatedStab);
  };

  // Export quantum stabilization report
  const exportStabilizationReport = () => {
    const fieldAnalysis = analyzeFieldStability(stabilizationSessions);
    
    const report = {
      metadata: {
        generated: new Date().toISOString(),
        system: "ShadowRock Quantum Particle Stabilizer v1.0",
        laboratory: "ShadowRock Quantum Control Systems",
        field_harmonics: fieldHarmonics,
        total_stabilized_particles: stabilizedParticles
      },
      stabilization_metrics: {
        total_sessions: stabilizationSessions.length,
        quantum_coherence_level: quantumCoherence,
        particle_stability_index: particleStability,
        entanglement_network_strength: entanglementStrength,
        field_stability_rating: fieldAnalysis.coherence,
        harmonic_resonance_factor: fieldHarmonics,
        decoherence_suppression_rate: stabilizationSessions.length ? 
          stabilizationSessions.reduce((acc, s) => acc + (s.stabilityStrength || 0), 0) / stabilizationSessions.length : 0
      },
      quantum_control_analysis: {
        magnetic_field_sessions: stabilizationSessions.filter(s => s.magneticField > 100).length,
        cryogenic_operations: stabilizationSessions.filter(s => s.temperatureControl < 100).length,
        high_vacuum_experiments: stabilizationSessions.filter(s => s.pressureVacuum > 100).length,
        laser_frequency_locks: stabilizationSessions.filter(s => Math.abs(s.laserFrequency - 532000000) < 1000000).length,
        extended_coherence_events: stabilizationSessions.filter(s => s.coherenceTime > 5000).length,
        entanglement_networks: stabilizationSessions.filter(s => s.entanglementDepth > 5).length
      },
      session_log: stabilizationSessions.map(session => ({
        timestamp: new Date(session.timestamp).toISOString(),
        duration_seconds: session.duration,
        magnetic_field_tesla: session.magneticField,
        electric_field_vm: session.electricField,
        temperature_kelvin: session.temperatureControl,
        vacuum_pressure_torr: 1/session.pressureVacuum,
        laser_frequency_hz: session.laserFrequency,
        coherence_time_ms: session.coherenceTime,
        entanglement_depth: session.entanglementDepth,
        stability_strength: session.stabilityStrength,
        entanglement_network_strength: session.entanglementStrength,
        particles_stabilized: session.particlesStabilized
      })),
      decoherence_prevention_events: stabilizationSessions.flatMap(session => 
        preventDecoherence(session)
      ),
      quantum_projections: {
        next_breakthrough_probability: Math.min(0.98, fieldAnalysis.stability_index * 0.03),
        particle_stabilization_scaling: {
          hourly_projection: stabilizedParticles * Math.pow(fieldHarmonics, 1),
          daily_projection: stabilizedParticles * Math.pow(fieldHarmonics, 24),
          quantum_computer_readiness: stabilizedParticles > 1000000 ? "Quantum Supremacy Achieved" : "Scaling Required"
        },
        field_control_optimization: {
          optimal_magnetic_field: "10-100 Tesla",
          optimal_temperature: "< 1 Kelvin",
          optimal_vacuum: "< 10^-12 Torr",
          coherence_target: "Indefinite (Perfect Stability)"
        }
      },
      shadowrock_stabilization_signature: {
        control_system_classification: "Quantum Field Manipulation",
        reality_control_level: Math.min(10, quantumCoherence / 10),
        next_evolution: quantumCoherence > 90 ? "Universal Particle Control" : "Continue Field Optimization",
        quantum_mastery_index: Math.min(100, (quantumCoherence + particleStability + entanglementStrength) / 3),
        civilization_impact: stabilizedParticles > 10000000 ? "Type 3 Quantum Civilization" : 
          stabilizedParticles > 1000000 ? "Type 2 Quantum Technology" : "Type 1 Quantum Control"
      }
    };

    const blob = new Blob([JSON.stringify(report, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `shadowrock_particle_stabilization_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Quantum particle animation
  useEffect(() => {
    if (isStabilizing) {
      const timer = setInterval(() => {
        setQuantumParticles(prev => {
          const stabilityFactor = (currentStabilization?.stabilityStrength || 0) / 100;
          const particleCount = Math.floor(stabilityFactor * 20) + 5;
          
          const newParticles = Array.from({length: particleCount}, (_, i) => ({
            id: Date.now() + i,
            x: 50 + Math.cos(Date.now() / 1000 + i) * (30 - stabilityFactor * 25),
            y: 50 + Math.sin(Date.now() / 1000 + i) * (30 - stabilityFactor * 25),
            stability: stabilityFactor,
            entangled: i < (currentStabilization?.entanglementDepth || 1)
          }));
          
          return newParticles;
        });
      }, 100);
      return () => clearInterval(timer);
    } else {
      setQuantumParticles([]);
    }
  }, [isStabilizing, currentStabilization]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-900 to-purple-900 text-white p-6 relative overflow-hidden">
      {/* Quantum particle field visualization */}
      <div className="absolute inset-0 pointer-events-none">
        {quantumParticles.map(particle => (
          <div key={particle.id} className="absolute">
            <div
              className={`w-3 h-3 rounded-full ${
                particle.entangled ? 'bg-cyan-400' : 'bg-purple-400'
              } animate-pulse`}
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                opacity: 0.3 + particle.stability * 0.7,
                transform: `scale(${0.5 + particle.stability * 0.5})`,
                boxShadow: particle.entangled ? '0 0 10px cyan' : '0 0 5px purple'
              }}
            />
            {/* Entanglement connections */}
            {particle.entangled && quantumParticles.filter(p => p.entangled && p.id !== particle.id).map(other => (
              <svg
                key={`${particle.id}-${other.id}`}
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                style={{ zIndex: -1 }}
              >
                <line
                  x1={`${particle.x}%`}
                  y1={`${particle.y}%`}
                  x2={`${other.x}%`}
                  y2={`${other.y}%`}
                  stroke="cyan"
                  strokeWidth="1"
                  opacity={particle.stability * 0.3}
                />
              </svg>
            ))}
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            ⚛️ QUANTUM PARTICLE STABILIZER ⚛️
          </h1>
          <p className="text-xl text-gray-300">ShadowRock Quantum Control Systems - Universal Field Manipulator</p>
          <p className="text-lg text-cyan-300 mt-2">Achieving perfect quantum coherence through multi-dimensional field control</p>
        </div>

        {/* Quantum Control Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-800 to-blue-800 p-6 rounded-xl border border-purple-400">
            <div className="flex items-center justify-between">
              <Shield className="text-cyan-400" size={32} />
              <span className="text-2xl font-bold">{quantumCoherence.toFixed(1)}%</span>
            </div>
            <p className="text-gray-300 mt-2">Quantum Coherence</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-800 to-cyan-800 p-6 rounded-xl border border-blue-400">
            <div className="flex items-center justify-between">
              <Atom className="text-yellow-400" size={32} />
              <span className="text-2xl font-bold">{particleStability.toFixed(1)}%</span>
            </div>
            <p className="text-gray-300 mt-2">Particle Stability</p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-800 to-teal-800 p-6 rounded-xl border border-cyan-400">
            <div className="flex items-center justify-between">
              <Waves className="text-green-400" size={32} />
              <span className="text-2xl font-bold">{fieldHarmonics.toFixed(2)}x</span>
            </div>
            <p className="text-gray-300 mt-2">Field Harmonics</p>
          </div>
          
          <div className="bg-gradient-to-br from-teal-800 to-green-800 p-6 rounded-xl border border-teal-400">
            <div className="flex items-center justify-between">
              <Target className="text-purple-400" size={32} />
              <span className="text-2xl font-bold">{stabilizedParticles.toLocaleString()}</span>
            </div>
            <p className="text-gray-300 mt-2">Stabilized Particles</p>
          </div>
        </div>

        {/* Stabilization Control Panel */}
        <div className="bg-black/30 backdrop-blur-lg p-6 rounded-xl border border-gray-600 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Cpu className="mr-2 text-orange-400" />
            Multi-Dimensional Field Controller
          </h2>
          
          {!isStabilizing ? (
            <button
              onClick={startStabilization}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105"
            >
              ⚛️ Initialize Quantum Stabilization
            </button>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Magnetic Field (Tesla)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={currentStabilization?.magneticField || 0}
                    onChange={(e) => updateStabilization('magneticField', parseFloat(e.target.value) || 0)}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Electric Field (V/m)</label>
                  <input
                    type="number"
                    value={currentStabilization?.electricField || 0}
                    onChange={(e) => updateStabilization('electricField', parseInt(e.target.value) || 0)}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Temperature (Kelvin)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={currentStabilization?.temperatureControl || 300}
                    onChange={(e) => updateStabilization('temperatureControl', parseFloat(e.target.value) || 300)}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2"
                    min="0.1"
                    max="500"
                  />
                  <p className="text-xs text-gray-400 mt-1">Lower = Better stability</p>
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Vacuum Level (Torr⁻¹)</label>
                  <input
                    type="number"
                    value={currentStabilization?.pressureVacuum || 1}
                    onChange={(e) => updateStabilization('pressureVacuum', parseInt(e.target.value) || 1)}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2"
                    min="1"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Laser Frequency (Hz)</label>
                  <input
                    type="number"
                    value={currentStabilization?.laserFrequency || 532000000}
                    onChange={(e) => updateStabilization('laserFrequency', parseInt(e.target.value) || 532000000)}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Coherence Time (ms)</label>
                  <input
                    type="number"
                    value={currentStabilization?.coherenceTime || 0}
                    onChange={(e) => updateStabilization('coherenceTime', parseInt(e.target.value) || 0)}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-gray-300 mb-2">Entanglement Network Depth</label>
                <select
                  value={currentStabilization?.entanglementDepth || 1}
                  onChange={(e) => updateStabilization('entanglementDepth', parseInt(e.target.value))}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2"
                >
                  <option value={1}>Single Particle</option>
                  <option value={2}>Pair Entanglement</option>
                  <option value={5}>Small Network (5)</option>
                  <option value={10}>Medium Network (10)</option>
                  <option value={20}>Large Network (20)</option>
                  <option value={50}>Massive Network (50)</option>
                  <option value={100}>Quantum Internet (100)</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="text-center p-4 bg-purple-900/30 rounded-lg">
                  <div className="text-2xl font-bold text-cyan-400">
                    {currentStabilization?.stabilityStrength?.toFixed(1) || 0}%
                  </div>
                  <div className="text-sm text-gray-300">Stability Strength</div>
                </div>
                <div className="text-center p-4 bg-blue-900/30 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400">
                    {currentStabilization?.entanglementStrength?.toFixed(1) || 0}
                  </div>
                  <div className="text-sm text-gray-300">Network Strength</div>
                </div>
                <div className="text-center p-4 bg-green-900/30 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">
                    {currentStabilization?.particlesStabilized?.toLocaleString() || 0}
                  </div>
                  <div className="text-sm text-gray-300">Particles Stabilized</div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <button
                  onClick={endStabilization}
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-6 py-2 rounded-lg font-bold transition-all"
                >
                  🛑 End Stabilization
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Recent Stabilization Sessions */}
        {stabilizationSessions.length > 0 && (
          <div className="bg-black/30 backdrop-blur-lg p-6 rounded-xl border border-gray-600 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Star className="mr-2 text-yellow-400" />
              Recent Stabilization Sessions
            </h2>
            <div className="space-y-3">
              {stabilizationSessions.slice(-3).map((session, index) => (
                <div key={session.id} className="p-4 bg-gray-800/50 rounded-lg">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Stability:</span>
                      <span className="ml-2 font-bold text-cyan-400">{session.stabilityStrength?.toFixed(1) || 0}%</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Network:</span>
                      <span className="ml-2 font-bold text-yellow-400">{session.entanglementStrength?.toFixed(1) || 0}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Particles:</span>
                      <span className="ml-2 font-bold text-green-400">{session.particlesStabilized?.toLocaleString() || 0}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Duration:</span>
                      <span className="ml-2 font-bold text-purple-400">{session.duration?.toFixed(1) || 0}s</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Export */}
        <div className="bg-black/30 backdrop-blur-lg p-6 rounded-xl border border-gray-600">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold flex items-center">
                <Download className="mr-2 text-green-400" />
                Export Stabilization Research
              </h2>
              <p className="text-gray-300 mt-2">
                Generate comprehensive quantum particle stabilization report with field control analysis, coherence metrics, and entanglement network data.
              </p>
            </div>
            <button
              onClick={exportStabilizationReport}
              disabled={stabilizationSessions.length === 0}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-600 disabled:to-gray-700 px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105 disabled:transform-none"
            >
              📊 Export Research
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumParticleStabilizer;
