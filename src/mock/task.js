import {getRandomElement, getRandomBoolean, getRandomInteger} from '../utils/util.js';
import {taskGoals, tags, cardColors} from '../utils/common.js';

const generateDate = () => {
  const maxDaysGap = 7;
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);
  const currentDate = new Date();
  const isDate = getRandomBoolean();

  if (!isDate) {
    return null;
  }

  currentDate.setHours(23, 59, 59, 999);

  currentDate.setDate(currentDate.getDate() + daysGap);

  return new Date(currentDate);
};

const generateRepeatingDays = () => {
  return {
    mo: false,
    tu: false,
    we: getRandomBoolean(),
    th: false,
    fr: getRandomBoolean(),
    sa: false,
    su: false
  };
};

const generateTask = () => {
  return {
    description: getRandomElement(taskGoals),
    dueDate: generateDate(),
    repeatingDays: generateRepeatingDays(),
    tags: getRandomElement(tags),
    color: getRandomElement(cardColors),
    isFavorite: getRandomBoolean(),
    isArchive: getRandomBoolean()
  };
};

export {generateTask, generateDate};
