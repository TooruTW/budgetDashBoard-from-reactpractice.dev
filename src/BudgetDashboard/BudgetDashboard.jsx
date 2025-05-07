import { useState } from "react";
import MonthSelector from "./components/MonthSelector";
import PieChat from "./components/PieChart";
import Transactions from "./components/Transactions";

function getTotalAmount(list) {
  const total = list.reduce((t, c) => t + c.amount, 0);
  console.log("total amont", total);
  return total;
}

function getMonthList(list, year, month) {
  const monthList = list.filter((t) =>
    t.date.includes(`${year}-${(month + 1).toString().padStart(2, 0)}`)
  );
  console.log("selected month list", monthList);
  return monthList;
}

export default function BudgetDashboard({ transactions }) {
    const [month, setMonth ] = useState(0)
    const [year, setYear ] = useState(2024)

function handleArrow(isPlus) {
    if (isPlus) {
        if(month === 11){
            setMonth(0)
            setYear(year + 1)
            return
        }
      setMonth( month + 1 )
      return;
    }
    if(month === 0){
        setYear(year - 1)
        setMonth(11)
        return
    }
    setMonth( month - 1 )
    return;
  }

  getTotalAmount(transactions);

  const thisMonthList = getMonthList(transactions, year, month)
  const thisMonthAmount = getTotalAmount(thisMonthList);
  
  return (
    <div className="bg-blue-300 w-full h-screen flex flex-col items-center justify-center px-8 pb-16">
      {/* section 1 title and month selector */}
      <div className="flex items-center justify-center relative w-full my-8">
        <h4 className=" absolute left-0 text-black/50">BUDGET DASHBOAR</h4>{" "}
        <MonthSelector onClick={handleArrow} currentMonth={month} />
      </div>
      {/* section 2 total amount */}
      <div className="w-full bg-white rounded-2xl py-4 flex items-center justify-center gap-4 mb-4">
        <h4>TOTAL SPENT THIS MONTH</h4>
        <h3 className="text-2xl font-bold">$ {thisMonthAmount}</h3>
      </div>
      {/* section 3 pie chart and transaction */}
      <div className="flex justify-between gap-4 w-full">
        <div className="w-full bg-white rounded-2xl p-4">
          <h4 className="text-black/50">EXPENSES BY CATEGORY</h4>
          <PieChat monthList={thisMonthList}/>
        </div>
        <div className="w-full bg-white rounded-2xl p-4">
          <h4 className="text-black/50">TRANSACTIONS THIS MONTH</h4>
          <Transactions monthList={thisMonthList}/>
        </div>
      </div>
    </div>
  );
}
