import { useEffect, useState } from "react";
import Category from "./Category";


const HCategories = () => {
    const [categories, setCategories]= useState([]);
    useEffect(()=>{
        fetch('../../../public/data/news.json').then(res=>res.json()).then(data=>setCategories(data));
    },[])
    console.log(categories);
    return (
        <div className="space-y-10">
            {
                categories.map(category => <Category category={category} key={category._id}></Category>)
            }
        </div>
    );
};

export default HCategories;