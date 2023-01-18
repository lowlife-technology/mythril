import { Variant } from "../types";

export const emphasizeSelector = (variant: Variant) => {
  if (
    variant === "caption2" ||
    variant === "footnote" ||
    variant === "callout" ||
    variant === "body" ||
    variant === "subheadline" ||
    variant === "title3"
  ) {
    return "semiBold";
  }

  if (variant === "caption1") {
    return "medium";
  }

  if (variant === "headline") {
    return "heavy";
  }

  return "bold";
};
