import './App.css'
import Items from './Components/Items'
import Navbar from './Components/Navbar'
import Reviews from './Components/Reviews'
import Footer from './Components/Footer'
import { Slidebar1, Slidebar3, Slidebar4, Slidebar5, Slidebar6 } from './Components/Slidebar1'
function App() {
 
  return(
    <>
    <Navbar/>
    <Slidebar1/>
    <Items/>
    <Slidebar3/>
    <Slidebar4/>
    <Slidebar5/>
    <Reviews/>
    <Slidebar6/>
    <Footer/>
    </>
  )
}

export default App
