import { recipe } from "@vanilla-extract/recipes";

export const IconButtonStyle = recipe({
  variants: {
    as: {
      title: {
        fontSize: "40px",
        fontWeight: "900",
      },
      subtitle: { fontSize: "32px", fontWeight: "700" },
      body: { fontSize: "24px", fontWeight: "400" },
      description: { fontSize: "20px", fontWeight: "400" },
      caption: { fontSize: "16px", fontWeight: "400" },
    },
  },
});
