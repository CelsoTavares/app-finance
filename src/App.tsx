import { useState, useEffect, useContext } from "react";
import * as C from "./stylesGlobal/appStyles";
import { Item } from "./types/Item";
import { FilterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import TableArea from "./components/TableArea";
import InfoArea from "./components/InfoArea";
import { categories } from "./data/categories";
import InputArea from "./components/InputArea";
import { Context } from "./context/UseProvider";

const App = () => {
  const { list } = useContext(Context);
  const [filterList, setFilterList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;
    for (let i in filterList) {
      if (categories[filterList[i].category].expense) {
        expenseCount += filterList[i].value;
      } else {
        incomeCount += filterList[i].value;
      }
    }
    setExpense(expenseCount);
    setIncome(incomeCount);
  }, [filterList]);

  useEffect(() => {
    setFilterList(FilterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <TableArea filterList={filterList} />
        <InputArea />
      </C.Body>
    </C.Container>
  );
};

export default App;
