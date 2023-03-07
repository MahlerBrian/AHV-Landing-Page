import './Hero.css'


const Hero = ({imageSrc}) => {
  return (
    <div className="hero">
        <img src={imageSrc} alt="EH India Photo" className="hero-image" />
        <p id='hero-subtitle'>EngenderHealth</p>
        <h1 className="hero-title">Amplify Her Voice</h1>
    </div>
  )
}

export default Hero