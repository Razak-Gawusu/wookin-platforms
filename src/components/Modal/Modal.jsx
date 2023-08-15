import { Box, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Overlay = styled(Flex)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(35, 39, 59, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 12000;
  align-items: center;
  padding: 0 2.4rem;

  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  @media (min-width: 900px) {
    padding: 0;
  }

  .children {
    max-height: 85vh;
    overflow-y: auto;

    ::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }

    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
  }

  .modal_wrapper {
    height: auto;
    display: grid;
    padding: 1.6rem;
    grid-gap: 1.6rem;

    &-wide {
      height: auto;
      display: grid;
      padding: 3.4rem 4.8rem 9.3rem;
      grid-gap: 1.6rem;
      width: 100%;
      @media (min-width: 900px) {
        width: 70rem;
      }
    }
  }
`;

export const Modal = (props) => {
  return (
    <>
      {props.showModal ? (
        <Overlay
          justifyContent={"center"}
          overflowY='auto'
          onClick={(e) =>
            e.target === e.currentTarget ? props.setShowModal(false) : () => {}
          }
        >
          <Box
            width={props?.width || "auto"}
            background='#fff'
            borderRadius={props.bR || "0.4rem"}
            padding={props.padding || "0"}
            className={"children"}
          >
            {props.children}
          </Box>
        </Overlay>
      ) : null}
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.any,
  width: PropTypes.string,
  bR: PropTypes.string,
  padding: PropTypes.string,
  setShowModal: PropTypes.func,
  showModal: PropTypes.bool,
};
