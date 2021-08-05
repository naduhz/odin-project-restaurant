import middleImage from "../assets/Middle2.png";

export function menu() {
  const bodyElement = document.createElement("section");
  bodyElement.className = "body";
  bodyElement.id = "body";

  const subText = document.createElement("h3");
  subText.textContent = `Any sizes*, Any Pizza Category, Everyday*, All Day!`;
  bodyElement.appendChild(subText);

  const orderButton = document.createElement("a");
  orderButton.className = "genericButton";
  orderButton.id = "orderButton";
  orderButton.textContent = `ORDER NOW!`;
  bodyElement.appendChild(orderButton);

  return bodyElement;
}
