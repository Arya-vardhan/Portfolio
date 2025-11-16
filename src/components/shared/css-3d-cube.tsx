"use client";

import React from 'react';
import { Cpu, ShieldCheck, Network, Code, Pi, Bot } from 'lucide-react';
import './css-3d-cube.css';

const CSS3DCube = () => {
  return (
    <div className="scene">
      <div className="cube">
        <div className="cube__face cube__face--front">
            <Cpu className="w-16 h-16 text-primary" />
        </div>
        <div className="cube__face cube__face--back">
            <Bot className="w-16 h-16 text-primary" />
        </div>
        <div className="cube__face cube__face--right">
            <ShieldCheck className="w-16 h-16 text-primary" />
        </div>
        <div className="cube__face cube__face--left">
            <Network className="w-16 h-16 text-primary" />
        </div>
        <div className="cube__face cube__face--top">
            <Code className="w-16 h-16 text-primary" />
        </div>
        <div className="cube__face cube__face--bottom">
            <Pi className="w-16 h-16 text-primary" />
        </div>
      </div>
    </div>
  );
};

export default CSS3DCube;
