const initState = {
    properties: [
        {name: 'Cape Town', location:'47.444, -12.176', imageURL:'https://www.spectrum.com/content/dam/spectrum/residential/en/images/speed-test/ra/arrow-down.svg', price:'R27'},
        {name: 'Johburg', location:'47.444, -12.176', imageURL:'https://www.spectrum.com/content/dam/spectrum/residential/en/images/speed-test/ra/arrow-down.svg', price:'R27'}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer