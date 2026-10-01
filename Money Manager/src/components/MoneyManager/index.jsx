import { Component } from "react";
import MoneyDetails from "../MoneyDetails";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
import TransactionItem from "../TransactionItem";

const transactionTypeOptions = [
  {
    optionId: "INCOME",
    displayText: "Income",
  },
  {
    optionId: "EXPENSES",
    displayText: "Expenses",
  },
];

class MoneyManager extends Component {
  state = {
    historyListItems: [],
    titleInput: "",
    amountInput: "",
    transactionType: transactionTypeOptions[0].optionId,
  };

  onChangeTitleInput = (event) => {
    this.setState({ titleInput: event.target.value });
  };
  onChangeAmountInput = (event) => {
    this.setState({ amountInput: event.target.value });
  };

  onChangeTransactionType = (event) => {
    this.setState({ transactionType: event.target.value });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    const { titleInput, amountInput, transactionType } = this.state;

    if (titleInput !== "" && amountInput !== "") {
      const transactionOption = transactionTypeOptions.find(
        (eachOption) => eachOption.optionId === transactionType,
      );

      const newTransaction = {
        id: uuidv4(),
        titleInput: parseInt(titleInput),
        amountInput: parseInt(amountInput),
        transactionMethod: transactionOption.displayText,
      };

      this.setState((prevState) => ({
        historyListItems: [...prevState.historyListItems, newTransaction],
        titleInput: "",
        amountInput: "",
        transactionType: transactionTypeOptions[0].optionId,
      }));
    }
  };

  deleteTransaction = (transactionId) => {
    const { historyListItems } = this.state;
    const filterTransactionItems = historyListItems.filter(
      (eachId) => eachId.id !== transactionId,
    );
    this.setState({ historyListItems: filterTransactionItems });
  };

  getExpenseAmount = () => {
    const { historyListItems } = this.state;
    let expenseAmount = 0;

    historyListItems.forEach((eachTransaction) => {
      if (eachTransaction.transactionMethod === "Expenses") {
        expenseAmount += eachTransaction.amountInput;
      }
    });
    return expenseAmount;
  };

  getIncomeAmount = () => {
    const { historyListItems } = this.state;
    let incomeAmount = 0;

    historyListItems.forEach((eachTransaction) => {
      if (eachTransaction.transactionMethod === "Income") {
        incomeAmount += eachTransaction.amountInput;
      }
    });
    return incomeAmount;
  };

  getBalanceAmount = () => {
    const { historyListItems } = this.state;
    let incomeAmount = 0;
    let expenseAmount = 0;

    historyListItems.forEach((eachTransaction) => {
      if (eachTransaction.transactionMethod === "Income") {
        incomeAmount += eachTransaction.amountInput;
      } else {
        expenseAmount += eachTransaction.amountInput;
      }
    });

    return incomeAmount - expenseAmount;
  };

  render() {
    const { historyListItems, titleInput, amountInput, transactionType } =
      this.state;

    const getBalanceAmount = this.getBalanceAmount();
    const getIncomeAmount = this.getIncomeAmount();
    const getExpenseAmount = this.getExpenseAmount();

    return (
      <>
        <div className="bg-container">
          <div className="header-container">
            <h1 className="header-heading">Hi, Richard</h1>
            <p className="header-para">
              Welcome back to your
              <span className="money-manager-span"> Money Manager</span>
            </p>
          </div>
          <ul className="money-details-container">
            <MoneyDetails
              incomeAmount={getIncomeAmount}
              expenseAmount={getExpenseAmount}
              balanceAmount={getBalanceAmount}
            />
          </ul>
          <div className="transaction-container">
            <div className="form-card">
              <h1 className="section-heading">Add Transaction</h1>
              <form onSubmit={this.onSubmitForm}>
                <label className="input-label" htmlFor="title">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="input-field"
                  placeholder="TITLE"
                  value={titleInput}
                  onChange={this.onChangeTitleInput}
                />

                <label className="input-label" htmlFor="amount">
                  Amount
                </label>
                <input
                  type="text"
                  id="amount"
                  value={amountInput}
                  className="input-field"
                  placeholder="AMOUNT"
                  onChange={this.onChangeAmountInput}
                />

                <label className="input-label" htmlFor="type">
                  Type
                </label>
                <select
                  onChange={this.onChangeTransactionType}
                  id="type"
                  className="input-field"
                  value={transactionType}
                >
                  {transactionTypeOptions.map((eachOption) => (
                    <option
                      key={eachOption.optionId}
                      value={eachOption.optionId}
                    >
                      {eachOption.displayText}
                    </option>
                  ))}
                </select>

                <button type="submit" className="add-btn">
                  Add
                </button>
              </form>
            </div>

            <div className="history-card">
              <h1 className="section-heading">History</h1>
              <div className="history-transactions-container">
                <table className="history-table">
                  <thead>
                    <tr className="table-header">
                      <th className="table-header-cell">Title</th>
                      <th className="table-header-cell">Amount</th>
                      <th className="table-header-cell">Type</th>
                      <th className="table-header-cell"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <TransactionItem /> */}
                    {historyListItems.map((eachItem) => (
                      <TransactionItem
                        key={eachItem.id}
                        item={eachItem}
                        deleteTransactionMethod={this.deleteTransaction}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MoneyManager;
