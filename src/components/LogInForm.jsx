import React from "react";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/auth";
import { logIn } from "../lib/api";

const LogInForm = () => {
  const auth = useAuth();
  const { register, handleSubmit } = useForm();
  const alert = useAlert();
  
    const handleOnSubmit = async (data) => {
      try{
    const response = await logIn(data);
    auth.saveData(response.token, response.user);
      }catch(err){
        alert.show(err.message);
      }
  };

  return (
       <form className="d-flex flex-column" onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp"
          {...register("email", { required: true })}/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" 
          {...register("password", { required: true, minLength: 3, maxLength: 20 })}/>
        </div>
        <input className="btn btn-primary align-self-center" type="submit" />
      </form>
    );
}
export default LogInForm;