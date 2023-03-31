import React from "react";
import "./pagination.scss";
const Pagination = ({ postPer, total, paginateChange }) => {
  const numbers = [];
  for (let i = 1; i <= Math.ceil(total / postPer); i++) {
    numbers.push(i);
  }
  console.log(numbers);

  return (
    <div>
      <ul className="all__num">
        <li className="page">page</li>
        {numbers.map((num) => {
          return (
            <li
              onClick={() => {
                paginateChange(num);
              }}
              key={num}
            >
              {num}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
