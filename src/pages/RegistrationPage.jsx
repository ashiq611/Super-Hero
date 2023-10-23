import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification
} from "firebase/auth";



const RegistrationPage = () => {
  const auth = getAuth();
 
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gLog, setGlog] = useState({});
  const [showPass, setshowPass] = useState("password");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPassword(e.target.value);
  };


  // show pass icon operation
   const handleShowPass = () => {
     if (showPass == "password") {
       setshowPass("text");
     } else {
       setshowPass("password");
     }
   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    if (email === "" && password === "") {
      alert("error");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          sendEmailVerification(auth.currentUser);

          navigate('/')
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
  const SignUpWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        setGlog(user);
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
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
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
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  onChange={handlePass}
                  value={password}
                  type={showPass}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {showPass == "password" ? (
                  <AiFillEyeInvisible
                    onClick={handleShowPass}
                    className="absolute translate-y-1/2 top-12 right-[10%] "
                  ></AiFillEyeInvisible>
                ) : (
                  <AiFillEye
                    onClick={handleShowPass}
                    className=" absolute translate-y-1/2 top-12 right-[10%]"
                  ></AiFillEye>
                )}
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary capitalize">
                  Create Account
                </button>
              </div>
              <div className="flex">
                <p>Have an account already?</p>
                <Link className="text-blue-700 font-bold" to="/">
                  Log in
                </Link>
              </div>
              <div>
                <button
                  onClick={SignUpWithGoogle}
                  className="btn w-full capitalize"
                >
                  <img
                    className="w-8"
                    src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
                    alt=""
                  />
                  Sign up With Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;