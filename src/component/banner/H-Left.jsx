
import { BsGoogle,BsGithub, BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import QZone1 from "../../../public/assets/qZone1.png"
import QZone2 from "../../../public/assets/qZone2.png"
import QZone3 from "../../../public/assets/qZone3.png"
import HLDown from "./H-L-Down";
const HLeft = () => {
    return (
        <div className="space-y-3">
            <div>
                <h3 className="font-medium">Login With</h3>
                <div  className="text-center">
                <div className="flex items-center bg-slate-100 w-full mb-2 mx-4 btn">
                <BsGoogle></BsGoogle>
                <button className="inline  text-blue-300">Login with Google</button>
                </div>
                <div className="flex items-center bg-slate-100 w-full mx-4  btn">
                <BsGithub></BsGithub>
                <button className="inline ">Login with Github</button>
                </div>
                </div>
            </div>
            <div>
                <h3 className="font-medium">Find us on</h3>
                <div  className="text-center">
                <div className="flex items-center bg-slate-100 w-full mb-2 mx-4 btn">
                <BsFacebook></BsFacebook>
                <button className="inline  text-blue-300">Facebook</button>
                </div>
                <div className="flex items-center bg-slate-100 w-full mx-4 mb-2  btn">
                <BsTwitter></BsTwitter>
                <button className="inline ">Twitter</button>
                </div>
                <div className="flex items-center bg-slate-100 w-full mx-4  btn">
                <BsInstagram></BsInstagram>
                <button className="inline ">Instagram</button>
                </div>
                </div>
            </div>
            <div>
                <h3 className="font-medium">Q Zone</h3>
                <div  className="text-center">
                <div >
                <img src={QZone1} alt="" />
                </div>
                <div >
                <img src={QZone2} alt="" />
                </div>
                <div>
                <img src={QZone3} alt="" />
                </div>
                </div>
            </div>
            <HLDown></HLDown>
        </div>
    );
};

export default HLeft;