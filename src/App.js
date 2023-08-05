
import './App.css';
import Header from './Components/Shared/Header';
import Footer from './Components/Shared/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Components/Home/Home';
import Banner2 from './Components/Home/Banner2';
import CommingSoon from './Components/Home/CommingSoon';
import Service from './Components/Home/Service';
import About from './Components/Home/About';
import Contact from './Components/Home/Contact';
import OurTeam from './Components/Home/OurTeam';
import SignIn from './Components/Home/SignIn';
import { useEffect } from 'react';

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  return (
    <div>
      <ScrollToTop />
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/aboutAmayra' element={<Banner2></Banner2>}></Route>
        <Route path='/comingSoon' element={<CommingSoon></CommingSoon>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/team' element={<OurTeam></OurTeam>}></Route>
        <Route path='/signIn' element={<SignIn></SignIn>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
