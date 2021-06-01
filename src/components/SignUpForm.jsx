import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/auth";
import { createUser, logIn } from "../lib/api";

const SignUpForm = () => {
  const auth = useAuth();
  const { register, handleSubmit } = useForm();
  const alert = useAlert();

  const handleOnSubmit = async (data) => {
    try {
    const user = await createUser(data);
    const response = await logIn(data);
    auth.saveData(response.token, response.user);
    }catch (err){
      alert.show(err);
    }
  };

  return (
        <form className="d-flex flex-column" onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="mb-3 mt-3 d-flex justify-content-around">
        <div>
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input {...register("firstName")} type="firstName" className="form-control" id="firstName"/>
         </div>
        <div>
            <label htmlFor="lastName" className="form-label">Last Name</label>
          <input {...register("lastName")} type="lastName" className="form-control" id="lastName"/>
        </div>
        </div>    
        <div className="mb-3 d-flex justify-content-around">
        <div>
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input {...register("email")} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div>
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input {...register("phoneNumber")} type="phoneNumber" className="form-control" id="phoneNumber"/>
        </div>
        </div>    
        <div className="mb-3 d-flex justify-content-around">
        <div>
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input {...register("password")} type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div>
          <label htmlFor="exampleInputPassword1" className="form-label">Repeat Password</label>
          <input {...register("password2")} type="password" className="form-control" id="exampleInputPassword2"/>
        </div>
        </div>
        <button type="submit" className="btn btn-primary align-self-center mt-2">Submit</button>
      </form>
    );
}
export default SignUpForm;