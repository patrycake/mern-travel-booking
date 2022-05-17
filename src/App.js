import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import HotelDetails from './pages/HotelDetails';
import Hotels from './pages/Hotels';
import "./App.css"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<Hotels />} />
        <Route path='/hotels:id' element={<HotelDetails />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
