import { Route, Routes } from "react-router-dom";
import Landing from "../components/page/staticContent/Landing";
import FindFalcone from "../components/page/appLogic/findFalcone/FindFalcone"
import Result from "../components/page/appLogic/result/Result"
import Story from "../components/page/staticContent/Story";
import Planets from "../components/page/staticContent/Planets";
import Vehicles from "../components/page/staticContent/Vehicles";

const BrowserRoutes = () => {

    return (
    <Routes>
        <Route path="/find" element = {<FindFalcone/>} />
        <Route path="/result" element = {<Result/>} />
        <Route path="/story" element = {<Story/>} />     
        <Route path="/planets" element = {<Planets/>} />     
        <Route path="/vehicles" element = {<Vehicles/>} />                    
        <Route path="/" element = {<Landing/>} />
    </Routes>
    )
}

export default BrowserRoutes