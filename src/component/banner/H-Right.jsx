/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const HRight = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('../../../public/data/categories.json').then(res=>res.json()).then(data=>setCategories(data));
    },[])
    console.log(categories)
    return (
        <div>
            <h3 className="font-medium">All Category</h3>
            <div className="grid grid-cols-1 space-y-[1px] ml-4">
                {
                    categories.map(category => <Link className="text-gray-500 hover:bg-gray-100 p-2 w-fit" key={category.id} to={`/category/${category.id}`}>{category.name}</Link>)
                }
            </div>
        </div>
    );
};

export default HRight;