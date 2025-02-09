import { AGENT_URL, AGENT_ID } from '../utils/constants';

export async function sendRequest(input: string, userId: string) {
  try {
      const signature = localStorage.getItem("wallet_signature");
      console.log('signature',signature)
      const response = await fetch(`${AGENT_URL}/${AGENT_ID}/message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${signature}`,
        },
        body: JSON.stringify({
          text: input,
          userId: userId,
          userName: "User",
        }),
      });
  
      const data = await response.json();
      
      console.log("Response:", data);
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
}