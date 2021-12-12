import tw, { styled } from "twin.macro";

const TodoContainer = styled.div`
  ${tw`m-5 bg-blue-light`}
`;

interface TaskProps {
  task: {
    description: string;
    status: string;
  };
}

export const Task: React.FC<TaskProps> = (props) => {
  const { task } = props;

  return <div>{task.description}</div>;
};
