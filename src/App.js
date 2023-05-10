// import Counter from "./features/counter/Counter";
import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Counter from "./features/counter/Counter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="counter" element={<Counter />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
