import { useState } from "react";
import "./index.css";

const Card = ({listTransactionsFilter,setListTransactionsFilter,listTransactions,setListTransactions,id,description,price,category,}) => {
  const buttons = document.querySelectorAll(".isButton");
  return (
    <li
      id={id}
      className={
        category == "entry"
          ? "isEntry animate__animated animate__fadeIn list__dinamic bg-color-grey-1"
          : "list__dinamic animate__animated animate__fadeIn bg-color-grey-1"
      }
    >
      <div className="list__dinamic--left">
        <h2 className="font-title-3">{description}</h2>
        <div>
          <p>{price}</p>
          <button
            onClick={(e) => {
              const idClick = e.target.closest("li").id;
              const newArray = listTransactions.filter(
                (elem, index) => elem.id !== Number(idClick)
              );

              buttons.forEach((elem, index) => {
                if (
                  elem.classList.contains("button__sellected") &&
                  elem.id !== 0
                ) {
                  elem.classList.remove("button__sellected");
                  buttons[0].classList.add("button__sellected");
                }
              });

              setListTransactions(newArray);
              setListTransactionsFilter(newArray);
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>

      <div className="list__dinamic--right">
        <p className="font-text-2">
          {category == "entry" ? "Entrada" : "Despesa"}
        </p>
      </div>
    </li>
  );
};

export default Card;
