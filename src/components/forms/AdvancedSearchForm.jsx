import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";

const AdvancedSearchForm = () => {
  const auth = useAuth();
  const { register, handleSubmit } = useForm();
  
  const handleOnSubmit = async (data) => {
    console.log(data);
    
  };

  return (
    <div className="card h-75 shadow rounded w-75 align-self-center" style={{marginTop:"100px"}}>
          <div className="d-flex justify-content-around">
          <h2 className="align-self-center"><u>Advanced Search</u></h2>
          <Link className="btn btn-primary m-1" to="/search/basic">Basic Search</Link>
          </div>
    <form onSubmit={handleSubmit(handleOnSubmit)} className="d-flex flex-column align-self-center mt-5">
    <div className="d-flex justify-content-around">
        <div className="col-auto my-1">
        <label className="mr-sm-2" for="inlineFormCustomSelect">Animal Type</label>
            <select {...register("type")} className="custom-select mr-sm-2" id="inlineFormCustomSelect">
            <option selected value="">Choose...</option>
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
            </select>
        </div>
        <div className="col-auto my-1">
        <label className="mr-sm-2" for="inlineFormCustomSelect">Status</label>
            <select {...register("status")} className="custom-select mr-sm-2" id="inlineFormCustomSelect">
            <option selected value="">Choose...</option>
            <option value="fostered">Fostered</option>
            <option value="adopted">Adopted</option>
            <option value="available">Available</option>
            </select>
        </div>
        </div>
        <div className="d-flex justify-content-around">
            <div className="col-auto my-1">
            <label htmlFor="height" className="form-label ">Height</label>
            <input {...register("height")} type="height" className="form-control" id="height"/>
            </div>
            <div className="col-auto my-1">
            <label htmlFor="weight" className="form-label ">Weight</label>
            <input {...register("weight")} type="weight" className="form-control" id="weight"/>
            </div>
        </div>
        <div className="col-auto my-1 w-75 align-self-center">
          <label htmlFor="name" className="form-label ">Name</label>
          <input {...register("name")} type="name" className="form-control" id="name"/>
        </div>
        <div className="col-auto my-1 align-self-center">
        <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
    </div>
   );
}

export default AdvancedSearchForm;