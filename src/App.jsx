import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import {
  About,
  Navbar,
  StarsCanvas,
  SpiderLoader,
  HeroRevamped,
  ProjectsRevamped,
  JourneyHorizontal,
  SkillsCategories,
  Achievements,
  ContactRevamped,
} from "./components";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      {loading ? (
        <SpiderLoader onComplete={() => setLoading(false)} />
      ) : (
        <div className='relative z-0 bg-black'>
          <Navbar />
          <HeroRevamped />
          <About />
          <ProjectsRevamped />
          <JourneyHorizontal />
          <SkillsCategories />
          <Achievements />

          <div className='relative z-0'>
            <ContactRevamped />
            <StarsCanvas />
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
