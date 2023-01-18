import { createElement } from "react";
import { ITextProps, VariantNodeMap } from "./types";
import styles from "./Text.module.scss";
import { emphasizeSelector } from "./_helpers/emphasizeSelector";

export const Text = ({ emphasize = false, variant = "callout", ...rest }: ITextProps) => {
  const shouldApplyEmphasize = emphasize ? styles[emphasizeSelector(variant)] : "";

  return createElement(
    VariantNodeMap[variant],
    {
      ...rest,
      className: `${styles.textBase} ${styles[variant]} ${shouldApplyEmphasize} ${rest.className}`,
    },
    rest.children
  );
};
