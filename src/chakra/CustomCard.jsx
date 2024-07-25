import { chakra } from "@chakra-ui/react";

export const CustomCard = chakra("div", {
  baseStyle: {
    borderRadius: "xl",
    bg: "white",
    p: { base: "4", md: "6" },
    w: "100%",
    maxW: "100%",
    boxShadow: "md",
    overflow: "hidden",
  },
});
