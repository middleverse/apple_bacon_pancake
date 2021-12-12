import tw, { styled } from "twin.macro";

// Components
import { Habits } from "../../components/Habits";
import { Tasks } from "../../components/Tasks";

const AppContainer = styled.div`
  ${tw`bg-blue flex justify-center content-center p-5 md:p-8`}
`;
const DashboardContainer = styled.div`
  ${tw`container flex flex-row justify-center bg-white p-5 lg:p-10 rounded-lg grid grid-cols-5 gap-5 lg:gap-10`}
`;
const SidebarContainer = styled.div`
  ${tw`col-span-2`}
`;

const HabitsContainer = styled.div`
  ${tw`container flex justify-center bg-yellow rounded-lg p-5 lg:p-9 col-span-3`}
`;

export default function Home() {
  return (
    <AppContainer>
      <DashboardContainer>
        <SidebarContainer>
          <Tasks />
        </SidebarContainer>

        <HabitsContainer>
          <div className="flex flex-col items-center justify-center min-h-screen py-2"></div>

          <Habits />
        </HabitsContainer>
      </DashboardContainer>
    </AppContainer>
  );
}
