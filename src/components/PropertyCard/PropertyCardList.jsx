import styled from "@emotion/styled";
import PropTypes from "prop-types";
import PropertyCard from "./PropertyCard";

export function PropertyCardList({ properties }) {
  return (
    <Root>
      {properties.map((property) => {
        return (
          <PropertyCard
            key={property.id}
            propertyImageUrl={property.propertyImageUrl}
            agent={property.agent}
          />
        );
      })}
    </Root>
  );
}

PropertyCardList.propTypes = {
  properties: PropTypes.array,
};

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  justify-items: center;

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1540px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;