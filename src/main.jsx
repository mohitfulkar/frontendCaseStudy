import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import mockProfiles from "./constants/mockProfiles.js";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

const initializeLocalStorage = () => {
  // Check if profiles already exist in localStorage
  const profiles = localStorage.getItem("profiles");
  if (!profiles) {
    console.log("Initializing localStorage with mockProfiles...");
    localStorage.setItem("profiles", JSON.stringify(mockProfiles));
  }
};

initializeLocalStorage();

// const handleUnload = () => {
//   localStorage.removeItem("profiles");
// };
// window.addEventListener("beforeunload", handleUnload);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
