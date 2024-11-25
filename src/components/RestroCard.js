import { CDNurl } from "../utils/constant";
import rescard from '../css/rescard.css'

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
  return (
    <div className="res-card" >
      <img src={CDNurl+cloudinaryImageId} />
      <div >
            <div><h4> {name}  {id}</h4></div>
            <div><strong>Area:</strong>{locality}</div>
            <div><strong>{veg?"Veg":"Non-Veg"}</strong></div>
            <div className="cusines"><strong>cuisines:</strong>{cuisines.join(',')}</div>
            <div><strong>Rating:</strong>{avgRating} Star </div>
            <div><strong>Price:</strong>{costForTwo}</div>
            <div><strong>DeliveryTime:</strong>{sla.slaString}</div>
      </div>
      
      
    </div>
  );
};
export default RestroCard;
