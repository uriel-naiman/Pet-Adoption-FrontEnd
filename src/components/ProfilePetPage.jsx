import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/auth';
import { getPetsByUserId } from '../lib/api';
import CardsList from './CardsList';

const ProfilePetPage = () => {
    const auth = useAuth();
    const [pets, setPets] = useState([]);

    useEffect(async () => {
        const data = await getPetsByUserId(auth.user.id, auth.token);
        setPets(data.pets);
      }, []);

    return (
        <>
        <div className="card h-75 shadow rounded w-50 align-self-center" style={{marginTop: "100px" }}>
        <div className="card-body d-flex flex-column justify-content-around align-items-center" >
            <h2 className="card-title text-center">{`${auth.user.firstName}'s Pet Page!`}</h2>
            <div className="d-flex w-100 justify-content-around">
            <Link className="m-5 btn btn-primary" to="/profile/petPage" >Pets Page</Link>
            <Link className="m-5 btn btn-primary" to="/profile/savedPets">My Saved Pets</Link>
            </div>
         </div>
    </div>
    <div>
     {!pets && 
     <div className="card h-75 mt-5 shadow rounded w-50 align-self-center mb-2 d-flex flex-wrap" >
         <h3 className="text-center">you currently do not own or foster any pets</h3>
     </div>}
      {pets && <CardsList petsArray={pets}/>}
    </div>
    </>
    );
}
export default ProfilePetPage;