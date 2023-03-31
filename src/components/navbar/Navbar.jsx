import React, { useMemo, useState } from "react";
import "./navbar.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import SearchIcon from "@mui/icons-material/Search";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LanguageIcon from "@mui/icons-material/Language";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="van">
      <nav>
        <div className="logo">
          <Link to="/">
            <img
              src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="searchbar">
          <div className="input">
            <input type="text" placeholder="search" />

            <CancelIcon className="icon-search" />
          </div>
          <SearchIcon className="icon-search" />
          <button>search</button>
        </div>
        <div className="icons-nav">
          <div>
            <AccountBalanceWalletIcon className="icon-n" />
            <p>payment</p>
          </div>
          <div>
            <LocalShippingIcon className="icon-n" />
            <p>track</p>
          </div>
          <div>
            <LanguageIcon className="icon-n" />
            <select className="select" id="">
              <option value="">uzbek</option>
              <option value="">rus</option>
              <option value="">eng</option>
            </select>
          </div>
          <div>
            <ShoppingCartCheckoutIcon className="icon-n" />
            <p>shoping</p>
          </div>
          <div>
            <AccountBalanceWalletIcon className="icon-n" />
            <p>favorites</p>
          </div>
          <div>
            <FavoriteBorderIcon className="icon-n" />
            <p>cabinet</p>
            <span>0</span>
          </div>
          <div>
            <PermIdentityIcon className="icon-n" />
            <p>pay</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
