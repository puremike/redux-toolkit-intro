import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Counter from "./features/counter/Counter";
import Navbar from "./components/Navbar";
import Blog from "./routes/Blog";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="counter" element={<Counter />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
