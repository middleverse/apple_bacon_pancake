import Head from "next/head";
import tw, { styled, css } from "twin.macro";

const appStyles = css`
  & > * {
    min-height: 100vh;
    color: white;
  }
`;

const AppContainer = styled.div`
  ${tw`flex justify-center content-center `}
`;

export default function Home() {
  return (
    <AppContainer css={[appStyles]}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
        <title>DASHBOARD</title>
      </Head>
      <div>fdsjifkdlas;fjkdlas;</div>
    </AppContainer>
  );
}
