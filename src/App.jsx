import "./App.css";

// 2. reaproveitamento de estrutura
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <h1>Footer</h1>
    </div>
  );
}

export default App;
