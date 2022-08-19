import LOGO from '../image/slon5.png';

const Logo = () => {
  return (
    <div className="me-1" style={{ maxWidth: 40 + "px" }}>
      <img src={LOGO} className="img-fluid" alt={"logo"} />
    </div>
  )
}

export default Logo;
