import { motion } from "motion/react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  baseColor?: string;
  shineColor?: string;
  spread?: number;
}

export function ShinyText({
  text,
  disabled = false,
  speed = 3,
  className = "",
  baseColor = "#64CEFB",
  shineColor = "#ffffff",
  spread = 100,
}: ShinyTextProps) {
  const gradient = `linear-gradient(${spread}deg, ${baseColor} 0%, ${baseColor} 35%, ${shineColor} 50%, ${baseColor} 65%, ${baseColor} 100%)`;

  return (
    <motion.span
      className={`inline-block bg-clip-text ${className}`}
      style={{
        backgroundImage: gradient,
        backgroundSize: "250% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        WebkitTextFillColor: "transparent",
      }}
      initial={{ backgroundPosition: "150% 50%" }}
      animate={disabled ? undefined : { backgroundPosition: ["150% 50%", "-50% 50%"] }}
      transition={{ duration: speed, ease: "linear", repeat: Infinity }}
    >
      {text}
    </motion.span>
  );
}
