import React from 'react';
import pokeball from '../../images/ball.png'

const Login = () => {
    return (
        <div>
            <img src={pokeball} alt="" />
            <form action="">
                <input type="text" placeholder='Insert your name' />
                <button></button>
            </form>
        </div>
    );
};

export default Login;