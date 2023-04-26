import './App.css';
import { Routes, Route } from "react-router-dom"
import Trivia from "./pages/Trivia.jsx"
import Home from "./pages/Home.jsx"
import Create from "./pages/Create.jsx"


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/trivia" element={<Trivia />} />
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;


