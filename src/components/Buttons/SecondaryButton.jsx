import React from 'react';

const SecondaryButton = ({children, className = ''}) => {
    console.log(className);
    return <button className={`btn btn-secondary ${className}`}>{children}</button>;
};

export default SecondaryButton;