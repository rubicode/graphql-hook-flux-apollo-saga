import { Link } from "react-router-dom";
import UserList from "./UserList";

export default function UserBox(props) {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <UserList />
                </div>
                <div className="card-footer">
                <Link to="/add" className="btn btn-primary">Tambah</Link>
                </div>
            </div>
        </div>
    )
}