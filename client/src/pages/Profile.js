import React from 'react';
import {NavLink} from 'react-router-dom'

export default () => {

    return (
        <div style={{margin: '50px', alignContent: ''}}>
            <NavLink
                to="/profile/createpost"
                >
                <h3>Create Post</h3>
            </NavLink>
            <NavLink
                to="/profile/manage"
                >
                <h3>Manage Posts</h3>
            </NavLink>
        </div>
        
    )
}
