let elements = {
  number: document.querySelector("#number"),
  id: document.querySelector("#id"),
  name: document.querySelector("#name"),
  date: document.querySelector("#date"),
  phone: document.querySelector("#phone"),
  product: document.querySelector("#product"),
  email: document.querySelector("#email"),
  card: document.querySelector(".card-header"),
  form: document.querySelector("#form"),
  status: document.querySelector("#status"),
};

function renderRequest(request) {
  elements.number.innerText = request.id;
  elements.id.value = request.id;
  elements.name.value = request.name;
  elements.phone.value = request.phone;
  elements.product.value = request.product;
  elements.email.value = request.email;
  elements.date.innerText = `${request.dateDate} ${request.dateTime}`;
  elements.status.value = request.status;
}

function getFormInput() {
  return new FormData(elements.form);
}

export { getFormInput, elements, renderRequest };
