import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/auth";
import { updateUser } from "../lib/api";

const ProfileForm = () => {
  const auth = useAuth();
  const alert = useAlert();
  const { register, handleSubmit } = useForm({
      defaultValues: {
      firstName: `${auth.user.firstName}`,
      lastName: `${auth.user.lastName}`,
      email: `${auth.user.email}`,
      phoneNumber: `${auth.user.phoneNumber}`,
      password: "",
      password2: "",
      text: ""
    }
  });

  const handleOnSubmit = async (data) => {
    const responseData = await updateUser(data, auth.user.id, auth.token);
    alert.show(responseData.message);  
    setTimeout(() => { 
      window.location.reload();
    }, 3000);
  }

    return(
      <div className="card h-75 shadow rounded w-75 align-self-center" style={{marginTop:"100px"}}>
            <h3 className="mt-1 align-self-center"><u>Profile Details</u></h3>
        <form className="d-flex flex-column" onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="mb-3 mt-3 d-flex justify-content-around">
        <div>
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input {...register("firstName")} type="firstName" className="form-control" />
         </div>
        <div>
            <label htmlFor="lastName" className="form-label">Last Name</label>
          <input {...register("lastName")} type="lastName" className="form-control" />
        </div>
        </div>    
        <div className="mb-3 d-flex justify-content-around">
        <div>
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input {...register("email")} type="email" className="form-control" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div>
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input {...register("phoneNumber")} type="phoneNumber" className="form-control" />
        </div>
        </div>    
        <div className="mb-3 d-flex justify-content-around">
        <div className="d-flex flex-column">
          <div>
          <label htmlFor="exampleInputPassword1" className="form-label">New Password</label>
          <input {...register("password")} type="password" className="form-control" />
        </div>
        <div>
          <label htmlFor="exampleInputPassword1" className="form-label">Repeat Password</label>
          <input {...register("password2")} type="password" className="form-control" />
        </div>
        </div>
        <div>
          <label htmlFor="shortBio" className="form-label">Short Bio</label>
          <textarea {...register("text")} type="text" className="form-control" id="shortBio" rows="4"/>
        </div>
        </div>
        <button type="submit" className="btn btn-primary align-self-center m-2">Save</button>
      </form>
      </div>
    );
}
export default ProfileForm;