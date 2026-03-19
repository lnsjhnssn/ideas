import { Shader, FloatingParticles } from "shaders/react";

export default function ShaderStars() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Shader
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
        >
          <FloatingParticles
            angleVariance={17}
            count={2}
            particleColor="#999"
            particleSize={1.1}
            particleSoftness={0.2}
            randomness={0.7}
            speed={0}
            speedVariance={0.2}
            twinkle={0.1}
          />
        </Shader>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "clamp(2rem, 8vw, 5rem)",
            fontWeight: "700",
            letterSpacing: "0.08em",
            margin: 0,
          }}
        >
          Shaders
        </h1>
      </div>
    </section>
  );
}
