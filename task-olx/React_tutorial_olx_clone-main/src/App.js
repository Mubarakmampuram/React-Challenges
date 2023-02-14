import React,{useEffect,useContext} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'

/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";
import { AuthContext, FirebaseContext } from "./store/FirebaseContext";
import { auth } from "./firebase/config";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext )
  useEffect(() => {
    onAuthStateChanged(auth,(user)=>{
      setUser(user)
    })
  
  })
  
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route  path="/signup">
        <Signup/>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/create">
        <Create></Create>
      </Route>

    </Router>
  );
}

export default App;
