import styled from "@emotion/styled";
import axios from "axios";
import React from "react";
import { useToastify } from "../../hooks";
import { Text, Stack } from "@chakra-ui/react";
import { BaseButton, BaseDropdown } from "../shared";
import { useAgents, useProperties } from "../../hooks";
import { getAllAgents, getImages } from "../../utils";

export function CreateHome() {
  const { successToast } = useToastify();
  const [formData, setFormData] = React.useState({
    agent: "",
    image: "",
    created_at: "",
  });

  const { agents } = useAgents();
  const { properties } = useProperties();

  const onHandleSubmit = () => {
    axios.post(
      `https://ownkey-real-estate-main-3113cd8.d2.zuplo.dev/properties?apikey=${
        import.meta.env.VITE_WOOKIN_KEY
      }`,
      {
        image: formData.image,
        agent: formData.agent,
        created_at: formData.created_at,
      },
      {
        headers: { Authorization: `Bearer ${import.meta.env.VITE_WOOKIN_KEY}` },
      }
    );
    successToast("home successfully created");
  };

  function handleSubmit(e) {
    e.preventDefault();
    onHandleSubmit();
  }

  return (
    <Root>
      <Text fontSize={"28px"} fontWeight={600}>
        Add Home
      </Text>
      <form onSubmit={handleSubmit}>
        <div className="form__group">
          <BaseDropdown
            options={getImages(properties)}
            placeholder="Select image"
            onChange={(e) =>
              setFormData((prev) => {
                return {
                  ...prev,
                  image: e.value,
                };
              })
            }
          />
        </div>

        <div className="form__group">
          <BaseDropdown
            options={getAllAgents(agents)}
            placeholder="Select Agent"
            onChange={(e) =>
              setFormData((prev) => {
                return {
                  ...prev,
                  agent: e.value,
                };
              })
            }
          />
        </div>

        <div className="form__group">
          <input
            className="input"
            type="date"
            placeholder="Enter CreatedAt"
            onChange={(e) =>
              setFormData((prev) => {
                return {
                  ...prev,
                  created_at: e.target.value,
                };
              })
            }
          />
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
