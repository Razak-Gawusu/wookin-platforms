import React, { useEffect } from "react";

export const useAgents = () => {
  const [agents, setAgents] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_WOOKIN_KEY}`,
    },
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://ownkey-real-estate-main-3113cd8.d2.zuplo.dev/agents",
      options
    )
      .then((response) => response.json())
      .then((response) => setAgents(response))
      .catch((err) => console.error(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    agents,
    isLoading,
  };
};
