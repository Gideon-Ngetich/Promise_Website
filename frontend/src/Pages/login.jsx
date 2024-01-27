import React from 'react';

const LoginForm = () => {
    return (
        <div className='wrapper flex bg slateblue w-full h-full text-3xl m-0 px-0 border-box '>
            <form action="" >
                <h1 className='text-xl flex justif-center items-center' style={{fontFamily: 'Courgette'}}>Login</h1>
                <div className='input-box position:relative w-full h-full bg-salmon'>
                    <input type="text" placeholder='username' required />
                </div>
                <div className="input-box color:red" >
                <input type = "password" placeholder='password'required/>
                    <label><input type="checkbox" />Remember me</label>
                </div>
                <div className='remember-forgot'>
                    <label><input type="checkbox" /></label>
                    <a href='#'>Forgot password?</a>
                </div>
                <button type="submit">Login</button>
                <div className ='register-link'></div>
            </form>
        </div>
    );
}

export default LoginForm;
