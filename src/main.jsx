import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import App from './App'
import './index.css'

import Project1 from './pages/Project1'
import Project2 from './pages/Project2'
import Project3 from './pages/Project3'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<App />}
        />

        <Route
          path="/project1"
          element={<Project1 />}
        />

        <Route
          path="/project2"
          element={<Project2 />}
        />

        <Route
          path="/project3"
          element={<Project3 />}
        />

      </Routes>

    </BrowserRouter>

  </React.StrictMode>,
)