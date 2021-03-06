import { SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: localStorage.getItem('token')? true : false,
    loading: false,
    isAgent: localStorage.getItem('agent')? true : false,
};

export default function(state = initialState, action) {
    
    const { type, payload } = action
    
    switch(type) {
       
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.access)
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                token: payload.access
            }
        
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                loading: true
            }
        
        case SIGNUP_FAIL:
            alert('Cannot create user. Please try again!')
            return {
                ...state,
                isAuthenticated: false,
                loading: false
            }
        case LOGIN_FAIL:
            alert('Wrong email or password. Please try again!')
            return {
                ...state,
                isAuthenticated: false,
                loading: false
            }

        case LOGOUT:
            localStorage.removeItem('token')
            localStorage.removeItem('agent')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
        default:
            return state
    }
}