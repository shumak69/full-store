import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default App;
