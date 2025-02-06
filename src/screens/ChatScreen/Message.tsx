import styled from "@emotion/styled";
import { Row } from "../../components/Flex";
import Paragraph from "../../components/Paragraph";
import SizedBox from "../../components/SizedBox";

const MessageRoot = styled.div<{ isRight?: boolean; hasBackground?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 12px;
  max-width: 80%;
  width: fit-content;
  box-sizing: border-box;
  background-color: ${({ hasBackground }) => hasBackground ? "#1F1E25" : "transparent"};
  border-radius: 16px;
  align-self: ${({ isRight }) => isRight ? "flex-end" : "flex-start"};
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #666DE3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

interface IMessageProps {
  address: string;
  timestamp: string;
  message: string;
  isRight?: boolean;
  hasBackground?: boolean;
}

const Message: React.FC<IMessageProps> = ({
  address,
  timestamp,
  message,
  isRight = false,
  hasBackground = true
}) => {
  return (
    <MessageRoot isRight={isRight} hasBackground={hasBackground}>
      <Row alignItems="center">
        <Avatar />
        <SizedBox width={12} />
        <Paragraph type="secondary">{address} | {timestamp}</Paragraph>
      </Row>
      <Paragraph>{message}</Paragraph>
    </MessageRoot>
  );
}

export default Message;