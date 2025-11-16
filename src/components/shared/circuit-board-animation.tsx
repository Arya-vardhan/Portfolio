"use client";

import React from 'react';
import './circuit-board-animation.css';

const CircuitBoardAnimation = () => {
  return (
    <div className="w-[400px] h-[400px] flex items-center justify-center">
      <svg viewBox="0 0 200 200" className="w-full h-full circuit-board-animation">
        {/* Main paths */}
        <path d="M 20 20 L 80 20 L 80 50 L 50 80" />
        <path d="M 180 20 L 120 20 L 120 50 L 150 80" />
        <path d="M 20 180 L 80 180 L 80 150 L 50 120" />
        <path d="M 180 180 L 120 180 L 120 150 L 150 120" />
        <path d="M 100 20 L 100 80" />
        <path d="M 20 100 L 80 100" />
        <path d="M 180 100 L 120 100" />
        <path d="M 100 180 L 100 120" />

        {/* Cross paths */}
        <path d="M 50 80 L 80 100" />
        <path d="M 150 80 L 120 100" />
        <path d="M 50 120 L 80 100" />
        <path d="M 150 120 L 120 100" />
        <path d="M 80 50 L 100 80" />
        <path d="M 120 50 L 100 80" />
        <path d="M 80 150 L 100 120" />
        <path d="M 120 150 L 100 120" />

        {/* Center connections */}
        <path d="M 80 100 L 100 100" />
        <path d="M 120 100 L 100 100" />
        <path d="M 100 80 L 100 100" />
        <path d="M 100 120 L 100 100" />

        {/* Nodes */}
        <circle cx="20" cy="20" r="3" />
        <circle cx="100" cy="20" r="3" />
        <circle cx="180" cy="20" r="3" />
        <circle cx="20" cy="100" r="3" />
        <circle cx="180" cy="100" r="3" />
        <circle cx="20" cy="180" r="3" />
        <circle cx="100" cy="180" r="3" />
        <circle cx="180" cy="180" r="3" />
        <circle cx="100" cy="100" r="4" className="center-node" />
      </svg>
    </div>
  );
};

export default CircuitBoardAnimation;
