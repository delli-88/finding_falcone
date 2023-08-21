import './result.css'
import Header from "../../../layout/header/Header"
import Footer from "../../../layout/footer/Footer"
import {useNavigate ,useLocation } from 'react-router-dom';

const Result = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const {result, timeTaken} = location.state || {}

    const statusSuccess = "success"

    const handleButton = () => {
        const navigateTo = '/find'
        navigate(navigateTo)
    }

    const successHeaderContent1 = "Success!"
    const successHeaderContent2 = "Congratulations on Finding Falcone. King Shan is mighty pleased."
    const planetFoundContent = `Planet found : ${result?.planet_name}`
    const timeTakenContent = `Time Taken : ${timeTaken}`
    const findAgainContent = "Start Again ?"

    const failHeaderContent = "Oh No!"
    const queenNotFoundContent = "Queen not found"
    const tryAgainContent = "Try Again ?"

    const infoContent1 = "You need to select the destination planets with vehicles to see the result"
    const infoContent2 = "Head over to Planet selection"
    const planetSelectionContent = "Planet Selection"

    return (
        <>
            <Header/>
            <div className="card-container">
            {result?(
            result.status===statusSuccess?(
                <div className="success-card">
                    <h1>{successHeaderContent1}</h1>
                    <p>{successHeaderContent2}</p>
                    <p>{timeTakenContent}</p>
                    <p>{planetFoundContent}</p>
                    <button className="action-button" onClick={handleButton}>{findAgainContent}</button>
                </div>
            ):(
                <div className="failure-card">
                    <h1>{failHeaderContent}</h1>
                    <p>{queenNotFoundContent}</p>
                    <button className="retry-button" onClick={handleButton}>{tryAgainContent}</button>
                </div>
            )
            ):(
            <div className="info-card">
                <h1>{infoContent1}</h1>
                <h2>{infoContent2}</h2>
                <button className="info-button" onClick={handleButton}>{planetSelectionContent}</button>
            </div>
            )}
            </div>
            <Footer/>
        </>
    )
}

export default Result