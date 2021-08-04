import "./style.css";
import { header } from "./components/header.js";
import { body } from "./components/body.js";
import { footer } from "./components/footer.js";

const content = document.createElement("div");
content.id = "content";
document.body.appendChild(content);

//TODO: Header
content.append(header());

content.append(body());

//TODO: Footer
content.append(footer());
