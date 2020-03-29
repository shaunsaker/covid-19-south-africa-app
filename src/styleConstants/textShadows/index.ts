const constants = {
  y: 1,
  x: 1,
  radius: 2,
  color: {
    dark: 'rgba(0, 0, 0, 0.25)',
    light: 'rgba(255, 255, 255, 0.25)',
  },
};

type Color = 'dark' | 'light';

export const getMobileTextShadow = (color: Color): object => {
  return {
    textShadowColor: constants.color[color],
    textShadowOffset: {width: constants.x, height: constants.y},
    textShadowRadius: constants.radius,
  };
};

export const getTextShadow = (color: Color): string => {
  return `${constants.y}px ${constants.x}px ${constants.radius}px ${constants.color[color]}`;
};
