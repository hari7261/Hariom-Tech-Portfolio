import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

export default function CyberneticLoader() {
    const [isClient, setIsClient] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [hackPhase, setHackPhase] = useState('');
    const audioRef = useRef(null);

    const hackPhrases = [
        'Quantum Encryption Initializing...',
        'Neural Sync Protocol Engaging...',
        'Cybernetic Handshake Established...',
        'Quantum Algorithms Calibrating...',
        'Neural Network Synchronization...',
        'Cryptographic Protocols Verified...'
    ];

    useEffect(() => {
        setIsClient(true);
        const totalDuration = 4000;
        const startTime = Date.now();

        const progressInterval = setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            const currentProgress = Math.min((elapsedTime / totalDuration) * 100, 100);

            setProgress(currentProgress);

            // Dynamic phase selection
            const phaseIndex = Math.floor((currentProgress / 100) * hackPhrases.length);
            setHackPhase(hackPhrases[phaseIndex] || hackPhrases[hackPhrases.length - 1]);

            if (currentProgress >= 100) {
                clearInterval(progressInterval);
                setTimeout(() => setIsLoading(false), 500);
            }
        }, 50);

        return () => clearInterval(progressInterval);
    }, []);

    const handleStart = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    if (!isClient || !isLoading) return null;

    return (
        <div
            className="fixed inset-0 bg-[#010409] overflow-hidden cyber-loader flex items-center justify-center"
            onClick={handleStart}
        >
            <audio ref={audioRef} src="/cyber-startup.mp3" preload="auto" />

            <div className="matrix-rain"></div>
            <div className="circuit-overlay"></div>

            <MotionDiv
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="loader-container"
            >
                <div className="terminal-frame">
                    <div className="terminal-header">
                        <div className="terminal-dots">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <div className="terminal-title">QUANTUM SYSTEM INITIALIZATION</div>
                    </div>

                    <div className="terminal-content">
                        <div className="hack-display">
                            <div className="hack-text">{hackPhase}</div>
                            <div className="system-code">
                                {`> QTM-${Math.random().toString(36).substr(2, 9).toUpperCase()}`}
                            </div>
                        </div>

                        <div className="progress-container">
                            <div
                                className="progress-bar"
                                style={{
                                    width: `${progress}%`,
                                    background: `linear-gradient(90deg, 
                                        #00ff41 0%, 
                                        #00ff41 ${progress}%, 
                                        rgba(0,255,65,0.1) ${progress}%)`
                                }}
                            ></div>
                        </div>

                        <div className="system-stats">
                            <div>Progress: {Math.round(progress)}%</div>
                            <div className="status-indicator">
                                {progress < 100 ? 'PROCESSING' : 'SYSTEM ONLINE'}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="holographic-overlay"></div>
            </MotionDiv>

            <style>{`
                .cyber-loader {
                    font-family: 'Space Mono', monospace;
                    background-color: #010409;
                    perspective: 1000px;
                    cursor: pointer;
                }

                .matrix-rain {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    background: 
                        linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),
                        repeating-linear-gradient(
                            0deg,
                            rgba(0, 255, 0, 0.05) 0px, 
                            rgba(0, 255, 0, 0.05) 1px, 
                            transparent 1px, 
                            transparent 2px
                        );
                    opacity: 0.3;
                    z-index: 1;
                }

                .circuit-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: 
                        linear-gradient(rgba(0,255,65,0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,255,65,0.05) 1px, transparent 1px);
                    background-size: 20px 20px;
                    opacity: 0.2;
                    z-index: 2;
                }

                .loader-container {
                    position: relative;
                    z-index: 10;
                    width: 500px;
                    transform-style: preserve-3d;
                }

                .terminal-frame {
                    background-color: #0d1117;
                    border: 2px solid #30363d;
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 
                        0 0 30px rgba(0,255,65,0.3),
                        0 0 10px rgba(0,255,65,0.2);
                }

                .terminal-header {
                    display: flex;
                    align-items: center;
                    padding: 10px 15px;
                    background-color: #161b22;
                    border-bottom: 1px solid #30363d;
                }

                .terminal-dots {
                    display: flex;
                    align-items: center;
                    margin-right: 15px;
                }

                .dot {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    margin-right: 8px;
                }

                .dot.red { background-color: #ff5f56; }
                .dot.yellow { background-color: #ffbd2e; }
                .dot.green { background-color: #27c93f; }

                .terminal-title {
                    color: #00ff41;
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .terminal-content {
                    padding: 20px;
                }

                .hack-display {
                    margin-bottom: 20px;
                }

                .hack-text {
                    font-size: 16px;
                    color: #00ff41;
                    text-shadow: 0 0 10px rgba(0,255,65,0.5);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .system-code {
                    color: rgba(0,255,65,0.7);
                    font-size: 12px;
                    margin-top: 5px;
                }

                .progress-container {
                    height: 10px;
                    background-color: rgba(0,255,65,0.1);
                    border-radius: 5px;
                    overflow: hidden;
                    margin-bottom: 15px;
                }

                .progress-bar {
                    height: 100%;
                    transition: width 0.2s ease;
                    box-shadow: 0 0 15px rgba(0,255,65,0.7);
                }

                .system-stats {
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                    color: rgba(0,255,65,0.7);
                }

                .status-indicator {
                    font-weight: bold;
                }

                .holographic-overlay {
                    position: absolute;
                    top: -20px;
                    left: -20px;
                    right: -20px;
                    bottom: -20px;
                    background: 
                        linear-gradient(
                            45deg, 
                            rgba(0,255,65,0.1), 
                            rgba(0,255,65,0.05)
                        );
                    border-radius: 30px;
                    pointer-events: none;
                    z-index: -1;
                    animation: holographic-pulse 3s infinite;
                }

                @keyframes holographic-pulse {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.5; }
                }
            `}</style>
        </div>
    );
}