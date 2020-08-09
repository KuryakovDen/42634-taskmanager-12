import {checkTaskExpire, checkTaskRepeat, checkTaskExpiringToday} from '../utils/util.js';

const taskToFilterMap = {
  all: (tasks) => tasks.filter((task) => !task.isArchive).length,
  overdue: (tasks) => tasks
    .filter((task) => !task.isArchive)
    .filter((task) => checkTaskExpire(task.dueDate)).length,
  today: (tasks) => tasks
    .filter((task) => !task.isArchive)
    .filter((task) => checkTaskExpiringToday(task.dueDate)).length,
  favorites: (tasks) => tasks
    .filter((task) => !task.isArchive)
    .filter((task) => task.isFavorite).length,
  repeating: (tasks) => tasks
  .filter((task) => !task.isArchive)
  .filter((task) => checkTaskRepeat(task.repeatingDays)).length,
  archive: (tasks) => tasks.filter((task) => task.isArchive).length
};

const generateFilter = (tasks) => {
  return Object.entries(taskToFilterMap).map(([filterName, countTasks]) => {
    return {
      name: filterName,
      count: countTasks(tasks)
    };
  });
};

export {generateFilter};
