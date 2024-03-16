import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/add";
import Todo from "./pages/todo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
    )
}

export default App;
