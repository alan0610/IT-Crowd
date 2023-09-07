import './App.css';
import { Routes, Route } from 'react-router-dom';
import Show from './components/Show';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Show />} />
        <Route path='/:id' element={<ProductDetail />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
