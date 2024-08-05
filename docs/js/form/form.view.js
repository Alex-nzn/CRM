const elements = {
  personName: document.querySelector("#name"),
  personPhone: document.querySelector("#phone"),
  personEmail: document.querySelector("#email"),
  personProduct: document.querySelector("#product"),
  btnForm: document.querySelector(".btn"),
  tbody: document.querySelector("#tbody"),
};

function setFormData(data) {
  elements.personName.value = data.name;
  elements.personPhone.value = data.phone;
  elements.personEmail.value = data.email;
  elements.personProduct.value = data.product;
}

function getFormData() {
  return {
    name: elements.personName.value,
    phone: elements.personPhone.value,
    email: elements.personEmail.value,
    product: elements.personProduct.value,
  };
}

export { elements, setFormData, getFormData };
