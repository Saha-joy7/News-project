import { NavLink } from "react-router-dom";
import userDefaultPic from '../../../public/assets/user.png'
const Nav = () => {
  const links = [
    <NavLink
      key="/home"
      to="/"
      className={({ isActive, isPending }) =>
        isActive ? "active" : isPending ? "text-[#FF444A] underline" : ""
      }
    >
      Home
    </NavLink>,
    <NavLink
      key="/about"
      to="/about"
      className={({ isActive, isPending }) =>
        isActive ? "active" : isPending ? "text-[#FF444A] underline" : ""
      }
    >
      About
    </NavLink>,
    <NavLink
      key="/career"
      to="/career"
      className={({ isActive, isPending }) =>
        isActive ? "active" : isPending ? "text-[#FF444A] underline" : ""
      }
    >
      Career
    </NavLink>,
  ];

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="gap-7 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="gap-7 menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-8 rounded-full">
                        <img src={userDefaultPic} />
                    </div>
                </label>
              
                    <NavLink to='/login'><button className="btn">Login</button></NavLink>
               
            </div>
    </div>
  );
};

export default Nav;
