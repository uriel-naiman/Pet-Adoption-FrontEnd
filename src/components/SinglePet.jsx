import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";

const SinglePet = ({pet}) => {
    const auth = useAuth();
    const handleOnClick = () =>{
        auth.savePet(pet);
    };

    return(
            <li className="list-group-item d-flex justify-content-between" >
            <span>{pet.pet_name}</span>
            <Link className=" btn btn-primary btn-sm" onClick={handleOnClick} to="/petpage">Expand</Link>
            </li>
    );
};

export default SinglePet;