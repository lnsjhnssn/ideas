import {
  Shader,
  FilmGrain,
  LinearGradient,
  RectangularCoordinates,
} from "shaders/react";

export default function DriftingLights() {
  return (
    <Shader>
      <LinearGradient
        angle={{
          mode: "loop",
          type: "auto-animate",
          speed: 1,
          easing: "linear",
          outputMax: 360,
          outputMin: 0,
        }}
        colorA="#212538"
        colorB="#171b1f"
        colorSpace="oklab"
      />
      <RectangularCoordinates edges="stretch" scale={3} />
      <FilmGrain strength={0.1} />
    </Shader>
  );
}
