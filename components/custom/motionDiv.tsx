"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ANIMATION_DURATION,
  ANIMATION_DELAY_1,
  ANIMATION_DELAY_2,
  ANIMATION_DELAY_3,
} from "@/lib/globals";

const delayValues = {
  1: { value: ANIMATION_DELAY_1 },
  2: { value: ANIMATION_DELAY_2 },
  3: { value: ANIMATION_DELAY_3 },
};

type Props = {
  children: ReactNode;
  delay?: keyof typeof delayValues;
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
        delay: props.delay !== undefined ? delayValues[props.delay].value : 0,
      }}
      className={props.className}
    >
      {props.children}
    </motion.div>
  );
};

export default MotionDiv;
