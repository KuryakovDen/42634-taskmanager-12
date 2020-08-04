import {renderMenuComponent} from './view/menu.js';
import {renderFiltersComponent} from './view/filters.js';
import {renderBoardComponent} from './view/board.js';
import {renderSortingComponent} from './view/sorting.js';
import {renderBoardTasksComponent} from './view/board-tasks.js';
import {renderEditTaskComponent} from './view/edit-task.js';
import {renderTaskComponent} from './view/task.js';
import {renderLoadingComponent} from './view/loading.js';
import {generateTask} from './mock/task.js';


const COUNT_OF_TASKS = 3;

const renderComponent = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteMainControl = siteMainElement.querySelector(`.main__control`);

renderComponent(siteMainControl, renderMenuComponent());
renderComponent(siteMainElement, renderFiltersComponent());
renderComponent(siteMainElement, renderBoardComponent());

const siteBoard = siteMainElement.querySelector(`.board`);

renderComponent(siteBoard, renderSortingComponent());

renderComponent(siteBoard, renderBoardTasksComponent());

const siteBoardTasks = siteMainElement.querySelector(`.board__tasks`);

renderComponent(siteBoardTasks, renderEditTaskComponent());

for (let i = 0; i < COUNT_OF_TASKS; i++) {
  renderComponent(siteBoardTasks, renderTaskComponent());
}

renderComponent(siteBoard, renderLoadingComponent());


console.log(generateTask());
