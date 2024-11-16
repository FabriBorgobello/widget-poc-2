import ReactDOM from "react-dom/client"; // Note the new import
import { Widget } from "./components/Widget";

function injectWidget() {
  // Create a container for the widget if it doesn't already exist
  let container = document.getElementById("my-widget-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "my-widget-container";
    document.body.appendChild(container);
  }

  // Create a React root and render the widget
  const root = ReactDOM.createRoot(container);
  root.render(<Widget />);
}

// Inject the widget into the page
injectWidget();
