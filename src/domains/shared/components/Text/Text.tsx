import { IconButtonStyle } from "./Text.css";

interface Text {
  as: "title" | "subtitle" | "body" | "description" | "caption";
  children: string;
  color: string;
}

export default function Text({ color, children, as }: Text) {
  return (
    <div style={{ color }} className={IconButtonStyle({ as })}>
      {children}
    </div>
  );
}
