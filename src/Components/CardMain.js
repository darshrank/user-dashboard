import { React, useState } from "react";
import Modal from './Modal';
import { BsFillHeartFill } from "react-icons/bs";

function CardMain({ imgSrc, title, hearts }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowTrades = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="card_main">
      {/* <img src={imgSrc} alt="" className="card_main_img" /> */}
      <div className="card_main_name">
        <h2>{title}</h2>
        {/* <div className="card_main_icon">
          <i>
            <BsFillHeartFill /> <span>{hearts}</span>
          </i>
        </div> */}
      </div>

      {/* <div className="stat">
        <div>
          <p>
            Current Bid<span>1.2 ETH</span>
          </p>
        </div>
        <div>
          <p>
            Ending In<span>1d:12h:10m</span>
          </p>
        </div>
      </div> */}

      <div className="card_main_button">
        {/* <a href="#" className="button btn">
          Show Trades
        </a> */}
        {/* <a href="#" className="button2 btn">
          History
        </a> */}
        <a href="/viewtrades" className="button btn">Show Trades</a>
        {showModal && <Modal onClose={closeModal} />}
      </div>
    </div>
  );
}

export default CardMain;
