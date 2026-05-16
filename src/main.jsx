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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<App />} />

        <Route
          path="/project1"
          element={<Project1 />}
        />

      </Routes>

    </BrowserRouter>

  </React.StrictMode>,
)