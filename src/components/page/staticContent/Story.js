import Header from "../../layout/header/Header"
import Footer from "../../layout/footer/Footer"
import kingShanImg from '../../../images/king_shan.png'
import './story.css'
import { useNavigate } from 'react-router-dom'


const Story = () => {
    const navigate = useNavigate()
    const handleBackButton = () => {
        navigate('/')
    }
    const headerContent = "The Story"
    const backButtonContent = "Back to Home"
    const storyContent1 = "Our problem is set in the planet of Lengaburu…in the distant distant galaxy of Tara B. After the recent war with neighbouring planet Falicornia, King Shan has exiled the Queen of Falicornia for 15 years"
    const storyContent2 = "Queen Al Falcone is now in hiding. But if King Shan can find her before the years are up, she will be exiled for another 15 years…."
    return (
        <>
        <Header/>
        <div className="display-story">
            <div className='story-conatiner'>
                <div>
                    <h1>{headerContent}</h1>
                    <div>
                        <p>{storyContent1}</p>
                        <p>{storyContent2}</p>
                    </div>
                </div>
                <div>
                    <div className='img-container'>
                        <img className="king-shan-img" src={kingShanImg} alt='king_shan'/>
                    </div>
                </div>
            </div>
            <div className='back-button' onClick={handleBackButton}>
                <button>{backButtonContent}</button>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Story