"use client";

import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false });

export default function CyberneticLoader() {
    const [isClient, setIsClient] = useState(false); // Ensures client-side rendering
    const [isLoading, setIsLoading] = useState(true); // Tracks loading state
    const [progress, setProgress] = useState(0); // Progress percentage
    const [hackPhase, setHackPhase] = useState(""); // Current loading phrase
    const audioRef = useRef(null); // Audio reference
    const systemCode = useRef(`QTM-${Math.random().toString(36).substr(2, 9).toUpperCase()}`); // Random system code

    const hackPhrases = [
        "Quantum Encryption Initializing...",
        "Neural Sync Protocol Engaging...",
        "Cybernetic Handshake Established...",
        "Quantum Algorithms Calibrating...",
        "Neural Network Synchronization...",
        "Cryptographic Protocols Verified...",
    ];

    useEffect(() => {
        setIsClient(true); // Confirms hydration for client rendering

        const totalDuration = 5000;
        const startTime = Date.now();

        const progressInterval = setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            const currentProgress = Math.min((elapsedTime / totalDuration) * 100, 100);

            setProgress(currentProgress);

            // Update hack phase dynamically
            const phaseIndex = Math.floor((currentProgress / 100) * hackPhrases.length);
            setHackPhase(hackPhrases[phaseIndex] || hackPhrases[hackPhrases.length - 1]);

            if (currentProgress >= 100) {
                clearInterval(progressInterval);
                setTimeout(() => setIsLoading(false), 500); // Smooth transition on completion
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
            className="fixed inset-0 bg-black cyber-loader flex items-center justify-center"
            onClick={handleStart}
        >
            <audio ref={audioRef} src="/cyber-startup.mp3" preload="auto" loop />

            {/* Matrix Rain Effect */}
            <div className="matrix-rain">
                {Array.from({ length: 100 }).map((_, i) => (
                    <div key={i} className="matrix-column" style={{ left: `${Math.random() * 100}%` }}></div>
                ))}
            </div>

            {/* Circuit Overlay */}
            <div className="circuit-overlay"></div>

            {/* Terminal Container */}
            <MotionDiv
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="loader-container"
            >
                <div className="terminal-frame glitch">
                    <div className="terminal-header">
                        <div className="terminal-dots">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <div className="terminal-title">CRITICAL SYSTEM INITIALIZATION</div>
                    </div>

                    <div className="terminal-content">
                        <div className="hack-display">
                            <div className="hack-text">{hackPhase}</div>
                            <div className="system-code">{`> ${systemCode.current}`}</div>
                        </div>

                        <div className="progress-container">
                            <div
                                className="progress-bar"
                                style={{
                                    width: `${progress}%`,
                                    background: `linear-gradient(90deg, 
                    #ff0044 0%, 
                    #ff0044 ${progress}%, 
                    rgba(255,0,68,0.1) ${progress}%)`,
                                }}
                            ></div>
                        </div>

                        <div className="system-stats">
                            <div>Progress: {Math.round(progress)}%</div>
                            <div className="status-indicator">
                                {progress < 100 ? "PROCESSING" : "SYSTEM ONLINE"}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="holographic-overlay"></div>
            </MotionDiv>

            <style>{`
        .cyber-loader {
          font-family: "Space Mono", monospace;
          background-color: #010409;
          perspective: 1000px;
          cursor: pointer;
          overflow: hidden;
        }

        .matrix-rain {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .matrix-column {
          position: absolute;
          top: -100%;
          width: 2px;
          height: 200%;
          background: linear-gradient(transparent, #00ff41, transparent);
          animation: matrix-fall 5s linear infinite;
        }

        @keyframes matrix-fall {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        .circuit-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(rgba(0, 255, 65, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 65, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
          opacity: 0.2;
          z-index: 2;
        }

        .loader-container {
          position: relative;
          z-index: 10;
          width: 500px;
        }

        .terminal-frame {
          background-color: #0d1117;
          border: 2px solid #ff0044;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 0 30px rgba(255, 0, 68, 0.3), 0 0 10px rgba(255, 0, 68, 0.2);
          position: relative;
        }

        .terminal-frame.glitch::before,
        .terminal-frame.glitch::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: inherit;
          opacity: 0.8;
          z-index: -1;
          animation: glitch 2s infinite;
        }

        .terminal-frame.glitch::after {
          animation-delay: 1s;
        }

        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }

        .terminal-header {
          display: flex;
          align-items: center;
          padding: 10px 15px;
          background-color: #161b22;
          border-bottom: 1px solid #ff0044;
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

        .dot.red {
          background-color: #ff5f56;
        }

        .dot.yellow {
          background-color: #ffbd2e;
        }

        .dot.green {
          background-color: #27c93f;
        }

        .terminal-title {
          color: #ff0044;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-shadow: 0 0 10px rgba(255, 0, 68, 0.5);
        }

        .terminal-content {
          padding: 20px;
        }

        .hack-text {
          font-size: 16px;
          color: #ff0044;
          text-shadow: 0 0 10px rgba(255, 0, 68, 0.5);
          letter-spacing: 1px;
        }

        .system-code {
          color: rgba(255, 0, 68, 0.7);
          font-size: 12px;
          margin-top: 5px;
        }

        .progress-container {
          height: 10px;
          background-color: rgba(255, 0, 68, 0.1);
          border-radius: 5px;
          overflow: hidden;
          margin-bottom: 15px;
        }

        .progress-bar {
          height: 100%;
          transition: width 0.2s ease;
          box-shadow: 0 0 15px rgba(255, 0, 68, 0.7);
        }

        .system-stats {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: rgba(255, 0, 68, 0.7);
        }

        .holographic-overlay {
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          background: linear-gradient(
            45deg,
            rgba(255, 0, 68, 0.1),
            rgba(255, 0, 68, 0.05)
          );
          pointer-events: none;
          z-index: -1;
          animation: holographic-pulse 3s infinite;
        }

        @keyframes holographic-pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
        </div>
    );
}