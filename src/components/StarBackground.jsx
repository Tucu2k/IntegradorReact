import React, { useState, useEffect } from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function StarBackground() {
  const [engineLoaded, setEngineLoaded] = useState(false);

  useEffect(() => {
    loadSlim().then(() => {
      setEngineLoaded(true);
    });
  }, []);

  if (!engineLoaded) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: "transparent",
        },

        particles: {
          number: {
            value: 100,
            density: { enable: true, area: 800 },
          },

          color: { value: "#ffffff" },

          shape: { type: "circle" },

          opacity: { value: 0.8 },

          size: { value: { min: 1, max: 2 } },

          move: {
            enable: true,
            speed: 0.15,
          },
        }
      }}
    />
  );
}
