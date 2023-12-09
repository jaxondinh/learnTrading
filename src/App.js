import './App.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<h1>Hello this is home</h1>} />
          <Route path="/quiz" element={<h1>Hello this is quiz</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
