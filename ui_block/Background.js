"use client";

import FaultyTerminal from "../components/ui/FaultyTerminal";
import GradualBlur from "../components/ui/GradualBlur";
import { useTheme } from "../context/ThemeContext";

export function FaultyTerminalBG() {
  const { themes, themeId } = useTheme();
  const theme = themes[themeId];

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <FaultyTerminal
        scale={3}
        gridMul={[2, 1]}
        digitSize={2.2}
        timeScale={0.5}
        pause={false}
        scanlineIntensity={0.5}
        glitchAmount={1}
        flickerAmount={1}
        noiseAmp={0.7}
        chromaticAberration={0}
        dither={0}
        curvature={0.1}
        tint={theme.bgTint}
        mouseReact
        mouseStrength={0.5}
        pageLoadAnimation
        brightness={theme.bgBrightness}
      />
    </div>
  );
}

export function GradualBlurEffect() {
  return (
    <div className="absolute bottom-0 left-0 w-full pointer-events-none">
      <GradualBlur
        target="parent"
        position="bottom"
        height="7rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential
        opacity={1}
      />
    </div>
  );
}
