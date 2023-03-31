import React, { useState } from "react";
import { useLocation } from "react-router-dom";
// component
import FooterMain from "../components/footer/footerMain";

// scss
import "./pagecss/xarid.scss";

const Xarid = () => {
  const [knopka1, setKnopka1] = useState(true);
  const [knopka2, setKnopka2] = useState(false);
  const [promoCod, setPromoCod] = useState(false);

  const { state } = useLocation();
  const oneBook = state;
  console.log();
  return (
    <>
      <div className="xarid">
        <h1>To'lov malumotlari</h1>

        <div className="xaridbox">
          <div className="xarid__input">
            <form>
              <label htmlFor="ha">
                Telefon <br />
                <input type="text" placeholder="your number" id="ha1" />
              </label>
              <label htmlFor="ha2">
                F.I.SH <br />
                <input type="text" placeholder="your number" id="ha2" />
              </label>
              <label htmlFor="">
                Viloyat* <br />
                <select id="" placeholder="viloyatni tanlang">
                  <option value="tashkent">Tashkent</option>
                  <option value="andijon">Andijon</option>
                  <option value="farg'ona">Farg'ona</option>
                </select>
              </label>
              <label htmlFor="">
                Tuman *<br />
                <select id="" placeholder="tuman tanlang">
                  <option value="3tepa">Uchtepa</option>
                  <option value="yunusobod">Yunusobod</option>
                  <option value="mirobod">Mirobod</option>
                </select>
              </label>
            </form>
            <div className="jonatsh__turi">
              <h2>Способ получения</h2>
              <div className="turi__btn">
                <p
                  onClick={() => {
                    setKnopka1(!knopka1);
                    setKnopka2(false);
                  }}
                  className={knopka1 ? "p active" : "p"}
                >
                  uyga yetkazib berish
                </p>
                <p
                  className={knopka2 ? "p active" : "p"}
                  onClick={() => {
                    setKnopka1(false);
                    setKnopka2(true);
                  }}
                >
                  BTS fillialri
                </p>
              </div>
            </div>
            <div className="adres">
              <label htmlFor="">
                Aholi punkiti <br />
                <select name="" id="" className="input">
                  <option value="aaa">aaa</option>
                  <option value="aaa">aaa</option>
                  <option value="aaa">aaa</option>
                  <option value="aaa">aaa</option>
                </select>
              </label>
              <label htmlFor="">
                manzil <br />
                <input type="text" placeholder="manzil" className="input" />
              </label>
              <label htmlFor="">
                ish joyingiz <br />
                <textarea
                  type="text"
                  placeholder="ish joyingiz"
                  className="input"
                />
              </label>
              <label htmlFor="">
                qo'shimcha <br />
                <textarea
                  type="text"
                  placeholder="qo'shimcha"
                  className="input"
                />
              </label>
              <p
                onClick={() => setPromoCod(!promoCod)}
                className={promoCod ? "promo active" : "promo"}
              >
                Promo-kod bormi ?
              </p>
              {promoCod ? (
                <>
                  <input type="text" style={{ width: "150px" }} />
                </>
              ) : (
                ""
              )}
            </div>
            <div className="radio__menu">
              <p>
                <input type="radio" name="fav" id="" />
                Karta orqali onlayn to'lov (UzCard, Humo, Visa, MasterCard)
              </p>
              <p>
                <input type="radio" name="fav" id="" />
                Mahsulotni olganda (naqd)
              </p>
              <p>
                <input type="radio" name="fav" id="" />
                Hisob raqam orqali to'lash
              </p>
              <p>
                <input type="radio" name="fav" id="" />
                Bo'lib to'lash
              </p>
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.720324645706!2d69.21981131479357!3d41.29319090979342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bd7244bb96f%3A0x8c305c45e87a4b89!2sAsaxiy%20Books!5e0!3m2!1sru!2s!4v1676132374062!5m2!1sru!2s"
                width="100%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="agree">
              <p>
                <input type="checkbox" name="" id="" value={true} />
                Xarid qilish qoidalariga roziman
              </p>
              <div className="agree-btn">
                <button className="buyurtma">Buyurtma qilish</button>
                <button className="nazad">Orqaga</button>
              </div>
            </div>
          </div>
          <div className="xarid__tovar">
            <p></p>
            {oneBook["filterData"].map((item) => {
              return (
                <div className="card">
                  <h1 className="title">Maxsulot narxi</h1>
                  <h3 className="cost">{item.costMain}</h3>
                  <div className="book__col">
                    <div className="row-1">
                      <img src={item.otherImg[0]} alt="surat" />
                    </div>
                    <div className="row-2">
                      <h3>
                        {item.name} <br /> 1 Dona <br /> {item.costMain}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <FooterMain />
    </>
  );
};

export default Xarid;
