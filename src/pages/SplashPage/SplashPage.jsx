import React from "react";
import SpotifyPlayer from "react-spotify-player";

import logo from "../../assets/images/jazzlaug.png";
import promoVideo from "../../assets/videos/promo.mp4";
import { HTMLEntities } from "../../utils/stringUtils.js";
import styles from "./SplashPage.css";

const SplashPage = () => (
  <div className={styles.SplashPage}>
    <header className={styles.Header}>
      <img src={logo} className={styles.Logo} alt="logo" />
      <h1>mandaljazz</h1>
      <p style={{ fontWeight: 900, fontSize: "2rem" }}>
        27. {HTMLEntities.ndash} 29. juni 2019
      </p>
    </header>
    <video
      autoPlay
      playsInline
      muted
      style={{ width: "100%", height: "50%" }}
      loop
    >
      <source src={promoVideo} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>

    <div style={{ padding: "1rem" }}>
      <SpotifyPlayer uri="spotify:user:shenrik:playlist:5S7NeIDOhxH7seAFUQpHCT" />
    </div>
  </div>
);

export default SplashPage;
