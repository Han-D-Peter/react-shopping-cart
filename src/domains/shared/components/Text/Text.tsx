import { IconButtonStyle } from "./Text.css";

interface Text {
  as: "title" | "subtitle" | "body" | "description" | "caption";
  children: string | number;
  color?: string;
  weight?: 900 | 700 | 400;
}

export default function Text({
  color = "black",
  children,
  as,
  weight = 400,
}: Text) {
  return (
    <div style={{ color }} className={IconButtonStyle({ as, weight })}>
      {children}
    </div>
  );
}
