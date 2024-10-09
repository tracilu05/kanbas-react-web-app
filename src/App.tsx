

import React from "react";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Route, Routes, Navigate  } from "react-router-dom";
export default function App() {
  return (
    <HashRouter>
    <div>
    <Routes>
         <Route path="/Labs/*" element={<Labs />} />
         <Route path="/" element={<Navigate to="Kanbas" />} />
         <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
    </div>
    </HashRouter>
  );
}
 