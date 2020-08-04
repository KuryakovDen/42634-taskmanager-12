import {getRandomElement, getRandomBoolean} from '../utils/util.js';
import {taskGoals, tags, cardColors} from '../utils/common.js';

const generateTask = () => {
  return {
    description: getRandomElement(taskGoals),
    dueDate: ``,
    repeatingDays: {
      mo: false,
      tu: false,
      we: false,
      th: false,
      fr: false,
      sa: false,
      su: false
    },
    tags: getRandomElement(tags),
    color: getRandomElement(cardColors),
    isFavorite: getRandomBoolean(),
    isArchive: getRandomBoolean()
  };
};

export {generateTask};
