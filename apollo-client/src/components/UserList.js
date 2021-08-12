import React, { useEffect } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import UserItem from './UserItem'
import { loadUser } from '../actions/users'


export default function UserList(props) {

    const { users } = useSelector(state => ({
        users: state.users,
    }), shallowEqual);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch]);

    let nodeList = users.map((item, index) => <UserItem {...item} key={index} />)

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {nodeList}
            </tbody>
        </table>
    )

}