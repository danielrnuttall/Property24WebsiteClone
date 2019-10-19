export function LoginUser( name, email, password){
    return{
        type: 'LOGIN_USER',
        payload: {
            email: email,
            name: name,
            password: password
        }
    }
}