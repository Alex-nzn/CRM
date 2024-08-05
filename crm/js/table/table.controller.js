import * as table from "./table.view.js";
import * as model from "../model.js";

//Функция выводит все элементы на страницу
function init() {
  // model.requests.forEach((element) => {
  //   table.addTable(element);
  // });
  const requests = model.getRequests();
  requests.forEach((element) => {
    table.addTable(element);
  });

  const newRequestsCount = model.countNewRequests();
  table.renderBadgeNew(newRequestsCount);

  const currrentFilter = model.filter;
  table.updateFilter(currrentFilter);

  function addEventListeners() {
    table.elements.select.addEventListener("change", filterProducts);
    table.elements.topStatusBar.addEventListener("click", filterByStatus);
    table.elements.leftStatusLinks.forEach((link) => {
      link.addEventListener("click", filterByStatus);
    });
  }

  function filterProducts() {
    const filter = model.changeFilter("products", this.value);
    console.log(filter);
    const filteredRequests = model.filterRequests(filter);
    console.log(filteredRequests);

    table.elements.table.innerHTML = "";
    filteredRequests.forEach((element) => {
      table.addTable(element);
    });
  }

  function filterByStatus(e) {
    const filter = model.changeFilter("status", e.target.dataset.value);
    const filteredRequests = model.filterRequests(filter);

    table.elements.table.innerHTML = "";
    filteredRequests.forEach((element) => {
      table.addTable(element);
    });
    table.updateStatusLinks(e.target.dataset.value);
  }
  addEventListeners();
}
init();
