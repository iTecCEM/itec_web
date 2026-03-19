import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Community from './pages/Community';
import EventInfo from './pages/EventInfo';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/community" element={<Community />} />
        <Route path="/evento/:id" element={<EventInfo />} />
        {/* <Route path="/registro" element={<Registro />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;