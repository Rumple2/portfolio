import React from 'react';

import { headerBarStyles } from '#styles';
import { ArrowDown } from '#svg';

const CvDownloadButton = () => {
  return (
    <div className={headerBarStyles.CvDownloadButtonContainer}>
      <a
      // It will search into public folder
        href="/Galanga Sangol Ramses CV.pdf"
        download="CV Développeur Full Stack - Galanga"
        className={headerBarStyles.CvDownloadButton}
        target="_blank"
        rel="noreferrer"
      >
        CV
        <ArrowDown />
      </a>
    </div>
  );
};

export default CvDownloadButton;
