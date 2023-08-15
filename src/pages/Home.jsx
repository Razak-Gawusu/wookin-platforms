import styled from "@emotion/styled";
import {
  BaseDropdown,
  Header,
  PropertyCardList,
  MainFilter,
} from "../components";
import { properties, countries, types, expertise, agents } from "../mocks";
import { useFilters } from "../hooks";
import { Flex, Stack, Text } from "@chakra-ui/react";
export function Home() {
  const {
    filtered: countriesFiltered,
    setFiltered: countriesSetFiltered,
    hasShowMore: countriesHasShowMore,
    showMore: countriesShowMore,
    filters: countriesFilters,
    toggleShowMore: countriesToggleShowMore,
  } = useFilters(countries);
  const {
    filtered: typesFiltered,
    setFiltered: typesSetFiltered,
    hasShowMore: typesHasShowMore,
    showMore: typesShowMore,
    filters: typesFilters,
    toggleShowMore: typesToggleShowMore,
  } = useFilters(types);
  const {
    filtered: expertiseFiltered,
    setFiltered: expertiseSetFiltered,
    hasShowMore: expertiseHasShowMore,
    showMore: expertiseShowMore,
    filters: expertiseFilters,
    toggleShowMore: expertiseToggleShowMore,
  } = useFilters(expertise);
  const {
    filtered: agentsFiltered,
    setFiltered: agentsSetFiltered,
    hasShowMore: agentsHasShowMore,
    showMore: agentsShowMore,
    filters: agentsFilters,
    toggleShowMore: agentsToggleShowMore,
  } = useFilters(agents);

  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer zpka_5f82bcba648243c995e2a0e7e1f7fdf9_73f7f3e0",
    },
  };

  fetch("https://ownkey-real-estate-main-3113cd8.d2.zuplo.dev/agents", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return (
    <Root>
      <Header />

      <div className='main__content'>
        <Stack className='main__content--item'>
          <MainFilter
            countries={{
              filtered: countriesFiltered,
              setFiltered: countriesSetFiltered,
              hasShowMore: countriesHasShowMore,
              showMore: countriesShowMore,
              filters: countriesFilters,
              toggleShowMore: countriesToggleShowMore,
            }}
            agents={{
              filtered: agentsFiltered,
              setFiltered: agentsSetFiltered,
              hasShowMore: agentsHasShowMore,
              showMore: agentsShowMore,
              filters: agentsFilters,
              toggleShowMore: agentsToggleShowMore,
            }}
            types={{
              filtered: typesFiltered,
              setFiltered: typesSetFiltered,
              hasShowMore: typesHasShowMore,
              showMore: typesShowMore,
              filters: typesFilters,
              toggleShowMore: typesToggleShowMore,
            }}
            expertise={{
              filtered: expertiseFiltered,
              setFiltered: expertiseSetFiltered,
              hasShowMore: expertiseHasShowMore,
              showMore: expertiseShowMore,
              filters: expertiseFilters,
              toggleShowMore: expertiseToggleShowMore,
            }}
          />
        </Stack>

        <Stack className='main__content--item'>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Text fontWeight={500}>Showing 9 results</Text>

            <BaseDropdown
              w={"150px"}
              placeholder={"sort by"}
              options={[
                { label: "Price", value: "price" },
                { label: "Availability", value: "availability" },
              ]}
            />
          </Flex>
          <PropertyCardList properties={properties} />
        </Stack>
      </div>
    </Root>
  );
}

const Root = styled.div`
  @media screen and (max-width: 800px) {
    .search__wrapper {
      display: none;
    }
  }
  .main__content {
    display: grid;
    grid-template-columns: 1fr;

    &--item {
      padding: 24px;
      gap: 24px;
    }
    @media screen and (min-width: 800px) {
      grid-template-columns: 275px 1fr;

      &--item {
        &:first-of-type {
          border-right: solid 1px var(--grey-150);
        }
      }
    }
  }
`;
