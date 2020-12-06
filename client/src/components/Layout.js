import React from 'react';
import Nav from './Nav';
import '../styles/Layout.css'

export default ({authenticate, currentUser, children, toggleAuthenticated}) => (
    <div className='layout'>
        <Nav
        authenticate={authenticate}
        currentUser={currentUser}
        toggleAuthenticated={toggleAuthenticated}
        />
        <div style={{display:"flex", height: "1000%vh", width: "100%vh", flexGrow: 1, alignItems: "center", justifyContent: 'center'}}>
            {children}
        </div>
    </div>
)

