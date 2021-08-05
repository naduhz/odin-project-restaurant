export function header() {
  const headerElement = document.createElement("header");

  const headerLogo = document.createElement("a");
  headerLogo.className = "header-logo";
  headerElement.appendChild(headerLogo);

  const menuButton = document.createElement("a");
  menuButton.className = "genericButton";
  menuButton.id = "menuButton";
  menuButton.textContent = "Menu";
  headerElement.appendChild(menuButton);

  const contactButton = document.createElement("a");
  contactButton.className = "genericButton";
  contactButton.id = "contactButton";
  contactButton.textContent = "Contact Us";
  headerElement.appendChild(contactButton);

  return headerElement;
}
