import styleVariables from './variables';

const { colors, shadowSize } = styleVariables;
const base = {
  colors: {
    primary: colors.primary,
    danger: colors.danger,
    warning: colors.warning,
    success: colors.success,
    white: colors.white,
  },
};
export const lightTheme = {
  ...base,
  bg: colors.white,
  bgHighlight: colors.lightGray,
  text: colors.black,
  shadow: `${shadowSize} rgba(93, 101, 107, 0.3)`,
  nav: {
    bg: colors.white,
    bgHover: colors.primary,
    color: colors.darkGray,
    colorHover: colors.white,
  },
};
export const darkTheme = {
  ...base,
  bg: colors.darkGray,
  bgHighlight: colors.midGray,
  text: colors.white,
  shadow: `${shadowSize} rgba(36, 36, 36, 0.8)`,
  nav: {
    bg: colors.secondary,
    bgHover: colors.primary,
    color: colors.white,
    colorHover: colors.white,
  },
};
