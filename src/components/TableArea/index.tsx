import * as C from "./styles";
import { Item } from "../../types/Item";
import { FormateDate } from "../../helpers/dateFilter";
import { categories } from "../../data/categories";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useContext } from "react";
import { Context } from "../../context/UseProvider";

type Props = {
  filterList: Item[];
};
const TableArea = ({ filterList }: Props) => {
  const { list, setList } = useContext(Context);

  const Del = (list: Item[], title: string) => {
    const listTitle = list.filter((i) => i.title !== title);

    setList(listTitle);
  };
  return (
    <C.Container>
      <C.DivTitle>
        <C.Title widht={100}> Data </C.Title>
        <C.Title widht={130}> Categoria </C.Title>
        <C.Title> Título </C.Title>
        <C.Title widht={150}> Valor </C.Title>
      </C.DivTitle>
      {filterList.map((item, index) => (
        <C.ContainerItens key={index}>
          <C.Date>
            <span>Data: </span> {FormateDate(item.date)}
          </C.Date>

          <C.Category color={categories[item.category].color}>
            <span>Categoria: </span> {categories[item.category].title}
          </C.Category>

          <C.Titulo>
            <span>Título: </span> {item.title}
          </C.Titulo>

          <C.Value color={categories[item.category].expense ? "red" : "green"}>
            <span>Valor: </span>R$ {item.value}
            <p onClick={() => Del(list, item.title)}>
              <RiDeleteBin2Fill />
            </p>
          </C.Value>
        </C.ContainerItens>
      ))}
    </C.Container>
  );
};

export default TableArea;
