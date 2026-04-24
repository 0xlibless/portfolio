import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CustomCursor from './components/customcursor';

function App() {
  return (
    <HashRouter>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
