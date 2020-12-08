import React, {useState, useEffect} from 'react';

export default (details) => {

    const [url, setUrl] = useState()

    useEffect( () => {

    }, [])

    return (
        <div>
            {details.downvotes}
            {details.upvotes}
            <img src={details.url} />
        </div>
    )
}