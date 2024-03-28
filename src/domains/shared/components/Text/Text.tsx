import { IconButtonStyle } from "./Text.css";

interface Text {
  as: "title" | "subtitle" | "body" | "description" | "caption";
  children: string | number;
  color?: string;
}

export default function Text({ color = "black", children, as }: Text) {
  return (
    <div style={{ color }} className={IconButtonStyle({ as })}>
      {children}
    </div>
  );
}
