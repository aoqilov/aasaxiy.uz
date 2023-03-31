import React, { useEffect } from "react";
import { useState } from "react";

// import scss
import "./pagecss/book.scss";

// import component

import TitleMap from "../components/title-map/titleMap";

// import icons

//import Api

import { BookSidebar } from "./../api/BooksNet";
import FooterMain from "../components/footer/footerMain";
import Sidebar from "../components/Sidebar";
import MenuBar from "../components/MenuBar";
import { onValue, ref } from "firebase/database";
import { db } from "../firebase/config";

//import toglebtn

const Books = () => {
  // firebase
  const [bookAll, setbookAll] = useState([]);
  const [main, setMain] = useState([]);

  const myGet = () => {
    const yuruvchiUrl = ref(db, `/kitob`);
    onValue(yuruvchiUrl, (ickiBaza) => {
      const data = ickiBaza.val();
      if (data !== null) {
        setbookAll([]);
        setMain([]);
        console.log(data);
        for (let value in data) {
          setbookAll((prev) => [...prev, data[value]]);
          setMain((prev) => [...prev, data[value]]);
        }
      }
    });
  };

  useEffect(() => {
    myGet();
  }, []);

  // for api
  const [sidebar, setSidebar] = useState(BookSidebar);
  const [pageName, setPageName] = useState("barchasi");

  // like

  const sorted = (nomi) => {
    const res = bookAll.filter((item) => {
      if (nomi === "all") return bookAll;
      else {
        return item.model === nomi;
      }
    });
    setMain(res);
    setPageName(nomi);
  };

  const soertedByType = (type) => {
    const modern = bookAll.filter((item) => {
      if (type === "all") return main;
      return item.turi === type;
    });
    setMain(modern);
  };

  const cutCard = (length) => {
    const page = bookAll.slice(0, length);
    setMain(page);
  };
  // each paage ==12
  const [curentPage, setCurentPage] = useState(1);
  const [postPer, setPostPer] = useState(12);

  const Last = curentPage * postPer;
  const First = Last - postPer;
  const curentPost = main.slice(First, Last);

  const paginateChange = (num) => {
    setCurentPage(num);
  };

  return (
    <div>
      <div className="books">
        <TitleMap />
        <div className="double">
          <div className="double__left">
            <Sidebar
              sidebar={sidebar}
              asosiyApi={bookAll}
              sorted={sorted}
              setMain={setMain}
            />
          </div>
          <div className="double__right">
            <MenuBar
              main={curentPost}
              pageName={pageName}
              soertedByType={soertedByType}
              cutCard={cutCard}
              postPer={postPer}
              total={main.length}
              paginateChange={paginateChange}
            />
          </div>
        </div>
        <FooterMain />
      </div>
    </div>
  );
};

export default Books;
