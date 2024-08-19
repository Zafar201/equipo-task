import { useState } from "react";
import logo from '../../images/logo.png'
import {useAuthState} from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from '../../firebase';
import { toast } from "react-toastify";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { menu } from "../../contants";
import MenuItems from "../shared/MenuItems";
import { Link } from "react-router-dom";

export default function Header() {
  const [navActive, setNavActive] = useState(location.pathname)
  const [user] = useAuthState(auth);
  

  //function to signin
  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        const userRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(userRef);
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
  
        if (!docSnap.exists()) {
          await setDoc(userRef, {
            email: user.email,
            firstName: user.displayName,
            photo: user.photoURL,
          });
       
        }
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error(`Failed to log in: ${error.message}`, {
        position: "top-center",
      });
    }
  };
  
  //function to signout
  const  handleLogout=async()=> {
    try {
      await auth.signOut();
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <div className="bg-white">
    <div className="navbar container mx-auto">
    <div className="navbar-start w-[40%]">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className={`bg-white menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow`} >
            <MenuItems menu={menu} navActive={navActive} setNavActive={setNavActive}/>

        </ul>
      </div>
      <Link to='/'> <img src={logo} alt="logo" /></Link>
    </div>
    <div className="navbar-center hidden lg:flex ">
      <ul className="menu menu-horizontal px-1 rounded-[100px] bg-[#F8F9FD]">
      <MenuItems menu={menu} navActive={navActive} setNavActive={setNavActive}/>

      </ul>
    </div>
    <div className="navbar-end w-[40%]">
      <a className="bg-white border-2 border-[#FF5C00] px-4 py-2 rounded-full text-[#FF5C00] text-sm cursor-pointer" onClick={user ? handleLogout : googleLogin}
      >{user ? `signout  ${user.email}` : 'login'}</a>
    </div>
  </div>
  </div>
  );
}
