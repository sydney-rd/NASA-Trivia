import './App.css';
import { Routes, Route } from "react-router-dom"
import Trivia from "./pages/Trivia.jsx"
import Home from "./pages/Home.jsx"
import Create from "./pages/Create.jsx"


function App() {

 // post req everyting in schema to fill out 
 // put just include things to update  \
 // get is just fetch req. 
 // delete method don't need a body users/1
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


