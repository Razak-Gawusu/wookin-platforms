import styled from "@emotion/styled";
import { navData } from "./data";
import { Link } from "react-router-dom";
import { ExitIcon, GearIcon } from "../shared";
import { Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
export function Sidebar({ mobile, closeMenu }) {
  return (
    <Root>
      <Flex>
        <div className='logo'>
          <div className='logo__item'>
            <div></div>
          </div>
        </div>

        {mobile && (
          <div className='close' onClick={closeMenu}>
            Close
          </div>
        )}
      </Flex>

      <nav>
        <div className='nav__item'>
          {navData.map((item) => {
            return (
              <Link key={item.id} to={item.path}>
                <div className='nav__item--link' title={item.label}>
                  {item.src}
                  <p className='link__label'>{item.label}</p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className='nav__item'>
          <div className='nav__item--link' title='Settings'>
            <GearIcon />
            <p className='link__label'>Settings</p>
          </div>
          <div className='nav__item--link' title='Logout'>
            <ExitIcon />
            <p className='link__label'>Logout</p>
          </div>
        </div>
      </nav>
    </Root>
  );
}

Sidebar.propTypes = {
  mobile: PropTypes.bool,
  closeMenu: PropTypes.func,
};

const Root = styled.div`
  position: relative;
  padding: 45px 19px;
  display: flex;
  width: 100%;
  align-items: center;
  height: 100vh;
  border-right: solid 1px var(--grey-150);
  flex-direction: column;
  gap: 46px;
  .logo {
    width: 55px;
    height: 55px;
    background-color: var(--blue-100);
    border-radius: 6px;
    padding: 10px;

    &__item {
      background-color: var(--black);
      width: 100%;
      height: 100%;
      border-radius: 50%;
      position: relative;
      padding: 10px;

      div {
        width: 100%;
        height: 100%;
        transform: rotate(45deg);
        border: solid 3.85px var(--blue-100);
      }
    }
  }

  nav {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .nav__item {
      display: grid;
      gap: 36px;
      a {
        text-decoration: none;
      }
      .nav__item--link {
        display: flex;
        align-items: center;
        gap: 12px;
        color: var(--grey-250);
        &:hover {
          color: var(--dark);
        }
      }
    }
  }

  .close {
    background-color: var(--blue-50);
    display: flex;
    align-items: center;
    position: absolute;
    left: 25px;
    color: var(--black);
    padding: 8px 12px;
    border-radius: 6px;
    &:hover {
      background-color: var(--blue-100);
    }
  }

  @media screen and (min-width: 800px) {
    .link__label {
      display: none;
    }
  }
`;
