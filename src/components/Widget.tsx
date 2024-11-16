import * as m from "motion/react-m";
export const Widget = () => {
  return (
    <m.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
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
  );
};
