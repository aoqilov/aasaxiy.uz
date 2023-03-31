import React from "react";

import "./titleMap.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const TitleMap = ({ cardname }) => {
  return (
    <div>
      <div className="title__map">
        <p className="title__map-text">asosiy</p>
        <KeyboardArrowRightIcon className="title__map-icon" />
        <p className="title__map-text">books</p>
        {cardname ? (
          <>
            <KeyboardArrowRightIcon className="title__map-icon" />
            <p className="title__map-text_black">{cardname}</p>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TitleMap;
