import Nav from "../../component/navbar/Nav";

const Register = () => {
  return (
    <div>
        <div><Nav></Nav></div>
      <div className="hero min-h-[70vh]">
   
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
        <h1 className="text-center font-bold text-2xl mt-5">Register your account</h1>
          <form className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="Your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
               
                placeholder="Your picture URL"
                className="input input-bordered"
                required
              />
            </div>
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
              <div className="flex items-center">
                <input type="checkbox" name="check" id="" />
                <p>Accept Term & Conditions</p>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white bg-[#403F3F]">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
