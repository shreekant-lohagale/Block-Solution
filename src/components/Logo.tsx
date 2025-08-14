// src/components/Logo.tsx
import * as React from "react";
import Image, { type StaticImageData } from "next/image";
import logoImage from "@/img/nova_stackzdsds.jpg";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className, width = 100, height = 100 }: LogoProps) {
  return (
    <div className={className}>
      <Image 
        src={logoImage}
        alt="NOVASTACK SOLUTIONS PRIVATE LIMITED"
        width={width}
        height={height}
        style={{
          objectFit: "contain",
          width: "100%",
          height: "auto",
          maxWidth: "100%",
        }}
      />
    </div>
  );
}