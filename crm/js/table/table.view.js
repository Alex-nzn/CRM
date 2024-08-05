//Функция добавляет элемент на страницу

const elements = {
  table: document.querySelector("#tbody"),
  select: document.querySelector("#productSelect"),
  topStatusBar: document.querySelector("#topStatusBar"),
  leftStatusLinks: document.querySelectorAll('[data-role="left-status"]'),
  leftPanelNav: document.querySelector(".left-panel__navigation"),
  badgeNew: document.querySelector("#badge-new"),
  badge: document.querySelector(".badge"),
};

function addTable(element) {
  const renderProduct = {
    "course-vue": "Курс VUE",
    "course-html": "Курс HTML",
    "course-js": "Курс JS",
    "course-php": "Курс PHP",
    "course-wordpress": "Курс WordPress",
  };

  tbody.insertAdjacentHTML(
    "afterbegin",
    ` <tr>
      <th scope="row" id="idNum">${element.id}</th>
      <td>${new Date(element.date).toLocaleDateString()}</td>
      <td>${renderProduct[element.product]}</td>
      <td>${element.name}</td>
      <td>${element.email}</td>
      <td>${element.phone}</td>
      <td>
        <div class="badge badge-pill ${renderBadge(
          element.status
        )}">${renderStatus(element.status)}</div>
      </td>
      <td>
        <a href="edit.html?id=${element.id}">Редактировать</a>
      </td>
    </tr>`
  );
}

function updateFilter(filter) {
  elements.select.value = filter.products;

  const currentTopBtn = elements.topStatusBar.querySelector(
    `[data-value=${filter.status}]`
  );
  const currentLeftBtn = elements.leftPanelNav.querySelector(
    `[data-value=${filter.status}]`
  );
  if (currentTopBtn) {
    currentTopBtn.classList.add("active");
  }
  if (currentLeftBtn) {
    currentLeftBtn.classList.add("active");
  }
}

function renderStatus(status) {
  switch (status) {
    case "new":
      return "Новая";
    case "inwork":
      return "В работе";
    case "complete":
      return "Завершена";
  }
}

function renderBadge(status) {
  switch (status) {
    case "new":
      return "badge-danger";
    case "inwork":
      return "badge-warning";
    case "complete":
      return "badge-success";
  }
}

function updateStatusLinks(value) {
  //Top status bar
  elements.topStatusBar
    .querySelectorAll("a")
    .forEach((link) => link.classList.remove("active"));
  elements.topStatusBar
    .querySelector(`a[data-value="${value}"]`)
    .classList.add("active");

  //Left ststus bar
  elements.leftStatusLinks.forEach((link) => link.classList.remove("active"));
  elements.leftPanelNav
    .querySelector(`a[data-value="${value}"]`)
    .classList.add("active");
}

function renderBadgeNew(number) {
  elements.badgeNew.innerText = number;
  if (number == 0) {
    elements.badgeNew.classList.add("none");
  } else {
    elements.badgeNew.classList.remove("none");
  }
}

export {
  addTable,
  elements,
  updateStatusLinks,
  renderBadgeNew,
  renderBadge,
  updateFilter,
};
