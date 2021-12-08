import tw, { styled } from "twin.macro";

const TodosContainer = styled.div`
  ${tw`m-5`}
`;

export const Todos: React.FC = () => {
  return (
    <TodosContainer>
      <h2>TASKS</h2>
    </TodosContainer>
  );
};
