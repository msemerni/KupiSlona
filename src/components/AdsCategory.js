import { Link } from 'react-router-dom';
import { BACKEND_URL } from '../constants/constants';
import NO_IMAGE from '../image/no_img_available.jpg';

const AdsCategory = ({ ad: { _id, title, price, createdAt, images } }) =>
  <div className="card mb-3" style={{ maxWidth: 75 + "%", margin: "0 auto", background: "#c5c3ff" }}>
    <Link to={`/ads/${_id}`} className="text-decoration-none text-black">
      <div className="row g-0">
        <div className="col-md-4">
          {images && images[0] && images[0].url ? <img src={`${BACKEND_URL}${images && images[0] && images[0].url}`}
            className="img-fluid rounded-start" alt={title} /> : <img src={NO_IMAGE} className="img-fluid rounded-start" alt={title} />}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            {price > 0 && <p className="card-text">$<strong>{price}</strong></p>}
            <p className="card-text"><small className="text-muted">{new Date(+createdAt).toLocaleDateString('ru-Ru', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hour12: false, minute: '2-digit' })}</small></p>
          </div>
        </div>
      </div>
    </Link>
  </div>

export default AdsCategory;
