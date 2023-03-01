import React from 'react';
import SignupForm from '../components/SignupForm/SignupForm';
const SignUp = () => {
    return (
        <div className="mainContainerSignup">
        <img className='signupImage' src="signup1.avif" alt="signup" />
            <SignupForm/>
        </div>
    );
};

export default SignUp;