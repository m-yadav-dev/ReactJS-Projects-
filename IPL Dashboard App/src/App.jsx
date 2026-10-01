import Home from "./features/dashboard/components/Home/index.jsx";
import { Routes, Route } from "react-router-dom";
import TeamMatches from "./features/dashboard/components/TeamMatches/index.jsx";
import "./App.css";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/team-matches/:id" element={<TeamMatches />}></Route>
      </Routes>
    </>
  );
};

export default App;
