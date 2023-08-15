import { instance } from "../api";
export const useProperties = () => {
  const data = instance.get("/properties");
  console.log({ data });
};
