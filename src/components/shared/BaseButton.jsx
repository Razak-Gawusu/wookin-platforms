import { Button, Spinner } from "@chakra-ui/react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

function BaseButton(props) {
  const { variant, isLoading, icon, w, h, bgColor, borderRadius, ...rest } =
    props;

  return (
    <BaseButtonRoot
      {...rest}
      style={{
        borderRadius,
        width: w ? w : "100%",
        ...(h ? { height: h } : {}),
      }}
      className={`${variant ? variant : "primary"} `}
      backgroundColor={bgColor || "var(--white)"}
      fontSize={"15px"}
    >
      {icon}
      {(isLoading || icon) && (
        <div className={("icon", { loading: isLoading })}>
          {isLoading && <Spinner />}
        </div>
      )}

      {props.children}
    </BaseButtonRoot>
  );
}

BaseButton.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string,
  bgColor: PropTypes.string,
  isLoading: PropTypes.bool,
  icon: PropTypes.any,
  w: PropTypes.string,
  bgHover: PropTypes.string,
  borderRadius: PropTypes.string,
  h: PropTypes.string,
};

const BaseButtonRoot = styled(Button)`
  display: flex;
  grid: 1fr / auto-flow max-content;
  height: 5.2rem;
  color: var(--white);
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 6px;
  transition: all 0.5s ease-out;

  ${({ bgColor, bgHover }) =>
    `
  &.primary {
    background: ${bgColor ? bgColor : "var(--blue)"};
    color: var(--white);
    box-shadow: 0px 5px 20px rgba(129, 245, 75, 0.15);
    border: 1px solid transparent;
  }
    &.outline {
    border: ${bgColor ? `1px solid ${bgColor}` : "1px solid var(--primary)"} ;
    color: ${bgColor ? bgColor : "var(--black)"};
    }
  
    &:hover {
      border: ${bgHover ? `1px solid ${bgHover}` : "1px solid var(--primary)"} ;
      background: ${bgHover ? bgHover : "var(--primary)"} ;
      color: var(--white);
    }

    &:active {
      border: ${bgHover ? `1px solid ${bgHover}` : "1px solid var(--primary)"} ;
      background: ${bgHover ? bgHover : "var(--primary)"};
      color: var(--white);
    }
  `}

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .icon.loading {
    animation: spin 500ms linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { BaseButton };
