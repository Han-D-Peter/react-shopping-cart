import { buttonStyle } from "./Button.css";

export default function Button() {
  return (
    <button className={`${buttonStyle({ color: "orange" })}`}>button</button>
  );
}
