import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 


const ForgotPassPage = () => {

    const auth = getAuth();
    const navigate = useNavigate();


    const [email, setEmail] = useState('');


    const handleForgotPassword = (e) => {
        e.preventDefault();

        if(email === ""){
            alert("PLease enter your email")
        }else{
            sendPasswordResetEmail(auth, email)
              .then(() => {
                // Password reset email sent!
                setEmail("")
                navigate('/')

                // ..
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
              });

        }
    }
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Reset Your Password!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button
                    onClick={handleForgotPassword}
                    className="btn btn-primary"
                  >
                    Send Email
                  </button>
                </div>
                <div className="form-control mt-6">
                  <Link
                    to='/'
                    className="btn btn-primary"
                  >
                    Back
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ForgotPassPage;