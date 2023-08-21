import Header from "../../layout/header/Header"
import Footer from "../../layout/footer/Footer";
import { useNavigate } from 'react-router-dom';
import './landing.css'

const Landing = () => {
    const navigate = useNavigate()

    const handleStartClick = () => {
        const navigateTo = '/find'
        navigate(navigateTo)
    }

    const handleStoryButton = () => {
        const navigateTo = '/story'
        navigate(navigateTo)
    }
    
    const handlePlanetsButton = () => {
        const navigateTo = '/planets'
        navigate(navigateTo)
    }

    const handleVehiclesButton = () => {
        const navigateTo = '/vehicles'
        navigate(navigateTo)
    }

    const headerContent = "Ready To Find The Queen ?"
    const startButtonContenrt = "Let's Go"
    const storyButtonContent = "Story"
    const planetsButtonContent = "Explore Planets"
    const vehiclesButtonContent = "Explore Vehicles"
    
    return (
        <>
            <Header />
                <div className="hero-container">
                    <h1 className="hero-heading">{headerContent}</h1>
                    <div>
                        <button className="hero-button" onClick={handleStartClick}>{startButtonContenrt}</button>
                    </div>
                    <div className="horizontal-line">
                        <button className="sub-hero" onClick={handleStoryButton}>{storyButtonContent}</button>
                    </div>
                    <div>
                        <button className="sub-hero" onClick={handlePlanetsButton}>{planetsButtonContent}</button>
                    </div>
                    <div >
                        <button className="sub-hero" onClick={handleVehiclesButton}>{vehiclesButtonContent}</button>
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export default Landing