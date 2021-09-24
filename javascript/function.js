import { HTML, REGEX } from "./constant.js";

let value = null;

const { numb, operator, allDelete } = REGEX;

console.log(numb, operator, allDelete);

const back = "Backspace";

export const choice = (value) => (value = HTML.resultat.innerHTML += value);

export const equal = () => {
  const p = eval(value);
  HTML.resultat.innerHTML = p;
};

export const deleteScreen = () => (HTML.resultat.innerHTML = "");

export const deleteLastValue = (val) => {
  const array = val.split("");
  array.pop();
  const currentValue = array.join("");
  HTML.resultat.innerHTML = currentValue;
};

window.addEventListener("keydown", (e) => {
  const trigger = e.key;

  value = HTML.resultat.innerHTML;

  trigger.match(numb) || trigger.match(operator) ? (HTML.resultat.innerHTML += trigger) : "";

  trigger === "=" || trigger === "Enter" ? equal() : "";

  trigger === back ? deleteLastValue(value) : "";

  trigger.match(allDelete) ? deleteScreen() : "";
});
