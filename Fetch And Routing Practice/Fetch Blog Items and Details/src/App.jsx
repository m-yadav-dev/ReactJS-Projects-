import { Route, Routes, useParams } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import BlogItemDetails from "./components/BlogItemDetails";
import NotFound from "./components/NotFound";
import BlogList from "./components/BlogList";

import "./App.css";

const BlogListItenWrapper = () => {
  const { id } = useParams();
  return <BlogItemDetails id={id} />;
};

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs/:id" element={<BlogListItenWrapper />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;
