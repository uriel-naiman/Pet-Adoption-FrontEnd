import { createContext, useContext, useEffect, useState } from "react";
import localforage from 'localforage';
import { useAlert } from "react-alert";
import { getPetsByUserId } from "../lib/userApi";
localforage.config();

export const AuthContext = createContext({
  isLoggedIn: false,
  token: '',
  saveData: async (token) => { },
  logOut: async () => { },
  user: {},
  pets: []
});

const tokenKey = 'userToken';
const userKey = 'userData';

export const useAuth = () => {
  return useContext(AuthContext);
}

const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [currentPet, setCurrentPet] = useState({});
  const alert = useAlert();

  const saveData = async ( token, user ) => {
    try{
    setToken(token);
    setUser(user);
    await localforage.setItem( tokenKey, token, (err)=>{
      if(err) alert.show(err.message)
    } );
    await localforage.setItem( userKey, user, (err) =>{
      if(err) alert.show(err.message);
    } );
    setIsLoggedIn(true);
  }catch(err){
    alert.show(err.message);
  }
  };

  const logOut = () => {
    try{
    setIsLoggedIn(false);
    setToken("");
    setUser({});
    localforage.clear().then(()=>{
      alert.show('Logged out successfully');
    });
  }catch(err){
    alert.show(err.message);
  }
  };

  const savePet = (pet) =>{
    setCurrentPet(pet);
  };

  useEffect(() => {
    localforage.getItem(tokenKey)
      .then(token => {
        if (token) {
          setToken(token);
          localforage.getItem(userKey)
          .then(user => {
           setUser(user);
          })  
          setIsLoggedIn(true);
        }
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, token,  user, currentPet, saveData, logOut, savePet }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
export default AuthProvider;


export function getAuthConfig(token) {
  return ({
    headers: {
      Authorization: 'Bearer ' + token,
    }
  });
}