import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function QuantumLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [isClient, setIsClient] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setIsClient(true);
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 70);

        return () => clearInterval(progressInterval);
    }, []);

    if (!isClient || !isLoading) return null;

    return (
        <div className="fixed inset-0 bg-[#030014] overflow-hidden quantum-space flex items-end justify-center">
            {/* Quantum Field */}
            <div className="quantum-field">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="quantum-particle" style={{
                        '--index': i,
                        '--total': 20
                    }} />
                ))}
            </div>

            {/* Neural Network Background */}
            <div className="neural-network">
                {[...Array(50)].map((_, i) => (
                    <div key={i} className="synaptic-node" style={{
                        '--delay': `${Math.random() * 5}s`,
                        '--position-x': `${Math.random() * 100}%`,
                        '--position-y': `${Math.random() * 100}%`
                    }} />
                ))}
            </div>

            {/* Data Stream Effects */}
            <div className="data-streams">
                {[...Array(15)].map((_, i) => (
                    <div key={i} className="data-line" style={{
                        '--speed': `${Math.random() * 3 + 2}s`,
                        '--opacity': Math.random() * 0.5 + 0.25
                    }} />
                ))}
            </div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative h-full flex items-center justify-center"
            >
                <div className="quantum-container">
                    {/* Quantum Core */}
                    <div className="quantum-core">
                        <div className="core-inner">
                            <div className="energy-field" />
                            <div className="quantum-rings">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="quantum-ring" style={{ '--ring-index': i }} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Holographic Interface */}
                    <div className="holo-interface">
                        <div className="progress-quantum">
                            <svg className="progress-ring" viewBox="0 0 100 100">
                                <circle className="progress-ring-bg" cx="50" cy="50" r="45" />
                                <circle
                                    className="progress-ring-fill"
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    style={{
                                        strokeDasharray: `${2 * Math.PI * 45}`,
                                        strokeDashoffset: `${2 * Math.PI * 45 * (1 - progress / 100)}`
                                    }}
                                />
                            </svg>
                            <div className="progress-text">{progress}%</div>
                        </div>
                    </div>

                    {/* DNA Helix Scanner */}
                    <div className="dna-scanner">
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="dna-strand" style={{ '--strand-delay': `${i * 0.2}s` }}>
                                <div className="nucleotide left" />
                                <div className="backbone" />
                                <div className="nucleotide right" />
                            </div>
                        ))}
                    </div>

                    {/* Welcome Text */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="welcome-text"
                    >
                        <h1 className="quantum-title">Welcome to Hariom&apos;s Portfolio</h1>
                        <p className="quantum-subtitle">Exploring Digital Frontiers</p>
                    </motion.div>
                </div>
            </motion.div>

            <style >{`
                .quantum-space {
                    perspective: 1000px;
                    transform-style: preserve-3d;
                    background: radial-gradient(circle at center, #1a0b2e 0%, #030014 100%);
                }

                /* Quantum Field */
                .quantum-field {
                    position: absolute;
                    inset: 0;
                    perspective: 1000px;
                }

                .quantum-particle {
                    position: absolute;
                    width: 2px;
                    height: 2px;
                    background: rgba(255, 255, 255, 0.8);
                    border-radius: 50%;
                    animation: quantumFloat 8s infinite;
                    left: calc(var(--index) * (100% / var(--total)));
                    top: calc(var(--index) * (100% / var(--total)));
                    filter: blur(1px);
                }

                /* Neural Network */
                .neural-network {
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                }

                .synaptic-node {
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: #4f46e5;
                    border-radius: 50%;
                    animation: synapticPulse 3s infinite;
                    animation-delay: var(--delay);
                    left: var(--position-x);
                    top: var(--position-y);
                    box-shadow: 0 0 10px #4f46e5;
                }

                /* Data Streams */
                .data-streams {
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                }

                .data-line {
                    position: absolute;
                    width: 1px;
                    height: 100%;
                    background: linear-gradient(to bottom, 
                        transparent,
                        rgba(79, 70, 229, var(--opacity)),
                        transparent
                    );
                    animation: dataFlow var(--speed) infinite;
                    transform: translateX(calc(var(--index) * (100% / 15)));
                }

                /* Quantum Core */
                .quantum-container {
                    position: relative;
                    width: 300px;
                    height: 300px;
                }

                .quantum-core {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100px;
                    height: 100px;
                }

                .core-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    animation: coreRotate 10s infinite linear;
                }

                .energy-field {
                    position: absolute;
                    inset: 10px;
                    background: radial-gradient(circle at center,
                        rgba(99, 102, 241, 0.8),
                        rgba(79, 70, 229, 0.4) 50%,
                        transparent 70%
                    );
                    border-radius: 50%;
                    animation: energyPulse 2s infinite;
                }

                .quantum-rings {
                    position: absolute;
                    inset: 0;
                    transform-style: preserve-3d;
                }

                .quantum-ring {
                    position: absolute;
                    inset: 0;
                    border: 2px solid rgba(99, 102, 241, 0.5);
                    border-radius: 50%;
                    animation: ringRotate 8s infinite linear;
                    animation-delay: calc(var(--ring-index) * -2.67s);
                }

                /* Holographic Interface */
                .holo-interface {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .progress-quantum {
                    position: relative;
                    width: 200px;
                    height: 200px;
                }

                .progress-ring {
                    transform: rotate(-90deg);
                    width: 100%;
                    height: 100%;
                }

                .progress-ring-bg {
                    fill: none;
                    stroke: rgba(79, 70, 229, 0.2);
                    stroke-width: 4;
                }

                .progress-ring-fill {
                    fill: none;
                    stroke: #4f46e5;
                    stroke-width: 4;
                    stroke-linecap: round;
                    transition: stroke-dashoffset 0.1s;
                    filter: drop-shadow(0 0 8px rgba(79, 70, 229, 0.8));
                }

                .progress-text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 1.5rem;
                    color: #fff;
                    font-family: 'Space Mono', monospace;
                    text-shadow: 0 0 10px rgba(79, 70, 229, 0.8);
                }

                /* DNA Scanner */
                .dna-scanner {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) rotate(90deg);
                    width: 200px;
                    height: 60px;
                    perspective: 1000px;
                }

                .dna-strand {
                    position: absolute;
                    width: 100%;
                    height: 6px;
                    animation: dnaRotate 3s infinite;
                    animation-delay: var(--strand-delay);
                }

                .nucleotide {
                    position: absolute;
                    width: 8px;
                    height: 8px;
                    background: #4f46e5;
                    border-radius: 50%;
                    box-shadow: 0 0 10px rgba(79, 70, 229, 0.8);
                }

                .backbone {
                    position: absolute;
                    top: 50%;
                    left: 4px;
                    right: 4px;
                    height: 2px;
                    background: rgba(79, 70, 229, 0.5);
                    transform: translateY(-50%);
                }

                .left { left: 0; }
                .right { right: 0; }

                /* Welcome Text */
                .welcome-text {
                    position: absolute;
                    bottom: -70px;
                    centre: 60%;
                    transform: translateX(-50%);
                    text-align: center;
                    width: 100%;
                }

                .quantum-title {
                    font-size: 2rem;
                    color: #fff;
                    font-weight: bold;
                    margin-bottom: 0.5rem;
                    text-shadow: 
                        0 0 10px rgba(79, 70, 229, 0.8),
                        0 0 20px rgba(79, 70, 229, 0.4);
                    animation: titleGlow 2s infinite;
                }

                .quantum-subtitle {
                    font-size: 1.2rem;
                    color: rgba(255, 255, 255, 0.8);
                    text-shadow: 0 0 10px rgba(79, 70, 229, 0.4);
                }

                /* Animations */
                @keyframes quantumFloat {
                    0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
                    50% { transform: translate3d(20px, -20px, 50px) scale(1.5); }
                }

                @keyframes synapticPulse {
                    0%, 100% { transform: scale(1); opacity: 0.5; }
                    50% { transform: scale(2); opacity: 1; }
                }

                @keyframes dataFlow {
                    0% { transform: translateY(-100%) translateX(var(--offset)); }
                    100% { transform: translateY(100%) translateX(var(--offset)); }
                }

                @keyframes coreRotate {
                    0% { transform: rotate3d(1, 1, 1, 0deg); }
                    100% { transform: rotate3d(1, 1, 1, 360deg); }
                }

                @keyframes energyPulse {
                    0%, 100% { opacity: 0.4; transform: scale(1); }
                    50% { opacity: 0.8; transform: scale(1.2); }
                }

                @keyframes ringRotate {
                    0% { transform: rotateX(60deg) rotateY(0deg) rotateZ(0deg); }
                    100% { transform: rotateX(60deg) rotateY(360deg) rotateZ(360deg); }
                }

                @keyframes dnaRotate {
                    0% { transform: rotateX(0deg); }
                    100% { transform: rotateX(360deg); }
                }

                @keyframes titleGlow {
                    0%, 100% { text-shadow: 0 0 10px rgba(79, 70, 229, 0.8), 0 0 20px rgba(79, 70, 229, 0.4); }
                    50% { text-shadow: 0 0 20px rgba(79, 70, 229, 1), 0 0 30px rgba(79, 70, 229, 0.6); }
                }
            `}</style>
        </div>
    );
}