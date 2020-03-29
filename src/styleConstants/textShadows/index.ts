const constants = {
  y: 4,
  x: 0,
  radius: 2,
  color: 'rgba(0, 0, 0, 0.25)',
};

export const getMobileTextShadow = (): object => {
  return {
    textShadowColor: constants.color,
    textShadowOffset: {width: constants.x, height: constants.y},
    textShadowRadius: constants.radius,
  };
};

export const getTextShadow = (): string => {
  return `${constants.y}px ${constants.x}px ${constants.radius}px ${constants.color}`;
};
