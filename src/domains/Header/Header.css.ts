import { recipe } from "@vanilla-extract/recipes";
export const headerStyle = recipe({
  base: {
    backgroundColor: "#29c2bc",
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
