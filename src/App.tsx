import { Routes, Route, useLocation } from "react-router-dom";

import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import BackgroundVideo from "./components/BackgroundVideo";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Coursework from "./pages/Coursework";
import AboutMe from "./pages/AboutMe";



function App() {
    const location = useLocation();

  return (
    <div className="layout">

        {location.pathname === "/" && <BackgroundVideo />}

        <Header />

        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/coursework" element={<Coursework />} />
                <Route path="/aboutme" element={<AboutMe />} />
            </Routes>
        </main>

        <Footer />
    </div>
  )
}

export default App
