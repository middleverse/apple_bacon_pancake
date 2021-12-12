import tw, { styled } from "twin.macro";
import { Task } from "./Task";

const TodosContainer = styled.div`
  ${tw``}
`;

const Heading2 = styled.div`
  ${tw`font-display font-extrabold text-blue text-2xl mb-5`}
`;

const tasks = [
  {
    description: "Order Atomic Habits",
    done: false,
    archived: false,
  },
  {
    description: "Call Osteopath",
    done: false,
    archived: false,
  },
];

export const Tasks: React.FC = () => {
  return (
    <TodosContainer>
      <Heading2>TASKS</Heading2>
      {tasks.map((task) => (
        <Task task={task}></Task>
      ))}
    </TodosContainer>
  );
};
