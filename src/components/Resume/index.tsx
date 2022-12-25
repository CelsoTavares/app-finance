import * as C from "./styles";

type Props = {
  title: string;
  value: number;
  color?: string;
};
const Resume = ({ title, value, color }: Props) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Value color={color}>R$ {value}</C.Value>
    </C.Container>
  );
};

export default Resume;
