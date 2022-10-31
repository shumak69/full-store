import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import DeviceStore from "./store/DeviceStore";
import UserStore from "./store/UserStore";

interface AppContextInterface {
  user: UserStore;
  device: DeviceStore;
}

export const Context = createContext<AppContextInterface | null>(null);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      device: new DeviceStore(),
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>
);
