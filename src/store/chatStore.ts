import { create } from "zustand";
import dayjs from "dayjs";

interface ChatMessage {
  address: string;
  timestamp: string;
  message: string;
  isRight: boolean;
  hasBackground?: boolean;
}

interface ChatState {
  messages: ChatMessage[];
  addMessage: (msg: ChatMessage) => void;
  clearMessages: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [
    {
      address: "HedgeHive AI",
      timestamp: dayjs().format("HH:mm"),
      message: "Hello! How can I assist you?",
      isRight: false,
    },
  ],
  addMessage: (msg) =>
    set((state) => ({ messages: [...state.messages, msg] })),
  clearMessages: () => set(() => ({ messages: [] })),
}));
