import { NavLink } from 'react-router-dom';
import './Register.scss';

const Register = () => {
    return (
        <>
            <div className="register">
                <div className="card">
                    <div className="right">
                        <h1>Register</h1>
                        <form action="">
                            <input type="text" placeholder='Username' />
                            <input type="email" placeholder='E-mail' />
                            <input type="password" placeholder='Password' />
                            <input type="text" placeholder='Name' />
                            <button>Register</button>
                        </form>
                    </div>
                    <div className="left">
                        <h1>I Am Social.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus pariatur ex quod consequatur fugiat laboriosam debitis nisi quasi excepturi?</p>
                        <span>Do You have an account?</span>
                        <NavLink to="/login"><button>Login</button></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
