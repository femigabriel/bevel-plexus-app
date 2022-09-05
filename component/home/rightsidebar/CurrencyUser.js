const ellipseBcg = "/images/ellipseBcg.svg";
const ellipseCover = "/images/ellipseCover.svg";
const avatarSquare = "/images/avatarSquare.png";
const CurrencyUser = () => {
  return (
    <div class="mini-profile">
      <div class="circle-avatar">
        <img src={ellipseBcg} className="blue-cirlce" alt="" />
        <img src={ellipseCover} className="white-cirlce" alt="" />
        <div className="avatar-container">
          <img src={avatarSquare} className="avatar" alt="avatar" />;
        </div>
      </div>
      <div className="mini-profile-details">
        <p>Femi Gabriel</p>
        <p>timfemi@gmail.com</p>
      </div>
      <div className="mini-profile-notification">
        <span className="badge success">50% VERIFICATION</span>
        <span className="material-icons">
          <i className="las la-exclamation-circle"></i>
        </span>
      </div>
      <div className="mini-profile-btn">
        <a href="/account">
          <button>Complete Your Profile</button>
        </a>
      </div>
    </div>
  );
};

export default CurrencyUser;
