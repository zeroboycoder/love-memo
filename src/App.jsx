import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
    </Routes>
  );
};

export default App;
