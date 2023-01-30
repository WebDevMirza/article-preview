import "./card.css";
import Drawers from "../assets/images/drawers.jpg";
import Avatar from "../assets/images/avatar-michelle.jpg";
import Share from "../assets/images/icon-share.svg";

export const Card = () => {
  return (
    <>
      <main>
        <div className="wrapper-card">
          <div className="card-img">
            <img src={Drawers} alt="A picture of drawers" />
          </div>

          <div className="card-body">
            <h1 className="card-title">
              Shift the overall look and feel by adding these wonderful touches to furniture in your home
            </h1>
            <p className="card-text">
              Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting.
              I’ve got some simple tips to help you make any room feel complete.
            </p>

            <div className="card-profile">
              <div className="avatar">
                <img src={Avatar} alt="Avatar of Michelle" />
                <div className="avatar-info">
                  <h2 className="avatar-name">Michelle Appleton</h2>
                  <p className="date">30 Jan 2023</p>
                  <a href="#" aria-label="Share on social networks">
                    <img src={Share} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
