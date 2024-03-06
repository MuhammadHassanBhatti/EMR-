import React from "react";
import Form from "react-bootstrap/Form";

const InputField = ({
  type,
  bgColor = "#f5f5f7",
  color = "#838383",
  padding = "10px",
  width = "100%",
  height = "100%",
  borderStyle = "none",
  label,
  placeholder = "Enter Here ......",
  textAlign = "left",
  borderColor = "#8b8fa8",
  border = "none",
  boxShadow = "0 0 5px rgba(139, 143, 168,0.1)",
  onChange,
  style,
}) => {
  return (
    <div>
      <Form.Group className="email-label">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          onChange={onChange}
          type={type}
          height={height}
          placeholder={placeholder}
          style={{
            background: bgColor,
            color: color,
            padding: padding,
            borderColor: borderColor,
            border: border,
            boxShadow: boxShadow,
            width: width,
            textAlign: textAlign,
            ...style,
          }}
        />
      </Form.Group>
    </div>
  );
};

export default InputField;
