import "./card.css";
import Drawers from "../assets/images/drawers.webp";
import Avatar from "../assets/images/avatar-michelle.jpg";
import Share from "../assets/images/icon-share.svg";
import { ShareLayout } from "./ShareLayout";
import { useEffect, useRef, useState } from "react";
import { ShareLayoutDesktop } from "./ShareLayoutDesktop";

export const Card = () => {
  const [toggle, setToggle] = useState(false);
  const loadinganime = useRef();
  const lay = useRef();

  useEffect(() => {
    if (toggle) {
      loadinganime.current?.classList.add("anime");
      lay.current?.classList.add("lay");
    } else {
      loadinganime.current?.classList.remove("anime");
      lay.current?.classList.remove("lay");
    }
  }, [toggle]);

  function disappearLayout() {
    toggle && setToggle(false);
  }

  return (
    <>
      <main onClick={disappearLayout}>
        <div className="wrapper-card">
          <div className="card-img">
            <img src={Drawers} alt="A picture of drawers" height={211} width={375} />
          </div>

          <div className="card-body">
            <h1 className="card-title">
              Shift the overall look and feel by adding these wonderful touches to furniture in your home
            </h1>
            <p className="card-text">
              Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting.
              I’ve got some simple tips to help you make any room feel complete.
            </p>

            <div className="card-avatar">
              <img className="avatar-img" src={Avatar} alt="Avatar of Michelle" width={60} height={60} />
              <div className="avatar-info">
                <h2 className="avatar-name">Michelle Appleton</h2>
                <p className="date">30 Jan 2023</p>
              </div>
              <a
                onClick={() => {
                  setToggle(!toggle);
                }}
                ref={lay}
                role="button"
                tabIndex={0}
                className="share-icon"
                href="#"
                aria-label="Share on social networks"
              >
                <img src={Share} alt="" width={15} height={13} />
              </a>
              {window.matchMedia("(min-width: 1024px)").matches && (
                <div ref={loadinganime} className="loadinganime-desktop">
                  {toggle && <ShareLayoutDesktop />}
                </div>
              )}
            </div>
          </div>

          {window.matchMedia("(max-width: 1024px)").matches && (
            <div ref={loadinganime} className="layout">
              {toggle && <ShareLayout />}
            </div>
          )}
        </div>
      </main>
    </>
  );
};
