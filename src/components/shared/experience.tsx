import { shaderMaterial, Text } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import Lenis from "lenis";
import { useLenis } from "lenis/react";
import { useControls } from "leva";
import { easing } from "maath";
import React, { useEffect, useRef, useState } from "react";
import { Color, Group } from "three";
import vertexShader from "../../shaders/vertex.glsl";
import fragmentShader from "../../shaders/fragment.glsl";

const textData = [
  { id: 1, text: "Rndr Realm" },
  { id: 2, text: "Introspection" },
  { id: 3, text: "Nebula" },
  { id: 4, text: "Chronicles" },
  { id: 5, text: "Reverberation" },
  { id: 6, text: "Rndr Realm" },
  { id: 7, text: "Hallucination" },
  { id: 8, text: "Enigmatic" },
  { id: 9, text: "Resonance" },
  { id: 10, text: "Rndr Realm" },
  { id: 11, text: "Metamorphosis" },
  { id: 12, text: "Perceive" },
  { id: 13, text: "Dissonant" },
  { id: 14, text: "Rndr Realm" },
  { id: 15, text: "Oblivion" },
  { id: 16, text: "Transcendence" },
  { id: 17, text: "Converge" },
  // { id: 18, text: "Reflect" },
  // { id: 19, text: "Harmonic" },
  // { id: 20, text: "Obscurity" },
];

const NUMBER_OF_TEXT = textData.length;

interface ISingleText {
  index: number;
  circleRadius: number;
  fontSize: number;
  color: string;
  scrollVelocity: number;
  amplitude: number;
  text?: string;
}

export const CustomTextMaterial = shaderMaterial(
  {
    uScrollSpeed: 0,
    uApmlitude: 0,
    uColor: new Color("#000"),
  },
  vertexShader,
  fragmentShader
);

extend({ CustomTextMaterial });

function SingleText(props: ISingleText) {
  const {
    index,
    circleRadius,
    fontSize,
    color,
    scrollVelocity,
    amplitude,
    text = "Jason Fraud",
  } = props;

  const materialRef = useRef<any>();

  const posAngle = (index * (Math.PI * 2) * 1) / NUMBER_OF_TEXT;
  const posX = Math.cos(posAngle) * circleRadius;
  const posY = Math.sin(posAngle) * circleRadius;
  const posZ = (index / NUMBER_OF_TEXT) * 2 * Math.PI;

  useFrame((_, delta) => {
    if (materialRef.current) {
      easing.damp(
        materialRef.current,
        "uScrollSpeed",
        scrollVelocity,
        0.2,
        delta
      );
    }
  });

  return (
    <Text
      anchorX={"left"}
      fontSize={fontSize}
      position={[posX, posY, 0]}
      rotation-z={posZ}
      font="/fonts/IBMPlexMono-Regular.ttf"
    >
      {text}
      {/* @ts-ignore */}
      <customTextMaterial
        ref={materialRef}
        uColor={new Color(color)}
        uApmlitude={amplitude}
      />
    </Text>
  );
}

export function Experience() {
  const { circleRadius, fontSize, circleSpeed, textColor, amplitude } =
    useControls({
      circleSpeed: {
        max: 2,
        min: 0.0,
        value: 1,
        step: 0.01,
      },
      circleRadius: {
        max: 3,
        min: 0.5,
        value: 1,
        step: 0.1,
      },
      fontSize: {
        max: 1,
        min: 0.1,
        value: 0.25,
        step: 0.01,
      },
      textColor: "#000",
      amplitude: {
        max: 0.015,
        min: 0.0002,
        value: 0.007,
        step: 0.00001,
      },
    });

  const rotateZ = useRef(0);
  const groupRef = useRef<Group>(null);
  const [scrollVelocity, setScrollVelocity] = useState(0);

  const lenis = useLenis();

  useFrame((_, delta) => {
    if (groupRef.current) {
      easing.damp(
        groupRef.current.rotation,
        "z",
        rotateZ.current * circleSpeed,
        0.2,
        delta
      );
    }
  });

  useEffect(() => {
    if (!lenis) return;
    function handleScroll(e: Lenis) {
      setScrollVelocity(e.velocity);
      rotateZ.current += e.velocity * 0.001;
    }
    lenis?.on("scroll", handleScroll);

    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, [lenis]);

  return (
    <group ref={groupRef}>
      {textData.map((item) => (
        <SingleText
          key={item.id}
          index={item.id}
          circleRadius={circleRadius}
          fontSize={fontSize}
          color={textColor}
          scrollVelocity={scrollVelocity}
          amplitude={amplitude}
          text={item.text}
        />
      ))}
    </group>
  );
}
