import './App.css';
import './css/styles.css'
import { Navbar, Home, About, Education, Experience, Interests, Footer } from './index.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Experience />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
