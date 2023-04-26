import './App.css';
import { Routes, Route } from "react-router-dom"
import Trivia from "./pages/Trivia/Trivia.jsx"
import Home from "./pages/Homepage/Home.jsx"
import Create from "./pages/Create/Create.jsx"
import Navbar from "./components/Nav.jsx" // import the Navbar component

function App() {
  return (
    <div className="App">
      <Navbar /> {/* render the Navbar component */}
      <Routes>
          <Route path="/trivia" element={<Trivia />} />
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;



