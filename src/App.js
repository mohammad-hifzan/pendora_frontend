// import logo from './logo.svg';
// import './App.css';
import $ from 'jquery';
import Mangas from './components/mangaList'
import Header from './common/header'
import Footer from './common/footer'
import ProductSection from './common/productSection'
import HeroSection from './common/heroSection'
import SearchModel from './common/searchModel'



function App() {
  return (
    <>
      <div id="preloder">
          <div className="loader"></div>
      </div>
      <Header />
      <HeroSection />
      <ProductSection />
      <Footer />
      <SearchModel />
    </>
  );
}


export default App;
