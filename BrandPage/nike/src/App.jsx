import logo from './logo.svg';
import './App.css';
import "./app-mediaqueries.css"
import img from "./Assets/brand_logo.png";
import shoes from "./Assets/shoe_image.png";
import flipkart from "./Assets/flipkart.png";
import amazon from "./Assets/amazon.png"
function App() {
  return (
    <div className="App">
      <nav className='container flex'>
        <div className="logo">
          <img src={img} alt="Brand_Logo"/>
        </div>
          <ul className="navUl flex">
            <li href="#" className='links'>MENU</li>
            <li href="#" className='links'>LOCATION</li>
            <li href="#" className='links'>ABOUT</li>
            <li href="#" className='links'>CONTACT</li>
          </ul>
          <button className='Button'>Login</button>
      </nav>
      <div className='main container'>
        <div className='firsthalf'>
          <h1 className='heading'>YOUR FEET DESERVE THE BEST</h1>
          <p className='text-content'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
          <div className='btnsection'>
          <button className='Button'>Shop Now</button>
          <button className='SecondaryButton'>Category</button>
          </div>
          <div className='lastSec'>
            <div>
              <p className='small-text-content'>Also Available On</p>
            </div>
            <div className='icons'>
          <img src={flipkart} alt="" />
          <img src={amazon} alt="" />
          </div>
          </div>
        </div>
        <div className='secondhalf'>
          <img src={shoes} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
