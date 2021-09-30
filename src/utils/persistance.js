export const getData = () => {
  let data = localStorage.getItem("content");
  data = JSON.parse(data);
  return data || [];
};
export const setData = (data) => {
  console.log(data);
  let persistedData = [];
  persistedData = getData();
  const index = persistedData.findIndex((item) => item.key === data.key);
  if (index < 0) persistedData.push(data);
  else persistedData.splice(index, 1, data);
  localStorage.setItem("content", JSON.stringify(persistedData));
};
