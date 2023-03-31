import React from "react";
import "./miks.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import { BookSidebar, BooksNet } from "./../../api/BooksNet";

const Miks = () => {
  return (
    <div className="miks__main">
      <div className="miks">
        <MenuIcon className="icon-menu" />
        <div className="tema">
          <Link className="tema-name" to={"/books"}>
            kitoblar
          </Link>
          <Link className="tema-name" to={"/phone"}>
            Telefonlar va gadjetlar
          </Link>
          <Link className="tema-name" to={"/tv"}>
            televizorlar
          </Link>
          <Link className="tema-name" to={"/sport"}>
            Sport tovarlari
          </Link>
          <Link className="tema-name" to={"/kitchen"}>
            Maishiy texnika
          </Link>
          <Link className="tema-name" to={"/admin-assaxiy"}>
            admin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Miks;
