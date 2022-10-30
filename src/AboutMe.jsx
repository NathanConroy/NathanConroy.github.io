import { useState, useEffect } from 'react';

import ReadingBlock from './ReadingBlock';
import retrieveAbout from './backend/about';

const NULL_ABOUT = null;
const CONTENT = 'content';

function getAboutContent(about) {
  if (!about) return '';
  return about[CONTENT];
}


function useAbout() {
  const [about, setAbout] = useState(NULL_ABOUT);
  useEffect(() => {
    retrieveAbout()
      .then((resp) => setAbout(resp.data))
      .catch() // TODO: error handling
  }
  , []);
  return about;
}

function AboutContent() {
  const about = useAbout();
  return <p> {getAboutContent(about)} </p>;
}

function AboutMe() {
  return (
    <ReadingBlock>
      <div className="about">
        <AboutContent />
      </div>
    </ReadingBlock>
  );
}

export default AboutMe;
