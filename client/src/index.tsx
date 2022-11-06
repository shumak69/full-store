import { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import BasketStore from "./store/BasketStore";
import DeviceStore from "./store/DeviceStore";
import UserStore from "./store/UserStore";

interface AppContextInterface {
  user: UserStore;
  device: DeviceStore;
  basket: BasketStore;
}

export const Context = createContext<AppContextInterface | null>(null);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      device: new DeviceStore(),
      basket: new BasketStore(),
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>
);
