import './timeTaken.css'
const TimeTaken = ({timeTaken}) => {

    return (
        <div className="time-container">
            <p>Time Taken</p>
            <p>{timeTaken}</p>
        </div>
    )
}

export default TimeTaken