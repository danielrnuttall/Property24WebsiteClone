export function registerUser(email, name, password){
    return{
        type: 'ADD_USER',
        payload: {
            email: email,
            name: name,
            password: password
        }
    }
}