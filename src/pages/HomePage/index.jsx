import { useState } from "react";
import Form from "../../components/Form";
import Header from "../../components/Header";
import TotalMoney from "../../components/TotalMoney";
import List from "../../components/List";
import Card from "../../components/Card";
import "./index.css";

const HomePage = ({ setIsLoggedIn }) => {
  const [listTransactions, setListTransactions] = useState([]);
  const [listTransactionsFilter, setListTransactionsFilter] = useState([]);

  return (
    <div className="animate__animated animate__fadeIn">
      <Header setIsLoggedIn={setIsLoggedIn} />
      <main className="main__homepage">
        <div className="main__container">
          <section>
            <Form
              listTransactions={listTransactionsFilter}
              setListTransactions={setListTransactions}
              setListTransactionsFilter={setListTransactionsFilter}
            />
            {listTransactions.length > 0 ? (
              <TotalMoney listTransactions={listTransactionsFilter} />
            ) : null}
          </section>
          <aside>
            <List
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
              listTransactionsFilter={listTransactionsFilter}
              setListTransactionsFilter={setListTransactionsFilter}
            />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
