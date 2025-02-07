import styled from "@emotion/styled";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { PrivyProvider, usePrivy } from "@privy-io/react-auth";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ROUTES } from "./components/Header/Header";
import ChatScreen from "./screens/ChatScreen";
import RankingScreen from "./screens/RankingScreen";
import PortfolioScreen from "./screens/PortfolioScreen";

const PRIVY_APP_ID = import.meta.env.VITE_PRIVY_APP_ID || "";
console.log('1231234', import.meta.env);
const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  align-items: center;

  & > * {
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  min-height: calc(100vh - 194px - 80px);
  @media (min-width: 768px) {
    min-height: calc(100vh - 210px - 64px);
    max-width: calc(1160px + 32px);
    width: 100%;
    box-sizing: border-box;
  }
`;

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const { authenticated } = usePrivy();
  return authenticated ? element : <ChatScreen />;
};

const App: React.FunctionComponent = () => {
  console.log(PRIVY_APP_ID);
  const location = useLocation();

  return (
    <PrivyProvider 
      appId={PRIVY_APP_ID}
      config={{
      loginMethods: [ "wallet"],
      appearance: {
        theme: "dark", 
      },
    }}>
      <Root>
        <Header />
        <Content>
          <Routes key={location.pathname} location={location}>
            <Route path={ROUTES.CHAT.link} element={<ChatScreen />} />
            <Route path={ROUTES.EARN.link} element={<RankingScreen />} />
            <Route path={ROUTES.PORTFOLIO.link} element={<PrivateRoute element={<PortfolioScreen />} />} />
            <Route path="*" element={<ChatScreen />} />
          </Routes>
        </Content>
        <Footer />
      </Root>
    </PrivyProvider>
  );
};

export default App;
