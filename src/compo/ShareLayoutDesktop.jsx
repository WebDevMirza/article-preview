import Facebook from "../assets/images/icon-facebook.svg";
import Twitter from "../assets/images/icon-twitter.svg";
import Pinterest from "../assets/images/icon-pinterest.svg";
export const ShareLayoutDesktop = () => {
  return (
    <>
      <div className="share-box-desktop-wrapper">
        <ul className="share-box-desktop">
          <li>Share</li>
          <li>
            <a href="#" aria-label="visit our facebook">
              <img src={Facebook} alt="" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="visit our twitter">
              <img src={Twitter} alt="" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="visit our pinterest">
              <img src={Pinterest} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
