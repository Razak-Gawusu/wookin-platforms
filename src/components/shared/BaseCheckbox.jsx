import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border: solid 1px var(--grey-200);
    border-radius: 3.5px;
    background-color: inherit;
  }

  &:hover input ~ .checkmark {
    background-color: var(--grey-100);
  }

  input:checked ~ .checkmark {
    background-color: var(--blue);
    border: solid 2px var(--blue);
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 6px;
    top: 2.5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
export function BaseCheckbox({ checked, label }) {
  return (
    <Root>
      <Label>
        <input id={label} type={"checkbox"} checked={checked} />
        <span className='checkmark'></span>
      </Label>

      <label htmlFor={label}>{label}</label>
    </Root>
  );
}

BaseCheckbox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
};

const Root = styled.div`
  display: flex;
`;
