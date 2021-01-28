import React from 'react';

const SignOut = (props) => {

    props.logout("");

    return (
        <div>
            <h1> You are signed out </h1>
            <p> Please sign in to buy tickets </p>
        </div>
    );
};

export default SignOut;