import logo from './logo.svg';
import './App.css';
import Landingpage from './components/Landingpage';
import AboutUs from './components/AboutUs';
import LatestArticles from './components/LatestArticles';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Landingpage/>
      <AboutUs/>
      <LatestArticles/>
      <Footer/>
    </div>
  );
}

export default App;
