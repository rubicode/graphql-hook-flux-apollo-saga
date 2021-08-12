import UserForm from "./UserForm";
import UserList from "./UserList";

export default function UserBox(props) {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <UserForm />
                </div>
                <UserList />
            </div>
        </div>
    )
}