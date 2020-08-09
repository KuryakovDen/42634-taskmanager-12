import {cardColors} from '../utils/common.js';
import {checkTaskExpire, checkTaskRepeat, prepareTaskDate} from '../utils/util.js';

const createTaskEditDateTemplate = (dueDate) => {
  return `
    <button class="card__date-deadline-toggle" type="button">
      date: <span class="card__date-status">${dueDate !== null ? `yes` : `no`}</span>
    </button>

    ${dueDate !== null ? `
    <fieldset class="card__date-deadline">
      <label class="card__input-deadline-wrap">
        <input
          class="card__date"
          type="text"
          placeholder=""
          name="date"
          value="${prepareTaskDate(dueDate)}"
        />
      </label>
    </fieldset>` : ``}
  `;
};

const createTaskEditRepaetTemplate = (repeatingDays) => {
  return `
  <button class="card__repeat-toggle" type="button">
    repeat:<span class="card__repeat-status">${checkTaskRepeat(repeatingDays) ? `yes` : `no`}</span>
  </button>

  ${checkTaskRepeat(repeatingDays) ? `
  <fieldset class="card__repeat-days">
    <div class="card__repeat-days-inner">
      ${Object.entries(repeatingDays).map(([day, repeat]) => `<input
        class="visually-hidden card__repeat-day-input"
        type="checkbox"
        id="repeat-${day}"
        name="repeat"
        value="${day}"
        ${repeat ? `checked` : ``}
      />
      <label class="card__repeat-day" for="repeat-${day}">${day}</label>`).join(``)}
    </div>
  </fieldset>` : ``}`;
};

const createTaskEditColorTemplate = (currentColor, colors) => {
  return colors.map((color) => `
  <input
    type="radio"
    id="color-${color}"
    class="card__color-input card__color-input--${color} visually-hidden"
    name="color"
    value="${color}"
    ${currentColor === color ? `checked` : ``}
  />
  <label
    for="color-${color}"
    class="card__color card__color--${color}"
    >${color}</label
  >`).join(``);
};

const renderEditTaskComponent = (taskEdit = {}) => {

  const {description, color, dueDate, repeatingDays} = taskEdit;

  const deadLineClassName = checkTaskExpire(dueDate) ? `card--deadline` : ``;
  const repeatingClassName = checkTaskRepeat(repeatingDays) ? `card--repeat` : ``;

  const dateTemplate = createTaskEditDateTemplate(dueDate);
  const repeatTemplate = createTaskEditRepaetTemplate(repeatingDays);
  const colorTemplate = createTaskEditColorTemplate(color, cardColors);

  return `
    <article class="card card--edit card--${color} ${deadLineClassName} ${repeatingClassName}">
      <form class="card__form" method="get">
        <div class="card__inner">
          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>

          <div class="card__textarea-wrap">
            <label>
              <textarea
                class="card__text"
                placeholder="Start typing your text here..."
                name="text">${description}
                </textarea>
            </label>
          </div>

          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                ${dateTemplate}
                ${repeatTemplate}
              </div>
            </div>

            <div class="card__colors-inner">
              <h3 class="card__colors-title">Color</h3>
              <div class="card__colors-wrap">
                ${colorTemplate}
              </div>
            </div>
          </div>

          <div class="card__status-btns">
            <button class="card__save" type="submit">save</button>
            <button class="card__delete" type="button">delete</button>
          </div>
        </div>
      </form>
    </article>
  `;
};

export {renderEditTaskComponent};
