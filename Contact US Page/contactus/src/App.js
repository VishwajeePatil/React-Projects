import './App.css';
import Contactform from './Components/Contact Form/Contactform';
import Contactheader from './Components/Contact Header/Contactheader';
import Navigation from './Components/Navbar/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Contactheader/>
      <Contactform/>
    </div>
  );
}

export default App;
