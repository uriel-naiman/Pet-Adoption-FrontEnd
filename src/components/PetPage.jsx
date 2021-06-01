import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import { getIsPetSaved, savePet, unSavePet, adoptPet, fosterPet, returnPet, deletePet } from "../lib/api";

const PetPage = () => {
    const auth = useAuth();
    const [isSaved, setIsSaved] = useState(false);
    const { currentPet } = auth;
    const alert = useAlert();
    
    useEffect(async () => {
        const data = await getIsPetSaved(auth.user.id, currentPet.id, auth.token);
    if (data.pet[0])
    setIsSaved(true);
      }, []);

    const handlePrev = () =>{
        window.history.back();
    };
    const handleReturn = async () => {
        try {
            const data = await returnPet(auth.user.id, currentPet.id, auth.token);
            alert.show("Pet returned successfully");
            setTimeout(() => { 
                window.history.back();
              }, 3000);
        } catch(err) {
            alert.show(err.message);
        }
    };
    const handleFoster = async () => {
        try {
            const data = await fosterPet(auth.user.id, currentPet.id, auth.token);
            alert.show("Pet fostered successfully");
            setTimeout(() => { 
                window.history.back();
              }, 3000);
        } catch(err) {
            alert.show(err.message);
        }
    };
    const handleAdopt = async () => {
        try {
            const data = await adoptPet(auth.user.id, currentPet.id, auth.token);
            alert.show("Pet adopted successfully");
            setTimeout(() => { 
                window.history.back();
              }, 3000);
        } catch(err) {
            alert.show(err.message);
        }
    };
    const handleSavePet = async () => {
        try {
            const data = await savePet(auth.user.id, currentPet.id, auth.token);
            setIsSaved(true);
            alert.show("Pet saved successfully");
        } catch(err) {
            alert.show(err.message);
        }
    };
    const handleUnSavePet = async () => {
        try {
            const data = await unSavePet(auth.user.id, currentPet.id, auth.token);
            setIsSaved(false);
            alert.show("Pet unsaved successfully");
        } catch(err) {
            alert.show(err.message);
        }
    };
    const handleDelete = async () => {
        try {
            await deletePet(auth.user.id, currentPet.id, auth.token);
            alert.show("Pet deleted successfully");
            setTimeout(() => { 
                window.history.back();
              }, 3000);
        } catch(err) {
            alert.show(err.message);
        }
    };

    return(
        <div className="card shadow rounded w-75 align-self-center mb-3 p-3" style={{marginTop: "100px" }}>
            <h2 className="mt-2 align-self-center"><u>{`${currentPet.pet_name}'s page`}</u></h2>
            <h3>{`Type: ${currentPet.pet_type}`}</h3>
            <h3>{`Status: ${currentPet.adoption_status}`}</h3>
            <h3>{`About me: ${currentPet.bio}`}</h3>
            <h3>{`Breed: ${currentPet.breed}`}</h3>
            <h3>{`Color: ${currentPet.color}`}</h3>
            <h3>{`Height: ${currentPet.pet_height}`}</h3>
            <h3>{`Weight: ${currentPet.pet_weight}`}</h3>
            <h3>{`Dietary Restrictions: ${currentPet.dietary_restrictions}`}</h3>
            <h3>{`HypoAllergenic(1 for yes, 0 if not): ${currentPet.hypoallergenic}`}</h3>
            <h3>{`Date Added: ${currentPet.created_date}`}</h3>
            <img className="card-img-top w-50 h-50" src={currentPet.picture} alt="Cute pet" />
            <div>
                <button className="btn btn-primary m-3" onClick={handlePrev}>Previous</button>
                {auth.user.role === "admin" && <Link className="btn btn-primary m-3" to="/admin/updatepet">Update</Link>}
                {auth.user.role === "admin" && <button className="btn btn-primary m-3" onClick={handleDelete}>Delete</button>}
                {isSaved && <button className="btn btn-primary" onClick={handleUnSavePet}>UnSave</button>}
                {!isSaved && <button className="btn btn-primary" onClick={handleSavePet}>Save</button>}
                {auth.user.id === currentPet.owner_id && currentPet.adoption_status === "adopted" && 
                <button className="btn btn-primary m-2" onClick={handleReturn}>Return Pet</button>}
                {auth.user.id === currentPet.owner_id && currentPet.adoption_status === "fostered" && 
                <div><button className="btn btn-primary m-2" onClick={handleReturn}>Return Pet</button>
                <button className="btn btn-primary m-2" onClick={handleAdopt}>Adopt Pet</button></div>}
                {auth.user.id !== currentPet.owner_id && currentPet.adoption_status === "available" && 
                <div><button className="btn btn-primary m-2" onClick={handleFoster}>Foster Pet</button>
                <button className="btn btn-primary m-2" onClick={handleAdopt}>Adopt Pet</button></div>}
            </div>
      </div>
    );
};
export default PetPage;