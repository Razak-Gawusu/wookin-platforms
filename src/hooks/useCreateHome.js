import React from "react";

export const useCreateHome = ({ image, agent, created_at }) => {
  React.useEffect(() => {
    fetch("https://ownkey-real-estate-main-3113cd8.d2.zuplo.dev/properties", {
      method: "POST",

      body: JSON.stringify({
        image,
        agent,
        created_at,
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${import.meta.env.VITE_WOOKIN_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
};
