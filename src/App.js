import MenuSuperior from "./components/MenuSuperior";
import { Routes, Route } from "react-router-dom";
import PaginaTres from "./components/PaginaTres";
import PaginaQuatro from "./components/PaginaQuatro";

import { Fragment } from "react";
import PaginaInicial from "./components/PaginaInicial";

const App = () => {
  return (
    <Fragment>
      <MenuSuperior />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="paginatres" element={<PaginaTres />} />
        <Route path="paginaquatro" element={<PaginaQuatro/>} />
      </Routes>
    </Fragment>
  );
}

export default App;



// import { Routes, Route } from "react-router-dom";
// import MenuSuperior from "./components/MenuSuperior";
// import PaginaTres from "./components/PaginaTres";

// import { Fragment } from "react";

// const App = () => {
//   return (
//     <Fragment>
//       <MenuSuperior />
//       <PaginaTres />
//       <Routes>        
//         <Route path="/" component={<PaginaTres />} />
//       </Routes>
//     </Fragment>
//   );
// }

// export default App;
