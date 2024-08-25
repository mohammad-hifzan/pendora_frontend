// import logo from './logo.svg';
// import './App.css';
import $ from 'jquery';
import { Outlet } from "react-router-dom"
import Mangas from './components/mangaList'
import Header from './common/header'
import Footer from './common/footer'
import SearchModel from './common/searchModel'



function App() {
  return (
    <>
      <div id="preloder">
          <div className="loader"></div>
      </div>
      <Header />
      <Outlet />
      <Footer />
      <SearchModel />
    </>
  );
}


export default App;
