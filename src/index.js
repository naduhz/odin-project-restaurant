import "./style.css";
import { header } from "./components/header.js";
import { body } from "./components/body.js";
import { footer } from "./components/footer.js";

const content = document.querySelector("#content");

//TODO: Header
content.append(header());

//TODO: Body
content.append(body());

//TODO: Footer
content.append(footer());
