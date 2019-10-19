export function addProperty(email, name, address, imageUrl, price){
    return{
        type: 'ADD_PROPERTY',
        payload: {
            email: email,
            name: name,
            address: address,
            imageUrl: imageUrl,
            price: price
        }
    }
};

export function deleteProperty(location){
    return{
        type: 'DELETE_PROPERTY',
        payload: {
            location: location
        }
    }
}

export function modifyProperty(email, name, address, imageUrl, price){
    return{
        type: 'MODIFY_PROPERTY',
        payload: {
            email: email,
            name: name,
            address: address,
            imageUrl: imageUrl,
            price: price   
        }
    }
};