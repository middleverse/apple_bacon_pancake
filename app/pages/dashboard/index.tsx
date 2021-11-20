import tw, { styled } from "twin.macro";

// Components
import { Habits } from "../../components/Habits";

const AppContainer = styled.div`
  ${tw`bg-blue flex justify-center content-center`}
`;
const DashboardContainer = styled.div`
  ${tw`container flex justify-center bg-white rounded-lg m-6 lg:m-9`}
`;
const HabitsContainer = styled.div`
  ${tw`container flex justify-center bg-yellow rounded-lg m-6 lg:m-9`}
`;

export default function Home() {
  return (
    <AppContainer>
      <DashboardContainer>
        <HabitsContainer>
          <div className="flex flex-col items-center justify-center min-h-screen py-2"></div>
          <Habits />
        </HabitsContainer>
      </DashboardContainer>
    </AppContainer>
  );
}
