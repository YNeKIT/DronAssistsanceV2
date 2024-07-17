const baseUrl =
  "https://api.telegram.org/bot6689973069:AAHg2YGDcQaghQBO5riU5iAFYzKuA2KjqtE/";

export const sendMessage = async (message) => {
  const url = `${baseUrl}sendMessage?chat_id=-1001752820642&text=${message}`;

  const response = await fetch(url);
  console.log("response", response);
};
