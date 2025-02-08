import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Route, Routes, useLocation } from "react-router-dom";
import { usePrivy } from "@privy-io/react-auth";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ROUTES } from "./components/Header/Header";
import ChatScreen from "./screens/ChatScreen";
import RankingScreen from "./screens/RankingScreen";
import PortfolioScreen from "./screens/PortfolioScreen";
import * as ethers from "ethers";
import { handleSignMessage } from "./utils/auth";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  margin: auto;
  @media (min-width: 768px) {
    min-height: calc(100vh - 210px - 64px);
    max-width: calc(1160px + 32px);
    width: 100%;
    margin: auto;
    box-sizing: border-box;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); /* Затемнение */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #1f1e25;
  padding: 24px;
  border-radius: 8px;
  text-align: center;
  color: white;
  max-width: 400px;
`;

const LoginButton = styled.button`
  background: #4a90e2;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 16px;

  &:hover {
    background: #357bd8;
  }
`;

const App: React.FunctionComponent = () => {
  const location = useLocation();
  const { authenticated,  user, login, ready } = usePrivy();
  const [showModal, setShowModal] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (!ready) return;
    if (!authenticated) {
      setShowModal(true);
    } else {
      setShowModal(false);
      handleSignMessage(authenticated, user, setToken);    }
  }, [authenticated]);  
  return (
    <Root>
      <Header />
      <Content>
        <Routes key={location.pathname} location={location}>
          <Route path={ROUTES.CHAT.link} element={<ChatScreen />} />
          <Route path={ROUTES.EARN.link} element={<RankingScreen />} />
          <Route path={ROUTES.PORTFOLIO.link} element={<PortfolioScreen />} />
          <Route path="*" element={<ChatScreen />} />
        </Routes>
      </Content>
      <Footer />
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <h2>Welcome to the App</h2>
            <p>Please log in to continue.</p>
            <LoginButton onClick={login}>Login</LoginButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </Root>
  );
};

export default App;
