export default function LoginReducer(state = [], {type, payload}){
    switch(type){
        case 'LOGIN_USER':
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