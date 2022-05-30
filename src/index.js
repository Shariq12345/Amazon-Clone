import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import reducer, { initialState } from "./reducer";
import App from "./App";
import { StateProvider } from "./StateProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode>
);
