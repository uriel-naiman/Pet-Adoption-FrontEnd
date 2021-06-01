import { Link } from 'react-router-dom';
import { useAuth } from '../context/auth';

const Navbar = () => {
    const auth = useAuth();
    return (
        <div className="d-flex flex-sm-nowrap pt-2 mx-auto shadow rounded align-items-center justify-content-between mt-2 fixed-top"
            style={{backgroundColor: "#435373", height: '65px', width: '90%'}}>
                <Link className="btn btn-outline-light m-3" to="/profile/home">Home</Link>
                {auth.token && <Link className="btn btn-outline-light m-3" to="/profile/update">Profile</Link>}
                {auth.user.role === "admin" && <Link className="btn btn-outline-light m-3" to="/admin/addpet">Add Pet</Link>}
                {auth.user.role === "admin" && <Link className="btn btn-outline-light m-3" to="/admin">Admin</Link>}
                {auth.token && <Link className="btn btn-outline-light m-3" to="/" onClick={auth.logOut}>Log Out</Link>}
                {!auth.token && <Link className="btn btn-outline-light m-3" to="/" >Log In</Link>}
        </div>
    );
}
export default Navbar;