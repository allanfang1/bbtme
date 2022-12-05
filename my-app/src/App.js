import { HashRouter, Routes, Route } from "react-router-dom";
import React from "react";
import './App.css';
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/*' element={<PageOne/>} />
        <Route path='/PageTwo' element={<PageTwo/>} />
      </Routes>
    </HashRouter>

    
  );
}
