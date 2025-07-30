import React, { useState } from "react";
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import ApiSearch from './Apisearch.jsx';
import Results from "./components/Results";
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';

function App() {


  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const apiKey = "e3babe27"; // ← Replace with your OMDb API Key
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=e3babe27`);
    const data = await response.json();

    if (data.Response === "True") {
      setMovies(data.Search);
    } else {
      setMovies([]); // no result
    }
  };

  return (
    <>
      <Navbar />
      <Home />
      <ApiSearch onSearch={handleSearch} />
      <Results movies={movies} />
      <About />
      <Footer />


    </>
  );
}

export default App;
