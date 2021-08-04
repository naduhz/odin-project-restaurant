export function header() {
  const headerElement = document.createElement("header");
  headerElement.className = "header";

  const headerLogo = document.createElement("a");
  headerLogo.className = "header-logo";
  headerElement.appendChild(headerLogo);

  return headerElement;
}
