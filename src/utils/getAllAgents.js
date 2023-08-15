export const getAllAgents = (data) => {
  const arr = [];
  if (data == null) return arr;

  for (let agent of data) {
    arr.push({ label: agent.name, value: agent.name });
  }

  return arr;
};
