import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasePagina from "../../pages/BasePagina";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BasePagina titulo={"Atletas"} />} />
      <Route path="/favoritos" element={<BasePagina titulo={"Favoritos"} />} />
    </Routes>
  );
}
