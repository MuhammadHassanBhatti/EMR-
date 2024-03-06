import React from "react";
import { Button as ButtonComp } from "react-bootstrap";

const GenericButton = ({
  variant,
  size,
  padding = "10px",
  text,
  bgColor = "#842d72",
  border = "1px solid #fff",
  style,
}) => {
  return (
    <ButtonComp
      variant={variant}
      size={size}
      style={{
        padding: padding,
        backgroundColor: bgColor,
        border: border,
        ...style,
      }}
    >
      {text}
    </ButtonComp>
  );
};

export default GenericButton;
