import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";



const NavBar = () => {

  const navigate = useNavigate()

  const auth = getAuth();

  // console.log(auth)


  const handleSignOut = () => {

    
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/')
      })
      .catch((error) => {
        alert(error)
      });
  }
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl font-serif hover:origin-top-left hover:rotate-12 hover:scale-110">
            Super-Hero
          </a>
        </div>
        <div className="flex-none">
         
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://i.pinimg.com/originals/85/07/46/85074691d76a018386df7c57536dd5a7.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleSignOut}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
