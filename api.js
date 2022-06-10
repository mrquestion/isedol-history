export const getIdols = async () => {
  const response = await fetch('https://my-json-server.typicode.com/mrquestion/fake-api/idols');
  return await response.json();
};
export const getHistory = async id => {
  const response = await fetch(`https://my-json-server.typicode.com/mrquestion/fake-api/histories`);
  const data = await response.json();
  return data[id];
};
