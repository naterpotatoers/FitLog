import { useState } from "react";
import { auth } from "../config/firebase";
import { Link } from "react-router-dom";

import Logout from "./Logout";
import User from "./User";

function Navbar() {
  const [user, setUser] = useState({
    email: auth.currentUser?.email || ""
  })

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser({
        email: user.email || ""
      })
    } else {
      setUser({
        email: ""
      })
    }
  })

  return (
    <nav className="">
      <Link to="/home"><h1 className="title">FitLog</h1></Link>
      {user.email !== "" && <User />}
      {user.email === "" ? <Link to="/login"><button type="button">Login</button></Link> : <Logout />}
    </nav>
  );
}

export default Navbar;