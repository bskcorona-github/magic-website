"use client";

import React from "react";
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";
import { HeroSection } from "@/components/ui/hero-odyssey";
import MatrixRain from "@/components/ui/matrix-code";

export default function HomePage() {
  const ROBOT_SCENE_URL =
    "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Matrix Code背景 - 最背面（50%透過） */}
      <div className="absolute inset-0 z-0 opacity-50">
        <MatrixRain
          fontSize={16}
          color="#00ff00"
          characters="01アカサタナハマヤラワンイキシチニヒミリヰケセテネヘメレエコソトノホモロオクスツヌフムルウ"
          fadeOpacity={0.05}
          speed={0.8}
        />
      </div>

      {/* 3Dロボット中間層 */}
      <div className="absolute inset-0 z-10">
        <InteractiveRobotSpline
          scene={ROBOT_SCENE_URL}
          className="w-full h-full"
        />
      </div>

      {/* Hero Odysseyセクション - 前面 */}
      <div className="relative z-20 bg-transparent">
        <HeroSection />
      </div>
    </div>
  );
}
