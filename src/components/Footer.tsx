import styled from "@emotion/styled";
import React from "react";
import Paragraph from "./Paragraph";
import { Row } from "./Flex";
import SizedBox from "./SizedBox";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  width: calc(100% - 32px);
  max-width: calc(1160px + 32px);
  margin: 0 16px 0;
  text-align: left;

  border-top: 2px #2a2a32 solid;
  padding: 16px;
`;
const Footer: React.FC<IProps> = () => {
  return (
    <Root>
      <Paragraph type="secondary" fitContent>
      Agentic Ethereum, HedgeHive, 2025
      </Paragraph>
      <Row mainAxisSize="fit-content">
        <SizedBox width={20} />
      </Row>
    </Root>
  );
};
export default Footer;
