import { Shader, Dither, Plasma, WaveDistortion } from "shaders/react";
import TrubbelstudioLogo from "./TrubbelstudioLogo.jsx";

export default function ShaderPixels() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Shader
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      >
        <Dither
          colorA="#031b2b"
          colorB="#66fff8"
          pattern="bayer8"
          pixelSize={7}
          threshold={0.41}
        >
          <Plasma
            colorA="#fff"
            contrast={0.9}
            density={0.4}
            intensity={1.3}
            speed={1}
            transform={{
              offsetX: -0.01,
              offsetY: -0.01,
              scale: 0.69,
            }}
            warp={0.14}
          />
          <WaveDistortion
            angle={117}
            edges="mirror"
            frequency={1.6}
            strength={1}
            visible={true}
            waveType="square"
          />
        </Dither>
      </Shader>

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <TrubbelstudioLogo />
      </div>
    </section>
  );
}
