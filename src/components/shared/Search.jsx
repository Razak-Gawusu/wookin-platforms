import { Box, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { SearchIcon } from "./index";
import PropTypes from "prop-types";
const SearchWrapper = styled(Box)`
  width: 25rem;
  max-width: 25rem;
  display: flex;
  align-items: center;
  padding: 1rem 1.4rem;
  background: #ffffff;
  border-radius: 8px;
  gap: 8px;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

  .search {
    path {
      width: 20px;
      height: 20px;
      fill: #667085;
    }
  }
`;

const SearchBox = styled.input`
  width: 100%;
  border: none;
  background: #ffffff;
  outline: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border-radius: 4px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: rgba(51, 55, 88, 0.3);
  }

  :-ms-input-placeholder {
    color: rgba(51, 55, 88, 0.3);
  }
`;

export const Search = (props) => {
  return (
    <Flex className='search__wrapper'>
      <SearchWrapper>
        <Box cursor={"pointer"} className='search'>
          <SearchIcon />
        </Box>

        <SearchBox
          data-testid={"search-input"}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </SearchWrapper>
    </Flex>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
