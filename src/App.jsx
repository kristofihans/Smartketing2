import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import VideoPortfolio from './components/VideoPortfolio';
import PhotoPortfolio from './components/PhotoPortfolio';
import WebPortfolio from './components/WebPortfolio';
import Outro from './components/Outro';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <VideoPortfolio />
      <PhotoPortfolio />
      <WebPortfolio />
      <Outro />
      <Footer />
    </div>
  );
}

export default App;
