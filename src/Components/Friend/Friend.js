import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, phone, website, address } = props.friend;

    const history = useHistory();

    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: '10px',
        margin: '10px'
    };
    const url = `/friend/${id}`;

    const handleClick = () => {
        history.push(`${url}`)
        // history.push(`/friend/${id}`)
    }


    return (
        <div style={friendStyle}>
            <h2>This is a single friend</h2>
            <h3>I am {name}</h3>
            <h5>phone: {phone}</h5>
            <p>visite: {website}</p>
            <p><small>city: {address.city}</small></p>
            <Link to={url}>Visit Me</Link>
            {/* <Link to={`/friend/${id}`}>Visit Me</Link> */}
            {/* <br />
            <Link to={url}>
                <button>Visit me</button>
            </Link> */}
            <br />
            <button onClick={handleClick}>Visit me 2</button>
        </div>
    );
};

export default Friend;