const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.ceil(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomElement = (elements) => {
  const randomIndex = Math.floor(Math.random() * elements.length);
  return elements[randomIndex];
};

const getRandomBoolean = () => {
  return Math.random() >= 0.5;
};

const getCurrentDate = () => {
  const currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999);

  return new Date(currentDate);
};

const checkTaskExpire = (dueDate) => {
  if (dueDate === null) {
    return false;
  }

  const currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999);

  return currentDate > dueDate.getTime();
};

const checkTaskExpiringToday = (dueDate) => {
  if (dueDate === null) {
    return false;
  }

  const currentDate = getCurrentDate();

  return currentDate.getTime() === dueDate.getTime();
};

const checkTaskRepeat = (repeatingDays) => {
  return Object.values(repeatingDays).some(Boolean);
};

const prepareTaskDate = (taskDate) => {
  return taskDate.toLocaleString(`en-US`, {day: `numeric`, month: `long`});
};

export {
  getRandomElement,
  getRandomBoolean,
  getRandomInteger,
  checkTaskExpire,
  checkTaskRepeat,
  prepareTaskDate,
  checkTaskExpiringToday,
  getCurrentDate
};
