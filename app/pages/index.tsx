import Head from "next/head";
import tw, { styled } from "twin.macro";

// Components
import { ShowInfo } from "@/components/Habits";

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
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <title>DASHBOARD</title>
      </Head>
      <DashboardContainer>
        <HabitsContainer>
          <div className="flex flex-col items-center justify-center min-h-screen py-2"></div>
        </HabitsContainer>
      </DashboardContainer>
    </AppContainer>
  );
}
