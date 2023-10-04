/* eslint-disable react/prop-types */
import { BsFillEyeFill,BsShare , BsBookmark} from "react-icons/bs";
const Category = ({ category }) => {
  const { rating, total_view, title,author, thumbnail_url, details } = category;
 
  return (
   <div>
    <div className="bg-[#F3F3F3] rounded-xl">
        <div className="flex justify-between space-x-3 items-center">
        <div className="flex">
            <img className="w-12 h-12 rounded-full" src={author.img} alt="" />
            <div>
                <p className="font-medium">{author.name}</p>
                <p><small>{author.published_date}</small></p>
            </div>
        </div>
        <div className="flex items-center justify-center gap-3 p-6">
            <BsBookmark></BsBookmark>
            <BsShare></BsShare>
        </div>
        </div>
       
    </div>
    <div className="card card-compact space-y-5 p-8 bg-base-100 shadow-xl">
         <h3 className="font-medium">{title}</h3>
      <figure className="h-[20%]">
        <img className="w-full"
          src={thumbnail_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <p><small>{details}</small></p>
        <div className="flex justify-center">
            <p>{rating.number}</p>
           <div className="flex items-center">
           <BsFillEyeFill></BsFillEyeFill>
            <p>{total_view}</p>
           </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Category;
