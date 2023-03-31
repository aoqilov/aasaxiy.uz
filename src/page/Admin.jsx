import React, { useState } from "react";

import { uid } from "uid";
// style
import "./pagecss/admin.scss";
import { ref, set } from "firebase/database";
import { db } from "../firebase/config";

const Admin = () => {
  const getTime = () => {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    if (hour <= 9) {
      return `0${hour}`;
    }
    if (minute <= 9) {
      return `0${minute}`;
    }
    return `${hour}:${minute}`;
  };
  const [sendObj, setSendObj] = useState({
    id: uid(3),
    otherImg: "",
    turi: null,
    name: "",
    costOff: null,
    costMain: null,
    costMonth: null,
    costYear: null,
    model: "",
    holati: null,
    time: getTime(),
  });
  const [changed, setChanged] = useState("kitob");

  //   get input value
  const getInputValue = (e) => {
    setSendObj({ ...sendObj, [e.target.name]: e.target.value });
  };
  const [validEror, setValidEror] = useState("");
  // validatsia
  const validate = () => {
    let error = {};
    let isValid = true;

    if (!sendObj.name) {
      error.name = "error";
      isValid = false;
    }
    if (!sendObj.otherImg) {
      error.name = "error";
      isValid = false;
    }
    if (!sendObj.turi) {
      error.name = "error";
      isValid = false;
    }
    if (!sendObj.costMain) {
      error.name = "error";
      isValid = false;
    }

    if (!sendObj.model) {
      error.name = "error";
      isValid = false;
    }

    if (!sendObj.holati) {
      error.name = "error";
      isValid = false;
    }
    setValidEror(error.name);
    return isValid;
  };

  // i'm start fb
  //post
  const fsPost = (e) => {
    e.preventDefault();
    if (validate()) {
      set(ref(db, `/${changed}/${sendObj.id}`), sendObj);
      setSendObj({
        id: uid(3),
        otherImg: "",
        turi: "",
        name: "",
        costOff: "",
        costMain: "",
        costMonth: "",
        costYear: "",
        model: "",
        holati: "",
        time: getTime(),
      });
    } else {
    }
  };

  console.log(sendObj);
  return (
    <div className="box__admin">
      <div className="admin">
        <div className="sidebar__admin">
          <div>
            <h4 className="double__left-title">toifalar</h4>

            <div className="turi" onClick={() => setChanged("kitob")}>
              <p className="double__left-text">kitob</p>
            </div>

            <div className="turi" onClick={() => setChanged("phone")}>
              <p className="double__left-text">phone</p>
            </div>

            <div className="turi" onClick={() => setChanged("tv")}>
              <p className="double__left-text">tv</p>
            </div>

            <div className="turi" onClick={() => setChanged("sport")}>
              <p className="double__left-text">sport</p>
            </div>

            <div className="turi" onClick={() => setChanged("kitchen")}>
              <p className="double__left-text">kitchen</p>
            </div>

            <div className="turi" onClick={() => setChanged("game")}>
              <p className="double__left-text">game</p>
            </div>
          </div>
        </div>
        <div className="input__admin">
          <div className="url">
            <p>{`url:http/firebase/${changed}`}</p>
            {validEror ? <p>enter all value {validEror}</p> : null}
          </div>
          <div className="input__container">
            <div className="input__box">
              <form>
                <label>
                  img url: <br />
                  <input
                    type="text"
                    className={sendObj.otherImg ? "input" : validEror}
                    placeholder="img URL"
                    name="otherImg"
                    onChange={getInputValue}
                    value={sendObj.otherImg}
                  />
                </label>
                <label>
                  turi (chegirma,yangi,all):
                  <br />
                  <select
                    className={sendObj.turi ? "input" : validEror}
                    name="turi"
                    onChange={getInputValue}
                    value={sendObj.turi}
                    placeholder="ex: turi"
                  >
                    <option value={"none"}>none</option>
                    <option value="chegirma">chegirma</option>
                    <option value="yangi">yangi</option>
                  </select>
                </label>
                <label>
                  mavzusi(diniy,dunyoviy,iqtisodiy):
                  <br />
                  <select
                    className={sendObj.model ? "input" : validEror}
                    name="model"
                    onChange={getInputValue}
                    value={sendObj.model}
                    placeholder="ex: model"
                  >
                    <option value="none">none</option>
                    <option value="diniy">diniy</option>
                    <option value="dunyoviy">dunyoviy</option>
                    <option value="shaxsiy">shaxsiy</option>
                    <option value="iqtisodiy">iqtisodiy</option>
                  </select>
                </label>
                <label>
                  name item:
                  <br />
                  <input
                    type="text"
                    className={sendObj.name ? "input" : validEror}
                    placeholder="name item"
                    name="name"
                    onChange={getInputValue}
                    value={sendObj.name}
                  />
                </label>
                <label>
                  costOff:
                  <br />
                  <input
                    type="text"
                    className={sendObj.costOff ? "input" : validEror}
                    placeholder="costOff"
                    name="costOff"
                    onChange={getInputValue}
                    value={sendObj.costOff}
                  />
                </label>
                <label>
                  costMain:
                  <br />
                  <input
                    type="text"
                    className={sendObj.costMain ? "input" : validEror}
                    placeholder="costMain"
                    name="costMain"
                    onChange={getInputValue}
                    value={sendObj.costMain}
                  />
                </label>
                <label>
                  cost Month:
                  <br />
                  <input
                    type="text"
                    className={sendObj.costMonth ? "input" : validEror}
                    placeholder="costMonth"
                    name="costMonth"
                    onChange={getInputValue}
                    value={sendObj.costMonth}
                  />
                </label>
                <label>
                  chegirma oy uchun:
                  <br />
                  <select
                    className={sendObj.costYear ? "input" : validEror}
                    name="costYear"
                    onChange={getInputValue}
                    value={sendObj.costYear}
                  >
                    <option value="3">3</option>
                    <option value="6">6</option>
                    <option value="12">12</option>
                  </select>
                </label>
                <label>
                  kelgan sonni:
                  <br />
                  <input
                    type="text"
                    className={sendObj.holati ? "input" : validEror}
                    placeholder="kelgan sonni"
                    name="holati"
                    onChange={getInputValue}
                    value={sendObj.holati}
                  />
                </label>
                <button onClick={fsPost}>submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
