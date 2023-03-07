import { useInView } from 'react-intersection-observer'
import './Slider.css'

const Slider = ({ imageSrc, title, subtitle, flipped }) => {
  
    const { ref, inView } = useInView({
        threshold: 0.4,
    })
  
  
    const renderContent = () => {
        if(!flipped) {
            return <>
            <img src={imageSrc} alt='slider-image' />
            <div className='slider-content'>
                <h1 className='slider-title'>{title}</h1>
                <p>{subtitle}</p>
            </div>
            </>
        } else {
            return <>
            <div className='slider-content'>
                <h1 className='slider-title'>{title}</h1>
                <p>{subtitle}</p>
            </div>
            <img src={imageSrc} alt='slider-image' />
            </>
        }
  }
  
  
    return (
    <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
        {renderContent()}
    </div>
  )
}

export default Slider