//База данных
let requests = JSON.parse(localStorage.getItem("request")) || [];

//Функция добавления данных в localStorage
function saveToLocalStorage() {
  localStorage.setItem("request", JSON.stringify(requests));
}

//Добавление элемента в Базу данных и сохранение его в localstorage
function addData(formData) {
  let id = 1;
  if (requests.length > 0) {
    const lastElement = requests[requests.length - 1];
    const lastElId = lastElement.id;
    id = lastElId + 1;
  }

  const newObj = {
    id: id,
    ...formData,
    date: new Date(),
    status: "new",
  };
  requests.push(newObj);
  saveToLocalStorage();
}

function getRequestById(id) {
  const request = requests.find((item) => item.id == id);
  request.dateDate = new Date(request.date).toLocaleDateString();
  request.dateTime = new Date(request.date).toLocaleTimeString();
  return request;
}

function updateRequest(formData) {
  const request = getRequestById(formData.get("id"));
  request.name = formData.get("name");
  request.email = formData.get("email");
  request.phone = formData.get("phone");
  request.product = formData.get("product");
  request.status = formData.get("status");
  saveToLocalStorage();
}

const filter = loadFilter();

function loadFilter() {
  let filter = {
    products: "all",
    status: "all",
  };

  if (localStorage.getItem("filter")) {
    filter = JSON.parse(localStorage.getItem("filter"));
  }

  return filter;
}

function changeFilter(prop, value) {
  filter[prop] = value;
  localStorage.setItem("filter", JSON.stringify(filter));
  return filter;
}

function filterRequests(filter) {
  let filteredRequests;
  if (filter.products != "all") {
    filteredRequests = requests.filter(
      (request) => request.product === filter.products
    );
  } else {
    filteredRequests = [...requests];
  }

  if (filter.status != "all") {
    filteredRequests = filteredRequests.filter(
      (request) => request.status === filter.status
    );
  }

  return prepareRequests(filteredRequests);
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

function renderProduct(product) {
  switch (product) {
    case "course-vue":
      return "Курс VUE";
    case "course-html":
      return "Курс HTML";
    case "course-js":
      return "Курс JS";
    case "course-php":
      return "Курс PHP";
    case "course-wordpress":
      return "Курс WordPress";
  }
}

function prepareRequests(requests) {
  return requests.map((item) => {
    return {
      ...item,
      // date: new Date(item.date).toLocaleDateString(),
      productName: renderProduct(item.product),
      statusName: renderStatus(item.status),
    };
  });
}

function countNewRequests() {
  const newRequests = requests.filter((el) => el.status === "new");
  return newRequests.length;
}

function getRequests() {
  const filteredRequests = filterRequests(filter);
  return prepareRequests(filteredRequests);
}

export {
  requests,
  saveToLocalStorage,
  addData,
  getRequestById,
  updateRequest,
  changeFilter,
  filterRequests,
  countNewRequests,
  getRequests,
  filter
};
