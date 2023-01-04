import { useContext, useState, KeyboardEvent } from "react";
import * as C from "./styles";
import { Item } from "../../types/Item";
import { Context } from "../../context/UseProvider";
import { newDateAdjusted } from "../../helpers/dateFilter";
import { itens } from "../../data/itens";
import { categories } from "../../data/categories";

const InputArea = () => {
  const { list, setList } = useContext(Context);

  const [inputDate, setInputDate] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputvalue, setInputValue] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  const capture = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      handleClick(itens);
    }
  };
  const handleClick = (itens: Item[]) => {
    addList({
      date: newDateAdjusted(inputDate),
      category: inputCategory,
      title: inputTitle,
      value: inputvalue,
    });
  };

  const addList = (itens: Item) => {
    let errors: string[] = [];
    const check = list.find((e) => e.title === itens.title);

    if (check) {
      alert("Esse nome já existe!");
      return;
    }
    if (isNaN(new Date(inputDate).getTime())) {
      errors.push("Data inválida!");
    }
    if (!categoryKeys.includes(inputCategory)) {
      errors.push("Categoria inválida!");
    }
    if (inputTitle === "") {
      errors.push("Título vazio!");
    }
    if (inputvalue <= 0) {
      errors.push("Valor inválido!");
    }
    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      let newList = [...list];
      newList.push(itens);
      setList(newList);
      setInputDate("");
      setInputCategory("");
      setInputTitle("");
      setInputValue(0);
    }
  };

  return (
    <C.Container>
      <C.InputLabel>
        <C.InputTitle>Data:</C.InputTitle>
        <C.Input
          type="date"
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Categoria:</C.InputTitle>
        <C.Select
          value={inputCategory}
          onChange={(e) => setInputCategory(e.target.value)}
        >
          <>
            <option></option>
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>
                {categories[key].title}
              </option>
            ))}
          </>
        </C.Select>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Nome:</C.InputTitle>
        <C.Input
          type="text"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Valor:</C.InputTitle>
        <C.Input
          type="number"
          value={inputvalue}
          onKeyDown={(event) => capture(event)}
          onChange={(e) => setInputValue(parseFloat(e.target.value))}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.Button onClick={() => handleClick(itens)}>Adicionar</C.Button>
      </C.InputLabel>
    </C.Container>
  );
};

export default InputArea;
