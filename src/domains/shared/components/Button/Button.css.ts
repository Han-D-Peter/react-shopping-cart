import { recipe } from "@vanilla-extract/recipes";
export const buttonStyle = recipe({
  base: {
    backgroundColor: "red",
    outline: "solid",
  },

  variants: {
    color: {
      orange: { color: "orange", outlineColor: "orange" },
      blue: { color: "blue", outlineColor: "blue" },
    },
  },

  defaultVariants: {
    color: "blue",
  },
});
