import { setAlert } from './alert'
import { SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from './types'
import axios from 'axios'

export const signup = ({ name, email, password, password2 }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, password, password2 })

    try {
        const res = await axios.post('http://127.0.0.1:8000/api/user/signup', body, config)

        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });

        dispatch(login(email, password))
    } 

    catch (err) {
        dispatch({
            type: SIGNUP_FAIL
        });

        dispatch(setAlert('Error Authenticating', 'error'))
    }
}

export const login = (email, password) => async dispatch => {

    var listings = [];
    axios.get('http://127.0.0.1:8000/api/agent/create/')
    .then((response) => {
        listings = response.data
    }, (error) => {
        alert("Cannot connect to the server. Please try again later!")
    });	


    function findObjectByKey(array, key, value, key2, value2) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] === value && array[i][key2] === value2) {
                return array[i];
            }
        }
        return null;
    }

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password })
    try {
        const res = await axios.post('http://127.0.0.1:8000/api/token/', body, config)
        var array = findObjectByKey(listings, 'email', email, 'password', password);
        if (array != null){
            localStorage.setItem('agent', '1')
        }
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

         //dispatch(setAlert('Authenticated successfully', 'success'))
         window.location = "/";
    } 

    catch (err) {
        dispatch({
            type: LOGIN_FAIL
        });
        dispatch(setAlert('Error Authenticating', 'error'))
    }
}

export const logout = () => dispatch => {
    dispatch(setAlert('logout successful.', 'success'))
    dispatch({ type: LOGOUT })
}