import { Flex, Stack, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import { BaseCheckbox } from "../index";

export function CheckboxFilter({
  filters,
  toggleShowMore,
  showMore,
  hasShowMore,
  setFiltered,
  filtered,
}) {
  return (
    <Root>
      <Stack>
        <Stack gap={"8px"}>
          {filters?.map((item) => {
            return (
              <Flex
                key={item?.name}
                justifyContent={"space-between"}
                fontSize={"var(--fs-text-sm)"}
              >
                <BaseCheckbox
                  testid={"custom-checkbox"}
                  textColor={"var(--black)"}
                  label={item?.name}
                  labelSize={"var(--fs-text-xm)"}
                  id={item?.name}
                  checked={filtered?.find((f) => f.name === item.name)}
                  onChange={() => setFiltered(item.name)}
                />
                {item?.count}
              </Flex>
            );
          })}
        </Stack>

        {hasShowMore && (
          <Text
            onClick={toggleShowMore}
            className='showMore'
            role='button'
            data-testid={"showMore"}
          >
            {showMore ? "Show Less" : "Show More"}
          </Text>
        )}
      </Stack>
    </Root>
  );
}

CheckboxFilter.propTypes = {
  filters: PropTypes.array,
  showMore: PropTypes.bool,
  label: PropTypes.string,
  toggleShowMore: PropTypes.func,
  search: PropTypes.bool,
  hasShowMore: PropTypes.bool,
  setFiltered: PropTypes.func,
  filtered: PropTypes.array,
};

const Root = styled(Stack)`
  gap: 20px;

  .showMore {
    width: max-content;
    position: relative;
    font-size: 13px;
    cursor: pointer;
    &:hover {
      color: var(--black);
    }
    &::after {
      content: "";
      display: block;
      width: 35%;
      height: 2px;
      position: absolute;
      bottom: -5px;
      left: 0;
      background: var(--black);
      transition: width 0.25s;
    }
    &:hover::after {
      width: 100%;
    }
  }
`;
