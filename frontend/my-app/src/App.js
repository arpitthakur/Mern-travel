import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Travel from "./Travel";

import Description from "./Description";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/"element={<Description/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home"element={<Home/>}/>
        <Route path="/booking"element={<Travel/>}/>
        
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
