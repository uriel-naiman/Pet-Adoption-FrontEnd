const UserModal = ({ user }) => {
    return(
       <div className="d-flex flex-column align-items-center">
           <h2>{`${user.first_name} ${user.last_name}`}</h2>
           <h3>{`Phone Number: ${user.phone_number}`}</h3>
           <h3>{`Email Address: ${user.email}`}</h3>
           <h3>{`Type: ${user.role}`}</h3>
           <h3>Pets:</h3>
       </div>
    );
};
export default UserModal;