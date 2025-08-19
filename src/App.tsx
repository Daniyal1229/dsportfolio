import Header from './components/Header';
import Hero3DScene from './components/Hero3DScene';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="home">
          <Hero3DScene />
        </section>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-white/10" style={{ backgroundColor: '#0f172a' }}>
        <div className="container-custom text-center">
          <p className="text-white/60">
            © 2024 Syed Daniyal Bokhari. All rights reserved.
          </p>
          {/* <p className="text-white/40 text-sm mt-2">
            Built with React, TypeScript, and Three.js
          </p> */}
        </div>
      </footer>
    </div>
  );
}

export default App;
