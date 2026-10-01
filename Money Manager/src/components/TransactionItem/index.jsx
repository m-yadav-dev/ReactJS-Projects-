import "./index.css";

const TransactionItem = (props) => {
  const { item, deleteTransactionMethod } = props;
  const { id, titleInput, amountInput, transactionMethod } = item;
  const onClickDeleteTransactionItem = () => {
    deleteTransactionMethod(id);
  };
  return (
    <>
      <tr className="transaction-item">
        <td className="transaction-cell">{titleInput}</td>
        <td className="transaction-cell">Rs {amountInput}</td>
        <td className="transaction-cell">{transactionMethod}</td>
        <td className="transaction-cell">
          <button
            className="delete-btn"
            type="button"
            data-testid="delete"
            onClick={onClickDeleteTransactionItem}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
              alt="delete"
              className="delete-img"
            />
          </button>
        </td>
      </tr>
    </>
  );
};

export default TransactionItem;
