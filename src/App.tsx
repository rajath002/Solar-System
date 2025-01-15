import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SolarSystem } from './components/SolarSystem';

function App() {
  
  return (
    <div className="w-full h-screen bg-black">
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<SolarSystem showCreatorInfo/>} />
          <Route path="/solar-system-by-rajath" element={<SolarSystem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;