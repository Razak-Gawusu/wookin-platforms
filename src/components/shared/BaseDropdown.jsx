import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";
import Select, { createFilter } from "react-select";
import Async from "react-select/async";

const BaseDropdown = React.forwardRef(
  (
    {
      placeholder,
      label,
      options,
      value,
      onChange,
      border,
      name,
      w,
      h,
      fontSize,
      labelSize,
      color,
      isRequired,
      isDisabled,
      fontW,
      outline,
      creatable,
      async,
      loadOptions,
      defaultOptions,
      clearable,
      ...rest
    },
    ref
  ) => {
    const colourStyles = {
      control: (styles) => ({
        ...styles,
        backgroundColor: "#FFFFFF",
        width: w || "100%",
        height: h || "4.4rem",
        color: "#667085",
        padding: "0 2rem 0 0.6rem",
        border: "1px solid #D0D5DD" || border,
        boxShadow: "none",
        fontSize: fontSize || "1.4rem",
        outline: "none" || outline,
        borderRadius: "0.6rem",
        textTransform: "capitalize",
        cursor: isDisabled ? "not-allowed" : "pointer",
      }),
      placeholder: (styles) => {
        return {
          ...styles,
          color: "#667085",
          fontSize: "var(--fs-text-md)",
        };
      },
      option: (styles, state) => ({
        ...styles,
        backgroundColor: state.isSelected ? "#f4f6f8" : "transparent",
        fontSize: "1.4rem",
        color: "var(--black)",
        textTransform: "capitalize",
      }),
    };
    const isObject = typeof value === "object";
    const valueOptions = isObject
      ? { value }
      : { value: stringToOption(value, options) };

    return (
      <Grid {...rest} gap={"0.6rem"} className='drop-down'>
        {label ? (
          <Text
            color={color}
            fontSize={labelSize || "1.4rem"}
            fontWeight={fontW || "400"}
            as='label'
            position='relative'
          >
            {label}
            {isRequired && (
              <Box as='span' position='absolute' top='0' right='-1rem'>
                *{/* <CgAsterisk color="var(--error)" size="10" /> */}
              </Box>
            )}
          </Text>
        ) : null}
        {async ? (
          <Async
            {...valueOptions}
            menuPosition='fixed'
            classNamePrefix='react-select'
            styles={colourStyles}
            aria-label='my custom select'
            placeholder={placeholder}
            options={options}
            onChange={onChange}
            inputRef={ref}
            ref={ref}
            name={name}
            loadOptions={loadOptions}
            defaultOptions={defaultOptions}
            components={{
              IndicatorSeparator: () => null,
              DropdownIndicator: DropdownIndicator,
            }}
            isClearable={clearable}
            isDisabled={isDisabled}
          />
        ) : null}
        {!creatable && !async ? (
          <Select
            {...valueOptions}
            menuPosition='fixed'
            className='dropdown'
            classNamePrefix='react-select'
            styles={colourStyles}
            aria-label='my custom select'
            placeholder={placeholder}
            options={options}
            onChange={onChange}
            inputRef={ref}
            ref={ref}
            name={name}
            components={{
              IndicatorSeparator: () => null,
              DropdownIndicator: DropdownIndicator,
            }}
            formatOptionLabel={(data) => (
              <Flex
                gap={"0.8rem"}
                className='option-label'
                alignItems={"center"}
              >
                {data.label || data.value}{" "}
                {data.description ? (
                  <span className='option-desc'>{data.description}</span>
                ) : null}
              </Flex>
            )}
            isClearable={clearable}
            isDisabled={isDisabled}
            filterOption={createFilter({
              ignoreCase: true,
              ignoreAccents: true,
              matchFrom: "any",
              stringify: (option) =>
                `${option?.label} ${option?.value} ${option?.data?.dialCode} ${option?.data?.currrency}`,
              trim: true,
            })}
          />
        ) : null}
      </Grid>
    );
  }
);

const stringOrObject = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.object,
]);

BaseDropdown.displayName = "BaseDropdown";
BaseDropdown.propTypes = {
  placeholder: PropTypes.string,
  label: stringOrObject,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: stringOrObject,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.number,
      ]),
    })
  ),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      label: stringOrObject,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.number,
      ]),
    }),
  ]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  w: PropTypes.string,
  h: PropTypes.string,
  fontSize: PropTypes.string,
  border: PropTypes.string,
  labelSize: PropTypes.any,
  color: PropTypes.any,
  isRequired: PropTypes.any,
  isDisabled: PropTypes.any,
  fontW: PropTypes.any,
  outline: PropTypes.any,
  creatable: PropTypes.any,
  async: PropTypes.any,
  loadOptions: PropTypes.any,
  defaultOptions: PropTypes.any,
  clearable: PropTypes.any,
};

function DropdownIndicator() {
  return (
    <svg
      width='12'
      height='8'
      viewBox='0 0 12 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 1.5L6 6.5L11 1.5'
        stroke='#667085'
        strokeWidth='1.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

function stringToOption(value, options = []) {
  if (value) {
    const inOptions = options?.find((option) => option?.value === value);
    return inOptions ?? { label: value, value };
  } else {
    return value;
  }
}

export { BaseDropdown };
