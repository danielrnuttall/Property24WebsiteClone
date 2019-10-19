const tempData = [{name: "John Doe", email: "johndoe@gmail.com", password: "123"}, {name: "Joe Dohn", email: "jd@gmail.com", password: "123"}]

export default function UserReducer(state = tempData, {type, payload}){
    switch(type){
        case 'ADD_USER':
            return[
                ...state, {
                    name: payload.name,
                    email: payload.email,
                    password: payload.password    
                }
            ]

        default: 
            return state;
    }
}