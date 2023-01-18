import { DetailedHTMLProps, HTMLAttributes } from "react";

export type Variant =
  | "caption2"
  | "caption1"
  | "footnote"
  | "callout"
  | "body"
  | "subheadline"
  | "headline"
  | "title3"
  | "title2"
  | "title1"
  | "largeTitle";

export interface ITextProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  /**
   * The possible variants are:
   * @caption2 p Medium 	10 	13 	Semibold
   * @caption1 p Regular 	10 	13 	Medium
   * @footnote p Regular 	10 	13 	Semibold
   * @callout p  Regular 	12 	15 	Semibold
   * @body p Regular 	13 	16 	Semibold
   * @subheadline p Regular 	11 	14 	Semibold
   * @headline p Bold 	13 	16 	Heavy
   * @title3 h4 Regular 	15 	20 	Semibold
   * @title2 h3 Regular 	17 	22 	Bold
   * @title1 h2 Regular 	22 	26 	Bold
   * @largeTitle h1 Regular 	26 	32 	Bold
   */
  variant?: Variant;
  emphasize?: boolean;
}

export enum VariantNodeMap {
  caption2 = "p",
  caption1 = "p",
  footnote = "p",
  callout = "p",
  body = "p",
  subheadline = "p",
  headline = "p",
  title3 = "h4",
  title2 = "h3",
  title1 = "h2",
  largeTitle = "h1",
}
