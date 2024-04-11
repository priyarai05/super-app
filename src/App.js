import './App.css';
import Registration from './pages/registration/Registration';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GenerPage from './pages/genre/GenerPage';
import Homepage from './pages/homepage/Homepage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Registration />} />
        <Route path='/genre' element={<GenerPage />} />
        <Route path='/homepage' element={<Homepage />} />
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
