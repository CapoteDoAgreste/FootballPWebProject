import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainRoutes from "./components/RoutesFrontEnd/MainRoutes";

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
