import { CDNurl } from "../utils/constant";
import rescard from '../css/rescard.css'
import nonveg from '../utils/nonveg.svg';
import vegmark from '../utils/veg.svg';

const RestroCard = ({ resdata }) => {
  const {
    name,
    veg,
    sla,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    id,
    locality,
  } = resdata.info;



  return  (
 
    <div className="m-4  p-2 h-[400px] w-64  bg-white  hover:scale-110  rounded-md ease-in duration-300">
        <img className="h-44 w-64 object-fill rounded-lg " alt='res-logo'src={CDNurl+cloudinaryImageId} />
                <span className="block  font-bold text-xl py-1 text-black">{name}</span>
                <span className="flex m-2 justify-between font-semibold"><span className="bg-green-500   px-2 py-0.5  rounded-md">⭐{avgRating}</span><span className="text-orange-500">{sla.slaString}</span> </span>
                <span className="flex m-2 justify-between font-semibold">{veg? <img className="rounded-sm h-5 w-5" src={vegmark}/>: <img className="rounded-sm h-5 w-5"  src={nonveg}/>} <span>{costForTwo}</span></span>
                {/* <span>{costForTwo}</span> */}
                <span className="block text-slate-400  truncate">{cuisines.join(',')}</span>
                <span className="block  font-semibold text-slate-400">{locality }</span>
              
              
      </div>
    


 
    
  );
};
export default RestroCard;
