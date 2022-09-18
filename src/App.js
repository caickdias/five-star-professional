import './App.css';
import Navbar from './components/_layout/Navbar';
import Footer from './components/_layout/Footer';

function App() {
  return (
    <div className='flex flex-col justify-between h-screen bg-gray-100'>
      <Navbar />

      <Footer />
    </div>
  );
}

export default App;
