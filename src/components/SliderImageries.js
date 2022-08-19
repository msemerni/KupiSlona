import { BACKEND_URL } from '../constants/constants.js';

const SliderImageries = ({ imgArray }) => {

  return (
    imgArray[0] &&
    <div id="carouselExampleControls" className="carousel slide w-75 mx-auto" data-bs-ride="carousel">
      <div className="carousel-inner">
        {imgArray.map((img, index) =>
          index === 0 ?
            <div key={img._id} className="carousel-item active">
              <img className="d-block w-100 rounded " alt="picture" src={`${BACKEND_URL}${img.url}`} />
            </div> :
            <div key={img._id} className="carousel-item">
              <img className="d-block w-100 rounded " alt="picture" src={`${BACKEND_URL}${img.url}`} />
            </div>
        )}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default SliderImageries;
