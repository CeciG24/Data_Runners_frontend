
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/Home";
export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
