import styled from "@emotion/styled";
import React, { useState,useRef, useEffect } from "react";
import Button from "../../components/Button";
import { Row } from "../../components/Flex";
import Divider from "../../components/Divider";
import Message from "./Message";
import dayjs from "dayjs";
import { sendRequest } from "../../utils/request";  
import { useChatStore } from "../../store/chatStore"; 
import { praiseMessages } from "../../utils/constants";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  margin-top: 20px;
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
  flex: 2;
  margin-bottom: 16px;
  max-height: calc(100vh - 420px);
  overflow-y: auto;
`;

const Chat: React.FC = () => {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const { messages, addMessage } = useChatStore();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = {
      address: "user",
      timestamp: dayjs().format("HH:mm"),
      message: input,
      isRight: true,
      hasBackground: true
    };

    addMessage(userMessage)
    setInput("");
  
    const response =  await sendRequest(input)
    // TODO change

    if (response[0].text) {
      const botMessage = {
        address: "HedgeHive AI",
        timestamp: dayjs().format("HH:mm"),
        message: response[0].text,
        hasBackground: true,
        isRight: false
      };

      // const botMessage = {
      //   address: "HedgeHive AI",
      //   timestamp: dayjs().format("HH:mm"),
      //   message: praiseMessages[Math.floor(Math.random() * praiseMessages.length)],
      //   hasBackground: true,
      //   isRight: false
      // };
      addMessage(botMessage);
    };
  }

  
  return (
    <Root>
      <MessagesPanel>
        {messages.map((message, index) => (
          <Message key={index} {...message} />
        ))}
        <div ref={messagesEndRef} />
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
