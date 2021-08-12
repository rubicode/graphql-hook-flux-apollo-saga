import { useDispatch } from 'react-redux'

import { resendUser } from '../actions/users'

export default function UserItem(props) {
    const dispatch = useDispatch();

    const resend = () => dispatch(resendUser(props.username, props.name, props.age))
    const remove = () => { }

    return (
        <tr>
            <td>{props.username}</td>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>
                <button type="button" className="btn btn-warning" onClick={props.sent ? remove : resend}>{props.sent ? 'Delete' : 'Resend'}</button>

            </td>
        </tr>
    )
}