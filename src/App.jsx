import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import Signin from "./pages/Signin";
import File from "./pages/File";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/collections" element={<Collections/>} />
          <Route path="/login" element={<Signin/>} />
          <Route path="/file" element={<File/>}/>
 
        </Routes>
      </Router>
    </>
  );
}

export default App;