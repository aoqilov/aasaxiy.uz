import React from "react";
import "./Sidebar.scss";
import "./../page/pagecss/book.scss";

const Sidebar = ({ sidebar, sorted }) => {
  return (
    <div>
      <h4 className="double__left-title">toifalar</h4>

      {sidebar.map((item) => {
        return (
          <div
            key={item.id}
            className="turi"
            onClick={() => sorted(item.value)}
          >
            <p className="double__left-text">{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
