import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Expertise from './components/Expertise';
import Contact from './components/Contact';
import ScrollButton from './components/ScrollButton';

//export default function Home() {
const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 to-navy-800">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Expertise />
        <Contact />
      </main>
      <ScrollButton />
    </div>
  );
};
export default Home;
