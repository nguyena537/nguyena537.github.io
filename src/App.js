import './App.css';
import './css/styles.css';
import React, {useState} from 'react';
import { Navbar, Home, About, Education, Experience, Interests, Footer, ClickMeButton, HideClickMeButton } from './index.js';

function App() {
  const [showClickMe, setShowClickMe] = useState(true);

  return (
    <div className="App">
      <HideClickMeButton
        showClickMe={showClickMe}
        setShowClickMe={setShowClickMe}
      />
      <Navbar />
      <Home />
      <About />
      <Education />
      <Experience />
      <Interests />
      <Footer />
      <ClickMeButton 
        showClickMe={showClickMe}
      />
    </div>
  );
}

export default App;
