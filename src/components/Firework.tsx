import React, { useEffect } from "react";
import confetti from "canvas-confetti";

//Användning av useEffect?

const Firework = () => {
  useEffect(() => {
    const styling = {
      particleCount: 200,
      spread: 360,
      startVelocity: 40,
      origin: { x: 0.5, y: 0.5 },
    };

    confetti(styling);
  }, []);

  return (
    <>
      <div className="confetti-container"></div>;
    </>
  );
};

export default Firework;
