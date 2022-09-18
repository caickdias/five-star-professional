import './App.css';

import Navbar from './components/_layout/Navbar';
import HeroSection from './components/_layout/HeroSection';
import Main from './components/_layout/Main';
import Footer from './components/_layout/Footer';

function App() {
  return (
    <div className='flex flex-col justify-between h-full bg-gray-100'>
      <Navbar />

      <HeroSection />

      <Main />

      <Footer />
    </div>
  );
}

export default App;
