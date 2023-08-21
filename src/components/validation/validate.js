const validate = (destinations) => {
    const noSelection = ""
    const isValid = Object.values(destinations).every(
        (destination) => destination.planet!==noSelection && destination.vehicle!==noSelection)
    return isValid
}

export default validate