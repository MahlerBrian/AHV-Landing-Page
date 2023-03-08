import { useInView } from 'react-intersection-observer'
import './DonateForm.css'

const DonateForm = () => {
  
    const { ref, inView } = useInView({
        threshold: 0.4,
        })


    const renderDonateForm = () => {
        return <>
                <h1>Give Today</h1>
                <iframe width='500' height='1200' src='https://host.nxt.blackbaud.com/donor-form?svcid=renxt&formId=49808f28-35a6-43ab-bbbe-7279f71f56b8&envid=p-CGog7MA-MUufU5LYfQ_pBQ&zone=usa'></iframe>
            </>
    }
  
  
    return (
    <div className={inView ? "donate-form donate-form--zoom" : "donate-form"} ref={ref}>
        {renderDonateForm()}
    </div>
  )
}


export default DonateForm