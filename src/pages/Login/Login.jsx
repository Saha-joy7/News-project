import { NavLink } from "react-router-dom";
import Nav from "../../component/navbar/Nav";
const Login = () => {
  return (
    <div>
      <div>
      <Nav></Nav>
      </div>
      <div className="hero min-h-[90vh] ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
        <h1 className="text-center font-bold text-2xl mt-5">Login your account</h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
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
              <button className="btn text-white bg-[#403F3F]">Login</button>
            </div>
          </form>
          <div className="px-7 mb-3 mx-auto">
            <span>Dont’t Have An Account ?</span>{" "}
            <button className="btn"><NavLink to="/register">Register</NavLink></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
