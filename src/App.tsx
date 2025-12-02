import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Portfolio from './sections/Portfolio';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  )
}

export default App
