import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconButton = ({
  onClick,
  icon,
  BgColor = "#FFFFFF",
  color = "#842d72",
  borderColor = "#D8D8D8",
  boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1);",
  style,
}) => {
  return (
    <Button
      variant="primary"
      onClick={onClick}
      style={{ background: BgColor, color: color, borderColor: borderColor, boxShadow:boxShadow }}
    >
      <FontAwesomeIcon icon={icon} />
    </Button>
  );
};

export default IconButton;
