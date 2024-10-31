// components/BubbleBackground.tsx

function BubbleBackground() {

  const bubbles = Array.from({ length: 30 });

  return (
    <div className="bubble-background">
      {bubbles.map((_, index) => (
        <div key={index} className="bubble" />
      ))}
      
      <style >{`
        .bubble-background {
          position: fixed; /* Keep it fixed to the background */
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none; /* Prevent interaction with the bubbles */
          z-index: -1; /* Send the background behind other elements */
        }

        .bubble {
          position: absolute;
          bottom: -150px; /* Start below the view */
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3); /* Light color for bubbles */
          animation: bubble 10s infinite; /* Speed up the animation */
          opacity: 0.5; /* Adjust opacity for visibility */
        }

        /* Create different bubble sizes and animations */
        .bubble:nth-child(1) { width: 40px; height: 40px; left: 10%; animation-duration: 7.5s; }
        .bubble:nth-child(2) { width: 60px; height: 60px; left: 30%; animation-duration: 9s; }
        .bubble:nth-child(3) { width: 50px; height: 50px; left: 50%; animation-duration: 6s; }
        .bubble:nth-child(4) { width: 80px; height: 80px; left: 70%; animation-duration: 10s; }
        .bubble:nth-child(5) { width: 70px; height: 70px; left: 90%; animation-duration: 8s; }
        .bubble:nth-child(6) { width: 30px; height: 30px; left: 20%; animation-duration: 7s; }
        .bubble:nth-child(7) { width: 90px; height: 90px; left: 40%; animation-duration: 9.5s; }
        .bubble:nth-child(8) { width: 20px; height: 20px; left: 60%; animation-duration: 6.5s; }
        .bubble:nth-child(9) { width: 55px; height: 55px; left: 80%; animation-duration: 8.5s; }
        .bubble:nth-child(10) { width: 75px; height: 75px; left: 25%; animation-duration: 5.5s; }
        .bubble:nth-child(11) { width: 45px; height: 45px; left: 15%; animation-duration: 7s; }
        .bubble:nth-child(12) { width: 65px; height: 65px; left: 35%; animation-duration: 8s; }
        .bubble:nth-child(13) { width: 50px; height: 50px; left: 55%; animation-duration: 9s; }
        .bubble:nth-child(14) { width: 75px; height: 75px; left: 75%; animation-duration: 6s; }
        .bubble:nth-child(15) { width: 60px; height: 60px; left: 85%; animation-duration: 10s; }
        .bubble:nth-child(16) { width: 30px; height: 30px; left: 10%; animation-duration: 7.5s; }
        .bubble:nth-child(17) { width: 80px; height: 80px; left: 25%; animation-duration: 9.5s; }
        .bubble:nth-child(18) { width: 55px; height: 55px; left: 45%; animation-duration: 8.5s; }
        .bubble:nth-child(19) { width: 65px; height: 65px; left: 65%; animation-duration: 6.5s; }
        .bubble:nth-child(20) { width: 40px; height: 40px; left: 85%; animation-duration: 8s; }
        .bubble:nth-child(21) { width: 50px; height: 50px; left: 5%; animation-duration: 5.5s; }
        .bubble:nth-child(22) { width: 70px; height: 70px; left: 20%; animation-duration: 7.5s; }
        .bubble:nth-child(23) { width: 80px; height: 80px; left: 35%; animation-duration: 6s; }
        .bubble:nth-child(24) { width: 60px; height: 60px; left: 50%; animation-duration: 7s; }
        .bubble:nth-child(25) { width: 40px; height: 40px; left: 75%; animation-duration: 9s; }
        .bubble:nth-child(26) { width: 30px; height: 30px; left: 90%; animation-duration: 10s; }
        .bubble:nth-child(27) { width: 55px; height: 55px; left: 5%; animation-duration: 7.5s; }
        .bubble:nth-child(28) { width: 45px; height: 45px; left: 30%; animation-duration: 9.5s; }
        .bubble:nth-child(29) { width: 65px; height: 65px; left: 50%; animation-duration: 6.5s; }
        .bubble:nth-child(30) { width: 50px; height: 50px; left: 70%; animation-duration: 8s; }

        @keyframes bubble {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-800px); /* Move upwards */
          }
        }
      `}</style>
    </div>
  );
}

export default BubbleBackground;
