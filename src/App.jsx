import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { Toaster } from 'react-hot-toast';
import Layout from "./Layout";
import Home from "./Pages/Home";
import Cottages from "./Pages/Cottages"
import Adventure from "./Pages/Adventure";
import Rafting from "./Pages/Rafting";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Camping from "./Pages/Camping";

const App = () => {


  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cottages" element={<Cottages />} />
          <Route path="/activities" element={<Adventure />} />
          <Route path="/rafting" element={<Rafting />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/camping" element={<Camping />} />
          
          
          
       
        </Route>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forget_pass" element={<ForgetPass />} /> */}
      </Routes>
    </Router>
    </>
  );
};

export default App;
