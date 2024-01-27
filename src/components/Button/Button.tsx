import PropTypes from "prop-types";
import { CSSProperties } from "react";
import "./Button.scss";

interface IButton {
  onClick?: () => void;
  label?: string;
  variant?: "primary" | "secondary";
}

const Button = ({ onClick, label, variant = "secondary" }: IButton) => {
  const buttonStyles: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px 24px",
    borderRadius: "8px",
    fontFamily: "Be Vietnam Pro",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
    transition: "all 0.2s ease-in-out",
    backgroundColor: variant === "primary" ? "#ff9500" : "",
    color: variant === "primary" ? "#fff" : "#000",
    border: "none",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyles} onClick={onClick}>
      {label ? label : "Button"}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
