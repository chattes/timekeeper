import "./styles/main.css";
import { ProjectComponent } from "./components/ButtonComponent";

const rootEl = document.querySelector("#wrapper");

const renderContainer = () => {
  let div = document.createElement("div");
  div.className = `parent-div`;

  div.appendChild(ProjectComponent());
  return div;
};

rootEl.appendChild(renderContainer());
