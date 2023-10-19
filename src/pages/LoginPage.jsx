import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";


const LoginPage = () => {

  const auth = getAuth();
  
  const navigate = useNavigate();

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [gLog, setGlog] = useState({})
  //  const [showAlert, setShowAlert] = useState(false);


   const handleEmail = (e) => {
     setEmail(e.target.value);
   };

   const handlePass = (e) => {
     setPassword(e.target.value);
   };


   const handleSubmit = (e) => {
     e.preventDefault();

     if (email === "" && password === "") {
       alert("error");
     } else {

      // email & pass
       
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user)
          navigate('/home')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode, errorMessage);
        });
     }
   };


  //  signIn with google
  const provider = new GoogleAuthProvider();

   const SignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        setGlog(user)
        navigate("/home");

      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert(errorCode, errorMessage, email, credential);
        // ...
      });
   }
  
   

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={handleEmail}
                  value={email}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  onChange={handlePass}
                  value={password}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary capitalize">Login</button>
              </div>
              <div className="flex">
                <p>Dont have an account?</p>
                <Link className="text-blue-700 font-bold" to="/registration">
                  Sign up
                </Link>
              </div>
              <div>
                <button onClick={SignInWithGoogle} className="btn w-full capitalize">
                  <img
                    className="w-8"
                    src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
                    alt=""
                  />
                  Sign in With Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
