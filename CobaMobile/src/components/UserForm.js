import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { addUser } from '../actions/users'

export default function UserForm() {

    const initialUserState = {
        username: "",
        name: "",
        age: ""
    };

    const [user, setUser] = useState(initialUserState);

    const dispatch = useDispatch();

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const saveUser = (event) => {
        const { username, name, age } = user;

        dispatch(addUser(username, name, age))

        setUser(initialUserState)

        event.preventDefault()
    }

    return (
        <form onSubmit={saveUser}>
            <div className="mb-3">
                <label>Username</label>
                <input
                    className="form-control"
                    name="username"
                    type="text"
                    value={user.username}
                    onChange={handleInputChange} />
            </div>
            <div className="mb-3">
                <label>Name</label>
                <input
                    className="form-control"
                    name="name"
                    type="text"
                    value={user.name}
                    onChange={handleInputChange} />
            </div>
            <div className="mb-3">
                <label>Age</label>
                <input
                    className="form-control"
                    name="age"
                    type="number"
                    value={user.age}
                    onChange={handleInputChange} />
            </div>
            <button className="btn btn-primary" type="submit">Save</button>
            <Link to="/" className="btn btn-warning">Cancel</Link>
        </form>
    );

}