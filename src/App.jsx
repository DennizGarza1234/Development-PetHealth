import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Pets from "./pages/Pets";
import "./App.css";
import AddPet from "./pages/AddPet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/add-pet" element={<AddPet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;