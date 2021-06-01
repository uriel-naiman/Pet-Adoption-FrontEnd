import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import ProfileForm from './ProfileForm';
import ProfileHome from "./ProfileHome";
import ProfilePetPage from "./ProfilePetPage";
import SavedPetPage from "./SavedPetPage";
import OutHome from "./OutHome";
import Navbar from "./Navbar";
import styles from "../Background.module.css";
import { useAuth } from "../context/auth";
import AdminPage from "./AdminPage";
import PetForm from "./PetForm";
import PetPage from "./PetPage";
import UpdatePetForm from "./UpdatePetForm";
import BasicSearchForm from "./BasicSearchForm";
import AdvancedSearchForm from "./AdvancedSearchForm";

const ContextApp = () => {
  const auth = useAuth();

  return (
        <Router>
          <div className={styles.Background}>
            <Navbar />
            <Switch>
            <Route path="/petpage">
              <PetPage />
              </Route>
              <Route path="/search/basic">
              <BasicSearchForm />
              </Route>
              <Route path="/search/advanced">
              <AdvancedSearchForm />
              </Route>
              <Route path="/profile/savedPets">
            {!auth.token && <Redirect to="/" />}
              {auth.token && <SavedPetPage />}
          </Route>
           <Route path="/profile/petPage">
           {!auth.token && <Redirect to="/" />}
              {auth.token && <ProfilePetPage />}
          </Route>
          <Route path="/profile/update">
          {!auth.token && <Redirect to="/" />}
              {auth.token && <ProfileForm />}
          </Route>
          <Route path="/profile/home">
          {!auth.token && <Redirect to="/login" />}
              {auth.token && <ProfileHome />}
          </Route>
          <Route path="/login">
          {!auth.token && <OutHome />}
          {auth.token && <Redirect to="/" />}
          </Route>
          <Route path="/admin/addpet">
          {(auth.user.role === 'admin') && <PetForm />}
          {(!(auth.user.role ==='admin')) && <Redirect to="/" />}
          </Route>
          <Route path="/admin/updatepet">
          {(auth.user.role === 'admin') && <UpdatePetForm />}
          {(!(auth.user.role ==='admin')) && <Redirect to="/" />}
          </Route>
          <Route path="/admin">
          {(auth.user.role === 'admin') && <AdminPage />}
          {(!(auth.user.role ==='admin')) && <Redirect to="/" />}
          </Route>
          <Route path="/">
          {!auth.token && <Redirect to="/login" />}
          {auth.token && <Redirect to="/profile/home" />}
          </Route>
            </Switch>
          </div>
       </Router>
      )
  }


export default ContextApp;