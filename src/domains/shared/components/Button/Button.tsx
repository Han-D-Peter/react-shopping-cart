import { ButtonHTMLAttributes } from "react";
import { buttonStyle } from "./Button.css";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: "primary" | "secondary" | "outline";
  size?: "xlg" | "lg" | "md" | "sm";
  onlyText?: boolean;
}

export default function Button(props: Button) {
  const {
    appearance = "primary",
    children,
    onlyText = false,
    size = "md",
  } = props;
  return (
    <button className={`${buttonStyle({ appearance, onlyText, size })}`}>
      {children}
    </button>
  );
}
