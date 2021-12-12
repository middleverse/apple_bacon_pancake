import tw, { styled } from "twin.macro";

const TodoContainer = styled.div`
  ${tw`mb-5 bg-blue-light rounded-lg p-4 text-blue font-semibold flex flex-row`}
`;
const StatusCircle = styled.div`
  ${tw`h-6 w-6 border-yellow border border-solid rounded-xl mr-4`}
`;

interface TaskProps {
  task: {
    description: string;
    status: string;
  };
}

export const Task: React.FC<TaskProps> = (props) => {
  const { task } = props;

  return (
    <TodoContainer>
      <StatusCircle css={[task.status === "DONE" && tw`bg-yellow`]} />
      <div>{task.description}</div>
    </TodoContainer>
  );
};
