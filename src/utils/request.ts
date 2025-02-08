const URL = "http://localhost:5000/api/v1"; 

export const sendRequest = async (data: any) => { 
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      "Authorization": ""
    },
    body: JSON.stringify(data)
  });
  return response.json();
}   