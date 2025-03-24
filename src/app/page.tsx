"use client";
import React from "react";
import fragmentShader from "../shaders/grain/fragment.glsl";
import { Canvas } from "@react-three/fiber";
import { Experience } from "@/components/shared/experience";

export default function Home() {
  return (
    <div>
      <div className="" style={{ height: "300vh" }}>
        {/* <div className="" style={{ height: "50vh", background: "red" }}></div>
        <div className="" style={{ height: "50vh", background: "blue" }}></div>
        <div className="" style={{ height: "50vh", background: "red" }}></div>
        <div className="" style={{ height: "50vh", background: "blue" }}></div> */}
      </div>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Experience />
      </Canvas>
    </div>
  );
}
