const tempData = [
    {key: "1", email: "johndoe@gmail.com", imageUrl: [{uri: 'https://thepropertyboutique.files.wordpress.com/2017/03/sustainable_buildings.jpg'}], address: "21 Marksons Road, Blouberg, 7441", name: "3 Bedroom Villa", price: "R2,400,000",},
    {key: "2", email: "johndoe@gmail.com", imageUrl: [{uri: 'https://images.prop24.com/220826887/Crop526x328'}], address: "5 Jansen Road, Milnerton, 7441", name: "2 Bedroom Seaside House", price: "R1,380,000",},
    {key: "3", email: "johndoe@gmail.com", imageUrl: [{uri: 'https://assets.themortgagereports.com/wp-content/uploads/2018/07/featured-new-template-1.jpg'}], address: "25 Bloom Street, Cape Town, 8001", name: "4 Bedroom Modern House", price: "R4,950,000",},
    {key: "4", email: "jd@gmail.com", imageUrl: [{uri: 'https://s3-ap-southeast-1.amazonaws.com/static.starproperty.my/star-properties/properties/5c526ab0963776.42301335-thehazelmeridineast/thumbnail/5d2c501c25e6f.jpg'}], address: "22 Aranstone Road, Observatory, 7661", name: "4 Room Apartment Building", price: "R7,450,000",},
  ]

export default function PropertyReducer(state = tempData, {type, payload}){
    switch(type){
        case 'ADD_PROPERTY':
            return[
                ...state, {
                    email: payload.email,
                    name: payload.name,
                    address: payload.address,
                    imageUrl : payload.images,
                    price: payload.price    
                }
            ]
        
        case 'MODIFY_PROPERTY':
            return state.map(item => 
                (item.email == payload.email)
                ? {...item, name: payload.name, address: payload.address, imageUrl: payload.imageUrl, price: payload.price} : item)
                    
        case 'DELETE_PROPERTY':
            return state.filter(function(property){
                return property.address != payload.address;
            });
        
        default:
            return state;
    }

}