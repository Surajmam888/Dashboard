import { Route, Routes } from "react-router-dom";
// import './App.css'
import Home from "./Pages/Home";
import Contact from "./Pages/Contact/Contact";

function App() {

  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
