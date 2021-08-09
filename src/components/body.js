import pepperoniImg from "../assets/food/pepperoni-pizza.jpg";
import middleImage from "../assets/Middle2.png";
import foodItem from "../menu/food";

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
  const pepperoniPizza = foodItem(
    "Pepperoni Pizza",
    "Red base topped with spicy salami (contains beef and pork)",
    pepperoniImg,
    4.0
  );

  const allImages = [pepperoniPizza.img];

  const bodyElement = document.createElement("section");
  bodyElement.className = "body menu";
  bodyElement.id = "body";

  const menuImages = document.createElement("div");
  menuImages.id = "menuImages";
  bodyElement.appendChild(allImages[0]);

  const orderButton = document.createElement("a");
  orderButton.className = "genericButton";
  orderButton.id = "orderButton";
  orderButton.textContent = `ORDER NOW!`;
  bodyElement.appendChild(orderButton);

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
