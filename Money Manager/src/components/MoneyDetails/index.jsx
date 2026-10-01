// import React from "react";
// import "./index.css";
// const MoneyDetails = () => {
//   return (
//     <ul className="money-details-container">
//       <li className="balance-card green">
//         <div className="card-icon-container">
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
//             alt="balance"
//             className="card-img"
//           />
//         </div>
//         <div className="card-text-container">
//           <p className="card-label">Your Balance</p>
//           <p className="card-amount">Rs 4000</p>
//         </div>
//       </li>

//       <li className="balance-card blue">
//         <div className="card-icon-container">
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
//             alt="income"
//             className="card-img"
//           />
//         </div>
//         <div className="card-text-container">
//           <p className="card-label">Your Income</p>
//           <p className="card-amount">Rs 5000</p>
//         </div>
//       </li>

//       <li className="balance-card purple">
//         <div className="card-icon-container">
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
//             alt="expenses"
//             className="card-img"
//           />
//         </div>
//         <div className="card-text-container">
//           <p className="card-label">Your Expenses</p>
//           <p className="card-amount">Rs 1000</p>
//         </div>
//       </li>
//     </ul>
//   );
// };

// export default MoneyDetails;

import "./index.css";

const MoneyDetails = (props) => {
  const { incomeAmount, expenseAmount, balanceAmount } = props;
  return (
    <>
      <li className="balance-card green">
        <div className="card-icon-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="card-img"
          />
        </div>
        <div className="card-text-container">
          <p className="card-label">Your Balance</p>
          {/* Static Calculation: 60000 Income - 15000 Expense = 45000 */}
          <p className="card-amount" data-testid="balanceAmount">
            {/* Rs 0 */}
            {`Rs ${Math.abs(balanceAmount)}`}
          </p>
        </div>
      </li>
      <li className="balance-card blue">
        <div className="card-icon-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="card-img"
          />
        </div>
        <div className="card-text-container">
          <p className="card-label">Your Income</p>
          <p className="card-amount" data-testid="incomeAmount">
            {/* Rs 0 */}
            {`Rs ${incomeAmount}`}
          </p>
        </div>
      </li>
      <li className="balance-card purple">
        <div className="card-icon-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="card-img"
          />
        </div>
        <div className="card-text-container">
          <p className="card-label">Your Expenses</p>
          <p className="card-amount" data-testid="expensesAmount">
            {/* Rs 0 */}
            {`Rs ${expenseAmount}`}
          </p>
        </div>
      </li>
    </>
  );
};

export default MoneyDetails;
