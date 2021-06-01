import { useForm } from "react-hook-form";
import { createPet, uploadPetImage } from "../../lib/petApi";
import { useAuth } from "../../context/auth";
import { useAlert } from 'react-alert';

const PetForm = () => {
    const auth = useAuth();
    const { register, handleSubmit } = useForm();
    const alert = useAlert();

    const handleOnSubmit = async (data) => {
    try{
      const image = data.picture[0];
      const response = await createPet(data, auth.user.id, auth.token);
      if(image){
        const formData = new FormData();
        formData.append('image', image);
        await uploadPetImage(response.pet[0].id, formData, auth.token);
      } 
      alert.show("Added Successfully!");
      setTimeout(() => { 
        window.history.back();
      }, 3000);
    } catch (err) {
        alert.show(err);
    }
  };

  return (
    <div className="card shadow rounded w-75 align-self-center mb-3" style={{marginTop: "100px" }}>
      <h3 className="mt-2 align-self-center">{`Hey ${auth.user.firstName}, lets add a pet!`}</h3>
        <form className="d-flex flex-column w-75 mx-auto" onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="m-1">
        <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">1. Animal Type</label>
                    <select {...register("type")} >
                    <option defaultValue="">Choose...</option>
                    <option value="cat">Cat</option>
                    <option value="dog">Dog</option>
                    </select>
        </div>
        <div className="m-1">
          <label htmlFor="name" className="form-label">2. Name</label>
          <input {...register("name")} type="firstName" className="form-control" id="firstName"/>
         </div>
        <div className="m-1">
        <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">3. Status</label>
                    <select {...register("status")} >
                    <option defaultValue="">Choose...</option>
                    <option value="fostered">Fostered</option>
                    <option value="adopted">Adopted</option>
                    <option value="available">Available</option>
                    </select>
        </div> 
         <div className="form-group">
            <label htmlFor="exampleFormControlFile1">Picture</label>
            <input {...register("picture")} type="file" className="form-control-file" id="exampleFormControlFile1" />
        </div>
         <div className="m-1">
            <label htmlFor="height" className="form-label">4. Height</label>
          <input {...register("height")} className="form-control" />
        </div>
        <div className="m-1">
            <label htmlFor="weight" className="form-label">5. Weight</label>
          <input {...register("weight")} className="form-control" />
        </div>    
        <div className="m-1">
          <label className="form-label">6. Color</label>
          <input {...register("color")} className="form-control" />
        </div>
        <div className="m-1">
          <label htmlFor="shortBio" className="form-label">7. Short Bio</label>
          <textarea {...register("bio")} type="text" className="form-control" rows="4"/>
        </div>
        <div className="m-1">
        <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">8. Hypoallergenic</label>
                    <select {...register("hypo")} >
                    <option defaultValue="">Choose...</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                    </select>
        </div>
        <div className="m-1">
          <label htmlFor="shortBio" className="form-label">9. Dietary Restrictions</label>
          <textarea {...register("diet")} type="text" className="form-control" rows="4"/>
        </div>
        <div className="m-1">
        <label className="form-label" htmlFor="inlineFormCustomSelect">10. Breed</label>
                    <select {...register("breed")} className="mr-2">
                    <option defaultValue="">Choose...</option>
                    <option value="poodle">Poodle</option>
                    <option value="siamese">Siamese</option>
                    </select>
        </div>
        <div className="m-1">
          <label className="form-label">11. Owner Email</label>
          <input {...register("email")} className="form-control" />
        </div>
       <button type="submit" className="btn btn-primary align-self-center mt-2 mb-2">Submit</button>
      </form>
      </div>
    );
};
export default PetForm;