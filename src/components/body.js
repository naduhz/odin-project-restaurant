import { foods } from "../menu/food";
import middleImage from "../assets/Middle2.png";

export function home() {
  const bodyElement = document.createElement("section");
  bodyElement.className = "body home";
  bodyElement.id = "body";

  const imageContainer = new Image();
  imageContainer.src = middleImage;
  bodyElement.appendChild(imageContainer);

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

export function menu() {
  const bodyElement = document.createElement("section");
  bodyElement.className = "body menu";
  bodyElement.id = "body";

  for (let i = 0; i < foods.length; i++) {
    const itemWrapper = document.createElement("div");
    itemWrapper.className = "item";

    const itemName = document.createElement("h3");
    itemName.textContent = foods[i].name;
    itemWrapper.appendChild(itemName);

    const imageWrapper = document.createElement("div");
    imageWrapper.className = "imageWrapper";
    const image = foods[i].img;
    image.style.width = "100%";
    image.style.height = "100%";
    imageWrapper.appendChild(foods[i].img);
    itemWrapper.appendChild(imageWrapper);

    bodyElement.appendChild(itemWrapper);
  }

  return bodyElement;
}

export function contact() {
  const bodyElement = document.createElement("section");
  bodyElement.className = "body contact";
  bodyElement.id = "body";

  const orderButton = document.createElement("a");
  orderButton.className = "genericButton";
  orderButton.id = "orderButton";
  orderButton.textContent = `ORDER NOW!`;
  bodyElement.appendChild(orderButton);

  return bodyElement;
}
