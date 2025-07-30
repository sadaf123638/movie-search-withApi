import React from "react";
import './Home.css';
import chhaavaPoster from '../assets/images/Chhaava.jpg';
import SaiyaaraPoster from '../assets/images/Saiyaara.jpg';
import raidPoster from '../assets/images/Raid.jpg';
import captainPoster from '../assets/images/Captain.jpg';
import housefullPoster from '../assets/images/Housefull.jpg';


const Home = () =>{
    return(
      <section className="trending-section" id="home">
        <h2>🔥 Trending Now on MovieExplore</h2>
        <div className="poster-grid">
            <img src={chhaavaPoster} alt="Chhaava" />
            <img src={SaiyaaraPoster} alt="Saiyaara" />
            <img src={raidPoster} alt="Raid2" />
            <img src={captainPoster} alt="Captain" />
            <img src={housefullPoster} alt="Housefull5" />
        </div>

      </section>

    );
};

export default Home;