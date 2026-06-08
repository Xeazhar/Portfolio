import FaultyTerminal from '../components/ui/FaultyTerminal';
import GradualBlur from '../components/ui/GradualBlur';

export function FaultyTerminalBG() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
  <FaultyTerminal
    scale={1.3}
    gridMul={[2, 1]}
    digitSize={1.8}
    timeScale={0.5}
    pause={false}
    scanlineIntensity={0.5}
    glitchAmount={1}
    flickerAmount={1}
    noiseAmp={1}
    chromaticAberration={0}
    dither={0}
    curvature={0.32}
    tint="#cad4ed"
    mouseReact
    mouseStrength={0.9}
    pageLoadAnimation
    brightness={0.1}
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
