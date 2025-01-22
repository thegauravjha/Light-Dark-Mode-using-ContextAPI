import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Header from './Components/Header';
import { ThemeProvider } from './custom Hooks/useTheme';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <>
          {/* header */}
          <Header />

          {/* Pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
