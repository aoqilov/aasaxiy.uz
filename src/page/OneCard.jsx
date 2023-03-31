import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./pagecss/oneCard.scss";
//import component

import TitleMap from "../components/title-map/titleMap";
// icons
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
// book
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CheckIcon from "@mui/icons-material/Check";
// params
import { BooksNet, BookSidebar } from "../api/BooksNet";
import FooterMain from "../components/footer/footerMain";

const OneCard = () => {
  const { id } = useParams();
  const [only, setOnly] = useState(BooksNet);
  // func
  const searchId = (id) => {
    const javob = only.filter((item) => {
      return +id === item.id;
    });
    setOnly(javob);
  };
  //effect
  useEffect(() => {
    searchId(id);
  }, []);

  return (
    <div className="oneCard">
      <TitleMap cardname={"sasddsa"} />
      {only.map((item, idx) => {
        return (
          <div className="apiCard" key={idx}>
            <div className="card__pagesImg">
              <div className="pageImg-box">
                <img src={item.otherImg[0]} alt="asd" />
              </div>
              <div className="pageImg-box">
                <img src={item.otherImg[1]} alt="asd" />
              </div>
            </div>
            <div className="card__mainImg">
              {item.like ? (
                <FavoriteBorderIcon className="mainImg-icon" />
              ) : (
                <FavoriteIcon className="mainImg-icon_red" />
              )}
              <img src={item.otherImg[0]} alt="qw" />
            </div>
            <div className="card__info">
              <h1 className="info-name">{item.name}</h1>
              <h3 className="cost-main">{item.costMain}</h3>
              <h3 className="cost-year">
                {item.costDay} / {item.costYear} oy
              </h3>
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
              <h3 className="info-model">Model: {item.model}</h3>
              <h3 className="info-holati">
                Holati:{item.holati === 0 ? "Sotuvda yoq" : "Sotuvda bor"}
              </h3>
              <div className="info-social">
                <h3 className="social-text">Ulashish:</h3>
                <div className="icons">
                  <TelegramIcon className="logo" />
                  <InstagramIcon className="logo" />
                  <YouTubeIcon className="logo" />
                  <FacebookIcon className="logo" />
                </div>
              </div>
              <div className="info-read">
                <div className="read-box">
                  <LocalLibraryIcon className="read-icon" />
                  <p className="read-type">
                    o'qidim
                    <CheckIcon className="check" />
                  </p>
                  <h4 className="read-num">{item.oqidim}</h4>
                </div>
                <div className="read-box">
                  <AutoStoriesIcon className="read-icon" />
                  <p className="read-type">
                    o'qiyapman
                    <CheckIcon className="check" />
                  </p>
                  <h4 className="read-num">{item.oqiyapman}</h4>
                </div>
                <div className="read-box">
                  <MenuBookIcon className="read-icon" />
                  <p className="read-type">
                    o'qimoqchiman
                    <CheckIcon className="check" />
                  </p>
                  <h4 className="read-num">{item.oqimoqchiman}</h4>
                </div>
              </div>
              <div className="info-buttons">
                <button>mudatli tolov</button>
                <button>
                  <AddShoppingCartIcon className="btn-icon" />
                  savatchaga qoshish
                </button>
                <button>mudatli tolov</button>
              </div>
            </div>
            <div className="card__advert">
              <div className="advert-title">Tavsiya</div>
              <img
                src="https://assets.asaxiy.uz/product/items/desktop/727f877933ff5527b688683434c1150a20220915162005524338048MzTgAU.jpg.webp"
                alt=""
                className="advert-img"
              />
              <div className="advert-name">Shoshmasdan toldiring</div>
              <div className="cost-box">
                <p>55000 som</p>
                <AddShoppingCartIcon className="cost-icon" />
              </div>
              <div className="tockalar">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        );
      })}
      <FooterMain />
    </div>
  );
};

export default OneCard;
