import BorderGlow from "../components/ui/BorderGlow";

type GlowCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlowCardEffect({ children, className = "" }: GlowCardProps) {
  return (
    <BorderGlow
      edgeSensitivity={18}
      glowColor="40 80 80"
      backgroundColor="transparent"
      borderRadius={14}
      glowRadius={25}
      glowIntensity={1.7}
      coneSpread={12}
      animated
      colors={["#ffffff", "#ffffff", "#0304fa"]}
    >
      <div className={`rounded-xl ${className}`}>
        {children}
      </div>
    </BorderGlow>
  );
}