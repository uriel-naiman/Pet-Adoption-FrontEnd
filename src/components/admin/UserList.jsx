import SingleUser from "./SingleUser";

const UserList = ({ users, onClick}) => {
    return (
        <div>
            <h3>Users</h3>
            <ul className="list-group">
                {users.map(user => 
                <SingleUser key={user.id} user={user} onClick={onClick}/>
                )}
            </ul>
        </div>
    );
};
export default UserList;