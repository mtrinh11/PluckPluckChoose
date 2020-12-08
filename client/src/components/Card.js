import React from 'react';

export default (details) => {


    return (
        <div>
            {details.downvotes}
            {details.upvotes}
            <img src={details.url} />
        </div>
    )
}