import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Galaxy from "../components/backgorund/galaxy";
import RotatingText from "../components/text/RotatingText";
import TargetCursor from "../components/Animation/TargetCursor";
import BlackHoleTransition from "../components/Animation/BlackHoleTransition";

function Home() {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleGetStarted = () => {
    setIsTransitioning(true);
  };

  const handleTransitionComplete = () => {
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <BlackHoleTransition
        isActive={isTransitioning}
        onComplete={handleTransitionComplete}
      />

      <TargetCursor spinDuration={2} hideDefaultCursor={true} />

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Galaxy />
      </div>

      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          pointerEvents: "auto",
          padding: "1.5rem 3rem",
          backdropFilter: "blur(10px)",
          background: "rgba(0, 0, 0, 0.2)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <div
            className="cursor-target"
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            Lumetric
          </div>

          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <a
              href="#produtos"
              className="cursor-target"
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                textDecoration: "none",
                fontSize: "1rem",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)")
              }
            >
              Produtos
            </a>
            <a
              href="#contato"
              className="cursor-target"
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                textDecoration: "none",
                fontSize: "1rem",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)")
              }
            >
              Contato
            </a>
            <a
              href="#suporte"
              className="cursor-target"
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                textDecoration: "none",
                fontSize: "1rem",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)")
              }
            >
              Suporte
            </a>
            <button
              className="cursor-target"
              style={{
                padding: "0.5rem 1.5rem",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "8px",
                color: "white",
                cursor: "pointer",
                fontSize: "1rem",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
              }}
            >
              Login
            </button>
          </div>
        </nav>
      </header>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          pointerEvents: "none",
          padding: "2rem",
        }}
      >
        <div
          style={{
            pointerEvents: "none",
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          <h1 className="text-5xl md:text-7xl font-bold flex items-center justify-center gap-6 leading-none">
            <span className="inline-block align-middle">Lumetric</span>
            <RotatingText
              texts={[" Rapido", " Simples", " Util"]}
              mainClassName="inline-flex items-center justify-center px-3 bg-neutral-900 px-2 py-1 text-black overflow-hidden py-1 rounded-lg min-w-[11rem] text-center"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </h1>
        </div>

        <p
          style={{
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "1.25rem",
            maxWidth: "600px",
            textAlign: "center",
            marginBottom: "3rem",
            pointerEvents: "none",
          }}
        >
          Sua solução completa para gerenciamento de Saas, Sites ou Ecommerces.
          com os melhores recursos do mercado
        </p>

        <button
          className="cursor-target"
          onClick={handleGetStarted}
          style={{
            pointerEvents: "auto",
            padding: "1rem 2.5rem",
            fontSize: "1.125rem",
            fontWeight: "600",
            color: "white",
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            border: "2px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
