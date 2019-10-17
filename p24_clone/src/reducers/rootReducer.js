const initState = {
    properties: [
        {name: 'Cape Town', location:'42.444, -12.176', imageURL:'https://image.iol.co.za/image/1/process/620x349?source=https://inm-baobab-prod-eu-west-1.s3.amazonaws.com/public/inm/media/file/1/2037081/1467202709/image/1935527028.jpg', price:'R27', description:'2 bedroom, has amazing sea view'},
        {name: 'Johburg', location:'47.444, 12.176', imageURL:'https://www.spectrum.com/content/dam/spectrum/residential/en/images/speed-test/ra/arrow-down.svg', price:'R27', description:'4 bedroom, overlooking green hills'}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer