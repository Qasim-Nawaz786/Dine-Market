export const GetData = async (category?: string) => {
  const timestamp = Date.now().toString();
  const queryParams = category
    ? `${category}?timestamp=${timestamp}`
    : `?timestamp=${timestamp}`;

  const apiurl = `http://localhost:3000/api/dine-market${queryParams}`;
  const response = await fetch(apiurl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response;
  });

  const result = await response.json();
  return result;
};
