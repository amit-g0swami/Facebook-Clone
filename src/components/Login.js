import React from 'react'
import './Login.css'
import Button from '@material-ui/core/Button'
import { auth, provider } from '../firebase'
import { actionTypes } from '../reducer'
import { useStateValue } from '../StateProvider'

const Login = () => {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(res => {
                console.log(res.user)
                dispatch({
                    type: actionTypes.SET_USER,
                    user: res.user,
                })
            })
            .catch((err) => alert(err.message))
    }
    return (
        <div className='login'>
            <div className='login_logo'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' alt='facebook logo' />
                <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg' alt='facebook text logo' />
            </div>
            <Button type='submit' onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login