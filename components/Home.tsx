import React from 'react';
import Image from 'next/image';

import { homeStyles } from '#styles';
import { GithubLogo, LinkedinLogo } from '#svg';

const Home = () => {
  return (
    <div className={homeStyles.homeArea} id="homeArea">
      <div className={homeStyles.homeDescriptionContainer}>
        <div className={homeStyles.homeDescription}>
          <h1>Galanga Sangol Ramses</h1>
          <h2>Développeur Full Stack</h2>
          <p>
            Passionné par l'innovation et les technologies, je suis développeur
            fullstack avec une expertise en intelligence artificielle et en
            développement d'applications mobiles et web. Mon parcours
            académique, marqué par une Licence en architecture logicielle et un
            Master 2 en Intelligence Artificielle et Big Data, reflète ma
            volonté constante de relever des défis complexes et d'apporter des
            solutions efficaces.
            <br />
            <br />
            J'aime créer des solutions innovantes et efficaces qui simplifient
            les processus complexes, alliant interfaces intuitives et systèmes
            backend performants.
          </p>
          <div className={homeStyles.homeLogosLinks}>
            <a
              href="https://www.linkedin.com/in/sangol-ramses-galanga-350533220/"
              target="_blank"
              aria-label="Linkedin link"
              rel="noreferrer"
            >
              <LinkedinLogo />
            </a>
            <a
              href="https://github.com/Rumple2"
              target="_blank"
              aria-label="Github link"
              rel="noreferrer"
            >
              <GithubLogo />
            </a>
          </div>
        </div>
      </div>

      <div className={homeStyles.homeLine} />

      <Image
        src="/images/monprofil.png"
        width={500}
        height={500}
        alt="profile"
        title="profile"
        className={`${homeStyles.homeProfilePicture} ${homeStyles.unselectable}`}
        priority
      />
    </div>
  );
};

export default Home;
