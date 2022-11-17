import "./index.css";

const TotalMoney = ({listTransactions}) => {
  const totalMoney = listTransactions.reduce((acc,cur) => {return acc + cur.value},0)
  const totalMoneyInBrl = totalMoney.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
  
  return (
    <div className="animate__animated animate__zoomIn border-radius container__totalmoney">
      <div className="total__money--left">
        <p className="font-title-3 color-grey-4">Valor Total:</p>
        <span className="font-title-4 color-grey-3">
          o Valor se refere ao saldo
        </span>
      </div>

      <div className="total__money--right">
        <span className="font-title-3 color-primary">{totalMoneyInBrl}</span>
      </div>
    </div>
  );
};

export default TotalMoney;
