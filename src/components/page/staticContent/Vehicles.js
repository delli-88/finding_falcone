import './vehicles.css'
import Header from '../../layout/header/Header'
import Footer from '../../layout/footer/Footer'
import spacePodImg from '../../../images/space_pod.png'
import spaceRocketImg from '../../../images/space_rocket.png'
import spaceShuttleImg from '../../../images/space_shuttle.png'
import spaceShipImg from '../../../images/space_ship.png'
import { useNavigate } from 'react-router-dom'

const Vehicles = () => {
    const navigate = useNavigate()
    const handleBackButton = () => {
        const navigateTo = '/'
        navigate(navigateTo)
    }
    const headerContent = "Vehicles"
    const backButtonContent = "Back to Home"
    return (
        <>
        <Header/>
        <div className='display-vehicles'>
            <div className='vehicles-heading'>
                <h1>{headerContent}</h1>
            </div>
            <div className='vehicles-container'>
                <img className="vehicle-img" src={spacePodImg} alt='space-pod'></img>
                <img className="vehicle-img" src={spaceRocketImg} alt='space-rocket'></img>
                <img className="vehicle-img" src={spaceShuttleImg} alt='space-shuttle'></img>
                <img className="vehicle-img" src={spaceShipImg} alt='space-ship'></img>
            </div>
            <div className='back-button' onClick={handleBackButton}>
                <button>{backButtonContent}</button>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Vehicles