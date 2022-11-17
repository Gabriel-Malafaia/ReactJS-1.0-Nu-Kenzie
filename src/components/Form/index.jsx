import { useState } from "react";
import "./index.css";

const Form = ({listTransactions,setListTransactions,setListTransactionsFilter}) => {
  const [selectValue, setSelectValue] = useState("");
  const [priceValue, setPriceValue] = useState(0);
  const [descriptionValue, setDescriptionValue] = useState("");
  const [count, setCount] = useState(0);

  const responseUser = {
    id: count,
    description: descriptionValue,
    value: selectValue == "cost" ? -priceValue : priceValue,
    category: selectValue,
  };        

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        selectValue == "" ? (responseUser.category = "entry") : 0;
        setListTransactions([...listTransactions, responseUser]);
        setListTransactionsFilter([...listTransactions, responseUser]);
        setCount(count + 1);
        const cleanInputs = document.querySelectorAll(".cleanInput");
        cleanInputs[0].value = "";
        cleanInputs[1].value = "";
      }}
      className="form__homepage"
    >
      <p className="font-text-2">Descrição</p>

      <div className="form__homepage--description">
        <input
          required
          onChange={(e) => setDescriptionValue(e.target.value)}
          className="cleanInput border-radius bg-color-grey-1"
          placeholder="Digite aqui sua descrição"
          type="text"
        />
        <span className="color-grey-3 font-text-2">Ex: Compra de roupas</span>
      </div>

      <div className="form__homepage--select">
        <div>
          <label htmlFor="">Valor</label>
          <input
            required
            onChange={(e) => setPriceValue(Math.abs(e.target.value))}
            className="cleanInput border-radius bg-color-grey-1"
            type="number"
          />
          <p>R$</p>
        </div>

        <div>
          <label htmlFor="input__value">Tipo de Valor</label>
          <select
            onChange={(e) => setSelectValue(e.target.value)}
            className="border-radius bg-color-grey-1"
            name=""
            id="input__value"
          >
            <option value="entry">Entrada</option>
            <option value="cost">Despesa</option>
          </select>
        </div>
      </div>

      <button
        className="border-radius bg-color-primary color-grey-1 font-title-3"
        type="submit"
      >
        Inserir valor
      </button>
    </form>
  );
};

export default Form;
