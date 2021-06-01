import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import CardsList from '../profile/CardsList';
import {getSavedPetsByUserId} from '../../lib/petApi';

const SavedPetPage = ({ petsArray }) => {
    const auth = useAuth();
    const [pets, setPets] = useState([]);

    useEffect(async () => {
        const data = await getSavedPetsByUserId(auth.user.id, auth.token);
        setPets(data.pets);
      }, []);

    return (
        <>
        <div className="card h-75 shadow rounded w-50 align-self-center mb-2" style={{marginTop: "100px" }}>
        <div className="card-body d-flex flex-column justify-content-around align-items-center">
            <h2 className="card-title text-center">{`${auth.user.firstName}'s saved Pets`}</h2>
            <div className="d-flex w-100 justify-content-around">
            <Link className="m-5 btn btn-primary" to="/profile/petPage">Pets Page</Link>
            <Link className="m-5 btn btn-primary" to="/profile/savedPets">My Saved Pets</Link>
            </div>
        </div>
    </div>
    {!pets && 
     <div className="card h-75 mt-5 shadow rounded w-50 align-self-center mb-2 d-flex flex-wrap" >
         <h3 className="text-center">you currently do not have any saved pets</h3>
     </div>}
      {pets && <CardsList petsArray={pets}/>}
    
    </>
    );
}
export default SavedPetPage;