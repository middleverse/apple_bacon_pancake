import Head from "next/head";
import tw, { styled, css } from "twin.macro";

const appStyles = css`
  & > * {
    min-height: 100vh;
    color: white;
  }
`;

const AppContainer = styled.div`
  ${tw`bg-blue flex justify-center content-center `}
`;

export default function Home() {
  return (
    <AppContainer css={[appStyles]}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <title>DASHBOARD</title>
      </Head>
      <div>fdsjifkdlas;fjkdlas;</div>
    </AppContainer>
  );
}
