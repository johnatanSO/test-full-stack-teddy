import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { CSSProperties } from "react";

export interface IActionCard {
  onClickFunction: (data?: any) => void;
  svgPath: IconDefinition;
  title: string;
  customStyle?: CSSProperties;
  type?: string;
}
