import './App.css';
import India from './assets/India.jpg'
import Hospital from './assets/Hospital.jpg'
import Worker from './assets/Worker.jpg'
import Hero from './components/Hero';
import Slider from './components/Slider';
import DonateForm from './components/DonateForm';
import Navbar from './components/Navbar';


const navbarLinks = [
  {url: '#', title: 'Home'}, 
  {url: 'https://www.engenderhealth.org/about', title: 'About'},
  {url: '#', title: 'Donate'}
]

function App() {
  return (
    <div className="App">
      <Navbar 
        navbarLinks={navbarLinks}
      />
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
      <DonateForm />
    </div>
  );
}

export default App;