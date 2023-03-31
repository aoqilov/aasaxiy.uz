import React, { useState } from "react";
import "./Menu.scss";
// import icons
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Pagination from "./hook/Pagination";
import Rasrochka from "../components/Rasrochka";

const MenuBar = ({
  main,
  soertedByType,
  pageName,
  cutCard,
  postPer,
  total,
  paginateChange,
}) => {
  const [selectPage, setSelectPage] = useState(4);
  const [type, setType] = useState("");

  const [rasrockaBtn, setRasrockaBtn] = useState(false);

  const openRasr = () => {
    setRasrockaBtn(!rasrockaBtn);
  };

  const send = useNavigate();
  const sendData = (id) => {
    const filterData = main.filter((filter) => filter.id === id);
    console.log(filterData);
    send("/xarid", { state: { filterData } });
  };

  return (
    <div>
      <div className="double__right-top">
        <div className="title">
          <h2 className="title-main">{"Asaxiy"}</h2>
          <KeyboardArrowRightIcon className="title-icon" />
          <h2 className="title-help">{pageName}</h2>
        </div>
        <div className="select-box">
          <select
            className="numsort"
            onClick={() => cutCard(selectPage)}
            onChange={(e) => setSelectPage(e.target.value)}
            value={selectPage}
          >
            <option value="4">4</option>
            <option value="8">8</option>
          </select>
          <select
            onChange={(e) => setType(e.target.value)}
            value={type}
            onClick={() => soertedByType(type)}
            className="namesort"
          >
            <option value="all">all</option>
            <option value="chegirma">chegirma</option>
            <option value="yangi">yangi</option>
          </select>
        </div>
      </div>
      <div className="double__right-cards">
        {main.map((item, idx) => {
          return (
            <div className="card" key={item.id}>
              <div className="card__top">
                <p className={`top__text ${item.turi}`}>{item.turi}</p>
                <div className="top__icon">
                  <LocalGroceryStoreIcon className="top__icon-shop" />
                  <div>
                    {item.like ? (
                      <FavoriteIcon className="top__icon-like_red" />
                    ) : (
                      <FavoriteBorderIcon className="top__icon-like" />
                    )}
                  </div>
                </div>
              </div>
              <div className="card__img">
                <img
                  src={item.otherImg}
                  alt="img"
                  className="card__img-picture"
                />
              </div>
              <div className="card__info">
                {/* for router---------------------------- */}
                <div className="card__title-box">
                  <Link to={`/books/${item.id}`} className="card__info-title">
                    {item.name}
                  </Link>
                </div>
                <div className="card__info-starbox">
                  <div className="star">
                    <StarIcon className={`star__icon star-${item.star}`} />
                    <StarIcon className={`star__icon star-${item.star}`} />
                    <StarIcon className={`star__icon star-${item.star}`} />
                    <StarIcon className={`star__icon star-${item.star}`} />
                    <StarIcon className={`star__icon star-${item.star}`} />
                  </div>
                  <div className="coment">
                    <InsertCommentIcon className="coment-icon" />
                    <p className="coment-text">{item.coment} ta sharh</p>
                  </div>
                </div>
                <div className="card__cost">
                  <p className="cost-off">{item.costOff}</p>
                  <p className="cost-main">{item.costMain} so'm</p>
                  <p className="cost-month">
                    {item.costMonth} / {item.costYear} oy
                  </p>
                </div>
                <div className="card__btn">
                  <button className="btn-rasrochka" onClick={openRasr}>
                    Rasrochka
                  </button>
                  <button
                    className="btn-naxt"
                    onClick={() => sendData(item.id)}
                  >
                    Bir clickda olish
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {rasrockaBtn ? <Rasrochka openRasr={openRasr} /> : null}

      <Pagination
        postPer={postPer}
        total={total}
        paginateChange={paginateChange}
      />
    </div>
  );
};

export default MenuBar;
