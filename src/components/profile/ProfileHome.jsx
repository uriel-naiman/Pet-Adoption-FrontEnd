import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth';

const ProfileHome = () => {
    const auth = useAuth();
return (
    <div className="card h-75 mt-5 shadow rounded w-50 align-self-center" >
        <div className="card-body d-flex flex-column justify-content-around align-items-center">
            <h2 className="card-title text-center m-5">{`Welcome ${auth.user.firstName} ${auth.user.lastName} to your homepage!`}</h2>
            <div className="d-flex w-100 justify-content-around">
                <Link className="m-5 btn btn-primary" to="/profile/petPage">Pets Page</Link>
                <Link className="m-5 btn btn-primary" to="/profile/savedPets">My Saved Pets</Link>
            </div>
            <Link className="btn btn-primary" to="/search/basic">Search</Link>
        </div>
    </div>
);
}
export default ProfileHome;