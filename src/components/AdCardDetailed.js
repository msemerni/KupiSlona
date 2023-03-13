import SliderImages from './SliderImages';
import store from '../reducers/store';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AdCardDetailed = ({ ad: { title, images, price, description, address, owner: { phones } } }) => {
  return (
    <div className='card' style={{ width: 100 + "%" }}>
      {images && <SliderImages imgArray={images} />}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">Price: $<strong>{price}</strong></p>
        <p>{description}</p>
        <address>{address}</address>
        <p>{phones}</p>

        {store.getState().info.userProfile?.payload?._id !== store.getState().info.goodById?.payload?.owner?._id &&
          <div className="text-center">
            <button className='btn btn-outline-info' onClick={() => alert("Write your message from Telegram/Viber")}>Write message</button>
          </div>
        }
      </div>

      {store.getState().info.userProfile?.payload?._id === store.getState().info.goodById?.payload?.owner?._id &&
        <div className="d-flex justify-content-end">
          <Link to={`/dashboard`}>
            <FontAwesomeIcon icon={faFilePen} style={{ padding: 0.5 + "em", fontSize: 2 + "em" }} />
          </Link>
          <FontAwesomeIcon icon={faTrashCan}
            style={{ padding: 0.5 + "em", fontSize: 2 + "em", color: "#dc3545", cursor: "pointer" }}
            onClick={() => alert("Advertisement deleted")} />
        </div>
      }

    </div>
  )
}

export default AdCardDetailed;
