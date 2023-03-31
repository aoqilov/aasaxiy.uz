import React, { useState } from "react";
import "../page/pagecss/rasrocka.scss";
//icons
import TelegramIcon from "@mui/icons-material/Telegram";

const Rasrochka = ({ openRasr }) => {
  const [isActiveId, setIsACtiveId] = useState(0);

  const arr = [
    {
      id: 1,
      oynomi: 3,
      summa: 436700,
    },
    {
      id: 2,

      oynomi: 6,
      summa: 227800,
    },
    {
      id: 3,

      oynomi: 9,
      summa: 158200,
    },
    {
      id: 4,

      oynomi: 12,
      summa: 123400,
    },
  ];
  return (
    <div className="rasrocka">
      <div className="card">
        <div className="card__title">
          <h1>
            "Asaxiy Books" doirasida chop etilgan kitoblar to'plami ni muddatli
            to'lovga sotib olish
          </h1>
          <p onClick={() => openRasr()}>X</p>
        </div>
        <ul className="card__cost">
          {arr.map((item, idx) => {
            return (
              <li
                className={isActiveId === item.id ? "cost active" : "cost"}
                key={idx}
                onClick={() => {
                  setIsACtiveId(item.id);
                }}
              >
                <p className="month">{item.oynomi} oy</p>
                <h2 className="sum">{item.summa} so'm</h2>
              </li>
            );
          })}
        </ul>
        <div className="card__jami">
          <h2>Umumiy summa :</h2>
          <h3>86400 som</h3>
        </div>
        <p className="alert">
          Sotib olish uchun tovarlarning minimal miqdori 200 000 so`mni tashkil
          qiladi
        </p>
        <div className="card__btn">
          <h3>Ariza qoldirish :</h3>
          <div className="btns">
            <button className="telegram">
              <a target="blank" href="https://t.me/asaxiy_rassrochka_bot">
                BOT oqrali
              </a>
              <TelegramIcon className="t-icon" />
            </button>
            <button>SAVATCHAGA QO'SHISH</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rasrochka;
