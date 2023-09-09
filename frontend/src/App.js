import "./App.css";
import { Routes, Route } from "react-router-dom";
import Show from "./components/Show";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login";
import Create from "./components/Create";
import Update from "./components/Update";
import CreateBrand from "./components/CreateBrand";
import AdminRoute from "./components/AdminRoute";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Show />} />
        <Route path="/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<AdminRoute> <Create /> </AdminRoute>} />
        <Route path="/create/brand" element={<AdminRoute> <CreateBrand /> </AdminRoute>} />
        <Route path="/update/:id" element={<AdminRoute> <Update /> </AdminRoute>} />
      </Routes>
    </div>
  );
}

export default App;
