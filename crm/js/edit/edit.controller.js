import * as edit from "./edit.view.js";
import * as model from "../model.js";

function init() {
  let id = getRequestId();
  console.log(id);
  let request = model.getRequestById(id);
  console.log(request);
  edit.renderRequest(request);
  setupEventListeners();
}

function setupEventListeners() {
  edit.elements.form.addEventListener("submit", formSubmitHendler);
}

function formSubmitHendler(e) {
  e.preventDefault();
  const formData = edit.getFormInput();
  console.log(formData);
  model.updateRequest(formData);
  window.location = "./table.html";
}

function getRequestId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

init();
