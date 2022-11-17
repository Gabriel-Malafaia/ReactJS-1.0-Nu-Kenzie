import Card from "../Card";
import "./index.css";

const List = ({listTransactions,setListTransactions,listTransactionsFilter,setListTransactionsFilter}) => {

  const verifyButton = (target) => {
    const allButtons = document.querySelectorAll(".isButton");
    if (target.tagName == "BUTTON") {
      allButtons.forEach((button) => {
        button.id !== target.id
          ? (button.className = "isButton")
          : (button.className = "isButton button__sellected");
      });

      if (listTransactions.length > 0) {
        const category = target.id;
        if (target.id == "entry" || target.id == "cost") {
          setListTransactionsFilter(
            listTransactions.filter((elem) => elem.category == category)
          );
        } else {
          setListTransactionsFilter(listTransactions);
        }
      }
    }
  };


  return (
    <div className="list__container">
      <div className="list__header">
        <h2 className="font-title-3">Resumo financeiro</h2>
        <div onClick={(e) => verifyButton(e.target)}>
          <button id="button__all" className="isButton button__sellected">
            Todos
          </button>
          <button id="entry" className="isButton">
            Entradas
          </button>
          <button id="cost" className="isButton">
            Despesas
          </button>
        </div>
      </div>

      {listTransactions.length <= 0 ? (
        <div className="list__middle">
          <h2 className="font-title-3">
            Você ainda não possui nenhum lançamento
          </h2>
        </div>
      ) : null}

      {listTransactions.length <= 0 ? (
        <ul className="list__bottom">
          <li className="animate__animated animate__fadeIn list__default bg-color-grey-1">
            <div></div>
            <div></div>
          </li>

          <li className="animate__animated animate__fadeIn list__default bg-color-grey-1">
            <div></div>
            <div></div>
          </li>

          <li className="animate__animated animate__fadeIn list__default bg-color-grey-1">
            <div></div>
            <div></div>
          </li>
        </ul>
      ) : (
        <ul className="list__bottom">
          {listTransactionsFilter.map((transaction, index) => {
            const { description, value, category } = transaction;
            return (
              <Card
                listTransactionsFilter={listTransactionsFilter}
                setListTransactionsFilter={setListTransactionsFilter}
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
                id={transaction.id}
                key={index}
                description={description}
                price={value.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  style: "currency",
                  currency: "BRL",
                })}
                category={category}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default List;
