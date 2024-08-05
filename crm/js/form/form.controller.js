import * as model from "../model.js";
import * as view from "./form.view.js";
import * as test from "./form.test-data.js";

renderTestData();

view.elements.btnForm.addEventListener("click", function (e) {
  e.preventDefault();
  const formData = view.getFormData();
  model.addData(formData);
  renderTestData();
});

function renderTestData() {
  let testData = test.getTestData();
  view.setFormData(testData);
}
