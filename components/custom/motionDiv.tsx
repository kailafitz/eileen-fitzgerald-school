"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { ANIMATION_DURATION } from "@/lib/globals";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

const MotionDiv = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "-6rem" }}
      whileInView={{ opacity: 1, translateY: "0" }}
      exit={{ opacity: 0, translateY: "6rem" }}
      transition={{
        duration: ANIMATION_DURATION,
        delay: props.delay !== 0 ? props.delay : 0,
      }}
      className={props.className}
    >
      {props.children}
    </motion.div>
  );
};

export default MotionDiv;
