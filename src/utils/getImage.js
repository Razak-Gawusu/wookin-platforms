export const getImages = (data) => {
  const arr = [];
  if (data == null) return arr;

  for (let property of data) {
    arr.push({ label: property.image, value: property.image });
  }

  return arr;
};
