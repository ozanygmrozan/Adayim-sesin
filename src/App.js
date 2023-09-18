import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import "./index.css";
import Footer from "./component/Footer/Footer";
import Layout from "./component/Layout/Layout";
import Blogs from "./component/Blogs/Blogs";
import Adaylar from "./component/Adaylar/Adaylar";
import Adaylar1 from "./component/Adaylar-1/Adaylar-1";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Aday" element={<Adaylar1 />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/Contact" element={<Blogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
