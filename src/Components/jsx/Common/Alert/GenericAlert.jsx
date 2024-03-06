import React from "react";
import { Alert } from "react-bootstrap";

const GenericAlert = ({
  variant,
  onClose,
  children,
  dismissible,
  ...style
}) => {
  return (
    <div>
      <Alert
        variant={variant}
        onClose={onClose}
        dismissible={dismissible}
        style={{ ...style }}
      >
        {children}
      </Alert>
    </div>
  );
};

export default GenericAlert;
