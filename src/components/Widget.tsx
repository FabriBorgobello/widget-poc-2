import { LazyMotion, domAnimation } from "motion/react";
import * as m from "framer-motion/m";

export const Widget = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div animate={{ opacity: 1 }}>
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            maxWidth: "300px",
          }}
        >
          <h3>My Widget</h3>
          <p>This is a React widget embedded in another site!</p>
        </div>
      </m.div>
    </LazyMotion>
  );
};
