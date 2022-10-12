// import React, { useState } from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   Prompt
// } from "react-router-dom";

// import Homem from "./Components/Homem/Homem"
// import Mulher from "./Components/Mulher/Mulher"


// function Router() {
//   return (
  
//       <Routes>
//         <Route path="/" exact element={<Homem />} />
//         <Route path="/mulher" exact element={<Mulher />} />
//         {/* <Route path="/one" children={<h3>One</h3>} />
//         <Route path="/two" children={<h3>Two</h3>} /> */}
//       </Routes>
  
//   );
// }

// export default Router;

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Homem from "../Homem/Homem"
import Mulher from "../Mulher/Mulher"


function Router() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homem />}/>
          <Route path="/feminina" element={<Mulher />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default Router;
