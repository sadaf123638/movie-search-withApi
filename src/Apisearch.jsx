import React, { useState } from "react";
import './Search.css';

const ApiSearch = ({ onSearch }) => {

    const [input, setInput] = useState("");

    const handleClick = () => {
        if (input.trim() !== "") {
            onSearch(input);
        }
    };

    return (
        <div className="search-part" id="search">
            <h2>🎬 Search Your Favorite Movie</h2>
            <div className="search-box">
                <input type="search" name="search" id="search" placeholder="Search for Favorite Movies" required autoComplete="off" value={input}
                    onChange={(e) => setInput(e.target.value)} />
                <div className="btn">
                    <button type="submit" name="searctbtn" onClick={handleClick} id="searchBtn">Search</button>
                </div>
            </div>
        </div>

    );
};

export default ApiSearch;