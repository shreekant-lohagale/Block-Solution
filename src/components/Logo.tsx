
import type { SVGProps } from 'react';
import * as React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      aria-hidden="true"
      {...props}
    >
      {/* Outer rounded square */}
      <rect x="0" y="0" width="100" height="100" rx="20" fill="#192A7C" />
      {/* Inner white circle */}
      <circle cx="50" cy="50" r="32" fill="#FFFFFF" />
      {/* "L" shapes */}
      <path
        d="M40 35 V 65 H 50"
        stroke="#192A7C" // Fixed dark blue
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M50 45 V 65 H 60"
        stroke="#192A7C" // Fixed dark blue
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
    
  );
}

