import { useState } from "react";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Purchase Apple", amount: 12, category: "Shopping" },
    { id: 2, description: "Travel Cost", amount: 15, category: "Travel" },
    { id: 3, description: "Buy Phone", amount: 15, category: "Gadget" },
    { id: 4, description: "Buy Tab", amount: 18, category: "Gadget" },
  ]);
  return (
    <>
      <div className="col-lg-8 mx-auto p-4 py-md-5">
        <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center text-body-emphasis text-decoration-none"
          >
            Expense Tracker
          </a>
        </header>
        <ExpenseList
          expenses={expenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
        />
      </div>
    </>
  );
}

export default App;
