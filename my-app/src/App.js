import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import './App.css';
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<PageOne/>} />
        <Route path='/PageTwo' element={<PageTwo/>} />
      </Routes>
    </BrowserRouter>

    
  );
}
