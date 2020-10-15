import React from 'react';
import { Link } from 'react-router-dom';

export default function homepage() {
    return (
        <div className="ui container">
            <h1>Hi ; This is the Home Page</h1>
            <Link to='/login'>Login</Link>
        </div>
    )
}
