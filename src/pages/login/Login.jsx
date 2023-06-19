import { NavLink } from 'react-router-dom'
import './Login.scss'
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';


const Login = () => {
    const { login } = useContext(AuthContext);

    const handleLogin = () => {
        login();
    }
    return (
        <>
            <div className="login">
                <div className="card">
                    <div className="left">
                        <h1>Hello World.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus pariatur ex quod consequatur fugiat laboriosam debitis nisi quasi excepturi?</p>
                        <span>Don't You have an account?</span>
                        <NavLink to="/register"><button>Register</button></NavLink>
                    </div>
                    <div className="right">
                        <h1>Login</h1>
                        <form>
                            <input type="text" placeholder='Username' />
                            <input type="password" placeholder='Password' />
                            <button type='submin' onClick={handleLogin}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
