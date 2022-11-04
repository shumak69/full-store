import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import "./app.scss";
import { observer } from "mobx-react-lite";
import { Context } from ".";
import { useContext, useEffect, useState } from "react";
import { check } from "./http/userApi";
import { Spinner } from "react-bootstrap";

function App() {
  const { user } = useContext(Context)!;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(true);
        user.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner animation="border" variant="info" />;
  }

  return (
    <div className="App">
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default observer(App);
