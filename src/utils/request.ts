import { AGENT_SERVER_PORT, AGENT_ID } from '../utils/constants';

export async function sendRequest(input: string) {
  
    try {
      const response = await fetch(`http://localhost:${AGENT_SERVER_PORT}/${AGENT_ID}/message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: input,
        }),
      });
  
      const data = await response.json();
      console.log("Response:", data);
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
}