import styled from "@emotion/styled";
import React from "react";
import { Text, Stack } from "@chakra-ui/react";
import { BaseButton } from "../shared";
export function CreateHome() {
  const [formData, setFormData] = React.useState({});

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
          <input type='text' placeholder='Image URL' />
        </div>

        <div className='form__group'>
          <input type='text' placeholder='Agent' />
        </div>

        <div className='form__group'>
          <input type='date' />
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
      input {
        padding: 8px;
        border: solid 1px var(--grey-150);
        width: 100%;
        border-radius: 4px;
        height: 48px;
      }
    }
  }

  @media screen and (min-width: 600px) {
    width: 450px;
  }
`;
