import "./style.css";
import { header } from "./components/header.js";
import { home } from "./components/home.js";
import { menu } from "./components/menu.js";
import { contact } from "./components/contact.js";
import { footer } from "./components/footer.js";

document.body.append(header());

const content = document.createElement("div");
content.id = "content";
document.body.appendChild(content);
content.append(home());

//TODO: Footer
document.body.append(footer());

//TODO: Event listeners for each tab
const homeButton = document.getElementById("homeButton");
const menuButton = document.getElementById("menuButton");
const contactButton = document.getElementById("contactButton");

homeButton.addEventListener("click", (event) => {
  content.removeChild(document.getElementById("body"));
  content.appendChild(home());
});
menuButton.addEventListener("click", (event) => {
  content.removeChild(document.getElementById("body"));
  content.appendChild(menu());
});
contactButton.addEventListener("click", (event) => {
  content.removeChild(document.getElementById("body"));
  content.appendChild(contact());
});
