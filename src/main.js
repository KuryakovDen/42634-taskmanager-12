import {renderMenuComponent} from './view/menu.js';
import {renderFiltersComponent} from './view/filters.js';
import {renderBoardComponent} from './view/board.js';
import {renderSortingComponent} from './view/sorting.js';
import {renderBoardTasksComponent} from './view/board-tasks.js';
import {renderEditTaskComponent} from './view/edit-task.js';

const COUNT_OF_TASKS = 3;

const renderComponent = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteMainControl = siteMainElement.querySelector(`.main__control`);

const renderTaskComponent = () => {
  return `
    <article class="card card--black">
      <div class="card__form">
        <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--edit">
              edit
            </button>
            <button type="button" class="card__btn card__btn--archive">
              archive
            </button>
            <button
              type="button"
              class="card__btn card__btn--favorites card__btn--disabled"
            >
              favorites
            </button>
          </div>

          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>

          <div class="card__textarea-wrap">
            <p class="card__text">Example task with default color.</p>
          </div>

          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <div class="card__date-deadline">
                  <p class="card__input-deadline-wrap">
                    <span class="card__date">23 September</span>
                    <span class="card__time">16:15</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  `;
};

const renderLoadingComponent = () => {
  return `
    <button class="load-more" type="button">load more</button>
  `;
};

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
