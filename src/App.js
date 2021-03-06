import Home from "./pages/Home/Home";
import Property from './pages/Property/Property'
import Lists from './pages/Lists/LIsts'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Lists" element={<Lists/>}/>
    <Route path="/lists/:id" element={<Property/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
