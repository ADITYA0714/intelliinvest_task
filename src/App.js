import './App.css';
import Header from './components/header/Header';
import Banner from './components/banner/Banner'
import Products from './components/products/Products';
import Footer from './components/footer/Footer';
import Availability from './components/availability/Availability';

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
