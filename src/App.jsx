import Layout from "./Hoc/Layout";
import Pages from "./components/Pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Pages />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
