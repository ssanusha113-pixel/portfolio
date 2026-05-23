import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import App from "./App"

import Project1 from "./pages/Project1"
import Project2 from "./pages/Project2"
import Project3 from "./pages/Project3"
import Project4 from "./pages/Project4"
import Project5 from "./pages/Project5"
import Project6 from "./pages/Project6"
import Project7 from "./pages/Project7"

import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<App />} />

        <Route path="/project1" element={<Project1 />} />

        <Route path="/project2" element={<Project2 />} />

        <Route path="/project3" element={<Project3 />} />

        <Route path="/project4" element={<Project4 />} />

        <Route path="/project5" element={<Project5 />} />

        <Route path="/project6" element={<Project6 />} />

        <Route path="/project7" element={<Project7 />} />

      </Routes>

    </BrowserRouter>
  </React.StrictMode>
)