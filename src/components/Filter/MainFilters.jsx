import {
  Stack,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Box,
  AccordionButton,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import { BaseButton, Search, CheckboxFilter } from "../index";

export function MainFilter({
  countries,
  types,
  agents,
  expertise,
  handleViewResult,
}) {
  return (
    <Root>
      <Search placeholder={"search"} />
      <Stack className={"filters"} gap={"20px"}>
        <Accordion allowMultiple gap={"24px"}>
          {countries && (
            <AccordionItem border={"none"} p={"10px 0"}>
              <h2>
                <AccordionButton _hover={{ backgroundColor: "var(--blue-50)" }}>
                  <Box
                    as='span'
                    flex='1'
                    textAlign='left'
                    fontSize={"var(--fs-text-lg)"}
                    fontWeight={500}
                  >
                    Choose Country
                  </Box>
                  <AccordionIcon fontSize={"22px"} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <CheckboxFilter
                  filters={countries?.filters}
                  filtered={countries?.filtered}
                  setFiltered={countries?.setFiltered}
                  toggleShowMore={countries?.toggleShowMore}
                  showMore={countries?.showMore}
                  hasShowMore={countries?.hasShowMore}
                />
              </AccordionPanel>
            </AccordionItem>
          )}
          {types && (
            <AccordionItem border={"none"} p={"10px 0"}>
              <h2>
                <AccordionButton _hover={{ backgroundColor: "var(--blue-50)" }}>
                  <Box
                    as='span'
                    flex='1'
                    textAlign='left'
                    fontSize={"var(--fs-text-lg)"}
                    fontWeight={500}
                  >
                    Estate Type
                  </Box>
                  <AccordionIcon fontSize={"22px"} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <CheckboxFilter
                  filters={types?.filters}
                  filtered={types?.filtered}
                  setFiltered={types?.setFiltered}
                  toggleShowMore={types?.toggleShowMore}
                  showMore={types?.showMore}
                  hasShowMore={types?.hasShowMore}
                />
              </AccordionPanel>
            </AccordionItem>
          )}
          {agents && (
            <AccordionItem border={"none"} p={"10px 0"}>
              <h2>
                <AccordionButton _hover={{ backgroundColor: "var(--blue-50)" }}>
                  <Box
                    as='span'
                    flex='1'
                    textAlign='left'
                    fontSize={"var(--fs-text-lg)"}
                    fontWeight={500}
                  >
                    Estate Agent
                  </Box>
                  <AccordionIcon fontSize={"22px"} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <CheckboxFilter
                  filters={agents?.filters}
                  filtered={agents?.filtered}
                  setFiltered={agents?.setFiltered}
                  toggleShowMore={agents?.toggleShowMore}
                  showMore={agents?.showMore}
                  hasShowMore={agents?.hasShowMore}
                />
              </AccordionPanel>
            </AccordionItem>
          )}
          {expertise && (
            <AccordionItem border={"none"} p={"10px 0"}>
              <h2>
                <AccordionButton _hover={{ backgroundColor: "var(--blue-50)" }}>
                  <Box
                    as='span'
                    flex='1'
                    textAlign='left'
                    fontSize={"var(--fs-text-lg)"}
                    fontWeight={500}
                  >
                    Estate Expertise
                  </Box>
                  <AccordionIcon fontSize={"22px"} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <CheckboxFilter
                  filters={expertise?.filters}
                  filtered={expertise?.filtered}
                  setFiltered={expertise?.setFiltered}
                  toggleShowMore={expertise?.toggleShowMore}
                  showMore={expertise?.showMore}
                  hasShowMore={expertise?.hasShowMore}
                />
              </AccordionPanel>
            </AccordionItem>
          )}
        </Accordion>

        <BaseButton
          onClick={() => handleViewResult({ countries, types, agents })}
          data-testid={"view-result"}
        >
          View Result
        </BaseButton>
      </Stack>
    </Root>
  );
}

MainFilter.propTypes = {
  countries: PropTypes.object,
  types: PropTypes.object,
  agents: PropTypes.object,
  expertise: PropTypes.object,
  handleViewResult: PropTypes.func,
};

const Root = styled.div`
  width: 100%;
`;
