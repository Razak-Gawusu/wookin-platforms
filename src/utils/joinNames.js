export function joinNames(data) {
  return `${data?.firstName[0].toUpperCase()}${data?.firstName.slice(
    1
  )} ${data?.lastName[0].toUpperCase()}${data?.lastName.slice(1)}`;
}
