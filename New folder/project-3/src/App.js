import React from 'react';
import {BrowserRouter}  from "react-router-dom";
import RouteTer from "./componets/RouteTer"

function App() {
  return (
    <div>
        <BrowserRouter>
              <RouteTer />
        </BrowserRouter>
    </div>
  );
}

export default App;
