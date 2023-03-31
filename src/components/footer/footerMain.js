import React from "react";
import "./footer.scss";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import EditLocationIcon from "@mui/icons-material/EditLocation";

const FooterMain = () => {
  const com = [
    { img: "https://assets.asaxiy.uz/brand/webp//605036814c07e.webp" },
    { img: "	https://assets.asaxiy.uz/brand//6309b524cec23.png" },
    { img: "https://assets.asaxiy.uz/brand/webp//5e15c4ec85cf2.webp" },
    { img: "https://assets.asaxiy.uz/brand/webp//600bc3fa84df8.webp" },
    { img: "	https://assets.asaxiy.uz/brand/webp//5e15c4697e437.webp" },
    { img: "	https://assets.asaxiy.uz/brand/webp//6103c3977d54d.webp" },
    { img: "https://assets.asaxiy.uz/brand/webp//603481675b122.webp" },
    { img: "https://assets.asaxiy.uz/brand/webp//6067393b94990.webp" },
    { img: "https://assets.asaxiy.uz/brand/webp//5e15c5de44b63.webp" },
    { img: "	https://assets.asaxiy.uz/brand/webp//5e15c63e06b95.webp" },
  ];

  const service = [
    {
      img: "https://asaxiy.uz/custom-assets/images/icons/market.svg",
      p1: "Endi bozorga borishga hojat yo'q",
      p2: "Bizda qulay narxlar va uyga yetkazib berish mavjud",
    },
    {
      img: "https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg",
      p1: "Tez yetkazib berish",
      p2: "Bizning xizmatimiz sizni ajablantiradi",
    },
    {
      img: "https://asaxiy.uz/custom-assets/images/icons/return.svg",
      p1: "Siz uchun qulayliklar",
      p2: "Nosozlik yuzaga kelganda tez rasmiylashtirish va qaytarish kafolati",
    },
    {
      img: "https://asaxiy.uz/custom-assets/images/icons/card.svg",
      p1: "Bo'lib to'lash",
      p2: "3, 6, 9 va 12 oy davomida oldindan to'lovsiz",
    },
  ];

  return (
    <div>
      <div className="footer">
        <div className="companys">
          {com.map((item) => {
            return <img src={item.img} alt="" />;
          })}
        </div>
        <div className="download">
          <div className="img-box">
            <img
              src="https://asaxiy.uz/custom-assets/images/asaxiy-app.png"
              alt=""
            />
          </div>
          <div className="info-dow">
            <img
              src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo-white.svg"
              alt=""
            />
            <h4>sizning internet dokoningiz</h4>
            <div className="link">
              <img
                src="https://asaxiy.uz/custom-assets/images/app-store.svg"
                alt=""
              />
              <img
                src="https://asaxiy.uz/custom-assets/images/google-play.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="servic-box">
          {service.map((item, idx) => {
            return (
              <div className="servce-card">
                <img src={item.img} alt="" />
                <div className="info">
                  <h3>{item.p1}</h3>
                  <p>{item.p2}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="info-menu">
          <div className="ul">
            <div className="first-ul">
              <ul>
                Ma'lumotlar
                <li>Ommaviy oferta (Foydalanuvchi bitimi)</li>
                <li>
                  Muddatli toʻlov asosida sotib olishning umumiy qoidalari
                </li>
                <li>Muddatli toʻlov shartlari</li>
                <li>Tovarlarni yetkazib berish va toʻlov turlari</li>
                <li>Buyurtmani bekor qilish va tovarni qaytarish</li>
                <li>Biz haqimizda</li>
              </ul>
            </div>
            <div className="second-ul">
              <ul>
                Biz bilan aloqa
                <li>
                  <EmailIcon />
                  +998 71 200 01 05
                </li>
                <li>
                  <PhoneIcon />
                  info@asaxiy
                </li>
                <li>
                  <EditLocationIcon />
                  Chilonzor 3,Toshkent
                </li>
              </ul>
            </div>
          </div>
          <div className="social">
            <h3>biz ijtimoiy tarmoqlarda:</h3>
            <div className="icons">
              <TelegramIcon className="logo" />
              <InstagramIcon className="logo" />
              <YouTubeIcon className="logo" />
              <FacebookIcon className="logo" />
            </div>
          </div>
        </div>
        <div className="pay-box">
          <h2>tolov turlari:</h2>
          <img
            src="https://asaxiy.uz/custom-assets/images/click-logo.svg
"
            alt=""
          />
          <img
            src="https://asaxiy.uz/custom-assets/images/payme.svg
"
            alt=""
          />
          <img src="https://asaxiy.uz/custom-assets/images/visa.svg" alt="" />
          <img
            src="	https://asaxiy.uz/custom-assets/images/mastercard.svg
"
            alt=""
          />
          <img src="	https://asaxiy.uz/custom-assets/images/humo.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
