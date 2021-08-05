import middleImage from "../assets/Middle2.png";

export function contact() {
  const bodyElement = document.createElement("section");
  bodyElement.className = "body";
  bodyElement.id = "body";

  const orderButton = document.createElement("a");
  orderButton.className = "genericButton";
  orderButton.id = "orderButton";
  orderButton.textContent = `ORDER NOW!`;
  bodyElement.appendChild(orderButton);

  return bodyElement;
}
