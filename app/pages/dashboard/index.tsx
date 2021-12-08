import tw, { styled } from "twin.macro";

// Components
import { Habits } from "../../components/Habits";
import { Todos } from "../../components/Todos";

const AppContainer = styled.div`
  ${tw`bg-blue flex justify-center content-center`}
`;
const DashboardContainer = styled.div`
  ${tw`container flex flex-row justify-center bg-white rounded-lg m-6 lg:m-9 grid grid-cols-3`}
`;
const SidebarContainer = styled.div`
  ${tw``}
`;

const HabitsContainer = styled.div`
  ${tw`container flex justify-center bg-yellow rounded-lg m-6 lg:m-9 col-span-2`}
`;

export default function Home() {
  return (
    <AppContainer>
      <DashboardContainer>
        <SidebarContainer>
          <Todos />
        </SidebarContainer>

        <HabitsContainer>
          <div className="flex flex-col items-center justify-center min-h-screen py-2"></div>

          <Habits />
        </HabitsContainer>
      </DashboardContainer>
    </AppContainer>
  );
}
