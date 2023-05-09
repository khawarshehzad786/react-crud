import React from "react";
import Create from "./Components/Create";
import { Route,  Routes } from "react-router-dom";
import Read from "./Components/Read";
import Update from "./Components/Update";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Create /> }/>
        <Route path='/read' element={<Read /> }/>
        <Route path='/update' element={<Update /> }/>

      </Routes>
    </div>
  );
}

export default App;
