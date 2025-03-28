// ColorComponent.js
export const Colors = {
  brightPurple: "#9D0AB3",
  lightGray: "#C1C1C1",
  darkGold: "#B27323",
  softLilac: "#F5F4FC",
  pureWhite: "#FFFFFF",
  black: "#0c0c0c",
};

export const Shadows = {
  soft: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  medium: "0px 4px 8px rgba(0, 0, 0, 0.15)",
  strong: "0px 6px 12px rgba(0, 0, 0, 0.2)",
};

export const Gradients = {
  purpleGlow: `linear-gradient(45deg, ${Colors.brightPurple}, ${Colors.softLilac})`,
  goldenShine: `linear-gradient(90deg, ${Colors.darkGold}, ${Colors.lightGray})`,
};

export default { Colors, Shadows, Gradients };
