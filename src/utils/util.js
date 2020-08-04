const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper =  Math.ceil(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomElement = (elements) => {
  const randomIndex = Math.floor(Math.random() * elements.length);
  return elements[randomIndex];
};

const getRandomBoolean = () => {
  return Math.random() >= 0.5;
};

export {getRandomElement, getRandomBoolean, getRandomInteger};
