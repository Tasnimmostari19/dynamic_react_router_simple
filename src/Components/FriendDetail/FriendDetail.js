import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    const history = useHistory();

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])


    const handleBtn = () => {

        history.push('/friends');
    }

    return (
        <div>
            <h2>Friend detail comming soon: {friendId}</h2>
            <h1>{friend.name}</h1>
            <h2>{friend.phone}</h2>
            <h5>{friend.wensite}</h5>
            <p>Works at:{friend.company?.name}</p>
            <button onClick={handleBtn}>See all Friends</button>
        </div>
    );
};

export default FriendDetail;