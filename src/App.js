import './App.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InfoScreen from './InfoScreen';
import Quiz from './Quiz';
function App() {
  return (
    <Router>
      <div className="App">
        <ResponsiveAppBar />
        <Routes>
          <Route path="/learnTrading/" element={<InfoScreen />} />
          <Route path="/learnTrading/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
