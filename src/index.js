import "./style.css";
import { header } from "./components/header.js";
import { home, menu, contact } from "./components/body.js";
import { footer } from "./components/footer.js";

function initializeWebsite() {
  document.body.append(header());
  const content = document.createElement("div");
  content.id = "content";
  document.body.appendChild(content);
  content.append(home());
  //TODO: Footer
  document.body.append(footer());
}

function addListeners() {
  //TODO: Event listeners for each tab
  const homeButton = document.getElementById("homeButton");
  const menuButton = document.getElementById("menuButton");
  const contactButton = document.getElementById("contactButton");

  homeButton.addEventListener("click", (event) => {
    if (Array.from(document.getElementById("body").classList).includes("home"))
      return;
    content.removeChild(document.getElementById("body"));
    content.appendChild(home());
  });
  menuButton.addEventListener("click", (event) => {
    if (Array.from(document.getElementById("body").classList).includes("menu"))
      return;
    content.removeChild(document.getElementById("body"));
    content.appendChild(menu());
  });
  contactButton.addEventListener("click", (event) => {
    if (
      Array.from(document.getElementById("body").classList).includes("contact")
    )
      return;
    content.removeChild(document.getElementById("body"));
    content.appendChild(contact());
  });
}

initializeWebsite();
addListeners();
