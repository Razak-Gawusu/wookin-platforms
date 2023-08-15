import styled from "@emotion/styled";
import React from "react";
import { Text, Stack } from "@chakra-ui/react";
import { BaseButton, BaseDropdown } from "../shared";
import { useAgents, useCreateHome, useProperties } from "../../hooks";
import { getAllAgents, getImages } from "../../utils";
export function CreateHome() {
  const [formData, setFormData] = React.useState({});

  const { agents } = useAgents();
  const { properties } = useProperties();

  const onHandleSubmit = () => {
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
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }

  return (
    <Root>
      <Text fontSize={"28px"} fontWeight={600}>
        Add Home
      </Text>
      <form onSubmit={handleSubmit}>
        <div className='form__group'>
          <BaseDropdown
            options={getImages(properties)}
            placeholder='Select Agent'
          />{" "}
        </div>

        <div className='form__group'>
          <BaseDropdown
            options={getAllAgents(agents)}
            placeholder='Select Agent'
          />
        </div>

        <div className='form__group'>
          <input className='input' type='date' placeholder='Enter CreatedAt' />
        </div>
        <BaseButton type={"submit"}>Submit</BaseButton>
      </form>
    </Root>
  );
}

const Root = styled(Stack)`
  padding: 24px;
  gap: 24px;
  width: 350px;

  form {
    width: 100%;
    display: grid;
    gap: 24px;

    .form__group {
      .input {
        padding: 8px;
        border: solid 1px var(--grey-150);
        width: 100%;
        border-radius: 4px;
        height: 45px;
      }
    }
  }

  @media screen and (min-width: 600px) {
    width: 450px;
  }
`;
