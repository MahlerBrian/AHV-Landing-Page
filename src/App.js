import './App.css';
import India from './assets/India.jpg'
import Logo from './assets/Logo.png'
import Hospital from './assets/Hospital.jpg'
import Worker from './assets/Worker.jpg'
import Hero from './components/Hero';


function App() {
  return (
    <div className="App">
      <Hero imageSrc={India}/>
    </div>
  );
}

export default App;
