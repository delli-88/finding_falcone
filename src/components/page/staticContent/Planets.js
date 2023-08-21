import './planets.css'
import Header from "../../layout/header/Header"
import Footer from "../../layout/footer/Footer";
import donlonImg from  '../../../images/dolon.png'
import enchaiImg from '../../../images/enchai.png'
import jebingImg from '../../../images/jebing.png'
import sapirImg from '../../../images/sapir.png'
import lerbinImg from '../../../images/lerbin.png'
import pingasorImg from '../../../images/pingasor.png'
import { useNavigate } from 'react-router-dom'


const Planets = () => {
    const navigate = useNavigate()
    const handleBackButton = () => {
        const navigateTo = '/'
        navigate(navigateTo)
    }
    const headerContent = "Planets"
    const backButtonContent = "Back to Home"
    return (
        <>
        <Header/>
        <div className='display-planets'>
            <div className='planets-heading'>
                <h1>{headerContent}</h1>
            </div>
            <div className='planets-container'>
                <img className="planet-img" src={donlonImg} alt='donlon'></img>
                <img className="planet-img" src={enchaiImg} alt='enchai'></img>
                <img className="planet-img" src={jebingImg} alt='jebing'></img>
                <img className="planet-img" src={sapirImg} alt='sapir'></img>
                <img className="planet-img" src={lerbinImg} alt='lerbin'></img>
                <img className="planet-img" src={pingasorImg} alt='pingasor'></img>
            </div>
            <div className='back-button' onClick={handleBackButton}>
                <button>{backButtonContent}</button>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Planets