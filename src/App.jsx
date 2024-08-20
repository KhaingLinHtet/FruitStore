import {Route, BrowserRouter as Router,Routes} from 'react-router-dom';
import Banner from "./components/banner/Banner"
import Banner2 from "./components/banner/Banner2"
import Footer from "./components/footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/home/Home"
import Menus from "./pages/menu/Menus"
const App = () => {
  return (
    <div className="App">
      {/* <main className="overflow-x-hidden">
        <Navbar/>
        <Home/>
        <Menus/>
        <Banner/>
        <Banner2/>
        <Footer/>
      </main> */}
      <main className="overflow-x-hidden">
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/menus' element={<Menus/>}/>
            <Route path='/banner' element={<Banner/>}/>
            <Route path='/banner2' element={<Banner2/>}/>
            
        </Routes>
        <Footer/>
      </Router>
      </main>
    </div>
  )
}

export default App
