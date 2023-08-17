import styled from "@emotion/styled";
import {
  BaseButton,
  Search,
  PlusIcon,
  Avatar,
  BurgerMenuIcon,
} from "../shared";
import { Modal } from "../Modal";
import React from "react";
import { Sidebar } from "../Siderbar";
import { Flex } from "@chakra-ui/react";
import { CreateHome } from "../Property";

export function Header() {
  const [showModal, setShowModal] = React.useState(false);
  const ref = React.useRef(null);
  const openMobileNav = () => {
    ref.current.style.width = "100%";
  };
  const closeMobileNav = () => {
    ref.current.style.width = "0";
  };
  return (
    <>
      <Root>
        <h1>Home</h1>

        <Flex
          gap={"16px"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Search placeholder={"search"} />
          <BaseButton
            icon={<PlusIcon />}
            w={"150px"}
            h={"45px"}
            onClick={() => setShowModal(true)}
          >
            New home
          </BaseButton>

          <Avatar
            user={{ firstName: "Kofi", lastName: "Abbey", imageUrl: "" }}
          />
          <button onClick={openMobileNav} className="menu">
            <BurgerMenuIcon />
          </button>
        </Flex>
      </Root>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <CreateHome />
      </Modal>

      <MobileNav className="mobile__nav" ref={ref}>
        <Sidebar mobile closeMenu={closeMobileNav} />
      </MobileNav>
    </>
  );
}

const Root = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 0;

  .menu {
    display: none;
  }
  @media screen and (max-width: 799px) {
    .menu {
      display: block;
    }
  }
  @media screen and (min-width: 800px) {
    padding: 24px;
  }
  justify-content: space-between;
  border-bottom: solid 1px var(--grey-150);
  h1 {
    font-weight: 700;
  }
`;

const MobileNav = styled.div`
  position: absolute;
  height: 100vh;
  width: 0;
  overflow: hidden;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: var(--white);
`;
