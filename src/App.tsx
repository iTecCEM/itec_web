import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Landing';
import Community from './pages/Community';
import Registro from './pages/Registro.js';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;