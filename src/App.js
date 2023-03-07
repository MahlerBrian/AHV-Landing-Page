import './App.css';
import India from './assets/India.jpg'
import Logo from './assets/Logo.png'
import Hospital from './assets/Hospital.jpg'
import Worker from './assets/Worker.jpg'
import Hero from './components/Hero';
import Slider from './components/Slider';


function App() {
  return (
    <div className="App">
      <Hero imageSrc={India}/>
      <Slider imageSrc={Worker} 
              title={`It's time to amplify her voice!`} 
              subtitle={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, dicta.'}
              flipped={false}
              />
      <Slider imageSrc={Hospital} 
              title={'Stand up for SRHR!'} 
              subtitle={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, dicta.'}
              flipped={true}                
              />
    </div>
  );
}

export default App;