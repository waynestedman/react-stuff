// App.jsx
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './Navigation.jsx';
import Home from "./Home.jsx";
import Newsfeed from "./Newsfeed.jsx";

function App() {

  return (
    <>
      <h1>a bunch of React stuff</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />} >
            <Route index element={<Home />} />
            <Route path="/newsfeed" element={<Newsfeed />} />
            <Route path="*" element={<h4 className="centered">Not Found</h4>} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
