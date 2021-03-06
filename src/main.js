import {renderMenuComponent} from './view/menu.js';
import {renderFiltersComponent} from './view/filters.js';
import {renderBoardComponent} from './view/board.js';
import {renderSortingComponent} from './view/sorting.js';
import {renderBoardTasksComponent} from './view/board-tasks.js';
import {renderEditTaskComponent} from './view/edit-task.js';
import {renderTaskComponent} from './view/task.js';
import {renderLoadingComponent} from './view/loading.js';
import {generateTask} from './mock/task.js';
import {generateFilter} from './mock/filters.js';


const COUNT_OF_TASKS = 22;
const SHOW_TASKS_STEP = 8;

const renderComponent = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteMainControl = siteMainElement.querySelector(`.main__control`);

const tasks = new Array(COUNT_OF_TASKS).fill().map(generateTask);
const filters = generateFilter(tasks);

renderComponent(siteMainControl, renderMenuComponent());
renderComponent(siteMainElement, renderFiltersComponent(filters));
renderComponent(siteMainElement, renderBoardComponent());

const siteBoard = siteMainElement.querySelector(`.board`);

renderComponent(siteBoard, renderSortingComponent());

renderComponent(siteBoard, renderBoardTasksComponent());

const siteBoardTasks = siteMainElement.querySelector(`.board__tasks`);

renderComponent(siteBoardTasks, renderEditTaskComponent(tasks[0]));

for (let i = 1; i < Math.min(tasks.length, SHOW_TASKS_STEP); i++) {
  renderComponent(siteBoardTasks, renderTaskComponent(tasks[i]));
}

if (tasks.length > SHOW_TASKS_STEP) {
  let renderedTaskCount = SHOW_TASKS_STEP;
  renderComponent(siteBoard, renderLoadingComponent());

  const loadMoreButton = siteBoard.querySelector(`.load-more`);

  const onClickLoadButton = (e) => {
    e.preventDefault();
    tasks
      .slice(renderedTaskCount, renderedTaskCount + SHOW_TASKS_STEP)
      .forEach((task) => {
        renderComponent(siteBoardTasks, renderTaskComponent(task));
      });

    renderedTaskCount += SHOW_TASKS_STEP;

    if (renderedTaskCount >= tasks.length) {
      loadMoreButton.remove();
    }
  };

  loadMoreButton.addEventListener(`click`, onClickLoadButton);
}
