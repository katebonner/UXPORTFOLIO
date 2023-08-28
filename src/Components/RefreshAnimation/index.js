import React, { useEffect, useState } from "react";
import "./elements.css";
import ComplexPlaneAnimation from "../ComplexPlaneAnimation";

const RefreshAnimation = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <>
      <div className="fade-overlay">
        <ComplexPlaneAnimation />
      </div>
    </>
  );
};

export default RefreshAnimation;
