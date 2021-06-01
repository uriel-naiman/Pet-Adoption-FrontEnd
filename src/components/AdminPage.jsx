import { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import { getUsers, getPets } from "../lib/api";
import PetList from "./PetList";
import UserList from "./UserList";
import Rodal from 'rodal';
import UserModal from "./UserModal";


const AdminPage = () => {
    const auth = useAuth();
    const[users, setUsers] = useState([]);
    const[pets, setPets] = useState([]);
    const [userVisible, setUserVisible] = useState(false);
    const [userForModal, setUserForModal] = useState({});

    useEffect(async () => {
       const userArray = await getUsers(auth.token);
       setUsers(userArray); 
       const petArray = await getPets(auth.token);
       setPets(petArray.pets); 
      }, []);

      const onClick = (user) => {
        setUserForModal(user);
        setUserVisible(true);
      };

      const hideUser = () => {
        setUserVisible(false);
      }

    return (
        <>
            <div className="card shadow rounded w-75 align-self-center" style={{marginTop: "100px" }}>
                <h3 className="mt-2 align-self-center">Admin Page!</h3>
                <div className="d-flex justify-content-around">
                    <UserList users={users} onClick={onClick} className="m-2"/>
                    <PetList pets={pets} className="m-2"/>
                </div>
            </div>
            <Rodal visible={userVisible} onClose={hideUser} animation="slideUp" width="50" height="50" measure="%">
                <UserModal user={userForModal}  />
            </Rodal>
        </>
    );
}
export default AdminPage;