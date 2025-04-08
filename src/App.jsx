import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Cottages from "./Pages/Cottages"
import Adventure from "./Pages/Adventure";
import Rafting from "./Pages/Rafting";

const App = () => {


  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cottages" element={<Cottages />} />
          <Route path="/activities" element={<Adventure />} />
          <Route path="/rafting" element={<Rafting />} />
          
       
        </Route>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forget_pass" element={<ForgetPass />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
