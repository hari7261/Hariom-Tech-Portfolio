import React, { useEffect, useRef, useState } from 'react';

const SpaceBackground = () => {
  const canvasRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Responsive canvas sizing
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initial resize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star configuration
    const stars = [];
    const starCount = Math.min(200, window.innerWidth / 10);
    const maxDepth = 1000;

    // Star class with improved randomization
    class Star {
      constructor() {
        this.reset();
      }

      reset() {
        // More spread-out star distribution
        this.x = (Math.random() - 0.5) * canvas.width * 2;
        this.y = (Math.random() - 0.5) * canvas.height * 2;
        this.z = maxDepth;
        this.speed = Math.random() * 5 + 1;
      }

      update() {
        this.z -= this.speed;

        // More dynamic star reset
        if (this.z <= 0 ||
          Math.abs(this.x) > canvas.width ||
          Math.abs(this.y) > canvas.height) {
          this.reset();
        }
      }

      render() {
        // Enhanced perspective projection
        const sx = (this.x / this.z) * 200 + canvas.width / 2;
        const sy = (this.y / this.z) * 200 + canvas.height / 2;

        // Adaptive star size and brightness
        const size = (1 - this.z / maxDepth) * 3;
        const opacity = 1 - this.z / maxDepth;

        // Color based on mode
        const baseColor = isDarkMode
          ? [255, 255, 255]  // White stars in dark mode
          : [100, 100, 200];  // Bluish stars in light mode

        ctx.fillStyle = `rgba(${baseColor[0]}, ${baseColor[1]}, ${baseColor[2]}, ${opacity})`;

        ctx.beginPath();
        ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize stars
    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }

    // Animation loop
    const animate = () => {
      // Background color based on mode
      ctx.fillStyle = isDarkMode
        ? 'rgba(0, 0, 20, 0.2)'   // Deep space dark mode
        : 'rgba(200, 220, 255, 0.2)';  // Light sky for light mode

      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.update();
        star.render();
      });

      requestAnimationFrame(animate);
    };

    // Start animation
    const animationFrame = requestAnimationFrame(animate);

    // Listen for color scheme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleColorSchemeChange = (e) => {
      setIsDarkMode(e.matches);
    };
    mediaQuery.addListener(handleColorSchemeChange);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      mediaQuery.removeListener(handleColorSchemeChange);
      cancelAnimationFrame(animationFrame);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default SpaceBackground;