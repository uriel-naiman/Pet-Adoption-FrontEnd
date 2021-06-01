import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";

const SingleCard = ({ pet }) => {
    const auth = useAuth();
    
    const handleOnClick = () => {
        auth.savePet(pet);
    };

    return (
        <div className="card w-25 m-2">
            <img className="card-img-top" src={pet.picture} alt="Cute pet"/>
            <div className="card-body">
                <h5 className="card-title">{pet.pet_name}</h5>
                <p className="card-text">{`status: ${pet.adoption_status}`}</p>
                <Link className="btn btn-primary" onClick={handleOnClick} to="/petpage" >See more</Link>
            </div>
        </div>
    );
}
export default SingleCard;