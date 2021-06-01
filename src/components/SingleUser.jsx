
const SingleUser = ({ user, onClick }) => {
const handleOnClick = () => {
    onClick(user);
};
    return(
        <li className="list-group-item d-flex justify-content-between" >
            <span>{`${user.first_name} ${user.last_name}`}</span>
            <button className=" btn btn-primary btn-sm" onClick={handleOnClick}>Expand</button>
            </li>
    );
};

export default SingleUser;