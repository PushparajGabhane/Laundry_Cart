import Createorder from "./createorder";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orderselect from "./orderselect";
import Summary from "./summary";

import 'bootstrap/dist/css/bootstrap.min.css';
import Orderlist from "./orderlist";

function App() {
 
  return (
    <>



      <BrowserRouter>
        <Routes>
          <Route path="/selectorder" element={<Orderselect />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/" element={<Createorder/>} />
          <Route path="/orderlist" element={<Orderlist/>} />
        </Routes>

      </BrowserRouter>


     


      </>

  );
}

    



export default App;
