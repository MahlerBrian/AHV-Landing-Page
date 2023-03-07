import { useInView } from 'react-intersection-observer'
import './DonateForm.css'

const DonateForm = () => {
  
    const { ref, inView } = useInView({
        threshold: 0.4,
        })


    const renderDonateForm = () => {
        return <>
                <h1>Give Today</h1>
                <div id="blackbaud-donation-form_49808f28-35a6-43ab-bbbe-7279f71f56b8"></div>
            </>
    }
  
  
    return (
    <div className={inView ? "donate-form donate-form--zoom" : "donate-form"} ref={ref}>
        {renderDonateForm()}
    </div>
  )
}


export default DonateForm