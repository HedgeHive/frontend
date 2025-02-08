import React,{ useState} from "react";
import { usePrivy } from "@privy-io/react-auth";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
import Button from "../Button";
import { Column, Row } from "../Flex";
import Banner from "./Banner";

export const ROUTES = {
  CHAT: { title: "Chat", link: "/chat" },
  EARN: { title: "Earn", link: "/earn" },
  PORTFOLIO: { title: "Portfolio", link: "/portfolio" },
};

const Root = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  height: 64px;
  align-items: center;
  max-width: calc(1160px + 32px);
  width: 100%;
  justify-content: space-between;
  color: white;
  background: #1f1e25;
  border-bottom: 1px solid #3b3b46;
  @media (min-width: 768px) {
    padding: 24px;
    border-bottom: 1px solid transparent;
    background: transparent;
    height: 80px;
  }
`;

const Logo = styled.img`
  height: 24px;
  @media (min-width: 768px) {
    height: 32px;
  }
`;

const MenuWrapperDesktop = styled(Row)`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: none;

  & > * {
    margin-right: 8px;
  }

  &:last-of-type {
    margin-right: 0;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

const MenuItem = styled(Button)<{ selected?: boolean }>`
  height: 32px;
  background: ${({ selected }) => (selected ? "#3B3B46" : "transparent")};

  :hover {
    background: #3b3b46;
  }
`;

const WalletInfo = styled.span`
  margin-right: 10px;
`;


const menuItems = Object.values(ROUTES).map((route) => ({
  title: route.title,
  link: route.link,
  routes: [route.link],
}));

const Header: React.FC = () => {
  const location = useLocation();
  const { ready, authenticated, user, login, logout } = usePrivy();
  const [bannerClosed, setBannerClosed] = useState(false);


  if (!ready) {
    return null;
  }

  return (
    <Column crossAxisSize="max" alignItems="center">
      <Banner closed={bannerClosed} setClosed={setBannerClosed} />
      <Root>
        <a href="/">
          <Logo src="/logo.svg" />
        </a>
        <MenuWrapperDesktop>
          {menuItems.map((item, i) => (
            <Link to={item.link} key={i}>
              <MenuItem selected={item.routes.includes(location.pathname)}>
                {item.title}
              </MenuItem>
            </Link>
          ))}
        </MenuWrapperDesktop>
        <Row alignItems="center" mainAxisSize="fit-content">
          {authenticated ? (
            <>
              <WalletInfo>
                    👤{" "}
                    {user?.email ||
                      (user?.wallet?.address
                        ? `${user.wallet.address.slice(0, 3)}...${user.wallet.address.slice(-2)}`
                        : "")}
              </WalletInfo>
              <Button onClick={logout}>Logout</Button>
            </>
          ) : (
            <Button onClick={login}>Connect wallet</Button>
          )}
        </Row>
      </Root>
    </Column>
  );
};

export default Header;
