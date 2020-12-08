import React from 'react';
import Nav from './Nav';
import '../styles/Layout.css'

export default ({authenticate, currentUser, children, history}) => (
    <div className='layout'>
        <Nav
        authenticate={authenticate}
        currentUser={currentUser}
        history={history}
        />
        <div style={{display:"flex", height: "100%vh", width: "100%vh", flexGrow: 1, alignItems: "center", justifyContent: 'center'}}>
            {children}
        </div>
    </div>
)

