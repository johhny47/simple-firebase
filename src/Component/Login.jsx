import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.init";
import { useState } from "react";


const Login = () => {
    const provider = new GoogleAuthProvider()
    const [user,setUser]=useState(null)
    const handleGoogleLogin = () =>{
        signInWithPopup(auth, provider)
        .then((result)=>{
            console.log(result)
            setUser(result)
        })
        .catch((error)=>{
            console.log(error)
            setUser(error)
        })
        }

        const handleSignOut =()=>{
            signOut(auth)
            .then(()=>{
                setUser(null)
            })
        }
    return (
        <div>
           
          
          
            {
                user && <div>
                   
                    <h2>user name: {user.user.displayName}</h2>
                    <h2>Email: {user.user.email}</h2>
                    {
                        user.user.phoneNumber? <h2>:Phone: {user.user.phoneNumber
                        }</h2>:""
                    }
                   

                </div>
            }
             {
                user? 
                <button onClick={()=>handleSignOut() }>signOut</button> 
                :<button onClick={()=>handleGoogleLogin() }>Login with google</button>
            }
             
          
        </div>
    );
};

export default Login;