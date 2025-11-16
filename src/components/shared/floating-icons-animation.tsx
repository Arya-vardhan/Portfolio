"use client";

import React from 'react';
import { Cpu, ShieldCheck, Network, Code, Pi, Bot } from 'lucide-react';
import './floating-icons-animation.css';

const icons = [
  { Icon: Cpu, style: { '--i': 1 } },
  { Icon: ShieldCheck, style: { '--i': 2 } },
  { Icon: Network, style: { '--i': 3 } },
  { Icon: Code, style: { '--i': 4 } },
  { Icon: Pi, style: { '--i': 5 } },
  { Icon: Bot, style: { '--i': 6 } },
  { Icon: Cpu, style: { '--i': 7 } },
  { Icon: ShieldCheck, style: { '--i': 8 } },
  { Icon: Network, style: { '--i': 9 } },
];

const FloatingIconsAnimation = () => {
  return (
    <div className="icon-scene">
      <div className="icon-container">
        {icons.map(({ Icon, style }, index) => (
          <div key={index} className="icon-wrapper" style={style as React.CSSProperties}>
            <Icon className="w-12 h-12 text-primary/70" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloatingIconsAnimation;
