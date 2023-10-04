
import HCategories from "../../component/banner/H-Categories";
import HLeft from "../../component/banner/H-Left";
import HRight from "../../component/banner/H-Right";
import Nav from "../../component/navbar/Nav";
import Header from "../../component/navbar/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Nav></Nav>
            <div className="grid grid-cols-6 space-x-5 mt-10">
                <div className="col-span-1"><HRight></HRight></div>
                <div className="col-span-3"><HCategories ></HCategories></div>
                <div className="col-span-2"><HLeft ></HLeft></div>
            </div>
        </div>
    );
};

export default Home;