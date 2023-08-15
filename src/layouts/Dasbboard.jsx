import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";

export function DashboardLayout() {
  return (
    <Root className='container'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <Outlet />
    </Root>
  );
}

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  .sidebar {
    display: none;
  }

  @media screen and (min-width: 860px) {
    grid-template-columns: 100px 1fr;

    .sidebar {
      display: block;
    }
  }
`;
