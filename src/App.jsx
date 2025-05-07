import BudgetDashboard from "./BudgetDashboard/BudgetDashboard"
import transactions from "../static/transactions.json"

const data = transactions

function App() {
  return (
    <>
    <div className="w-full min-h-screen h-full flex justify-center items-center">
      <BudgetDashboard transactions={data} />
    </div>
    </>
  )
}

export default App
