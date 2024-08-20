import { Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Products from './Products';
import Contacts from './Contacts';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/contacts" element={<Contacts/>} />
      </Routes>
    
    </div>
  );
}

export default App;