import './App.css';
import Header from './components/header/Header';
import Banner from './components/banner/Banner'
import Products from './components/products/Products';
import Footer from './components/footer/Footer';
import Availability from './components/availability/Availability';
// import Home from './components/home/Home';
// import About from './components/about/About';
// import Skills from './components/skills/Skills';
// import Services from './components/services/Services';
// import Qualification from './components/Qualification/Qualification';
// import Contact from './components/contact/Contact';

function App() {
  return (
    <>
    <main className="main">
    <Header/>
    <br />
    <br />
    <br />
    <br />
    <Banner/>
    <Products/>
    <Availability/>
    <Footer/>
    </main>
    </>    
  );
}

export default App;