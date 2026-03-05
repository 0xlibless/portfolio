import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import KeepIt from './pages/KeepIt';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/keepit" element={<KeepIt />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
