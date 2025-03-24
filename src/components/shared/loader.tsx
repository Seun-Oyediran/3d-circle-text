"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useProgress } from "@react-three/drei";
// import { emojiPaths } from "@/utils/static";
// import { SvgMorph } from "./svg-morph";

export default function Loader() {
  const { loaded, total, active } = useProgress();
  const progress = (loaded / total) * 100 || 0;

  // console.log(progress);

  const [shown, setShown] = useState(true);

  useEffect(() => {
    let t: any;
    if (active !== shown) t = setTimeout(() => setShown(active), 1000);
    return () => clearTimeout(t);
  }, [shown, active]);

  if (!shown) return null;

  return (
    <div className="app_loader">
      <div className="app_loader_line">
        <motion.div
          className="app_loader_line_ctt"
          animate={{ width: `${progress}%` }}
        ></motion.div>
      </div>
      {/* <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
          fill="black"
        />

        <SvgMorph
          paths={[
            emojiPaths.leftEye.normal,
            emojiPaths.leftEye.unhappy,
            emojiPaths.leftEye.happy,
            emojiPaths.leftEye.normal,
          ]}
        />

        <SvgMorph
          paths={[
            emojiPaths.rightEye.normal,
            emojiPaths.rightEye.unhappy,
            emojiPaths.rightEye.happy,
            emojiPaths.rightEye.normal,
          ]}
        />

        <SvgMorph
          paths={[
            emojiPaths.mouth.normal,
            emojiPaths.mouth.unhappy,
            emojiPaths.mouth.happy,
            emojiPaths.mouth.normal,
          ]}
        />
      </svg> */}
    </div>
  );
}
