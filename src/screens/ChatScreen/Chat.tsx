import styled from "@emotion/styled";
import React, { useState } from "react";
import Button from "../../components/Button";
import { Row } from "../../components/Flex";
import Divider from "../../components/Divider";
import Message from "./Message";
import dayjs from "dayjs";
import {sendRequest} from "../../utils/request";  

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  max-width: calc(1160px + 32px);
  padding: 0 16px;
  @media (min-width: 768px) {
    padding: 0 24px;
  }
`;

const InputPanel = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 16px;
  background-color: #1F1E25;
  border-radius: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 48px;
  padding: 12px;
  box-sizing: border-box;
  background: #1F1E25;
  border: 1px solid #1F1E25;
  border-radius: 8px;
  color: white;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  line-height: 20px;
  resize: none;
  outline: none;

  &:focus {
    border-color: #666DE3;
  }

  &::placeholder {
    color: #A2A2C0;
  }
`;

const MessagesPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  margin-bottom: 16px;
  max-height: calc(100vh - 420px);
  overflow-y: auto;
`;

const Chat: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      address: "HedgeHive AI",
      timestamp: dayjs().format("HH:mm"),
      message: "Hello! How can I assist you?",
      isRight: false
    },
  ]);

  const [input, setInput] = useState("");


  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = {
      address: "user",
      timestamp: dayjs().format("HH:mm"),
      message: input,
      isRight: true,
      hasBackground: true
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    const response =  sendRequest(input)
    if (response.data.reply) {
      const botMessage = {
        address: "HedgeHive AI",
        timestamp: dayjs().format("HH:mm"),
        message: response.data.reply,
        hasBackground: true,
        isRight: true
      };
      setMessages(prev => [...prev, botMessage]);
    };
  };
  return (
    <Root>
      <MessagesPanel>
        {messages.map((message, index) => (
          <Message key={index} {...message} />
        ))}
      </MessagesPanel>
      <InputPanel>
        <TextArea
          placeholder="How can I help you?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
        />
        <Divider style={{ margin: "16px 0" }} />
        <Row alignItems="center" justifyContent="space-between">
          <Row></Row>
          <Button onClick={sendMessage}>Send message</Button>
        </Row>
      </InputPanel>
    </Root>
  );
};

export default Chat;
