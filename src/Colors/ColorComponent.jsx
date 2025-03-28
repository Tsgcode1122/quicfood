// ColorComponent.js

export const Colors = {
  primaryRed: "#EE4C59",
  vibrantOrange: "#FA8447",
  deepMaroon: "#AE3941",
  warmCoral: "#F36A4A",
  darkWine: "#8F3334",
  pureWhite: "#FFFFFF",
  black: "#0c0c0c",
};

export const Shadows = {
  soft: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  medium: "0px 4px 8px rgba(0, 0, 0, 0.15)",
  strong: "0px 6px 12px rgba(0, 0, 0, 0.2)",
};

export const Gradients = {
  fierySunset: `linear-gradient(45deg, ${Colors.primaryRed}, ${Colors.vibrantOrange})`,
  deepPassion: `linear-gradient(90deg, ${Colors.deepMaroon}, ${Colors.darkWine})`,
  warmGlow: `linear-gradient(135deg, ${Colors.warmCoral}, ${Colors.primaryRed})`,
};

export default { Colors, Shadows, Gradients };
