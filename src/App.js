import { Routes, Route } from "react-router-dom";
import Trivia from "./pages/Trivia/Trivia.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/trivia" element={<Trivia />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
