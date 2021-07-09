import React, { useState,useContext } from 'react'
import {Link} from "react-router-dom"
import {fire} from '../Firebase'
import swal from "sweetalert";
import UserStore from '../Store'

const SignUp = () => {
    const { userData, setUserData } = useContext(UserStore);
    const [loading, setLoading] = useState(false);

    const signUpHandler = async () => {
        setLoading(true);
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!email || !password) {
            setLoading(false);
            return;
          }
          try {
            const userCredentials = await fire
              .auth()
              .createUserWithEmailAndPassword(email, password);
      
            
            
            swal(
              "Please verify your email.",
              "A verification link has been sent to your registered email.",
              "success"
            );
            setLoading(false);
            setUserData({
              ...userData,
              auth: true,
              data: userCredentials.user,
            });
          } catch (error) {
            setLoading(false);
            swal(error.message, "", "error");
            console.log(error.message);
          }
        };
    
    return (
      <div>
            <div className="container employeer">
            
            <div className="brand-title">Sign Up</div>
            <div className="inputs">
            <label htmlFor="email" className="form-label">Email</label>
                <input type="email" placeholder="example@test.com" className="emp" id="email" />
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" placeholder="Min 6 charaters long" className="pass" id="password" />
                <p className="form-text" style={{textDecoration:"none"}}>
                    <Link className="text-dark" to="/login">Login?</Link>
                </p>
                <div className="col-12 mt-2">
                    <button className="btn btn-outline-dark shadow-none mx-auto px-4" onClick={signUpHandler} type="submit" style={{width:"50%"}}>Sign Up{" "}{
                        loading ? (
                            <span
                              className="spinner-grow spinner-grow-sm"
                              role="status"
                              aria-hidden="true"
                            ></span>
                          ) : (
                            ""
                          )
                        

                    }
                    </button>
                    </div>
            </div>
            </div>
        </div>
        
    )
}

export default SignUp
