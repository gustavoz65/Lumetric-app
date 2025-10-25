import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface BlackHoleTransitionProps {
  isActive: boolean;
  onComplete: () => void;
}

export default function BlackHoleTransition({
  isActive,
  onComplete,
}: BlackHoleTransitionProps) {
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    if (isActive) {
      setShowTransition(true);
      // Chama o callback após a animação completar
      setTimeout(() => {
        onComplete();
      }, 1500); // Duração da animação
    }
  }, [isActive, onComplete]);

  return (
    <AnimatePresence>
      {showTransition && (
        <motion.div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            zIndex: 9999,
            pointerEvents: "none",
          }}
          initial={{
            x: "-50%",
            y: "-50%",
          }}
        >
          {/* Círculo principal do buraco negro */}
          <motion.div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(50,50,50,0.9) 40%, rgba(0,0,0,1) 100%)",
              boxShadow:
                "0 0 50px 20px rgba(255, 255, 255, 0.3), 0 0 100px 40px rgba(200, 200, 200, 0.2), inset 0 0 50px rgba(0,0,0,1)",
              border: "2px solid rgba(150, 150, 150, 0.4)",
              position: "relative",
            }}
            initial={{
              scale: 0,
              rotate: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1.5, 150],
              rotate: [0, 180, 720],
              opacity: [0, 1, 1],
            }}
            transition={{
              duration: 1.5,
              times: [0, 0.3, 1],
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Anel interno brilhante */}
            <motion.div
              style={{
                position: "absolute",
                inset: "10%",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.5)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Partículas sendo sugadas */}
          {[...Array(30)].map((_, i) => {
            const brightness = 150 + Math.random() * 105; // 150-255 para tons de cinza claro
            return (
              <motion.div
                key={i}
                style={{
                  position: "absolute",
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: `rgba(${brightness}, ${brightness}, ${brightness}, 0.9)`,
                  boxShadow: `0 0 10px rgba(${brightness}, ${brightness}, ${brightness}, 0.8)`,
                }}
                initial={{
                  x: (Math.random() - 0.5) * 2000,
                  y: (Math.random() - 0.5) * 2000,
                  scale: 1,
                  opacity: 1,
                }}
                animate={{
                  x: 0,
                  y: 0,
                  scale: 0,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                  delay: Math.random() * 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            );
          })}

          {/* Ondas de distorção */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`wave-${i}`}
              style={{
                position: "absolute",
                inset: -50 * (i + 1),
                borderRadius: "50%",
                border: "1px solid rgba(200, 200, 200, 0.3)",
                pointerEvents: "none",
              }}
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: [0, 1.2, 2],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Overlay escuro que cobre tudo */}
      {showTransition && (
        <motion.div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9998,
            pointerEvents: "none",
          }}
          initial={{
            background: "rgba(0, 0, 0, 0)",
            backdropFilter: "blur(0px)",
          }}
          animate={{
            background: "rgba(0, 0, 0, 1)",
            backdropFilter: "blur(20px)",
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Efeito de vórtice girando */}
      {showTransition && (
        <motion.div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            width: "200vmax",
            height: "200vmax",
            zIndex: 9997,
            pointerEvents: "none",
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(255, 255, 255, 0.08) 60deg, transparent 120deg)",
            borderRadius: "50%",
          }}
          initial={{
            x: "-50%",
            y: "-50%",
            rotate: 0,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            rotate: 360,
            scale: 1,
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 1.5,
            ease: "linear",
          }}
        />
      )}
    </AnimatePresence>
  );
}
