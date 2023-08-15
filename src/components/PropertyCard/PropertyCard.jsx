import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Avatar, MessageIcon, TelephoneIcon, ThreeDotsIcon } from "../index";
import { joinNames } from "../../utils";
import { Stack } from "react-bootstrap";

export default function PropertyCard({ propertyImageUrl, agent }) {
  const { firstName, lastName, level, imageUrl } = agent;
  return (
    <Root>
      <div className='property__image'>
        <img src={propertyImageUrl} alt={propertyImageUrl} />
      </div>
      <div className='agent__info'>
        <Avatar user={{ firstName, lastName, imageUrl }} />

        <Stack color='red' className='agent__info--item'>
          <p className='agent__name'>
            {joinNames({ firstName, lastName, imageUrl })}
          </p>
          <p className='agent__details'>{`Estate Agent ${level || ""}`}</p>
        </Stack>

        <div className='agent__info--item'>
          <TelephoneIcon />
          <MessageIcon />
          <ThreeDotsIcon />
        </div>
      </div>
    </Root>
  );
}

PropertyCard.propTypes = {
  propertyImageUrl: PropTypes.string,
  agent: PropTypes.object,
};

const Root = styled.div`
  padding: 16px;
  border-radius: 12px;
  border: solid 1px var(--grey-100);
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: min(350px, 100%);

  .property__image {
    background-color: var(--grey-200);
    width: 100%;
    height: 215px;
    object-fix: contain;
    border-radius: 12px;
  }

  .agent__info {
    display: flex;
    gap: 8px;

    &--item {
      .agent__name {
        font-weight: 600;
      }

      .agent__details {
        font-size: var(--fs-text-xm);
        color: var(--grey-250);
      }
    }

    &--item: last-of-type {
      color: var(--grey-250);
      display: flex;
      gap: 10px;
      align-items: flex-end;

      .bi {
        cursor: pointer;
        &:hover {
          color: var(--dark);
        }
      }
    }
  }
`;
