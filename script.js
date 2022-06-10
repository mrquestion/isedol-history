import { getIdols } from "./api.js";

const createElement = ({ tagName = 'div', attributes = {}, classes = [], styles = {}, textContent = null }) => {
  const element = document.createElement(tagName);
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
  element.classList.add(...classes);
  for (const [key, value] of Object.entries(styles)) {
    element.style.setProperty(key, value);
  }
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
};

window.addEventListener('load', async e => {
  const idols = await getIdols();
  idols.forEach(idol => {
    const div = createElement({ tagName: 'div', textContent: idol.name });
    document.querySelector('#menu').appendChild(div);
  });
});
