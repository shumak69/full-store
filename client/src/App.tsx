import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Context } from ".";
import "./app.scss";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { check } from "./http/userApi";

function App() {
  const { user } = useContext(Context)!;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user.setRole(data.role);
        user.setUser(true);
        user.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="loader d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="info" />
      </div>
    );
  }

  return (
    <div className="App">
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default observer(App);
