import './App.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InfoScreen from './InfoScreen';
function App() {
  return (
    <Router>
      <div className="App">
        <ResponsiveAppBar />
        <Routes>
          <Route path="/learnTrading/" element={<InfoScreen />} />
          <Route path="/learnTrading/quiz" element={<h1>Hello this is quiz</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
